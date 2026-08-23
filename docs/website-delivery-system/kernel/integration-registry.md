# Integration Registry

Each integration declares ID, category, provider, support level, purpose, environments, owner, secret requirements and handling, data collection/classification, failure behavior, fallback, operational contact, verification, recurring cost, and owner approval.

First-class contracts are Google Workspace, Resend, Stripe, Calendly, generic webhook/HTTP, and Vercel. WDS-02 defines contracts only; it does not implement adapters. Other providers remain project-supported.

Recurring cost requires approved owner authority. Secret-bearing integrations require environment handling. Data collection requires both classification and owner. Fixtures contain no credentials.
