# Phase 00 — Repository Adoption & Architecture Audit

## 1. Executive summary

The repository is a functioning Next.js application, not a blank slate. It already contains a useful App Router foundation, strict TypeScript configuration, typed project records, centralized SEO helpers, optimized case-study captures, motion primitives, a responsive navigation implementation, and a server route for inquiries. Those assets should be selectively preserved.

The current product expression, however, was built from an earlier doctrine. Its public metadata markets AI-native transformation; its routes use `/services`, `/case-studies`, `/about`, and `/contact`; its acquisition path leads primarily to Cal.com; its shell and every major homepage scene are dark-first; and 21 presentation components are client islands, mostly because Framer Motion is applied at section level. These facts conflict with the approved redesign specification.

Phase 01 should therefore rebuild the global foundation and corporate shell while preserving proven utilities, typed content, selected assets, and small interaction primitives. It should not attempt to cosmetically reskin `NexusHomeExperience`. Redirects and canonical metadata must be implemented in the same migration that introduces the approved routes.

Phase 00 adopted the approved redesign specification at `docs/mariner-nexus-redesign/`, replaced the workstation-dependent root doctrine with a concise repository-relative `AGENTS.md`, installed the two reusable Skills at user level, and made no production application changes.

## 2. Current-state architecture

### Framework and repository shape

