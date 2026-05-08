import { Link } from "react-router-dom";
import { motion as Motion, useReducedMotion } from "framer-motion";
import {
  FaArrowRight,
  FaBookOpen,
  FaChartLine,
  FaChartPie,
  FaEnvelope,
  FaFlask,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaMedal,
  FaPhoneAlt,
  FaUserGraduate,
} from "react-icons/fa";

const RED = "#DC3545";

/**
 * Keyword-rich, internally-linked SEO content block on the home page.
 * Anchors the home for every "best X coaching in Aligarh" query and links
 * out to dedicated landing pages.
 */

const PROGRAMS = [
  {
    title: "Best Commerce Coaching in Aligarh",
    desc: "Class 11-12 Commerce, CA Foundation, CMA and B.Com — the strongest commerce track in Aligarh.",
    to: "/commerce-coaching",
    anchor: "Explore commerce",
    Icon: FaChartLine,
  },
  {
    title: "Best Science Coaching in Aligarh",
    desc: "Class 11-12 Science (PCM / PCB) with concept-first Physics, Chemistry, Maths and Biology.",
    to: "/best-science-coaching-in-aligarh",
    anchor: "Explore science",
    Icon: FaFlask,
  },
  {
    title: "Best Junior Coaching (5–10)",
    desc: "NCERT-aligned Maths, Science, English and SST for Classes 5 to 10 with parent-friendly progress updates.",
    to: "/best-junior-coaching-in-aligarh",
    anchor: "Explore junior",
    Icon: FaBookOpen,
  },
  {
    title: "Best CA Coaching in Aligarh",
    desc: "ICAI CA Foundation — Accounts, Law, Quant and Economics with mentor-led revision marathons.",
    to: "/best-ca-coaching-in-aligarh",
    anchor: "Explore CA",
    Icon: FaUserGraduate,
  },
  {
    title: "Best CMA Coaching in Aligarh",
    desc: "CMA (ICMAI) Foundation and Intermediate with syllabus-wise modules and paper-pattern mocks.",
    to: "/best-cma-coaching-in-aligarh",
    anchor: "Explore CMA",
    Icon: FaChartPie,
  },
  {
    title: "Best Entrance Coaching in Aligarh",
    desc: "BBA, MBA, BA-LLB / CLAT, BAFL, BA, B.Com UG and Class 6 / 9 / 11 entrance preparation.",
    to: "/best-entrance-coaching-in-aligarh",
    anchor: "Explore entrance",
    Icon: FaGraduationCap,
  },
];

const ease = [0.22, 1, 0.36, 1];

function buildVariants(reduce) {
  if (reduce) {
    return {
      header: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      },
      grid: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
      card: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      },
      panel: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      },
    };
  }
  return {
    header: {
      hidden: { opacity: 0, y: 18 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
    },
    grid: {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.07, delayChildren: 0.05 },
      },
    },
    card: {
      hidden: { opacity: 0, y: 22, scale: 0.97 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease },
      },
    },
    panel: {
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
    },
  };
}

