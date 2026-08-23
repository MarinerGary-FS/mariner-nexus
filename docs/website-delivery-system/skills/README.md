# Kernel-Aware Skill Orchestration

These repository-controlled Skills are owner-approved and installed globally at version `1.0.0`. Their sources remain canonical here; installed copies must not be edited ad hoc. See [installed version](./installed-version.md) and the [adoption procedure](../adoption/README.md).

## Architecture

- **Delivery Orchestrator:** lifecycle, state, truth, Required Input, authorization, approvals, change control, review, evidence obligations, transitions, and stop conditions.
- **Engineering Executor:** approved technical implementation, responsive/accessibility/performance/security behavior, QA execution, declared integrations, deployment preparation, and operational verification.
- **Deterministic helpers:** state detection, compatibility, blocking-input selection, approval/protected-action disposition, change classification, gate derivation, and proportional assignment assembly under `tools/wds/orchestration.mjs`.

Skills route; they do not duplicate Kernel validation, bootstrap generation, or detailed doctrine.

## Canonical routing map

| Rule category | Canonical owner |
| --- | --- |
| Lifecycle | `architecture/delivery-lifecycle.md`, `bootstrap/lifecycle-planning.md` |
| Truth | `kernel/truth-register.md`, normalized Kernel |
| Authorization | `kernel/authorization-register.md`, normalized Kernel |
| Approvals/cost/Production | `kernel/approval-register.md`, `orchestration/authority.md` |
| Change control | `kernel/change-register.md` |
| Risk/amplification | `kernel/risk-profile.md`, `architecture/delivery-tiers.md` |
| QA/browser | `kernel/qa-manifest.md`, project QA manifest |
| Responsive/Content Integrity | `bootstrap/qa-derivation.md`, project Content Integrity scaffold |
| Integrations | `kernel/integration-registry.md`, project registry |
| Deployment/operations | `bootstrap/operations-planning.md`, project launch/rollback plans |
| Client review/evidence | `bootstrap/review-protocol.md`, `orchestration/evidence-policy.md` |

Future focused playbooks should cover discovery, responsive review, Content Integrity execution, release certification, case-study truth, and first-class provider implementation. Create them only when implementation evidence warrants them.
