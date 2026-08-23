# Lifecycle Planning

The bootstrap uses the Kernel lifecycle vocabulary: Intake, Discovery, Strategy, Architecture, Implementation, QA, Review, Release Certification, Production Ready, Launched, and Handoff.

It creates exactly one `docs/exec-plans/active/current-stage.md` containing mission, scope, non-goals, required input, obligations, gates, evidence, and stop condition. Future plans are not forecast automatically.

Required Input is allowed to remain visible during Intake, Discovery, Strategy, and Architecture. It blocks Implementation and later stages because dependent work would otherwise convert unknowns into implementation assumptions. Production Ready, Launched, and Handoff additionally inherit Kernel approval, QA, authorization, and ownership enforcement.

Approval checkpoints scale with tier, risk, integrations, and amplification. The compiler cannot record approval; it states `Human Review Required` until canonical approval exists.
