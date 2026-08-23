import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const schema = JSON.parse(await readFile(path.join(here, "schema/project-kernel.schema.json"), "utf8"));
const ajv = new Ajv2020({ allErrors: true, strict: true, allowUnionTypes: true });
const validateShape = ajv.compile(schema);

const error = (code, message, path = "") => ({ code, message, path });
const byId = (records = []) => new Map(records.map((record) => [record.id, record]));
const approved = (record) => record?.state === "APPROVED";

export function validateSemantics(kernel) {
  const errors = [];
  const truth = byId(kernel.truth.records);
  const authorizations = byId(kernel.authorizations.records);
  const approvals = byId(kernel.approvals.records);
  const gates = byId(kernel.qa.gates);
  const browser = byId(kernel.qa.browsers);

  for (const record of kernel.truth.records) {
    if (record.state === "PROHIBITED CLAIM" && record.publicEligible) errors.push(error("TRUTH_PROHIBITED_PUBLIC", `${record.id} is prohibited and cannot be public.`));
    if (record.state === "REQUIRED INPUT" && record.publicEligible) errors.push(error("TRUTH_INPUT_PUBLIC", `${record.id} requires input and cannot be public.`));
    if (record.state === "INFERRED" && record.publicEligible) errors.push(error("TRUTH_INFERRED_PUBLIC", `${record.id} is inferred and cannot automatically be public.`));
    if (record.publicEligible && !["VERIFIED", "CLIENT-PROVIDED"].includes(record.state)) errors.push(error("TRUTH_PUBLIC_STATE", `${record.id} has an ineligible public truth state.`));
  }

  for (const route of kernel.project.routes.public) {
    for (const truthId of route.truthRefs ?? []) {
      const record = truth.get(truthId);
      if (!record?.publicEligible) errors.push(error("ROUTE_TRUTH_UNAUTHORIZED", `${route.path} references non-public truth ${truthId}.`));
    }
    if (route.kind === "CASE_STUDY") {
      const auth = authorizations.get(route.authorizationRef);
      if (route.publicationState === "PUBLISHED" && !(auth?.category === "CASE_STUDY_PUBLICATION" && approved(auth))) errors.push(error("CASE_STUDY_AUTH_REQUIRED", `${route.path} is published without approved case-study authorization.`));
    }
    if (route.publicationState !== "PUBLISHED" && route.sitemapEligible) errors.push(error("PRIVATE_SITEMAP", `${route.path} is not published and cannot enter the sitemap.`));
  }

  for (const action of kernel.project.actions) {
    if (action.type === "PRODUCTION_PROMOTION" && action.approvalClass !== "D") errors.push(error("PRODUCTION_OWNER_PROTECTED", `${action.id} must use approval class D.`));
  }

  for (const integration of kernel.integrations.records) {
    if (integration.recurringCost && !approved(approvals.get(integration.ownerApprovalRef))) errors.push(error("PAID_SERVICE_APPROVAL", `${integration.id} requires explicit owner approval.`));
    if (integration.requiresSecrets && (!integration.environmentHandling || integration.environmentHandling.length === 0)) errors.push(error("SECRET_ENVIRONMENT_REQUIRED", `${integration.id} requires environment handling.`));
    if (integration.collectsData && (!integration.dataClassification || !integration.owner)) errors.push(error("DATA_GOVERNANCE_REQUIRED", `${integration.id} must declare data classification and owner.`));
  }

  const requiredGateIds = new Set(kernel.qa.requiredGateIds);
  if (kernel.project.risk.level === "CRITICAL") {
    for (const id of ["release-certification", "security", "accessibility", "integration-failure"]) {
      if (!requiredGateIds.has(id) && !approved(approvals.get(kernel.qa.criticalRiskOverrideApprovalRef))) errors.push(error("CRITICAL_QA_INSUFFICIENT", `Critical risk requires ${id} or an approved override.`));
    }
  }

  if (kernel.project.experience.amplification === "A4" && kernel.project.experience.requiredRenderingTechnology) errors.push(error("A4_TECH_COUPLING", "A4 amplification cannot automatically require a rendering technology."));

  const allowedBrowserStates = new Set(["PASS", "FAIL", "PENDING", "NOT_APPLICABLE", "DOCUMENTED_NON_BLOCKER"]);
  for (const id of kernel.qa.requiredBrowserIds) {
    const coverage = browser.get(id);
    if (!coverage || !allowedBrowserStates.has(coverage.state)) errors.push(error("BROWSER_COVERAGE_MISSING", `Required browser ${id} is unresolved.`));
    if (coverage?.state === "DOCUMENTED_NON_BLOCKER" && (!coverage.reason || !kernel.qa.allowDocumentedNonBlockers)) errors.push(error("BROWSER_NONBLOCKER_INVALID", `${id} non-blocker is not permitted and documented.`));
  }

  for (const area of kernel.project.operations.responsibilities) {
    if (!area.owner || area.owner === "UNASSIGNED") errors.push(error("OPERATIONS_OWNER_REQUIRED", `${area.area} requires an operational owner.`));
  }

  if (["PRODUCTION_READY", "LAUNCHED", "HANDOFF"].includes(kernel.project.delivery.lifecycleStage)) {
    for (const id of kernel.project.delivery.requiredApprovalIds) if (!approved(approvals.get(id))) errors.push(error("PRODUCTION_APPROVAL_MISSING", `Production readiness requires approval ${id}.`));
    for (const id of kernel.qa.requiredGateIds) if (gates.get(id)?.state !== "PASS") errors.push(error("PRODUCTION_GATE_INCOMPLETE", `Production readiness requires passing gate ${id}.`));
  }

  for (const approval of kernel.approvals.records) {
    if (approval.minimumClass && approval.class < approval.minimumClass) errors.push(error("APPROVAL_DOWNGRADE", `${approval.id} is below its minimum approval class.`));
    for (const truthId of approval.dependsOnTruth ?? []) if (truth.get(truthId)?.state === "REQUIRED INPUT" && approval.state === "APPROVED") errors.push(error("APPROVAL_DEPENDS_ON_INPUT", `${approval.id} cannot be approved while ${truthId} requires input.`));
  }

  return errors;
}

export function validateKernel(kernel) {
  const valid = validateShape(kernel);
  const shapeErrors = valid ? [] : validateShape.errors.map((item) => error("SCHEMA", `${item.instancePath || "/"} ${item.message}`, item.instancePath));
  const semanticErrors = valid ? validateSemantics(kernel) : [];
  return { valid: shapeErrors.length === 0 && semanticErrors.length === 0, errors: [...shapeErrors, ...semanticErrors] };
}
