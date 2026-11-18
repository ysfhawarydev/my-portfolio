# Release status — 18 November 2026

This is a working release candidate, not a completed production launch.

## Implemented

- Nine substantive static routes: home, work, three case studies, about, expertise, contact, resume; plus a custom 404, robots.txt and sitemap.xml.
- Obsidian/ivory editorial system, restrained cyan, Geist Sans, Instrument Serif italic and IBM Plex Mono; responsive layouts and a recurring structural SVG motif.
- Three source-backed case studies: LMS (academic data and permissions), Safaga GeoAtlas (interactive geography) and CareerBridge (job/application workflows). LMS and CareerBridge visuals are labeled diagrams. Safaga uses an actual application screenshot.
- Email, GitHub, LinkedIn and existing resume access. No contact backend, analytics, invented testimonials, fabricated project outcomes or placeholder screenshots.
- Canonicals, unique titles/descriptions, social cards, Person/WebSite/project/breadcrumb structured data, semantic landmarks, keyboard focus and reduced-motion handling.
- Self-hosted fonts with licenses; responsive WebP image derivatives; no runtime data fetching.

## Verified build and browser checks

| Check                                                         | Result                                          |
| ------------------------------------------------------------- | ----------------------------------------------- |
| ESLint                                                        | Pass                                            |
| TypeScript strict check                                       | Pass                                            |
| Vitest                                                        | 5 tests passed                                  |
| Prettier                                                      | Pass                                            |
| Next.js production build                                      | Pass; all routes static                         |
| Playwright / axe in GitHub CI                                 | 36 page/viewport combinations; zero violations  |
| Keyboard, menu, no-JS, contact, PDF, 404, metadata and assets | Pass in CI                                      |
| Mobile Lighthouse                                             | See QUALITY.md for measured runs and conditions |
| Production Lighthouse / field Core Web Vitals                 | Not measured                                    |

Committed dependencies: Next.js 16.4.6, React 19.3.1, TypeScript 5.9.3, Tailwind 4.3.3, Motion 13.1.1, ESLint 9.39.5, Vitest 5.0.5, Playwright 1.65.0, axe-core 4.14.0. GitHub's official latest-release endpoint verified Next.js 16.4.6. The npm-generated patch lockfile was incorporated and validated with npm ci in GitHub Actions. Local initial checks used the cached 16.4.0 baseline; the authoritative release checks run with 16.4.6 in CI. Local network resolution and browser launch are restricted, so browser QA runs in GitHub's standard hosted runner.

Visual review covered all nine page headers at mobile and desktop sizes, plus full homepage screenshots. The mobile project-grid overflow, project-label contrast, accessible wordmark name and narrow-screen contact wrapping were corrected. All substantive pages are prerendered; the exported HTML passed an internal link/asset existence audit.

## Preservation and deployment

Original commit: `8c288d1f9763530d214c0eaaf3199fe13e66ae9c`.

Backup: `archive/pre-editorial-2026-11-17`. Working branch: `feat/editorial-portfolio`. Main and production have not been replaced.

Existing Vercel project: `my-portfolio` (`prj_hXanjx8zaKGVD7AZkoXnjfHwS8Vs`). Existing production deployment: `dpl_AiXw9Nw9jEqr1hHsGFQo9zZqD38s`. The account is Hobby. Vercel's Hobby terms restrict it to personal/non-commercial use. This portfolio advertises freelance services, so launch is held for eligible hosting. No purchase or upgrade authorized. Automatic Git deployments are explicitly disabled in this branch's vercel.json until eligibility is resolved.

Static output can also be hosted on Cloudflare Pages. That provider change requires the owner's decision; no Cloudflare deployment has been created.

The current Cloudflare browser session reaches the sign-in page. Authenticated zone access is still required. The existing production homepage was reopened successfully over HTTPS on 18 November. The Notes HTTPS application shell also loads, but remained at “Loading notes…” during this check; its data/backend functionality was not verified. No DNS or Notes application changes were made.

## Domain observations — no DNS changes

Vercel reports `ysfhawary.dev` verified and not misconfigured. Reported nameservers are `noah.ns.cloudflare.com` and `sasha.ns.cloudflare.com`. Its domain-config response reported A values `216.198.79.1`, `64.29.17.1`, recommended IPv4 `76.76.21.21`, recommended CNAME `cname.vercel-dns.com`, and IP status `required-change`. These observations are not a complete Cloudflare zone export and must not be used as instructions to replace records blindly.

Before migration, export the complete authoritative zone, obtain the exact destination from the selected project's domain configuration, and preserve notes and all other subdomains, MX, SPF, DKIM, DMARC, and verification records. Verify root HTTPS, www-to-root and HTTP-to-HTTPS redirects after the change. No new certificate or redirect verification is claimed.

## Profile migration checklist

| Platform                           | Existing reference / review scope       | Completed action                                 | Verification / blocker                                             |
| ---------------------------------- | --------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------ |
| GitHub repository                  | Old portfolio implementation            | Preserved backup; separate implementation branch | Production main unchanged                                          |
| GitHub profile                     | Website / profile README                | No public bio changes                            | Wait for verified launch; inspect current reference before editing |
| LinkedIn                           | Verified profile URL in contact content | No profile changes                               | Wait for launch and authenticated edit access                      |
| Fiverr                             | Gig/profile portfolio URLs and images   | No changes                                       | Wait for launch and authenticated edit access                      |
| Hubstaff Talent                    | Portfolio reference                     | No changes                                       | Wait for launch and authenticated edit access                      |
| Other developer/freelance accounts | Not yet fully inventoried               | No changes                                       | Account discovery and authentication still required                |
| Resume                             | Existing November 2026 frontend resume  | Linked verified original PDF                     | No invented or rewritten resume; broader general resume optional   |
| Project READMEs                    | Old portfolio routes or URLs            | No changes                                       | Review after launch; preserve project deployment links             |
| Search Console                     | Property and sitemap                    | No changes                                       | No verified authenticated access                                   |

The canonical portfolio URL is unchanged. Update descriptions or removed routes only where necessary; do not replace valid project links.

## Remaining release gates

1. Choose eligible Vercel hosting or authorize Cloudflare Pages, then create and test a preview.
2. Run mobile Lighthouse on the real preview and production; record real scores and conditions. Field INP/LCP/CLS require actual traffic data and cannot be claimed from a build.
3. Authenticate Cloudflare, export the complete zone, and validate contact, assets, external links, resume, redirects, HTTPS and preserved subdomains after launch.
4. Complete authorized profile migration after launch. GitHub's visible profile currently shows no portfolio link; its profile README was not found. Other platform editing access has not been verified.
5. In Search Console, add/verify `ysfhawary.dev` using its supplied DNS TXT if needed, submit `https://ysfhawary.dev/sitemap.xml`, inspect the homepage and each case-study URL, and review indexing reports.

## Sources

- https://github.com/ysfhawarydev/learning-management-system
- https://github.com/ysfhawarydev/safaga-pulse
- https://github.com/ysfhawarydev/careerbridge-job-portal
- https://github.com/vercel/next.js/releases/tag/v16.4.6
- https://vercel.com/docs/plans/hobby
- https://vercel.com/legal/terms
- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
