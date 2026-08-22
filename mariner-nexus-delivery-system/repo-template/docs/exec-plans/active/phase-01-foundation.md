# Phase 01 — Foundation

## Status

ACTIVE

## Phase objective

Build the production-grade Mariner Nexus application foundation: design-token architecture, typography foundation, layout/grid system, application shell, primary navigation, footer, route scaffolding, and baseline accessibility/responsive behavior.

The foundation must already communicate:

> This is a serious company.

No flagship interactions are part of this phase.

## Why this exists

The advanced experience must sit on an exceptional corporate foundation. If the shell is generic or structurally weak, later spectacle cannot repair the brand.

## Source of truth

Read before implementation:

- `AGENTS.md`
- `docs/mariner-nexus-redesign/README.md`
- `01-brand-positioning.md`
- `04-information-architecture.md`
- `05-experience-architecture.md`
- `06-visual-system.md`
- `08-technical-architecture.md`
- `09-execution-plan.md`
- `decisions.md`

## In scope

### Application
- Confirm/establish Next.js App Router and strict TypeScript baseline.
- Establish route shells for:
  - `/`
  - `/capabilities`
  - `/work`
  - `/approach`
  - `/company`
  - `/start`
  - `/privacy`
  - `/terms`

### Design system foundation
- Semantic color tokens for:
  - Nexus White,
  - Silver,
  - Structural Gray,
  - Graphite,
  - Nexus Black,
  - Mineral Teal REST/ACTIVE/SIGNAL.
- Typography tokens and two-family maximum strategy.
- Spacing scale.
- container/grid system.
- radii/border/shadow primitives.
- motion-duration/easing tokens only; do not build advanced motion.

### Shell
- Global page shell.
- Primary navigation:
  - Capabilities,
  - Work,
  - Approach,
  - Company,
  - Start a Project.
- Footer:
  - Explore links,
  - Company links,
  - Email only under Connect,
  - Privacy,
  - Terms.

### Responsive
- Desktop, tablet, and mobile shell behavior.
- Mobile navigation must be intentional, accessible, and visually restrained.

### Accessibility
- semantic landmarks,
- keyboard navigation,
- visible focus,
- skip-link strategy,
- touch-target baseline,
- contrast validation.

## Out of scope

Do not implement in Phase 01:

- Nexus.
- Mariner Thread.
- Client Identity Takeover.
- Work Portal.
- responsive project transformation.
- Experience → Systems deconstruction.
- contextual section-aware navigation behavior.
- Google Workspace inquiry submission.
- case-study content model.
- analytics.
- Three.js/WebGL/WebGPU.
- GSAP.
- CMS/database/auth.
- final page copy beyond the minimum required to validate layout structure.

Do not create fake marketing copy to make pages appear finished.

## Required user experience

### Desktop
The shell is bright, restrained, architectural, and precise. Navigation is immediate and stable. Whitespace communicates confidence.

### Tablet
The hierarchy remains intentional and does not simply compress desktop spacing.

### Mobile
Navigation and shell feel designed for mobile. No overflow, cramped desktop header, or undersized touch targets.

## Visual requirements

- Architectural neutral environment.
- Mineral Teal used as signal, not large decorative fill.
- No SaaS-card aesthetic.
- No giant pill buttons.
- No glassmorphism.
- No generic gradient blobs.
- No stock imagery.
- No decorative particles.
- No fashion-editorial typography treatment.

Exact production color values may be tuned in-browser, but semantic roles may not change.

## Technical requirements

- Server Components by default.
- Client Components only where required for navigation interaction.
- Keep global client JavaScript minimal.
- No unnecessary dependency additions.
- No advanced animation package unless already part of the repo and objectively required for the shell.
- Centralize semantic design tokens.
- Avoid hard-coded brand colors across components.
- Maintain simple component ownership.

Suggested primitives:
- `Container`
- `Section`
- `Heading`
- `Text`
- `SignalLink`
- navigation primitives

Do not build a generic marketing-section factory.

## Accessibility requirements

- All navigation keyboard reachable.
- Clear focus treatment using semantic signal states.
- Mobile menu has correct accessible labeling/state.
- Correct landmarks.
- Initial heading structure valid.
- Reduced-motion baseline does not introduce issues.
- Signal color is never the only indicator of state.

## Performance requirements

- No heavy graphics in critical path.
- No global hydration.
- Fonts optimized and limited to required weights.
- Prevent layout shift in navigation and shell.
- No forced loading sequence.
- Navigation responds immediately.

## Acceptance criteria

1. All approved V1 routes resolve without errors.
2. Primary navigation exactly matches the approved information architecture.
3. Footer exposes Email only under Connect; no GitHub link.
4. No pricing, industries, AI-service, or Lab navigation is introduced.
5. Desktop shell communicates corporate restraint without depending on animation.
6. Mobile navigation is purpose-built and fully operable.
7. Semantic tokens exist for environment and signal roles.
8. Mineral Teal is used functionally, not as a dominant decorative surface.
9. No prohibited generic SaaS/AI visual language is present.
10. The application passes typecheck, lint, and production build.
11. Keyboard/focus review passes.
12. No material CLS is introduced by shell/font loading.
13. No advanced interaction code has leaked into Phase 01.
14. Material implementation decisions are recorded in `decisions.md`.
15. Completion report includes any deviation from the specification.

## Validation

Run the repository's canonical equivalents of:

- typecheck,
- lint,
- production build,
- relevant tests.

Then manually verify:

- desktop,
- tablet,
- mobile,
- keyboard traversal,
- visible focus,
- mobile navigation,
- Chrome/Safari baseline if available.

## Delivery report

Use the Mariner Nexus Codex Web Engineering completion-report format.

Do not begin Phase 02 automatically. Deliver Phase 01 for review.
