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
