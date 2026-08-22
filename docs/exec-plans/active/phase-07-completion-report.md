# Phase 07 Completion Report — Reassurance, Conversion, and Inquiry

## Status and outcome

**LIVE VERIFIED — 2026-08-22.** Implementation, repository-controlled validation, and the Preview and Production operational integration gates are complete. Final hardening has not begun.

The journey now resolves as Nexus → Reassurance → Possibility → One Decision → Structured Inquiry. Complexity drops after the Nexus; a restrained eight-step method proves discipline, a quiet possibility moment creates self-projection, and one light-environment decision leads into a serious human-reviewed inquiry.

The existing protected Google Workspace, Resend, and Vercel infrastructure was configured and manually verified end to end. Preview inquiry `MN-20260822-41801F29` produced one correctly mapped 17-cell row with status `NEW` and source `preview / website`; the Production Sheet remained untouched and the Preview notification reached `gary.mariner@gmail.com`. Production inquiry `MN-20260822-C2B11A4B` produced one correctly mapped 17-cell row with status `NEW` and source `production / website`; the Preview Sheet remained unchanged and the Production notification reached `info@marinernexus.com` from the verified sender `inquiries@marinernexus.com`.

## Homepage implementation

The post-Nexus release now enters a concise Understand, Define, Architect, Create, Connect, Refine, Launch, Evolve summary beside “Ambition needs structure.” Fine rules, Nexus White, quieter type, reduced connectivity, and whitespace restore Corporate Discipline. `/approach` retains the complete explanation.

“You’ve seen what we’ve built. What could yours become?” occupies one Silver pause without links or supporting paragraphs. The final Nexus White section asks “What are you trying to create?”, repeats the approved reassurance, resolves the Mariner Thread, and presents only `Start a Project →`.

## `/start` UX architecture and choreography

One Client Component owns five groups: Objective, Context, Direction, Contact, and Review. It preserves answers across forward/back/retry, moves focus only after deliberate step changes, exposes current step text, and uses a calm structural trace rather than pressure language. Desktop uses a controlled inquiry rail; tablet centers the flow on the eight-column system; mobile uses full-width questions and a non-obtrusive sticky continuation surface. There is no budget, package, service SKU, or technology question.

REST, SUBMITTING, SUCCESS, and ERROR are distinct. In-flight activation is disabled. Success says “Your project starts here,” may show the public inquiry ID, and offers Work only after submission. Error retains every answer, supports retry, and exposes email fallback.

## Schema, validation, and Route Handler decision

The typed record maps exactly to 17 operational columns: Inquiry ID, Submitted At, Status, Name, Organization, Email, Phone, Situation, Objective, Success Definition, Current Website, References, Timeline, Additional Context, Last Contacted, Internal Notes, and Environment/Source. New status is `NEW`; IDs use `MN-YYYYMMDD-XXXXXXXX` with UUID entropy rather than row position. The exact order and eight approved status values are documented in `docs/operations/inquiry-system.md`.

`POST /api/inquiries` is a Route Handler because explicit HTTP semantics, body ceilings, controlled statuses, adapter isolation, and direct testing are stronger here than coupling persistence to a Server Action. A repository-owned typed server schema validates required values, maximum lengths, email, situation, and optional HTTP(S) URL. User URLs are stored only and never fetched. Raw requests are capped at 14 KB.

The old `/api/contact` now returns `410 Gone`; its GoHighLevel, webhook, email-first, and console-PII behavior is no longer active.

## Google Workspace, email, and environment separation

The server-only Google adapter signs a service-account JWT with Node crypto, exchanges it for a Sheets-scoped token, and appends one RAW row through the Sheets REST API. No Google SDK, CRM, database, webhook intermediary, or browser credential exists.

The repository already identified Resend as its email mechanism, so Phase 07 retains it through direct HTTPS without a Resend package. Ordering is Validate → Abuse controls → Persist → Attempt notification → Respond. Persistence failure returns a controlled error. Notification failure after persistence logs only category/ID/environment and still returns success.

Production and Preview select independent Sheet IDs/ranges and notification targets/enablement. Development resolves only Preview configuration when explicitly supplied. Missing persistence configuration fails safely; Preview cannot silently select Production and no console-persistence fallback exists.

