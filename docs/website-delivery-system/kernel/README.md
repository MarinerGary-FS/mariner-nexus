# Validated Project Kernel

The Kernel is the machine-readable contract for project identity, truth, authorization, approvals, changes, tier, risk, amplification, routes, QA, integrations, and operational ownership. It is not a website generator or visual template.

## Canonical boundary

- YAML files in each project directory are human-authored sources.
- `tools/wds/schema/project-kernel.schema.json` validates structure.
- `tools/wds/validate.mjs` enforces semantic invariants.
- normalized JSON and generated TypeScript are deterministic derived artifacts.
- Markdown carries strategy, narrative, evidence, and rationale.

Executable tooling is isolated under `tools/wds/` and is not imported by `app/**` or production bundles.

## Commands

```sh
npm run wds:validate -- tools/wds/fixtures/restrained-professional
npm run wds:generate -- tools/wds/fixtures/restrained-professional
npm run wds:check-generated -- tools/wds/fixtures/restrained-professional
npm run wds:test
```

Validation failures are human-readable, blocking, and return non-zero. Generation occurs only after a valid Kernel is loaded.

## Dependencies

- `yaml`: small, maintained parser required because Node has no native YAML parser.
- `ajv`: validates the approved JSON Schema contract and avoids an incomplete handwritten shape checker.

Both are development-only tooling dependencies. No CLI framework, database, CMS, adapter, or runtime dependency was added.

## Fixtures

- `mariner-nexus`: bounded reference representation, not live migration.
- `restrained-professional`: fictional low-amplification professional presence.
- `immersive-experience`: fictional high-amplification experience with payment risk.

The same schema and semantic validator process all three. Synthetic artifacts are checked for reference-project leakage.

## Future Skill consumption

The future Website Delivery Skill should read canonical YAML plus human narrative to select lifecycle obligations, Required Input, authorities, and review moments. The future Engineering Skill should consume normalized technical, risk, QA, browser, integration, and operational configuration. Neither Skill should copy the schema or bypass validator output. Installed Skills remain unchanged in WDS-02.
