import { appendFile, cp, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import YAML from "yaml";
import { afterAll, describe, expect, it } from "vitest";
import { checkBootstrap, compileBootstrap } from "./bootstrap.mjs";

const fixturesRoot = path.join(process.cwd(), "tools/wds/fixtures");
const testRoot = await mkdtemp(path.join(tmpdir(), "wds-bootstrap-tests-"));
let sequence = 0;
const target = (label: string) => path.join(testRoot, `${++sequence}-${label}`);
const fixture = (name: string) => path.join(fixturesRoot, name);

afterAll(async () => {
  await rm(testRoot, { recursive: true, force: true });
});

async function mutableFixture(name = "restrained-professional") {
  const destination = target(`source-${name}`);
  await cp(fixture(name), destination, { recursive: true });
  return destination;
}

// YAML fixture mutation is intentionally dynamic in negative tests.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function mutateYaml(directory: string, file: string, mutate: (value: any) => void) {
  const location = path.join(directory, file);
  const value = YAML.parse(await readFile(location, "utf8"));
  mutate(value);
  await writeFile(location, YAML.stringify(value));
}

async function outputFiles(directory: string) {
  return (await readdir(directory, { recursive: true })).filter((file) => !file.endsWith(".DS_Store"));
}

describe("portable proportional bootstrap", () => {
  it.each(["mariner-nexus", "restrained-professional", "immersive-experience"])("bootstraps %s with the same compiler", async (name) => {
    const result = await compileBootstrap(fixture(name), target(name), { now: "2026-01-01T00:00:00.000Z" });
    expect(result.manifest.projectId).toBeTruthy();
    expect(result.created.length).toBeGreaterThan(0);
  });

  it("produces materially simpler restrained output", async () => {
    const restrained = target("restrained-difference");
    const immersive = target("immersive-difference");
    await compileBootstrap(fixture("restrained-professional"), restrained, { now: "2026-01-01T00:00:00.000Z" });
    await compileBootstrap(fixture("immersive-experience"), immersive, { now: "2026-01-01T00:00:00.000Z" });
    const restrainedFiles = await outputFiles(restrained);
    const immersiveFiles = await outputFiles(immersive);
    expect(restrainedFiles).not.toContain("docs/strategy/experiential-research.md");
    expect(restrainedFiles).not.toContain("docs/qa/advanced-experience.md");
    expect(restrainedFiles).not.toContain("docs/operations/payment-readiness.md");
    expect(immersiveFiles).toContain("docs/strategy/experiential-research.md");
    expect(immersiveFiles).toContain("docs/qa/advanced-experience.md");
    expect(immersiveFiles).toContain("docs/operations/payment-readiness.md");
    expect(immersiveFiles.length).toBeGreaterThan(restrainedFiles.length);
  });

  it("is idempotent for unchanged generated output", async () => {
    const destination = target("idempotent");
    await compileBootstrap(fixture("restrained-professional"), destination, { now: "2026-01-01T00:00:00.000Z" });
    const second = await compileBootstrap(fixture("restrained-professional"), destination, { now: "2030-01-01T00:00:00.000Z" });
    expect(second.created).toEqual([]);
    expect(second.regenerated).toEqual([]);
    expect((await checkBootstrap(fixture("restrained-professional"), destination)).valid).toBe(true);
  });

  it("preserves human-owned and transferred files", async () => {
    const destination = target("human-preservation");
    await compileBootstrap(fixture("restrained-professional"), destination);
    const decisions = path.join(destination, "docs/project/decisions.md");
    const plan = path.join(destination, "docs/exec-plans/active/current-stage.md");
    await appendFile(decisions, "\nHuman decision.\n");
    await appendFile(plan, "\nHuman plan note.\n");
    const rerun = await compileBootstrap(fixture("restrained-professional"), destination);
    expect(await readFile(decisions, "utf8")).toContain("Human decision.");
    expect(await readFile(plan, "utf8")).toContain("Human plan note.");
    expect(rerun.preserved).toContain("docs/project/decisions.md");
  });

  it("derives elevated risk and experience obligations", async () => {
    const destination = target("derivation");
    await compileBootstrap(fixture("immersive-experience"), destination);
    expect(await readFile(path.join(destination, "docs/qa/high-risk-review.md"), "utf8")).toContain("HIGH");
    expect(await readFile(path.join(destination, "docs/operations/payment-readiness.md"), "utf8")).toContain("Payment Readiness");
    expect(await readFile(path.join(destination, "docs/project/review-protocol.md"), "utf8")).toContain("Signature experience");
  });

  it("generates the current stage only", async () => {
    const destination = target("current-stage");
    await compileBootstrap(fixture("restrained-professional"), destination);
    const files = await outputFiles(path.join(destination, "docs/exec-plans"));
    expect(files.filter((file) => file.endsWith(".md"))).toEqual(["active/current-stage.md"]);
  });

  it("keeps synthetic output free of reference-project leakage", async () => {
    const prohibited = /Mariner|Nexus|Undugu|Mineral Teal|Nexus Black|\bThread\b|\bSignal\b|\/work(?:\/|\b)|\/capabilities\b|\/approach\b|\/company\b|\/start\b|Source Serif|Geist|2→6→8\.5→10→1→2/i;
    for (const name of ["restrained-professional", "immersive-experience"]) {
      const destination = target(`leakage-${name}`);
      await compileBootstrap(fixture(name), destination);
      for (const file of await outputFiles(destination)) {
        if (/\.(?:md|json|ts)$/.test(file)) expect(await readFile(path.join(destination, file), "utf8"), file).not.toMatch(prohibited);
      }
    }
  });
});

