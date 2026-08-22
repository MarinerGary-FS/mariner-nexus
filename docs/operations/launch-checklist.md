# Mariner Nexus Launch Checklist

## Release candidate

- [ ] Confirm Phase 08 release commit is pushed and remote divergence is `0/0`.
- [ ] Confirm the latest Preview deployment is READY and matches the release commit.
- [ ] Review the release-candidate URL; do not promote until Gary gives final launch approval.

## Repository and build

- [ ] Clean working tree; typegen, typecheck, lint, 12 tests, production build, `npm audit`, and secret/history scan pass.
- [ ] Confirm the build exposes only the approved canonical routes and Undugu under `/work/[project]`.

## Experience

- [ ] Recheck desktop, tablet, mobile, mobile menu, keyboard/focus, reduced motion, Systems, Nexus, Work, Undugu, and `/start` on the release candidate.
- [ ] Confirm no horizontal overflow, console errors, broken media, or stale client identity/context.

## Operations and security

- [ ] Confirm Production Sheet remains the source of truth, notifications route to `info@marinernexus.com`, sender is `inquiries@marinernexus.com`, and Preview remains isolated.
- [ ] Do not submit another Production inquiry unless a configuration change makes one necessary.
- [ ] Confirm analytics events contain enums only, runtime logs contain no inquiry content, and security headers are present.

## SEO and infrastructure

- [ ] Confirm canonical `https://www.marinernexus.com`, HTTPS, apex-to-www behavior, metadata, OpenGraph, icons, robots, and the nine-route sitemap.
- [ ] Confirm all five legacy redirects are direct 308 responses and unauthorized/review routes return 404.
- [ ] Confirm Vercel framework detection, Node 24.x runtime, Preview deployment, production domains, and environment separation.

## Launch and post-launch

- [ ] Record the current Production deployment and release-candidate deployment IDs.
- [ ] Promote the approved release candidate in Vercel; do not rebuild a different commit.
- [ ] Smoke-test canonical routes, one redirect, 404, external Undugu link, analytics, and Web Vitals.
- [ ] Run an inquiry smoke test only if safe and operationally necessary.
- [ ] Keep rollback instructions and the previous stable Production deployment immediately available.
