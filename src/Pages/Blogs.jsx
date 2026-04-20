import { useState } from "react";
import BlogsHero from "../Components/Blogs/BlogsHero";
import BlogsGrid from "../Components/Blogs/BlogsGrid";
import BlogsNewsletter from "../Components/Blogs/BlogsNewsletter";
import BlogsCTA from "../Components/Blogs/BlogsCTA";
import { BLOG_FILTERS } from "../Components/Blogs/blogData";

export default function Blogs() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <main className="min-h-screen bg-white">
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
