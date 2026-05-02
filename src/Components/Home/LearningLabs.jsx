import { memo, useLayoutEffect, useRef } from "react";
import OptimizedPicture from "../common/OptimizedPicture";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Local assets from `public/grid` (JPEG for broad browser support). */
const IMAGES = {
  main: "/grid/IMG_4828.jpg",
  topL: "/grid/IMG_4822.jpg",
  topR: "/grid/IMG_4823.jpg",
  bottom: "/grid/IMG_4829.jpg",
};

function LearningLabs() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-cell", {
        opacity: 0,
        y: 22,
        duration: 0.58,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 78%",
          once: true,
          toggleActions: "play none none none",
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
            <OptimizedPicture
              src={IMAGES.main}
              alt="YAC learning lab — classroom space"
              sizes="(max-width:768px) 100vw, 33vw"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 motion-reduce:transition-none motion-reduce:hover:scale-100 hover:scale-[1.03]"
            />
          </div>
          <div className="bento-cell md:col-start-2 md:row-start-1 rounded-3xl overflow-hidden shadow-md ring-1 ring-black/5 min-h-[200px]">
            <OptimizedPicture
              src={IMAGES.topL}
              alt="Students in a YAC learning zone"
              sizes="(max-width:768px) 100vw, 33vw"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 motion-reduce:hover:scale-100 hover:scale-[1.03]"
            />
          </div>
          <div className="bento-cell md:col-start-3 md:row-start-1 rounded-3xl overflow-hidden shadow-md ring-1 ring-black/5 min-h-[200px]">
            <OptimizedPicture
              src={IMAGES.topR}
              alt="YAC institute learning environment"
              sizes="(max-width:768px) 100vw, 33vw"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 motion-reduce:hover:scale-100 hover:scale-[1.03]"
            />
          </div>
          <div className="bento-cell md:col-span-2 md:col-start-2 md:row-start-2 rounded-3xl overflow-hidden shadow-md ring-1 ring-black/5 min-h-[200px]">
            <OptimizedPicture
              src={IMAGES.bottom}
              alt="Inside YAC — labs and practice areas"
              sizes="(max-width:768px) 100vw, 66vw"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 motion-reduce:hover:scale-100 hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(LearningLabs);
