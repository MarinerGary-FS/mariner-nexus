# Reusable Pattern Matrix

Each item has one primary classification. Secondary implications do not change that ownership.

| ID | WDS concept | Classification | Source files | Source decision/phase | Why reusable | What must not copy | Confidence | Recommended future home |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WDS-001 | Truth before claims | UNIVERSAL DOCTRINE | `content/projects/`, intake docs | DEC-027, DEC-043 | Prevents unsupported publication | Project narratives | High | `doctrine/truth.md` |
| WDS-002 | Authorization before publication | UNIVERSAL DOCTRINE | project registry | EA-07 | Makes public eligibility explicit | Current client list | High | `doctrine/authorization.md` |
| WDS-003 | Business before interface | UNIVERSAL DOCTRINE | redesign README | Phase 00 | Keeps design accountable to purpose | Mariner positioning | High | `doctrine/delivery.md` |
| WDS-004 | Complexity is discovered | UNIVERSAL DOCTRINE | operating rules | Phase 00 | Avoids imposed feature scope | Mariner phase count | High | `doctrine/delivery.md` |
| WDS-005 | Meaning survives enhancement | UNIVERSAL DOCTRINE | app routes, Nexus fallback | DEC-041 | Preserves access and resilience | Nexus rendering | High | `doctrine/engineering.md` |
| WDS-006 | Responsive reorganization | UNIVERSAL DOCTRINE | responsive decisions | DEC-024, DEC-040 | Prevents desktop shrinkage | 12/8/4 grid | High | `doctrine/responsive.md` |
| WDS-007 | Accessibility is a release condition | UNIVERSAL DOCTRINE | ARC-01 evidence | ARC-01 | Makes access non-optional | Mariner labels | High | `doctrine/accessibility.md` |
| WDS-008 | Dependency restraint | UNIVERSAL DOCTRINE | `package.json`, decisions | All phases | Controls risk and weight | Current package list | High | `doctrine/engineering.md` |
| WDS-009 | Secrets and environments remain isolated | UNIVERSAL DOCTRINE | inquiry operations | Phase 08, ARC-01 | Prevents leakage/cross-environment writes | Vendor credentials | High | `doctrine/security.md` |
| WDS-010 | Accumulated-system certification | UNIVERSAL DOCTRINE | ARC-01 | ARC-01 | Finds cross-phase defects | Exact certification suite | High | `doctrine/release.md` |
| WDS-011 | Rollback readiness | UNIVERSAL DOCTRINE | rollback plan | ARC-01 | Makes promotion reversible | Vercel IDs | High | `doctrine/release.md` |
| WDS-012 | Cost requires proportional value | UNIVERSAL DOCTRINE | launch docs | ARC-01 | Prevents checklist subscriptions | Speed Insights decision | High | `doctrine/cost.md` |
| WDS-013 | Semantic container | REUSABLE PRIMITIVE | foundation components | Phase 01 | Repeats layout constraint without style | `mn-*` dimensions | High | `references/primitives/` |
| WDS-014 | Responsive grid contract | REUSABLE PRIMITIVE | Grid component | Phase 01 | Provides semantic placement | Exact column counts | High | `references/primitives/` |
| WDS-015 | Accessible control foundation | REUSABLE PRIMITIVE | Button/navigation | Phase 01, 04 | Reuses keyboard/focus semantics | Button appearance | High | `references/primitives/` |
| WDS-016 | Focus-contained menu | REUSABLE PRIMITIVE | navigation | DEC-025 | Reuses containment and restoration | Numbered menu visual | High | `references/accessibility/` |
| WDS-017 | Metadata composition helper | REUSABLE PRIMITIVE | SEO utilities | Phase 08 | Reduces metadata drift | Domain and copy | High | `references/seo/` |
| WDS-018 | Authorized route derivation | REUSABLE PRIMITIVE | project registry, sitemap | DEC-027 | Keeps routes aligned with permission | Work schema fields | High | `references/content/` |
| WDS-019 | Server validation boundary | REUSABLE PRIMITIVE | `lib/inquiry` | Phase 08 | Treats client input as untrusted | Inquiry questions | High | `references/forms/` |
| WDS-020 | Persist-before-notify workflow | REUSABLE PRIMITIVE | inquiry service/tests | Phase 08 | Protects the system of record | Sheets/Resend | High | `references/integrations/` |
| WDS-021 | Dependency-injected adapter boundary | REUSABLE PRIMITIVE | inquiry tests | Phase 08 | Makes failures testable | Vendor adapters | High | `references/integrations/` |
| WDS-022 | Geometry audit engine | REUSABLE PRIMITIVE | Content Integrity scripts | DEC-039 | Detects clipping/overflow/collision | Hard-coded routes/selectors | High | `qa/engines/` |
| WDS-023 | Design-token contract | CONFIGURABLE SYSTEM | CSS tokens | Phase 01 | Gives each project coherent control | Mineral Teal/type scale | High | `schemas/design-profile` |
| WDS-024 | Navigation composition | CONFIGURABLE SYSTEM | navigation | DEC-025, DEC-036 | Architecture stays stable while hierarchy varies | Mariner labels/order | High | `schemas/navigation` |
| WDS-025 | Content and route registry | CONFIGURABLE SYSTEM | `content/projects` | DEC-027 | Enables typed, authorized publication | Five records | High | `schemas/content` |
| WDS-026 | Identity boundary | CONFIGURABLE SYSTEM | `ProjectIdentityBoundary` | DEC-028, DEC-037 | Scopes client worlds safely | Six states/takeover values | High | `schemas/identity` |
| WDS-027 | Responsive choreography | CONFIGURABLE SYSTEM | CSS/components | EA-03 | Allows project-appropriate reflow | Undugu state model | High | `schemas/responsive` |
| WDS-028 | Motion and amplitude profile | CONFIGURABLE SYSTEM | motion/reduced-motion CSS | EA-05–07 | Controls intensity intentionally | Homepage curve | Medium | `schemas/experience` |
| WDS-029 | Inquiry destination | CONFIGURABLE SYSTEM | inquiry adapters | Phase 08 | Selects operations per client | Google/Resend default | High | `integrations/` |
| WDS-030 | SEO/discovery defaults | CONFIGURABLE SYSTEM | metadata/sitemap/robots | Phase 08 | Ensures complete discovery surfaces | Mariner entity/schema | High | `schemas/seo` |
| WDS-031 | Analytics/observability policy | CONFIGURABLE SYSTEM | launch decisions | ARC-01 | Fits evidence and budget | Mandatory paid tooling | High | `schemas/operations` |
| WDS-032 | QA manifest | CONFIGURABLE SYSTEM | Content Integrity | DEC-039, ARC-01 | Generates project-specific matrices | 13 routes/widths | High | `schemas/qa` |
| WDS-033 | Mariner Thread | PROJECT-SPECIFIC EXPRESSION | homepage components | EA-05 | Expresses this brand's system | Thread motif | High | `references/mariner-nexus/` |
| WDS-034 | Nexus visualization | PROJECT-SPECIFIC EXPRESSION | Nexus components | DEC-041 | Evidence of purposeful SVG/DOM work | Visual/interaction grammar | High | `references/mariner-nexus/` |
| WDS-035 | Range of Worlds | PROJECT-SPECIFIC EXPRESSION | homepage Range | DEC-044 | Demonstrates identity range | Four-fragment composition | High | `references/mariner-nexus/` |
| WDS-036 | Release choreography | PROJECT-SPECIFIC EXPRESSION | homepage release | DEC-042 | Expresses deliberate decompression | EA-06 sequence | High | `references/mariner-nexus/` |
| WDS-037 | Undugu identity | PROJECT-SPECIFIC EXPRESSION | Work content/styles | EA-01–03 | Client-specific nonprofit expression | Purple/type/movement | High | `references/projects/` |
| WDS-038 | Serene Origins identity | PROJECT-SPECIFIC EXPRESSION | Work content/styles | EA-07 | Client-specific calm/privacy | Palette/composition | High | `references/projects/` |
| WDS-039 | Sovereign Blueprint identity | PROJECT-SPECIFIC EXPRESSION | Work content/styles | EA-07 | Client-specific authority | Palette/composition | High | `references/projects/` |
| WDS-040 | Awakening/Gary identity | PROJECT-SPECIFIC EXPRESSION | Work content/styles | EA-07 | Proves radically different expression | Atmosphere/editorial design | High | `references/projects/` |
| WDS-041 | Strategic fit approval | HUMAN-JUDGMENT GATE | positioning/spec | Phase 00 | Requires context and tradeoffs | Automated “best” strategy | High | `playbooks/approvals/` |
| WDS-042 | Truth interpretation | HUMAN-JUDGMENT GATE | intake/registry | DEC-043 | Evidence quality needs accountable review | Inferred history | High | `playbooks/truth/` |
| WDS-043 | Visual hierarchy review | HUMAN-JUDGMENT GATE | Work completion reports | EA-07 | Geometry cannot judge dominance | Equal card formulas | High | `playbooks/review/` |
| WDS-044 | Responsive composition review | HUMAN-JUDGMENT GATE | viewport evidence | EA-03, ARC-01 | Intermediate layouts need perception | Screenshot selector | High | `playbooks/review/` |
| WDS-045 | Brand fidelity approval | HUMAN-JUDGMENT GATE | identity reviews | EA-01–07 | Identity cannot be reduced to token match | Mariner taste as universal | High | `playbooks/review/` |
| WDS-046 | Amplification justification | HUMAN-JUDGMENT GATE | Nexus decisions | EA-05–06 | Spectacle must earn meaning/cost | Always-maximal motion | High | `playbooks/experience/` |
| WDS-047 | Client/publication approval | HUMAN-JUDGMENT GATE | authorization matrix | DEC-027 | Permission is human authority | Schema-derived consent | High | `playbooks/approvals/` |
| WDS-048 | Production promotion approval | HUMAN-JUDGMENT GATE | launch checklist | ARC-01 | Production is consequential | Automatic promotion | High | `playbooks/release/` |
| WDS-049 | Typecheck/lint/build | AUTOMATABLE GATE | package scripts | All phases | Deterministic implementation checks | Treating pass as complete QA | High | `qa/gates/engineering` |
| WDS-050 | Unit/contract tests | AUTOMATABLE GATE | inquiry tests | Phase 08 | Verifies logic and failure ordering | Visual judgment | High | `qa/gates/engineering` |
| WDS-051 | Content Integrity matrix | AUTOMATABLE GATE | audit script | DEC-039 | Repeats viewport/state checks | Mariner manifest | High | `qa/gates/integrity` |
| WDS-052 | Link/status audit | AUTOMATABLE GATE | ARC scripts/evidence | ARC-01 | Finds broken public paths | Fixed route list | High | `qa/gates/routes` |
| WDS-053 | Metadata/canonical audit | AUTOMATABLE GATE | SEO utilities | ARC-01 | Detects discovery drift | Production domain | High | `qa/gates/seo` |
| WDS-054 | Authorization-route audit | AUTOMATABLE GATE | registry/sitemap | DEC-027 | Prevents unauthorized emission | Current status names | High | `qa/gates/truth` |
| WDS-055 | Secret and unsafe-URL scan | AUTOMATABLE GATE | inquiry/security checks | Phase 08 | Detects common security failures | Provider assumptions | Medium | `qa/gates/security` |
| WDS-056 | Accessibility automation | AUTOMATABLE GATE | ARC-01 | Catches machine-detectable barriers | Claiming full accessibility | High | `qa/gates/accessibility` |
| WDS-057 | Browser smoke | AUTOMATABLE GATE | launch checklist | ARC-01 | Verifies route/runtime health | One browser as proof | High | `qa/gates/release` |
| WDS-058 | Redirect/query audit | AUTOMATABLE GATE | routing tests | ARC-01 | Verifies migration contracts | Mariner redirect list | High | `qa/gates/routes` |
| WDS-059 | Dependency vulnerability audit | AUTOMATABLE GATE | package tooling | ARC-01 | Finds known dependency risk | Zero-risk guarantee | High | `qa/gates/security` |
| WDS-060 | Repository-reference validation | AUTOMATABLE GATE | documentation closeout | WDS-01 | Prevents broken doctrine links | Workstation paths | High | `qa/gates/documentation` |

## Distribution

- UNIVERSAL DOCTRINE: 12
- REUSABLE PRIMITIVE: 10
- CONFIGURABLE SYSTEM: 10
- PROJECT-SPECIFIC EXPRESSION: 8
- HUMAN-JUDGMENT GATE: 8
- AUTOMATABLE GATE: 12
- Total: 60
