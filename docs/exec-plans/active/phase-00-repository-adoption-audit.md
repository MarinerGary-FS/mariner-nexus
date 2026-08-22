# Phase 00 — Repository Adoption & Architecture Audit

## Status

ACTIVE

## Objective

Adopt the new Mariner Nexus delivery system into the existing repository without modifying the production application, then audit the current codebase against the approved redesign doctrine and technical architecture.

This phase answers:

> What do we currently have, what should we preserve, what needs to change, and is this repository correctly configured to execute the new Mariner Nexus system?

## Hard stop

**Do not modify production application code in this phase.**

No edits to:
- `app/**`
- `components/**`
- `lib/**`
- `public/**`
- `package.json`
- `package-lock.json`
- `next.config.*`
- production environment configuration

The only allowed writes are repository-operating documentation, decision records, skill installation/adoption artifacts, and the final Phase 00 audit report.

Do not begin Phase 01 automatically.

---

## Existing repository facts already identified

The current repository is not a blank slate.

Current known architecture includes:
- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- Framer Motion.
- Existing `AGENTS.md` with a large cinematic/operational-intelligence doctrine.
- Existing routes including `about`, `case-studies`, `contact`, and `services`.
- Existing homepage entry through `NexusHomeExperience`.
- Existing service/case-study/contact architecture.

Known strategic conflicts that must be audited rather than silently changed:

1. Current homepage metadata positions Mariner Nexus as `AI-Native Digital Ecosystems for Business Evolution` and explicitly references `AI adoption`.
   - New approved doctrine keeps AI internal and does **not** market AI consultancy or AI as a public service pillar.

2. Current `AGENTS.md` is dark-first, cinematic, transformation/evolution-driven, and includes CTA language such as `Begin Your Evolution Briefing`.
   - New approved doctrine requires **Serious before spectacular**, a brighter corporate opening, simple navigation, increasingly sophisticated capability discovery, and `Start a Project` as the acquisition path.

3. Current route language includes `/services`, `/case-studies`, `/contact`, and `/about`.
   - New approved information architecture is:
     - `/capabilities`
     - `/work`
     - `/work/[project]`
     - `/approach`
     - `/company`
     - `/start`
     - `/privacy`
     - `/terms`

4. Current doctrine references GoHighLevel, Cal.com, future lead scoring, CRM automation, and future AI/operational-intelligence language.
   - New V1 acquisition architecture uses Google Workspace as the inquiry source of truth and avoids unnecessary CRM/custom backend complexity.

These are not instructions to delete anything. They are audit targets.

---

## Source of truth to adopt

The repository must adopt the newly approved Mariner Nexus redesign specification and reusable delivery-system artifacts.

Target structure:

```text
AGENTS.md

docs/
  mariner-nexus-redesign/
    README.md
    01-brand-positioning.md
    02-service-architecture.md
    03-audience-architecture.md
    04-information-architecture.md
    05-experience-architecture.md
    06-visual-system.md
    07-signature-interactions.md
    08-technical-architecture.md
    09-execution-plan.md
    decisions.md

  exec-plans/
    active/
    completed/
```

Reusable skills must remain separate from Mariner Nexus-specific aesthetics:

- `mariner-nexus-website-delivery`
- `mariner-nexus-codex-web-engineering`

The reusable skills encode process, scope discipline, QA, technical standards, and delivery methodology. They must **not** force Mineral Teal, Nexus interactions, Mariner typography, or Mariner-specific creative behavior onto client projects.

---

## Phase 00 tasks

### 1. Inspect existing doctrine before changing it

Read:
- current `AGENTS.md`
- `CLAUDE.md`
- repository `README.md`
- all existing repository-resident doctrine/documentation under `docs/**`

Create a doctrine reconciliation table with:
- Existing doctrine item.
- New approved doctrine item.
- Classification: `PRESERVE`, `REFINE`, `REPLACE`, or `REMOVE`.
- Reason.
- Migration impact.

Do not delete existing doctrine in this phase.

### 2. Adopt the new project specification

Install/copy the approved Mariner Nexus redesign documentation into the canonical `docs/mariner-nexus-redesign/` location.

If those files currently exist only inside a generated delivery-system folder, promote them into the canonical repository path while preserving the generated package as needed.

### 3. Reconcile `AGENTS.md`

Do **not** blindly overwrite the current file.

Produce a proposed concise replacement or merged `AGENTS.md` that:
- points to the canonical redesign documentation,
- preserves compatible high-value engineering guidance,
- removes obsolete/conflicting product doctrine,
- explicitly forbids silent strategy changes,
- keeps deeper doctrine out of the root instruction file.

In Phase 00, either:
- stage the proposed replacement in the audit report, or
- write it only if the current execution context explicitly authorizes documentation-only adoption.

No application changes may result from this step.

### 4. Verify reusable skill discovery

Verify that a fresh Codex session can discover and read:
- Website Delivery Skill.
- Codex Web Engineering Skill.

Report:
- exact installed path,
- whether skill metadata validates,
- whether Codex recognizes them,
- any dependency/tooling gap,
- whether the skills are repository-local or global/user-level.

Do not claim success without verification.

### 5. Audit current route architecture

Inventory every route under `app/**`.

