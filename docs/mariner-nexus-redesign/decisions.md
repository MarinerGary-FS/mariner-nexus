# Mariner Nexus Redesign — Decision Log

This file prevents settled architecture and strategy from being repeatedly reopened.

## DEC-001 — Internal category
**Decision:** Mariner Nexus is internally classified as a Digital Systems Studio.  
**Public use:** Do not make the category label the primary external identity.  
**Reason:** Preserve clarity while allowing Mariner Nexus to become the memorable brand.

## DEC-002 — Service architecture
**Decision:** Strategy × Experience × Systems.  
**Reason:** Reflects the real delivery model without creating an agency-style menu.

## DEC-003 — AI positioning
**Decision:** AI remains an internal production capability and is not marketed as a client service pillar.  
**Reason:** Protect operating capacity and avoid entering custom AI consultancy.

## DEC-004 — Audience model
**Decision:** Create → Evolve → Transform, layered with decision roles.  
**Reason:** Client need/state matters more than industry or organization size.

## DEC-005 — Primary navigation
**Decision:** Capabilities | Work | Approach | Company | Start a Project.  
**Rejected:** large service mega-menu, industries page, pricing page, public Lab at launch.

## DEC-006 — Acquisition
**Decision:** `/start` replaces generic Contact and begins the client journey.  
**Persistence V1:** Google Workspace.  
**Reason:** Structured, maintainable acquisition without premature CRM/database development.

## DEC-007 — Visual identity
**Decision:** Architectural neutral environment with Mineral Teal as a functional signal family. Client colors may temporarily take over project sections.  
**Rule:** Neutral = environment; signal = activity; client = identity.

## DEC-008 — Experience curve
**Decision:** Restraint → Expression → Structure → Peak → Restraint.  
**Reason:** Serious before spectacular; corporate discipline returns after the Nexus.

## DEC-009 — Nexus implementation
**Decision:** Start with DOM/SVG.  
**Rejected for V1 requirement:** immediate Three.js/WebGPU implementation.  
**Revisit:** Only after the SVG/DOM experience meets interaction, mobile, accessibility, and performance goals.

## DEC-010 — CMS/database
**Decision:** No custom CMS/database in V1. Use typed repository content for Mariner Nexus case studies.  
**Reason:** Avoid unnecessary maintenance infrastructure.

## DEC-011 — Public GitHub
**Decision:** Do not link public GitHub from the Mariner Nexus website.  
**Reason:** Protect proprietary/client implementation details and avoid positioning as a developer portfolio.

## DEC-012 — Reusable skills
**Decision:** Maintain separate reusable Website Delivery and Codex Web Engineering skills.  
**Reason:** Reuse quality/process across client projects without imposing Mariner Nexus-specific aesthetics.

## DEC-013 — Silent compromise
**Decision:** Prohibited.  
**Behavior:** If approved experience conflicts with accessibility, performance, compatibility, or security, Codex must report the conflict and propose the strongest compliant alternative.

## DEC-014 — Canonical repository doctrine
**Decision:** `docs/mariner-nexus-redesign/` is the canonical product and implementation specification for the redesign, and the concise root `AGENTS.md` is its operating entry point.  
**Migration treatment:** Pre-existing root-level and `docs/*.md` doctrine remains in place during Phase 00 as historical evidence, but conflicting statements are non-governing and must not silently override the canonical redesign specification.  
**Reason:** The repository previously depended on duplicated and, in one case, workstation-local doctrine. Canonical repository-relative documentation makes strategy reviewable, portable, and enforceable without deleting migration evidence before review.

## DEC-015 — Phase 01 framework baseline
**Decision:** Upgrade to the current stable Next.js 16 release at the beginning of Phase 01 as an isolated migration step. Validate the migration before visual work begins.

## DEC-016 — Legacy route preservation
**Decision:** Preserve legacy URLs through permanent redirects after, and only after, their destinations exist.  
**Mappings:** `/services` → `/capabilities`; `/about` → `/company`; `/contact` → `/start`; `/case-studies` → `/work`; `/case-studies/[slug]` → the corresponding `/work/[slug]`.

## DEC-017 — V1 inquiry system
**Decision:** Google Sheets is the V1 inquiry source of truth; email is notification.  
**Excluded:** CRM, custom database, and acquisition dashboard.

## DEC-018 — Semantic visual tokens
**Decision:** Neutral = Environment; Mineral Teal = Activity; Client Color = Identity.  
**Implementation:** Tune and accessibility-test final production values in browser during Phase 01.

## DEC-019 — Typography evaluation
**Decision:** Begin with Geist Sans as the dominant primary family and Source Serif 4 as a restrained selective counterpoint.  
**Constraint:** Do not substitute without reporting the recommendation.

## DEC-020 — Initial public work authorization
**Decision:** Undugu is the first approved flagship public transformation case study.  
**Constraint:** Other client case studies require explicit authorization before publication.

## DEC-021 — Superseded doctrine archive
**Decision:** Preserve superseded doctrine under `docs/archive/superseded/` without canonical precedence. `docs/mariner-nexus-redesign/` is authoritative. Root and assistant-specific guidance must resolve to the same source.

