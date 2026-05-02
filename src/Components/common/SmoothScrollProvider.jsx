import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext(null);

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Site-wide smooth scrolling (Lenis) synced with GSAP ScrollTrigger.
 * Tuned for moderate smoothing — lower lerp / wheel multiplier avoids heavy “floaty” lag.
 * Touch keeps native momentum (smoothTouch: false) for snappier mobile feel.
 */
export function SmoothScrollProvider({ children }) {
  const [lenis, setLenis] = useState(null);
  const resizeCleanupRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const instance = new Lenis({
      // Lower lerp = closer to native, less rubber-banding (try 0.06–0.12)
      lerp: 0.078,
      smoothWheel: true,
      // syncTouch off = native touch scroll on mobile (less lag than smoothed touch)
      syncTouch: false,
      wheelMultiplier: 0.82,
      touchMultiplier: 1,
      infinite: false,
      stopInertiaOnNavigate: true,
    });

    setLenis(instance);

    const onScroll = () => ScrollTrigger.update();
    const unsubScroll = instance.on("scroll", onScroll);

    const tickerFn = (time) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize, { passive: true });
    resizeCleanupRef.current = () =>
      window.removeEventListener("resize", onResize);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      resizeCleanupRef.current?.();
      resizeCleanupRef.current = null;
      gsap.ticker.remove(tickerFn);
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

/** Active Lenis instance, or null if reduced motion / not ready */
export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
