# WDS-02 — Validated Project Kernel

## Status

Completed and owner-approved. Implementation milestone: `c84a205`.

## Objective

Implement the smallest authoritative machine-readable foundation describing what a project is, what is true and authorized, its delivery/risk/experience requirements, applicable quality gates, operational ownership, and automation limits.

## Scope completed

- canonical YAML project configuration and registers;
- JSON Schema 2020-12 validation and typed/normalized derived artifacts;
- 20 semantic invariants and human-readable CLI failures;
- configurable QA, browser, risk, integration, operations, approval, and change contracts;
- Mariner reference fixture plus restrained and immersive fictional fixtures;
- negative, portability, leakage, and deterministic-generation tests;
- Kernel documentation and future Skill-consumption boundary.

## Preserved exclusions

No website generator, visual template, application/runtime adoption, integration adapters, database, CMS, AI, paid services, global Skill changes, Production/Vercel changes, pricing logic, or WDS-03 implementation was included.

## Validation

- schema and semantic validation: pass for all three fixtures;
- deterministic JSON and TypeScript generation/check: pass for all three fixtures;
- focused WDS tests: 22/22, including 17 intentional negative tests;
- synthetic leakage: zero prohibited matches;
- Production runtime import isolation: pass;
- repository tests: 12/12; typecheck, lint, Production build, and dependency audit: pass;
- Markdown links, secrets/absolute paths, whitespace, and `git diff --check`: pass;
- remote divergence after implementation push: `0/0`.

WDS-02 is the approved foundation for the separately controlled WDS-03 bootstrap/compiler.
