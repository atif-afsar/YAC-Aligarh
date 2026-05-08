import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const SmoothScrollContext = createContext(null);

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Lenis tuning: smoother lerp feels nicer but runs more virtual-scroll
 * interpolation frames. On touch / low-memory devices we use higher lerp so
 * the scroll target catches up faster → fewer active frames → better battery
 * and scroll-linked animation cost.
 */
function buildLenisOptions() {
  const coarse =
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(hover: none)").matches;

  const narrow = window.matchMedia("(max-width: 768px)").matches;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mem = navigator.deviceMemory;
  const lowMem = typeof mem === "number" && mem > 0 && mem <= 4;

  const lite = coarse || narrow || lowMem;

  return {
    // Desktop: smooth; mobile/low-end: snappier (less main-thread smoothing).
    lerp: lowMem ? 0.22 : lite ? 0.17 : 0.12,
    smoothWheel: true,
    // Smooth touch on phones/tablets; syncTouchLerp tuned higher on lite
    // devices so virtual scroll catches up faster (fewer expensive frames).
    syncTouch: true,
    syncTouchLerp: lite ? 0.12 : 0.075,
    wheelMultiplier: 1,
    touchMultiplier: lite ? 0.92 : 1,
    infinite: false,
    stopInertiaOnNavigate: true,
    // Driven by gsap.ticker below — avoids Lenis running a second RAF loop.
    autoRaf: false,
  };
}

/**
 * Coalesce ScrollTrigger updates to at most once per animation frame.
 * Lenis can emit several scroll callbacks per frame when syncTouch is on;
 * batching keeps GSAP work predictable without changing visual behavior.
 */
function createScrollTriggerBatcher(ScrollTrigger) {
  let rafId = 0;
  return function batchedScrollTriggerUpdate() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = 0;
      ScrollTrigger.update();
    });
  };
}

/**
 * Lenis + GSAP ScrollTrigger. Enabled on all devices except reduced-motion
 * (accessibility). Dynamic import keeps initial JS smaller; init is deferred
 * to after first paint so LCP is not blocked.
 */
export function SmoothScrollProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let cancelled = false;
    let cleanup = null;

    const start = () => {
      if (cancelled) return;
      void (async () => {
        const [{ default: Lenis }, gsapMod, scrollTriggerMod] =
          await Promise.all([
            import("lenis"),
            import("gsap"),
            import("gsap/ScrollTrigger"),
            import("lenis/dist/lenis.css"),
          ]);
        if (cancelled) return;

        const gsap = gsapMod.default || gsapMod;
        const { ScrollTrigger } = scrollTriggerMod;
        gsap.registerPlugin(ScrollTrigger);

        const instance = new Lenis(buildLenisOptions());

        setLenis(instance);

        const batchUpdate = createScrollTriggerBatcher(ScrollTrigger);
        const unsubScroll = instance.on("scroll", batchUpdate);

        const onTick = (time) => {
          instance.raf(time * 1000);
        };
        gsap.ticker.add(onTick);
        gsap.ticker.lagSmoothing(0);

        const onResize = () => {
          batchUpdate();
          ScrollTrigger.refresh();
        };
        window.addEventListener("resize", onResize, { passive: true });

        requestAnimationFrame(() => {
          batchUpdate();
          ScrollTrigger.refresh();
        });

        cleanup = () => {
          window.removeEventListener("resize", onResize);
          gsap.ticker.remove(onTick);
          unsubScroll();
          instance.destroy();
          setLenis(null);
          ScrollTrigger.refresh();
        };
      })();
    };

    // After first paint: one rAF frame so we don't compete with LCP, then start.
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(start);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(id);
      if (cleanup) cleanup();
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
