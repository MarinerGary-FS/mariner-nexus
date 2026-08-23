# Proposed Project Bootstrap

WDS-01 defines a future bootstrap; it does not implement one.

## Inputs before generation

- project identity, owners, approval authorities, and publication authority;
- objectives, audiences, scope, exclusions, tier, risk, and amplification;
- known truth/evidence and Required Input;
- routes/content/navigation/conversion intent;
- identity assets and constraints;
- technical, data, integration, operational, budget, and maintenance constraints;
- QA, browser, performance, release, rollback, and handoff policy.

## Proposed neutral output

```text
project/
├── AGENTS.md                  concise repository operating rules
├── README.md                  project entry point
├── project-profile.yaml       human-authored source of delivery configuration
├── schemas/                   pinned profile/schema version or reference
├── docs/
│   ├── strategy/
│   ├── decisions.md
│   ├── truth-register.yaml
│   ├── authorization-register.yaml
│   ├── approvals/
│   ├── changes/
│   ├── evidence/
│   ├── operations/
│   └── exec-plans/{active,completed}/
├── src/                       framework-selected implementation
├── qa/qa-manifest.yaml        routes, viewports, states, gates, budgets
├── public/
├── .env.example               names only, never secrets
└── provider configuration     only for selected providers
```

## Bootstrap behavior

Validate inputs; render only applicable modules; record omitted modules and rationale; generate neutral semantics and QA hooks; produce typed runtime artifacts; and fail on unresolved protected decisions, invalid references, or embedded secrets. Do not generate a finished visual language, fake copy, fabricated evidence, universal CMS/database/auth, duplicate responsive DOM, or automatic Production deployment.

## Portability test

WDS-02 should instantiate the kernel for Mariner Nexus and two synthetic fixtures with opposing identity, content, and operational needs. Automated leakage checks must reject Mariner names, colors, routes, client records, Nexus/Thread interactions, and amplitude values in neutral output. Human review must confirm that the bootstrap does not make the fixtures look or behave like one another.

## Existing package disposition

Do not use `mariner-nexus-delivery-system/repo-template/` as the bootstrap base. Preserve it as historical evidence until an explicit WDS-02 decision archives or removes it after the neutral kernel passes.