## DEC-022 — V1 legal routes
**Decision:** Include restrained `/privacy` and `/terms` pages appropriate to website and inquiry use. Client contractual terms remain separate.

## DEC-023 — Phase 01A framework baseline
**Decision:** Pin the Phase 01A baseline to Next.js 16.3.2, React 19.2.8, React DOM 19.2.8, and `eslint-config-next` 16.3.2. Use the ESLint flat configuration and direct CLI because `next lint` is removed in Next.js 16.
**Deferred:** Cache Components and React Compiler remain disabled until a later approved need justifies them.
**Repository guidance:** Set `agentRules: false` in `next.config.mjs` so Next.js does not append generated instructions to the approved concise root `AGENTS.md`. Next.js version-specific implementation guidance remains available under `node_modules/next/dist/docs/` and official documentation.

## DEC-024 — Phase 01B visual foundation baseline
**Decision:** Establish the production visual foundation with Nexus White `#F7F8F6`, Silver `#E9EDEB`, Structural Gray `#CBD2CE`, Graphite `#242B28`, and Nexus Black `#0B100E` as environmental neutrals. Use Mineral Teal REST `#607870`, ACTIVE `#006B58`, SIGNAL `#00A483`, and SETTLE `#D5E4DE` only for activity and state communication. Client identity remains a scoped token contract and does not alter the global environment.
**Typography:** Geist Sans is the dominant interface and display family. Source Serif 4 is limited to selective editorial counterpoint, loaded only at weights 400 and 600 without priority preloading.
**Spatial system:** Use a fluid type and spacing scale, a `90rem` maximum content container, fluid gutters, and a 12-column desktop / 8-column tablet / 4-column mobile grid.
**Responsive composition:** Tablet layouts must use the eight-column grid to create intentional composition rather than inherit enlarged mobile stacks. Mobile action groups may change geometry and treatment to preserve clear primary/secondary choreography instead of wrapping desktop siblings unchanged.
**Material and access:** Surfaces use restrained borders, shallow elevation, and environmental contrast rather than decorative effects. Keyboard focus uses the SIGNAL value with a 2px outline and 4px offset. Browser contrast, reduced-motion, and responsive validation are required whenever these values materially change.
**Review surface:** `/foundation-preview` is a noindex, non-sitemap review route for validating primitives independently. It is not a canonical public route and must be removed or explicitly retained before launch hardening.

## DEC-025 — Phase 01C corporate shell and route migration
**Decision:** Use one restrained global shell with server-rendered navigation/footer structure and a single client navigation boundary for pathname state, accessible menu control, focus containment, and Escape restoration.
**Desktop:** At `1100px` and wider, expose Mariner Nexus, Capabilities, Work, Approach, Company, and the restrained Start a Project action directly.
**Tablet:** From `768px` through `1099px`, preserve direct Mariner Nexus and Start a Project access while placing the four exploration routes in a controlled two-column architectural menu panel. Tablet does not inherit the desktop row or mobile full-height menu.
**Mobile:** Below `768px`, expose Mariner Nexus and an explicit menu control. The viewport-height menu uses numbered structural links, contains keyboard focus while open, restores focus on Escape, locks background scrolling, and keeps Start a Project as a restrained terminal action.
**Route migration:** Activate permanent redirects for `/services` → `/capabilities`, `/about` → `/company`, `/contact` → `/start`, `/case-studies` → `/work`, and `/case-studies/undugu` → `/work/undugu`. Preserve the remaining legacy detail pages without redirect until each corresponding client project is explicitly authorized and its canonical `/work/[project]` destination is ready.
**Route publication:** `/work/[project]` is statically established with Undugu as the only authorized project. Unknown project slugs return not found.
**Metadata:** Use the approved Strategy × Experience × Technology positioning in the root and all new canonical route metadata. The sitemap lists canonical V1 routes only; `/foundation-preview` remains noindex and robots-disallowed.

## DEC-026 — Phase 02 corporate-core composition
**Decision:** The understandable corporate experience uses content, typography, structural lines, light/dark environmental shifts, and active whitespace only. It does not depend on imagery, motion, or an advanced interaction to explain Mariner Nexus.
**Homepage:** Establish the sequence Arrival → Recognition → Interconnected Disciplines → Confidence. Public recognition language describes the visitor’s situation without exposing CREATE / EVOLVE / TRANSFORM labels. The three disciplines use one connected architectural band rather than independent service cards.
**Corporate routes:** `/capabilities` progresses through the disciplines as one sequence; `/approach` uses a continuous eight-step method; `/company` remains truthful to a founder-led company and does not imply staff or scale that does not exist.
**Responsive composition:** Desktop uses strong cross-grid relationships; tablet uses intentional offsets on the eight-column system; mobile changes reading order and action geometry to preserve rhythm rather than merely stacking reduced desktop blocks.
**Inquiry presentation:** Phase 02 `/start` uses native labeled controls outside a submitting form so Enter or browser behavior cannot leak inquiry content into a URL or endpoint. The online submission action remains visibly unavailable until secure Google Workspace persistence is authorized and implemented; email is the current active path.
**Typography:** Source Serif 4 appears only once as a selective company-philosophy counterpoint. Geist Sans carries all primary corporate communication.

