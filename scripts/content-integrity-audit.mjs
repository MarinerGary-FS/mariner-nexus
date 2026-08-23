const origin = process.env.QA_ORIGIN ?? "http://localhost:3000";
const cdp = process.env.QA_CDP ?? "http://127.0.0.1:9223";
const widths = [1600, 1440, 1366, 1280, 1100, 1024, 834, 768, 430, 390, 375, 360, 320];
const routes = ["/", "/capabilities", "/work", "/work/undugu", "/approach", "/company", "/start", "/privacy", "/terms"];

async function openTarget(url) {
  return fetch(`${cdp}/json/new?${encodeURIComponent(url)}`, { method: "PUT" }).then((response) => response.json());
}

async function audit(target, width) {
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
  await send("Page.navigate", { url: target.url });
  await new Promise((resolve) => setTimeout(resolve, 650));
  const expression = `(() => {
    const selector = 'h1,h2,h3,p,a,button,label,legend,li,dt,dd,.mn-kicker';
    const elements = [...document.querySelectorAll(selector)].filter((element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0 && !element.closest('[aria-hidden="true"],.mn-honeypot,details:not([open])');
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

const failures = results.filter((result) => result.overflow > 1 || result.clipped.length || result.collisions.length);
console.log(JSON.stringify({ audited: results.length, failures, results }, null, 2));
if (failures.length) process.exitCode = 1;
