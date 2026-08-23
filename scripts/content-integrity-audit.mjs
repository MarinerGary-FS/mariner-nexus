const origin = process.env.QA_ORIGIN ?? "http://localhost:3000";
const cdp = process.env.QA_CDP ?? "http://127.0.0.1:9223";
const widths = [1600, 1440, 1366, 1280, 1100, 1024, 834, 768, 430, 390, 375, 360, 320];
const routes = ["/", "/capabilities", "/work", "/work/undugu", "/approach", "/company", "/start", "/privacy", "/terms"];

async function openTarget(url) {
  return fetch(`${cdp}/json/new?${encodeURIComponent(url)}`, { method: "PUT" }).then((response) => response.json());
}

async function audit(target, width, setupExpression, setupWait = 800, reducedMotion = false) {
  const socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  let id = 0;
  const pending = new Map();
  socket.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    if (!message.id || !pending.has(message.id)) return;
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const messageId = ++id;
    pending.set(messageId, { resolve, reject });
    socket.send(JSON.stringify({ id: messageId, method, params }));
  });
  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width < 600 });
  if (reducedMotion) await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
  await send("Page.navigate", { url: target.url });
  await new Promise((resolve) => setTimeout(resolve, 650));
  await send("Runtime.evaluate", { expression: "document.fonts.ready", awaitPromise: true });
  if (setupExpression) {
    await send("Runtime.evaluate", { expression: setupExpression });
    await new Promise((resolve) => setTimeout(resolve, setupWait));
  }
  const expression = `(() => {
    const selector = 'h1,h2,h3,p,a,button,label,legend,li,dt,dd,.mn-kicker';
    const elements = [...document.querySelectorAll(selector)].filter((element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      let ancestor = element;
      let transparent = false;
      while (ancestor) {
        if (getComputedStyle(ancestor).opacity === '0') { transparent = true; break; }
        ancestor = ancestor.parentElement;
      }
      return style.display !== 'none' && style.visibility !== 'hidden' && !transparent && rect.width > 0 && rect.height > 0 && !element.closest('[aria-hidden="true"],.mn-honeypot,details:not([open])');
    });
    const textRect = (element) => {
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      const rects = [];
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (!node.textContent.trim() || node.parentElement.closest('[aria-hidden="true"],.sr-only,.mn-sr-only,.mn-honeypot')) continue;
        const range = document.createRange();
        range.selectNodeContents(node);
        rects.push(...range.getClientRects());
      }
      if (!rects.length) return element.getBoundingClientRect();
      return {
        left: Math.min(...rects.map((rect) => rect.left)),
        right: Math.max(...rects.map((rect) => rect.right)),
        top: Math.min(...rects.map((rect) => rect.top)),
        bottom: Math.max(...rects.map((rect) => rect.bottom)),
        width: Math.max(...rects.map((rect) => rect.right)) - Math.min(...rects.map((rect) => rect.left)),
        height: Math.max(...rects.map((rect) => rect.bottom)) - Math.min(...rects.map((rect) => rect.top))
      };
    };
    const item = (element) => {
      const rect = textRect(element);
      return { tag: element.tagName.toLowerCase(), text: (element.textContent || '').trim().replace(/\\s+/g, ' ').slice(0, 90), left: rect.left, right: rect.right, top: rect.top + scrollY, bottom: rect.bottom + scrollY };
    };
    const clipped = elements.filter((element) => {
      const rect = textRect(element);
      if (rect.left < -3 || rect.right > document.documentElement.clientWidth + 3) return true;
      let parent = element.parentElement;
      while (parent && parent !== document.body) {
        const style = getComputedStyle(parent);
        if (['hidden', 'clip'].includes(style.overflowX) || ['hidden', 'clip'].includes(style.overflowY)) {
          const boundary = parent.getBoundingClientRect();
          if (rect.left < boundary.left - 3 || rect.right > boundary.right + 3 || rect.top < boundary.top - 3 || rect.bottom > boundary.bottom + 3) return true;
        }
        parent = parent.parentElement;
      }
      return false;
    }).map(item);
    const headings = elements.filter((element) => /^H[1-3]$/.test(element.tagName));
    const collisions = [];
    for (const heading of headings) {
      const a = heading.getBoundingClientRect();
      for (const neighbor of elements) {
        if (neighbor === heading || heading.contains(neighbor) || neighbor.contains(heading)) continue;
        const b = neighbor.getBoundingClientRect();
        const overlapX = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        const overlapY = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        if (overlapX > 4 && overlapY > 4) collisions.push({ heading: item(heading), neighbor: item(neighbor) });
      }
    }
    return { overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth, clipped, collisions: collisions.slice(0, 20) };
  })()`;
  const result = await send("Runtime.evaluate", { expression, returnByValue: true });
  await fetch(`${cdp}/json/close/${target.id}`);
  socket.close();
  return result.result.value;
}

const results = [];
for (const route of routes) {
  for (const width of widths) {
    const target = await openTarget(`${origin}${route}`);
    const result = await audit(target, width);
    results.push({ route, width, ...result });
  }
}

