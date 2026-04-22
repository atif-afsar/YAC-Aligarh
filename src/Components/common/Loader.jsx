import React from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const RED = "#DC3545";
const LETTERS = ["Y", "A", "C"];

// High-end Bezier curve (Expo ease)
const LUXE_EASE = [0.16, 1, 0.3, 1];

const letterVariants = {
  hidden: { y: 60, opacity: 0, filter: "blur(10px)", scale: 0.8 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 1.2,
      ease: LUXE_EASE,
    },
  }),
};

export default function UltraPremiumLoader({ isLoaded }) {
  return (
    <AnimatePresence>
      {!isLoaded && (
        <Motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 1, ease: LUXE_EASE, delay: 0.2 } 
          }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-white overflow-hidden"
        >
          {/* 1. Ambient Mesh Background - Very Subtle */}
          <div className="absolute inset-0 z-0">
            <Motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
                x: [0, 20, 0] 
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-red-50/40 rounded-full blur-[120px]" 
            />
            <Motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -5, 0],
                x: [0, -30, 0] 
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-red-50/30 rounded-full blur-[150px]" 
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* 2. Large Hero Initials */}
            <div className="flex items-center justify-center gap-1 md:gap-4 overflow-hidden">
              {LETTERS.map((letter, i) => (
                <Motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-8xl md:text-[10rem] font-black tracking-[-0.05em] text-gray-900 select-none leading-none"
                >
                  {letter}
                </Motion.span>
              ))}
            </div>

            {/* 3. The Animated Underline (Variable Width Feel) */}
            <div className="relative w-[300px] md:w-[400px] h-4 mt-2">
              <svg width="100%" height="100%" viewBox="0 0 400 20" fill="none" preserveAspectRatio="none">
                <Motion.path
                  d="M10 10C60 10 340 10 390 10"
                  stroke={RED}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1.5, ease: LUXE_EASE }}
                />
              </svg>
            </div>

            {/* 4. Luxury Branding Reveal */}
            <div className="flex flex-col items-center mt-8 text-center px-6">
              <Motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: LUXE_EASE }}
                className="text-xl md:text-2xl font-bold text-gray-800 tracking-[0.2em] uppercase"
              >
                Yasir Ali Classes
              </Motion.h2>

              {/* 5. Masked Tagline with highlighting */}
              <div className="relative mt-4 overflow-hidden">
                <Motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.5, duration: 1, ease: LUXE_EASE }}
                  className="text-xs md:text-sm font-medium text-gray-400 tracking-[0.1em] uppercase"
                >
                  We <span className="text-red-500 font-bold">Debit</span> Efforts, 
                  to <span className="text-red-500 font-bold">Credit</span> Your Success
                </Motion.p>
              </div>
            </div>

            {/* 6. Subtle Interactive Progress Element */}
            <Motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="mt-16 flex items-center gap-4 text-[10px] font-bold text-gray-300 tracking-[0.3em] uppercase"
            >
              <div className="h-[1px] w-8 bg-gray-200" />
              <span>Establishing Excellence</span>
              <div className="h-[1px] w-8 bg-gray-200" />
            </Motion.div>
          </div>

          {/* 7. Screen Wipe (The Exit Detail) */}
          <Motion.div 
            initial={{ scaleY: 0 }}
            exit={{ 
              scaleY: 1, 
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="absolute inset-0 bg-red-600 origin-bottom z-[310] pointer-events-none"
          />
        </Motion.div>
      )}
    </AnimatePresence>
  );
}