## DEC-027 — Phase 03 public-work architecture
**Decision:** Public transformation records use a typed repository model with an explicit authorization allowlist and a separate publication status. A record is routable only when both controls approve it; Phase 03 authorizes Undugu only.
**Narrative:** Work follows See it → Understand it → Experience it live. Finished media leads, followed by Client, Situation, Objective, Strategy, Experience, Systems, Transformation, and a secure external live-project action.
**Content integrity:** Public claims must be supported by approved project facts or observable production evidence. Unverified legacy claims, metrics, platform details, attribution, and operational outcomes remain unpublished until Gary supplies or authorizes evidence.
**Client identity:** Project colors are scoped through record-level custom properties. They may identify the client inside its transformation record but may not replace the global Mariner Nexus environment.
**Media and runtime:** Use controlled local media with `next/image`, known dimensions, responsive sizes, and deliberate alternatives. Transformation records remain static and complete without an iframe, live-site dependency, new client JavaScript, or a new package.

## DEC-028 — Phase 04A client-identity takeover
**Decision:** Implement client takeover as a reusable project boundary with semantic identity tokens and four environmental states: Mariner, entering, active, and releasing. The boundary enhances server-rendered content; it does not own project content, navigation, routing, or media.
**Controller:** Use one small Client Component with Intersection Observer, passive viewport listeners, and requestAnimationFrame-bounded measurement. State changes only when the boundary crosses an authority threshold; native scrolling remains untouched.
**Visual authority:** Entry begins with project signal and structure, active state may influence scoped surfaces and project systems, and release restores Mariner neutrals and Mineral Teal. Global navigation remains Mariner Nexus throughout Phase 04A.
**Identity contract:** Every approved project explicitly configures `primary`, `secondary`, `surface`, `surfaceStrong`, `text`, `textMuted`, `signal`, and `border`. Pairings require project-by-project contrast validation; the system does not derive or blindly trust arbitrary colors.
**Responsive behavior:** Desktop uses layered surface/structure authority, tablet uses a restrained directional surface relationship, and mobile uses a direct vertical identity sequence. Reduced-motion removes interpolation while preserving the same identity states and content.
**Approved experience principles:** Client identity gains authority in proportion to project depth. The return to Mariner Nexus coincides with the return from proof to possibility. Adaptability is demonstrated through environmental behavior rather than explained through marketing copy.

## DEC-029 — Phase 04B Work Portal and responsive proof
**Work Portal:** Treat the project media and transformation statement as one direct navigation environment. Coordinate existing takeover proximity with CSS hover/focus authority; do not add portal JavaScript, intercept navigation, or introduce a route-transition layer.
**Responsive proof:** Use one manual Desktop / Tablet / Mobile demonstration in the Undugu Experience section. Native `aria-pressed` buttons prioritize user agency and calm inspection over an automatic or looping presentation.
**Authenticity:** Every responsive state uses a controlled capture of the real production Undugu experience at the corresponding display context. Do not use device hardware, arbitrary cropping, or one screenshot scaled into three labels.
**Responsive presentation:** Desktop may vary the presentation width to expose spatial relationships; tablet uses an intentional intermediate frame; mobile uses full available page width so the captured interface—not a simulated device dimension—communicates composition.
**Performance:** Portal behavior adds no client runtime. The responsive control is one route-local state island; alternate optimized captures remain non-priority and no new dependency is permitted.
**Signal-system handoff:** Focus indication, active/current state, and Mariner signal behavior must remain visually distinguishable as the global Signal System evolves. Accessibility focus may not become indistinguishable from decorative or interaction signal states.

## DEC-030 — Phase 04C Signal, context, and Thread architecture
**Approved governing principles:** Signal indicates state. Thread indicates relationship. Context indicates location. Connectivity should be felt before it is consciously noticed.
**Signal grammar:** REST is quiet structural availability, ACTIVE is pointer or selectable interaction, SIGNAL is a meaningful response/connection, and SETTLE is the stable acknowledged structure. Mineral Teal remains functional and may not become a generic decorative surface treatment.
**State distinction:** Keyboard focus retains the global 2px SIGNAL outline with 4px offset. Hover uses a partial entering rule, current route uses `aria-current="page"` plus a persistent node and full rule, and contextual/Thread signal uses labeled state or connected node geometry. These states may share the Mineral Teal family but not the same visual treatment.
**Context controller:** Keep context enhancement inside the existing navigation client boundary. Pathname supplies the immediate and no-JavaScript current-route fallback; semantic `data-navigation-context` sections enhance it through one Intersection Observer using a narrow center reading band. The previous valid context persists through boundary gaps to prevent flicker; no scroll listener, percentage, progress bar, or live-region announcement is permitted.
**Mariner Thread:** Use one server-rendered, `aria-hidden` architectural line-and-node primitive only beside content that names the relationship. Phase 04C authorizes Strategy–Experience–Systems connection, the Approach method, Mariner-to-project proof, and continuation toward inquiry. Project-colored Thread behavior is scoped to an approved identity boundary and returns to Mariner semantics outside it.
**Motion and performance:** CSS state transitions only; reduced motion makes changes immediate. No new dependency, global render loop, continuous measurement, route transition, or content-hydration requirement.

