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
const failures = [];
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
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('response', (response) => {
      if (response.status() >= 400 && response.url().startsWith(base))
        errors.push(`${response.status()} ${response.url()}`);
    });
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
      assert.equal(
        await page.locator('link[rel="canonical"]').getAttribute('href'),
        'https://ysfhawary.dev' + route,
      );
      assert.ok(
        (await page.locator('meta[name="description"]').getAttribute('content'))
          .length > 40,
      );
      await page.screenshot({
        path: `reports/${route.replaceAll('/', '_')}-${width}.png`,
        fullPage: true,
      });
      const overflow = await page.evaluate(() =>
        Array.from(document.querySelectorAll('body *'))
          .filter((el) => {
            const r = el.getBoundingClientRect();
            return r.width > 0 && r.right > innerWidth + 1;
          })
          .map((el) => ({ tag: el.tagName, className: el.className }))
          .slice(0, 10),
      );
      if (
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        )
      )
        failures.push({ width, route, overflow });
      await page.addScriptTag({ content: axe });
      const audit = await page.evaluate(() =>
        window.axe.run(document, {
          runOnly: {
            type: 'tag',
            values: [
              'wcag2a',
              'wcag2aa',
              'wcag21a',
              'wcag21aa',
              'wcag22a',
              'wcag22aa',
            ],
          },
        }),
      );
      if (audit.violations.length)
        failures.push({
          width,
          route,
          violations: audit.violations.map((v) => ({
            id: v.id,
            nodes: v.nodes.map((n) => ({
              target: n.target,
              summary: n.failureSummary,
            })),
          })),
        });
      if (route === '/') {
        await page.screenshot({
          path: `reports/home-${width}.png`,
          fullPage: true,
        });
        if (width < 700) {
          await page.locator('summary').click();
          await page.keyboard.press('Escape');
          assert.equal(
            await page.locator('details').getAttribute('open'),
            null,
          );
          assert.equal(
            await page
              .locator('summary')
              .evaluate((el) => el === document.activeElement),
            true,
          );
          await page.locator('summary').click();
          await page
            .getByRole('navigation', { name: 'Mobile navigation' })
            .getByRole('link', { name: 'Work', exact: false })
            .click();
          await page.waitForURL(/\/work\/?$/);
          assert.ok(await page.getByRole('heading', { level: 1 }).isVisible());
        } else {
          for (const label of ['Work', 'About', 'Expertise', 'Contact']) {
            await page
              .getByRole('navigation', { name: 'Main navigation' })
              .getByRole('link', { name: label, exact: true })
              .click();
            await page.waitForURL(new RegExp(`/${label.toLowerCase()}/?$`));
          }
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
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto(base);
  assert.ok(await page.getByRole('heading', { level: 1 }).isVisible());
  await page.keyboard.press('Tab');
  assert.equal(
    await page.evaluate(() => document.activeElement.textContent.trim()),
    'Skip to content',
  );
  await page.locator('summary').click();
  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'Work', exact: false })
    .click();
  await page.waitForURL(/\/work\/?$/);
  await page.goto(base + '/contact/');
  assert.equal(
    await page.locator('.contact-email').getAttribute('href'),
    'mailto:youssefelhawary012@gmail.com',
  );
  await context.close();
  const animated = await browser.newContext({ reducedMotion: 'no-preference' });
  const animatedPage = await animated.newPage();
  await animatedPage.goto(base);
  await animatedPage.emulateMedia({ reducedMotion: 'reduce' });
  assert.equal(
    await animatedPage
      .locator('.accent-line')
      .evaluate((el) => getComputedStyle(el).transform),
    'none',
  );
  await animated.close();
  const response = await fetch(base + '/does-not-exist/');
  assert.equal(response.status, 404);
  const pdf = await fetch(base + '/resume/youssef-elhawary-resume.pdf');
  assert.equal(pdf.status, 200);
  assert.ok(pdf.headers.get('content-type').includes('pdf'));
  assert.equal(
    Buffer.from(await pdf.arrayBuffer())
      .subarray(0, 5)
      .toString(),
    '%PDF-',
  );
  await writeFile(
    'reports/browser-results.json',
    JSON.stringify(results, null, 2),
  );
  console.log('BROWSER_RESULTS=' + JSON.stringify({ results, failures }));
  assert.deepEqual(failures, [], 'Responsive and accessibility checks');
} finally {
  await browser.close();
}
