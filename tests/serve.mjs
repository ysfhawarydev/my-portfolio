import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { gzipSync } from 'node:zlib';
const root = resolve('out');
const types = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(
      new URL(req.url, 'http://localhost').pathname,
    );
    let path = resolve(root, '.' + pathname);
    if (path !== root && !path.startsWith(root + sep))
      throw new Error('Invalid path');
    if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
    let body = await readFile(path);
    const compress =
      /gzip/.test(req.headers['accept-encoding'] || '') &&
      ['.html', '.js', '.css', '.json', '.txt', '.xml', '.svg'].includes(
        extname(path),
      );
    if (compress) body = gzipSync(body);
    res.writeHead(200, {
      'Content-Type': types[extname(path)] || 'application/octet-stream',
      ...(compress ? { 'Content-Encoding': 'gzip' } : {}),
      Vary: 'Accept-Encoding',
      'Cache-Control': pathname.startsWith('/_next/static/')
        ? 'public, max-age=31536000, immutable'
        : 'public, max-age=0, must-revalidate',
    });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(await readFile(resolve(root, '404.html')));
  }
}).listen(3000, '127.0.0.1', () =>
  console.log('Static QA server: http://127.0.0.1:3000'),
);