## DEC-031 — Phase 05 Systems grammar and deconstruction
**Approved governing principle:** Systems sophistication is measured by operational effectiveness, not infrastructure complexity.
**Operational grammar:** Node represents a named entity; Connection represents a stated relationship; Flow represents ordered movement; State represents inactive, active, complete, or selected/current status; Signal continues to indicate Mariner activity. Thread evolves into Connection and Flow rather than spawning a separate diagram language.
**Truthful demonstration:** Use the approved V1 inquiry pattern—interaction → validation → structured Google Workspace record → notification → human follow-up—as a representative delivery-capability model. Explicitly state that public inquiry persistence remains separately gated; do not imply the demonstration is the currently active website backend.
**Rendering boundary:** Server-render the complete Systems story, semantic ordered flow, signature statement, and Capabilities disclosure. Limit enhancement to one homepage Client Component owning one disconnecting Intersection Observer and native `aria-pressed` node selection. No SVG, graph package, animation library, request, scroll listener, or render loop.
**Responsive grammar:** Desktop may expose one horizontal spatial flow. Tablet preserves the full sequence with wider intermediate vertical architecture. Mobile uses a direct vertical operational path. Content parity is required; spatial parity is not.
**Environment:** Descend through Nexus White, Silver, Structural Gray, Graphite, and Nexus Black to communicate movement beneath the interface. Dark contrast and reduced-motion comprehension take precedence over atmospheric subtlety.

## DEC-032 — Phase 06 Nexus architecture
**Implementation:** The first production Nexus uses typed repository data, semantic DOM nodes, and an `aria-hidden` SVG line layer. DOM/SVG already achieves the approved explanatory and reorganization objective; Phase 06 does not evaluate or introduce advanced spatial graphics.
**Adaptability model:** Keep a stable union of meaningful node IDs mounted. Strategy, Experience, Systems, and Outcome persist across states and change position/relationship while objective-specific Audience, Content, Platform, Data, and Operation nodes enter only when relevant. Objective selection must reorganize one architecture rather than replace it with unrelated diagrams.
**Objectives:** Authorize Build something new, Transform what exists, Connect the experience, and Explore what’s possible. The default state remains Strategy × Experience × Systems → useful outcome. Scoped nodes are explicitly marked and never imply automatic inclusion.
**Semantics:** Objective and node controls use native buttons and `aria-pressed`; a textual ordered relationship sequence is authoritative on mobile and the static default remains complete without JavaScript. SVG lines are visualization only. Focus, selection, signal, and settled architecture remain visually and semantically distinct.
**Motion and state:** Keep state local to the Nexus: selected objective, selected node, and a short reorganizing/settled phase. CSS moves nodes for 620ms after deliberate input, then the architecture becomes still. Reduced motion settles immediately. No Observer, global store, request, scroll listener, continuous animation, or render loop.
**Responsive and release:** Desktop uses the full spatial field, tablet a compressed grouped field, and mobile an ordered vertical relationship path from objective to outcome. The environmental peak releases from Nexus Black through Graphite and Silver into the existing Approach reassurance.
**Approved closure principles:** The Nexus reorganizes capability rather than merely changing content. Persistent core nodes create trust while surrounding architecture demonstrates adaptability. Visionary interaction is strongest when the visitor understands why it changed. The peak clarifies possibility rather than advertising technical complexity.
**V1 advanced graphics:** Do not add Three.js, WebGL, or WebGPU in V1 unless future testing identifies a specific experience limitation that DOM/SVG cannot solve.

## DEC-033 — Phase 07 inquiry architecture
**Journey:** Release from the Nexus into a concise eight-step Approach reassurance, a quiet possibility pause, and one light-environment Start a Project decision. The homepage summarizes the method; `/approach` remains authoritative for its complete explanation.
**Interaction:** `/start` uses five conversational groups—Objective, Context, Direction, Contact, Review—with backward navigation, retained responses, semantic errors, deliberate focus movement, and an optional Work path only after success. It asks for no budget or service SKU.
**Server boundary:** Use `POST /api/inquiries` as a bounded Route Handler because explicit HTTP semantics, payload limits, integration testing, and replaceable adapters are stronger here than coupling persistence to a Server Action. Client validation supports the conversation; the repository-owned typed server schema is authoritative.
**Persistence:** Google Sheets remains the only V1 source of truth. A small server-only adapter signs a service-account JWT with Node crypto and calls the Sheets REST API directly. No Google SDK, CRM, database, webhook intermediary, or client credential is added.
**Notification:** Use the repository's previously identified Resend mechanism through its HTTPS API, with no Resend package. Notification is attempted only after persistence and its failure does not invalidate a stored inquiry. Preview notification is independently disabled by default.
**Environment safety:** Production and Preview require separate Sheet IDs/ranges and notification destinations/enablement. Development follows Preview configuration only when explicitly provided. Missing persistence configuration returns a controlled failure; it never logs inquiry content or reports false success.
**Abuse baseline:** Enforce a 14 KB request ceiling, server validation/max lengths, HTTP(S)-only stored URLs with no fetching, honeypot, 2.5-second timing floor, in-flight client lock, stable submission key, ten-minute duplicate window, and five-attempt per-instance rate window. Distributed durable rate limiting and CAPTCHA remain deferred until evidence justifies them.
**Analytics and privacy:** Acquisition events contain event/state enums only—never contact details or open text. Submission begins a human-reviewed project conversation, not marketing enrollment or a contractual engagement.
**Legacy endpoint:** `/api/contact` is retired with `410 Gone`; its prior GoHighLevel, webhook, console-PII, and email-first behavior is non-canonical.

