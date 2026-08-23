# Truth Model

## Status vocabulary

| Status | Meaning | Public use |
| --- | --- | --- |
| VERIFIED | Supported by reviewed primary evidence | Eligible after content approval |
| CLIENT-PROVIDED | Explicitly supplied/approved by the accountable client | Eligible with attribution context where needed |
| INFERRED | Reasonable interpretation not established as fact | Never present as fact |
| RECOMMENDED | Proposed strategy, action, or future state | Only as recommendation/proposal |
| REQUIRED INPUT | Material fact or approval is missing | Blocks affected claim/deliverable |
| PROHIBITED CLAIM | Disallowed, contradicted, unauthorized, or unsafe | Never publish |

## Claim record

Record claim ID, exact/normalized claim, subject, status, evidence reference, evidence owner, public eligibility, approver, review date, affected routes, and supersession. Content schemas consume claim IDs rather than quietly duplicating assertions.

Authorization and truth are separate: a fact can be verified but not authorized for publication; authorization cannot make an unverified historical claim true. Metrics require a source, definition, period, and approval. Missing evidence becomes **REQUIRED INPUT**, never confident prose.
