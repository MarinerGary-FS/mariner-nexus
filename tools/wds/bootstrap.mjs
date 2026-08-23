import { createHash } from "node:crypto";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { REGISTER_FILES, serializeJson, serializeTypescript } from "./io.mjs";
import { validateKernel } from "./validate.mjs";

export const BOOTSTRAP_VERSION = "1.0.0";
export const OWNERSHIP = {
  GENERATED: "GENERATED",
  HUMAN: "HUMAN-AUTHORED",
  TRANSFER: "GENERATED-THEN-HUMAN",
};

const header = (ownership) => `<!-- WDS-OWNERSHIP: ${ownership} -->\n`;
const hash = (value) => createHash("sha256").update(value).digest("hex");
const exists = async (file) => stat(file).then(() => true, () => false);
const escapeCell = (value) => String(value ?? "—").replaceAll("|", "\\|").replaceAll("\n", " ");
const table = (headers, rows) => `${headers.map((item) => `| ${item} `).join("")}|\n${headers.map(() => "| --- ").join("")}|\n${rows.map((row) => `${row.map((item) => `| ${escapeCell(item)} `).join("")}|`).join("\n")}\n`;
const title = (value) => String(value).toLowerCase().replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
const list = (items, empty = "None recorded.") => items.length ? items.map((item) => `- ${item}`).join("\n") : empty;

function requiredInput(kernel) {
  const client = kernel.truth.records.filter((item) => item.state === "REQUIRED INPUT").map((item) => `${item.subject}: ${item.statement}`);
  const owner = [
    ...kernel.approvals.records.filter((item) => item.state === "PENDING" && item.class === "D").map((item) => `${item.subject} (${item.id})`),
    ...kernel.authorizations.records.filter((item) => item.state === "PENDING").map((item) => `${title(item.category)} for ${item.scope}`),
  ];
  const technical = kernel.integrations.records.filter((item) => item.verificationState !== "PASS").map((item) => `${item.provider}: ${item.purpose}`);
  return { client, owner, technical };
}

function protectedActions(kernel) {
  const actionRecords = kernel.project.actions.filter((item) => item.approvalClass === "D").map((item) => `${item.type} (${item.id})`);
  const approvals = kernel.approvals.records.filter((item) => item.class === "D" || item.minimumClass === "D").map((item) => `${item.subject} (${item.state})`);
  return [...new Set([...actionRecords, ...approvals])];
}

function checkpoints(kernel) {
  const points = ["Strategy and content", "Core experience", "Release candidate"];
  if (["STRATEGIC_EXPERIENCE", "CONNECTED_EXPERIENCE", "SIGNATURE_SYSTEM"].includes(kernel.project.delivery.tier)) points.splice(1, 0, "Visual foundation");
  if (["A3", "A4"].includes(kernel.project.experience.amplification)) points.splice(-1, 0, "Signature experience");
  if (["CONNECTED_EXPERIENCE", "SIGNATURE_SYSTEM"].includes(kernel.project.delivery.tier) || kernel.integrations.records.length > 1) points.splice(-1, 0, "Integration readiness");
  if (kernel.project.delivery.tier === "SIGNATURE_SYSTEM") points.splice(-1, 0, "Client Preview");
  points.push("Production promotion (Owner-Protected)");
  return points;
}

function discoveryObligations(kernel) {
  const items = ["Confirm the approved objective, audiences, success criteria, and current evidence.", "Resolve the consolidated Required Input queue before dependent approvals."];
  if (kernel.project.identity.publicUrl) items.push("Audit the declared current/public experience without converting observations into unsupported history.");
  if (kernel.project.risk.flags.includes("PAYMENTS")) items.push("Complete payment-provider, data-flow, failure, refund, and legal discovery.");
  if (kernel.project.risk.flags.some((flag) => ["FINANCIAL_CREDIT", "HEALTH_WELLNESS", "LEGAL_REGULATED_CLAIMS"].includes(flag))) items.push("Obtain qualified data/legal review; the system does not infer compliance.");
  if (["A3", "A4"].includes(kernel.project.experience.amplification)) items.push("Research experiential references, semantic fallback, reduced motion, asset readiness, performance budget, and maintenance implications.");
  if (["A0", "A1"].includes(kernel.project.experience.amplification)) items.push("Keep discovery restrained; do not manufacture immersive research or advanced-interaction scope.");
  return items;
}

