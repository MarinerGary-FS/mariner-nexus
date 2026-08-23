import { readFile, stat } from "node:fs/promises";
import path from "node:path";

export const COMPATIBILITY = { skillVersion: "1.0.0", kernelSchemaVersion: "1.0.0", bootstrapVersion: "1.0.0" };
export const WDS_STATES = { WDS: "WDS_MODE", PRE_KERNEL: "PRE_KERNEL_MODE", LEGACY: "LEGACY_MODE", INVALID: "INVALID_WDS_STATE" };
const exists = (file) => stat(file).then(() => true, () => false);

export async function detectWdsState(directory, options = {}) {
  const wdsDirectory = path.join(directory, ".wds");
  const manifestFile = path.join(wdsDirectory, "bootstrap-manifest.json");
  const normalizedFile = path.join(wdsDirectory, "normalized-project.json");
  const hasWdsDirectory = await exists(wdsDirectory);
  if (!hasWdsDirectory) return { mode: options.legitimateIntake ? WDS_STATES.PRE_KERNEL : WDS_STATES.LEGACY, blockers: [] };
  if (!(await exists(manifestFile)) || !(await exists(normalizedFile))) return { mode: WDS_STATES.INVALID, blockers: ["WDS STATE INVALID: manifest or normalized project is missing."] };
  try {
    const manifest = JSON.parse(await readFile(manifestFile, "utf8"));
    const kernel = JSON.parse(await readFile(normalizedFile, "utf8"));
    const blockers = compatibilityErrors(manifest);
    if (manifest.projectId !== kernel.project?.identity?.projectId) blockers.push("Project ID differs between manifest and normalized Kernel.");
    return blockers.length ? { mode: WDS_STATES.INVALID, blockers } : { mode: WDS_STATES.WDS, blockers: [], manifest, kernel };
  } catch (caught) {
    return { mode: WDS_STATES.INVALID, blockers: [`WDS STATE INVALID: ${caught instanceof Error ? caught.message : String(caught)}`] };
  }
}

export function compatibilityErrors(manifest) {
  const errors = [];
  if (manifest.kernelSchemaVersion !== COMPATIBILITY.kernelSchemaVersion) errors.push(`Kernel schema ${manifest.kernelSchemaVersion} is incompatible with ${COMPATIBILITY.kernelSchemaVersion}.`);
  if (manifest.bootstrapVersion !== COMPATIBILITY.bootstrapVersion) errors.push(`Bootstrap ${manifest.bootstrapVersion} is incompatible with ${COMPATIBILITY.bootstrapVersion}.`);
  return errors;
}

export function blockingRequiredInput(kernel, relatedTruthIds = []) {
  const relevant = new Set(relatedTruthIds);
  return kernel.truth.records.filter((record) => record.state === "REQUIRED INPUT" && (relevant.size === 0 || relevant.has(record.id)));
}

export function classifyChange(change) {
  const map = { correction: "CORRECTION", content: "CONTENT_REVISION", design: "DESIGN_REVISION", scope: "SCOPE_EXPANSION", architecture: "ARCHITECTURE_CHANGE", postApproval: "POST_APPROVAL_CHANGE" };
  return map[change.kind] ?? "REQUIRED_INPUT";
}

