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
