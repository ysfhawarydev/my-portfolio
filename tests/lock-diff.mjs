import { readFileSync } from 'node:fs';
const before = JSON.parse(
  readFileSync('/tmp/portfolio-lock-before.json', 'utf8'),
);
const after = JSON.parse(readFileSync('package-lock.json', 'utf8'));
const changed = Object.fromEntries(
  Object.entries(after.packages).filter(
    ([key, value]) =>
      JSON.stringify(before.packages[key]) !== JSON.stringify(value),
  ),
);
const removed = Object.keys(before.packages).filter(
  (key) => !(key in after.packages),
);
console.log(
  'LOCK_PATCH=' +
    JSON.stringify({
      changed,
      removed,
      manifest: JSON.parse(readFileSync('package.json', 'utf8')),
    }),
);
