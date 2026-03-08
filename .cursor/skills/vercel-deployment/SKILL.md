---
name: vercel-deployment
description: Prepares and validates production deployment for Next.js projects on Vercel with CI quality gates, environment variable hygiene, and release readiness checks. Use when shipping features to production.
---

# Vercel Deployment

## Instructions

1. Ensure CI passes: lint, typecheck, tests, build.
2. Validate environment variables for preview and production.
3. Confirm metadata/SEO/performance checks for key routes.
4. Use preview deploys for QA before production promotion.
5. Document release notes and rollback path.

## Release Checklist

- [ ] `npm run ci` green
- [ ] Preview URL approved
- [ ] Required env vars configured
- [ ] Critical pages validated on mobile/desktop
- [ ] Production deploy confirmed
