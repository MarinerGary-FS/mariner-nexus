# 08 — Technical Architecture

## Principle

> The technology must disappear behind the experience.

The site may look technically sophisticated while remaining operationally disciplined.

## Core stack

- Next.js 16+ App Router.
- TypeScript.
- Tailwind CSS / project styling system.
- Vercel.
- GitHub.

## Rendering

- Server Components by default.
- Client Components only for genuine interaction.
- Static/cached public content wherever practical.
- `/start` submission is dynamic.
- Avoid unnecessary hydration.

## V1 deliberately excludes

- custom database,
- Supabase,
- custom CMS,
- custom CRM,
- authentication,
- internal admin dashboard,
- WebSockets,
- microservices,
- AI features,
- required 3D.

## Content

Project/case-study content is typed structured repository content in V1.

Common schema:
- slug,
- client,
- client state,
- summary,
- situation,
- objective,
- strategy,
- experience,
- systems,
- transformation,
- live URL,
- visual identity,
- media.

Common content schema does not imply identical visual presentation.

## Client identity takeover

Use scoped design tokens/CSS custom properties rather than duplicated style systems.

## Motion

Preferred hierarchy:
1. CSS for simple state/hover/focus.
2. React motion library for controlled transitions/layout interaction.
3. GSAP only if a specific complex sequence justifies it.

Do not replace native browser scrolling.

## Nexus

Phase 1 implementation:
- DOM/SVG,
- React,
- accessible semantic representation,
- responsive/mobile translation.

Only evaluate Three.js/WebGL/WebGPU after the DOM/SVG implementation succeeds and the advanced layer materially improves the experience.

## Loading hierarchy

Tier 0:
navigation, typography, hero, core content.

Tier 1:
standard interactive experiences.

Tier 2:
Nexus/advanced motion.

Tier 3:
purely expressive enhancement.

Lower tiers may not block higher-priority content.

## Performance targets

Protect Core Web Vitals.

Internal preference:
- LCP under ~2.0s where realistic,
- INP under ~150ms where realistic,
- CLS effectively zero.

Advanced interactions must lazy-load and prepare before entry when useful.

## Analytics

V1:
- Vercel Web Analytics,
- Vercel Speed Insights.

Meaningful custom events may include:
- project_view,
- case_study_open,
- live_project_visit,
- capabilities_explore,
- start_project_begin,
- start_project_complete,
- nexus_interaction.

## `/start`

Flow:

browser UX → server validation → secure server endpoint → Google Workspace persistence → email notification → success/error response.

The browser never receives Google credentials.

Suggested record fields:
- Inquiry ID.
- Submitted At.
- Name.
- Organization.
- Email.
- Phone.
- Current Website.
- Situation.
- Vision / Objective.
- Success Definition.
- References.
- Timeline.
- Additional Context.
- Internal Status.
- Internal Notes.
- Last Contacted.

Suggested internal statuses:
NEW → REVIEWING → CONTACTED → DISCOVERY → PROPOSAL → WON / LOST / ARCHIVED.

Email is notification, not source of truth.

## Security

- server-side validation,
- reasonable input limits,
- abuse/rate controls,
- protected credentials,
- environment variables,
- safe URL handling,
- graceful errors.

Introduce bot protection only when necessary.

## Media

- optimized responsive images,
- controlled project captures instead of pervasive live iframes,
- live project available through explicit outbound link,
- video poster-first and non-blocking.

## Accessibility

### Typography and content integrity

> Every visible word must remain fully readable at every supported viewport.

No production route may allow text-to-text overlap, viewport or container clipping, hidden characters, sticky/fixed obstruction, unsafe negative-margin collision, unreadable line-height compression, CTA-label clipping, decorative-layer obstruction, or project typography escaping its owned canvas.

Major phase QA must combine responsive visual review with lightweight bounding-box checks for critical text and adjacent content. Captures must show enough of the section above, body, and transition below to expose boundary defects. Typography/content integrity is an explicit PASS/FAIL gate in Chromium and representative Safari review; absence of a horizontal scrollbar is not sufficient evidence.

Responsive QA must validate both settled breakpoints and transitional compositions whenever an experience changes layout dynamically. No horizontal overflow is necessary but not sufficient: every visible word and control must remain readable throughout the transformation.

- semantic HTML,
- keyboard,
- focus,
- reduced motion,
- contrast,
- labels,
- errors,
- no color-only information,
- no hover-only critical content,
- semantic fallback for advanced graphics.

## SEO

- route-specific metadata,
- dynamic case-study metadata,
- OpenGraph imagery,
- sitemap,
- robots,
- canonical URLs,
- semantic content.

## Deployment

Codex → GitHub feature branch/worktree → Vercel preview → review → merge → production.

## Build order

1. Foundation.
2. Core content.
3. Work system.
4. Experience layer.
5. Systems layer.
6. Nexus.
7. Optional advanced enhancement.
8. Hardening.

## Maintainability test

> Could Gary and Codex confidently understand and modify this architecture six months from now?

If not, simplify it.