function currentPlan(kernel, inputs) {
  const stage = kernel.project.delivery.lifecycleStage;
  const obligations = discoveryObligations(kernel);
  const missionByStage = {
    INTAKE: "Complete the initial project record and establish accountable sources.",
    DISCOVERY: "Resolve current-state, audience, operational, and evidence questions.",
    STRATEGY: "Turn approved evidence into a bounded strategy without inventing missing answers.",
    ARCHITECTURE: "Define experience, content, technical, and operational architecture from approved strategy.",
    IMPLEMENTATION: "Implement the approved architecture within declared controls.",
    QA: "Validate the complete project-specific QA manifest and resolve blocking failures.",
    REVIEW: "Conduct consolidated Preview review and classify requested changes.",
    RELEASE_CERTIFICATION: "Certify the accumulated release candidate and rollback readiness.",
    PRODUCTION_READY: "Confirm protected Production approval and immutable release evidence.",
    LAUNCHED: "Complete post-promotion verification and record operational state.",
    HANDOFF: "Transfer accepted operational ownership and close remaining non-blockers.",
  };
  return `${header(OWNERSHIP.TRANSFER)}# Active Plan — ${title(stage)}\n\n## Mission\n\n${missionByStage[stage]}\n\n## Scope\n\n${list(stage === "DISCOVERY" || stage === "INTAKE" ? obligations : ["Perform only the obligations authorized for the current lifecycle stage.", "Preserve truth, authorization, risk, QA, and ownership controls."])}\n\n## Non-goals\n\n- Do not invent creative direction, client copy, pricing, or unapproved scope.\n- Do not advance to a later lifecycle stage implicitly.\n\n## Required input\n\n${list([...inputs.client, ...inputs.owner, ...inputs.technical])}\n\n## Acceptance gates\n\n${list(kernel.qa.requiredGateIds.map((item) => `Complete and record ${item}.`))}\n\n## Evidence required\n\n- Source references and decisions used.\n- Applicable human review and automated validation results.\n- Approval identity for protected decisions.\n\n## Stop condition\n\nStop when this stage's obligations are evidenced and its required approvals are recorded. Generate the next plan only after stage approval.\n`;
}

