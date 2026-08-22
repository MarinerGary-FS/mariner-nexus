# Phase 03 — Work System + Undugu Transformation Record

## Status

COMPLETE — awaiting review 2026-08-21

## Objective

Build the reusable repository-driven Work architecture and the first complete public transformation record using only authorized, verified Undugu content. Move visitors from understanding the Mariner Nexus proposition to judging finished work directly through See it → Understand it → Experience it live.

## Source of truth

- `AGENTS.md`
- canonical `docs/mariner-nexus-redesign/` doctrine
- approved Phase 03 authorization
- verified repository Undugu content and media
- the approved production Undugu URL for outbound validation

## In scope

- Typed project schema and repository content registry.
- Publication-status and approved-project route guardrails.
- Complete `/work` visual entry surface.
- Reusable transformation-record primitives that preserve project-specific composition.
- Complete `/work/undugu` record: Client, Situation, Objective, Strategy, Experience, Systems, Transformation, and Live Experience.
- Scoped Undugu visual-identity tokens inside project surfaces only.
- Controlled optimized local project media.
- Static params, route metadata, Open Graph/share architecture, canonical URL, and secure live-project link.
- Desktop, tablet, and mobile Work choreography.

## Out of scope

- Any additional public project.
- Full Client Identity Takeover, Mariner Thread, Experience → Systems Deconstruction, Nexus, contextual navigation, responsive transformation signature interaction, WebGL, Three.js, WebGPU, GSAP, inquiry persistence, analytics expansion, testimonial invention, CMS, database, or authentication.

## Required experience

- Finished work gets the first word.
- Explanation follows the visual proof.
- The project remains clearly inside Mariner Nexus.
- The record distinguishes Situation, Objective, Strategy, Experience, Systems, and Transformation through varied composition instead of six identical cards.
- The final outbound action lets the visitor judge the live production work independently.

## Technical requirements

- Server Components by default.
- Explicit TypeScript project model and repository content.
- `generateStaticParams` exposes approved/published projects only.
- Unknown and unauthorized project slugs return not found.
- `next/image` with known dimensions and responsive sizes.
- Scoped CSS custom properties for client identity; no global environment takeover.
- No new dependency.

## Content integrity

- Use only verified Undugu facts.
- Do not fabricate metrics, systems, strategy actions, scale, nonprofit status, impact, audience, or operational maturity.
- Record missing factual inputs under `Gary Input Required` without blocking the complete structure.

## Responsive requirements

- Desktop gives project media architectural scale.
- Tablet creates deliberate media/text relationships on the eight-column grid.
- Mobile treats the project as an immersive sequence with strong media presence, readable measures, and clear return/live paths.

## Accessibility and performance

- One clear heading hierarchy, useful image alternatives, secure and named external navigation, visible focus, sufficient contrast, and reduced-motion parity.
- Static output, optimized local images, no iframe or live-site dependency, no new client JavaScript, and effectively zero CLS.

## Acceptance criteria

1. `/work` shows only Undugu and lets the finished work dominate.
2. `/work/undugu` supports See it → Understand it → Experience it live.
3. The typed model contains every authorized schema field and publication guardrail.
4. No unauthorized project is publicly routable under `/work/[project]`.
5. Every factual statement is supported by repository or verified production evidence; gaps are reported.
6. Client identity remains scoped to project presentation surfaces.
7. Metadata and share output are deliberate and nontechnical.
8. Standard validation and every requested review capture pass.

## Validation

```bash
npm run typegen
npm run typecheck
npm run lint
npm run build
npm audit
git diff --check
```

Then verify route authorization, metadata/Open Graph, local images, external project URL, internal links, axe, keyboard/focus, reduced motion, responsive overflow, browser errors, and CLS on production output.

## Delivery

Create `docs/exec-plans/active/phase-03-completion-report.md`, add material decisions to `decisions.md`, and stop for review before Phase 04.
