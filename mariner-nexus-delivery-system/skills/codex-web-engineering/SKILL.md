---
name: mariner-nexus-codex-web-engineering
description: Production engineering workflow for Codex implementing premium Next.js websites from an approved project specification. Use for repository planning, feature implementation, reviews, QA, Vercel preview work, performance hardening, responsive validation, and delivery reports.
---

# Mariner Nexus Codex Web Engineering

## Mission

Faithfully engineer the approved digital experience while protecting:

- strategic intent,
- accessibility,
- responsive behavior,
- performance,
- maintainability,
- security,
- operational simplicity.

The design/specification has already been approved unless the task explicitly states otherwise.

> Execute creatively within the approved architecture. Do not silently redesign the project.

## Execution doctrine

- Server by default. Client only where interaction requires it.
- Static/cached by default. Dynamic only when useful.
- Simple before sophisticated.
- Advanced technology enhances the experience; the experience never depends on it.
- No buffering.
- Every dependency must earn its place.
- Mobile receives independent choreography.
- Accessibility is architectural.
- The system acknowledges interaction immediately.
- Earn complexity.
- The technology disappears behind the experience.
- No silent compromises.
- No drive-by refactors.

## Required repository behavior

Before modifying a project:

1. Read all applicable `AGENTS.md` files.
2. Read the project specification index.
3. Read the active execution plan.
4. Inspect existing architecture before proposing replacements.
5. Identify the exact scope and acceptance criteria.
6. Identify material conflicts before implementation.

Treat repository documentation as the durable system of record.

## Decision authority

### Level 0 — Implement freely
Pure engineering details that do not alter visible behavior or architecture intent.

Examples:
- local helper organization,
- naming of internal utilities,
- test helpers,
- component extraction.

### Level 1 — Implement within spec
Visible or architectural behavior whose intent is already approved.

Choose the implementation mechanism without changing the approved purpose.

### Level 2 — Propose before changing
Material architecture changes.

Examples:
- adding GSAP,
- adding Three.js/R3F,
- adding a CMS,
- adding a database,
- changing form storage,
- changing project schema,
- introducing authentication,
- introducing a new major dependency.

Provide:
- problem,
- proposed change,
- alternatives,
- tradeoffs,
- performance/maintenance impact.

Do not implement until approved when the task requires approval.

### Level 3 — Never change silently
Product positioning, navigation, scope boundaries, client claims, pricing model, service offering, brand identity, or other locked strategy.

## Escalation hierarchy

When ambiguity exists:

- Engineering ambiguity → make the strongest maintainable decision within the spec.
- Visual ambiguity → prefer restraint.
- Scope ambiguity → do less.
- Dependency ambiguity → use the existing stack.
- Performance conflict → protect performance.
- Accessibility conflict → protect accessibility.
- Security conflict → protect security.
- Strategy conflict → surface the conflict.

## Architecture defaults

For modern Mariner Nexus web projects unless the project spec overrides:

- Next.js App Router.
- TypeScript strict mode.
- React Server Components by default.
- Client islands for interaction.
- `next/image` for applicable raster images.
- optimized font loading.
- CSS/custom properties for design tokens.
- minimal dependency surface.
- Vercel previews before production.
- GitHub feature branches/worktrees.
- progressive enhancement.
- semantic DOM fallback for canvas/WebGL features.

Do not introduce:
- microservices,
- a database,
- authentication,
- custom CMS,
- WebSockets,
- AI features,
- 3D,
- complex animation stacks,
unless the approved project requires them.

## Implementation phases

Prefer bounded feature/phase work:

1. Foundation.
2. Corporate/core content.
3. Work/content system.
4. Experience layer.
5. Systems/operational layer.
6. Flagship advanced interaction.
7. Optional experimental enhancement.
8. Hardening.

Never start with the most technically impressive feature.

## Build-brief contract

Every substantial task should define:

