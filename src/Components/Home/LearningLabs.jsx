import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = {
  main: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=1200&fit=crop",
  topL: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  topR:
    "https://i.pinimg.com/1200x/85/c7/4c/85c74c1360db760634652f7d3a553553.jpg",
  bottom:
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=500&fit=crop",
};

export default function LearningLabs() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-cell", {
        opacity: 0,
        scale: 0.94,
        duration: 0.65,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 78%",
          once: true,
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="bg-[#F9F9F9] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Inside our Learning Labs
          </h2>
          <p className="mt-3 text-gray-600">
            Classrooms, discussion corners, and focused practice zones—built for
            deep work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-5 md:h-[min(72vh,560px)]">
          <div className="bento-cell md:row-span-2 md:col-start-1 rounded-3xl overflow-hidden shadow-lg ring-1 ring-black/5 min-h-[280px] md:min-h-0">
            <img
              src={IMAGES.main}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
          <div className="bento-cell md:col-start-2 md:row-start-1 rounded-3xl overflow-hidden shadow-md ring-1 ring-black/5 min-h-[200px]">
            <img
              src={IMAGES.topL}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
          <div className="bento-cell md:col-start-3 md:row-start-1 rounded-3xl overflow-hidden shadow-md ring-1 ring-black/5 min-h-[200px]">
            <img
              src={IMAGES.topR}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
          <div className="bento-cell md:col-span-2 md:col-start-2 md:row-start-2 rounded-3xl overflow-hidden shadow-md ring-1 ring-black/5 min-h-[200px]">
            <img
              src={IMAGES.bottom}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
