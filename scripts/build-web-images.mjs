/**
 * Generate compressed WebP next to JPG/PNG sources (preserves originals).
 * Run: node scripts/build-web-images.mjs
 *
 * Per-folder presets keep file sizes appropriate for how the asset is used:
 *  - /hero, /grid, /courses → small "card" sized output (max 1024w, q72)
 *  - /faculty, /faculty-posters → medium output (max 1280w, q74)
 *  - /results, /batch, /blogs → max 1280w, q72
 *  - everything else falls back to 1600w, q78
 *
 * If the resulting WebP is *larger* than the source it gets discarded so we
 * never serve a "compressed" file that's actually heavier than the original.
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = path.join(import.meta.dirname, "..");

const PRESETS = [
  { match: /[\\/]public[\\/]hero[\\/]/i,             width: 1024, quality: 72 },
  { match: /[\\/]public[\\/]courses[\\/]/i,          width: 1024, quality: 72 },
  { match: /[\\/]public[\\/]grid[\\/]/i,             width: 1280, quality: 72 },
  { match: /[\\/]public[\\/]faculty-posters[\\/]/i,  width: 1280, quality: 74 },
  { match: /[\\/]public[\\/]faculty[\\/]/i,          width: 1024, quality: 72 },
  { match: /[\\/]public[\\/]results[\\/]/i,          width: 1024, quality: 72 },
  { match: /[\\/]public[\\/]batch[\\/]/i,            width: 1280, quality: 72 },
  { match: /[\\/]public[\\/]blogs[\\/]/i,            width: 1280, quality: 72 },
  { match: /[\\/]public[\\/]images[\\/]/i,           width: 1024, quality: 80 },
];

const FALLBACK = { width: 1600, quality: 78 };

const DIRS = [
  path.join(ROOT, "public/hero"),
  path.join(ROOT, "public/grid"),
  path.join(ROOT, "public/courses"),
  path.join(ROOT, "public/blogs"),
  path.join(ROOT, "public/faculty"),
  path.join(ROOT, "public/faculty-posters"),
  path.join(ROOT, "public/results"),
  path.join(ROOT, "public/batch"),
  path.join(ROOT, "public/images"),
  path.join(ROOT, "src/assets"),
];

function presetFor(filePath) {
  for (const p of PRESETS) {
    if (p.match.test(filePath)) return p;
  }
  return FALLBACK;
}

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;
  const out = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const { width, quality } = presetFor(filePath);
  try {
    const buf = await sharp(filePath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 5 })
      .toBuffer();

    const sourceBytes = fs.statSync(filePath).size;
    if (buf.byteLength >= sourceBytes) {
      // Compressed copy is bigger than the source — skip it so we never ship
      // a "webp" that costs more bandwidth than the original.
      console.log(
        "skip (webp >= source)",
        path.relative(ROOT, filePath),
        `${Math.round(buf.byteLength / 1024)}KB vs ${Math.round(
          sourceBytes / 1024
        )}KB`
      );
      // Remove any stale, oversized webp left behind from a previous run.
      if (fs.existsSync(out)) {
        try { fs.unlinkSync(out); } catch { /* noop */ }
      }
      return;
    }

    fs.writeFileSync(out, buf);
    console.log(
      "webp",
      path.relative(ROOT, out),
      `${Math.round(buf.byteLength / 1024)}KB`
    );
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
