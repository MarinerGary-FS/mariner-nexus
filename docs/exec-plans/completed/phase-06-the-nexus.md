# Phase 06 — The Nexus

## Status

Active. Phase 05 is committed, pushed, synchronized at `0/0`, and archived independently.

## Phase objective

Build the first production Nexus as a typed, semantic DOM/SVG interaction that visibly recombines the same Mariner capabilities around four different objectives.

## Why this exists

The Nexus is the earned visual peak of the homepage. It must make solution-specific thinking visible and leave the visitor asking what architecture Mariner Nexus would build around their objective.

## Source of truth

- `docs/mariner-nexus-redesign/README.md`
- `docs/mariner-nexus-redesign/01-brand-positioning.md`
- `docs/mariner-nexus-redesign/02-service-architecture.md`
- `docs/mariner-nexus-redesign/05-experience-architecture.md`
- `docs/mariner-nexus-redesign/06-visual-system.md`
- `docs/mariner-nexus-redesign/07-signature-interactions.md`
- `docs/mariner-nexus-redesign/08-technical-architecture.md`
- `docs/mariner-nexus-redesign/decisions.md`
- Approved Phase 06 authorization

## In scope

- Typed objective, node, connection, position, explanation, outcome, and mobile-order data.
- Core default architecture plus Build something new, Transform what exists, Connect the experience, and Explore what’s possible.
- Persistent Strategy / Experience / Systems / Outcome nodes that visibly move and recombine.
- Semantic objective controls, node exploration, selected/current state, connection labels, and textual relationship equivalent.
- DOM nodes with a restrained SVG connection layer.
- Signal → reorganize → settle behavior using CSS and local state.
- Homepage placement after Systems and before Approach reassurance.
- Desktop spatial, tablet grouped, mobile vertical, reduced-motion, and JavaScript-free states.
- Peak-to-restraint environmental release toward Approach.

## Out of scope

- Three.js, React Three Fiber, WebGL/WebGPU, canvas, D3, graph/physics libraries, GSAP, AI, persistence, CMS/database/authentication, new case studies, Approach redesign, hardening, Lab, or advanced-graphics evaluation.

## Required user experience

- Before interaction, Strategy, Experience, and Systems visibly converge toward an outcome.
- Four objective-led choices are obvious, concise, and not organized by industry, budget, or technology.
- Selecting an objective acknowledges input, moves persistent nodes, activates a defensible path, and settles quietly.
- Selecting a node exposes one concise business-language explanation without a modal.
- Objective summary, relationship sequence, and outcome remain understandable without interpreting coordinates.
- After the Nexus, density and darkness release into the existing Approach reassurance.

## Technical requirements

- Server-render the initial Nexus state and all surrounding content.
- Use one bounded Client Component with local objective, selected-node, and short transition-phase state.
- Render stable union nodes from typed repository data; reuse keys so capabilities move rather than remount as unrelated diagrams.
- Use a small SVG line layer only for visual relationships; semantic DOM contains the authoritative sequence.
- No request, global store, continuous animation, render loop, scroll listener, or new dependency.

## Mobile requirements

- Objective controls use a compact two-column field with complete visible labels and no horizontal scroll.
- Replace coordinate-based graph layout with an ordered vertical connection path from objective through relevant capabilities to outcome.
- Retain node selection, selected explanation, state semantics, and content parity.

## Accessibility requirements

- Objective controls and nodes are native buttons with `aria-pressed`.
- A status region exposes the selected objective and settled architecture only after deliberate selection.
- An ordered textual relationship sequence identifies nodes, relationship verbs, and outcome.
- Focus remains the global 2px SIGNAL outline/4px offset and differs from hover/current/signal.
- SVG is `aria-hidden`; no information exists only in line geometry or color.
- Reduced motion changes positions immediately and preserves every state.

## Performance requirements

- Small homepage-only module; no dependency, large SVG, preload, or blocking asset.
- Stable canvas dimensions prevent layout shift.
- Re-render only the bounded Nexus island on selection.
- Report module and homepage route-client chunk sizes.

## Acceptance criteria

1. Different objectives visibly produce different architectures using persistent core nodes.
2. The default state communicates Strategy × Experience × Systems → Outcome without interaction.
3. All four objectives stay within approved CORE/SCOPED capability boundaries.
4. Reorganization demonstrates adaptability rather than unrelated diagram replacement.
5. Thread, Signal, Systems, Node, Connection, Flow, and State remain one grammar.
6. Desktop, tablet, and mobile each use an intentional model.
7. Keyboard, screen-reader, reduced-motion, and static-fallback users receive the full concept.
8. The environment feels visionary but architectural, then releases calmly toward Approach.
9. Performance remains strong and no continuous motion remains after settlement.
10. Phase 06 ends without advanced-graphics evaluation or Phase 07 work.

## Validation

```text
npm run typegen
npm run typecheck
npm run lint
npm run build
npm audit
git diff --check
```

Browser review at 1440×1000, 1024×900, and 390×844; all objective states, rapid switching, node detail, keyboard/focus, semantic status, reduced motion, JavaScript-disabled fallback, overflow, console, CLS observation, context/Thread/Signal/Systems and Work/identity regressions, routes/redirects/404s/internal links, module and route JS.

## Delivery report

Produce `docs/exec-plans/active/phase-06-completion-report.md` with architecture, data model, objectives, node/connection grammar, reorganization, integrations, explanation, responsive behavior, accessibility, static fallback, boundaries, loading/module impact, validation, assets/recording, deviations, follow-ups, decisions, and explicit stop before advanced graphics.
