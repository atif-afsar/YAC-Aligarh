import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-6">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT – STORY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div>
             <img src="https://www.yasiraliclasses.in/assets/images/yac/yac-photo-copy-1.png" alt="Our Story"
             className=" lg:mx-0 w-50 h-50 " />

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                Built on Passion,
                <span className="text-[#DC3545] block sm:inline">
                  {" "}Driven by Results
                </span>
              </h2>

              <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                From a small beginning to a trusted name in education, our story
                is built on clarity, consistency, and genuine student success.
              </p>
            </div>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              We believe learning should be empowering. Over the years, we’ve
              helped students build confidence, discipline, and excellence
              through focused mentorship.
            </p>

            <div className="grid gap-5 sm:grid-cols-2 max-w-xl mx-auto lg:mx-0">
              {[
                "Concept Clarity",
                "Personal Mentorship",
                "Consistent Results",
                "Future Focused Learning",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT – IMAGES (MOBILE FIXED) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* MOBILE: single column | DESKTOP: masonry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

              <motion.img
                src="https://www.yasiraliclasses.in/assets/images/sliders/unnamed.webp"
                alt="Teaching Session"
                className="rounded-xl object-cover h-44 sm:h-52 w-full shadow-md"
                whileHover={{ scale: 1.03 }}
              />

              <motion.img
                src="https://www.yasiraliclasses.in/assets/images/sliders/slider-2.webp"
                alt="Students Studying"
                className="rounded-xl object-cover h-44 sm:h-64 w-full shadow-md"
                whileHover={{ scale: 1.03 }}
              />

              <motion.img
                src="https://www.yasiraliclasses.in/assets/images/sliders/slider-4.webp"
                alt="Mentorship"
                className="rounded-xl object-cover h-44 sm:h-64 w-full shadow-md"
                whileHover={{ scale: 1.03 }}
              />

              <motion.img
                src="https://www.yasiraliclasses.in/assets/images/sliders/slider-3.webp"
                alt="Doubt Solving"
                className="rounded-xl object-cover h-44 sm:h-52 w-full shadow-md"
                whileHover={{ scale: 1.03 }}
              />

            </div>

            {/* RED BACKDROP (REDUCED ON MOBILE) */}
            <div className="absolute -z-10 right-0 top-24 w-40 h-40 sm:w-56 sm:h-56 bg-[#DC3545]/10 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