## DEC-034 — Phase 07 live operational configuration
**Decision:** The Phase 07 acquisition pipeline was live verified on 2026-08-22. Google Sheets is the V1 acquisition source of truth, with separate and isolated Preview and Production Sheets and Vercel environment configuration.
**Notification:** Production notifications route to `info@marinernexus.com` from the verified sender `inquiries@marinernexus.com`. Preview test notifications route to `gary.mariner@gmail.com` unless intentionally reconfigured. Email remains secondary: a notification failure after successful persistence must not delete, duplicate, or fail the stored inquiry.
**Infrastructure boundary:** The existing Google Cloud project, dedicated service account, approved Sheets, Resend configuration, and Vercel variables are authoritative. Operational documentation may record non-secret routing identifiers, but never Sheet IDs, API keys, private-key material, or service-account credentials.

## DEC-035 — Phase 08 launch hardening boundary
**Public route safety:** Remove the obsolete `/foundation-preview` implementation and unauthorized legacy case-study detail implementations before launch. Preserve the five approved direct permanent redirects, including `/case-studies/undugu` → `/work/undugu`; all other unauthorized project details return 404.
**Security headers:** Enforce nosniff, frame denial, strict-origin referrer handling, camera/microphone/geolocation denial, and HSTS. Defer CSP enforcement until a Report-Only policy can be observed against the release candidate and Vercel services without launch risk.
**Release:** A Vercel Preview tied to the final release commit is the release candidate. Production promotion and DNS changes require explicit final approval; rollback preserves the inquiry infrastructure.

## DEC-036 — Contextual-navigation collision correction
**Decision:** At desktop widths, assign Brand, Context, Primary Navigation, and Actions independent grid tracks. Context owns a fixed 6.5rem secondary region before primary navigation rather than absolute viewport centering. Tablet/mobile retain the existing three-region composition.
**Constraint:** Context changes may update text and signal state but may not change track geometry, overlap primary labels, add a header row, or shift the primary navigation. The measured context-to-navigation separation is 24px at the 1440, 1280, and 1100 launch widths.

## DEC-037 — Client Takeover Engine
**Decision:** Replace the coarse four-state palette takeover with a reusable six-state experience boundary: Mariner, Introduction, Influence, Takeover, Release, and Return. The controller remains one small progressive-enhancement island using Intersection Observer, passive viewport listeners, and requestAnimationFrame-bounded measurement; native scrolling remains untouched.
**Experience contract:** Every authorized project must explicitly define an `experienceProfile` covering display-family role, display weight/tracking, section rhythm, surface radius, CTA geometry, media dominance, transition duration, and takeover intensity in addition to its approved visual identity. These are expressive dimensions, not interchangeable style presets, and require project-specific authorship and validation.
**Undugu expression:** Undugu uses Source Serif 4 as an expressive display voice inside its boundary, Geist Sans for body/interface text, community-first production imagery, generous editorial rhythm, rounded gathering-like surfaces, purple identity depth, and pill-shaped participation actions. No unapproved font, image, claim, or client is introduced.
**Authority boundary:** Mariner owns the global shell, route context, accessibility behavior, continuation, and trust. The client owns the transformation-record canvas while active. Release and Return visibly restore Mariner authority; client styling remains strong and legible without JavaScript, while reduced motion removes interpolation rather than identity.

## DEC-038 — Living Interface containment
**Decision:** Living Interfaces use a reusable containment/accessibility boundary with intentionally coded, project-specific creative implementations. They are not iframes, remote embeds, screenshot hotspots, videos, device mockups, generic renderers, or theme presets.
**Undugu fragment:** Reconstruct the current production Undugu homepage hero as semantic DOM using approved copy, logo, gathering photography, Playfair Display, DM Sans, navigation, CTA language, and genuine responsive relationships. The production assets are optimized and stored locally so rendering never depends on Undugu runtime availability.
**Interaction:** The server-rendered fragment owns content, imagery, and layout. One replaceable client island owns only the authentic mobile menu disclosure. Client navigation and actions are explicit external links opening the real Undugu destination in a new tab; the later “Experience Undugu Live” action remains the canonical project-level external path.
**Performance:** Preserve the opening screenshot as the eager route LCP and lazy-load the deeper Living Interface photograph. Replace the former responsive screenshot selector so desktop/tablet/mobile proof images are not redundantly loaded alongside the reconstruction. Project fonts and styles remain route/scoped; no dependency is introduced.

