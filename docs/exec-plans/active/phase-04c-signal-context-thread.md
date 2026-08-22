# Phase 04C — Signal System + Contextual Navigation + Mariner Thread

## Status

Active. Phase 04B is committed, pushed, synchronized at `0/0`, and archived independently.

## Phase objective

Establish one restrained system-wide interaction language through functional Mineral Teal states, calm contextual navigation, and a reusable semantic Mariner Thread.

## Why this exists

The interface should acknowledge interaction, preserve orientation, and reveal meaningful relationships without adding spectacle or complexity. The desired reactions are “The system listens,” “I know where I am,” and “Everything feels connected.”

## Source of truth

- `docs/mariner-nexus-redesign/README.md`
- `docs/mariner-nexus-redesign/05-experience-architecture.md`
- `docs/mariner-nexus-redesign/06-visual-system.md`
- `docs/mariner-nexus-redesign/07-signature-interactions.md`
- `docs/mariner-nexus-redesign/08-technical-architecture.md`
- `docs/mariner-nexus-redesign/decisions.md`
- Approved Phase 04C authorization

## In scope

- Formalize REST, ACTIVE, SIGNAL, and SETTLE as functional visual states.
- Keep keyboard focus, pointer hover, current route, and signal response visually distinct.
- Add route and major-section context awareness to the canonical navigation.
- Replace the provisional active underline with an understandable signal marker/rule.
- Establish a reusable static-first Mariner Thread primitive.
- Apply the Thread selectively to homepage disciplines, capabilities relationships, Work proof, Approach process, and conversion continuity.
- Coordinate Thread behavior with the Undugu identity boundary where the relationship belongs to the project.
- Document desktop, tablet, mobile, reduced-motion, accessibility, and client-JS behavior.

## Out of scope

- Systems Deconstruction, full Nexus, expanded node/flow primitives, WebGL/WebGPU/Three.js/GSAP, page transitions, smooth scrolling, custom cursor, new case studies, acquisition persistence, analytics-event architecture, or a homepage/page restructure.
- Decorative Thread use, global scroll progress, large context labels, continuous scroll measurement, or new dependencies.

## Required user experience

- Navigation retains every canonical destination and quietly exposes the current major environment.
- Current route remains immediately understandable without relying on color alone.
- Section context changes only when a new major environment clearly owns the reading area; boundaries do not flicker.
- Thread appearances connect named concepts, a process, project proof, or a conversion continuation and remain meaningful without animation.
- Existing client takeover, Work Portal, responsive proof, and mobile menu behavior remain intact.

## Technical requirements

- Server-render all content and Thread structure.
- Keep context enhancement inside the existing navigation client boundary.
- Use semantic `data-navigation-context` section identifiers and one Intersection Observer with deterministic center-band priority.
- No render loop, global scroll listener, new dependency, or blocking hydration.
- Progressive fallback uses pathname-derived current state and static Thread structure.

## Mobile requirements

- Closed mobile header remains compact; expose at most one tiny environment label/rule.
- Open menu preserves focus containment, Escape restoration, background lock, destination numbering, and explicit current-route semantics.
- Tablet uses its own context placement within the eight-column-era header composition rather than inheriting desktop density.
- Thread geometry simplifies vertically where needed without losing the connected meaning.

## Accessibility requirements

- Preserve the 2px SIGNAL focus outline with 4px offset.
- Focus, hover, current, and signal differ by geometry and/or text as well as color.
- Retain `aria-current="page"`; do not announce scroll context changes through a live region.
- Thread graphics are `aria-hidden`; adjacent semantic content carries all meaning.
- Keyboard and reduced-motion behavior remain complete and immediate.

## Performance requirements

- Negligible navigation client-chunk increase.
- No dependency or animation-library increase, continuous measurement, layout shift, or added blocking asset.
- Report route-level client JavaScript before/after and confirm static generation remains intact.

## Acceptance criteria

1. Mineral Teal consistently means available activity, interaction, meaningful response, or stable acknowledgment.
2. Focus, hover, current, and signal remain distinguishable.
3. Navigation communicates context calmly without progress instrumentation.
4. The provisional underline becomes a distinct, usable signal rule/marker.
5. Every Thread instance answers what it connects.
6. Thread and Signal use one coherent grammar.
7. Phase 04A and 04B systems remain intact.
8. Mobile stays simple; tablet has intentional context composition.
9. Performance is effectively unchanged and reduced-motion loses no information.
10. The experience feels more connected without feeling more complicated.

## Validation

```text
npm run typegen
npm run typecheck
npm run lint
npm run build
npm audit
git diff --check
```

Browser review at approximately 1440px desktop, 1024px tablet, and 390×844 mobile; keyboard/focus, route/current state, section-context stability, mobile menu, reduced motion, no-JavaScript fallback, overflow, console, route status, and Phase 04A/04B regression checks.

## Delivery report

Produce `docs/exec-plans/active/phase-04c-completion-report.md` with scope, architecture, semantic Thread inventory, context priority, responsive behavior, accessibility, reduced motion, performance/client-JS delta, validation, review assets, deviations, decisions, and Phase 05 boundary. Stop for review before Phase 05.