Classify each route:
- `PRESERVE`
- `MIGRATE`
- `REPLACE`
- `REMOVE AFTER REDIRECT`
- `NEW REQUIRED`

Map current → approved V1 routes.

Include redirect requirements so existing indexed URLs do not simply become 404s.

### 6. Audit current component architecture

Inventory major component groups and identify:
- reusable primitives worth preserving,
- sections tied to obsolete positioning,
- overly large client components,
- animation systems worth preserving,
- components that should be retired rather than refactored,
- components that conflict with server-by-default architecture.

Pay particular attention to:
- `NexusHomeExperience`
- hero architecture,
- current case-study system,
- contact form,
- navigation,
- global shell,
- global visual tokens/styles.

Do not refactor them yet.

### 7. Audit rendering boundaries

Identify:
- Server Components.
- Client Components.
- large client-side islands.
- avoidable hydration.
- components using browser APIs.
- Framer Motion usage.
- any heavy media/graphics.

Produce a Phase 01 recommendation for moving toward:

> Server by default. Client only where interaction requires it.

### 8. Audit dependencies

For every production dependency, classify:
- `KEEP`
- `KEEP / REVIEW USAGE`
- `REMOVE LATER`
- `UPGRADE LATER`

Do **not** change dependencies in Phase 00.

Specifically evaluate:
- current Next.js 15.2.8 versus approved Next.js 16+ target,
- Framer Motion usage,
- Tailwind 4,
- existing utility packages.

Do not upgrade Next.js during the audit.

### 9. Audit current visual system

Inspect:
- `app/globals.css`
- global layout,
- typography,
- colors,
- radii,
- shadows,
- grid/container behavior,
- dark/light assumptions.

Map current implementation against the approved visual doctrine:
- architectural neutrals,
- brighter corporate opening,
- Graphite/Nexus Black depth environment,
- Mineral Teal as functional signal,
- client identity takeover,
- restrained materiality,
- no generic SaaS/AI aesthetic.

### 10. Audit existing content/positioning

Search the repository for public-facing language related to:
- AI-native,
- AI adoption,
- operational intelligence,
- evolution briefing,
- transformation records,
- services,
- pricing,
- marketing,
- automation claims,
- CRM claims.

Classify each occurrence:
- aligned,
- outdated,
- risky,
- must change in Phase 01/02.

Do not rewrite copy in Phase 00.

### 11. Audit acquisition architecture

Inspect current:
- `/contact`,
- form component(s),
- API routes,
- environment-variable requirements,
- CRM/webhook integrations,
- scheduling integrations.

Report what can be preserved and what needs migration toward:

```text
/start
  → server validation
  → secure server endpoint
  → Google Workspace source-of-truth record
  → email notification
  → intentional success/error UX
```

No integration changes in Phase 00.

### 12. Audit SEO and migration risk

Inspect:
- metadata,
- sitemap,
- robots,
- canonical behavior,
- route titles/descriptions,
- case-study metadata.

Identify every SEO/redirect risk caused by the new information architecture.

### 13. Audit assets

Inventory important assets under `public/**`.

Classify:
- preserve,
- archive,
- replace,
- unknown ownership/source,
- potentially useful for project/case-study presentation.

Do not delete assets.

### 14. Produce Phase 01 migration recommendation

Phase 00 must end with a concrete Phase 01 recommendation containing:
- what is safe to preserve,
- what should be rebuilt,
- what must be migrated,
- redirects required,
- architecture conflicts,
- dependency decisions requiring approval,
- visual foundation priorities,
- known risks,
- explicit files likely affected by Phase 01.

The recommendation must optimize for maintainability, not cleverness.

---

## Required audit deliverable

Create:

`docs/mariner-nexus-redesign/00-repository-audit.md`

It must contain:

1. Executive summary.
2. Current-state architecture.
3. Doctrine reconciliation.
4. Route migration map.
5. Component preservation map.
6. Server/client rendering audit.
7. Dependency audit.
8. Visual-system audit.
9. Public-copy/positioning audit.
10. Acquisition-flow audit.
11. SEO/redirect audit.
12. Asset audit.
13. Reusable-skill adoption status.
14. Risks.
15. Phase 01 recommendation.
16. Decisions requiring Gary approval.

Use evidence from actual repository files. Do not guess.

---

## Decision log

Record material findings or recommendations that change implementation assumptions in:

`docs/mariner-nexus-redesign/decisions.md`

Do not convert recommendations into final decisions unless already approved.

---

## Validation

Because this is a documentation/audit phase:

- Verify no production application files changed.
- Verify all newly adopted documentation links resolve.
- Verify reusable skill manifests/metadata.
- Verify no secrets or local-only absolute paths were introduced into canonical repository doctrine.
- Verify the audit references repository-relative paths.
- Report exact git diff scope.

If any production application file changes, Phase 00 fails.

---

## Definition of done

Phase 00 is done only when:

- the new redesign doctrine is available canonically in the repository,
- the reusable skills are verifiably discoverable,
- current architecture has been audited from actual code,
- conflicts with the approved redesign have been documented,
- a migration map exists,
- Phase 01 has a precise recommendation,
- no production application code has been modified,
- and execution stops for Gary's review.

## Final instruction

Do not redesign the site in this phase.

**Understand the existing system, install the operating system, document the migration, and stop.**