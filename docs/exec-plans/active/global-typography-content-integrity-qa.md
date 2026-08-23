# Global Typography & Content Integrity QA

## Status

Implementation correction complete. Final validation evidence is recorded below. This gate is separate from EA-02 creative approval and introduces no production deployment.

## Canonical rule

> Every visible word must remain fully readable at every supported viewport.

The rule is now canonical in `docs/mariner-nexus-redesign/08-technical-architecture.md` and DEC-039. Major-phase completion reports must explicitly state `Typography/content integrity: PASS / FAIL`.

## Defects found and corrected

### Capabilities Experience grid

The large Experience heading and its supporting paragraph previously shared the desktop/tablet boundary at grid column 4/5. The display type visually exceeded its nominal track and collided with the paragraph.

The correction changes ownership rather than reducing impact: the heading owns a wider independent left region, the paragraph begins one complete grid track later, and the capability list retains its separate right region. No `z-index`, clipping, overflow masking, or global type reduction is used.

### Public contact email

Current public source, fallback behavior, footer, and Privacy now use `info@marinernexus.com`. The incorrect `hello@marinernexus.com` has no current application/canonical-content occurrence. The verified transactional sender `inquiries@marinernexus.com` is unchanged.

### Undugu mobile client headings

The full matrix exposed additional project-scoped defects at narrow widths: the expressive Undugu wordmark-style heading exceeded the rounded Work portal canvas, and the transformation record's Client heading exceeded the viewport. Project-scoped mobile fluid sizes now preserve the serif identity and dominant hierarchy while fitting their owned content widths down to 320px. No global typography changed.

## Automated rendered-layout audit

`scripts/content-integrity-audit.mjs` uses Chrome DevTools Protocol directly and adds no package. It visits all nine canonical routes at 1600, 1440, 1366, 1280, 1100, 1024, 834, 768, 430, 390, 375, 360, and 320 pixels: 117 route/width combinations.

For visible headings, paragraphs, labels, list terms, links, buttons, and kickers it records rendered rectangles and checks:

- viewport and horizontal-page clipping;
- clipping by overflow-owning ancestors;
- zero/negative visible regions;
- unintended intersections between neighboring heading and text regions.

Closed native disclosures, `aria-hidden` content, and the intentional inquiry honeypot are excluded because they are not visible words. A three-pixel tolerance accounts for browser subpixel rounding at rounded container edges. The script is a supplement to visual inspection, not a screenshot replacement.

## Route audit

| Route | Desktop | Tablet | Mobile | Text collision | Clipping | Result |
| ----- | ------- | ------ | ------ | -------------- | -------- | ------ |
| `/` | PASS | PASS | PASS | None | None | PASS |
| `/capabilities` | PASS | PASS | PASS | Corrected | None | PASS |
| `/work` | PASS | PASS | PASS | None | None | PASS |
| `/work/undugu` | PASS | PASS | PASS | None | None | PASS |
| `/approach` | PASS | PASS | PASS | None | None | PASS |
| `/company` | PASS | PASS | PASS | None | None | PASS |
| `/start` | PASS | PASS | PASS | None | None | PASS |
| `/privacy` | PASS | PASS | PASS | None | None | PASS |
| `/terms` | PASS | PASS | PASS | None | None | PASS |

The audit includes complete content composition—not only horizontal-scroll absence—and covers display/editorial/client headings, neighboring paragraph regions, labels, navigation, CTAs, and section boundaries.

## Special-state audit

- Global mobile navigation open state: readable, contained, focusable, and unobscured.
- Systems: default and selected-node content remains contained at all responsive classes.
- Nexus: default/objective switching and ordered mobile path remain contained.
- EA-01: Introduction, Influence, Takeover, Release, and Return typography remains owned by the Undugu boundary.
- EA-02: desktop/tablet/mobile Living Interface, open mobile client menu, focused controls, and reduced-motion state remain contained.

## Browser and responsive coverage

Chromium visual review covered the full route matrix and special states with zero browser/runtime errors and zero horizontal overflow. Native Safari 26.5 representative review confirmed the corrected Capabilities composition and font metrics; prior release-level Safari/Chromium coverage remains unchanged. Firefox and Edge remain unavailable in the current QA environment.

## Evidence

`docs/exec-plans/review-assets/content-integrity/` contains:

- `capabilities-experience-before-1440.png` — original grid collision;
- `capabilities-experience-after-1440.png` — independent heading/copy regions;
- `start-email-after-1440.png` — corrected public email;
- `work-portal-before-320.png` and `work-portal-after-320.png` — discovered client-heading clipping and the contained correction;
- `client-heading-before-320.png` and `client-heading-after-320.png` — transformation-record Client heading before/after containment;
- `before-after.md` — evidence index and architectural explanation.

Evidence captures include the surrounding composition where practical. No credentials or private content are present.

## Acceptance gate

- Every canonical route: PASS.
- Desktop/tablet/mobile supported widths: PASS.
- Heading/text collisions: none after the two corrections.
- Viewport, container, and section clipping: none.
- Sticky/fixed obstruction: none.
- Client-specific typography containment: PASS.
- Chromium and representative Safari typography: PASS.
- Public general/fallback email: `info@marinernexus.com`.
- Transactional sender: `inquiries@marinernexus.com`, unchanged.
- Unrelated visual simplification: none.

**Typography/content integrity: PASS**

## Validation

Passed:

```text
npm run typegen
npm run typecheck
npm run lint
npm test                              12/12
npm run build                         19 pages
npm audit --audit-level=high          0 vulnerabilities
node scripts/content-integrity-audit.mjs
                                       117 audited / 0 failures
git diff --check
```

Chromium produced no page console/runtime errors during the visual review. All 117 canonical route/width combinations reported zero horizontal overflow after the corrections.

## Deployment boundary

No Production deployment is authorized. This correction and EA-02 remain local pending explicit approval. EA-03 has not begun.
