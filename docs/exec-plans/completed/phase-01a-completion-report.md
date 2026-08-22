# Phase 01A — Completion Report

## Implemented

- Upgraded the repository from Next.js 15.2.8 to stable Next.js 16.3.2.
- Aligned React and React DOM to 19.2.8 and `eslint-config-next` to 16.3.2.
- Updated React type packages to compatible 19.2 releases.
- Replaced removed `next lint` usage and legacy `.eslintrc.json` with an ESLint 9 flat configuration.
- Added canonical `typegen` and `typecheck` scripts.
- Accepted Next.js 16's mandatory TypeScript JSX setting and generated-route include path.
- Disabled automatic Next.js mutation of the approved root `AGENTS.md` with `agentRules: false`.
- Resolved three newly enforced React effect-lint findings with bounded behavior-preserving changes.
- Stabilized the existing reduced-motion homepage boundary after browser verification exposed a Next 16 hydration mismatch.
- Applied safe transitive audit fixes; npm now reports zero known vulnerabilities.

No visual redesign, copy change, route creation, redirect, metadata migration, acquisition change, or content publication occurred.

## Files changed

- `package.json` — framework versions and Next 16 validation scripts.
- `package-lock.json` — resolved framework/tooling dependency graph and audit fixes.
- `.eslintrc.json` — removed legacy ESLint configuration.
- `eslint.config.mjs` — Next.js 16-compatible flat ESLint configuration.
- `tsconfig.json` — mandatory/suggested Next.js 16 generated changes: `jsx: react-jsx` and `.next/dev/types/**/*.ts` include.
- `next.config.mjs` — prevents Next.js from mutating canonical repository guidance.
- `components/integrations/CalEmbed.tsx` — defers an existing-script state signal to a microtask to satisfy the React effect rule.
- `components/navigation/Nav.tsx` — closes the mobile menu directly on navigation instead of synchronously from a pathname effect.
- `components/sections/HeroSection.tsx` — defers the existing mounted flag to the next animation frame.
- `components/sections/NexusHomeExperience.tsx` — stabilizes initial server/client video and motion state while preserving reduced-motion behavior.
- `docs/exec-plans/active/phase-01-foundation.md` — Phase 01A/01B/01C gated plan and status.
- `docs/mariner-nexus-redesign/decisions.md` — DEC-023 framework baseline.
- `docs/exec-plans/active/phase-01a-completion-report.md` — this report.

## Validation

Pre-upgrade baseline:

- Node.js 24.14.0; npm 11.9.0.
- Next.js 15.2.8; resolved React/React DOM 19.2.4.
- `npm run lint` passed under the legacy Next lint runner.
- `npx tsc --noEmit` passed.
- `npm run build` passed with the existing static/dynamic route classification.

Post-upgrade:

- `npm ls next react react-dom eslint-config-next --depth=0` passed and reports Next.js 16.3.2, React 19.2.8, React DOM 19.2.8, and `eslint-config-next` 16.3.2.
- `npm run typegen` passed.
- `npm run typecheck` passed.
- `npm run lint` passed with zero warnings/errors.
- `npm run build` passed using Next.js 16.3.2 Turbopack.
- `npm audit` passed with zero known vulnerabilities after safe transitive fixes.
- `git diff --check` passed.
- Production server smoke checks passed for `/`, `/services`, `/case-studies/undugu`, `/about`, and `/contact`.
- Desktop and 390×844 mobile checks showed meaningful content, no framework error overlay, no horizontal overflow, and successful route loads.
- Initial keyboard Tab focus reached the labeled home link.
- Reduced-motion browser verification passed after the hydration-boundary correction; no hydration error remained.

Build output preserved the existing model: public routes are statically prerendered and `/api/contact` remains dynamic.

## Responsive review

Desktop: Existing homepage and legacy routes load without framework overlays or missing content. No intentional layout change.

Tablet: No implementation changed tablet layout. The production build and responsive CSS remain intact; full visual redesign review belongs to Phase 01B/01C.

Mobile: 390×844 smoke check passed with `scrollWidth === innerWidth`; the mobile menu remained operable and direct link activation now closes it without the removed pathname effect.

## Accessibility

Keyboard: Initial Tab reaches the labeled Mariner Nexus home link. Existing mobile menu controls remain buttons with open/close labels.

Focus: Existing global focus-visible treatment remains unchanged.

Reduced motion: Existing behavior remains; the optional homepage video is withheld until after mount and remains absent when reduced motion is requested. Browser verification found and resolved the Next 16 hydration mismatch.

Semantic/assistive considerations: Route output and heading/link accessibility snapshots remained populated. No semantic redesign occurred.

## Performance

Bundle/runtime impact: No new application runtime dependency was added. Framework and React versions changed only as approved. Existing client-boundary debt remains documented for later phases.

Loading behavior: Next.js 16 now uses Turbopack by default for development and production builds. Static/dynamic route classification is unchanged.

Known performance risks: Next dev reports a slow-filesystem warning because the repository is on an external volume. This affects local development startup/compilation and is not evidence of production runtime regression. Existing large assets and client islands remain Phase 00 findings.

## Deviations

The migration required four small application compatibility edits after the stricter React ESLint rules and browser hydration checks exposed pre-existing patterns. These changes were limited to effect scheduling, menu-close timing, and hydration stabilization; they do not alter the approved visual or product experience.

## Follow-up recommendations

- Begin Phase 01B only after this report is approved.
- During 01B, measure font loading and token contrast in browser without combining the work with route migration.
- Keep the external-volume development warning in mind when comparing local compile times.

## Decisions required

Approve the Phase 01A framework baseline and authorize Phase 01B. No additional framework decision is required.
