# Mariner Nexus Website Delivery System — WDS-01

## Status

WDS-01 architecture extraction is owner-approved and archived. WDS-02 implements the separately controlled Validated Project Kernel. No generator, visual template, installed Skill, application runtime, Vercel configuration, or Production deployment is changed.

## Reference baseline

- Production: `https://www.marinernexus.com/`
- Production deployment: `dpl_EGjSRmSBdDyTPLzwFfxA1pdDJfpe`
- Promoted reference implementation: `106768f7318932a879bb8c6bc04378d621b9a4ab`
- ARC-01 closeout: `e26b762`
- WDS-01 branch: `codex/wds-01-reference-extraction`

The Production implementation is evidence, not a template. WDS reproduces delivery standards—reasoning, execution, QA, approval, and operational control—without reproducing Mariner Nexus appearance or its project-specific interaction sequence.

## Governing outcome

> Consistent excellence, not consistent appearance.

WDS separates six kinds of knowledge:

1. universal doctrine;
2. reusable primitives;
3. configurable systems;
4. project-specific expression;
5. human-judgment gates;
6. automatable gates.

Every extracted pattern has exactly one primary classification in the [reusable pattern matrix](./extraction/reusable-pattern-matrix.md).

## WDS-01 documents

- [Reference implementation audit](./extraction/reference-implementation-audit.md)
- [Reusable pattern matrix](./extraction/reusable-pattern-matrix.md)
- [Anti-pattern catalog](./extraction/anti-pattern-catalog.md)
- [Human versus automation matrix](./extraction/human-vs-automation-matrix.md)
- [Skill gap analysis](./extraction/skill-gap-analysis.md)
- [Proposed system architecture](./architecture/proposed-system-architecture.md)
- [Delivery lifecycle](./architecture/delivery-lifecycle.md)
- [Delivery tiers](./architecture/delivery-tiers.md)
- [Approval model](./architecture/approval-model.md)
- [Truth model](./architecture/truth-model.md)
- [Project profile schema](./architecture/project-profile-schema.md)
- [QA model](./architecture/qa-model.md)
- [Proposed project bootstrap](./bootstrap/proposed-project-bootstrap.md)
- [Reference implementation observations](./reference-implementation-observations.md)
- [WDS decision log](./decisions.md)
- [Validated Project Kernel](./kernel/README.md)

## WDS-01 boundary

The existing `mariner-nexus-delivery-system/` directory is historical extraction evidence. It prematurely copies Mariner-specific redesign doctrine, file names, and a project phase into a purported reusable repository template. WDS-01 does not delete or repair it; the proposed architecture supersedes it conceptually and recommends explicit disposition during WDS-02 review.

## Recommendation for WDS-02

Build the **Validated Project Kernel** first: a small machine-readable project profile, truth and approval registers, a QA manifest, schema validation, and a lightweight repository bootstrap. Prove it by representing Mariner Nexus and two deliberately different synthetic client profiles without importing any Mariner visual token or signature interaction. Do not begin a broad generator, component library, integration catalog, or installed-Skill rewrite until that kernel passes the portability test.

WDS-02 implements this approved kernel under `tools/wds/`; it remains isolated from the Production application runtime.

### Why this is highest leverage

The kernel connects strategy, truth, authorization, scope, implementation configuration, QA, and release evidence without choosing a visual answer. It makes future automation safer and tests whether WDS is genuinely reusable before paying-client use.

### WDS-02 boundaries

- Keep strategy playbooks, visual judgment, client review, commercial pricing, vendor selection, and project-specific expression documentation-only.
- Later revise both existing Skills so they route through canonical WDS references and validated project data; do not duplicate doctrine inside prompts.
- Make schema/profile validation, referential checks, QA-manifest generation, route/metadata/authorization checks, Content Integrity configuration, and evidence packaging executable first.
- The first bootstrap contains repository rules, a profile, truth/authorization/approval/change records, decisions, active/completed plans, a QA manifest, evidence/operations locations, a neutral implementation shell, and a secret-free environment example.
- Test with Mariner Nexus and two opposing synthetic fixtures, negative/mutation cases, deterministic output, schema-version migration, and human confirmation of zero aesthetic/interaction leakage before use on a paying client.
