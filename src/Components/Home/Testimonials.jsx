import { useMemo } from "react";
import { motion as Motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const STORIES = [
  {
    quote:
      "YAC mock tests and analysis sessions improved my speed and confidence for the final paper.",
    name: "Aarav Sharma",
    role: "B.Com Entrance Topper",
    avatar: "/results/bcom/1.jpg",
    batch: "Aligarh",
  },
  {
    quote:
      "Concept clarity for CA Foundation became easy because every topic was taught from an exam-focused perspective.",
    name: "Ritika Jain",
    role: "Commerce Achiever",
    avatar: "/results/bcom/4.jpg",
    batch: "Kanpur",
  },
  {
    quote:
      "Regular tests and personalized feedback kept my preparation consistent throughout the entire session.",
    name: "Mohd Faizan",
    role: "Science Performer",
    avatar: "/results/ba/2.jpg",
    batch: "Lucknow",
  },
  {
    quote:
      "The faculty mentorship and revision strategy helped me convert weaknesses into scoring areas.",
    name: "Priya Verma",
    role: "BALLB Selection",
    avatar: "/results/ballb/2.jpg",
    batch: "Delhi",
  },
  {
    quote:
      "Doubt-solving speed and chapter-wise practice at YAC made my entrance preparation focused and calm.",
    name: "Zaid Ahmad",
    role: "MBA Entrance Ranker",
    avatar: "/results/mba/3.jpg",
    batch: "Noida",
  },
  {
    quote:
      "From basics to advanced questions, the structured routine helped me perform much better in mocks.",
    name: "Sana Khan",
    role: "BA Program Topper",
    avatar: "/results/ba/7.jpg",
    batch: "Agra",
  },
  {
    quote:
      "I improved my score with weekly tests, feedback loops, and disciplined revision sessions.",
    name: "Nikhil Gupta",
    role: "B.Com Merit List",
    avatar: "/results/bcom/8.jpg",
    batch: "Mathura",
  },
  {
    quote:
      "The test environment felt exactly like real exams, so I entered the final paper with confidence.",
    name: "Hina Siddiqui",
    role: "MBA Achiever",
    avatar: "/results/mba/9.jpg",
    batch: "Aligarh",
  },
];

export default function Testimonials() {
  const firstRow = useMemo(() => STORIES.slice(0, 4), []);
  const secondRow = useMemo(() => STORIES.slice(4), []);

  const renderRow = (items, className) => (
    <div className="relative overflow-hidden">
      <div className={`testimonial-marquee ${className}`}>
        {[...items, ...items].map((s, index) => (
          <article
            key={`${s.name}-${index}`}
            className="testimonial-card group w-[86vw] shrink-0 rounded-3xl border border-red-100/80 bg-white/95 p-5 shadow-[0_10px_30px_-20px_rgba(17,24,39,0.5)] backdrop-blur-sm sm:w-[440px] sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-0.5 text-[#DC3545]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
              <span className="rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-red-700">
                Verified
              </span>
            </div>

            <p className="text-sm italic leading-relaxed text-gray-700 sm:text-[15px]">
              "{s.quote}"
            </p>

            <div className="mt-5 flex items-center gap-3.5">
              <img
                src={s.avatar}
                alt={s.name}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-md sm:h-14 sm:w-14"
              />
              <div>
                <p className="text-base font-semibold text-gray-900">{s.name}</p>
                <p className="text-xs text-gray-500 sm:text-sm">
                  {s.role} · {s.batch}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-rose-50/35 to-white py-16 sm:py-20 lg:py-28">
      <div
        className="pointer-events-none absolute -left-20 top-12 h-64 w-64 rounded-full bg-red-200/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-rose-200/20 blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center sm:mb-12 lg:mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            Real voices
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            What people are saying?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Don’t just take our word for it. Hear directly from YAC toppers and
            achievers.
          </p>
        </Motion.div>

        <div className="space-y-5 sm:space-y-6">
          {renderRow(firstRow, "marquee-left")}
          {renderRow(secondRow, "marquee-right")}
        </div>

        <style>{`
          .testimonial-marquee {
            display: flex;
            width: max-content;
            gap: 1.15rem;
            will-change: transform;
          }
          .marquee-left {
            animation: yac-marquee-left 38s linear infinite;
          }
          .marquee-right {
            animation: yac-marquee-right 40s linear infinite;
          }
          .testimonial-card {
            transform: translateZ(0);
          }
          @keyframes yac-marquee-left {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }
          @keyframes yac-marquee-right {
            0% {
              transform: translate3d(-50%, 0, 0);
            }
            100% {
              transform: translate3d(0, 0, 0);
            }
          }
          @media (max-width: 640px) {
            .marquee-left {
              animation-duration: 32s;
            }
            .marquee-right {
              animation-duration: 34s;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
