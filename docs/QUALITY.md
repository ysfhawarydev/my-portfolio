# Quality report — 18 November 2026

Tested implementation commit: `de0e17a23a546fb0a2226d8ed258c14343d1dbff`.

[Successful GitHub Actions run](https://github.com/ysfhawarydev/my-portfolio/actions/runs/44286327415). Raw machine-readable summaries: [quality-results.json](quality-results.json). Full screenshots and Lighthouse JSON are attached to the workflow run (7-day artifact retention).

## Build and behavior

- npm ci, ESLint, production build, strict TypeScript, five Vitest tests and Prettier all passed with Next.js 16.4.6.
- 36 route/viewport combinations passed: nine pages at 360, 390, 768 and 1440 pixels.
- Zero axe-core violations for WCAG 2 A/AA, 2.1 A/AA and 2.2 A/AA in that matrix.
- No page errors, console errors or failing same-origin asset responses during tested navigation.
- Desktop/mobile navigation, Escape and focus return, keyboard skip link, no-JavaScript mobile navigation, reduced-motion preference changes, contact destination, PDF signature and 404 status passed.
- Canonical URLs and meta descriptions were checked on every substantive route.
- Actual screenshots were visually reviewed across all page headers and full homepage layouts. Automated axe checks do not replace a complete manual assistive-technology audit.

## Mobile lab performance

Lighthouse 13.6.0, Headless Chrome 157, GitHub Ubuntu runner, localhost static export. The QA server used gzip and immutable cache headers for hashed assets. Simulated mobile throttling: 4× CPU slowdown, 150 ms RTT, 1638.4 Kbps throughput; 412×823 viewport at device scale 1.75.

| Run | Performance | Accessibility | Best practices | SEO | LCP     | TBT     | CLS    |
| --- | ----------- | ------------- | -------------- | --- | ------- | ------- | ------ |
| 1   | 100         | 100           | 100            | 100 | 0.753 s | 68 ms   | 0.0050 |
| 2   | 100         | 100           | 100            | 100 | 0.754 s | 28.5 ms | 0.0050 |
| 3   | 100         | 100           | 100            | 100 | 0.760 s | 23.5 ms | 0.0050 |

These are three consecutive measurements of the same release build, not production scores or field Core Web Vitals. Earlier development runs ranged from 76 to 99 performance on different hosted runners, with material CPU variability. The initial uncompressed, larger-animation build measured 82. Current results meet the lab target; production must still be measured after hosting is selected. INP is not measured here, and TBT is not a substitute for field INP.

Non-blocking Lighthouse opportunities remain around framework JavaScript, legacy compatibility code, dependency chains and below-the-fold image sizing. No perfect field-performance guarantee is made.

## Hosted checks

The deployed preview passed Playwright and axe across all 36 route and viewport combinations. The first hosted mobile Lighthouse run scored 99 performance, 100 accessibility, 100 best practices, and 100 SEO. LCP was 0.933 s, TBT was 118 ms, and CLS was 0.005. See [the initial Pages verification](https://github.com/ysfhawarydev/my-portfolio/actions/runs/44390728488).

For production and subsequent preview measurements, see [the hosted quality workflow](https://github.com/ysfhawarydev/my-portfolio/actions/workflows/hosted-quality.yml). Scores vary between GitHub-hosted runners, mainly in JavaScript blocking time. Production results are lab measurements. Field LCP, INP and CLS require real-user traffic data.