function renderArtifacts(kernel, brief, generatedAt) {
  const inputs = requiredInput(kernel);
  const protectedItems = protectedActions(kernel);
  const truthRows = kernel.truth.records.map((item) => [item.id, item.subject, item.state, item.publicEligible ? "Eligible" : "Not eligible", item.sourceRef, item.approver]);
  const authRows = kernel.authorizations.records.map((item) => [item.id, title(item.category), item.scope, item.state, item.approver, item.dateRef]);
  const approvalRows = kernel.approvals.records.map((item) => [item.id, `${item.class} — ${item.class === "D" ? "Owner-Protected" : title({ A: "Autonomous", B: "Implement Then Review", C: "Approval Before Implementation" }[item.class])}`, item.minimumClass, item.state, item.approver]);
  const changeRows = kernel.changes.records.map((item) => [item.id, item.classification, item.requestedBy, item.description, item.approvalRequirement, item.status]);
  const browserRows = kernel.qa.browsers.map((item) => [item.browser, item.mode, item.state, item.reason]);
  const integrationRows = kernel.integrations.records.map((item) => [item.provider, item.purpose, item.environments.join(", "), item.owner, item.requiresSecrets ? "Required" : "Not required", item.dataClassification, item.verificationState]);
  const ownershipRows = kernel.project.operations.responsibilities.map((item) => [title(item.area), title(item.owner)]);
  const known = kernel.truth.records.filter((item) => ["VERIFIED", "CLIENT-PROVIDED"].includes(item.state)).map((item) => `[${item.state}] ${item.statement}`);
  const recommendations = kernel.truth.records.filter((item) => item.state === "RECOMMENDED").map((item) => item.statement);
  const constraints = [`Delivery tier: ${title(kernel.project.delivery.tier)}`, `Risk: ${kernel.project.risk.level}`, `Amplification: ${kernel.project.experience.amplification}`, ...kernel.project.risk.requiredReviews.map((item) => `Required review: ${item}`)];
  const generated = new Map();
  const transfer = new Map();
  const human = new Map();
  const add = (map, file, content, ownership) => map.set(file, `${header(ownership)}${content}`);

  add(generated, "AGENTS.md", `# Project Operating Rules\n\n## Project\n\n- ID: \`${kernel.project.identity.projectId}\`\n- Objective: ${kernel.project.objectives.primary}\n- Tier: ${title(kernel.project.delivery.tier)}\n- Risk: ${kernel.project.risk.level}\n- Amplification: ${kernel.project.experience.amplification}\n- Lifecycle: ${title(kernel.project.delivery.lifecycleStage)}\n\n## Non-negotiable controls\n\n- Canonical YAML and its validated normalized artifact govern structured project facts.\n- Do not convert inferred, recommended, Required Input, or prohibited material into public facts.\n- Absence of authorization is not approval.\n- Never downgrade an approval class.\n- Validate against the project QA manifest; automation supplies evidence, not human approval.\n- Do not invent identity, layouts, copy, pricing, integrations, credentials, or scope.\n- Production promotion is D — Owner-Protected.\n\n## Protected actions\n\n${list(protectedItems)}\n\n## Stop conditions\n\nStop for blocking truth input, missing authorization, failed mandatory QA, ambiguous operational ownership, protected approval, or a requested scope/architecture change.\n`, OWNERSHIP.GENERATED);
  add(generated, "docs/project/README.md", `# ${kernel.project.identity.projectName} — Project Authority\n\nThis directory renders validated project governance. Canonical structured sources remain the WDS YAML files; generated Markdown is a reviewable view, not a duplicate authority.\n\n- Current stage: ${title(kernel.project.delivery.lifecycleStage)}\n- Review environment: Vercel Preview\n- Active plan: \`docs/exec-plans/active/current-stage.md\`\n- Required Input: \`docs/project/required-input.md\`\n`, OWNERSHIP.GENERATED);
  add(generated, "docs/project/brief.md", `# Normalized Project Brief\n\n## Human-authored brief\n\n${brief.trim()}\n\n## Known\n\n${list(known)}\n\n## Required Input\n\n${list(inputs.client)}\n\n## Recommendations\n\n${list(recommendations)}\n\n## Constraints\n\n${list(constraints)}\n`, OWNERSHIP.GENERATED);
  add(generated, "docs/project/truth-register.md", `# Truth Register\n\n${table(["ID", "Subject", "State", "Public use", "Source", "Approver"], truthRows)}\nCanonical source: \`truth-register.yaml\`.\n`, OWNERSHIP.GENERATED);
  add(generated, "docs/project/authorization-register.md", `# Authorization Register\n\n${table(["ID", "Category", "Scope", "State", "Approver", "Reference"], authRows)}\nUnknown or absent authorization remains blocked. Canonical source: \`authorization-register.yaml\`.\n`, OWNERSHIP.GENERATED);
  add(generated, "docs/project/approval-register.md", `# Approval Register\n\n${table(["ID", "Class", "Minimum", "State", "Approver"], approvalRows)}\n\n## Protected actions\n\n${list(protectedItems)}\n`, OWNERSHIP.GENERATED);
  add(generated, "docs/project/change-register.md", `# Change Register\n\n${table(["ID", "Classification", "Requested by", "Description", "Approval", "Status"], changeRows)}\n\nFuture changes must use CORRECTION, CONTENT_REVISION, DESIGN_REVISION, SCOPE_EXPANSION, ARCHITECTURE_CHANGE, or POST_APPROVAL_CHANGE. Update canonical YAML rather than editing this generated view.\n`, OWNERSHIP.GENERATED);
  add(generated, "docs/project/required-input.md", `# Required Input Queue\n\n## Client Input Required\n\n${list(inputs.client)}\n\n## Owner Input Required\n\n${list(inputs.owner)}\n\n## Technical Input Required\n\n${list(inputs.technical)}\n\nResolve items in canonical Kernel sources; do not mark this generated view complete manually.\n`, OWNERSHIP.GENERATED);
  add(human, "docs/project/decisions.md", `# Project Decision Log\n\nRecord material decisions only.\n\n## Record format\n\n- ID:\n- Date:\n- Decision:\n- Rationale:\n- Alternatives:\n- Consequence:\n- Approval:\n- Reversibility:\n`, OWNERSHIP.HUMAN);
  add(generated, "docs/strategy/discovery.md", `# Discovery Obligations\n\n${list(discoveryObligations(kernel))}\n`, OWNERSHIP.GENERATED);
  add(generated, "docs/strategy/objectives-and-audience.md", `# Approved Objectives and Audience\n\n## Primary objective\n\n${kernel.project.objectives.primary}\n\n## Supporting objectives\n\n${list(kernel.project.objectives.supporting)}\n\n## Success criteria\n\n${list(kernel.project.objectives.successCriteria)}\n\n## Primary audience\n\n${kernel.project.audiences.primary}\n\n## Secondary audiences\n\n${list(kernel.project.audiences.secondary)}\n\n## Questions not answered by configuration\n\n- What must the visitor understand before acting?\n- Which assumptions still require human validation?\n- What evidence best supports the approved objective?\n`, OWNERSHIP.GENERATED);
  if (["A3", "A4"].includes(kernel.project.experience.amplification)) add(generated, "docs/strategy/experiential-research.md", `# Experiential Research Obligations\n\n- Test reference directions against the approved objective and emotional goals.\n- Define semantic and reduced-motion equivalents before implementation.\n- Establish asset readiness, performance budget, responsive choreography, and maintenance boundaries.\n- Human review decides whether the experience is meaningful and appropriate.\n`, OWNERSHIP.GENERATED);
  add(transfer, "docs/exec-plans/active/current-stage.md", currentPlan(kernel, inputs).replace(header(OWNERSHIP.TRANSFER), ""), OWNERSHIP.TRANSFER);
  add(generated, "docs/qa/manifest.md", `# QA Manifest\n\n- Content Integrity required: ${kernel.qa.contentIntegrity ? "Yes" : "No"}\n- Release certification required: ${kernel.qa.releaseCertificationRequired ? "Yes" : "No"}\n- Documented browser non-blockers permitted: ${kernel.qa.allowDocumentedNonBlockers ? "Yes, with rationale" : "No"}\n\n${table(["Gate", "Category", "State", "Required"], kernel.qa.gates.map((item) => [item.id, item.category, item.state, kernel.qa.requiredGateIds.includes(item.id) ? "Yes" : "No"]))}\n`, OWNERSHIP.GENERATED);
  add(generated, "docs/qa/browser-matrix.md", `# Browser and Responsive Matrix\n\n${table(["Browser", "Mode", "State", "Reason"], browserRows)}\n\n## Responsive widths\n\n${list(kernel.qa.responsiveMatrix.map((width) => `${width}px — classify as mobile, tablet, desktop, or intermediate during review.`))}\n`, OWNERSHIP.GENERATED);
  add(transfer, "docs/qa/content-integrity.md", `# Content Integrity Scaffold\n\nDeclare project-specific checks as implementation emerges. The final count comes from scope.\n\n| Route | Critical headings | Controls | Responsive states | Identity states | Dynamic states |\n| --- | --- | --- | --- | --- | --- |\n`, OWNERSHIP.TRANSFER);
  add(generated, "docs/qa/accessibility.md", `# Accessibility Obligations\n\n${list(kernel.qa.accessibilityRequirements)}\n\nAutomated results are evidence; keyboard, focus, reading order, motion, comprehension, and responsive usability require human review.\n`, OWNERSHIP.GENERATED);
  if (["HIGH", "CRITICAL"].includes(kernel.project.risk.level)) add(generated, "docs/qa/high-risk-review.md", `# Elevated Risk Review\n\nRisk level: ${kernel.project.risk.level}\n\n${list(kernel.project.risk.requiredReviews)}\n\nQualified legal/regulatory interpretation remains Required Input where applicable.\n`, OWNERSHIP.GENERATED);
  if (["A3", "A4"].includes(kernel.project.experience.amplification)) add(generated, "docs/qa/advanced-experience.md", `# Advanced Experience QA\n\n- Verify semantic and reduced-motion equivalents.\n- Test initialization failure and intermediate widths.\n- Inspect interaction performance and input response.\n- Require human Meaning and Impact review.\n`, OWNERSHIP.GENERATED);
  if (kernel.qa.releaseCertificationRequired) add(generated, "docs/qa/release-gates.md", `# Release Certification Gates\n\n${list(kernel.qa.requiredGateIds.map((item) => `${item}: must be PASS before release unless doctrine permits a specifically approved exception.`))}\n`, OWNERSHIP.GENERATED);
  add(generated, "docs/operations/ownership.md", `# Operational Ownership\n\n${table(["Responsibility", "Owner"], ownershipRows)}\n\nAmbiguous ownership blocks launch and handoff. No maintenance package or price is implied.\n`, OWNERSHIP.GENERATED);
  if (kernel.integrations.records.length) add(generated, "docs/operations/integrations.md", `# Integration Obligations\n\n${table(["Provider", "Purpose", "Environments", "Owner", "Secrets", "Data", "Verification"], integrationRows)}\n\n## Failure and fallback\n\n${list(kernel.integrations.records.map((item) => `${item.provider}: ${item.failureBehavior} Fallback: ${item.fallback}`))}\n\nThis plan does not configure or implement providers.\n`, OWNERSHIP.GENERATED);
  if (kernel.project.risk.flags.includes("PAYMENTS")) add(generated, "docs/operations/payment-readiness.md", `# Payment Readiness\n\n- Confirm provider ownership, environments, data boundaries, failure/retry behavior, refund responsibilities, and qualified legal input.\n- Verify payment flows without storing forbidden credentials or payment data in project output.\n`, OWNERSHIP.GENERATED);
  add(generated, "docs/operations/environment.md", `# Environment Plan\n\n${list(kernel.integrations.records.map((item) => `${item.provider}: ${item.requiresSecrets ? "secret variables required" : "no secrets declared"}; environments ${item.environments.join(", ")}; owner ${item.owner}.`))}\n\nPreview and Production values remain isolated. Record variable names only when known; never place values, tokens, or private keys here.\n`, OWNERSHIP.GENERATED);
  add(transfer, "docs/operations/launch-checklist.md", `# Launch Checklist\n\n${list(["Confirm truthful content and public authorization.", ...kernel.qa.requiredGateIds.map((item) => `Record PASS for ${item}.`), ...kernel.qa.requiredBrowserIds.map((item) => `Resolve browser coverage ${item}.`), ...kernel.integrations.records.map((item) => `Verify ${item.provider} operational behavior and owner.`), "Record immutable release candidate and rollback target.", "Obtain D — Owner-Protected Production promotion approval."])}\n`, OWNERSHIP.TRANSFER);
  add(transfer, "docs/operations/rollback-plan.md", `# Rollback Plan\n\n## Record before launch\n\n- Hosting/deployment provider: ${kernel.project.operations.hosting}\n- Approved release candidate: REQUIRED INPUT\n- Production deployment/alias: REQUIRED INPUT\n- Approved rollback target: REQUIRED INPUT\n- Recovery verifier and owner: REQUIRED INPUT\n\nStop on a launch-blocking defect, record it, restore the approved target, verify recovery, and avoid live improvisational fixes.\n`, OWNERSHIP.TRANSFER);
  add(generated, "docs/project/review-protocol.md", `# Review Protocol\n\n- Environment: Vercel Preview\n- Current stage: ${title(kernel.project.delivery.lifecycleStage)}\n- Reviewing: current-stage deliverables and declared acceptance gates\n- Not yet final: unapproved later-stage work and unresolved Required Input\n- Feedback: consolidate into one internal record before implementation\n- Change classes: CORRECTION, CONTENT_REVISION, DESIGN_REVISION, SCOPE_EXPANSION, ARCHITECTURE_CHANGE, POST_APPROVAL_CHANGE\n\n## Approval checkpoints\n\n${list(checkpoints(kernel))}\n\nHuman Review Required. This document cannot manufacture an approval.\n`, OWNERSHIP.GENERATED);
  generated.set(".wds/normalized-project.json", serializeJson(kernel));
  generated.set(".wds/generated-project.ts", serializeTypescript(kernel));
  return { generated, transfer, human, inputs, generatedAt };
}

