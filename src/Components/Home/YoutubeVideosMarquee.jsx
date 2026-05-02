import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion as Motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const RED = "#DC3545";
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const EASE_HOVER = [0.22, 1, 0.36, 1];

const YOUTUBE_PLACEHOLDERS = [
  { href: "https://youtu.be/CaesvPJHK4A?si=zlVIjtyiVl-w3L08", title: "Student Success Highlight 01", meta: "Admissions Insights" },
  { href: "https://youtu.be/WQd3JdweB1s?si=azwzM6Pjon_kPxOQ", title: "Student Success Highlight 02", meta: "Commerce Batch" },
  { href: "https://youtu.be/4L88q7G-s2A?si=rW9fDHnkKccjOGx3", title: "Student Success Highlight 03", meta: "Science Strategy" },
  { href: "https://youtu.be/WPwoU8ibqK8?si=aXRRTzHxfDD2EWG1", title: "Student Success Highlight 04", meta: "Entrance Guidance" },
  { href: "https://youtu.be/DlogLJyvEKk?si=Mh95tOyP9DOpe13U", title: "Student Success Highlight 05", meta: "Student Experience" },
  { href: "https://youtu.be/dclFFwy-aLs?si=OsK9wBFB3BPJt4u7", title: "Student Success Highlight 06", meta: "Result Highlights" },
  { href: "https://youtu.be/AcIG1CnfQrE?si=xnk4BKu_pMhOiB-G", title: "Student Success Highlight 07", meta: "Topper Stories" },
];

function getYoutubeId(url) {
  try {
    const p = new URL(url);
    if (p.hostname.includes("youtu.be")) return p.pathname.replace("/", "");
    if (p.pathname.startsWith("/shorts/")) return p.pathname.split("/")[2] || "";
    return p.searchParams.get("v") || "";
  } catch {
    return "";
  }
}

function getYoutubeThumb(url) {
  const id = getYoutubeId(url);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "";
}

const cardSpring = { type: "spring", stiffness: 280, damping: 32, mass: 0.8 };

function VideoCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <Motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="yt-card"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={{
        rest: { y: 0, scale: 1, transition: cardSpring },
        hover: { y: -10, scale: 1.018, transition: cardSpring },
        tap: { scale: 0.982, transition: { type: "spring", stiffness: 420, damping: 38, mass: 0.6 } },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        textDecoration: "none",
        width: "clamp(270px, 84vw, 360px)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: 20,
          overflow: "hidden",
          border: hovered ? `1px solid ${RED}40` : "1px solid #e5e7eb",
          boxShadow: hovered
            ? `0 24px 56px -12px rgba(220,53,69,0.15), 0 8px 24px -6px rgba(0,0,0,0.06)`
            : "0 2px 12px -2px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)",
          transition: `box-shadow 0.45s ${EASE}, border-color 0.35s ${EASE}`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: 3,
            background: `linear-gradient(90deg, ${RED}, #ff6b7a)`,
            transformOrigin: "left",
            transform: `scaleX(${hovered ? 1 : 0})`,
            transition: `transform 0.45s ${EASE}`,
            zIndex: 10,
          }}
        />

        <div style={{ position: "relative", height: "clamp(176px, 48vw, 200px)", overflow: "hidden" }}>
          {!loaded && (
            <div
              style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(90deg, #f3f4f6 25%, #ebebeb 50%, #f3f4f6 75%)",
                backgroundSize: "300% 100%",
                animation: "shimmer 1.8s ease-in-out infinite",
              }}
            />
          )}

          <Motion.img
            src={getYoutubeThumb(item.href)}
            alt={item.title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            variants={{
              rest: { scale: 1, transition: { duration: 0.55, ease: EASE_HOVER } },
              hover: { scale: 1.07, transition: { duration: 0.55, ease: EASE_HOVER } },
            }}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", display: "block",
              opacity: loaded ? 1 : 0,
              transition: `opacity 0.5s ${EASE}`,
            }}
          />

          <div
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          <Motion.div
            variants={{
              rest: { opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
              hover: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
            }}
            style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(to top, ${RED}25 0%, transparent 55%)`,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute", top: 12, left: 12,
              display: "flex", alignItems: "center", gap: 5,
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.07)",
              borderRadius: 999,
              padding: "4px 10px 4px 8px",
            }}
          >
            <FaYoutube style={{ color: "#FF0000", fontSize: 12 }} />
            <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#111" }}>
              YouTube
            </span>
          </div>

          <div
            style={{
              position: "absolute", top: 12, right: 12,
              background: RED,
              borderRadius: 999,
              padding: "3px 9px",
              fontSize: 9, fontWeight: 800,
              color: "#fff", letterSpacing: "0.1em",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>

          <div
            style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <Motion.div
              variants={{
                rest: { scale: 1, opacity: 0.88, transition: { duration: 0.25, ease: "easeOut" } },
                hover: { scale: 1.14, opacity: 1, transition: { type: "spring", stiffness: 320, damping: 20, mass: 0.7 } },
              }}
              style={{
                width: 52, height: 52,
                borderRadius: "50%",
                background: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 20px rgba(0,0,0,0.22)",
              }}
            >
              <FaPlay style={{ color: RED, fontSize: 15, marginLeft: 2 }} />
            </Motion.div>
          </div>
        </div>

        <div style={{ padding: "clamp(14px, 3.2vw, 18px) clamp(14px, 3.6vw, 20px) clamp(14px, 3.6vw, 20px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}>
            <div
              style={{
                width: 3, height: 11, borderRadius: 2, background: RED, flexShrink: 0,
                transform: `scaleY(${hovered ? 1.3 : 1})`,
                transition: `transform 0.35s ${EASE}`,
                transformOrigin: "bottom",
              }}
            />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#9ca3af" }}>
              {item.meta}
            </span>
          </div>

          <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#111827", lineHeight: 1.45, letterSpacing: "-0.01em" }}>
            {item.title}
          </p>

          <div
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              marginTop: 14, paddingTop: 12,
              borderTop: "1px solid #f3f4f6",
            }}
          >
            <span style={{ fontSize: 11, color: "#d1d5db", fontWeight: 500 }}>YAC Channel</span>
            <Motion.div
              animate={hovered ? { x: 0, opacity: 1 } : { x: -6, opacity: 0 }}
              transition={{ duration: 0.22, ease: EASE_HOVER }}
              style={{ display: "flex", alignItems: "center", gap: 5, color: RED }}
            >
              <span style={{ fontSize: 11, fontWeight: 700 }}>Watch now</span>
              <FaExternalLinkAlt style={{ fontSize: 9 }} />
            </Motion.div>
          </div>
        </div>
      </div>
    </Motion.a>
  );
}

export default function YoutubeVideosMarquee() {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Entrance fade — keeps the section feeling alive without scroll-tied pinning
  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".yt-card", {
        y: 28,
        opacity: 0,
        duration: 0.62,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 82%", once: true },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  // Auto-scrolling marquee — uses one duplicated track so it loops seamlessly
  useEffect(() => {
    if (reduceMotion) return;
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const start = () => {
      const halfWidth = track.scrollWidth / 2;
      if (halfWidth <= 0) {
        raf = requestAnimationFrame(start);
        return;
      }
      tweenRef.current?.kill();
      gsap.set(track, { x: 0 });
      tweenRef.current = gsap.to(track, {
        x: -halfWidth,
        duration: halfWidth / 55, // ~55px/s — calm, predictable speed
        ease: "none",
        repeat: -1,
      });
    };

    raf = requestAnimationFrame(start);

    const onResize = () => start();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      tweenRef.current?.kill();
      tweenRef.current = null;
      window.removeEventListener("resize", onResize);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!tweenRef.current) return;
    if (paused) tweenRef.current.timeScale(0.15);
    else tweenRef.current.timeScale(1);
  }, [paused]);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: EASE_HOVER },
  });

  // Duplicate the cards once so the marquee can loop seamlessly
  const loopItems = [...YOUTUBE_PLACEHOLDERS, ...YOUTUBE_PLACEHOLDERS];

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .yt-marquee-viewport {
          position: relative;
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        .yt-track {
          display: flex;
          flex-wrap: nowrap;
          gap: clamp(14px, 2vw, 22px);
          width: max-content;
          will-change: transform;
        }
        @media (max-width: 639px) {
          .yt-marquee-viewport {
            overflow-x: auto;
            overflow-y: visible;
            mask-image: none;
            -webkit-mask-image: none;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            padding-bottom: 6px;
          }
          .yt-marquee-viewport::-webkit-scrollbar { display: none; }
          .yt-track {
            transform: none !important;
            animation: none !important;
          }
          .yt-track > .yt-card { scroll-snap-align: center; }
        }
      `}</style>

      <section
        ref={rootRef}
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#ffffff",
          paddingTop: "clamp(3.5rem, 6vw, 5.5rem)",
          paddingBottom: "clamp(3.5rem, 6vw, 5.5rem)",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: "40%",
            background: `linear-gradient(180deg, ${RED}07 0%, transparent 100%)`,
            pointerEvents: "none",
          }}
        />

        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, #00000010 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 65% 45% at 50% 0%, black 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 65% 45% at 50% 0%, black 20%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Header */}
        <div
          style={{
            position: "relative", zIndex: 2,
            maxWidth: 900, margin: "0 auto",
            padding: "0 1.5rem",
            textAlign: "center",
            marginBottom: "clamp(2rem, 4vw, 3.5rem)",
          }}
        >
          <Motion.div
            {...fadeUp(0)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: `${RED}0d`,
              border: `1px solid ${RED}26`,
              borderRadius: 999,
              padding: "5px 14px",
              marginBottom: 18,
            }}
          >
            <FaYoutube style={{ color: "#FF0000", fontSize: 12 }} />
            <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: RED }}>
              YouTube Highlights
            </span>
          </Motion.div>

          <Motion.h2
            {...fadeUp(0.06)}
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800, letterSpacing: "-0.03em",
              lineHeight: 1.1, color: "#0f172a",
              margin: "0 0 14px",
            }}
          >
            <span style={{ color: RED, position: "relative", display: "inline-block" }}>
              YAC
              <Motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.38, ease: EASE_HOVER }}
                style={{
                  position: "absolute",
                  bottom: -3, left: 0, right: 0,
                  height: 3, background: RED,
                  borderRadius: 2,
                  transformOrigin: "left center",
                  opacity: 0.45,
                }}
              />
            </span>
            {" "}YouTube Highlights
          </Motion.h2>

          <Motion.p
            {...fadeUp(0.12)}
            style={{
              fontSize: "clamp(0.875rem, 2vw, 0.975rem)",
              color: "#6b7280", maxWidth: 480, margin: "0 auto", lineHeight: 1.7,
            }}
          >
            Top lectures, topper moments, and exam-focused guidance from the YAC channel.
          </Motion.p>

          <Motion.div
            {...fadeUp(0.18)}
            style={{
              display: "flex", justifyContent: "center", alignItems: "center",
              gap: "clamp(1.5rem, 4vw, 3rem)",
              marginTop: 28, paddingTop: 24,
              borderTop: "1px solid #f3f4f6",
              flexWrap: "wrap",
            }}
          >
            {[
              { val: "1000+", label: "Videos" },
              { val: "105K+", label: "Subscribers" },
              { val: "5M+", label: "Views" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <p style={{ fontSize: "clamp(1.25rem,3vw,1.75rem)", fontWeight: 800, color: RED, margin: 0, letterSpacing: "-0.02em" }}>
                  {s.val}
                </p>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9ca3af", margin: "3px 0 0" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </Motion.div>
        </div>

        {/* Marquee */}
        <div
          className="yt-marquee-viewport"
          style={{ paddingTop: 12, paddingBottom: 24 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="yt-track"
            style={{
              paddingLeft: "clamp(16px, 4vw, 48px)",
              paddingRight: "clamp(16px, 4vw, 48px)",
              paddingTop: 16,
              paddingBottom: 24,
            }}
          >
            {loopItems.map((item, idx) => (
              <VideoCard
                key={`${item.href}-${idx}`}
                item={item}
                index={idx % YOUTUBE_PLACEHOLDERS.length}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