## DEC-039 — Global typography and public-contact integrity
**Readability:** Every visible word must remain fully readable at every supported viewport. Typography owns an explicit grid region; text may not collide with adjacent copy, clip at viewport or section boundaries, disappear beneath fixed/sticky UI, or rely on overflow masking to conceal a layout defect.
**QA:** Major-route reviews include desktop, tablet, and mobile composition plus Chromium and representative Safari font-metric inspection. A lightweight rendered bounding-box audit supplements—without replacing—visual review. Every future major-phase report must state `Typography/content integrity: PASS / FAIL`.
**Public contact:** `info@marinernexus.com` is the canonical general public contact and recoverable-inquiry fallback. `inquiries@marinernexus.com` remains the distinct verified transactional sender and is not presented as the general public address. Historical reports may preserve superseded configuration when they accurately record their time.

## DEC-040 — Responsive Performance architecture
**Same interface:** Responsive Performance operates on the one server-rendered Undugu Living Interface. It does not switch screenshots, duplicate semantic trees, render device mockups, or maintain separate desktop/tablet/mobile implementations.
**Progression:** A route-local controller uses six Intersection Observer markers—Wide, Compressing, Intermediate, Reorganizing, Narrow, and Settled—to select staged architecture. The controlled canvas transitions continuously between widths; container queries reorganize navigation, typography, imagery, CTAs, columns, and sequence at stable thresholds. Native document scrolling remains authoritative.
**Sticky boundary:** The presentation is sticky only inside its bounded section. Global horizontal containment uses `overflow-x: clip` rather than a hidden overflow scroll container so native sticky positioning remains standards-based without enabling horizontal page scrolling.
**Access and fallback:** DOM order and focus targets never change. Reduced motion removes geometry interpolation while preserving staged compositions. Without JavaScript the completed EA-02 interface renders as a normal responsive section. Mobile begins with a readable lateral structural overview and resolves to the native stacked interface.
**QA:** The canonical content-integrity audit retains its 117 route/width baseline and adds representative EA-03 Wide through Settled transformation states. Transitional composition is now a permanent responsive QA obligation.

## DEC-041 — Nexus Crescendo rendering and identity architecture
**Rendering:** Amplify the flagship Nexus with semantic DOM, advanced decorative SVG, and CSS spatial depth. Ten bounded nodes and four deterministic topologies do not justify Canvas, WebGL, Three.js, a graph package, a parallel semantic tree, or a continuous render loop. Graphics may increase comprehension and emotional amplitude but never own meaning.
**Objective behavior:** Build, Transform, Connect, and Explore retain Strategy, Experience, and Systems as persistent core intelligence while contextual nodes, relationship topology, and the human or organizational outcome visibly reorganize. User selection is authoritative after entry; rapid input cancels stale settlement and the last deliberate choice wins.
**Homepage crescendo:** The representative Systems flow now hands off through Experience → System → Outcome and states that changing the objective changes the architecture. Nexus remains a dark settled peak; the previous light release and local CTA are removed because EA-06 owns the contrast and release.
**Identity:** Use the approved compact metallic Mariner mark materially at the full-bleed peak, desaturated into the Nexus environment so a single Mineral Teal convergence signal retains semantic authority. Preserve the other core logo assets, archive the legacy hero video/blue-orbit treatment as historical expression, and keep Mineral Teal at maximum semantic authority only for active relationships, selected state, convergence, and settled outcome.
**Responsive/access:** Desktop uses full spatial topology, tablet uses a grouped objective deck and bounded field, and mobile uses an independently composed vertical operational architecture. The complete four-objective model remains available without JavaScript; reduced motion resolves immediately.
**Permanent QA doctrine:** A flagship interaction must justify rendering complexity through communication value, not implementation novelty. A visual peak must preserve semantic comprehension at maximum amplitude. Objective-driven systems must visibly reconfigure when the objective changes. Advanced graphical layers may enhance meaning but may never become the sole carrier of meaning.

## DEC-042 — Total Release and final homepage conversion
**Release architecture:** The actual EA-05 peak resolves inside the existing Nexus island through three bounded states—peak, resolving, and released—driven by Intersection Observer markers in a short native-scroll boundary. Thread relationships converge into one controlled path; contextual architecture, peak-scale identity, and Mineral Teal authority recede before a solid architectural plane restores Nexus White. There is no scroll listener, frame loop, lock, snap, new dependency, eager media, or continued offscreen animation.
**Corporate return:** Replace the directly superseded post-Nexus eight-step reassurance, separate possibility pause, and duplicate final-question composition with one uncontained corporate canvas. `/approach` remains the authoritative method explanation and the restrained site footer remains unchanged. The final hierarchy is `Possibility` → `What could yours become?` → one concise objective statement → `Start a Project` → quiet reassurance.
**Continuity:** The homepage action navigates immediately to the operationally verified `/start` inquiry, whose first question continues the same objective-led conversation. Existing PII-free `start_project_cta` analytics remains bounded to the enum source `final_conversion`; no acquisition, persistence, notification, route, or production configuration changes.
**Responsive/access:** Desktop uses strong asymmetric whitespace, tablet reduces the release interval proportionally, and mobile collapses complexity vertically into a touch-forward action. Reduced motion removes the sticky transition and presents an immediate settled-light resolution; without JavaScript, the complete semantic Nexus is followed naturally by the server-rendered possibility and conversion content.

