import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";
import Seo from "../common/Seo";
import {
  SITE,
  seoConfig,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildCourseListJsonLd,
  buildOrganizationJsonLd,
  buildLocalBusinessJsonLd,
} from "../../seo/seoConfig";

const RED = "#DC3545";

/**
 * Generic, content-rich SEO landing page used for the "best X coaching in
 * Aligarh" routes (science, junior, CA, CMA, entrance, etc.).
 *
 * Expects a `landing` config object from src/seo/seoConfig.js#landingConfig.
 */
export default function KeywordLandingPage({ landing }) {
  const cfg = seoConfig[landing.seoKey];

  const jsonLd = useMemo(
    () => [
      buildBreadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: landing.breadcrumbName, path: cfg.path },
      ]),
      buildOrganizationJsonLd(),
      buildLocalBusinessJsonLd(),
      buildFaqJsonLd(landing.faqs),
      buildCourseListJsonLd(`${landing.breadcrumbName} - Programs at YAC`, landing.programs),
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: cfg.title,
        description: cfg.description,
        url: `${SITE.url}${cfg.path}`,
        about: {
          "@type": "EducationalOrganization",
          "@id": `${SITE.url}/#organization`,
        },
      },
    ],
    [cfg.description, cfg.path, cfg.title, landing.breadcrumbName, landing.faqs, landing.programs]
  );

  return (
    <main className="min-h-screen bg-white">
      <Seo
        title={cfg.title}
        description={cfg.description}
        keywords={cfg.keywords}
        path={cfg.path}
        jsonLd={jsonLd}
      />

      {/* ─────────── Hero ─────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/50 via-white to-white pt-28 pb-16 md:pb-20">
        <div
          className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-red-200/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-rose-200/25 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-gray-500">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link to="/" className="hover:text-[#DC3545]">
                  Home
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-gray-700">{landing.breadcrumbName}</li>
            </ol>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            {landing.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            {landing.h1Lead}{" "}
            <span style={{ color: RED }}>{landing.h1Highlight}</span>
            <span className="block text-2xl font-semibold tracking-tight text-gray-700 sm:text-3xl md:text-4xl mt-2">
              {landing.h1Tail}
            </span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {landing.intro}
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
              style={{ backgroundColor: RED }}
            >
              Apply for Admission
              <FaArrowRight className="text-xs" />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-900 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              <FaPhoneAlt className="text-xs" />
              Call {SITE.phoneDisplay}
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-600">
            <span className="inline-flex items-center gap-1.5">
              <FaStar className="text-amber-500" />
              4.7 / 5 · 260+ Google reviews
            </span>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-[#DC3545]" />
              IT Plaza, Amir Nishan Road, Aligarh
            </span>
          </div>
        </div>
      </section>

      {/* ─────────── Highlights ─────────── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            Why YAC is the {landing.breadcrumbName.toLowerCase()}
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {landing.highlights.map((h) => (
              <article
                key={h.title}
                className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm"
              >
                <p className="text-base font-bold text-gray-900">{h.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                  {h.desc}
                </p>
              </article>
            ))}
          </div>

          {/* ─────────── Programs + Reasons ─────────── */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                What makes YAC different
              </h3>
              <ul className="mt-4 space-y-2.5">
                {landing.reasons.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 text-sm text-gray-700 sm:text-[0.95rem]"
                  >
                    <FaCheckCircle className="mt-1 shrink-0 text-[#DC3545]" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-rose-50/50 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Programs in this track
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                {landing.programs.map((p) => (
                  <li key={p.title}>
                    <Link
                      to={p.to}
                      className="font-semibold text-[#DC3545] hover:underline"
                    >
                      {p.title}
                    </Link>
                    <span className="text-gray-700"> — {p.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── Internal SEO links ─────────── */}
      <section className="bg-white pb-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-700">
            Other top tracks at YAC Aligarh
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {OTHER_LINKS.filter((l) => l.path !== cfg.path).map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="inline-flex items-center rounded-full border border-red-100 bg-rose-50/60 px-3.5 py-1.5 text-xs font-semibold text-red-800 transition hover:bg-rose-100"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─────────── FAQs ─────────── */}
      <section className="bg-gradient-to-b from-white via-rose-50/35 to-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            FAQs - {landing.breadcrumbName}
          </h2>
          <div className="mt-6 space-y-3">
            {landing.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-gray-200/90 bg-white p-5 shadow-sm transition open:shadow-md"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-gray-900 marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-[0.95rem]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Ready to join Aligarh's best coaching?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-600">
            Speak to our admissions team or visit our IT Plaza centre in
            Aligarh.
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DC3545] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
            >
              Apply Now
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-900 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const OTHER_LINKS = [
  { label: "Best Coaching in Aligarh", path: "/best-coaching-in-aligarh" },
  { label: "Best Commerce Coaching", path: "/commerce-coaching-aligarh" },
  { label: "Best Science Coaching", path: "/best-science-coaching-in-aligarh" },
  { label: "Best Junior Coaching (5-10)", path: "/junior-wing-coaching" },
  { label: "Best CA Coaching", path: "/ca-foundation-coaching" },
  { label: "Best CMA Coaching", path: "/best-cma-coaching-in-aligarh" },
  { label: "Best Entrance Coaching", path: "/entrance-exam-coaching" },
];
