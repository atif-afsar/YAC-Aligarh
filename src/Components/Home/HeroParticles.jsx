import { useEffect, useRef } from "react";

const RED = "rgba(220, 53, 69,";
const DPR_CAP = 2;

function makeParticles(w, h, count) {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 0.7 + Math.random() * 1.8,
      phase: Math.random() * Math.PI * 2,
    });
  }
  return out;
}

/**
 * Subtle red dots: Brownian drift + soft repel from pointer (expects hero-local coords in pointerRef).
 */
export default function HeroParticles({ sectionRef, pointerRef, reduced }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef(null);
  const rafRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    const section = sectionRef?.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = section.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width));
      const h = Math.max(1, Math.floor(rect.height));
      const dpr = Math.min(DPR_CAP, window.devicePixelRatio || 1);
      sizeRef.current = { w, h, dpr };
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Denser field: more dots on large screens, capped for perf
      const n = Math.min(180, Math.max(56, Math.floor((w * h) / 9500)));
      particlesRef.current = makeParticles(w, h, n);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(section);

    const step = () => {
      const { w, h } = sizeRef.current;
      const P = particlesRef.current;
      if (!P || w < 1) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      const ptr = pointerRef.current;
      const px = ptr?.active ? ptr.x : -9999;
      const py = ptr?.active ? ptr.y : -9999;
      const repelR = 110;
      const repelG = 0.85;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        p.phase += 0.012 + Math.random() * 0.008;
        p.vx += (Math.random() - 0.5) * 0.08;
        p.vy += (Math.random() - 0.5) * 0.08;
        p.vx += Math.sin(p.phase) * 0.02;
        p.vy += Math.cos(p.phase * 0.8) * 0.02;

        if (ptr?.active) {
          let dx = p.x - px;
          let dy = p.y - py;
          const dist = Math.hypot(dx, dy) + 0.0001;
          if (dist < repelR) {
            const push = ((repelR - dist) / repelR) * repelG;
            p.vx += (dx / dist) * push;
            p.vy += (dy / dist) * push;
          }
        }

        p.vx *= 0.985;
        p.vy *= 0.985;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;
        if (p.y < -4) p.y = h + 4;
        if (p.y > h + 4) p.y = -4;

        const alpha = 0.28 + (p.r / 2.5) * 0.45;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${RED} ${alpha})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [sectionRef, pointerRef, reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[2] h-full w-full"
      aria-hidden
    />
  );
}
