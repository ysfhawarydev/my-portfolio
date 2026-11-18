# Cloudflare Pages deployment

The portfolio launched on Cloudflare Pages on 18 November 2026. The free Pages project is `youssef-elhawary`. [Production](https://ysfhawary.dev/) · [Pages preview](https://youssef-elhawary.pages.dev/)

## Build configuration

- Repository: `ysfhawarydev/my-portfolio`
- Release branch at cutover: `feat/editorial-portfolio`
- Root directory: repository root
- Build command: `npm run build`
- Output directory: `out`
- Build environment: `NODE_VERSION=24`
- Runtime environment variables: none
- Vercel Git deployment: disabled in `vercel.json`

`public/_headers` sets security headers and immutable caching for hashed Next.js assets. `public/_redirects` preserves the old `/projects` route.

## Domain configuration

- The Pages custom domains are `ysfhawary.dev` and `www.ysfhawary.dev`. Both use proxied CNAME records to the Pages project.
- The **Portfolio www to canonical domain** Single Redirect matches the exact www hostname, returns 301, and preserves the path and query. It excludes the ACME challenge path.
- The **Portfolio static HTML settings** configuration rule applies to the apex. It disables injected analytics and email obfuscation so readers can use the contact link with JavaScript disabled.
- Search Console owns a dedicated DNS verification TXT. The sitemap was accepted and Google discovered nine pages.
- The original DNS zone export was downloaded before the migration. The original source remains on `archive/pre-editorial-2026-11-17`. The existing Vercel deployment can still serve as a recovery option while retained.

## Verification

The hosted GitHub Actions workflow checks both hosts for all nine routes, the custom 404, the resume PDF, navigation, assets and accessibility. The production job also checks HTTP and www redirects and path preservation. Mobile Lighthouse reports are attached to each run.

To roll back a release, select the prior successful deployment in Pages. To revert hosting, use the DNS export to restore only the previous portfolio records and review any portfolio-specific redirects. Keep unrelated subdomains and verification records intact.

[Cloudflare Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/) · [Cloudflare Pages redirects](https://developers.cloudflare.com/pages/configuration/redirects/)