## DEC-043 — Range of Worlds authorization boundary
**Registry:** One typed registry may contain internal audit entries for all candidate projects, but public output is derived only from entries with explicit authorization. A full record requires `PUBLISHED`, authorized public display, authorized case study, published narrative data, and a complete experience profile. A `FEATURED` project may later appear on `/work` without a detail route only after public-display authorization. `HELD` entries remain absent.
**Current classification:** Undugu, Serene Origins, Sovereign Blueprint Consulting, Awakening, and GaryMariner.com are `PUBLISHED` with explicit public-display and full-record authorization. GaryMariner.com received explicit authorization and canonical narrative truth on 2026-08-23; `/work/gary-mariner` is emitted for review. Public Mariner attribution verifies authorship but does not itself establish historical facts outside the approved record.
**Truth boundary:** Live-site copy, metrics, testimonials, and visible systems may inform the audit but may not become Mariner transformation claims without verified provenance and approval. No additional project route, sitemap entry, metadata record, or homepage proof is emitted from audit evidence alone.
**Implementation gate:** Multi-world surface architecture, homepage Range integration, and identity profiles begin after classification review. This preserves the EA-06 homepage release and the existing 176/176 Content Integrity baseline while authorization remains unresolved.

## DEC-044 — Range hierarchy and Systems reconvergence
**Work hierarchy:** `/work` presents Awakening, GaryMariner.com, Sovereign Blueprint Consulting, Serene Origins, and Undugu as authored environments rather than one dominant portal followed by secondary records. Awakening receives the strongest atmospheric opening; Gary is an individual identity command surface; Sovereign remains sharp and structural; Serene remains private and calm; Undugu retains its rounded 501(c)(3) nonprofit organization · brotherhood · community · movement · participation expression without controlling the entire portfolio hierarchy.
**Homepage contrast:** Range of Worlds begins on a light identity field so it is read as a deliberate change from the preceding dark corporate Systems model. Its four surfaces use authentic project fragments and concise identity signals rather than a generic card treatment. The statement “The same starting point does not require the same digital answer.” is the governing idea.
**Reconvergence:** Range resolves into a bounded graphite handoff—Different surfaces. One architectural discipline.—before the existing Systems escalation resumes. The resulting amplitude is Corporate 2 → Range 5–7 → Systems 8.5 → Nexus 10 → Release 1 → Conversion 2.
**Protection:** This refinement does not modify Nexus behavior, the EA-06 release, the final conversion sequence, project authorization status, or public-route derivation.
**Final correction:** The expanded 250/250 Content Integrity matrix is the canonical minimum; future work may add states but may not remove or weaken this baseline. It includes GaryMariner.com at all canonical widths, identity/release/reduced-motion states, and JavaScript-free direct-route fallbacks. The corrected five-world EA-07 state received final approval on 2026-08-23. Production deployment and Website Delivery System implementation remain separately gated.

## DEC-041 — Interface Deconstruction architecture
**Continuity:** Interface Deconstruction extends the one mounted Undugu Living Interface rather than swapping to a duplicate reconstruction or appending an unrelated workflow diagram. The authentic “Experience the Movement” action becomes the source signal; meaningful client layers recede while the existing Node / Connection / Flow / State grammar emerges from that source.
**Truth boundary:** Undugu’s visible interface and real outbound participation action are actual client evidence. Interaction → Intent → Structure → System → Notification → Human Action → Useful Outcome is explicitly a generalized Mariner capability demonstration, not a claim about Undugu’s production backend. The model terminates in participation moving forward, not technology.
**Identity handoff:** Undugu purple and expressive type remain authoritative through Intact, Signal, and Separation. Graphite, Geist Sans, and Mineral Teal progressively take authority through Relationship, System, Handoff, and Mariner. Mineral Teal indicates active relationship and validated flow only.
**Rendering boundary:** Server-render the interface and complete operational model. Extend the existing route-local controller with one additional disconnecting Intersection Observer over seven bounded markers. Use one decorative SVG path with five nodes; no dependency, request, scroll listener, layout measurement, animation loop, canvas, or advanced graphics stack is permitted.
**Access and fallback:** DOM reading order remains source → model → outcome. Receded source controls become inert and assistively hidden only when they do not own focus; focus keeps the source stable and usable. Reduced motion makes stages immediate. Without JavaScript, the intact interface is followed by the complete static operational model.
**QA doctrine:** Any visual deconstruction must preserve semantic continuity between source interface and revealed system. Dynamic identity transitions require typography containment and color-contrast testing at intermediate states. Operational diagrams must terminate in a human or organizational outcome rather than technology for its own sake. The canonical audit now contains 142 checks.

