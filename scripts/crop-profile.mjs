// One-off: crop cristian.png to a square framed on the face.
// Current CSS hack: object-position: center 84% + transform: scale(2.5)
// → visible area is ~40% of the image width, centered x, centered around y=84%.
// We reproduce that crop at the source so the PNG itself only contains the framed area.

import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { statSync, copyFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const dst = join(publicDir, "cristian.png");
const backup = join(publicDir, "cristian-original.png");

// Always read from the backup (source of truth); write to dst.
try {
  statSync(backup);
} catch {
  console.error("Missing public/cristian-original.png — cannot recrop.");
  process.exit(1);
}

const meta = await sharp(backup).metadata();
console.log(`Source: ${meta.width}×${meta.height}`);

// Reproduces the old CSS framing: object-position: center 84% + transform: scale(2.5).
// Maths: scale(2.5) showed 1/2.5 = 40% of the rendered 168×224 (object-cover for a 2316×3088 source).
// That window in source coords = 926×926 centered at (50%, ~46%) of the source height.
const sideRaw = 926;
const OUT = 600;

const cx = Math.floor(meta.width / 2);
const FACE_Y = 0.58;
const cy = Math.floor(meta.height * FACE_Y);

let left = cx - Math.floor(sideRaw / 2);
let top = cy - Math.floor(sideRaw / 2);
// Clamp to image bounds.
left = Math.max(0, Math.min(left, meta.width - sideRaw));
top = Math.max(0, Math.min(top, meta.height - sideRaw));

console.log(`Cropping ${sideRaw}×${sideRaw} at (${left}, ${top}) → resizing to ${OUT}×${OUT}`);

await sharp(backup)
  .extract({ left, top, width: sideRaw, height: sideRaw })
  .resize(OUT, OUT)
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(dst + ".tmp");

// Atomic swap
await import("fs").then((fs) => fs.renameSync(dst + ".tmp", dst));

const after = statSync(dst);
console.log(`✓ Wrote ${dst} (${(after.size / 1024).toFixed(1)} KB)`);