const performanceStates = [
  { width: 1440, state: "wide" },
  { width: 1440, state: "compressing" },
  { width: 1440, state: "intermediate" },
  { width: 1440, state: "reorganizing" },
  { width: 1440, state: "narrow" },
  { width: 1440, state: "settled" },
  { width: 1024, state: "wide" },
  { width: 1024, state: "intermediate" },
  { width: 1024, state: "settled" },
  { width: 390, state: "wide" },
  { width: 390, state: "intermediate" },
  { width: 390, state: "settled" },
];

for (const { width, state } of performanceStates) {
  const target = await openTarget(`${origin}/work/undugu`);
  const result = await audit(target, width, `document.querySelector('.mn-responsive-performance').dataset.performanceState = '${state}'`);
  results.push({ route: "/work/undugu", width, state: `ea-03:${state}`, ...result });
}

const deconstructionStates = [
  ...["intact", "signal", "separation", "relationship", "system", "handoff", "mariner"].map((state) => ({ width: 1440, state })),
  { width: 1024, state: "separation" },
  { width: 1024, state: "system" },
  { width: 390, state: "intact" },
  { width: 390, state: "signal" },
  { width: 390, state: "system" },
  { width: 390, state: "mariner" },
];

for (const { width, state } of deconstructionStates) {
  const target = await openTarget(`${origin}/work/undugu`);
  const setup = `(() => { const root = document.querySelector('.mn-responsive-performance'); root.dataset.deconstructionActive = 'true'; root.dataset.deconstructionState = '${state}'; if (${JSON.stringify(["relationship", "system", "handoff", "mariner"].includes(state))}) root.querySelector('.mn-responsive-canvas-shell').setAttribute('aria-hidden', 'true'); })()`;
  const result = await audit(target, width, setup);
  results.push({ route: "/work/undugu", width, state: `ea-04:${state}`, ...result });
}

const nexusStates = [
  ...["Build something new", "Transform what exists", "Connect the experience", "Explore what’s possible"].flatMap((objective) => [
    { width: 1440, objective, mode: "settled" },
    { width: 1440, objective, mode: "selected" },
  ]),
  { width: 1440, objective: "Transform what exists", mode: "transition" },
  { width: 1440, objective: "Connect the experience", mode: "transition" },
  { width: 1024, objective: "Build something new", mode: "settled" },
  { width: 1024, objective: "Transform what exists", mode: "settled" },
  { width: 1024, objective: "Connect the experience", mode: "selected" },
  { width: 1024, objective: "Explore what’s possible", mode: "settled" },
  { width: 390, objective: "Build something new", mode: "settled" },
  { width: 390, objective: "Transform what exists", mode: "settled" },
  { width: 390, objective: "Connect the experience", mode: "selected" },
  { width: 390, objective: "Explore what’s possible", mode: "settled" },
  { width: 320, objective: "Build something new", mode: "settled" },
  { width: 320, objective: "Explore what’s possible", mode: "selected" },
];

for (const { width, objective, mode } of nexusStates) {
  const target = await openTarget(`${origin}/`);
  const setup = `(() => {
    const root = document.querySelector('.mn-nexus');
    const objectiveButton = [...root.querySelectorAll('.mn-nexus-objectives button')].find((button) => button.textContent.includes(${JSON.stringify(objective)}));
    objectiveButton?.click();
    if (${JSON.stringify(mode === "selected")}) setTimeout(() => root.querySelector('.mn-nexus-node[data-core="true"][data-visible="true"], .mn-nexus-semantic-flow li[data-core="true"] button')?.click(), 30);
    if (${JSON.stringify(mode === "transition")}) setTimeout(() => { root.dataset.nexusPhase = 'reorganizing'; }, 30);
  })()`;
  const result = await audit(target, width, setup, mode === "transition" ? 120 : 800);
  results.push({ route: "/", width, state: `ea-05:${objective}:${mode}`, ...result });
}

const releaseStates = [
  { width: 1440, state: "peak", phase: "peak" },
  { width: 1440, state: "release", phase: "resolving" },
  { width: 1440, state: "light", phase: "released" },
  { width: 1440, state: "possibility", phase: "released" },
  { width: 1440, state: "conversion", phase: "released" },
  { width: 1024, state: "release", phase: "resolving" },
  { width: 1024, state: "conversion", phase: "released" },
  { width: 390, state: "peak", phase: "peak" },
  { width: 390, state: "release", phase: "resolving" },
  { width: 390, state: "possibility", phase: "released" },
  { width: 390, state: "cta", phase: "released" },
  { width: 1440, state: "nexus", phase: "peak", reducedMotion: true },
  { width: 1440, state: "light", phase: "released", reducedMotion: true },
  { width: 390, state: "conversion", phase: "released", reducedMotion: true },
];

for (const { width, state, phase, reducedMotion = false } of releaseStates) {
  const target = await openTarget(`${origin}/`);
  const setup = `document.querySelector('.mn-nexus-resolution').dataset.releasePhase = '${phase}'`;
  const result = await audit(target, width, setup, 300, reducedMotion);
  results.push({ route: "/", width, state: `ea-06:${state}${reducedMotion ? ":reduced" : ""}`, ...result });
}

const failures = results.filter((result) => result.overflow > 1 || result.clipped.length || result.collisions.length);
console.log(JSON.stringify({ audited: results.length, failures, results }, null, 2));
if (failures.length) process.exitCode = 1;
