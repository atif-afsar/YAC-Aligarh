import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext(null);

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Lenis + GSAP ScrollTrigger — same pattern as https://github.com/darkroomengineering/lenis#gsap-scrolltrigger
 * Avoid extra tween scrub smoothing on ScrollTriggers here; Lenis already eases wheel scroll.
 */
export function SmoothScrollProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const instance = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      infinite: false,
      stopInertiaOnNavigate: true,
    });

    setLenis(instance);

    const unsubScroll = instance.on("scroll", ScrollTrigger.update);

    const onTick = (time) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize, { passive: true });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(onTick);
      unsubScroll();
      instance.destroy();
      setLenis(null);
      ScrollTrigger.refresh();
    };
  }, []);

  const value = useMemo(() => lenis, [lenis]);

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
