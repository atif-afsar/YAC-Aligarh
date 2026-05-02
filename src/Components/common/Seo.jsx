import { useEffect } from "react";
import { SITE } from "../../seo/seoConfig";

/**
 * Lightweight SEO head manager (no react-helmet dependency).
 * - Sets document.title
 * - Upserts meta description / keywords / robots
 * - Sets canonical link
 * - Sets Open Graph + Twitter cards
 * - Injects optional JSON-LD structured data scoped to this route
 *
 * Usage:
 *   <Seo
 *     title="..."
 *     description="..."
 *     path="/courses"
 *     image="/images/Logo.png"
 *     type="website"
 *     jsonLd={[ ...arrayOfSchemaObjects ]}
 *   />
 */
function upsertMeta(name, content, type = "name") {
  if (!content) return;
  const selector =
    type === "property" ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(type, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  if (!href) return;
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function injectJsonLd(id, data) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  if (!data) return null;
  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
  return script;
}

export default function Seo({
  title,
  description,
  keywords,
  path = "/",
  image,
  type = "website",
  noindex = false,
  jsonLd = null,
}) {
  useEffect(() => {
    const fullUrl = `${SITE.url}${path === "/" ? "" : path}`;
    const ogImage = image
      ? image.startsWith("http")
        ? image
        : `${SITE.url}${image.startsWith("/") ? "" : "/"}${image}`
      : SITE.defaultImage;

    if (title) document.title = title;

    upsertMeta("description", description);
    upsertMeta("keywords", keywords);
    upsertMeta(
      "robots",
      noindex
        ? "noindex,nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    );

    upsertCanonical(fullUrl);

    upsertMeta("og:type", type, "property");
    upsertMeta("og:site_name", SITE.name, "property");
    upsertMeta("og:locale", SITE.locale, "property");
    upsertMeta("og:url", fullUrl, "property");
    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:image", ogImage, "property");
    upsertMeta("og:image:alt", title, "property");

    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:site", SITE.twitter);
    upsertMeta("twitter:url", fullUrl);
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", ogImage);

    const scripts = [];
    if (jsonLd) {
      const list = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      list.forEach((data, idx) => {
        const node = injectJsonLd(`seo-jsonld-${idx}`, data);
        if (node) scripts.push(node);
      });
    }

    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, keywords, path, image, type, noindex, jsonLd]);

  return null;
}
