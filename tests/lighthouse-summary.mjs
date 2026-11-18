import { readFileSync } from 'node:fs';
const report = JSON.parse(
  readFileSync(process.argv[2] || 'reports/lighthouse-mobile.json', 'utf8'),
);
console.log(
  'LIGHTHOUSE=' +
    JSON.stringify({
      version: report.lighthouseVersion,
      time: report.fetchTime,
      environment: report.environment,
      settings: report.configSettings,
      scores: Object.fromEntries(
        Object.entries(report.categories).map(([key, value]) => [
          key,
          value.score * 100,
        ]),
      ),
      metrics: Object.fromEntries(
        [
          'first-contentful-paint',
          'largest-contentful-paint',
          'total-blocking-time',
          'cumulative-layout-shift',
          'speed-index',
        ].map((key) => [key, report.audits[key].numericValue]),
      ),
      findings: Object.values(report.audits)
        .filter((a) => a.score !== null && a.score < 1)
        .map((a) => ({
          id: a.id,
          title: a.title,
          score: a.score,
          displayValue: a.displayValue,
          ...(a.id === 'label-content-name-mismatch'
            ? { details: a.details }
            : {}),
        })),
    }),
);