describe("bootstrap refusal and protection", () => {
  it("refuses an invalid Kernel", async () => {
    const source = await mutableFixture();
    await mutateYaml(source, "project.yaml", (value) => { value.delivery.tier = "PRICE_PACKAGE"; });
    await expect(compileBootstrap(source, target("invalid"))).rejects.toThrow("KERNEL_INVALID");
  });

  it("blocks stage progression with unresolved Required Input", async () => {
    const source = await mutableFixture();
    await mutateYaml(source, "project.yaml", (value) => { value.delivery.lifecycleStage = "IMPLEMENTATION"; value.routes.public.forEach((route: { truthRefs: string[] }) => { route.truthRefs = []; }); });
    await mutateYaml(source, "truth-register.yaml", (value) => { value.records[0].state = "REQUIRED INPUT"; value.records[0].publicEligible = false; });
    await mutateYaml(source, "approval-register.yaml", (value) => { value.records[0].state = "PENDING"; });
    await expect(compileBootstrap(source, target("required-input"))).rejects.toThrow("BLOCKING_REQUIRED_INPUT");
  });

  it("blocks Production readiness without protected approval", async () => {
    const source = await mutableFixture();
    await mutateYaml(source, "project.yaml", (value) => { value.delivery.lifecycleStage = "PRODUCTION_READY"; value.delivery.requiredApprovalIds.push("production-owner-approval"); });
    await expect(compileBootstrap(source, target("production"))).rejects.toThrow("PRODUCTION_APPROVAL_MISSING");
  });

  it("keeps recurring paid service Owner-Protected", async () => {
    const source = await mutableFixture();
    await mutateYaml(source, "integrations.yaml", (value) => { value.records[0].recurringCost = true; value.records[0].ownerApprovalRef = null; });
    await expect(compileBootstrap(source, target("paid"))).rejects.toThrow("PAID_SERVICE_APPROVAL");
  });

  it("blocks public case-study generation without authorization", async () => {
    const source = await mutableFixture();
    await mutateYaml(source, "project.yaml", (value) => { value.routes.public.push({ path: "/proof", kind: "CASE_STUDY", publicationState: "PUBLISHED", sitemapEligible: true, truthRefs: ["business-purpose"], authorizationRef: "missing" }); });
    await expect(compileBootstrap(source, target("case-study"))).rejects.toThrow("CASE_STUDY_AUTH_REQUIRED");
  });

  it("refuses to overwrite a modified generated file", async () => {
    const destination = target("ownership-conflict");
    await compileBootstrap(fixture("restrained-professional"), destination);
    await appendFile(path.join(destination, "AGENTS.md"), "\nManual mutation.\n");
    await expect(compileBootstrap(fixture("restrained-professional"), destination)).rejects.toThrow("OWNERSHIP_CONFLICT");
  });

  it("detects generated artifact drift", async () => {
    const destination = target("drift");
    await compileBootstrap(fixture("restrained-professional"), destination);
    await appendFile(path.join(destination, "docs/qa/manifest.md"), "\nDrift.\n");
    const result = await checkBootstrap(fixture("restrained-professional"), destination);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain("GENERATED_DRIFT:docs/qa/manifest.md");
  });

  it("rejects an invalid lifecycle value", async () => {
    const source = await mutableFixture();
    await mutateYaml(source, "project.yaml", (value) => { value.delivery.lifecycleStage = "SKIP_TO_PRODUCTION"; });
    await expect(compileBootstrap(source, target("lifecycle"))).rejects.toThrow("KERNEL_INVALID");
  });

  it("blocks missing operational ownership", async () => {
    const source = await mutableFixture();
    await mutateYaml(source, "project.yaml", (value) => { value.operations.responsibilities[0].owner = "UNASSIGNED"; });
    await expect(compileBootstrap(source, target("ownership"))).rejects.toThrow("OPERATIONS_OWNER_REQUIRED");
  });

  it("never manufactures review approval", async () => {
    const destination = target("human-review");
    await compileBootstrap(fixture("restrained-professional"), destination);
    const review = await readFile(path.join(destination, "docs/project/review-protocol.md"), "utf8");
    expect(review).toContain("Human Review Required");
    expect(review).not.toContain("Review Approved");
  });
});
