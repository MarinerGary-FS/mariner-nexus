# ARC-01 — Amplified Release Certification

## Status

Complete and archived — `GO WITH DOCUMENTED NON-BLOCKERS`. The approved release candidate was promoted to Production on 2026-08-23 and passed post-promotion smoke certification. Website Delivery System implementation remains prohibited pending separate authorization.

## Mission

Certify the accumulated EA-01 through EA-07 implementation as one coherent, accessible, truthful, secure, performant, and operationally reliable production system. The approved EA-07 implementation commit `8097a6a` and archive commit `0137e6e` are the source baseline. Current Production remains the reference and rollback release.

## Release controls

- Working branch: `codex/arc-01-release-certification`
- Source baseline: `0137e6e`
- Preview only; do not move a Production alias.
- Preserve the approved homepage amplitude: Corporate 2 → Range 6 → Systems 8.5 → Nexus 10 → Release 1 → Conversion 2.
- Preserve the four-fragment homepage Range and all five published Work records.
- Preserve the 250/250 Content Integrity minimum.
- Preserve Undugu's 501(c)(3) nonprofit organization truth boundary and the approved GaryMariner.com transformation.
- Do not redesign approved experiences, add an EA phase, alter inquiry architecture without a verified defect, or begin the Website Delivery System.

## Certification scope

1. Create and identify a fresh Vercel Preview release candidate and record current Production and rollback deployments.
2. Audit every canonical route, sitemap, robots, metadata, indexing state, direct load, refresh, navigation, unauthorized Work routes, and five permanent legacy redirects with query preservation and no chains.
3. Traverse the complete homepage and verify Corporate, Range, Systems, all four Nexus objectives, Release, and final Conversion as one amplitude-controlled journey.
4. Torture-test native scroll and state transitions, including direction reversal, navigation jumps, history, deep reload, and viewport resizing.
5. Certify the full responsive matrix at desktop 1440/1280/1100, tablet 1024/834/768, and mobile 430/390/375/360, with representative tall and short heights.
6. Preserve and run the 250-state Content Integrity baseline, supplemented by human typography review.
7. Certify each Work identity lifecycle, direct-route initialization, isolation, Return to Mariner, mobile behavior, and reduced motion.
8. Run automated and manual accessibility review, keyboard/focus review, reduced-motion execution, and representative JavaScript-free resilience checks.
9. Regress the inquiry contract in isolated Preview configuration without creating unnecessary Production records.
10. Recheck security headers, repository and history secrets, dependencies, external destinations, browser behavior, SEO/discovery, runtime health, and observability posture.
11. Measure the release candidate's HTML, JS, CSS, media, fonts, LCP strategy, CLS, long tasks, runtime errors, cold/warm network behavior, and deltas versus current Production.
12. Capture the required release-candidate evidence and one full homepage traversal recording.
13. Fix only verified release defects; document non-blockers and escalate material architectural conflicts.
14. Update launch/rollback records, the decision record, the ARC-01 completion report, and reference-implementation observations.

## Acceptance gates

Engineering, Content Integrity, Accessibility, Responsive, Browser, Performance, Security, Inquiry Operations, SEO, Work Authorization, Identity Isolation, Crescendo, Release, Conversion, Truth, and Rollback Readiness must each be classified PASS or FAIL with evidence.

## Required validation

- `npm run typegen`
- `npm run typecheck`
- `npm run lint`
- `npm test`
- `npm run build`
- `npm audit`
- `node scripts/content-integrity-audit.mjs`
- `git diff --check`
- release-candidate browser and network certification matrix
- native Safari representative certification; Firefox/Edge smoke tests if available

## Completion boundary

Return exactly one release classification: `GO`, `GO WITH DOCUMENTED NON-BLOCKERS`, or `HOLD`. Even a `GO` stops at the Preview release candidate and requires Gary's separate explicit authorization before Production promotion.

Completion evidence and the gate-by-gate decision are recorded in `arc-01-completion-report.md`. Release candidate: `dpl_4xyL3TPoarFfDn38CzPWHc6mZRws`, implementation source `106768f`.

Production closeout: `dpl_EGjSRmSBdDyTPLzwFfxA1pdDJfpe` is READY at `https://www.marinernexus.com`; rollback remains `dpl_3f14kF1yWzYcM79LrLrFmQJt8tFq`. Vercel Speed Insights was deferred by owner as optional post-launch observability pending cost/benefit review.