## Abuse, duplicate, analytics, and privacy

The V1 baseline includes an in-flight lock, stable submission key, ten-minute duplicate window, five-attempt per-instance/address window, honeypot, 2.5-second completion floor, request ceiling, and field limits. Instance-local limiting is documented honestly; shared limiting or Turnstile remains evidence-gated.

`start_project_begin`, `start_project_step`, `start_project_complete`, `start_project_error`, and `start_project_cta` use enum metadata only. Code review confirmed that names, emails, phones, URLs, and open responses never enter analytics.

Privacy now explains Google Workspace persistence, optional Resend notification, no marketing enrollment, and non-sensitive event measurement. Terms states that submission begins a conversation—not an engagement—and formal engagement requires executed agreement(s).

## Accessibility and performance

Native labels, fieldset/radios/buttons, visible focus, `aria-invalid`, associated errors, status announcements, deliberate post-step/success focus, keyboard-safe navigation, non-color selection geometry, and touch-sized controls are present. Reduced motion retains all meaning. Static HTML includes the opening question and labels without a blank client shell.

No form, Google, email, CAPTCHA, analytics, or motion framework enters the client path. `/start` references 590,122 raw / 181,408 gzip bytes including shared chunks; its route-only chunk is 11,246 raw / 3,393 gzip. Homepage total is 592,950 raw / 182,290 gzip; its route-only chunk is 14,074 raw / 4,275 gzip. Browser observation recorded CLS `0`, no horizontal overflow, and zero console/page errors at 1440×1000, 1024×900, and 390×844.

## Tests and validation

Vitest provides 12 focused tests covering accepted/invalid schema, exact Sheet width, persistence ordering/failure, notification success/failure isolation, Google auth/append/failure, notifications-disabled behavior, and Preview/Production selection.

Real route checks passed invalid `400`, timing `429`, oversized `413`, missing persistence `503`, honeypot `202`, unauthorized method `405`, and retired contact `410`. Browser tests covered the required homepage states; opening, situation, contact, submitting, success, and retained error on desktop; representative tablet; opening/contact/success/error on mobile; reduced motion; focus; overflow; CLS; and errors.

Passed:

```text
npm run typegen
npm run typecheck
npm run lint
npm test                 12 tests
npm run build            26 routes; Undugu only under /work/[project]
npm audit                0 vulnerabilities
git diff --check
```

Production-server checks passed every canonical route, the five 308 legacy redirects, both unauthorized Work 404s, and 13 discovered internal paths.

## Files changed

- Homepage, `/start`, Privacy, Terms, and Phase 07 styling.
- Guided inquiry and tracked CTA Client Components.
- Typed inquiry schema/config/service, Google/notification adapters, analytics adapter, and Route Handler.
- Retired contact handler; safe environment template; operations runbook; tests/config; DEC-033; plan/report; review evidence.
- Dependencies: the `server-only` boundary marker and Vitest as development-only test infrastructure.

## Review evidence

`docs/exec-plans/review-assets/phase-07/` contains 25 screenshots: post-Nexus, Approach, possibility, and final conversion at all three widths; `/start` opening/contact at all widths; desktop situation/submitting/success/error; mobile success/error; and a redacted controlled test representation of the 17-column row plus notification.

The operational image is test evidence from adapter fixtures, not a live Google-account or delivered-email capture. The separate redacted live-verification record documents the manually verified operational results without credentials or real inquiry data.

## Operational closeout

All Phase 07 operational gates passed on 2026-08-22: Preview and Production persistence, strict environment isolation, exact 17-column mapping, generated inquiry IDs, `NEW` initialization, source designation, and notification delivery. Google Sheets remains the acquisition source of truth; email remains a secondary notification. The configured service account is limited to the two approved Sheets, and the existing Vercel environment separation is authoritative.

The controlled records are fake system tests, not leads. They may be marked and archived or removed according to the operations runbook. No infrastructure was recreated, rotated, or changed during closeout, and no credential was added to documentation or review evidence.

The browser-verification skill’s `agent-browser` executable was unavailable during implementation; the established Playwright/Chromium runtime supplied equivalent, broader exact-width evidence. This did not affect the live operational gate.

No final-hardening phase has begun.
