# Proposed System Architecture

## Model

WDS is a governed delivery operating system, not a component theme or one-command site factory.

```text
wds/
├── doctrine/       stable quality, truth, security, cost, and release rules
├── playbooks/      human-led discovery, strategy, review, and operations
├── schemas/        project profile, truth, approval, change, content, and QA contracts
├── qa/             configurable gates and evidence formats
├── integrations/   optional provider adapters and selection guidance
├── deployment/     provider-neutral preview, promotion, smoke, and rollback contracts
├── operations/     ownership, inquiry, maintenance, incident, and handoff guidance
├── bootstrap/      neutral recipes and skeletons, never an aesthetic template
├── references/     production examples clearly marked as evidence
└── skills/         concise orchestration instructions pointing to the above authorities
```

The repository, installed Skills, and generated projects must reference one canonical doctrine rather than copy it. References may demonstrate decisions but may not become defaults silently.

## Technical baseline

Required capabilities are strict typing (or an approved equivalent), reproducible lockfile, accessible semantic output, environment isolation, security basics, deterministic production build, and rollback-aware delivery.

The recommended web default is a supported stable Next.js App Router release, stable React, strict TypeScript, ESLint flat configuration, GitHub, Vercel, and npm when starting from the current evidence base. Pin an active LTS Node major and framework peer versions; commit the lockfile. Tailwind is a useful default only when it improves the project’s styling model. These are defaults, not client requirements.

CMS, database, authentication, APIs, analytics, AI, advanced graphics, and paid observability are optional and justified by the project profile. Review dependency updates on a schedule, outside release windows where practical; validate build, tests, audit, and migrations before acceptance. Every project supplies a secret-free `.env.example`, security headers, metadata foundation, robots, and sitemap where publicly applicable.

## Asset and integration governance

Every asset records source, rights/authorization, owner, intended use, format, accessibility needs, optimization state, and public eligibility. Missing provenance blocks public use; generation does not imply rights or approval.

Every integration records purpose, provider, environments, data classes, credentials owner, cost class, persistence/system-of-record behavior, notification behavior, failure/retry policy, logging/privacy boundary, health test, maintenance owner, and exit plan. Integrations are selected modules, never bootstrap defaults.

Initial first-class integration contracts are Google Sheets / Google Workspace, Resend, Stripe, Calendly, generic webhook / HTTP, and Vercel. GoHighLevel, Mailchimp, Airtable, Supabase, external CMS platforms, CRM-specific integrations, AI services, and non-required analytics remain project-supported rather than first-class. WDS-02 defines contracts only; it does not implement adapters.

## Deployment and operations contract

Use isolated local/Preview/Production environments, immutable candidate identity, approval before promotion, provider-appropriate domain and redirect verification, runtime/log smoke, explicit rollback target, and post-launch ownership. Handoff includes access/credential ownership, runbooks, inquiry/data destinations, vendor/cost inventory, maintenance expectations, incident/rollback paths, evidence baseline, and accepted non-blockers.

Vercel Preview is the canonical client-review environment. Feedback may arrive through existing channels, but Mariner consolidates it into one internal review record and classifies it before Codex revises the project. WDS-02 introduces no paid review service.

## Portability rule

A WDS artifact is reusable only if two visually and operationally different projects can consume it without importing Mariner names, tokens, routes, content, amplitude, or interactions.

## WDS-02 recommendation

Build the **Validated Project Kernel** first:

1. YAML project profile plus JSON Schema;
2. truth, authorization, approval, and change registers;
3. configurable QA manifest and validator;
4. a lightweight, visually neutral repository bootstrap;
5. generated typed/JSON runtime artifacts;
6. portability and negative tests using Mariner Nexus plus at least two deliberately different synthetic profiles.

Acceptance requires zero Mariner visual token, route, client record, or signature interaction leakage. Do not begin a broad generator, UI library, integration marketplace, dashboard, or deployment automation until the kernel proves portable.
