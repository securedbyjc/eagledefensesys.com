
# Eagle Defense Systems (EDS)
## Web Application Hardening Runbook - v1.0

### Scope:
- Platform: Vercel
- Application: www.eagledefensesys.tech
- Code Stack: Next.js, React

---

### Deployment Security Controls

- ✅ Deployment Protection enabled (Vercel Authenticated Builds)
- ✅ PR Approval Process via GitHub Branch Protection
- ✅ CI/CD pipeline limited to authorized personnel

---

### HTTP Security Headers Configured

- Strict-Transport-Security: `max-age=63072000; includeSubDomains; preload`
- X-Content-Type-Options: `nosniff`
- X-Frame-Options: `DENY`
- Referrer-Policy: `strict-origin-when-cross-origin`
- Permissions-Policy: `geolocation=(), camera=(), microphone=()`
- Content-Security-Policy: `default-src 'self'; img-src 'self' data:; script-src 'self'; style-src 'self' 'unsafe-inline'; object-src 'none'`

---

### IAM Controls

- Vercel Admin Accounts: MFA enabled
- GitHub Admin Accounts: MFA enabled
- Google Workspace Admin: MFA enforced

---

### Environment Variable Hardening

- Secret keys encrypted within Vercel Environment Variables
- Service accounts limited to scoped API access

---

### Backup & Recovery

- Codebase backed via GitHub private repo
- Deployment snapshots automatically versioned by Vercel

---

### Audit Status

- Initial security hardening completed: **June 2025**
- Continuous improvement pipeline established for Phase 2.

---
