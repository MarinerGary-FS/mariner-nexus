# Anti-Pattern Catalog

| Anti-pattern | Symptom | Root cause | Prevention rule | Detection method | Escalation requirement |
| --- | --- | --- | --- | --- | --- |
| Reskinning weak architecture | New colors over unclear structure | Appearance precedes strategy | Resolve purpose, audience, IA, and truth first | Strategy-to-route trace review | Strategic lead |
| Whole-page client rendering | Meaning waits for JavaScript | Convenience over boundaries | Server-render by default; isolate interaction | Bundle/component-boundary audit | Engineering lead |
| Desktop shrinkage | Crowded or tiny mobile layout | Mobile treated as a viewport reduction | Author mobile choreography independently | Phone/tablet/intermediate review | Design + engineering |
| Duplicate responsive trees | Content/semantics diverge by viewport | Breakpoints implemented as separate products | One semantic source unless exception is documented | DOM/content comparison | Architecture decision |
| Screenshot responsive demo | Selector shows staged screenshots | Evidence artifact mistaken for interface | Validate the living responsive route | Interactive browser review | Reviewer rejection |
| Meaningless amplification | Motion has no explanatory role | Spectacle substitutes for strategy | State the meaning, fallback, and budget first | Impact-gate review | Experience lead |
| Decorative advanced graphics | WebGL/SVG added for impressiveness | Tool-led ideation | Use the least complex medium that communicates | Medium justification | Owner if material cost |
| Portfolio dominance | One case study makes others feel secondary | Local optimization without system review | Review hierarchy across the complete collection | Whole-portfolio evidence | Design lead |
| Uniform system imposition | Every project receives identical modules | Reuse confused with sameness | Make systems conditional on profile and risk | Cross-project portability test | Architecture lead |
| Unsupported public claim | Copy states unverified history/outcomes | Narrative pressure bypasses truth | Require truth status and evidence | Claim ledger audit | Client/owner |
| Fabricated metric | Percentages/results lack source | Desire for persuasive specificity | Prohibit unsourced quantitative claims | Metric-to-evidence check | Block publication |
| Unauthorized case study | Client appears publicly without consent | Data presence mistaken for permission | Publication requires recorded authorization | Registry/route/sitemap audit | Owner-protected approval |
| Premature Production promotion | Preview defects reach live | Schedule overrides release gates | Promote only an approved immutable candidate | Launch checklist | Owner approval |
| Phase-pass complacency | Cross-route defects survive | Local approvals treated as system certification | Run accumulated-system certification | RC audit | Release lead |
| Checklist SaaS purchase | Paid tool enabled without demonstrated need | Completion theater | Recurring/material cost requires owner approval | Billing/integration review | Owner-protected approval |
| Geometry-only typography | Text technically fits but looks clipped/wrong | Machine bounds replace visual review | Pair automated integrity with human typography review | Evidence-board inspection | Design review |
| Symptom patching | Repeated local overrides | Underlying model remains wrong | Correct the governing architecture or record exception | Override/rework analysis | Architecture decision |
| Generic-template copy | New projects inherit Mariner doctrine/routes | Reference implementation mistaken for product | Extract neutral contracts; keep expression as reference | Token/route leakage scan | WDS architecture review |
| Optional feature as universal default | CMS, DB, analytics, or animation appears everywhere | Capability inventory drives scope | Require profile/risk justification | Dependency/service manifest audit | Scope/owner approval |
| Canonical-document drift | Conflicting active/completed plans or duplicate decisions | Closeout lacks reconciliation | One active authority and append-only decisions | Documentation reference scan | Delivery lead |

## Enforcement

An anti-pattern match is not automatically a defect; it is a review trigger. The assigned escalation authority either rejects it, records a bounded exception with evidence and expiry conditions, or changes the governing project profile.