- Next.js 15.2.8 App Router with React 19 and TypeScript strict mode (`package.json`, `tsconfig.json`).
- Tailwind CSS 4 through `@tailwindcss/postcss`; design tokens and utilities live in `app/globals.css`.
- Framer Motion 12.6.3 is the only substantial interaction dependency.
- Vercel-oriented metadata, sitemap, robots, and image handling are present (`app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `lib/seo.ts`).
- Public project content is repository-resident and typed in `lib/case-studies.ts`.
- The homepage server entry is only 14 lines but renders the 434-line client component `components/sections/NexusHomeExperience.tsx`.
- The global shell is composed in `app/layout.tsx` from `Nav`, `Footer`, global metadata, and JSON-LD.
- Inquiry handling exists at `app/api/contact/route.ts`; the current `/contact` page bypasses the local form and routes users to Cal.com pathways.

### Existing routes

The repository currently exposes:

- `/`
- `/about`
- `/services`
- `/case-studies`
- `/case-studies/act-of-valor`
- `/case-studies/amplify-voices`
- `/case-studies/eaziedagod`
- `/case-studies/gary-mariner`
- `/case-studies/serene-origins`
- `/case-studies/undugu`
- `/contact`
- `/api/contact`
- generated `/robots.txt`
- generated `/sitemap.xml`

There are no approved V1 route implementations yet for `/capabilities`, `/work`, `/approach`, `/company`, `/start`, `/privacy`, or `/terms`.

## 3. Doctrine reconciliation

| Existing doctrine item | Approved doctrine item | Classification | Reason | Migration impact |
|---|---|---|---|---|
| Business before interface; systems thinking; execution quality | Experience-based, strategy-led, solution-specific | PRESERVE | The underlying discipline remains compatible. | Retain as operating principles and make claims specific. |
| Premium restraint, clarity, breathing room, performance awareness | Serious before spectacular; earn complexity | PRESERVE | Both reject visual noise and unjustified technology. | Keep restraint and performance gates. |
| Mobile is independently considered | Responsive does not mean resized | PRESERVE | The language differs but the intent aligns. | Preserve content parity and define mobile choreography. |
| Case studies emphasize problem, strategy, build, and outcome | Work uses Client, Situation, Objective, Strategy, Experience, Systems, Transformation, Live Experience | REFINE | Existing records contain useful material but use the older transformation-record frame. | Migrate typed content into the approved schema without duplicating presentation. |
| Scene-based narrative and controlled pacing | Complexity curve: restraint → expression → structure → peak → restraint | REFINE | Narrative pacing remains valuable; mandatory cinematic scenes do not. | Recompose the homepage around the approved journey. |
| Dark-first interface with blue glow/glass | Bright corporate arrival; architectural neutrals; Graphite/Nexus Black only for depth; Mineral Teal as signal | REPLACE | Current surface semantics contradict the approved visual story. | Rebuild tokens and shell before page migration. |
| Full 3D logo/background hero video as protected systems | Advanced layers must be earned, non-blocking, and optional | REPLACE | The new doctrine does not protect a dark video hero. | Preserve assets for evaluation, not guaranteed reuse. |
| Operational-intelligence environment and future-state evolution language | Digital systems studio; stronger digital operation; plain acquisition language | REPLACE | The old language obscures the offer and overstates the operating model. | Rewrite public copy in later approved phases. |
| AI-native positioning and AI adoption services | AI remains internal, not a public service pillar | REMOVE | Explicit strategic conflict. | Remove public AI service claims and AI-focused metadata in Phase 01/02. |
| GoHighLevel, Cal.com, lead scoring, email/SMS automation as default direction | Google Workspace is V1 inquiry source of truth; no premature CRM/backend complexity | REPLACE | The approved acquisition architecture is simpler and operationally bounded. | Migrate `/contact` and `/api/contact` to `/start` and a secure Google Workspace flow. |
| `/services`, `/case-studies`, `/about`, `/contact` | `/capabilities`, `/work`, `/approach`, `/company`, `/start` | REPLACE | The route vocabulary is locked in DEC-005 and DEC-006. | Build new routes and ship permanent redirects. |
| Evolution Briefing and Transformation Records CTAs | Start a Project and Work | REPLACE | Public conversion vocabulary changed. | Update navigation, footer, homepage, metadata, and internal links together. |
| Public starting prices and $39.99 continuity layer in `docs/services.md` and `/services` | No pricing page; solution-specific scope | REMOVE | Fixed public packaging conflicts with approved service architecture. | Do not carry these offers into `/capabilities`. Approval is required before any future public pricing. |
| Local absolute doctrine path in the former `AGENTS.md` | Canonical repository-relative specification | REMOVE | The old path was non-portable and unavailable to fresh repository users. | Root instructions now point to tracked canonical docs. |
| Generic client build pack that can include AI/CRM/marketing questions | Reusable Skills separate process from client-specific aesthetics and classify scope | REFINE | Discovery mechanics are useful; default service implications are not. | Treat the older funnel document as historical/supporting, not governing. |

The pre-existing documents were not deleted. DEC-014 records that conflicting historical doctrine is non-governing during migration.

## 4. Route migration map

| Current route | Approved route | Classification | Migration requirement |
|---|---|---|---|
| `/` | `/` | MIGRATE | Rebuild corporate arrival and approved journey; preserve the root URL. |
| `/services` | `/capabilities` | REMOVE AFTER REDIRECT | Create `/capabilities`; permanent redirect from `/services`; migrate only aligned Strategy/Experience/Systems content. |
| `/case-studies` | `/work` | REMOVE AFTER REDIRECT | Create `/work`; permanent redirect from `/case-studies`. |
| `/case-studies/[existing-slug]` | `/work/[project]` | REMOVE AFTER REDIRECT | Preserve each slug where possible and permanently redirect every indexed detail URL. |
| `/about` | `/company` and `/approach` | REMOVE AFTER REDIRECT | `/about` cannot map semantically to two pages; default redirect to `/company`, with approach content migrated to `/approach`. |
| `/contact` | `/start` | REMOVE AFTER REDIRECT | Replace scheduling-first entry with structured inquiry; permanent redirect. |
| `/api/contact` | secure `/start` endpoint, exact path to be chosen in Phase 01 | REPLACE | Preserve server-only handling concepts, not current integrations or payload. This endpoint is not an SEO redirect target. |
| none | `/approach` | NEW REQUIRED | Build the approved Understand → Define → Architect → Create → Connect → Refine → Launch → Evolve explanation. |
| none | `/privacy` | NEW REQUIRED | Required before collecting inquiry data. Copy/legal approval is needed. |
| none | `/terms` | NEW REQUIRED | Required approved route. Copy/legal approval is needed. |

Redirects must be introduced atomically with their destinations and tested for query-string preservation, single-hop behavior, canonical metadata, sitemap removal of legacy URLs, and absence of redirect loops.

## 5. Component preservation map

| Area | Evidence | Classification | Recommendation |
|---|---|---|---|
| `lib/seo.ts` | Central URL, canonical, OG, and Twitter helper | PRESERVE / REFINE | Retain helper shape; update vocabulary, defaults, and new-route usage. |
| `lib/case-studies.ts` | Typed records and centralized asset paths | PRESERVE / MIGRATE | Evolve to the approved project schema; do not discard valid project evidence. Audit claims separately. |
| `components/ui/SectionHeading.tsx` | Small server-compatible typography primitive | PRESERVE / REVIEW | Restyle against the new tokens. |
| `lib/cn.ts` plus `clsx`/`tailwind-merge` | Small class-composition utility | PRESERVE | Useful and low cost. |
| `FadeIn` and `StaggerContainer` | Focused Framer Motion wrappers with in-view behavior | PRESERVE / REVIEW USAGE | Keep only where motion has approved purpose; avoid wrapping all content by default. |
| `Button` | Reusable API but client-only solely for motion | REFINE | Split semantic server-safe link/button styling from optional motion enhancement. |
| `Nav` | Real responsive menu, active route state, body scroll lock | REBUILD USING LEARNINGS | Approved labels, bright/dark contextual states, focus management, escape behavior, and server/client split require a new shell. |
| `Footer` | Server component and reusable work data | REBUILD | Current CTA language and link architecture conflict; approved Connect column is Email only. |
| `NexusHomeExperience` | 434-line client island encoding all seven old scenes | RETIRE | Do not refactor into the new homepage. Build server-first scenes with bounded client interactions. |
| `HeroSection` | 432 lines with mouse tracking, video state, scroll transforms, and animation | RETIRE / SALVAGE TECHNIQUES | It is not currently rendered by `app/page.tsx`; preserve no protected behavior without new-spec justification. |
| `PositioningSection`, `OutcomePaths`, `ServicesSnapshot`, `SystemFlowSection`, `QualificationSection`, `ConversionSection` | Older positioning, route vocabulary, CRM/evolution claims | RETIRE OR REWRITE | Their semantics conflict more than their layout is worth preserving. |
| `CaseStudyLayout` | 344-line client component for all detail records | REBUILD AROUND SCHEMA | Preserve narrative/content insights, but move static content to Server Components and isolate any takeover interaction. |
| `CaseStudyHighlights`, `BeforeAfterSection`, `FounderSection`, `ProcessSection`, `TestimonialSection`, `CredibilityStrip` | Reusable concepts with section-level client motion | REVIEW INDIVIDUALLY | Reuse evidence and content only when approved; do not carry client boundaries automatically. |
| `ContactForm` | Controlled form, pending/success/error states | MIGRATE CONCEPT | Preserve acknowledgment and failure-state intent; replace fields, validation, endpoint, and service-selection model. |
| `CalEmbed` and `lib/booking.ts` | Cal.com script/browser integration and multiple scheduled pathways | REMOVE LATER FROM V1 PATH | Scheduling is not the V1 source of truth. Keep files untouched until migration is approved and references are removed. |

## 6. Server/client rendering audit

### Current boundaries

All route page files are Server Components unless imported client descendants expand the hydrated tree. The following 21 presentation components declare `use client`:

- navigation: `Nav`;
- UI: `Button`, `GlowCard`;
- integrations: `CalEmbed`;
- motion: `FadeIn`, `StaggerContainer`;
- sections: `BeforeAfterSection`, `CaseStudyHighlights`, `CaseStudyLayout`, `ContactForm`, `ConversionSection`, `CredibilityStrip`, `FounderSection`, `HeroSection`, `NexusHomeExperience`, `OutcomePaths`, `PositioningSection`, `ProcessSection`, `QualificationSection`, `ServicesSnapshot`, `SystemFlowSection`, `TestimonialSection`.

The section-level count is the primary architectural concern. Static headings, paragraphs, lists, and cards are hydrated because their parent section imports Framer Motion. `NexusHomeExperience` makes the entire homepage presentation a client island. `CaseStudyLayout` similarly hydrates every detailed record.

### Genuine browser interaction

- `Nav` uses `window.scrollY`, body overflow mutation, current pathname, menu state, and animated presence.
- `CalEmbed` injects the Cal.com script and holds initialization state.
- `ContactForm` holds controlled field and submission state and calls `fetch`.
- `HeroSection` uses pointer coordinates, video readiness, refs, and Framer Motion scroll/motion values.
- Motion wrappers use refs and `useInView`.

### Phase 01 rendering recommendation

Render the shell, homepage copy, capability content, work cards, and company/approach content on the server. Isolate only mobile-menu behavior, contextual navigation state, form state, and approved motion/interaction into small client islands. Prefer CSS for hover/focus/basic reveal states. Keep Framer Motion for layout/state choreography that cannot be expressed cleanly with CSS. Lazy-load Tier 2 interaction code and never make Tier 0 content wait for it.

## 7. Dependency audit

### Production dependencies

| Dependency | Current version | Classification | Evidence and recommendation |
|---|---:|---|---|
| `next` | 15.2.8 | UPGRADE LATER | Approved target is 16+. Upgrade in a dedicated, approved step after the Phase 01 foundation is scoped; do not combine an unbounded framework migration with visual work. Review Next 16 lint/build changes and run official codemods where applicable. |
| `react` | ^19.0.0 | KEEP / REVIEW WITH NEXT | Already on React 19; align the exact supported version during the Next upgrade. |
| `react-dom` | ^19.0.0 | KEEP / REVIEW WITH NEXT | Same treatment as React. |
| `framer-motion` | ^12.6.3 | KEEP / REVIEW USAGE | It is used throughout, but over-broad client boundaries are the issue. Retain for earned interactions; reduce import surface. |
| `clsx` | ^2.1.1 | KEEP | Small, used by `lib/cn.ts`, and appropriate for composable styles. |
| `tailwind-merge` | ^3.0.2 | KEEP | Used by `lib/cn.ts`; supports reusable class APIs. |

### Development dependencies

- Tailwind CSS 4, `@tailwindcss/postcss`, and PostCSS 8: KEEP.
- TypeScript 5 and React/Node type packages: KEEP; resolve exact compatibility during the Next 16 upgrade.
- ESLint 9 and `eslint-config-next` 15.2.8: UPGRADE LATER with Next. The current `lint` script calls `next lint`, which requires review for the approved Next 16 toolchain.

No new runtime dependency is justified for Phase 01. Three.js, GSAP, a database, a CMS, authentication, and AI packages remain out of scope unless separately approved.

## 8. Visual-system audit

### Current implementation

- `app/layout.tsx` forces `bg-black text-white`; `html` in `app/globals.css` also forces black/white.
- Tokens define black surfaces, white alpha text, Nexus Blue `#2563EB`, Glow Blue `#4DA3FF`, and Core Energy `#7DD3FC`.
- The surface language relies on glass cards, blue glows, radial blue gradients, blue grid patterns, rounded cards, and dark backgrounds.
- Inter is the sole font family, loaded through `next/font/google` with `display: swap`.
- `.container-tight` is a 1200px max-width container; spacing utilities provide 4–7rem section rhythm.
- Global reduced-motion CSS and visible focus styles are present and worth preserving conceptually.
- `NexusHomeExperience` opens with a full-screen dark video/logo threshold rather than a bright corporate arrival.

### Gap to approved doctrine

The existing layout discipline and accessibility hooks are useful, but the color semantics are incompatible. Phase 01 must introduce architectural light and dark environment tokens, functional Mineral Teal states, restrained borders/radii/shadows, and a shell capable of transitioning context without becoming a decorative glow system. Client identity takeover should use scoped custom properties. Exact color values and type pairing require in-browser contrast and rendering review; they should not be guessed from the legacy palette.

## 9. Public-copy and positioning audit

### Must change

- `app/page.tsx` and `app/layout.tsx` explicitly use “AI-Native Digital Ecosystems,” “AI adoption,” “AI-native business transformation,” and “human-centered AI implementation.”
- `app/about/page.tsx` describes AI-native systems and AI automation as public positioning.
- `app/services/page.tsx` titles the offer “AI-Native Business Operations Architecture,” publishes starting prices, and encodes old evolution pathways.
- `app/case-studies/page.tsx` includes “AI-native business operations” in metadata.
- `components/navigation/Nav.tsx`, `components/footer/Footer.tsx`, and homepage sections use Transformation Records, Evolution Entry, and Evolution Briefing.

### Risky and requires evidence review

- Outcome claims in case-study pages and `lib/case-studies.ts`, including CRM integrations, automated sequences, subscription infrastructure, and operational results, should be verified before migration.
- `app/about/page.tsx` states that work is measured by business performance and that the job is not done until metrics move. This can imply an ongoing performance commitment not present in the approved scope.
- `components/footer/Footer.tsx` uses “Limited availability,” which should only remain if operationally true.
- Older `README.md`, `docs/brand.md`, `docs/services.md`, `docs/conversion-system.md`, `docs/copy.md`, and `CLAUDE.md` contain conflicting AI, CRM, pricing, booking, or dark-first doctrine. They remain historical during Phase 00 and are not canonical.

### Aligned or adaptable

Plain statements about business before interface, strategic reasoning, clarity, responsive execution, accessibility, and systems continuing after Submit align when they do not overstate services. The project-first content and direct case-study media are strong raw material for `/work`.

## 10. Acquisition-flow audit

### Current flow

- `/contact` is a server-rendered scheduling page built from `publicBookingPathways` in `lib/booking.ts`.
- Four public Cal.com links segment prospects by an internal service/readiness model.
- `ContactForm` exists but is not imported by `/contact`.
- `ContactForm` posts name, email, business, intent, service, and message to `/api/contact`.
- `/api/contact` performs basic required-field/email validation, then optionally fires GoHighLevel, Resend, and a Google Sheets webhook concurrently.
- If no integration succeeds or is configured, it logs the full submission to the server console and still returns `{ success: true }`.
- The route interpolates unescaped submission values into an HTML email, has no input-length limits, schema validator, abuse control, idempotency, durable inquiry ID, or guaranteed source-of-truth write.
- Configuration includes GHL, Resend, Google Sheets webhook, and routing-email environment variables. No secret values were found in tracked code.

### Migration recommendation

Create `/start` as the approved structured inquiry experience. Ask about current state, desired change, success definition, existing presence, references, timeline, and contact details rather than a technical service/package. Submit to a secure server endpoint with schema-based server validation, length limits, safe HTML handling, intentional abuse controls, and explicit failure semantics. Persist to a Google Workspace record first; only after a confirmed durable write should email notification and a success response occur. Do not silently accept a submission that only reached console logging. Preserve immediate pending/success/error acknowledgment and a direct-email fallback.

The exact Google Workspace implementation, notification provider, field schema, retention/privacy language, and operational owner require approval before Phase 01 implementation.

## 11. SEO and redirect audit

- Existing metadata and JSON-LD repeat superseded AI/service claims and require coordinated replacement.
- `app/sitemap.ts` publishes every legacy route and detail path; it must publish only canonical V1 routes after migration.
- `lib/seo.ts` correctly centralizes canonical and social metadata, but every caller must move to the approved route.
- Six detail routes and the case-study index have existing canonical URLs that need one-to-one permanent redirects.
- `/about` needs a deliberate canonical target because its current content splits between Company and Approach.
- New `/privacy` and `/terms` metadata and sitemap entries are required.
- Current robots handling is broadly usable, but disallowed paths should be reviewed against actual routes rather than hypothetical `/admin`, `/drafts`, `/private`, and `/test` paths.
- The root Organization and ProfessionalService JSON-LD contains outdated service types and AI claims. Schema must be rewritten, not merely retitled.
- OpenGraph assets exist for the root and each detailed work item; preserve them where accurate, but update alt text and routes.
- Redirect behavior, sitemap contents, canonicals, OG URLs, internal links, and 404 behavior need a single migration checklist to prevent split indexing.

## 12. Asset audit

### Preserve and evaluate for reuse

- Optimized `.webp` card, desktop, mobile, full-experience, and OG captures under `public/case-studies/**` are directly useful for `/work` and client identity takeover.
- `public/og/mariner-nexus-og.webp` is only 20 KB and can remain as a fallback pending new positioning review.
- `public/founder/gary-mariner-ii.png` is useful for Company if image rights and current representation are confirmed.
- Brand variants under `public/brand/` should be retained pending a formal logo audit.

### Replace or optimize before production reuse

- `public/brand/logo.png` (2.6 MB), `logo-light.png` (2.1 MB), `logo.svg` (1.37 MB), and `micro-logo.png` (701 KB) are disproportionately heavy for shell use and require optimization/source review.
- Several PNG mockups range from roughly 170 KB to 1.76 MB; the optimized captures should be preferred unless the PNG is uniquely required.
- `public/video/hero-loop.mp4` is 1.28 MB. It is not required by the new bright corporate opening and should not be treated as protected; archive or reuse only if an approved later moment earns it.
- `.DS_Store` files and zero-byte `.gitkeep` files are repository hygiene candidates for a later cleanup, not Phase 00 deletion targets.

### Ownership/source uncertainty

Repository contents do not establish licensing, client consent, release status, or whether every live-project screenshot and logo may be republished. Before Phase 02 Work migration, create an asset-rights and claim-verification checklist for all client material and external live URLs.

## 13. Reusable-skill adoption status

| Skill | Installed path | Scope | Validation |
|---|---|---|---|
| `mariner-nexus-website-delivery` | `~/.codex/skills/mariner-nexus-website-delivery/SKILL.md` | User/global | Readable; YAML frontmatter contains only valid `name` and `description`; two referenced files resolve. |
| `mariner-nexus-codex-web-engineering` | `~/.codex/skills/mariner-nexus-codex-web-engineering/SKILL.md` | User/global | Readable; YAML frontmatter contains only valid `name` and `description`; three referenced files resolve. |

The skills are installed at the standard user discovery location, not repository-local, so a fresh Codex session can discover them. The current session's injected skill catalog was established before installation and cannot hot-reload them; recognition should be confirmed in the next fresh session. The generated package also remains available at `mariner-nexus-delivery-system/` for portability.

The supplied `quick_validate.py` could not run because PyYAML is absent from both available Python runtimes. Equivalent validation was performed with Ruby/Psych, including frontmatter parsing, required-key checks, name-format checks, non-empty descriptions, and reference existence. This is a tooling dependency gap, not a manifest failure.

The reusable Skills correctly keep Mariner-specific Mineral Teal, Nexus interactions, and visual identity out of client defaults. They encode process, scope classification, architecture discipline, QA, and completion reporting.

## 14. Risks

1. **Strategy drift:** Historical docs remain numerous and conflict with canonical doctrine. DEC-014 and the concise root instructions reduce the risk, but later archival requires explicit review.
2. **SEO loss:** Renaming all principal routes without atomic redirects, canonical updates, and sitemap changes would create avoidable 404s and split indexing.
3. **Hydration and bundle cost:** Reusing section components unchanged would preserve large client islands and prevent the server-first target.
4. **Acquisition data loss:** The current endpoint can report success without durable persistence. The replacement must have explicit commit/failure semantics.
5. **Security/privacy:** Inquiry data handling needs validated limits, escaping, privacy copy, retention rules, and protected Google credentials.
6. **Unverified claims:** Case-study outcomes and integration claims may be accurate, but the repository alone does not prove them.
7. **Asset rights and weight:** Client media needs rights confirmation; shell logos are oversized.
8. **Framework migration:** Next 16+ and ESLint changes can add unrelated instability if combined casually with design work.
9. **Visual regression:** A direct token swap cannot turn a dark/glass composition into the approved light-to-dark narrative; the shell needs purposeful reconstruction.
10. **Legal content:** `/privacy` and `/terms` are required but their substantive copy needs owner/legal approval.

## 15. Phase 01 recommendation

### Recommended objective

Build only the approved foundation and corporate shell: framework/tooling decision, semantic environment tokens, font loading, global layout, accessible navigation/mobile navigation, footer, route scaffolds required to prove the shell, metadata foundation, and redirect architecture. Do not implement the Nexus, client identity takeover, complex Work presentation, or `/start` persistence in the same phase unless the Phase 01 brief explicitly includes them.

### Safe to preserve

- strict TypeScript and App Router organization;
- Tailwind 4 styling approach;
- `lib/cn.ts` and its two utility dependencies;
- the conceptual SEO helper in `lib/seo.ts`;
- typed project data and optimized work captures as migration inputs;
- `next/font` loading strategy;
- global focus-visible and reduced-motion intent;
- selected motion techniques after purpose review.

### Rebuild

- root design tokens and light/dark environment semantics;
- global body/shell styling;
- navigation and mobile navigation around approved labels;
- footer with Email-only Connect treatment;
- homepage corporate arrival and structural scene composition;
- work-detail presentation architecture when its phase begins;
- start-project experience and secure persistence when its phase begins.

### Migrate

- `/services` → `/capabilities`;
- `/case-studies` → `/work`;
- each `/case-studies/[slug]` → `/work/[slug]`;
- `/about` content → `/company` and `/approach`, with `/about` redirecting to `/company`;
- `/contact` → `/start`;
- metadata, JSON-LD, sitemap, canonicals, internal links, and CTA vocabulary;
- typed case-study fields into the approved Work schema.

### Dependency decisions

- Approve whether Next 16 upgrade occurs at the start of Phase 01 as a dedicated first checkpoint or immediately after the shell baseline. Recommendation: upgrade first in an isolated commit/checkpoint, then build the shell against the target version.
- Keep Framer Motion but approve a strict client-island budget; do not add GSAP or Three.js.
- Approve the Google Workspace persistence mechanism and notification provider before `/start` implementation.

### Visual-foundation priorities

1. Define and contrast-test Nexus White, Silver, Structural Gray, Graphite, Nexus Black, and Mineral Teal state tokens.
2. Establish the bright corporate opening and a disciplined dark systems environment.
3. Select the maximum two-family type system and only required weights.
4. Implement 12-column desktop behavior plus independent tablet/mobile composition.
5. Constrain radii, shadows, glass, and accent usage before building page modules.
6. Prove shell accessibility without depending on animation.

### Likely Phase 01 file scope

Subject to the approved Phase 01 brief:

- `package.json`, `package-lock.json` only if the Next/tooling upgrade is approved;
- `next.config.mjs` for redirects and approved framework configuration;
- `app/globals.css`;
- `app/layout.tsx`;
- `app/page.tsx` and new route placeholders only to prove the shell, not full page content;
- `app/sitemap.ts`, `app/robots.ts`;
- `components/navigation/Nav.tsx` or replacement shell modules;
- `components/footer/Footer.tsx`;
- `components/ui/Button.tsx` and limited foundation primitives;
- `lib/seo.ts`;
- repository documentation and decision records where implementation choices become approved.

### Phase 01 acceptance emphasis

- Approved navigation and footer architecture is understandable without motion.
- Root opening communicates “serious company” in a bright environment.
- Server Components are the default and client islands are enumerated.
- Redirects are explicit and testable before legacy routes are removed.
- No public AI-service, obsolete evolution CTA, pricing, Lab, industry, or GitHub navigation is introduced.
- Typecheck, lint/tooling equivalent, production build, keyboard, focus, reduced motion, and responsive review pass.

## 16. Decision resolution

Gary approved the Phase 00 recommendations on 2026-08-21. DEC-015 through DEC-022 record the resulting decisions.

Items intentionally still requiring implementation-time specificity are the Google Workspace mechanism and operational retention details, final browser-tested token values, final typography loading/licensing implementation, verified publication rights for any work beyond Undugu, and final legal copy. Those details must remain within the approved boundaries and be reported before any material substitution.
