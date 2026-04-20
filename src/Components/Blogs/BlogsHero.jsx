import { motion as Motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FEATURED_POST } from "./blogData";

export default function BlogsHero() {
  return (
    <section className="pt-28 pb-10 px-6 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Insights & <span className="text-[#DC3545]">Excellence</span>
          </h1>
          <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed">
            The latest updates, study tips, and academic strategies from our
            experts, designed for the modern architect of their own future.
          </p>
        </Motion.div>

        <article className="mt-10 rounded-2xl border border-gray-100 overflow-hidden shadow-sm bg-white grid lg:grid-cols-[1.35fr_1fr]">
          <img
            src={FEATURED_POST.image}
            alt={FEATURED_POST.title}
            className="w-full h-72 sm:h-96 lg:h-full object-cover"
          />
          <div className="p-7 sm:p-9 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wide">
              <span className="px-2.5 py-1 rounded-full bg-rose-50 text-[#DC3545] font-semibold">
                {FEATURED_POST.tag}
              </span>
              <span className="text-gray-500">{FEATURED_POST.readTime}</span>
            </div>
            <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              {FEATURED_POST.title}
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {FEATURED_POST.excerpt}
            </p>
            <div className="mt-7 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-gray-900">{FEATURED_POST.author}</p>
                <p className="text-sm text-gray-500">{FEATURED_POST.role}</p>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[#DC3545] font-semibold hover:gap-3 transition-all"
              >
                Read Article
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