async function sourceHashes(sourceDirectory) {
  const files = ["project.yaml", ...Object.values(REGISTER_FILES), "docs/project-brief.md"];
  return Object.fromEntries(await Promise.all(files.map(async (file) => [file, hash(await readFile(path.join(sourceDirectory, file), "utf8"))])));
}

function manifestFor(kernel, artifacts, sources, generatedAt) {
  const records = [];
  for (const [ownership, map] of [[OWNERSHIP.GENERATED, artifacts.generated], [OWNERSHIP.TRANSFER, artifacts.transfer], [OWNERSHIP.HUMAN, artifacts.human]]) {
    for (const [file, content] of map) records.push({ path: file, ownership, hash: hash(content) });
  }
  records.sort((a, b) => a.path.localeCompare(b.path));
  records.push({ path: ".wds/bootstrap-manifest.json", ownership: OWNERSHIP.GENERATED, hash: null });
  return {
    wdsVersion: "0.3.0",
    kernelSchemaVersion: kernel.project.schemaVersion,
    bootstrapVersion: BOOTSTRAP_VERSION,
    projectId: kernel.project.identity.projectId,
    generatedAt,
    lifecycleStage: kernel.project.delivery.lifecycleStage,
    sourceHashes: sources,
    artifacts: records,
  };
}

