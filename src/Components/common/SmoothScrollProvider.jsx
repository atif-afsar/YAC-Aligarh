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

function shouldEnableLenis() {
  if (typeof window === "undefined") return false;
  if (prefersReducedMotion()) return false;
  return true;
}

/**
 * Lenis everywhere except reduced-motion (accessibility).
 * - Desktop (fine pointer): wheel smoothing, native-friendly touch off for nested scrollers.
 * - Mobile / coarse pointer: syncTouch for vertical smooth scroll; allowNestedScroll +
 *   data-lenis-prevent-* on horizontal strips stops Lenis from stealing sideways swipes.
 */
function buildLenisOptions() {
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.matchMedia("(max-width: 768px)").matches;
  const touchPrimary = coarse || narrow;

  return {
    // Keep desktop responsive while letting mobile feel fluid.
    lerp: touchPrimary ? 0.1 : 0.085,
    smoothWheel: true,
    syncTouch: touchPrimary,
    ...(touchPrimary
      ? {
          syncTouchLerp: 0.16,
          touchMultiplier: 1,
          touchInertiaExponent: 1.7,
        }
      : {}),
    wheelMultiplier: 1,
    gestureOrientation: "vertical",
    autoResize: true,
    infinite: false,
    stopInertiaOnNavigate: true,
    overscroll: true,
    anchors: true,
    autoRaf: true,
    allowNestedScroll: true,
  };
}

/**
 * Coalesce ScrollTrigger updates to at most once per animation frame.
 * Lenis can emit several scroll callbacks per frame during wheel smoothing;
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
 * Lenis + GSAP ScrollTrigger. Reduced-motion users get no Lenis (accessibility).
 */
export function SmoothScrollProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    if (!shouldEnableLenis()) return undefined;

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
