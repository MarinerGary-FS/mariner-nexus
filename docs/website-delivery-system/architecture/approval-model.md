# Approval Model

## Authorities

- **Internal Mariner approval:** strategy, architecture, engineering quality, design integrity, and release recommendation.
- **Client approval:** supplied facts, positioning/content, identity fidelity, scope acceptance, and deliverable acceptance.
- **Owner-Protected approval:** consequential authority retained by the owner.

Owner-Protected actions include Production promotion/rollback policy changes; public client or case-study publication; new recurring, premium, or materially metered cost; sensitive data/integrations; credential creation or rotation; destructive operations; and scope changes that create material maintenance or business obligations.

## Gate record

Every material approval records subject, version/commit or artifact, approver and authority, decision, timestamp, conditions, evidence, and superseded decision. Approval of one phase does not approve later changes or the accumulated release.

## Cost model

- **Required infrastructure:** necessary for the approved service and explicitly budgeted.
- **Justified recurring service:** evidence shows ongoing value; owner approves cost.
- **Optional enhancement:** useful but deferrable pending cost/benefit.
- **Unnecessary subscription:** no demonstrated value; do not enable.

Codex may recommend but must never purchase or enable a new paid, premium, recurring, or materially metered service without explicit Owner-Protected approval.

## Codex autonomy classes

- **A — Autonomous:** reversible implementation and deterministic validation already authorized by the plan.
- **B — Implement Then Review:** scoped expression/refinement where evidence can be produced safely before acceptance.
- **C — Approval Before Implementation:** unresolved strategy, scope, architecture, public claims, sensitive integration, or meaningful experience direction.
- **D — Owner-Protected:** the consequential actions listed above; recommendation and preparation are allowed, execution requires explicit owner authority.

## Failure escalation

On failure, preserve evidence; identify whether it is transient, implementation, architecture, truth, access, cost, or external dependency; retry only bounded transient operations; stop consequential changes; and escalate to the named authority with impact, safe alternatives, and rollback state. Never conceal a failed mandatory gate by narrowing the test after the fact.
