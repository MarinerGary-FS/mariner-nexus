# Phase 04A — Client Identity Takeover

## Status

COMPLETE — awaiting review 2026-08-21

## Phase objective

Implement a reusable, progressively enhanced project-identity boundary that lets Undugu gain and release visual authority on `/work` and `/work/undugu` while Mariner Nexus continues to own the frame.

## Why this exists

The website should demonstrate, without explanatory copy, that Mariner Nexus adapts its work to a client rather than forcing every client into the Mariner aesthetic.

## Source of truth

- `AGENTS.md`
- `docs/mariner-nexus-redesign/README.md`
- `docs/mariner-nexus-redesign/05-experience-architecture.md`
- `docs/mariner-nexus-redesign/06-visual-system.md`
- `docs/mariner-nexus-redesign/07-signature-interactions.md`
- `docs/mariner-nexus-redesign/08-technical-architecture.md`
- approved Phase 04A authorization
- approved typed project content and verified Undugu identity values

## In scope

- Extend project identity data with approved semantic surface, text, signal, and border pairings.
- Add one reusable identity boundary and narrow client controller.
- Establish Mariner → Client → Mariner entry, active, release, and fallback states on `/work`.
- Give Undugu greater but still scoped authority through its transformation record, followed by a clear Mariner return.
- Deliberate desktop, tablet, mobile, and reduced-motion choreography.
- Active-state accessibility, contrast, performance, route, authorization, and bundle validation.
- Required review captures and a short recording only if screenshots do not provide adequate evidence.

## Out of scope

- Work Portal interaction, Responsive Transformation, Mariner Thread, contextual navigation, Experience → Systems Deconstruction, systems grammar, Nexus, 3D/WebGL/WebGPU, GSAP, inquiry persistence, additional public projects, filtering/categories, route transitions, or global page transitions.

## Required user experience

- `/work` begins in the neutral Mariner environment.
- As the Undugu project region enters, project signal appears first, followed by structural and scoped surface influence; media remains dominant.
- After the project region leaves, neutral structure and Mineral Teal return.
- `/work/undugu` preserves Mariner navigation and route context, lets Undugu control the project canvas, and returns to Mariner for continuation.
- Content remains complete, correctly branded, and navigable without JavaScript.

## Technical requirements

- Server Components continue to own routes, content, layout, and media.
- A single small Client Component observes only its own boundary and publishes a semantic state attribute.
- Semantic CSS custom properties carry identity; no Undugu values are hard-coded into presentation rules.
- Native scrolling, Intersection Observer and passive/animation-frame-bounded viewport updates only.
- No new dependency or production asset.
- Every future identity must explicitly provide accessible surface/text/border pairings; no automatic palette generation.

## Mobile requirements

Mobile uses a direct vertical sequence: neutral approach, stronger project surface/media authority, readable transformation content, and a clear neutral return. It does not reproduce desktop spatial behavior.

## Accessibility requirements

- Project identity is named in content and never communicated by color alone.
- All configured foreground/background pairs pass contrast review.
- Navigation semantics, keyboard behavior, focus visibility, and content order remain unchanged.
- Reduced motion uses immediate state changes, preserves full identity, and removes interpolation/large movement.

## Performance requirements

- Project content and media render before enhancement initializes.
- Controller does no data loading, global rerendering, or continuous state churn.
- Viewport work is boundary-scoped, passive, and requestAnimationFrame-bounded.
- No layout-dependent style properties, added heavy assets, or meaningful CLS.
- Record production client-bundle change.

## Acceptance criteria

1. Mariner owns the initial and final environments.
2. Undugu progressively gains meaningful visual authority in its active region.
3. The project never becomes a disconnected microsite.
4. Baseline content is complete without controller initialization.
5. Mobile, tablet, and reduced-motion behavior are intentional.
6. Mariner signal responsibility returns cleanly after release.
7. Future approved identities require data configuration, not engine edits.
8. Unauthorized projects remain non-public.
9. Standard validation and requested review evidence pass.

## Validation

```bash
npm run typegen
npm run typecheck
npm run lint
npm run build
npm audit
git diff --check
```

Then verify Mariner/Undugu active accessibility states, keyboard/focus, reduced motion, 1440/1024/390 responsive behavior, overflow, browser logs, CLS, bundle impact, routes, live Undugu URL, and authorization rejection.

## Delivery report

Create `docs/exec-plans/active/phase-04a-completion-report.md`, update material decisions, provide all requested review assets, and stop before Phase 04B.
