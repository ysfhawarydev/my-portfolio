# Cloudflare Pages release

The owner authorized Cloudflare Pages free-tier hosting on 18 November 2026. No paid plan or add-on is authorized. Cloudflare sign-in is still required; no deployment or DNS migration has occurred.

## Build configuration

- Repository: `ysfhawarydev/my-portfolio`
- Release candidate branch: `feat/editorial-portfolio`
- Root directory: repository root
- Build command: `npm run build`
- Output directory: `out`
- Build environment: `NODE_VERSION=24`
- Runtime environment variables: none
- Functions, Workers, databases and analytics: none

Create and verify a Pages deployment before attaching the custom domain. The branch can serve as the initial Pages production branch while the old source remains preserved on main. After successful launch, merge the reviewed PR and change the Pages production branch to main. Vercel Git deployment remains disabled in the replacement configuration.

`public/_headers` supplies security headers and immutable caching for hashed Next.js assets. `public/_redirects` preserves the old `/projects` route and redirects www to the canonical apex. Both hostnames must be attached and have valid certificates before the www redirect can work. Cloudflare applies these host configuration files; the local QA server does not emulate them.

## Migration and verification

1. Sign in to Cloudflare and review existing Pages projects before creating one. Use the existing GitHub connection if available. If a new repository authorization is required, restrict it to this portfolio repository.
2. Deploy the release branch to its assigned Pages URL. Record the actual project name and URL; do not invent a DNS target.
3. Test all nine routes, the custom 404, PDF, navigation, assets, headers and redirects against that deployment. Run mobile Lighthouse against the public preview.
4. Export the complete authoritative Cloudflare zone before changing DNS. Preserve all non-portfolio records, including notes, MX, SPF, DKIM, DMARC and verification TXT records. Keep the zone backup private.
5. Add `ysfhawary.dev` and `www.ysfhawary.dev` through the Pages custom-domain flow, using the exact targets it supplies. Replace only conflicting portfolio records after reviewing their existing values.
6. Verify root HTTPS, www-to-root and HTTP-to-HTTPS redirects, canonical tags, sitemap, robots and production Lighthouse. Check unrelated subdomains against their pre-migration behavior; the existing Notes data-loading issue is not proof of a DNS failure.
7. Complete profile-reference updates and Search Console submission only after production is verified.

## Sources

- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- https://developers.cloudflare.com/pages/configuration/headers/
- https://developers.cloudflare.com/pages/configuration/redirects/

No preview URL, domain migration, production performance or successful HTTPS verification is claimed until those steps are completed.
