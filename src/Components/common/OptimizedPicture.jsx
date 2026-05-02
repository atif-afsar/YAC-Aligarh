import { memo } from "react";

/**
 * WebP first with JPG/PNG fallback; same visuals, smaller payloads.
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
  const webp = typeof src === "string" ? src.replace(/\.(jpe?g|png)$/i, ".webp") : src;

  return (
    <picture>
      <source type="image/webp" srcSet={`${webp} 1x`} />
      <img
        src={src}
        alt={alt}
        className={className}
        sizes={sizes}
        loading={loading}
        decoding={decoding}
        width={width}
        height={height}
        style={style}
        {...(fetchPriority ? { fetchPriority } : {})}
      />
    </picture>
  );
}

const OptimizedPicture = memo(OptimizedPictureImpl);
export default OptimizedPicture;
