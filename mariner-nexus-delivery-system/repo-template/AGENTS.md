# Mariner Nexus Repository Operating Rules

Read `docs/mariner-nexus-redesign/README.md` before making architectural, visual, positioning, or experience changes to the Mariner Nexus redesign.

## Product doctrine

- Experience-based.
- Strategy-led.
- Solution-specific.
- Adaptable by design.
- Business before interface.
- Complexity should be discovered, never imposed.
- Serious before spectacular.
- The website itself is part of the proof.
- The system listens.
- No buffering.
- The technology disappears behind the experience.
- Mariner Nexus owns the frame. Client work may transform the canvas.
- Do not decorate complexity. Reveal structure.

## Engineering doctrine

- Next.js App Router + TypeScript.
- Server Components by default.
- Client Components only where interaction requires them.
- Static/cached public content wherever practical.
- Progressive enhancement.
- DOM/SVG first for the Nexus.
- Do not add Three.js/WebGL/WebGPU unless explicitly approved after the SVG/DOM experience is validated.
- No AI functionality.
- No custom CMS/database/authentication in V1.
- Google Workspace is the V1 project-inquiry persistence layer.
- New dependencies require justification.
- Mobile receives independent choreography.
- Accessibility and reduced motion are mandatory.
- Do not silently change navigation, positioning, service scope, visual doctrine, or acquisition architecture.

## Required documentation

- `docs/mariner-nexus-redesign/01-brand-positioning.md`
- `docs/mariner-nexus-redesign/02-service-architecture.md`
- `docs/mariner-nexus-redesign/03-audience-architecture.md`
- `docs/mariner-nexus-redesign/04-information-architecture.md`
- `docs/mariner-nexus-redesign/05-experience-architecture.md`
- `docs/mariner-nexus-redesign/06-visual-system.md`
- `docs/mariner-nexus-redesign/07-signature-interactions.md`
- `docs/mariner-nexus-redesign/08-technical-architecture.md`
- `docs/mariner-nexus-redesign/09-execution-plan.md`
- `docs/mariner-nexus-redesign/decisions.md`
- active plan under `docs/exec-plans/active/`

## Completion requirements

Before declaring work complete:

1. Run all available type, lint, build, and relevant test commands.
2. Review desktop, tablet, and mobile.
3. Review keyboard/focus behavior.
4. Review reduced-motion behavior for animated work.
5. Report performance implications for material interaction changes.
6. Record material architecture decisions.
7. Report deviations from the specification.
8. Do not include unrelated refactors in the same task.
