# ARC-01 — Amplified Release Certification Completion Report

## Release decision

**GO WITH DOCUMENTED NON-BLOCKERS**

No launch-blocking defect remains. Gary authorized Production promotion on 2026-08-23, the approved release candidate was promoted and passed post-promotion smoke certification. Website Delivery System implementation did not begin.

## Release identity

- Branch: `codex/arc-01-release-certification`
- Approved source baseline: `0137e6e` (EA-07 archive), incorporating implementation `8097a6a`
- ARC implementation source: `106768f`
- Release-candidate deployment: `dpl_4xyL3TPoarFfDn38CzPWHc6mZRws`
- Release-candidate URL: `https://mariner-nexus-moujdd7bz-garymariner-7562s-projects.vercel.app`
- Vercel state: `READY`
- Production deployment: `dpl_EGjSRmSBdDyTPLzwFfxA1pdDJfpe`
- Promoted source: `106768f7318932a879bb8c6bc04378d621b9a4ab`
- Production URL: `https://www.marinernexus.com`
- Superseded Production deployment: `dpl_2ALje9XWviQKUWzTmdpJWcJw9tqo`
- Superseded Production source: `0385130`
- Known-good rollback deployment: `dpl_3f14kF1yWzYcM79LrLrFmQJt8tFq`
- Known-good rollback source: `eef8aa6573884ff511a37ba7de8bf2fb3c76fbf8`
- Production alias movement: approved release candidate promoted; aliases verified on the new READY deployment

## Production promotion closeout

Production smoke certification passed immediately after promotion:

- All thirteen canonical routes returned HTTPS 200 with the expected titles and canonical URLs.
- Sitemap and robots returned 200; sitemap contains thirteen canonical URLs and all five published Work records.
- All five legacy redirects returned direct 308 responses with query preservation and no chain.
- `/work/not-authorized`, `/work/act-of-valor`, and `/foundation-preview` remained 404.
- Mobile navigation opened, exposed the complete menu, closed with Escape, and preserved contextual navigation. Desktop contextual navigation tracked the active homepage environment.
- Range, Systems, all four distinct Nexus objectives, EA-06 Release, final conversion, and Work identity entry/release remained intact with no horizontal overflow.
- All four Nexus objective controls became selected and exposed their correct distinct outcomes: Confident launch, Aligned organization, Responsive follow-through, and New capability.
- Browser console inspection found no errors or warnings. Vercel runtime logs showed expected Production GET traffic with no new runtime errors or function failures.
- Production inquiry variables remain present. No launch change touched inquiry architecture, so the previously live-verified pipeline was preserved without creating a duplicate Production inquiry.

## Acceptance gates

| Gate | Result | Evidence |
| --- | --- | --- |
| Engineering | PASS | Type generation, TypeScript, ESLint, 12/12 tests, production build, and `git diff --check` passed. Next emitted 23 pages including system and compatibility routes. |
| Content Integrity | PASS | Canonical 250/250 matrix, zero failures. Human typography review found no clipped or colliding visible copy. |
| Accessibility | PASS | Lighthouse accessibility 1.00 on canonical representative routes after fixing six accessible-name mismatches and four project-identity contrast defects. Manual keyboard, focus, Escape, restoration, selected-state, and reduced-motion checks passed. |
| Responsive | PASS | Full matrix: desktop 1440/1280/1100; tablet 1024/834/768; mobile 430/390/375/360 with representative short/tall heights. No horizontal overflow. |
| Browser | PASS | Chromium and native Safari 26.5 passed. Firefox and Edge were unavailable and remain documented non-blockers under the approved Phase 08 rule. |
| Performance | PASS | Homepage mobile Lighthouse 0.98, LCP 2.42 s, CLS 0, TBT 0 ms; desktop 0.98, LCP 1.10 s, CLS 0. Work LCP varied under synthetic throttling while CLS remained 0 and TBT remained below 20 ms. Verified initial-state repaint was removed without flattening the Work identities. |
| Security | PASS | Required headers present; dependency audit reports zero vulnerabilities; working-tree/history scans found no credentials; external targets are HTTPS and use safe outbound relationship attributes. |
| Inquiry Operations | PASS | Preview configuration remains isolated. Invalid Preview submission returned 400; retired `/api/contact` returned 410. The 12 passing tests preserve validation, persistence-before-success, notification-after-persistence, and notification-failure durability. No Production record was created. |
| SEO | PASS | Thirteen canonical sitemap URLs, canonical metadata, titles/descriptions, robots behavior, Open Graph/icons, and five discoverable Work records verified. Protected Preview adds noindex as intended. |
| Work Authorization | PASS | Exactly five published records are emitted; unauthorized project routes remain 404. |
| Identity Isolation | PASS | Mariner → Introduction → Influence → Takeover → Release → Return, direct loads, history, mobile, reduced motion, and cross-project isolation passed. |
| Crescendo | PASS | Corporate 2 → Range 6 → Systems 8.5 → Nexus 10 is intact; all four Nexus objectives produce distinct architecture. |
| Release | PASS | EA-06 controlled resolution returns the experience to the light corporate plane without a stuck Nexus or identity state. |
| Conversion | PASS | `What could yours become?` followed by `Start a Project` remains the final decision hierarchy with no competing CTA. |
| Truth | PASS | Undugu remains a 501(c)(3) nonprofit organization; GaryMariner.com retains the approved personal-identity transformation; no unsupported facts were introduced. |
| Rollback Readiness | PASS | Immutable known-good deployment and exact operational procedure are recorded in `docs/operations/rollback-plan.md`. |