async function previousManifest(target) {
  try { return JSON.parse(await readFile(path.join(target, ".wds/bootstrap-manifest.json"), "utf8")); } catch { return null; }
}

function assertBootstrapReady(kernel) {
  const validation = validateKernel(kernel);
  if (!validation.valid) throw new Error(`KERNEL_INVALID\n${validation.errors.map((item) => `[${item.code}] ${item.message}`).join("\n")}`);
  const blockingTruth = kernel.truth.records.filter((item) => item.state === "REQUIRED INPUT");
  if (["IMPLEMENTATION", "QA", "REVIEW", "RELEASE_CERTIFICATION", "PRODUCTION_READY", "LAUNCHED", "HANDOFF"].includes(kernel.project.delivery.lifecycleStage) && blockingTruth.length) throw new Error(`BLOCKING_REQUIRED_INPUT\n${blockingTruth.map((item) => item.id).join("\n")}`);
}

export async function compileBootstrap(sourceDirectory, target, options = {}) {
  const { loadKernel } = await import("./io.mjs");
  const kernel = await loadKernel(sourceDirectory);
  assertBootstrapReady(kernel);
  const brief = await readFile(path.join(sourceDirectory, "docs/project-brief.md"), "utf8");
  const previous = await previousManifest(target);
  const generatedAt = previous?.generatedAt ?? options.now ?? new Date().toISOString();
  const artifacts = renderArtifacts(kernel, brief, generatedAt);
  const sources = await sourceHashes(sourceDirectory);
  const manifest = manifestFor(kernel, artifacts, sources, generatedAt);
  const previousByPath = new Map((previous?.artifacts ?? []).map((item) => [item.path, item]));
  const created = [], regenerated = [], preserved = [];
  const directories = ["docs/exec-plans/completed", "docs/exec-plans/review-assets", "docs/evidence/sources", "docs/evidence/approvals", "docs/evidence/client-input"];
  for (const directory of directories) await mkdir(path.join(target, directory), { recursive: true });
  for (const [ownership, map] of [[OWNERSHIP.GENERATED, artifacts.generated], [OWNERSHIP.TRANSFER, artifacts.transfer], [OWNERSHIP.HUMAN, artifacts.human]]) {
    for (const [relative, content] of map) {
      const file = path.join(target, relative);
      await mkdir(path.dirname(file), { recursive: true });
      if (await exists(file)) {
        if (ownership !== OWNERSHIP.GENERATED) { preserved.push(relative); continue; }
        const prior = previousByPath.get(relative);
        const current = await readFile(file, "utf8");
        if (!prior || prior.hash !== hash(current)) throw new Error(`OWNERSHIP_CONFLICT\nRefusing to overwrite modified generated file: ${relative}`);
        if (current !== content) { await writeFile(file, content); regenerated.push(relative); } else preserved.push(relative);
      } else { await writeFile(file, content); created.push(relative); }
    }
  }
  await mkdir(path.join(target, ".wds"), { recursive: true });
  await writeFile(path.join(target, ".wds/bootstrap-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  return { kernel, manifest, created, regenerated, preserved, directories, requiredInput: artifacts.inputs, protectedActions: protectedActions(kernel) };
}

export async function checkBootstrap(sourceDirectory, target) {
  const { loadKernel } = await import("./io.mjs");
  const kernel = await loadKernel(sourceDirectory);
  assertBootstrapReady(kernel);
  const previous = await previousManifest(target);
  if (!previous) return { valid: false, errors: ["BOOTSTRAP_MANIFEST_MISSING"] };
  const brief = await readFile(path.join(sourceDirectory, "docs/project-brief.md"), "utf8");
  const artifacts = renderArtifacts(kernel, brief, previous.generatedAt);
  const sources = await sourceHashes(sourceDirectory);
  const expectedManifest = manifestFor(kernel, artifacts, sources, previous.generatedAt);
  const errors = [];
  if (JSON.stringify(previous) !== JSON.stringify(expectedManifest)) errors.push("BOOTSTRAP_MANIFEST_DRIFT");
  for (const map of [artifacts.generated, artifacts.transfer, artifacts.human]) {
    for (const [relative, content] of map) {
      const file = path.join(target, relative);
      if (!(await exists(file))) { errors.push(`MISSING:${relative}`); continue; }
      if (artifacts.generated === map && hash(await readFile(file, "utf8")) !== hash(content)) errors.push(`GENERATED_DRIFT:${relative}`);
    }
  }
  return { valid: errors.length === 0, errors };
}
