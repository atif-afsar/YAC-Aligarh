import { Link } from "react-router-dom";
import { BLOG_POSTS } from "./blogData";

export default function BlogsGrid({ activeFilter, onSelectFilter, filters }) {
  const visible =
    activeFilter === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeFilter);

  return (
    <section className="pb-14 md:pb-20 px-6 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => onSelectFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-[#DC3545] text-white shadow"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6 lg:gap-8">
          {visible.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-[#DC3545] font-semibold">
                    {post.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-gray-900 leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