export function evaluateAction(kernel, action) {
  const blockedTruth = blockingRequiredInput(kernel, action.relatedTruthIds ?? []);
  if (blockedTruth.length && action.dependsOnTruth !== false) return { disposition: "BLOCKED_REQUIRED_INPUT", inputOwner: action.inputOwner ?? "CLIENT", items: blockedTruth.map((item) => item.id), safeUnrelatedWork: true };
  if (action.kind === "PRODUCTION_PROMOTION") return action.explicitOwnerAuthorization ? { disposition: "ALLOWED_WITH_DEPLOYMENT_PLAYBOOK", approvalClass: "D" } : { disposition: "BLOCKED_OWNER_PROTECTED", approvalClass: "D" };
  if (action.kind === "RECURRING_COST") return action.explicitOwnerAuthorization ? { disposition: "ALLOWED_AFTER_RECORDED_APPROVAL", approvalClass: "D" } : { disposition: "BLOCKED_OWNER_PROTECTED", approvalClass: "D", mayRecommend: true };
  if (action.kind === "PUBLIC_CASE_STUDY") {
    const authorization = kernel.authorizations.records.find((item) => item.id === action.authorizationRef);
    return authorization?.category === "CASE_STUDY_PUBLICATION" && authorization.state === "APPROVED" ? { disposition: "ALLOWED", approvalClass: "D" } : { disposition: "BLOCKED_AUTHORIZATION", approvalClass: "D" };
  }
  if (action.kind === "HUMAN_IMPACT_REVIEW") return { disposition: "HUMAN_REVIEW_REQUIRED", gate: "IMPACT" };
  if (action.kind === "BROWSER_UNAVAILABLE") return kernel.qa.allowDocumentedNonBlockers && action.risk !== "HIGH" && action.risk !== "CRITICAL" ? { disposition: "DOCUMENTED_NON_BLOCKER", evidence: "Browser was not executed; never report PASS." } : { disposition: "REQUIRED_BEFORE_RELEASE", evidence: "Browser was not executed; never report PASS." };
  if (action.kind === "INTEGRATION") {
    const declared = kernel.integrations.records.some((item) => item.id === action.integrationId);
    return !declared ? { disposition: "NOT_DECLARED" } : action.requiredInCurrentPhase ? { disposition: "IMPLEMENT_PER_REGISTRY" } : { disposition: "DEFER_NOT_CURRENT_PHASE" };
  }
  return { disposition: action.approvalClass === "C" ? "APPROVAL_REQUIRED" : action.approvalClass === "D" ? "BLOCKED_OWNER_PROTECTED" : "ALLOWED", approvalClass: action.approvalClass ?? "A" };
}

export function deriveGates(kernel, request) {
  const universal = ["Engineering", "Truth", "Content Integrity", "Responsive", "Accessibility", "Security", "Release"];
  const conditional = [];
  if (request.includes("signature") || ["A3", "A4"].includes(kernel.project.experience.amplification)) conditional.push("Meaning", "Impact — HUMAN REVIEW REQUIRED", "Advanced interaction");
  if (["HIGH", "CRITICAL"].includes(kernel.project.risk.level)) conditional.push("Elevated risk", "Browser breadth", "Operational failure simulation");
  if (kernel.integrations.records.length && ["CONNECTED_EXPERIENCE", "SIGNATURE_SYSTEM"].includes(kernel.project.delivery.tier)) conditional.push("Integration");
  if (kernel.qa.releaseCertificationRequired || request.includes("release")) conditional.push("Release certification", "Rollback readiness");
  return { universal, conditional: [...new Set(conditional)] };
}

export function controlledAssignment(kernel, request) {
  const gates = deriveGates(kernel, request);
  const unresolved = blockingRequiredInput(kernel);
  const isSignature = request.includes("signature");
  const isRelease = request.includes("release");
  const obligations = ["Use only approved truth and authorized public material.", "Follow the current active plan and project operating rules.", "Collect evidence for every claimed gate result."];
  if (isSignature) obligations.push("Preserve semantic and reduced-motion equivalents; measure performance; do not infer a rendering technology.");
  if (isRelease) obligations.push("Certify the accumulated system, configured browsers, integrations, security, performance, and rollback readiness; do not promote Production.");
  return {
    projectId: kernel.project.identity.projectId,
    mission: request,
    lifecycleStage: kernel.project.delivery.lifecycleStage,
    scope: [request],
    nonGoals: ["Unapproved scope", "Invented truth or creative direction", "Production promotion without explicit owner authorization"],
    authoritativeInputs: ["Validated Kernel", "Project AGENTS.md", "Current active execution plan", "Canonical WDS references"],
    obligations,
    requiredInput: unresolved.map((item) => item.id),
    humanGates: gates.conditional.filter((item) => item.includes("HUMAN REVIEW")),
    automatedGates: [...gates.universal, ...gates.conditional.filter((item) => !item.includes("HUMAN REVIEW"))],
    stopCondition: unresolved.length ? "Stop dependent work at Required Input; continue unrelated safe work." : isRelease ? "Stop after release evidence and owner review; Production remains Owner-Protected." : "Stop at the configured review boundary with evidence.",
  };
}
