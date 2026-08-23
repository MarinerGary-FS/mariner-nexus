# Experience Amplification 03 — Completion Report

## Status

Approved and closed. No Production deployment, EA-04 deconstruction, Systems change, Nexus work, or additional client project is included in this phase.

Gary approved Engineering, Meaning, Impact, Content Integrity, and Performance Perception on 2026-08-22. The approved principles are now durable project doctrine:

- Responsive design is demonstrated through structural reorganization rather than screenshot switching.
- The changing canvas may reveal responsive intelligence without changing the host viewport.
- Intermediate responsive compositions must look intentionally designed.
- Responsive QA must validate transitional compositions as well as settled breakpoints.

## Responsive-performance architecture

`ResponsivePerformance` wraps the completed EA-02 server-rendered interface without duplicating it. Six ordinary document-flow markers identify Wide, Compressing, Intermediate, Reorganizing, Narrow, and Settled. One Intersection Observer selects the active stage. The canvas width transitions continuously; CSS container queries perform staged architectural changes inside it.

The result is one experience and multiple compositions. There is no screenshot switching, device mockup, carousel, crossfade, breakpoint selector, alternate semantic tree, viewport mutation, or browser resize.

## Same-interface verification

The same header, logo, navigation links, headline, paragraph, CTA links, image, accessible names, IDs, and DOM order remain mounted across every state. State changes alter only container width and CSS layout. The Undugu photograph is requested once and never reloads between stages.

## Canvas and container strategy

The Mariner page owns a fixed responsive-performance region. Inside it, `.mn-responsive-canvas-shell` is an inline-size container whose width progresses from 100% to 42% on desktop. The Undugu interface responds to that actual available width through `@container undugu-stage` rules. This makes the proof truthful: the host changes the canvas, and the client interface responds.

Global horizontal containment changes from `overflow-x: hidden` to `overflow-x: clip`. Hidden overflow established an unintended vertical scroll container in Chromium/Safari and prevented standards-based sticky positioning. `clip` preserves zero horizontal page scrolling without creating that scroll container.

## Scroll progression and sticky decision

The performance uses native document scrolling through a bounded six-marker section. A section-local sticky stage remains at the normal navigation offset while each marker crosses a narrow center reading band. No wheel interception, scroll snap, smooth-scroll library, fake scrollbar, global scroll listener, or scroll-driven render loop exists. The visitor can pause, reverse, or leave naturally.

The bounded sticky treatment was retained because it makes the stable browser-versus-changing-client-canvas relationship unmistakable. It releases normally after Settled; no content below is trapped.

## Continuous versus staged decision

The implementation combines both approaches:

- Continuous: canvas width and restrained surface geometry transition for 720ms with an architectural ease.
- Staged: container-query thresholds change navigation, grid/flex mode, typography, imagery, actions, and sequence only at viable compositions.

This avoids both constant per-pixel JavaScript and broken mathematical intermediate layouts. Every named state can stand as an intentional design.

## Structural transformations

### Navigation

Wide shows the complete production Undugu link/action architecture. Compression reduces secondary links and the Donate action. Narrow replaces the desktop group with the existing native Menu disclosure. The same links remain in the same DOM.

### Typography

Display type recalculates against container units, changes line distribution, tightens its owned measure, and preserves the italic emphasis relationship. It never scales as part of one flattened screenshot.

### Image

Wide/intermediate use a right-side visual field with a responsive crop and text/image overlap gradient. Narrow makes the same image sequential content beneath the actions with a bounded horizontal crop.

### CTAs

Wide keeps actions side by side. Intermediate protects their legibility as the text measure changes. Narrow stacks them as full-width touch targets without changing link meaning.

## Intermediate and tablet composition

Intermediate retains a deliberate two-part layout: reduced navigation, compact display typography, complete copy/actions, and a dominant but balanced gathering field. Tablet hosts perform a Wide-ish → Intermediate → Narrow progression based on their available physical canvas rather than attempting the full 1440px spread.

## Mobile-host interpretation

Mobile begins with a readable two-column structural overview: compact hero copy and lateral imagery show the desktop relationship without tiny desktop chrome. Actions are temporarily suppressed only in this transitional overview. Intermediate restores the complete readable message/actions and a sequential image. Settled becomes the full-width native mobile interface. EA-03 is never hidden on mobile.

## Keyboard, focus, and interaction

DOM order and focus targets never change, so keyboard focus cannot be destroyed by recomposition. The Undugu Menu remains a native button with synchronized `aria-expanded`/visibility state, seven available disclosure links/actions, and the existing visible focus treatment. Keyboard/page navigation advances normal document scroll without requiring wheel precision.

## Reduced motion

The same Wide, Intermediate, and Narrow states remain available, but canvas and surface transition durations become effectively immediate. Content, state meaning, navigation, imagery, and actions remain complete.

## JavaScript-free fallback

Without JavaScript, `data-enhanced` is absent: markers remain hidden, sticky positioning is not activated, and the complete EA-02 interface renders once as an ordinary responsive section beneath the concise adaptation statement. Ten semantic links and the complete message remain present with zero overflow.

## Server/client boundary

- Server: Undugu copy, fonts, semantic section, header content, image, CTA group, and all project narrative.
- Existing client island: mobile menu boolean only.
- New client island: one stage enum, one Intersection Observer, and enhancement activation on the bounded root.
- Unchanged: Project Identity controller, global navigation, Systems, Nexus, acquisition, analytics, routes, and operational integrations.

