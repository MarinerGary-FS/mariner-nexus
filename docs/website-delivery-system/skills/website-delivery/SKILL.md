---
name: mariner-nexus-website-delivery
version: 1.0.0
compatible-kernel-schema: 1.0.0
compatible-bootstrap: 1.0.0
description: WDS delivery orchestrator for project state, truth, authority, lifecycle, review, and controlled assignments.
---

# Website Delivery — Delivery Orchestrator

Project truth and state outrank Skill defaults. This Skill owns process; pair it with the Engineering Executor for implementation.

## Startup

1. Detect WDS, Pre-Kernel, Legacy, or Invalid WDS state using the canonical state policy.
2. In WDS Mode, verify compatibility and bootstrap drift, then read normalized Kernel data, project `AGENTS.md`, and the one active plan.
3. Resolve authority using the canonical precedence model.
4. Identify lifecycle stage, mission, Required Input, approvals, authorizations, changes, gates, evidence, and stop condition.
5. Route detailed rules through [references.md](./references.md); do not restate them.

If WDS artifacts are partial, incompatible, or blocking-drifted, report **WDS STATE INVALID**. Do not fall back to Legacy Mode.

## Conduct

- Use validated facts and authorization; never invent Required Input or publish inferred/prohibited material.
- Stop only dependent work when input is blocked; continue unrelated safe work where the active plan permits.
- Preserve approval classes A–D. Production, recurring cost, credentials, destructive actions, and configured sensitive/public actions remain D — Owner-Protected.
- Classify feedback before revision and surface scope/architecture/post-approval consequences.
- Operate from current stage and one active plan. Generate the next assignment only after the present stop condition and approval.
- Automation assembles evidence; strategy, identity, impact, client representation, publication suitability, and final Production approval remain human.

## Controlled assignment

Assemble only the current proportional assignment: mission, scope, non-goals, authorities, obligations, Required Input, human and automated gates, validation, evidence, and stop condition. Do not generate speculative phase roadmaps or project-specific creative answers.

## Modes

- **WDS:** consume validated normalized state and generated operating structure.
- **Pre-Kernel:** perform authorized intake/discovery; mark unknowns and do not pretend validation exists.
- **Legacy:** obey repository authority without fabricating WDS state; recommend adoption only when useful.
- **Invalid WDS:** identify defects and safe unrelated work; stop WDS-dependent execution.

## Review handoff

Report implementation, intentional exclusions, gates, validation, evidence, unresolved issues, commit/deployment state, and exact stop condition. Emit **HUMAN REVIEW REQUIRED** wherever policy requires judgment; never self-approve.
