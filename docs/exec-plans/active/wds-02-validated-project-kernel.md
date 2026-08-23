# WDS-02 — Validated Project Kernel

## Status

Implementation complete and owner-approved on `codex/wds-02-validated-project-kernel`; ready for controlled closeout.

## Objective

Implement the smallest authoritative machine-readable foundation describing what a project is, what is true and authorized, its delivery/risk/experience requirements, applicable quality gates, operational ownership, and automation limits.

## In scope

- canonical YAML project configuration and registers;
- JSON Schema validation and typed/normalized derived artifacts;
- semantic invariant validator and human-readable CLI;
- configurable QA, browser, risk, integration, operations, approval, and change contracts;
- Mariner reference fixture plus restrained and immersive fictional fixtures;
- negative, portability, leakage, and deterministic-generation tests;
- kernel documentation and future Skill-consumption boundary.

## Out of scope

Website generator, visual template, application/runtime adoption, integration adapters, database, CMS, AI, paid services, global Skill changes, Production/Vercel changes, pricing logic, WDS-03.

## Acceptance

The 21 requirements in the owner-approved WDS-02 assignment must pass. Executable code remains isolated under `tools/wds/`; synthetic generated artifacts must contain zero prohibited project leakage; full repository typecheck, lint, tests, build, dependency audit, and `git diff --check` must pass before review.

## Review evidence

- schema and semantic validation: pass for all three fixtures;
- deterministic JSON and TypeScript generation/check: pass for all three fixtures;
- focused WDS tests: 22/22, including 16 intentional semantic/schema rejection tests;
- synthetic leakage: zero prohibited matches;
- production runtime import isolation: pass;
- repository tests: 12/12; typecheck, lint, production build, and dependency audit: pass;
- Markdown links, secrets/absolute paths, whitespace, and `git diff --check`: pass.
