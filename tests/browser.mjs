import { chromium } from 'playwright';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const base = process.env.TEST_BASE_URL;
if (!base)
  throw new Error('Set TEST_BASE_URL to a running preview or production URL.');
const browser = await chromium.launch();
const axe = await readFile(
  new URL('../node_modules/axe-core/axe.min.js', import.meta.url),
  'utf8',
);
const results = [];
await mkdir('reports', { recursive: true });
try {
  for (const width of [360, 390, 768, 1440]) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      reducedMotion: 'reduce',
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    for (const route of [
      '/',
      '/work/',
      '/about/',
      '/expertise/',
      '/contact/',
      '/resume/',
      '/work/student-management-system/',
      '/work/safaga-geoatlas/',
      '/work/careerbridge/',
    ]) {
      const response = await page.goto(base + route);
      assert.equal(response.status(), 200);
      assert.equal(await page.locator('h1').count(), 1);
      await page.screenshot({
        path: `reports/${route.replaceAll('/', '_')}-${width}.png`,
        fullPage: true,
      });
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        true,
        `${width} ${route} overflow`,
      );
      await page.addScriptTag({ content: axe });
      const audit = await page.evaluate(() =>
        window.axe.run(document, {
          runOnly: {
            type: 'tag',
            values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'],
          },
        }),
      );
      assert.deepEqual(audit.violations, [], `${width} ${route} accessibility`);
      if (route === '/') {
        await page.screenshot({
          path: `reports/home-${width}.png`,
          fullPage: true,
        });
        if (width < 700) {
          await page.locator('summary').click();
          await page
            .getByRole('navigation', { name: 'Mobile navigation' })
            .getByRole('link', { name: 'Work', exact: false })
            .click();
          assert.ok(page.url().includes('/work/'));
        }
      }
      results.push({
        width,
        route,
        status: response.status(),
        violations: audit.violations.length,
      });
    }
    assert.deepEqual(errors, []);
    await context.close();
  }
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(base);
  assert.ok(await page.getByRole('heading', { level: 1 }).isVisible());
  await context.close();
  const response = await fetch(base + '/does-not-exist/');
  assert.equal(response.status, 404);
  const pdf = await fetch(base + '/resume/youssef-elhawary-resume.pdf');
  assert.equal(pdf.status, 200);
  assert.ok(pdf.headers.get('content-type').includes('pdf'));
  await writeFile(
    'reports/browser-results.json',
    JSON.stringify(results, null, 2),
  );
} finally {
  await browser.close();
}
