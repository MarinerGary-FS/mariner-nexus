# Phase 01 — Foundation

## Status

COMPLETE — approved 2026-08-21

## Governing rule

Execute each subphase independently and stop for review after each one. Approval of this plan does not authorize advancing past the currently approved subphase.

---

# Phase 01A — Framework & Repository Baseline

## Status

COMPLETED — approved 2026-08-21

## Phase objective

Upgrade the existing application from Next.js 15.2.8 to the current stable Next.js 16 release as an isolated migration, establish a valid Next.js 16 lint/type/build baseline, and make no visual, route, copy, content, or acquisition changes.

## Why this exists

The redesign should be built against its approved framework target rather than carrying a major framework migration through later visual and route work. Isolating the upgrade makes compatibility changes reviewable and prevents framework failures from being confused with redesign failures.

## Source of truth

- `AGENTS.md`
- `docs/mariner-nexus-redesign/README.md`
- `docs/mariner-nexus-redesign/08-technical-architecture.md`
- `docs/mariner-nexus-redesign/09-execution-plan.md`
- `docs/mariner-nexus-redesign/00-repository-audit.md`
- `docs/mariner-nexus-redesign/decisions.md`, especially DEC-015
- official Next.js 16 upgrade and codemod documentation

## In scope

- Capture the pre-upgrade Node, Next.js, React, lint, typecheck, and production-build baseline.
- Upgrade `next`, `react`, `react-dom`, `eslint-config-next`, and matching React type packages to current compatible stable releases.
- Apply only migration changes required by Next.js 16.
- Replace the removed `next lint` command with a direct ESLint CLI configuration and script.
- Review the repository for removed synchronous request APIs, deprecated middleware conventions, unsupported runtime configuration, and incompatible custom webpack configuration.
- Run type generation/typecheck, lint, production build, and bounded browser smoke checks.
- Record the exact resulting versions and any material framework decision.

## Out of scope

- Visual tokens, typography implementation, colors, spacing, or layout changes.
- Navigation, footer, route destinations, redirects, metadata copy, or sitemap migration.
- Homepage, work, capability, approach, company, start, privacy, or terms redesign.
- Component-boundary refactors unless Next.js 16 makes one strictly necessary.
- Dependency cleanup unrelated to framework compatibility.
- Cache Components, React Compiler, Turbopack customization, GSAP, Three.js, CMS, database, CRM, or Google Workspace implementation.

## Required user experience

The existing site must render and navigate as it did before the migration. No intentional public-facing change is permitted.

## Technical requirements

- Use the stable npm release, not canary or RC.
- Node.js must meet the Next.js 16 minimum requirement.
- Keep App Router and strict TypeScript.
- Preserve existing `next dev`, `next build`, and `next start` semantics; allow Next.js 16's default Turbopack behavior.
- Use ESLint directly because `next lint` is removed in Next.js 16.
- Do not enable Cache Components or React Compiler during this migration.
- Do not add redirects until approved destinations exist.

## Mobile requirements

No mobile choreography changes. Smoke-test the existing mobile shell for framework regressions only.

## Accessibility requirements

No accessibility behavior changes. Confirm the existing page remains keyboard reachable and that framework migration does not remove semantic output or focus visibility.

## Performance requirements

- Add no new runtime feature or client bundle dependency beyond the compatible framework/React versions.
- Confirm production build route output and static/dynamic classification.
- Record any build-system change attributable to Next.js 16/Turbopack.

## Acceptance criteria

1. Installed Next.js version is the current stable 16.x release.
2. React, React DOM, ESLint config, and React types are compatible and lockfile-resolved.
3. `npm run typecheck` succeeds.
4. `npm run lint` succeeds through the ESLint CLI.
5. `npm run build` succeeds under Next.js 16.
6. Existing routes return successfully in a bounded browser smoke test.
7. No visual, content, route, redirect, acquisition, or production environment change is introduced.
8. Material migration decisions are recorded.
9. A standard completion report is added before stopping for review.

## Validation

```bash
node --version
npm --version
npm ls next react react-dom eslint-config-next
npm run typegen
npm run typecheck
npm run lint
npm run build
```

Then run bounded desktop and mobile browser smoke checks of `/`, `/services`, `/case-studies`, `/about`, and `/contact` without changing their approved future migration status.

## Delivery report

Create `docs/exec-plans/active/phase-01a-completion-report.md` using the installed Codex Web Engineering completion-report format. Stop for review before Phase 01B.

---

# Phase 01B — Visual Foundation

## Status

COMPLETED — approved after responsive refinement 2026-08-21

## Phase objective

Establish the semantic environment, activity, and client-identity token system plus the approved typography foundation without redesigning full pages.

## In scope when approved

- Neutral environment tokens spanning bright corporate and Graphite/Nexus Black depth states.
- Mineral Teal REST, ACTIVE, SIGNAL, and SETTLE states.
- Scoped client-identity token contract.
- Geist Sans primary implementation and Source Serif 4 selective counterpoint evaluation.
- Browser-based contrast, font loading, layout-shift, focus, and reduced-motion validation.
- Foundational container, grid, spacing, border, radius, shadow, and material rules.

## Explicitly deferred

- Full homepage scenes.
- Nexus interaction.
- Client identity takeover implementation.
- Navigation/route migration except where a non-production foundation preview is explicitly approved.

## Gate

Requires review and approval of the Phase 01A completion report before execution.

---

# Phase 01C — Navigation & Route Foundation

## Status

COMPLETED — awaiting review

## Phase objective

Create the approved global navigation/footer and canonical route foundation, then activate legacy redirects only after every destination exists.

## In scope when approved

- Navigation: Capabilities, Work, Approach, Company, Start a Project.
- New route foundations for `/capabilities`, `/work`, `/work/[project]`, `/approach`, `/company`, `/start`, `/privacy`, and `/terms`.
- Undugu as the only initially authorized public flagship work detail.
- Restrained privacy and terms pages appropriate to website/inquiry use.
- Permanent redirects approved in DEC-016, activated only after destination verification.
- Canonicals, sitemap, robots, metadata foundation, internal-link migration, keyboard navigation, and mobile-menu behavior.

## Explicitly deferred

- Full page storytelling and visual redesign beyond the approved shell/foundation.
- Publication of client work other than Undugu without explicit authorization.
- Google Workspace inquiry persistence implementation unless separately included in an approved acquisition phase.
- Nexus and advanced interaction layers.

## Gate

Requires review and approval of the Phase 01B completion report before execution.