- Phase objective.
- Why it exists.
- Source-of-truth documents.
- In scope.
- Out of scope.
- Required user experience.
- Technical requirements.
- Mobile requirements.
- Accessibility requirements.
- Performance requirements.
- Acceptance criteria.
- Validation commands.
- Delivery-report requirements.

Use `references/phase-brief-template.md`.

## Builder / Reviewer / QA pattern

For material UI work:

### Builder
Implements within scope.

### Design reviewer
Reviews against:
- hierarchy,
- spacing/rhythm,
- visual system,
- responsiveness,
- interaction purpose,
- generic SaaS patterns,
- unnecessary animation.

Review before editing when practical.

### Engineering reviewer
Reviews:
- server/client boundaries,
- component architecture,
- bundle cost,
- dependencies,
- accessibility,
- security,
- failure states,
- maintainability.

### QA
Tests the complete behavior, not only the diff.

Use independent worktrees/agents when alternatives genuinely benefit from comparison. Do not create parallelism that fragments the product.

## No silent compromises

If an approved interaction cannot meet performance, accessibility, compatibility, or security requirements:

1. Do not silently simplify it.
2. Record the conflict.
3. Explain the impact.
4. Recommend the strongest compliant alternative.
5. Preserve the original intent wherever possible.

## No drive-by refactors

Do not alter unrelated architecture, upgrade unrelated dependencies, or clean unrelated files merely because they are nearby.

Record worthwhile follow-ups separately.

## Dependency governance

Before adding a dependency, answer:

- What exact problem does it solve?
- Why is the current stack insufficient?
- Bundle/runtime cost?
- Maintenance health?
- Browser implications?
- Accessibility implications?
- Can a smaller implementation solve the same problem?

## Responsive engineering

Content parity is required.

Interaction parity is not.

Desktop, tablet, and mobile may use different choreography when that creates the stronger experience.

Never solve responsive work by merely shrinking the desktop layout.

## Advanced graphics

Use DOM/SVG first when it can achieve the intended interaction.

Three.js/WebGL/WebGPU is allowed only when it materially improves:
- comprehension,
- spatial relationships,
- emotional experience,
or another approved goal.

Always preserve:
- semantic equivalent,
- reduced-motion behavior,
- capable fallback,
- non-blocking load.

## Performance

Protect Core Web Vitals and perceived responsiveness.

Rules:
- critical content before advanced effects,
- lazy-load heavy experiences,
- preload only when justified,
- avoid layout thrashing,
- avoid unnecessary hydration,
- respond to input immediately,
- never block navigation for animation,
- no fake loading screens.

## Accessibility

Minimum:
- semantic HTML,
- correct heading order,
- keyboard operability,
- visible focus,
- reduced motion,
- accessible names,
- useful errors,
- sufficient contrast,
- touch targets,
- no critical hover-only content,
- DOM/SVG equivalent for canvas-only visual information.

## Failure states

Design and implement intentional fallbacks for:
- external API failure,
- form persistence failure,
- image/video failure,
- advanced interaction initialization failure,
- external live-project outage,
- JavaScript degradation where practical.

No infinite spinners or destructive form resets.

## Validation

Before completion, run all project-mandated checks plus applicable:

- typecheck,
- lint,
- production build,
- unit/integration tests,
- browser verification,
- desktop/tablet/mobile visual review,
- keyboard review,
- reduced-motion review,
- broken-link checks,
- form success/error path,
- performance inspection for heavy changes.

## Definition of done

A feature is done only when it is:

- Functional.
- Intentional.
- Responsive.
- Accessible.
- Performant.
- Maintainable.
- Validated.
- Documented where material decisions changed.

## Completion report

Every completed task must report:

- Implemented.
- Files changed.
- Validation performed and results.
- Responsive review.
- Accessibility review.
- Performance/bundle implications.
- Deviations from specification.
- Follow-up recommendations.
- Decisions requiring approval.

Use `references/completion-report.md`.
