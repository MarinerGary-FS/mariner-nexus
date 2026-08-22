# Phase 04B — Work Portal + Responsive Transformation

## Status

COMPLETE — awaiting review 2026-08-21

## Phase objective

Make entry from `/work` into Undugu feel compositionally intentional without delaying navigation, and add one truthful user-controlled demonstration on `/work/undugu` showing that the production experience changes architecture across desktop, tablet, and mobile.

## Why this exists

The Work system should prove that Mariner Nexus designs complete responsive experiences rather than portfolio thumbnails or desktop screenshots that merely shrink.

## Source of truth

- `AGENTS.md`
- canonical `docs/mariner-nexus-redesign/` doctrine
- DEC-027 and DEC-028
- approved Phase 04B authorization
- verified production Undugu site and controlled repository media

## In scope

- Work Portal behavior on `/work` coordinated with Phase 04A identity state.
- Immediate semantic navigation to `/work/undugu` with pointer, focus, proximity, tablet, and touch treatment.
- One manual Desktop / Tablet / Mobile responsive demonstration inside the Undugu Experience section.
- Authentic controlled captures of the production Undugu experience, including a new tablet capture if required.
- Semantic responsive controls, active-state announcement, reduced-motion parity, and responsive layouts.
- Standard accessibility, performance, media, route, authorization, and review validation.

## Out of scope

- Mariner Thread, contextual navigation, global Signal expansion, Experience → Systems Deconstruction, systems grammar, Nexus, 3D/canvas/WebGL/WebGPU, GSAP, custom cursor, smooth-scroll, global page transitions, inquiry persistence, new projects, or Work filtering.

## Required user experience

- Work media is the dominant navigation surface rather than a card illustration.
- Project proximity establishes identity; pointer/focus strengthens portal authority without hiding information or delaying the route.
- Touch users receive the same clear, large project destination without hover dependence.
- The responsive demonstration lets the visitor intentionally select Desktop, Tablet, or Mobile and immediately see an authentic composition for that context.
- No device hardware, looping advertisement behavior, or repeated demonstration.

## Technical requirements

- Portal enhancement uses existing Phase 04A state plus CSS `:hover`/`:focus-within`; no portal client controller.
- Responsive controls use one small Client Component with native buttons and `aria-pressed`.
- Server routes continue to own content and project data.
- All captures use `next/image`, intrinsic dimensions, responsive `sizes`, and controlled local WebP assets.
- Normal Next.js links navigate immediately; no route-transition framework.
- No new package.

## Mobile requirements

Mobile Portal is a direct sequence with a near-viewport-width media link and clear text destination. Responsive states use the available width rather than imitating physical device sizes; the captured composition itself demonstrates mobile architecture.

## Accessibility requirements

- Portal retains semantic links and visible Mineral Teal focus.
- Responsive buttons have accessible names, `aria-pressed`, minimum touch targets, and a text/structural active indicator.
- Selection acknowledgement is immediate and does not depend on color.
- Reduced motion removes dimension/image interpolation while keeping every control and state.
- No hover-only information.

## Performance requirements

- No blocking media or preload expansion.
- Default responsive capture loads with the section; alternate states remain optimized and non-priority.
- Client component owns only state selection and no global listener.
- Dimension transitions use composited/paint-safe properties where possible and create no layout shift outside the reserved stage.
- Record route-specific client-JS and image costs.

## Acceptance criteria

1. Undugu feels like an environment, not a portfolio thumbnail.
2. Portal feedback never delays or replaces navigation.
3. Responsive states show authentic composition change, not arbitrary crops.
4. Manual controls are immediately understandable to nontechnical visitors.
5. Desktop, tablet, and mobile page choreography are intentional.
6. Keyboard, touch, reduced-motion, and no-hover users lose no information.
7. Phase 04A identity behavior remains coherent.
8. Unauthorized projects remain non-public.
9. Standard validation and requested review assets pass.

## Validation

```bash
npm run typegen
npm run typecheck
npm run lint
npm run build
npm audit
git diff --check
```

Then verify accessibility, keyboard/focus, reduced motion, 1440/1024/390 composition, overflow, browser logs, CLS, client bundle impact, optimized images, canonical/internal/external routes, and unauthorized-project rejection.

## Delivery report

Create `docs/exec-plans/active/phase-04b-completion-report.md`, record material decisions, provide all requested review evidence, and stop before Phase 04C.
