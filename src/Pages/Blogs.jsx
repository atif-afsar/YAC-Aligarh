import { useState } from "react";
import { useEffect } from "react";
import BlogsHero from "../Components/Blogs/BlogsHero";
import BlogsGrid from "../Components/Blogs/BlogsGrid";
import BlogsNewsletter from "../Components/Blogs/BlogsNewsletter";
import BlogsCTA from "../Components/Blogs/BlogsCTA";
import { BLOG_FILTERS } from "../Components/Blogs/blogData";

export default function Blogs() {
  const [activeFilter, setActiveFilter] = useState("All");
  useEffect(() => {
    document.title = "YAC Blog - Study Tips, Exam Updates & Career Advice";
    let desc = document.head.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute(
      "content",
      "Read latest study tips, CA/CS updates, student guidance and career advice from Yasir Ali Classes."
    );
  }, []);

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
