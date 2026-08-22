# V1 Inquiry Operations

## Authority and ordering

`/start` → client UX → `POST /api/inquiries` → server validation/abuse controls → Google Sheet append → notification attempt → response.

Google Sheets is the source of truth. Email is notification only. Client success is returned only after the row append succeeds. If notification fails after persistence, the row remains valid and the client receives success; the server logs only the inquiry ID, environment, outcome, and failure category.

## Google Workspace setup

Create separate Preview and Production spreadsheets. In each, create an `Inquiries` tab and place these headers in row 1, in order:

1. Inquiry ID
2. Submitted At
3. Status
4. Name
5. Organization
6. Email
7. Phone
8. Situation
9. Objective
10. Success Definition
11. Current Website
12. References
13. Timeline
14. Additional Context
15. Last Contacted
16. Internal Notes
17. Environment / Source

Share each spreadsheet with the configured service-account email as Editor. Configure Status data validation with: `NEW`, `REVIEWING`, `CONTACTED`, `DISCOVERY`, `PROPOSAL`, `WON`, `LOST`, `ARCHIVED`. New rows initialize to `NEW`; Last Contacted and Internal Notes initialize blank. No formula is required for record integrity.

## Vercel configuration

Use the names and safe placeholders in `.env.example`. Scope `GOOGLE_SHEETS_ID_PREVIEW`, `GOOGLE_SHEETS_RANGE_PREVIEW`, `INQUIRY_NOTIFY_TO_PREVIEW`, and `INQUIRY_NOTIFICATIONS_PREVIEW` to Preview. Scope their `*_PRODUCTION` equivalents to Production. Do not reuse the Production Sheet ID in Preview.

The service-account email/private key and Resend API key are server secrets. Never prefix them `NEXT_PUBLIC_`, commit real values, or paste them into review evidence. The private key may use escaped `\\n`; the adapter normalizes it server-side.

Preview notifications are off unless `INQUIRY_NOTIFICATIONS_PREVIEW=true`. This prevents QA email from reaching the production inbox. Development has environment label `development` and resolves only the Preview target when explicitly configured.

## Failure behavior

- Missing/invalid Google configuration or a Sheets failure returns `503`; the browser retains every response and offers retry/email fallback.
- Resend failure after a successful Sheet append is logged by inquiry ID and does not turn success into failure.
- Optional URLs are stored as strings only. The server never visits, previews, or scrapes them.
- The lightweight rate/duplicate maps are per server instance. This is a deliberate V1 baseline, not a claim of distributed protection. Escalate to a bounded shared limiter or Turnstile only when observed abuse warrants it.

## Operational verification

Before production activation, submit one non-personal test record to Preview, verify its 17 cells/status/environment, test Preview notification behavior, then repeat with an authorized test in Production. Remove or archive test rows according to operational preference. Never use a real prospect for configuration testing.
