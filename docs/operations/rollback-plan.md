# Mariner Nexus Rollback Plan

## Known stable state

- Stable Production before Phase 08: deployment `dpl_3f14kF1yWzYcM79LrLrFmQJt8tFq`, commit `eef8aa6573884ff511a37ba7de8bf2fb3c76fbf8`.
- Phase 08 release candidate: record its deployment ID and commit in the completion report before launch approval.

## Vercel rollback

1. In Vercel Deployments, identify the approved previous stable Production deployment by ID and commit.
2. Use Vercel Rollback to repoint Production to that deployment. Do not rebuild it.
3. Confirm `www.marinernexus.com` and the apex redirect serve the stable deployment.
4. Smoke-test `/`, `/work/undugu`, `/start`, one legacy redirect, and an unauthorized Work slug.

## Git rollback

1. Preserve history; do not reset the shared branch.
2. Create a normal revert commit for the release commit(s), review the diff, run the standard validation suite, and push.
3. Allow the new Preview to build and verify it before any later Production promotion.

## Inquiry protection

Rollback never recreates, rotates, deletes, or replaces Google Sheets, the Google service account, Resend, or Vercel secrets. Confirm the selected deployment uses the intended Production environment and retains persistence-before-notification behavior. If the incident affects inquiry persistence, classify launch as NO-GO and restore the last known working deployment immediately.
