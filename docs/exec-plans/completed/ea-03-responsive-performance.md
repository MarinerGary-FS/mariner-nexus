# Experience Amplification 03 — Responsive Performance

## Phase objective

Make the single semantic Undugu Living Interface visibly reorganize itself as its available canvas changes, proving that responsive design is compositional rather than scaled.

## Why this exists

EA-02 proves the client interface is live. EA-03 must make its responsive intelligence observable: navigation, type, imagery, actions, and sequencing transform while the browser and Mariner shell remain stable.

## Source of truth

- Canonical doctrine in `docs/mariner-nexus-redesign/`.
- DEC-037 through DEC-039.
- Completed EA-02 plan and report.
- Global Typography & Content Integrity QA.
- User-authorized EA-03 Responsive Performance brief.

## In scope

- One bounded, native-scroll responsive-performance stage around the EA-02 interface.
- Wide, compressing, intermediate, reorganizing, narrow, and settled progression.
- CSS container-query recomposition of the existing semantic DOM.
- One minimal client controller using Intersection Observer thresholds.
- Desktop, tablet, mobile-host, reduced-motion, keyboard, Safari, and JS-free validation.
- Expanded transformation-state content-integrity checks.
- Review captures, recording, completion report, and material decision record.

## Out of scope

- Screenshot switching, device mockups, breakpoint selector UI, new imagery, duplicate interfaces, new dependencies, scroll hijacking, global scroll listeners, per-frame React work, interface deconstruction, Systems changes, Nexus work, other clients, EA-04, and Production deployment.

## Required user experience

The visitor approaches one live Undugu interface. As normal document scrolling advances through the bounded section, its canvas narrows and the same mounted elements reorganize. Desktop navigation resolves into a menu, type recomposes, the image changes from lateral field to sequential content, and CTAs become touch-oriented. Every state can settle as an intentional composition and the visitor exits through normal scrolling.

## Technical requirements

- Server-rendered Living Interface remains authoritative.
- One route-local Client Component owns only staged progression state.
- Intersection Observer selects discrete stages; CSS transitions continuous canvas geometry.
- Container queries own layout response to canvas width.
- No added package, request, media, layout-measurement loop, global state, or render loop.

## Mobile requirements

Mobile receives a bounded structural overview that begins with a compact lateral relationship, passes through an intermediate state, and resolves into the native full-width mobile sequence. Text becomes fully readable immediately and remains so throughout.

## Accessibility requirements

- Same semantic DOM and heading order in every state.
- No element replacement or focus-target movement in DOM order.
- State progression has concise assistive description; the visual state label is instrumentation, not a control.
- All links and the mobile disclosure retain keyboard and focus behavior.
- Reduced motion uses immediate staged changes with no canvas interpolation.
- Without JavaScript, the EA-02 interface renders normally with explanatory copy.

## Performance requirements

- Opening case-study LCP and media loading remain unchanged.
- Reuse the existing lazy Living Interface image.
- Zero per-frame React rerender, scroll handler, forced layout, or additional network media.
- Report compressed JS/CSS delta, long-task observation, and CLS behavior.

## Acceptance criteria

- The same interface—not a copy or image—performs every state.
- Navigation, columns, type, image, CTA geometry, and sequence visibly change.
- Native scroll, keyboard, reduced motion, and JS-free fallback remain complete.
- Baseline 117-case audit and added transformation-state audit pass.
- Chromium and representative native Safari pass.
- Engineering, Meaning, Impact, Content Integrity, and Performance Perception gates pass.

## Validation

- `npm run typegen`
- `npm run typecheck`
- `npm run lint`
- `npm test`
- `npm run build`
- `npm audit --audit-level=high`
- `node scripts/content-integrity-audit.mjs`
- EA-03 state audit in Chromium
- Representative native Safari review
- Keyboard, reduced-motion, JS-free, overflow, console/runtime, CLS, and long-task checks
- `git diff --check`

## Delivery report

Provide the standard completion report plus every item required by the EA-03 authorization. Stop before EA-04.
