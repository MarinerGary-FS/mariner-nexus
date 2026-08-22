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
