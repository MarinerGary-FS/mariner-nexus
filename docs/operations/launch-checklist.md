# Mariner Nexus Launch Checklist

## ARC-01 release-candidate certification — 2026-08-23

- [x] Certify branch `codex/arc-01-release-certification` and implementation source `106768f`.
- [x] Confirm Preview `dpl_4xyL3TPoarFfDn38CzPWHc6mZRws` is READY; no Production alias moved.
- [x] Pass 13 canonical routes, 13 sitemap URLs, five published Work records, unauthorized-route 404s, and five direct 308 redirects.
- [x] Pass type generation, typecheck, lint, 12/12 tests, 23-page production build, dependency audit, secrets/history review, and 250/250 Content Integrity.
- [x] Pass Chromium, native Safari, keyboard/focus, actual reduced motion, representative no-JavaScript, responsive matrix, inquiry regression, and runtime-log review.
- [x] Preserve Production `dpl_2ALje9XWviQKUWzTmdpJWcJw9tqo` and rollback `dpl_3f14kF1yWzYcM79LrLrFmQJt8tFq`.
- [x] Gary explicitly authorized Production promotion of candidate `dpl_4xyL3TPoarFfDn38CzPWHc6mZRws` at source `106768f`.
- [x] Promote the approved candidate; record READY Production deployment `dpl_EGjSRmSBdDyTPLzwFfxA1pdDJfpe` at `https://www.marinernexus.com`.
- [x] Pass post-promotion HTTPS, 13-route, metadata/canonical, sitemap, five direct 308, unauthorized 404, mobile/context navigation, homepage journey, five-world Work, overflow, console, and runtime-log smoke certification.
- [x] Confirm Production inquiry variables remain present and inquiry architecture is unchanged; do not create a duplicate Production record.
- [x] Preserve launch performance baseline: mobile 0.98 / LCP 2.42 s; desktop 0.98 / LCP 1.10 s; CLS 0; TBT 0 ms.
- [x] Vercel Speed Insights: **deferred by owner pending cost/benefit review**. No paid observability service or dependency added.

## Release candidate

- [x] Confirm Phase 08 release commit is pushed and remote divergence is `0/0`.
- [x] Confirm the latest Preview deployment is READY and matches the release commit.
- [x] Review the release-candidate URL; Gary supplied final launch approval.

## Repository and build

- [x] Clean working tree; typegen, typecheck, lint, 12 tests, production build, `npm audit`, and secret/history scan pass.
- [x] Confirm the build exposes only the approved canonical routes and Undugu under `/work/[project]`.

## Experience

- [x] Recheck desktop, tablet, mobile, mobile menu, keyboard/focus, reduced motion, Systems, Nexus, Work, Undugu, and `/start` on the release candidate.
- [x] Confirm no horizontal overflow, console errors, broken media, or stale client identity/context.

## Operations and security

- [x] Confirm Production Sheet remains the source of truth, notifications route to `info@marinernexus.com`, sender is `inquiries@marinernexus.com`, and Preview remains isolated.
- [x] Do not submit another Production inquiry unless a configuration change makes one necessary; no duplicate launch record was generated.
- [x] Confirm analytics events contain enums only, runtime logs contain no inquiry content, and security headers are present.

## SEO and infrastructure

- [x] Confirm canonical `https://www.marinernexus.com`, HTTPS, apex-to-www behavior, metadata, OpenGraph, icons, robots, and the nine-route sitemap.
- [x] Confirm all five legacy redirects are direct 308 responses and unauthorized/review routes return 404.
- [x] Confirm Vercel framework detection, Node 24.x runtime, Preview deployment, production domains, and environment separation.

## Launch and post-launch

- [x] Record Production `dpl_2ALje9XWviQKUWzTmdpJWcJw9tqo` and release candidate `dpl_JBiMR4gA7c3upJwUsxAphrnJUVHb`.
- [x] Promote the approved release candidate in Vercel; Production retains commit `0385130` and references the approved original deployment.
- [x] Smoke-test canonical routes, redirects, 404, external Undugu link, analytics status, and runtime status.
- [x] Preserve the same-day Phase 07 inquiry verification; no configuration change justified another Production record.
- [x] Keep rollback target `dpl_3f14kF1yWzYcM79LrLrFmQJt8tFq` immediately available.
