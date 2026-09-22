import sharp from "sharp";

const SRC = "C:/Users/fasro/Downloads/WhatsApp Image 2026-07-25 at 2.00.05 PM.jpeg";
const OUT_DIR = "C:/Users/fasro/OneDrive/Escritorio/hunnids pag/public";

const img = sharp(SRC);
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

const rgba = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  const r = data[i * channels];
  const g = data[i * channels + 1];
  const b = data[i * channels + 2];
  const luminance = Math.max(r, g, b);
  // Boost midtones a bit so the wordmark doesn't look washed out once background drops away.
  const alpha = Math.min(255, Math.round(luminance * 1.15));
  rgba[i * 4] = r;
  rgba[i * 4 + 1] = g;
  rgba[i * 4 + 2] = b;
  rgba[i * 4 + 3] = alpha;
}

const transparent = sharp(rgba, { raw: { width, height, channels: 4 } }).png();

// Trim based on alpha channel bounding box, then tight-crop with a little breathing room.
const trimmed = transparent.trim({ threshold: 10 });
const trimmedBuffer = await trimmed.toBuffer();
const meta = await sharp(trimmedBuffer).metadata();
console.log("trimmed transparent logo:", meta.width, meta.height);

await sharp(trimmedBuffer)
  .extend({ top: 16, bottom: 16, left: 16, right: 16, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(`${OUT_DIR}/logo.png`);

console.log("done");
