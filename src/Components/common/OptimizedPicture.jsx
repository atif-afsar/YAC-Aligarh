import { memo } from "react";

/**
 * WebP-first with JPG/PNG fallback. Same visuals, smaller payloads.
 *
 * Intrinsic `width` / `height` are surfaced so the browser can reserve box
 * size before the image decodes — that's the main lever against Cumulative
 * Layout Shift on lazy-loaded grids.
 */
function OptimizedPictureImpl({
  src,
  sizes,
  alt,
  className,
  loading = "lazy",
  fetchPriority,
  decoding = "async",
  width,
  height,
  style,
}) {
  const webp =
    typeof src === "string" ? src.replace(/\.(jpe?g|png)$/i, ".webp") : src;

  // Sensible default aspect placeholder when caller didn't pass dims, so we
  // still avoid CLS even on legacy call sites.
  const w = width ?? 1200;
  const h = height ?? 800;

  return (
    <picture>
      <source type="image/webp" srcSet={webp} />
      <img
        src={src}
        alt={alt}
        className={className}
        sizes={sizes}
        loading={loading}
        decoding={decoding}
        width={w}
        height={h}
        style={style}
        {...(fetchPriority ? { fetchPriority } : {})}
      />
    </picture>
  );
}

const OptimizedPicture = memo(OptimizedPictureImpl);
export default OptimizedPicture;