## Performance impact

Compared with approved EA-02/content-integrity commit `9179cfa`:

- Total generated JavaScript: 259,955 → 260,480 bytes gzip (**+525 bytes gzip**).
- Generated CSS: 31,626 → 32,964 bytes gzip (**+1,338 bytes gzip**).
- `/work/undugu` HTML: 48,113 → 49,311 bytes raw (**+1,198 bytes**); 9,052 → 9,328 bytes gzip (**+276 bytes gzip**).
- New media transfer: **0 bytes**. Existing lazy EA-02 imagery is reused.
- Runtime: one disconnecting Observer watches six local markers; no scroll handler, ResizeObserver, layout measurement, requestAnimationFrame loop, timer, network request, or per-frame React render.
- Long-task observation through the full progression: **none**.
- Horizontal overflow: **0** at all reviewed host widths/states.
- Page-load LCP strategy: unchanged; the opening case-study screenshot remains eager/priority and the performance remains below it.
- Layout shift: no page-load or surrounding-document displacement is introduced. The only movement is the deliberately bounded recomposition inside the fixed sticky stage; synthetic programmatic scrolling reports those intentional internal movements as layout-shift entries, so they are assessed visually/state-by-state rather than represented as unexpected load CLS.

## Content Integrity expansion

The canonical audit retains the 117 route/width baseline and adds 12 EA-03 cases covering all six desktop states plus representative tablet and mobile states. Current result: **129 audited / 0 failures**.

Every state verifies text/CTA viewport containment, overflow-ancestor containment, unintended heading/text intersections, and horizontal page overflow. Manual review additionally covers image/copy occlusion, focus geometry, menu state, and transition frames.

## Safari findings

Native Safari 26.5 passed representative Wide and Compressing states using the real sticky progression. Sticky behavior remained bounded after the `overflow-x: clip` correction; container-query typography, image crop, CTAs, font metrics, and zero-overflow behavior matched Chromium. Focus behavior remains native. No SVG/clip-path dependency or dynamic viewport-unit defect was introduced.

## Legacy responsive-selector retirement

The old Desktop / Tablet / Mobile screenshot selector was already unmounted from the route and became redundant. Its dormant component and isolated styles are retired in this approved EA-03 closeout. Historical Phase 04B evidence remains intact.

## EA-04 readiness

Meaningful boundaries remain identifiable: `UnduguExperienceHeader` owns navigation; `mn-undugu-live-copy` owns the hero message; `mn-undugu-live-image` owns imagery; `mn-undugu-live-actions` owns participation controls. EA-04 can later address those intact conceptual layers without undoing EA-03. No node/system/data/workflow deconstruction has begun.

## Validation

Passed:

```text
npm run typegen
npm run typecheck
npm run lint
npm test                               12/12
npm run build                          19 pages
npm audit --audit-level=high           0 vulnerabilities
node scripts/content-integrity-audit.mjs
                                        129 audited / 0 failures
git diff --check
```

Chromium review passed desktop/tablet/mobile progression, normal entry/exit, keyboard focus, menu disclosure, reduced motion, JavaScript-free fallback, no horizontal overflow, no browser/runtime errors, no observed long tasks, and controlled sticky release. Native Safari 26.5 representative review passed.

## Review evidence

`docs/exec-plans/review-assets/ea-03/` contains:

- Desktop Wide, Compressing, Intermediate, Reorganizing, Narrow, and Settled captures at 1440px.
- Tablet Wide, Intermediate, and Settled captures at 1024px.
- Mobile Wide, Intermediate, and Settled captures at 390×844.
- Reduced-motion Wide, Intermediate, and Narrow captures.
- `responsive-performance-review.webp`, a nine-second animated recording showing approach, progression, settled composition, and normal exit.
- `before-after.md`, the EA-02/EA-03 capability comparison.

## Acceptance gates

- **Engineering Gate — PASS.** Bounded, progressive, accessible, dependency-free, server-led, validated, and compatible with canonical QA.
- **Meaning Gate — PASS.** The stable browser surrounding a visibly changing client canvas communicates intentional design for different available spaces without breakpoint explanation.
- **Impact Gate — PASS.** The same selectable text, live links, logo, and photograph visibly reorganize; the effect cannot be mistaken for image swapping, tabs, or three demos.
- **Content Integrity Gate — PASS.** 129/129 automated cases plus transitional visual inspection pass.
- **Performance Perception Gate — PASS.** No loading, media reload, hydration flash, long task, scroll interception, or per-frame resize lag is present.

## Deviations

- The required recording is delivered as an animated WebP rather than MOV/MP4 because the QA environment has no video encoder. It contains verified browser frames and requires no narration.
- Safari representative testing covered Wide and Compressing native states; the complete state matrix remains Chromium-automated because Safari remote automation is disabled in the local Safari settings.

## Follow-ups

- After approval, remove the dormant screenshot-selector implementation and decide which underlying captures remain useful as historical QA fixtures.
- Keep transitional-composition checks in future dynamic responsive work; do not reduce the canonical suite back to settled breakpoints.

## Decisions requiring Gary approval

None. The five gates and selector retirement are approved.

**Typography/content integrity: PASS**

EA-04 is excluded from this commit.
