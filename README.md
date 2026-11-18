# Youssef Elhawary — editorial portfolio

A frontend-only, statically exported Next.js portfolio. Three evidence-backed case studies explain the Student Management System, Safaga GeoAtlas, and CareerBridge.

## Development

Use Node.js 24 and npm. Run `npm ci`, then `npm run dev`. No environment variables, database, API keys, authentication, analytics, or runtime services are required.

After `npm run build`, `npm start` serves the exported files locally for review. This helper is a QA server; production deploys the static `out/` directory.

See [the design system and actual screenshots](docs/DESIGN.md) and [the release checklist](docs/STATUS.md).

## Quality checks

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`
- `npm run format:check`
- Install Chromium with `npx playwright install chromium`, serve `out/` with a static server, then run `TEST_BASE_URL=http://localhost:3000 npm run test:e2e`.

Browser checks cover nine routes at four widths, axe WCAG checks, mobile navigation, missing routes, PDF access, and content with JavaScript disabled. They require a browser-capable environment. Test files are not proof that checks have run; see `docs/STATUS.md`.

## Architecture

`src/content` holds typed, reviewed professional content. App Router pages render as static HTML. Only navigation and a short decorative line animation use client components. Plain CSS design tokens and Tailwind v4 provide the visual foundation. The Motion package is used for one finite animation; CSS handles hover feedback. Reduced-motion preferences disable it. The mobile menu also works as native HTML without JavaScript.

Fonts are self-hosted via next/font/local, with OFL licenses in public/fonts. The Safaga image is a real browser capture; other project visuals are explicitly labeled implementation diagrams. No invented application screenshots or project statistics are used.

Static export avoids a server and makes deployment portable. Image derivatives are prepared locally; there is no runtime image optimizer. Redirects and headers belong to the host. Next.js uses the TypeScript compiler API because CLI subprocess output is unavailable in the build workspace; strict type checking remains enabled.

## Deployment

Build command: `npm run build`. Output directory: `out`. All substantive pages are prerendered. Vercel configuration is included, but the existing account's Hobby plan is a blocker for this commercial-services portfolio. Do not promote or purchase an upgrade without resolving hosting eligibility. A static Cloudflare Pages deployment is an alternative to evaluate with the owner.

The original site is preserved on `archive/pre-editorial-2026-11-17`. Work is on `feat/editorial-portfolio`. Keep main and existing production deployment unchanged until browser QA, performance checks, and hosting eligibility are resolved.

Canonical domain: https://ysfhawary.dev. Preserve all unrelated DNS records, especially notes, email records, and verification TXT records. Root DNS currently routes to Vercel and was verified through the connected project; do not change it from generic instructions.
