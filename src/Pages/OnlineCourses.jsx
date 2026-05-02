import { useMemo } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBroadcastTower,
  FaCrown,
  FaPlayCircle,
  FaVideo,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Seo from "../Components/common/Seo";
import { seoConfig, buildBreadcrumbJsonLd } from "../seo/seoConfig";

const WHATSAPP_E164 = "919045417079";

function coursePurchaseWhatsAppUrl(courseTitle, priceLabel) {
  const text =
    `Hi YAC Team,\n\n` +
    `I'm interested in purchasing the online course bundle: ${courseTitle}\n` +
    `Quoted price: ${priceLabel}\n\n` +
    `Please share payment details and the next steps.`;
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

const COURSE_BUNDLES = [
  {
    title: "Live Classes",
    subtitle: "Interactive Learning",
    desc: "Attend real-time classes with expert faculty, instant doubt support, and regular test discussions.",
    icon: FaVideo,
    points: ["Daily live sessions", "Live doubt solving", "Mentor guidance"],
    accent: "from-red-500 to-rose-500",
    price: "₹9,999",
  },
  {
    title: "Recorded Lectures",
    subtitle: "Learn at Your Pace",
    desc: "Access full recorded topic-wise lectures anytime so you can revise efficiently and stay consistent.",
    icon: FaPlayCircle,
    points: ["Unlimited replay", "Chapter-wise library", "Quick revision support"],
    accent: "from-orange-500 to-amber-500",
    price: "₹4,999",
  },
  {
    title: "Premium Courses",
    subtitle: "Complete Exam Prep",
    desc: "Structured premium programs with detailed study plans, mocks, notes, and personalized performance tracking.",
    icon: FaCrown,
    points: ["Advanced test series", "Premium notes", "Progress analytics"],
    accent: "from-violet-500 to-fuchsia-500",
    price: "₹14,999",
  },
];

const YOUTUBE_SECTIONS = [
  {
    title: "YouTube Live Classes",
    desc: "Attend special live classes, strategy marathons, and current-topic revisions on YouTube.",
    icon: FaBroadcastTower,
    cta: "Watch Live Sessions",
    to: "/youtube",
  },
  {
    title: "YouTube Recorded Sessions",
    desc: "Explore recorded concept lectures, solved papers, and short revision videos by topic.",
    icon: FaYoutube,
    cta: "Watch Recorded Videos",
    to: "/youtube",
  },
];

export default function OnlineCourses() {
  const jsonLd = useMemo(
    () =>
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Online Courses", path: "/online-courses" },
      ]),
    []
  );

  return (
    <main className="min-h-screen bg-white">
      <Seo
        title={seoConfig.onlineCourses.title}
        description={seoConfig.onlineCourses.description}
        keywords={seoConfig.onlineCourses.keywords}
        path={seoConfig.onlineCourses.path}
        jsonLd={jsonLd}
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/35 to-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div
          className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-red-200/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-fuchsia-200/25 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
              Online Courses
            </p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Learn Live, Recorded, and Premium
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Choose the mode that fits your routine and prepare with YAC’s structured online learning
              ecosystem. Pick a bundle below to purchase via WhatsApp.
            </p>
          </Motion.div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COURSE_BUNDLES.map((item, i) => {
              const Icon = item.icon;
              const waHref = coursePurchaseWhatsAppUrl(item.title, item.price);
              return (
                <Motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.06, duration: 0.45 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-red-100/80 bg-white/95 p-5 shadow-[0_14px_36px_-24px_rgba(17,24,39,0.45)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_-24px_rgba(17,24,39,0.55)] sm:p-6"
                >
                  <div
                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-white shadow-lg`}
                  >
                    <Icon className="text-lg" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-600">
                    {item.subtitle}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-gray-900">{item.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{item.desc}</p>

                  <p className="mt-4 text-lg font-bold tabular-nums text-gray-900">{item.price}</p>

                  <div className="mt-4 space-y-1.5">
                    {item.points.map((point) => (
                      <p
                        key={point}
                        className="text-sm font-medium text-gray-700 before:mr-2 before:text-red-500 before:content-['•']"
                      >
                        {point}
                      </p>
                    ))}
                  </div>

                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                  >
                    <FaWhatsapp className="text-lg" />
                    Buy on WhatsApp
                  </a>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-red-400/75 to-transparent opacity-0 transition group-hover:opacity-100" />
                </Motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
              YouTube Learning
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Live + Recorded Sessions on YouTube
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {YOUTUBE_SECTIONS.map((item, i) => {
              const Icon = item.icon;
              return (
                <Motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white to-rose-50/60 p-6 shadow-[0_12px_32px_-24px_rgba(17,24,39,0.45)]"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#DC3545] text-white shadow-md">
                    <Icon className="text-lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
                  <Link
                    to={item.to}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#DC3545] ring-1 ring-red-200 transition hover:bg-red-50"
                  >
                    {item.cta}
                    <FaArrowRight className="text-xs" />
                  </Link>
                </Motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