## DEC-045 — ARC-01 release certification boundary
**Decision:** The accumulated EA-01 through EA-07 system is classified `GO WITH DOCUMENTED NON-BLOCKERS` at ARC-01 Preview deployment `dpl_4xyL3TPoarFfDn38CzPWHc6mZRws`, implementation source `106768f`. Production promotion remains a separate explicit authorization; current Production and the known-good rollback deployment remain untouched.
**Corrections:** Release certification corrected visible-label accessible names, project-identity contrast, and a verified Work initialization repaint. It did not redesign the approved worlds, alter Nexus or EA-06 release, flatten the canonical amplitude, change inquiry architecture, or add dependencies.
**Permanent gates:** Preserve the 250/250 Content Integrity minimum, five-world authorization/truth matrix, thirteen canonical sitemap routes, full responsive and accessibility review, and whole-homepage amplitude assessment. Synthetic performance variance must be evaluated with layout stability, blocking time, runtime health, Production comparison, and later real-user evidence rather than a single score.
**Non-blockers:** Firefox and Edge were unavailable under the existing Phase 08 exception. Protected Preview visual access required authenticated CLI verification, with visual captures from the identical committed production build. Variable mobile-throttled Work LCP warrants post-launch Speed Insights observation but is not accompanied by material CLS, long tasks, or runtime errors.
**Production closeout:** Gary authorized promotion of the approved candidate on 2026-08-23. Vercel created READY Production deployment `dpl_EGjSRmSBdDyTPLzwFfxA1pdDJfpe` from implementation `106768f`; thirteen-route, redirect, authorization, interaction, inquiry-configuration, overflow, console, and runtime-log smoke certification passed. Rollback remains `dpl_3f14kF1yWzYcM79LrLrFmQJt8tFq`.
**Observability decision:** Vercel Speed Insights is `DEFER — optional post-launch observability`, deferred by owner pending cost/benefit review. The launch baseline remains mobile 0.98 / LCP 2.42 s, desktop 0.98 / LCP 1.10 s, CLS 0, and TBT 0 ms. Variable mobile Work LCP remains a non-blocking post-launch observation. Analytics and CSP remain deferred as classified by ARC-01; no paid observability service may begin without explicit authorization.

## DEC-046 — Intelligence positioning, Jacob publication, and social identity
**Public model:** Mariner Nexus now presents one connected operating model: Strategy → Experience → Systems → Intelligence. Intelligence means source-aware evidence, structured context, provenance, and decision support. It is not autonomous judgment, an autonomous-AI-agency position, or a promise that every engagement contains AI or automation. Any predictive, model-assisted, or automated runtime capability remains separately scoped, evidenced, risk-reviewed, and authorized.
**Jacob publication:** Jacob Mariner is approved for public display and full publication as Transformation Record 06, an Athlete Intelligence Platform. Published facts must remain traceable to their stated source class and provenance. Self-reported, athlete-published, team-published, and third-party performance evidence may not be silently conflated. Operating-now capability and future-state automation must be visually and verbally distinct; a future state may not be represented as live functionality.
**Social identity:** Use one reusable, route-aware 1200×630 OpenGraph identity architecture with stable direct image URLs for Home, Capabilities, Work, and Jacob Mariner. Each card receives purpose-specific hierarchy and copy within the Mariner Nexus visual system. Generic AI imagery, device mockups, dashboard screenshots, and decorative SaaS motifs are prohibited.
**Routes and QA:** Jacob brings the canonical public inventory to 14 routes and the published transformation-record set to six. The existing 250/250 Content Integrity result remains the minimum non-regression baseline; the current release must expand route/state coverage for Jacob, verify source and future-state boundaries, test direct OpenGraph image responses and consuming metadata, and complete desktop, tablet, mobile, keyboard/focus, reduced-motion, JavaScript-free, representative Safari, Chromium runtime, sitemap, robots, structured-data, and performance review.
**Precedence:** This decision prospectively supersedes the three-discipline and internal-only-AI positions in DEC-002, DEC-003, DEC-025, and DEC-026, plus the five-record/thirteen-route release state in DEC-043 through DEC-045. Those entries remain unchanged as historical records of their approved states.
**Production closeout:** Implementation `dc432a6d859963229fa662ef858ca489f8581f54` was released on 2026-09-11 through certified immutable deployment `dpl_D7ckiKngdbxydCcjMhJSayDjgZRg`. Candidate and public verification passed the 14-route inventory, expected 404s, canonical and social metadata, structured data, 1200 × 630 image output, sitemap, robots, responsive visual review, and runtime-log checks. Immediate rollback is `dpl_EGjSRmSBdDyTPLzwFfxA1pdDJfpe`; older known-stable fallback is `dpl_3f14kF1yWzYcM79LrLrFmQJt8tFq`.
