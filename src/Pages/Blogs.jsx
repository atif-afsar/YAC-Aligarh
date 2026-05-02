import { useMemo, useState } from "react";
import BlogsHero from "../Components/Blogs/BlogsHero";
import BlogsGrid from "../Components/Blogs/BlogsGrid";
import BlogsNewsletter from "../Components/Blogs/BlogsNewsletter";
import BlogsCTA from "../Components/Blogs/BlogsCTA";
import Seo from "../Components/common/Seo";
import { seoConfig, buildBreadcrumbJsonLd } from "../seo/seoConfig";
import { BLOG_FILTERS } from "../Components/Blogs/blogData";

export default function Blogs() {
  const [activeFilter, setActiveFilter] = useState("All");

  const jsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    []
  );

  return (
    <main className="min-h-screen bg-white">
      <Seo
        title={seoConfig.blog.title}
        description={seoConfig.blog.description}
        keywords={seoConfig.blog.keywords}
        path={seoConfig.blog.path}
        jsonLd={jsonLd}
      />
      <BlogsHero />
      <BlogsGrid
        filters={BLOG_FILTERS}
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
      />
      <BlogsNewsletter />
      <BlogsCTA />
    </main>
  );
}
