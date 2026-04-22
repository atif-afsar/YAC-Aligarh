import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { getBlogBySlug } from "../Components/Blogs/blogData";

const SITE_URL = "https://yasiraliclasses.in";
const CHUNK_SIZE = 2;

const SECTION_TITLES = {
  Commerce: [
    "Understand the exam structure",
    "Build a practical weekly system",
    "Mock tests and error analysis",
    "Revision cycles that work",
    "Final phase execution plan",
  ],
  "Entrance Prep": [
    "Start with baseline assessment",
    "Phase-wise preparation model",
    "Speed and accuracy strategy",
    "Weekly tracking framework",
    "Final month confidence plan",
  ],
  Science: [
    "Prioritize chapters intelligently",
    "Subject-wise preparation rhythm",
    "Board test and revision loop",
    "Presentation and answer writing",
  ],
  "Regular Batch": [
    "Daily discipline framework",
    "Weekly planning for school students",
    "Parent tracking and review system",
    "Long-term academic consistency",
  ],
  "Study Tips": [
    "Set output-based study sessions",
    "Design your daily cycle",
    "Track quality, not only hours",
    "Use spaced revision for retention",
  ],
  "Career Advice": [
    "Build your early career foundation",
    "Choose domain depth first",
    "Create measurable impact records",
    "Mentorship and long-term growth",
  ],
  "CA/CS Updates": [
    "What changed in the framework",
    "How students should adapt",
    "Execution checklist for compliance",
    "Planning mistakes to avoid",
  ],
};

const FAQ_BY_CATEGORY = {
  Commerce: [
    {
      q: "How should commerce students plan CA and board preparation together?",
      a: "Use a split weekly calendar with dedicated concept, problem-solving, and revision blocks for each track. Avoid random switching between resources.",
    },
    {
      q: "When should mock tests begin for commerce competitive exams?",
      a: "Start full-length mock tests at least 8 to 10 weeks before exams and review each test in detail within 24 hours.",
    },
  ],
  "Entrance Prep": [
    {
      q: "What is the best strategy for entrance exam preparation in class 11 and 12?",
      a: "Follow a three-phase model: foundation, intensive practice, and exam simulation with measurable weekly targets.",
    },
    {
      q: "How can students improve speed and accuracy for entrance tests?",
      a: "Use timed sectionals, two-round question attempts, and error-type analysis after every mock test.",
    },
  ],
  Science: [
    {
      q: "How can science students improve board marks consistently?",
      a: "Prioritize concept-heavy chapters early, practice mixed tests weekly, and revise using active recall with previous year papers.",
    },
  ],
  "Regular Batch": [
    {
      q: "What is the most effective daily routine for regular school batches?",
      a: "Use three short blocks daily: school recap, homework, and revision. Track weekly completion instead of daily study hours.",
    },
  ],
};

function upsertMeta(name, content, type = "name") {
  const selector = type === "property" ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let meta = document.head.querySelector(selector);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(type, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function upsertCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);
  const sectionTitles = SECTION_TITLES[post?.category] || SECTION_TITLES[post?.tag] || [];
  const sections = (post?.content || []).reduce((acc, paragraph, i) => {
    const sectionIdx = Math.floor(i / CHUNK_SIZE);
    if (!acc[sectionIdx]) {
      acc[sectionIdx] = {
        id: `section-${sectionIdx + 1}`,
        title: sectionTitles[sectionIdx] || `Key Insight ${sectionIdx + 1}`,
        paragraphs: [],
      };
    }
    acc[sectionIdx].paragraphs.push(paragraph);
    return acc;
  }, []);
  const faqItems = FAQ_BY_CATEGORY[post?.category] || FAQ_BY_CATEGORY[post?.tag] || [];

  useEffect(() => {
    if (!post) return;

    const title = post.seoTitle || `${post.title} | YAC Blog`;
    const description = post.seoDescription || post.excerpt;
    const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

    document.title = title;
    upsertMeta("description", description);
    if (post.seoKeywords) upsertMeta("keywords", post.seoKeywords);
    upsertMeta("robots", "index,follow,max-image-preview:large");
    upsertMeta("og:type", "article", "property");
    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:url", canonicalUrl, "property");
    upsertMeta("og:image", post.image, "property");
    upsertMeta("article:section", post.category || post.tag || "Education", "property");
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", post.image);
    upsertCanonical(canonicalUrl);

    const scriptId = "blog-post-jsonld";
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          headline: post.title,
          description,
          image: [post.image],
          datePublished: post.date,
          articleSection: post.category || post.tag,
          keywords: post.seoKeywords,
          author: {
            "@type": "Person",
            name: post.author,
          },
          publisher: {
            "@type": "Organization",
            name: "Yasir Ali Classes",
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/images/Logo.png`,
            },
          },
          mainEntityOfPage: canonicalUrl,
        },
        ...(faqItems.length
          ? [
              {
                "@type": "FAQPage",
                mainEntity: faqItems.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.a,
                  },
                })),
              },
            ]
          : []),
      ],
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [faqItems, post]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <main className="min-h-screen bg-white pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#DC3545] hover:gap-2.5 transition-all"
        >
          <FaArrowLeft className="text-xs" />
          Back to Blog
        </Link>

        <p className="mt-8 text-xs uppercase tracking-[0.12em] font-semibold text-[#DC3545]">
          {post.category || post.tag}
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
          <span>{post.author}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {(post.seoKeywords || "")
            .split(",")
            .slice(0, 4)
            .map((k) => (
              <span
                key={k.trim()}
                className="rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-[11px] font-medium text-red-700"
              >
                {k.trim()}
              </span>
            ))}
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="mt-8 w-full rounded-2xl object-cover max-h-[460px]"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-gray-100 bg-gray-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                On this page
              </p>
              <ul className="mt-3 space-y-2.5">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm text-gray-700 transition hover:text-[#DC3545]"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div>
            <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-4 sm:p-5">
              <p className="text-sm font-semibold text-gray-900">Quick Takeaways</p>
              <ul className="mt-2 space-y-2">
                {sections.slice(0, 3).map((s) => (
                  <li key={`takeaway-${s.id}`} className="text-sm text-gray-700 leading-relaxed">
                    - {s.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-8">
              {sections.map((section) => (
                <section
                  id={section.id}
                  key={section.id}
                  className="scroll-mt-28 rounded-2xl border border-gray-100 bg-white p-5 sm:p-7 shadow-sm"
                >
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-5">
                    {section.paragraphs.map((paragraph, i) => (
                      <p
                        key={`${section.id}-${i}`}
                        className="text-gray-700 leading-8 text-[1rem] sm:text-[1.02rem]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {faqItems.length > 0 && (
              <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 sm:p-7 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                  Frequently Asked Questions
                </h2>
                <div className="mt-5 space-y-4">
                  {faqItems.map((f) => (
                    <div
                      key={f.q}
                      className="rounded-xl border border-gray-100 bg-gray-50/70 p-4"
                    >
                      <h3 className="text-base font-semibold text-gray-900">{f.q}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-700">{f.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