export default function SeoLocalContent() {
  const reduce = useReducedMotion();
  const v = buildVariants(reduce);

  return (
    <section
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-24"
      aria-labelledby="seo-aligarh-heading"
    >
      {/* Decorative backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-rose-100/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-red-100/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-7 text-xs text-gray-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link to="/" className="hover:text-[#DC3545]">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-gray-400">›</li>
            <li>
              <Link
                to="/best-coaching-in-aligarh"
                className="font-medium text-gray-700 hover:text-[#DC3545]"
              >
                Best Coaching in Aligarh
              </Link>
            </li>
          </ol>
        </nav>

        {/* ── Header ── */}
        <Motion.header
          className="mx-auto max-w-4xl text-center"
          variants={v.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-rose-50/80 px-3.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#B91C1C] sm:text-[0.7rem]">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#DC3545]" />
            Trusted in Aligarh since 2008
          </span>

          <h2
            id="seo-aligarh-heading"
            className="mt-5 text-[1.75rem] font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-[2rem] md:text-[2.5rem]"
          >
            The{" "}
            <span
              className="font-serif-display italic font-semibold"
              style={{ color: RED }}
            >
              Best Coaching
            </span>{" "}
            in Aligarh
            <span className="block text-base font-medium text-gray-600 sm:text-lg md:text-xl mt-2">
              Commerce · Science · Junior · CA · CMA &amp; Entrance
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[0.9rem] leading-relaxed text-gray-600 sm:mt-6 sm:text-[1rem] sm:leading-[1.7]">
            <strong className="font-semibold text-gray-900">
              Yasir Ali Classes (YAC)
            </strong>{" "}
            is widely recognised as the{" "}
            <Link
              to="/best-coaching-in-aligarh"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              best coaching in Aligarh
            </Link>
            . We run dedicated tracks for{" "}
            <Link
              to="/commerce-coaching"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              commerce
            </Link>
            ,{" "}
            <Link
              to="/best-science-coaching-in-aligarh"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              science
            </Link>{" "}
            (PCM / PCB),{" "}
            <Link
              to="/best-junior-coaching-in-aligarh"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              junior coaching
            </Link>{" "}
            (Classes 5-10),{" "}
            <Link
              to="/best-ca-coaching-in-aligarh"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              CA
            </Link>
            ,{" "}
            <Link
              to="/best-cma-coaching-in-aligarh"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              CMA
            </Link>
            , B.Com, Class 11-12 and{" "}
            <Link
              to="/best-entrance-coaching-in-aligarh"
              className="font-semibold text-[#DC3545] underline-offset-2 hover:underline"
            >
              entrance exams
            </Link>
            . With 16+ years of mentorship, a 4.9★ rating from 260+ reviews,
            and online + offline batches, YAC blends concept-first teaching
            with disciplined exam preparation.
          </p>

          {/* Trust strip */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gray-500 sm:text-[0.75rem]">
            <span>
              <span className="text-gray-900">16+</span> Years
            </span>
            <span aria-hidden className="h-3 w-px bg-gray-300" />
            <span>
              <span className="text-gray-900">80,000+</span> Students Mentored
            </span>
            <span aria-hidden className="h-3 w-px bg-gray-300" />
            <span>
              <span className="text-gray-900">20,000+</span> Selections
            </span>
          </div>
        </Motion.header>

        {/* ── Programs grid ── */}
        <Motion.div
          className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={v.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PROGRAMS.map((p) => {
            const Icon = p.Icon;
            return (
              <Motion.article
                key={p.title}
                variants={v.card}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-red-100/80 bg-white p-5 shadow-[0_2px_10px_-4px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_22px_44px_-22px_rgba(220,53,69,0.28)] sm:p-6"
              >
                {/* Soft corner tint that brightens on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-rose-100/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-50 to-red-100/70 ring-1 ring-red-200/60 transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                  <Icon
                    className="text-[1.05rem] text-[#DC3545] sm:text-xl"
                    aria-hidden
                  />
                </div>

                <h3 className="relative text-[1.02rem] font-semibold leading-snug text-gray-900 sm:text-[1.1rem]">
                  {p.title}
                </h3>
                <p className="relative mt-2 grow text-[0.85rem] leading-relaxed text-gray-600 sm:text-[0.9rem]">
                  {p.desc}
                </p>

                <Link
                  to={p.to}
                  className="relative mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#DC3545]"
                  aria-label={p.anchor}
                >
                  {p.anchor}
                  <FaArrowRight
                    className="text-[0.7rem] transition-transform duration-300 group-hover:translate-x-1.5"
                    aria-hidden
                  />
                </Link>
              </Motion.article>
            );
          })}
        </Motion.div>

        {/* ── Info panel ── */}
        <Motion.div
          className="relative mt-12 overflow-hidden rounded-3xl border border-red-100 bg-gradient-to-br from-white via-rose-50/40 to-rose-50/70 p-6 shadow-[0_4px_24px_-12px_rgba(220,53,69,0.18)] sm:mt-14 sm:p-8 lg:p-10"
          variants={v.panel}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-rose-200/30 blur-2xl"
          />

          <div className="relative grid gap-8 md:grid-cols-3 md:gap-10">
            <InfoBlock
              Icon={FaMedal}
              title="Why YAC is Aligarh's #1"
              body={
                <>
                  80,000+ students mentored, 20,000+ final selections and 16+
                  years of academic excellence across Commerce, Science,
                  Junior and Professional tracks in Aligarh.
                </>
              }
            />

            <InfoBlock
              Icon={FaMapMarkerAlt}
              title="Visit our centre"
              body={
                <address className="not-italic">
                  Senco Jewellers, IT Plaza,
                  <br />
                  Amir Nishan Road, Aligarh,
                  <br />
                  Uttar Pradesh 202001, India
                </address>
              }
            />

            <InfoBlock
              Icon={FaPhoneAlt}
              title="Talk to admissions"
              body={
                <span className="flex flex-col gap-1.5">
                  <a
                    href="tel:+919045417079"
                    className="inline-flex items-center gap-2 font-semibold text-[#DC3545] hover:underline"
                  >
                    <FaPhoneAlt
                      className="text-[0.7rem] text-[#DC3545]/80"
                      aria-hidden
                    />
                    +91 90454 17079
                  </a>
                  <a
                    href="mailto:yasirali83637@gmail.com"
                    className="inline-flex items-center gap-2 font-semibold text-[#DC3545] hover:underline"
                  >
                    <FaEnvelope
                      className="text-[0.7rem] text-[#DC3545]/80"
                      aria-hidden
                    />
                    yasirali83637@gmail.com
                  </a>
                </span>
              }
            />
          </div>

          <div className="relative mt-7 flex flex-col items-stretch justify-between gap-4 border-t border-red-100/70 pt-6 sm:mt-8 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-sm leading-relaxed text-gray-700 sm:text-[0.95rem]">
              Ready to join Aligarh's most trusted coaching? Our admissions
              team typically responds within an hour.
            </p>
            <Link
              to="/admissions"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#DC3545] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_22px_-10px_rgba(220,53,69,0.55)] transition hover:opacity-95 hover:shadow-[0_14px_28px_-12px_rgba(220,53,69,0.7)]"
            >
              Apply for Admission
              <FaArrowRight
                className="text-[0.7rem] transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

function InfoBlock({ Icon, title, body }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-red-100">
          <Icon className="text-base text-[#DC3545]" aria-hidden />
        </div>
      </div>
      <div className="min-w-0">
        <h3 className="text-[0.95rem] font-bold text-gray-900 sm:text-base">
          {title}
        </h3>
        <div className="mt-2 text-[0.85rem] leading-relaxed text-gray-600 sm:text-[0.9rem]">
          {body}
        </div>
      </div>
    </div>
  );
}