## Public route and discovery result

Canonical public route count: **13**. Sitemap count: **13**.

`/`, `/capabilities`, `/work`, `/work/undugu`, `/work/serene-origins`, `/work/sovereign-blueprint-consulting`, `/work/awakening`, `/work/gary-mariner`, `/approach`, `/company`, `/start`, `/privacy`, and `/terms` all returned 200 through protected Preview access. Direct load, refresh, canonical metadata, titles, descriptions, and internal navigation passed.

The five legacy mappings return direct permanent 308 responses, preserve query strings, and do not chain. `/work/not-authorized`, `/work/act-of-valor`, and `/foundation-preview` return 404. Sitemap includes all five and only the five authorized Work records.

## Published Work authorization matrix

| Record | State | Static route | Sitemap | Secure live destination |
| --- | --- | --- | --- | --- |
| Undugu | `PUBLISHED` | `/work/undugu` | yes | pass |
| Serene Origins | `PUBLISHED` | `/work/serene-origins` | yes | pass |
| Sovereign Blueprint Consulting | `PUBLISHED` | `/work/sovereign-blueprint-consulting` | yes | pass |
| Awakening | `PUBLISHED` | `/work/awakening` | yes | pass |
| GaryMariner.com | `PUBLISHED` | `/work/gary-mariner` | yes | pass |

## Performance comparison

The measured candidate cost remains proportionate to the approved post-EA experience and does not create a release blocker.

| Surface | Production | ARC candidate | Delta |
| --- | ---: | ---: | ---: |
| Homepage HTML gzip | 8,419 B | 11,202 B | +2,783 B |
| Homepage JS gzip | 182,504 B | 188,835 B | +6,331 B |
| Homepage CSS gzip | 27,391 B | 38,510 B | +11,119 B |
| `/work` HTML gzip | 5,743 B | 8,296 B | +2,553 B |
| `/work` JS gzip | 184,333 B | 184,296 B | −37 B |
| `/work` CSS gzip | 27,391 B | 38,510 B | +11,119 B |
| `/work/undugu` HTML gzip | 8,431 B | 11,030 B | +2,599 B |
| `/work/undugu` JS gzip | 184,942 B | 185,759 B | +817 B |
| `/work/undugu` CSS gzip | 27,391 B | 39,493 B | +12,102 B |

Production media: 54 files / 14,485,662 bytes. Candidate: 57 files / 15,122,916 bytes. Delta: **+3 files / +637,254 bytes**.

Mobile Lighthouse cold-throttle observations: homepage LCP 2.42 s, CLS 0, TBT 0 ms; `/work` LCP ranged 2.90–6.16 s, CLS 0, TBT 7–18 ms; Undugu representative record LCP 3.54 s, CLS 0.018, TBT 13 ms. Production Work reference measured 5.46 s. The Work variance is image/network-bound rather than main-thread blocking or layout instability. First Work and record media are explicitly prioritized and direct-record initialization now starts in the correct identity state. No visual architecture was removed for a synthetic score.

## Accessibility and resilience

