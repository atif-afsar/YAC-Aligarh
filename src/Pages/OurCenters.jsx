import { useMemo } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaBroadcastTower, FaMapMarkerAlt, FaWifi } from "react-icons/fa";
import Seo from "../Components/common/Seo";
import { SITE, seoConfig, buildOurCentersPageJsonLd } from "../seo/seoConfig";

const easeOut = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: easeOut },
  }),
};

/** Stagger for online hub cards */
const hubGridStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
};

/** Each hub card entrance */
const hubCard = {
  hidden: { opacity: 0, y: 36, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

const hubCardReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const hubGridStaggerReduced = {
  hidden: {},
  visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
};

const MAIN_CENTER = {
  name: "Aligarh",
  headline: "Main campus",
  summary:
    "Our flagship centre at IT Plaza, Aligarh—full classroom programmes, doubt labs, and test series—with the same faculty-led system streamed live for students across India.",
  addressLines: [
    `${SITE.address.street}`,
    `${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}`,
  ],
};

/** @type {{ name: string; region: string; note: string }[]} */
const ONLINE_HUBS = [
  { name: "Delhi NCR", region: "National Capital Region", note: "Live batches, mocks & mentor support—same Aligarh faculty." },
  { name: "Lucknow", region: "Uttar Pradesh", note: "Structured online Commerce, Science & Entrance tracks." },
  { name: "Moradabad", region: "Western UP", note: "Board-aligned online classes with doubt windows." },
  { name: "Agra", region: "Braj region", note: "Full access to live classes, recordings & test series." },
  { name: "Meerut & Saharanpur", region: "Nearby belt", note: "Students join online with cohort-based accountability." },
  { name: "Mathura · Bareilly · Etawah", region: "UP — more cities", note: "One national classroom: learn from anywhere with YAC online." },
];

export default function OurCenters() {
  const reduceMotion = useReducedMotion();
  const jsonLd = useMemo(() => buildOurCentersPageJsonLd(), []);
  const hubVariants = reduceMotion ? hubCardReduced : hubCard;
  const hubStagger = reduceMotion ? hubGridStaggerReduced : hubGridStagger;

  const fullAddress = useMemo(
    () =>
      [SITE.address.street, SITE.address.locality, SITE.address.region, SITE.address.postalCode]
        .filter(Boolean)
        .join(", "),
    []
  );

  return (
    <main className="min-h-screen bg-[#faf8f5]" aria-labelledby="our-centers-heading">
      <Seo
        title={seoConfig.ourCenters.title}
        description={seoConfig.ourCenters.description}
        keywords={seoConfig.ourCenters.keywords}
        path={seoConfig.ourCenters.path}
        image="/images/our-centers-hero.png"
        imageWidth={1600}
        imageHeight={900}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[4.5rem] sm:pt-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30,58,95,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,95,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-slate-300/25 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
          <div className="mx-auto mt-2 grid max-w-6xl grid-cols-1 items-center gap-8 lg:mt-4 lg:grid-cols-2 lg:gap-10 xl:gap-12">
            {/* Left: copy */}
            <Motion.div
              initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.55, ease: easeOut }}
              className="text-center lg:max-w-none lg:pr-4 lg:text-left xl:pr-6"
            >
              <p className="inline-flex items-center justify-center rounded-full border border-rose-200/80 bg-gradient-to-r from-white to-rose-50/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#DC3545] shadow-sm shadow-rose-100/40 sm:text-[11px] sm:tracking-[0.22em] lg:justify-start">
                Yasir Ali Classes
              </p>
              <h1
                id="our-centers-heading"
                className="mx-auto mt-5 max-w-[22rem] font-bold tracking-[-0.04em] text-gray-950 text-[2.125rem] leading-[1.08] sm:mt-6 sm:max-w-2xl sm:text-[2.625rem] sm:leading-[1.06] md:max-w-3xl md:text-5xl md:leading-[1.05] lg:mx-0 lg:mt-6 lg:max-w-none lg:text-[clamp(2.35rem,1.2rem+2.6vw,3.15rem)] lg:leading-[1.06] xl:text-[clamp(2.6rem,1.5rem+2.4vw,3.45rem)] xl:leading-[1.05] 2xl:text-[3.5rem]"
              >
                <span className="block text-balance text-gray-900">Our centres —</span>
                <span className="mt-2 block text-balance sm:mt-1.5 lg:mt-2">
                  <span className="bg-gradient-to-br from-[#DC3545] via-rose-600 to-rose-700 bg-clip-text text-transparent">
                    Aligarh
                  </span>
                  <span className="text-gray-800"> &amp; online across India</span>
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg lg:mx-0 lg:max-w-lg xl:max-w-xl">
                Walk in at our Aligarh campus or join the same programmes live from Delhi, Lucknow,
                Moradabad, Agra and nearby cities—one standard of mentoring, everywhere.
              </p>
            </Motion.div>

            {/* Right: poster — full graphic in column */}
            <Motion.div
              initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.06, ease: easeOut }}
              className="w-full"
            >
              <div className="relative">
                <div
                  className="absolute -inset-1 rounded-[1.25rem] bg-gradient-to-br from-[#DC3545]/25 via-rose-200/30 to-transparent opacity-90 blur-sm sm:rounded-3xl"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[1.25rem] border border-gray-200/80 bg-gradient-to-b from-[#faf8f5] via-white to-[#f5f0eb] shadow-[0_24px_60px_-28px_rgba(220,53,69,0.22)] sm:rounded-3xl">
                  <div className="flex min-h-0 w-full items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6">
                    <Motion.div
                      className="relative w-full"
                      initial={{ opacity: reduceMotion ? 1 : 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.5,
                        ease: easeOut,
                        delay: reduceMotion ? 0 : 0.08,
                      }}
                    >
                      <img
                        src="/images/our-centers-hero.png"
                        alt="Yasir Ali Classes — At the heart of the nation; empowering dreams cross-country from Aligarh."
                        className="h-auto w-full max-w-full object-contain object-center lg:max-h-[min(78vh,640px)]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        width={1600}
                        height={900}
                        decoding="async"
                        fetchPriority="high"
                        loading="eager"
                      />
                    </Motion.div>
                  </div>
                </div>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Main centre — Aligarh */}
      <section
        className="relative border-t border-gray-200/60 bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        aria-labelledby="flagship-section-heading"
      >
        <div className="mx-auto max-w-7xl">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            custom={0}
            className="max-w-2xl"
          >
            <h2 id="flagship-section-heading" className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC3545]">
              Flagship
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {MAIN_CENTER.headline}: {MAIN_CENTER.name}
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">{MAIN_CENTER.summary}</p>
          </Motion.div>

          <Motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: easeOut }}
            whileHover={{ y: -4, transition: { duration: 0.35, ease: easeOut } }}
            className="group relative mt-10 overflow-hidden rounded-3xl border border-rose-200/90 bg-gradient-to-br from-white via-rose-50/50 to-rose-100/30 p-6 shadow-[0_22px_56px_-26px_rgba(220,53,69,0.42)] ring-1 ring-rose-100/60 transition-shadow duration-300 hover:shadow-[0_28px_64px_-22px_rgba(220,53,69,0.48)] sm:p-8 md:p-10 md:pr-[40%]"
          >
            {!reduceMotion ? (
              <>
                <Motion.div
                  aria-hidden
                  className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#DC3545]/15 blur-3xl"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <Motion.div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-rose-300/25 blur-3xl"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                />
              </>
            ) : null}
            <Motion.div
              className="relative flex flex-wrap items-center gap-2"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.45, ease: easeOut }}
            >
              <Motion.span
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/90 bg-emerald-50/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-800 shadow-sm"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <FaWifi className="text-[10px]" aria-hidden />
                Online
              </Motion.span>
              <Motion.span
                className="inline-flex items-center gap-1.5 rounded-full border border-rose-200/90 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-rose-900 shadow-sm"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <FaMapMarkerAlt className="text-[10px] text-[#DC3545]" aria-hidden />
                In-person
              </Motion.span>
            </Motion.div>
            <Motion.h3
              className="relative mt-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18, duration: 0.45, ease: easeOut }}
            >
              Visit us in{" "}
              <span className="bg-gradient-to-r from-[#DC3545] to-rose-600 bg-clip-text text-transparent">
                {MAIN_CENTER.name}
              </span>
            </Motion.h3>
            <Motion.address
              className="relative mt-4 not-italic text-sm leading-relaxed text-gray-600 sm:text-base"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24, duration: 0.45, ease: easeOut }}
            >
              {MAIN_CENTER.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </Motion.address>
            <Motion.div
              className="relative mt-6 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.45, ease: easeOut }}
            >
              <Motion.a
                href={`tel:+${SITE.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#DC3545] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 transition hover:bg-[#c92f3f]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call {SITE.phoneDisplay}
              </Motion.a>
              <Motion.a
                href={`tel:+${SITE.phone2.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#DC3545] shadow-md ring-1 ring-rose-200/80 transition hover:bg-rose-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call {SITE.phoneDisplay2}
              </Motion.a>
              <Motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-[#DC3545]/35 bg-white px-5 py-3 text-sm font-semibold text-[#DC3545] transition hover:border-[#DC3545] hover:bg-rose-50"
                >
                  Admissions <FaArrowRight className="text-xs opacity-80" aria-hidden />
                </Link>
              </Motion.div>
            </Motion.div>

            {/* Google Maps embed — right side */}
            <Motion.div
              className="absolute inset-y-0 right-0 hidden w-[38%] md:block"
              initial={{ opacity: 0, x: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 160, damping: 20, delay: 0.25 }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-r-3xl">
                <div
                  className="pointer-events-none absolute inset-0 z-10 rounded-r-3xl ring-1 ring-inset ring-rose-200/50"
                  aria-hidden
                />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14103.963512145961!2d78.06779983715818!3d27.90225325016561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4c20dc101a7%3A0x71244a3465c6f617!2sYasir%20Ali%20Classes%20-%20best%20Commerce%20Coaching%20in%20Aligarh!5e0!3m2!1sen!2sin!4v1778565538238!5m2!1sen!2sin"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yasir Ali Classes — Aligarh location on Google Maps"
                />
              </div>
            </Motion.div>

            {/* Map — mobile (below content) */}
            <Motion.div
              className="relative mt-6 overflow-hidden rounded-2xl md:hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
            >
              <div className="relative">
                <div
                  className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-rose-200/50"
                  aria-hidden
                />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14103.963512145961!2d78.06779983715818!3d27.90225325016561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4c20dc101a7%3A0x71244a3465c6f617!2sYasir%20Ali%20Classes%20-%20best%20Commerce%20Coaching%20in%20Aligarh!5e0!3m2!1sen!2sin!4v1778565538238!5m2!1sen!2sin"
                  className="h-52 w-full border-0 sm:h-64"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yasir Ali Classes — Aligarh location on Google Maps"
                />
              </div>
            </Motion.div>
          </Motion.article>
        </div>
      </section>

      {/* Online hubs grid */}
      <section
        className="relative border-t border-gray-200/60 px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        aria-labelledby="online-centers-heading"
      >
        <div className="mx-auto max-w-7xl">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="max-w-2xl"
          >
            <h2 id="online-centers-heading" className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC3545]">
              Online centres
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Learn from Delhi, Lucknow, Moradabad, Agra &amp; nearby
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Same live timetable, faculty and study system as Aligarh—optimised for students who want
              top-tier coaching without relocating. Browse{" "}
              <Link to="/online-courses" className="font-semibold text-[#DC3545] underline-offset-2 hover:underline">
                online courses
              </Link>{" "}
              or reach us for batch fit.
            </p>
          </Motion.div>

          <Motion.ul
            className="mt-12 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px", amount: 0.12 }}
            variants={hubStagger}
          >
            {ONLINE_HUBS.map((hub, index) => (
              <Motion.li key={hub.name} variants={hubVariants} className="h-full">
                <Motion.div
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100/90 bg-white p-6 shadow-[0_10px_36px_-22px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:border-rose-200/90"
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 26px 50px -18px rgba(220, 53, 69, 0.28)",
                    transition: { type: "spring", stiffness: 380, damping: 22 },
                  }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-rose-200/40 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <Motion.span
                    className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-50 to-slate-50 text-[#DC3545] ring-1 ring-rose-100/80 transition-shadow duration-300 group-hover:shadow-md group-hover:shadow-rose-200/50"
                    whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
                    transition={{ type: "spring", stiffness: 400, damping: 14 }}
                  >
                    <FaMapMarkerAlt className="text-lg transition-transform duration-300 group-hover:scale-110" aria-hidden />
                  </Motion.span>
                  <h3 className="relative mt-4 text-lg font-bold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-gray-950">
                    {hub.name}
                  </h3>
                  <p className="relative mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {hub.region}
                  </p>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-gray-600">{hub.note}</p>
                  <div className="relative mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-emerald-700">
                    {reduceMotion ? (
                      <span aria-hidden className="inline-flex">
                        <FaWifi className="text-xs" />
                      </span>
                    ) : (
                      <Motion.span
                        aria-hidden
                        className="inline-flex"
                        animate={{ scale: [1, 1.12, 1], opacity: [1, 0.88, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.22 }}
                      >
                        <FaWifi className="text-xs" />
                      </Motion.span>
                    )}
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">Live online</span>
                  </div>
                </Motion.div>
              </Motion.li>
            ))}
          </Motion.ul>

          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200/80 bg-gradient-to-r from-slate-50 to-white px-6 py-6 sm:flex-row sm:items-center sm:px-8"
          >
            <p className="text-sm font-medium text-gray-700">
              <span className="font-bold text-gray-900">Your city not listed?</span> Our online batches cover
              all of India—share your location on enquiry and we will suggest the best batch slot.
            </p>
            <Motion.div className="shrink-0" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 rounded-xl bg-[#DC3545] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-rose-500/25 transition hover:bg-[#c92f3f]"
              >
                Enquire now <FaArrowRight className="text-xs opacity-90" aria-hidden />
              </Link>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* Footer strip — brand red & white */}
      <section
        className="relative overflow-hidden border-t border-white/10 px-4 py-11 text-center sm:px-6 sm:py-12"
        style={{
          background: "linear-gradient(135deg, #C41E1E 0%, #A71616 52%, #991B1B 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.2]"
          aria-hidden
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M0 0h20v20H0zM20 20h20v20H20z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <Motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="relative mx-auto max-w-2xl text-sm font-medium leading-relaxed text-white/95"
        >
          <span className="font-bold tracking-wide text-white drop-shadow-sm">
            Empowering dreams, cross-country
          </span>
          <span className="mx-1.5 text-white/70">—</span>
          <span className="text-white/90">{fullAddress}.</span>
        </Motion.p>
      </section>
    </main>
  );
}
