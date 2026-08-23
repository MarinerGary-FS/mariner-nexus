import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { loadKernel, serializeJson, serializeTypescript, stable } from "./io.mjs";
import { validateKernel } from "./validate.mjs";

const fixturesRoot = path.join(process.cwd(), "tools/wds/fixtures");
const fixtureNames = ["mariner-nexus", "restrained-professional", "immersive-experience"];
const base = await loadKernel(path.join(fixturesRoot, "restrained-professional"));
const clone = () => structuredClone(base);
const codes = (kernel: ReturnType<typeof clone>) => validateKernel(kernel).errors.map((item: { code: string }) => item.code);

describe("portable project fixtures", () => {
  it.each(fixtureNames)("validates %s with the same validator", async (fixture) => {
    expect(validateKernel(await loadKernel(path.join(fixturesRoot, fixture)))).toEqual({ valid: true, errors: [] });
  });
});

describe("schema and semantic rejection", () => {
  it("rejects invalid schema shape", () => {
    const kernel = clone();
    kernel.project.delivery.tier = "FIXED_PRICE_PACKAGE";
    expect(codes(kernel)).toContain("SCHEMA");
  });

  const cases: Array<[string, (kernel: ReturnType<typeof clone>) => void, string]> = [
    ["prohibited public claim", (k) => { k.truth.records[0].state = "PROHIBITED CLAIM"; }, "TRUTH_PROHIBITED_PUBLIC"],
    ["published case study without authorization", (k) => { k.project.routes.public.push({ path: "/proof", kind: "CASE_STUDY", publicationState: "PUBLISHED", sitemapEligible: true, truthRefs: ["business-purpose"], authorizationRef: "missing" }); }, "CASE_STUDY_AUTH_REQUIRED"],
    ["autonomous Production promotion", (k) => { k.project.actions[0].approvalClass = "A"; }, "PRODUCTION_OWNER_PROTECTED"],
    ["paid service without owner approval", (k) => { k.integrations.records[0].recurringCost = true; }, "PAID_SERVICE_APPROVAL"],
    ["data collection without classification", (k) => { k.integrations.records[0].dataClassification = null; }, "DATA_GOVERNANCE_REQUIRED"],
    ["secret integration without environment handling", (k) => { k.integrations.records[0].environmentHandling = null; }, "SECRET_ENVIRONMENT_REQUIRED"],
    ["critical risk with insufficient QA", (k) => { k.project.risk.level = "CRITICAL"; }, "CRITICAL_QA_INSUFFICIENT"],
    ["missing operational owner", (k) => { k.project.operations.responsibilities[0].owner = "UNASSIGNED"; }, "OPERATIONS_OWNER_REQUIRED"],
    ["held route in sitemap", (k) => { k.project.routes.public[0].publicationState = "HELD"; }, "PRIVATE_SITEMAP"],
    ["missing required browser", (k) => { k.qa.requiredBrowserIds.push("firefox-required"); }, "BROWSER_COVERAGE_MISSING"],
    ["A4 coupled to rendering technology", (k) => { k.project.experience.amplification = "A4"; k.project.experience.requiredRenderingTechnology = "Three.js"; }, "A4_TECH_COUPLING"],
    ["approved decision depending on Required Input", (k) => { k.truth.records[0].state = "REQUIRED INPUT"; k.truth.records[0].publicEligible = false; }, "APPROVAL_DEPENDS_ON_INPUT"],
    ["inferred statement made public", (k) => { k.truth.records[0].state = "INFERRED"; }, "TRUTH_INFERRED_PUBLIC"],
    ["approval class downgrade", (k) => { k.approvals.records[0].class = "A"; }, "APPROVAL_DOWNGRADE"],
    ["Production readiness without owner approval", (k) => { k.project.delivery.lifecycleStage = "PRODUCTION_READY"; k.project.delivery.requiredApprovalIds = ["production-owner-approval"]; }, "PRODUCTION_APPROVAL_MISSING"],
    ["undocumented browser non-blocker", (k) => { k.qa.browsers[2].state = "DOCUMENTED_NON_BLOCKER"; k.qa.browsers[2].reason = null; }, "BROWSER_NONBLOCKER_INVALID"],
  ];

  it.each(cases)("rejects %s", (_name, mutate, expected) => {
    const kernel = clone();
    mutate(kernel);
    expect(codes(kernel)).toContain(expected);
  });
});

describe("generation and leakage", () => {
  it("generates deterministic normalized JSON and TypeScript", () => {
    const reversed = Object.fromEntries(Object.entries(clone()).reverse());
    expect(serializeJson(base)).toBe(serializeJson(reversed));
    expect(serializeTypescript(base)).toBe(serializeTypescript(reversed));
    expect(stable(base)).toEqual(stable(reversed));
  });

  it("keeps synthetic project artifacts free of reference-project leakage", async () => {
    const prohibited = /Mariner|Nexus|Undugu|Mineral Teal|Nexus Black|\bThread\b|\bSignal\b|\/work(?:\/|\b)|\/capabilities\b|\/approach\b|\/company\b|\/start\b|Source Serif|Geist|2→6→8\.5→10→1→2/i;
    for (const fixture of ["restrained-professional", "immersive-experience"]) {
      const directory = path.join(fixturesRoot, fixture);
      const files = (await readdir(directory, { recursive: true })).filter((file) => /\.(?:yaml|md|json|ts)$/.test(file));
      for (const file of files) expect(await readFile(path.join(directory, file), "utf8"), `${fixture}/${file}`).not.toMatch(prohibited);
    }
  });
});
