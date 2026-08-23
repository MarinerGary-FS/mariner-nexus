# QA Manifest

The manifest declares required gate IDs, current gate evidence states, browser requirements, responsive widths, accessibility requirements, Content Integrity, release certification, and allowed documented non-blockers.

Always-available categories include typecheck, lint, build, dependency audit, responsive, Content Integrity, accessibility, broken links, metadata, and security. Conditional categories include JavaScript fallback, interaction torture, identity leakage, integration failure, load, release certification, and rollback rehearsal.

Minimum browser policy is current Chromium desktop, representative Chromium responsive/mobile behavior, native Safari desktop, Safari-specific representative review where practical, and the complete project responsive matrix. Higher-risk/complex projects normally add Firefox, Edge, and physical devices. Missing coverage is `PENDING`, `FAIL`, or an explicitly permitted `DOCUMENTED_NON_BLOCKER`; never implicit pass.
