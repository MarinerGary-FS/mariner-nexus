# Website Delivery System Decision Log

## WDS-001 — Production is evidence, not the template

**Decision:** Extract standards and contracts from the Production-verified Mariner Nexus implementation without copying its appearance, routes, content, clients, or signature interactions.

## WDS-002 — Six exclusive primary classifications

**Decision:** Every significant extracted pattern receives exactly one primary class: Universal Doctrine, Reusable Primitive, Configurable System, Project-Specific Expression, Human-Judgment Gate, or Automatable Gate.

## WDS-003 — Governed operating system, not generic theme

**Decision:** Organize WDS as doctrine, playbooks, schemas, QA, optional integrations, deployment, operations, bootstrap, references, and Skills. Reuse comes from neutral contracts and evidence, not a common aesthetic.

## WDS-004 — YAML source plus schema and derived types

**Decision:** Recommend YAML for the human-authored project profile, JSON Schema for validation, generated TypeScript/JSON for implementation, and Markdown for narrative/evidence.

## WDS-005 — Proportional rigor uses separate controls

**Decision:** Delivery tier controls process depth, risk modifies assurance, and amplification controls experience intensity. None acts as a proxy for visual quality.

## WDS-006 — Approval authority is explicit

**Decision:** Separate Internal Mariner, Client, and Owner-Protected approvals. Production, public client publication, material recurring cost, sensitive data/integrations, credentials, destructive actions, and consequential scope changes remain Owner-Protected.

## WDS-007 — Truth and authorization are independent

**Decision:** Use the canonical truth statuses in `architecture/truth-model.md`; separately record whether a truthful claim or client identity may be public.

## WDS-008 — Automation supplies evidence, not taste or authority

**Decision:** Automate deterministic gates and evidence collection. Human authorities retain strategy, truth interpretation, visual meaning, brand fidelity, public authorization, cost, and Production decisions.

## WDS-009 — Existing copied delivery package is superseded conceptually

**Decision:** Do not build on or alter the pre-existing Mariner-specific repo template during WDS-01. Decide its archival/removal only after a neutral kernel proves portable.

## WDS-010 — WDS-02 starts with the Validated Project Kernel

**Decision:** The next recommended phase is limited to profile/schema, registers, QA manifest/validator, neutral bootstrap, and portability tests. Broad generation, UI libraries, integrations, dashboards, deployment automation, and installed-Skill revisions remain out of scope until approved.

## WDS-011 — Lifecycle obligations may compress, not vanish

**Decision:** Use the twelve-stage lifecycle in `architecture/delivery-lifecycle.md`. Lower-complexity delivery may combine stages, but must explicitly satisfy or mark their obligations not applicable.

## WDS-012 — QA combines three gates with named cross-cutting controls

**Decision:** Engineering, Meaning, and conditional Impact reviews operate alongside Truth, Content Integrity, Accessibility, Responsive, Security, and Release gates. Automation creates evidence; accountable humans accept it.

## WDS-013 — Two Skills remain, with references as authorities

**Decision:** Revise the existing Website Delivery and Codex Web Engineering Skills in a later assignment rather than multiplying Skills now. Keep detailed doctrine in canonical references and make Skills concise routers.

## WDS-014 — Commercial pricing remains solution-specific

**Decision:** Use Inquiry → Discovery → Requirements → Architecture / Scope → Quote. Tiers control delivery rigor and never map directly to public prices. Pricing is excluded from WDS-02.

## WDS-015 — Operational ownership is mandatory; packages are not

**Decision:** Do not create universal maintenance packages. Every project must assign post-launch operational responsibilities before Production readiness.

## WDS-016 — Risk is internal and independent

**Decision:** Every project carries a `LOW`, `MODERATE`, `HIGH`, or `CRITICAL` internal risk/compliance profile independent of tier and amplification. Legal interpretation is Required Input or legal review, not a WDS conclusion.

## WDS-017 — Browser coverage is manifest-driven

**Decision:** Chromium, representative responsive/mobile behavior, and native Safari form the minimum. Higher-risk or complex work normally adds Firefox, Edge, and justified devices. Unavailable coverage must be an allowed documented non-blocker, never a silent pass.

## WDS-018 — Vercel Preview is the client-review environment

**Decision:** Do not add paid review SaaS in WDS-02. Consolidate feedback into a classified internal review record before revision.

## WDS-019 — Initial integration contracts remain narrow

**Decision:** First-class contracts are Google Workspace/Sheets, Resend, Stripe, Calendly, generic webhook/HTTP, and Vercel. Other providers remain project-supported until repeated evidence justifies promotion.

## WDS-020 — Kernel execution remains outside the website runtime

**Decision:** Place validation, schema, fixtures, tests, and generation under `tools/wds/`. Nothing in `app/**` imports it, and WDS validation does not yet block the Mariner Production build.

## WDS-021 — YAML is canonical; output is deterministic

**Decision:** Human-authored YAML and Markdown evidence are authoritative. JSON Schema and semantic validation precede reproducible normalized JSON and TypeScript generation.

## WDS-022 — Shape and meaning are separate validator layers

**Decision:** JSON Schema rejects malformed structure and enumerations. Explicit semantic invariants reject structurally valid but unsafe states. Creative quality remains human judgment.

## WDS-023 — Two small development dependencies are justified

**Decision:** Use `yaml` for canonical YAML parsing and `ajv` for standards-based JSON Schema validation. Do not add a CLI framework, database, CMS, or runtime adapter.

## WDS-024 — Validated Project Kernel accepted

**Decision:** WDS-02 is owner-approved with YAML as canonical input, JSON Schema 2020-12, deterministic normalized JSON and TypeScript, 20 semantic invariants, 22 focused tests including 17 negative tests, three portable fixtures, zero synthetic reference leakage, and complete Production runtime isolation. Schema migration, live-repository adoption, and CI enforcement remain downstream decisions.