- Automated route checks: zero remaining violations on tested canonical routes and interactive states; Lighthouse accessibility 1.00 after corrections.
- Keyboard: logical order, visible focus, mobile-menu containment, Escape close, and trigger focus restoration passed.
- Nexus: controls expose their visible objective names and selected state; all objective outcomes remain semantic.
- Reduced motion: actual `prefers-reduced-motion` execution passed on homepage, Nexus, Undugu, and GaryMariner.com; content remains complete and transitions settle immediately.
- JavaScript disabled: homepage, Work, Awakening, Nexus representation, and Start retain meaningful server-rendered content. Start retains a truthful email fallback.

## Security, runtime, and observability

HSTS, frame denial, MIME-sniffing protection, strict-origin referrer policy, and camera/microphone/geolocation denial are present. Repository and history scans found only a scanner false positive in documented environment-variable examples, not a credential. No private keys, client-exposed secrets, credential files, environment leakage, or production-source workstation paths were found. `npm audit` reports zero known vulnerabilities. Preview logs were clean and all five live Work destinations returned HTTPS 200.

Recommendations:

- Vercel Analytics — **DEFER**. Existing acquisition instrumentation is intentionally PII-free and bounded; certification found no release question that justifies adding a runtime package now.
- Vercel Speed Insights — **DEFER — optional post-launch observability**. Deferred by owner pending cost/benefit review. Production promotion and smoke certification passed, and variable mobile Work LCP remains a non-blocking observation rather than a release defect. No recurring monitoring purchase or dependency was added. Reconsider only if real traffic, performance concerns, or business/client requirements justify the expense.
- CSP Report-Only — **DEFER** until a reporting endpoint, ownership, and observation window are defined. Enforcing or emitting an unobserved policy during certification adds risk without evidence.

## Evidence package

`docs/exec-plans/review-assets/arc-01/` contains desktop evidence for opening, Range, Systems, all four Nexus objectives, release, final conversion, Work, and all five records; mobile evidence for homepage, Work, Nexus, Start, and open menu; reduced-motion representatives; and `full-homepage-traversal.webp`. The captures use the committed release-candidate source, and the immutable Preview was subsequently verified READY with the same build output.

## Documented non-blockers

1. Native Firefox and Edge were not installed; no questionable browser packages were added. Chromium and native Safari passed, matching the Phase 08 exception rule.
2. Protected Preview could not be opened anonymously in the visual browser. Authenticated Vercel CLI checks certified the immutable Preview; visual evidence was captured from the identical committed production build.
3. Mobile-throttled Work LCP is variable and occasionally exceeds 2.5 s, but shows negligible blocking time, stable layout, explicit LCP priority, and performance comparable to or better than the pre-promotion Production reference. It remains a post-launch observation item; paid RUM is deferred pending cost/benefit review.

## ARC defect corrections

- Corrected compact-brand and Systems-control accessible names to include their visible labels.
- Corrected contrast on Serene Origins, Sovereign Blueprint Consulting, Awakening, and GaryMariner.com identity surfaces.
- Removed verified Work identity initialization repaint and prioritized each record's opening proof image.

## Files changed by ARC-01

- `app/globals.css`
- `app/work/page.tsx`
- `app/work/[project]/page.tsx`
- `components/navigation/SiteNav.tsx`
- `components/systems/SystemsField.tsx`
- `components/work/ProjectIdentityBoundary.tsx`
- `lib/content/projects.ts`
- `docs/exec-plans/completed/arc-01-amplified-release-certification.md`
- `docs/exec-plans/completed/arc-01-completion-report.md`
- `docs/exec-plans/review-assets/arc-01/*`
- `docs/operations/launch-checklist.md`
- `docs/operations/rollback-plan.md`
- `docs/mariner-nexus-redesign/decisions.md`
- `docs/website-delivery-system/reference-implementation-observations.md`

## Commits

- `32b3b47` — begin ARC-01 certification
- `b3ebb53` — clear ARC-01 accessibility defects
- `106768f` — stabilize Work release candidate and add evidence
- Documentation closeout commit: this documentation commit (exact hash reported at handoff)

## Preserved launch performance baseline

- Homepage mobile performance: **0.98**
- Homepage mobile LCP: **2.42 s**
- Homepage desktop performance: **0.98**
- Homepage desktop LCP: **1.10 s**
- Homepage CLS: **0**
- Homepage TBT: **0 ms**

ARC-01 is closed after approved Production promotion and successful smoke certification. Further observability purchases and Website Delivery System work require separate explicit authorization.
