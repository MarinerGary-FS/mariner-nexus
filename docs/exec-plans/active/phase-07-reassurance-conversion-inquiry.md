# Phase 07 — Reassurance, Conversion, and Inquiry System

## Status

In progress. Phase 06 was approved, committed independently, pushed, verified at remote divergence `0/0`, and archived before this plan began.

## Objective

Complete the journey Nexus → Reassurance → Possibility → One Decision → Structured Inquiry while preserving Corporate Discipline. Google Sheets is the V1 source of truth and email is notification only.

## Scope

1. Release the homepage from the Nexus into a calm summary of Understand, Define, Architect, Create, Connect, Refine, Launch, and Evolve.
2. Add one quiet possibility pause and one light-environment conversion decision.
3. Replace the presentation-only `/start` surface with an accessible conversational inquiry.
4. Validate and rate-limit submissions in a route handler, append a structured record through a server-only Google adapter, then attempt notification.
5. Add privacy/terms alignment, non-sensitive funnel events, environment documentation, bounded tests, redacted operational evidence, and the completion report.

## Architecture decisions

- Use `POST /api/inquiries`: its HTTP boundary is independently testable, explicit, and keeps Google/email replacement separate from UI rendering.
- Use native React state and HTML controls; no form framework.
- Use a repository-owned typed validator; no validation runtime dependency.
- Use Google Sheets REST with a signed service-account JWT; no Google SDK and no Google code in the client bundle.
- Use Resend's HTTPS API because the repository already identifies Resend as its bounded email mechanism. It remains secondary and adds no client/runtime package.
- Select Preview and Production Sheet IDs and notification settings independently. Local development cannot persist unless explicitly configured; no console persistence fallback is permitted.
- Use an in-process rate-limit and duplicate window as a lightweight V1 baseline, alongside honeypot, request-size, and minimum-completion-time checks. Document serverless-instance limitations rather than implying distributed protection.

## Acceptance

- Persistence must succeed before client success.
- Notification failure after persistence must not discard or fail the inquiry.
- Invalid, premature, oversized, abusive, and duplicate submissions receive controlled responses without PII logs.
- Failed UI submissions retain all input and expose retry/fallback.
- Mobile, tablet, desktop, keyboard, focus, reduced motion, no-JS/static presentation, routes, links, redirects, unauthorized Work routes, CLS, overflow, console, and route-level client JS are reviewed.
- No CRM, database, authentication, scheduling, AI, marketing automation, additional case study, or advanced graphics work begins.

## Validation

Run type generation, TypeScript, ESLint, production build, npm audit, unit/integration tests, route and integration-failure checks, exact-width browser review, accessibility/state review, analytics PII review, legal consistency review, client-JS measurement, and `git diff --check`.

## Stop condition

Produce Phase 07 review assets and a completion report, record material decisions, leave Phase 07 uncommitted, and stop for Gary's review. Do not begin final hardening.
