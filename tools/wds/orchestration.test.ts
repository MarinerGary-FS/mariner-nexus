import { mkdtemp, mkdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterAll, describe, expect, it } from "vitest";
import { compileBootstrap } from "./bootstrap.mjs";
import { loadKernel } from "./io.mjs";
import { blockingRequiredInput, classifyChange, compatibilityErrors, controlledAssignment, detectWdsState, evaluateAction, WDS_STATES } from "./orchestration.mjs";

const root = await mkdtemp(path.join(tmpdir(), "wds-orchestration-"));
const fixtures = path.join(process.cwd(), "tools/wds/fixtures");
const restrained = await loadKernel(path.join(fixtures, "restrained-professional"));
const immersive = await loadKernel(path.join(fixtures, "immersive-experience"));
const mariner = await loadKernel(path.join(fixtures, "mariner-nexus"));
afterAll(() => rm(root, { recursive: true, force: true }));

describe("WDS state", () => {
  it("detects WDS mode", async () => { const target = path.join(root, "valid"); await compileBootstrap(path.join(fixtures, "restrained-professional"), target); expect((await detectWdsState(target)).mode).toBe(WDS_STATES.WDS); });
  it("detects legitimate pre-Kernel mode", async () => { const target = path.join(root, "pre"); await mkdir(target); expect((await detectWdsState(target, { legitimateIntake: true })).mode).toBe(WDS_STATES.PRE_KERNEL); });
  it("detects Legacy mode", async () => { const target = path.join(root, "legacy"); await mkdir(target); expect((await detectWdsState(target)).mode).toBe(WDS_STATES.LEGACY); });
  it("does not downgrade partial WDS to Legacy", async () => { const target = path.join(root, "invalid"); await mkdir(path.join(target, ".wds"), { recursive: true }); expect((await detectWdsState(target)).mode).toBe(WDS_STATES.INVALID); });
  it("rejects incompatible versions", () => expect(compatibilityErrors({ kernelSchemaVersion: "2.0.0", bootstrapVersion: "9.0.0" })).toHaveLength(2));
});

describe("policy protection scenarios", () => {
  it("allows low-risk autonomous work", () => expect(evaluateAction(restrained, { kind: "IMPLEMENT", approvalClass: "A" }).disposition).toBe("ALLOWED"));
  it("blocks relevant Required Input but permits unrelated work", () => { const kernel = structuredClone(restrained); kernel.truth.records[0].state = "REQUIRED INPUT"; const result = evaluateAction(kernel, { kind: "IMPLEMENT", relatedTruthIds: [kernel.truth.records[0].id] }); expect(result).toMatchObject({ disposition: "BLOCKED_REQUIRED_INPUT", safeUnrelatedWork: true }); expect(blockingRequiredInput(kernel, ["unrelated"])).toHaveLength(0); });
  it("blocks unauthorized public case study", () => expect(evaluateAction(restrained, { kind: "PUBLIC_CASE_STUDY", authorizationRef: "missing" }).disposition).toBe("BLOCKED_AUTHORIZATION"));
  it("blocks Production without owner authority", () => expect(evaluateAction(mariner, { kind: "PRODUCTION_PROMOTION" }).disposition).toBe("BLOCKED_OWNER_PROTECTED"));
  it("allows Production workflow with explicit authority", () => expect(evaluateAction(mariner, { kind: "PRODUCTION_PROMOTION", explicitOwnerAuthorization: true }).disposition).toBe("ALLOWED_WITH_DEPLOYMENT_PLAYBOOK"));
  it("protects recurring cost", () => expect(evaluateAction(restrained, { kind: "RECURRING_COST" })).toMatchObject({ disposition: "BLOCKED_OWNER_PROTECTED", mayRecommend: true }));
  it("strengthens high-risk PII integration obligations", () => expect(controlledAssignment(immersive, "implement signature experience").automatedGates).toContain("Elevated risk"));
  it("does not infer rendering technology for A4", () => expect(controlledAssignment(immersive, "implement signature experience").obligations.join(" ")).toContain("do not infer a rendering technology"));
  it("never reports unavailable browser PASS", () => expect(evaluateAction(restrained, { kind: "BROWSER_UNAVAILABLE", risk: "LOW" }).disposition).toBe("DOCUMENTED_NON_BLOCKER"));
  it("classifies scope expansion", () => expect(classifyChange({ kind: "scope" })).toBe("SCOPE_EXPANSION"));
  it("requires human Impact review", () => expect(evaluateAction(immersive, { kind: "HUMAN_IMPACT_REVIEW" }).disposition).toBe("HUMAN_REVIEW_REQUIRED"));
  it("defers declared integration outside the current phase", () => expect(evaluateAction(immersive, { kind: "INTEGRATION", integrationId: "registration-payment", requiredInCurrentPhase: false }).disposition).toBe("DEFER_NOT_CURRENT_PHASE"));
  it("distinguishes client-provided from verified truth", () => expect(new Set(mariner.truth.records.map((item: { state: string }) => item.state))).toEqual(new Set(["VERIFIED", "CLIENT-PROVIDED"])));
});

describe("three-fixture controlled assignments", () => {
  it("keeps restrained homepage work proportional", () => { const assignment = controlledAssignment(restrained, "build approved homepage foundation"); expect(assignment.automatedGates).not.toContain("Advanced interaction"); expect(assignment.obligations.join(" ")).not.toMatch(/payment|immersive/i); });
  it("requires human review for immersive signature work", () => expect(controlledAssignment(immersive, "implement approved signature experience").humanGates).toContain("Impact — HUMAN REVIEW REQUIRED"));
  it("prepares Mariner release without Production promotion", () => { const assignment = controlledAssignment(mariner, "prepare release certification"); expect(assignment.automatedGates).toContain("Rollback readiness"); expect(assignment.stopCondition).toContain("Production remains Owner-Protected"); });
  it("keeps synthetic assignments free of reference leakage", () => { const text = JSON.stringify([controlledAssignment(restrained, "build approved homepage foundation"), controlledAssignment(immersive, "implement approved signature experience")]); expect(text).not.toMatch(/Mariner|Nexus|Undugu|Mineral Teal|Thread|\/work|2→6→8\.5→10→1→2/i); });
});
