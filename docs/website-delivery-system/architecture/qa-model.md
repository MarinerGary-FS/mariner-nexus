# QA Model

## Three review gates

- **Engineering:** correctness, architecture, security, resilience, and maintainability.
- **Meaning:** truth, content, hierarchy, identity, usability, and strategic appropriateness.
- **Impact:** whether conditional amplification/integration earns its complexity, performance, access, maintenance, and cost.

Truth, Content Integrity, Accessibility, Responsive, Security, and Release are named cross-cutting gates. Impact is conditional; absence must be explicit.

## Always required

- typecheck or equivalent, lint, reproducible production build;
- relevant unit/contract tests and dependency audit;
- configurable Content Integrity route × viewport × state sweep;
- desktop, tablet, mobile, and intermediate-width human review;
- keyboard/focus, semantics, contrast, reduced-motion review where motion exists;
- broken links, route status, metadata, canonical, robots, and sitemap;
- secret/environment/security-header basics;
- Preview validation and documented evidence;
- `git diff --check` and documentation/reference integrity.

## Conditional by profile/risk

- JavaScript-free meaning/fallback;
- interaction torture and identity isolation;
- integration failure, retry, persistence, and non-PII logging tests;
- wider browser/device matrix and native-browser certification;
- load, performance-budget, media, and network-condition testing;
- release-candidate freeze, formal accumulated-system certification, and rollback rehearsal.

Automated accessibility and geometry results are evidence, not claims of complete accessibility or visual quality. Every exception records scope, rationale, authority, compensating control, and revisit condition. A failed mandatory gate blocks release; only its governing human authority may approve a documented exception, and law/safety/truth requirements cannot be waived into falsehood.

## Browser baseline

All projects require current Chromium desktop, representative Chromium responsive/mobile behavior, native Safari desktop, Safari-specific representative review where practical, and the complete responsive matrix declared by the project. Higher-risk, Connected Experience, Signature System, or technically complex projects normally add Firefox, Edge, and justified physical-device testing. Missing browser coverage is never silently a pass; where policy permits, it is recorded as `DOCUMENTED_NON_BLOCKER` with rationale.

## Evidence package

Store immutable commit/deployment identifiers, commands and results, route/viewport/state manifest, screenshots/recordings where useful, human-review notes, exceptions, approvals, performance deltas, runtime smoke, rollback target, and remaining non-blockers. Avoid personal data and secrets.

## Definition of Done

A site is done only when the applicable strategy, content, and design are approved; truth and publication authorization are current; responsive integrity, accessibility, Content Integrity, security, metadata/SEO, and functional integrations pass; Preview review and accumulated-system release certification are approved; the immutable candidate is verified in Production; rollback is available; operational/handoff documentation is accepted; exceptions and non-blockers are recorded; and the repository is clean and synchronized. An explicitly non-applicable requirement needs recorded rationale and authority.
