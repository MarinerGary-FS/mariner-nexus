# Bootstrap Contract

## Inputs

Only a Kernel directory that passes JSON Schema and semantic validation: `project.yaml`, Truth, Authorization, Approval, Change, QA, and Integration registers, plus the human-authored project brief.

## Outputs

- `AGENTS.md`: concise project-specific controls;
- `docs/project/`: authority index, normalized brief, register views, Required Input, review protocol, and decision log;
- `docs/strategy/`: approved objectives/audience and proportional discovery obligations;
- `docs/exec-plans/`: one active plan plus future evidence/archive locations;
- `docs/qa/`: project QA, browser/responsive, accessibility, and Content Integrity obligations;
- `docs/operations/`: declared integrations, ownership, environment, launch, and rollback obligations;
- `docs/evidence/`: empty source, approval, and client-input locations;
- `.wds/`: normalized JSON, TypeScript artifact, and bootstrap manifest.

## Refusal conditions

Bootstrap refuses malformed or semantically invalid Kernels, blocking Required Input beyond discovery/strategy/architecture, unsafe Production readiness, missing ownership, unauthorized publication, unapproved recurring cost, and attempts to overwrite modified generated files.

It never advances lifecycle stage. It generates only the current plan; approval must precede the next plan.
