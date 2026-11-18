# Release status — 18 November 2026

The new portfolio is available at https://ysfhawary.dev/ on Cloudflare Pages. See [the deployment record](CLOUDFLARE.md) and [hosted checks](https://github.com/ysfhawarydev/my-portfolio/actions/workflows/hosted-quality.yml).

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
| Production Lighthouse / field Core Web Vitals                 | Lab runs in hosted CI. Field data unavailable.  |

Committed dependencies: Next.js 16.4.6, React 19.3.1, TypeScript 5.9.3, Tailwind 4.3.3, Motion 13.1.1, ESLint 9.39.5, Vitest 5.0.5, Playwright 1.65.0, axe-core 4.14.0. GitHub's official latest-release endpoint verified Next.js 16.4.6. The npm-generated patch lockfile was incorporated and validated with npm ci in GitHub Actions. Local initial checks used the cached 16.4.0 baseline; the authoritative release checks run with 16.4.6 in CI. Local network resolution and browser launch are restricted, so browser QA runs in GitHub's standard hosted runner.

Visual review covered all nine page headers at mobile and desktop sizes, plus full homepage screenshots. The mobile project-grid overflow, project-label contrast, accessible wordmark name and narrow-screen contact wrapping were corrected. All substantive pages are prerendered; the exported HTML passed an internal link/asset existence audit.

## Deployment and migration

- Cloudflare Pages deploys directly from GitHub. The old source remains on `archive/pre-editorial-2026-11-17` at `8c288d1f9763530d214c0eaaf3199fe13e66ae9c`. The old Vercel deployment was retained. The replacement uses Cloudflare Pages because this portfolio advertises freelance services and Vercel Hobby is intended for personal or non-commercial use.
- Both custom hostnames returned valid HTTPS in the browser. The apex serves the new release. Cloudflare's 301 rule redirects www to the apex with path and query intact. The DNS export and post-cutover check confirmed all ten unrelated records kept their target values. No mail records existed in the zone as of cutover.
- The Notes app opens over HTTPS. Its data was still loading during verification, as before the migration.
- Search Console verified the domain via a TXT record. It accepted the sitemap, discovered nine URLs, and showed the home page as indexed. Search ranking and recrawl timing are controlled by Google.

| Platform             | Result                                                                                                                  |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| GitHub profile       | Added and verified the canonical website link.                                                                          |
| LinkedIn             | Contact info already points to the live canonical URL.                                                                  |
| Fiverr               | Seller profile review blocked by a human verification screen.                                                           |
| Hubstaff Talent      | The public freelancer URL returned 404.                                                                                 |
| Resume and old links | Existing original PDF is available on the new site. The main domain is the same, and `/projects` redirects to `/work/`. |

The Cloudflare agent setup remains incomplete. npm could not resolve its package registry, and the global Codex configuration directory was read-only. The website deploys through the authenticated dashboard and GitHub integration.

## Sources

- https://github.com/ysfhawarydev/learning-management-system
- https://github.com/ysfhawarydev/safaga-pulse
- https://github.com/ysfhawarydev/careerbridge-job-portal
- https://github.com/vercel/next.js/releases/tag/v16.4.6
- https://vercel.com/legal/terms
- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
