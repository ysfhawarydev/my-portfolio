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

Production runs on Cloudflare Pages. The Git-connected build uses Node.js 24, `npm run build`, and the `out` directory. See [Cloudflare release instructions](docs/CLOUDFLARE.md) for the domain setup, rollout and rollback checks.

The original site is preserved on `archive/pre-editorial-2026-11-17`. Hosted browser and mobile Lighthouse checks run in GitHub Actions against the Pages preview and the canonical domain.

Canonical domain: https://ysfhawary.dev. Preserve unrelated DNS records, including Notes and verification records.
