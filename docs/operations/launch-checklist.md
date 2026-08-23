# Mariner Nexus Launch Checklist

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
