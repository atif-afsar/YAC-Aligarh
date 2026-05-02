/**
 * Generate compressed WebP next to JPG/PNG sources (preserves originals).
 * Run: node scripts/build-web-images.mjs
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = path.join(import.meta.dirname, "..");
const DIRS = [
  path.join(ROOT, "public/grid"),
  path.join(ROOT, "public/blogs"),
  path.join(ROOT, "public/courses"),
  path.join(ROOT, "src/assets"),
];

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;
  const out = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  try {
    await sharp(filePath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(out);
    console.log("webp", path.relative(ROOT, out));
  } catch (e) {
    console.warn("skip", filePath, e.message);
  }
}

async function walk(dir) {
  if (!fs.existsSync(dir)) return;
  const names = fs.readdirSync(dir);
  for (const n of names) {
    const p = path.join(dir, n);
    const st = fs.statSync(p);
    if (st.isDirectory()) await walk(p);
    else await convertFile(p);
  }
}

await Promise.all(DIRS.map((d) => walk(d)));
console.log("done");
