# Phase 02 — Corporate Core

## Status

COMPLETED — awaiting review

## Phase objective

Build the complete understandable Mariner Nexus corporate experience before any advanced signature interaction. The experience must explain who Mariner Nexus is, what it does, who it serves, why it is different, how it works, and what a potential client should do next without relying on spectacle.

## Source of truth

- `AGENTS.md`
- `docs/mariner-nexus-redesign/README.md`
- `docs/mariner-nexus-redesign/01-brand-positioning.md`
- `docs/mariner-nexus-redesign/02-service-architecture.md`
- `docs/mariner-nexus-redesign/03-audience-architecture.md`
- `docs/mariner-nexus-redesign/04-information-architecture.md`
- `docs/mariner-nexus-redesign/05-experience-architecture.md`
- `docs/mariner-nexus-redesign/06-visual-system.md`
- `docs/mariner-nexus-redesign/08-technical-architecture.md`
- `docs/mariner-nexus-redesign/09-execution-plan.md`
- `docs/mariner-nexus-redesign/decisions.md`
- user-approved Phase 02 authorization

## In scope

- Complete restrained homepage arrival, audience recognition, and Strategy × Experience × Systems introduction.
- Complete corporate content for `/capabilities`, `/approach`, and `/company`.
- Build `/start` presentation layer only with the approved inquiry questions and explicit non-persistent handoff state.
- Add restrained cross-links and footer support where needed.
- Create independent desktop, tablet, and mobile composition using the Phase 01 visual foundation.
- Update route metadata where final corporate content materially changes its description.
- Record material corporate-core composition decisions.

## Out of scope

- Work transformation library or final case-study system.
- Client identity takeover, Experience → Systems deconstruction, Nexus, Mariner Thread, contextual navigation, or responsive transformation demonstration.
- Three.js, WebGL, WebGPU, GSAP, advanced scroll choreography, or advanced motion.
- Google Workspace persistence, acquisition endpoint changes, analytics expansion, additional client publication, CMS, database, authentication, or unrelated dependencies.

## Required experience

The story must progress through Trust → Recognition → Intelligence → Confidence. A first-time visitor must understand the company and path to action with all advanced interactions absent.

## Technical requirements

- Server Components by default.
- CSS and semantic HTML for all Phase 02 presentation.
- No new runtime dependency.
- Preserve the approved Phase 01 shell and provisional desktop active-state architecture.
- Keep `/start` non-persistent and explicitly avoid submitting sensitive inquiry data until the approved Google Workspace phase.

## Responsive requirements

- Desktop uses architectural relationships and whitespace rather than decorative density.
- Tablet maintains deliberate offsets and intermediate compositions.
- Mobile preserves message parity through sequence, rhythm, concise measures, and touch-safe controls rather than simple desktop stacking.

## Accessibility requirements

- Correct heading hierarchy and landmarks.
- Visible focus and sufficient contrast.
- Native form controls with labels, instructions, and disabled/non-submitting presentation state.
- No color-only meaning.
- Reduced motion introduces no dependency because Phase 02 adds no animation.

## Performance requirements

- Static prerendering for all corporate routes.
- No image, video, animation, or third-party script required for comprehension.
- CLS effectively zero in bounded production review.

## Acceptance criteria

1. Homepage communicates approved arrival, recognition states, and interconnected disciplines.
2. `/capabilities` presents complete Strategy, Experience, and Systems content without an agency service grid.
3. `/approach` explains all eight approved steps in business language.
4. `/company` communicates philosophy, model, adaptability, brand tension, and truthful founder context without manufactured scale.
5. `/start` presents every approved inquiry question without package, budget, AI, marketing, or service-SKU qualification.
6. Desktop, tablet, and mobile preserve the same story through intentional composition.
7. Old AI/evolution positioning is absent from the new corporate core.
8. Standard validation and specified review captures pass.

## Validation

```bash
npm run typegen
npm run typecheck
npm run lint
npm run build
npm audit
git diff --check
```

Then perform production browser accessibility, keyboard/focus, reduced-motion, CLS, overflow, browser-error, metadata, route, internal-link, and requested viewport reviews.

## Delivery report

Create `docs/exec-plans/active/phase-02-completion-report.md`, update material decisions, and stop for review without beginning Phase 03.
