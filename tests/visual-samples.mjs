import sharp from 'sharp';
import { existsSync } from 'node:fs';
for (const width of [360, 1440]) {
  const path = `reports/_-${width}.png`;
  if (!existsSync(path)) continue;
  const output = await sharp(path)
    .resize({ width: width === 360 ? 360 : 960 })
    .webp({ quality: 65 })
    .toBuffer();
  console.log(`VISUAL_${width}=${output.toString('base64')}`);
}
const routes = [
  '_',
  '_work_',
  '_about_',
  '_expertise_',
  '_contact_',
  '_resume_',
  '_work_student-management-system_',
  '_work_safaga-geoatlas_',
  '_work_careerbridge_',
];
for (const width of [360, 1440]) {
  const tileWidth = width === 360 ? 360 : 720;
  const tileHeight = width === 360 ? 900 : 600;
  const tiles = [];
  for (const [index, route] of routes.entries()) {
    const path = `reports/${route}-${width}.png`;
    if (!existsSync(path)) continue;
    const metadata = await sharp(path).metadata();
    const input = await sharp(path)
      .extract({
        left: 0,
        top: 0,
        width: metadata.width,
        height: Math.min(metadata.height, width === 360 ? 900 : 1200),
      })
      .resize(tileWidth, tileHeight, {
        fit: 'contain',
        position: 'top',
        background: '#090a0b',
      })
      .toBuffer();
    tiles.push({
      input,
      left: (index % 3) * tileWidth,
      top: Math.floor(index / 3) * tileHeight,
    });
  }
  if (!tiles.length) continue;
  const output = await sharp({
    create: {
      width: tileWidth * 3,
      height: tileHeight * 3,
      channels: 3,
      background: '#090a0b',
    },
  })
    .composite(tiles)
    .webp({ quality: 70 })
    .toBuffer();
  console.log(`REVIEW_GRID_${width}=${output.toString('base64')}`);
}
