# Project Profile Schema

## Recommended source format

Use human-authored YAML validated by JSON Schema. Derive typed TypeScript/JSON for implementation. Keep narrative briefs and evidence in Markdown. TypeScript alone is a poor intake authority; free-form Markdown alone is not safely executable.

## Proposed top-level contract

| Field | Purpose |
| --- | --- |
| `schemaVersion`, `projectId`, `status` | Versioning and lifecycle identity |
| `owners`, `approvalAuthorities` | Accountable people/roles and protected actions |
| `business`, `audiences`, `objectives`, `success` | Strategic basis |
| `tier`, `risk`, `amplification` | Proportional process controls |
| `scope`, `exclusions`, `constraints` | Delivery boundary |
| `truthRegister`, `authorizationRegister` | Evidence and public eligibility |
| `content`, `routes`, `navigation`, `conversion` | Information architecture |
| `identity`, `responsive`, `motion` | Project-specific experience configuration |
| `technical`, `data`, `integrations`, `environments` | Implementation/operations choices |
| `seo`, `analytics`, `privacy`, `security` | Public and governance requirements |
| `qaManifest`, `performanceBudgets`, `browserPolicy` | Verifiable acceptance |
| `release`, `rollback`, `handoff`, `maintenance` | Operational completion |
| `decisions`, `changes`, `evidence` | Durable traceability |

Validation checks shape and referential integrity, not strategic quality. Schema defaults must be neutral and minimal; no Mariner routes, colors, clients, interaction names, or amplitude values belong in them.

The profile carries an internal `LOW` / `MODERATE` / `HIGH` / `CRITICAL` risk assessment independently of tier, with flags for personal data, payments, health/wellness, financial/credit information, minors, authentication, private areas, location, user-generated content, regulated services, analytics/cookies, international audiences, accessibility exposure, and regulated claims. Legal interpretation becomes `REQUIRED INPUT` or a legal-review requirement, never an automated compliance conclusion.

Operational ownership must resolve deployment, domain/DNS, content, integrations, monitoring, maintenance, and ongoing development among client, Mariner Nexus, shared, or external-provider responsibility. It records ownership; it does not assign or price a maintenance package.
