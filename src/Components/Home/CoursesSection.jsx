import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const COURSES = [
  {
    title: "CA Foundation",
    blurb: "Concept-first coaching for entry-level CA with mocks & mentorship.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=360&fit=crop",
  },
  {
    title: "CA Intermediate",
    blurb: "Group-wise strategy, papers, and revision labs for serious aspirants.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=360&fit=crop",
  },
  {
    title: "B.Com & allied",
    blurb: "University sync, practical accounting, and career-ready projects.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=360&fit=crop",
  },
  {
    title: "Class 11–12 Commerce",
    blurb: "Board-focused clarity with early CA/CS orientation when you are ready.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=360&fit=crop",
  },
];

export default function CoursesSection() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".course-card", {
        y: 40,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 82%",
          once: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Our Specialized Courses
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl text-base sm:text-lg">
              Pick a track that matches your goal—each program blends live classes,
              structured notes, and assessments.
            </p>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-[#DC3545] font-semibold hover:gap-3 transition-all shrink-0"
          >
            View all here
            <FaArrowRight className="text-sm" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {COURSES.map((c) => (
            <Motion.article
              key={c.title}
              className="course-card group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="relative h-40 sm:h-44 bg-slate-900">
                <img
                  src={c.img}
                  alt=""
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {c.blurb}
                </p>
                <Link
                  to="/courses"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#DC3545] group-hover:gap-2 transition-all"
                >
                  Read More
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
