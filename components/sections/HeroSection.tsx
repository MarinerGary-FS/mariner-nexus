"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────
   Nexus Mark — precision SVG compass/node system
───────────────────────────────────────────────────────────────── */
function NexusMark({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {/* Outermost dashed ring — slow rotation */}
      <motion.circle
        cx="60" cy="60" r="56"
        stroke="rgba(77,163,255,0.12)"
        strokeWidth="0.75"
        strokeDasharray="6 5"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "60px 60px" }}
      />

      {/* Counter-rotating inner dashed ring */}
      <motion.circle
        cx="60" cy="60" r="44"
        stroke="rgba(77,163,255,0.08)"
        strokeWidth="0.5"
        strokeDasharray="3 8"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "60px 60px" }}
      />

      {/* Primary solid ring */}
      <circle cx="60" cy="60" r="36" stroke="rgba(77,163,255,0.14)" strokeWidth="0.75" />

      {/* Inner ring */}
      <circle cx="60" cy="60" r="22" stroke="rgba(77,163,255,0.18)" strokeWidth="0.75" />

      {/* Cardinal axis lines */}
      <line x1="60" y1="2"  x2="60" y2="37" stroke="rgba(77,163,255,0.3)" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="60" y1="83" x2="60" y2="118" stroke="rgba(77,163,255,0.3)" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="2"  y1="60" x2="37" y2="60" stroke="rgba(77,163,255,0.3)" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="83" y1="60" x2="118" y2="60" stroke="rgba(77,163,255,0.3)" strokeWidth="0.75" strokeLinecap="round" />

      {/* Diagonal spurs at 45° */}
      <line x1="30" y1="30" x2="42" y2="42" stroke="rgba(77,163,255,0.12)" strokeWidth="0.5" strokeLinecap="round" />
      <line x1="90" y1="30" x2="78" y2="42" stroke="rgba(77,163,255,0.12)" strokeWidth="0.5" strokeLinecap="round" />
      <line x1="30" y1="90" x2="42" y2="78" stroke="rgba(77,163,255,0.12)" strokeWidth="0.5" strokeLinecap="round" />
      <line x1="90" y1="90" x2="78" y2="78" stroke="rgba(77,163,255,0.12)" strokeWidth="0.5" strokeLinecap="round" />

      {/* Cardinal node dots — sequentially pulse */}
      {[
        { cx: 60, cy: 13, delay: 0 },
        { cx: 107, cy: 60, delay: 0.8 },
        { cx: 60, cy: 107, delay: 1.6 },
        { cx: 13, cy: 60, delay: 2.4 },
      ].map(({ cx, cy, delay }) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx} cy={cy} r="2.5"
          fill="#4DA3FF"
          animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.9, 1.15, 0.9] }}
          transition={{ duration: 3.2, repeat: Infinity, delay, ease: "easeInOut" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}

      {/* Mid-ring intersection nodes */}
      <circle cx="60" cy="24" r="1.5" fill="rgba(125,211,252,0.45)" />
      <circle cx="60" cy="96" r="1.5" fill="rgba(125,211,252,0.45)" />
      <circle cx="24" cy="60" r="1.5" fill="rgba(125,211,252,0.45)" />
      <circle cx="96" cy="60" r="1.5" fill="rgba(125,211,252,0.45)" />

      {/* Center system */}
      <motion.circle
        cx="60" cy="60" r="12"
        stroke="rgba(77,163,255,0.22)"
        strokeWidth="0.75"
        fill="rgba(37,99,235,0.1)"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <motion.circle
        cx="60" cy="60" r="5.5"
        fill="rgba(77,163,255,0.85)"
        animate={{ opacity: [0.65, 1, 0.65], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <circle cx="60" cy="60" r="2.5" fill="white" opacity="0.95" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Floating particle — ambient depth layer
───────────────────────────────────────────────────────────────── */
function AmbientParticle({
  x, y, size, delay, duration
}: { x: string; y: string; size: number; delay: number; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x, top: y,
        width: size, height: size,
        background: "radial-gradient(circle, rgba(77,163,255,0.6) 0%, transparent 70%)",
      }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0.5, 1, 0.5],
        y: [0, -20, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────
   Headline — clip-reveal per line
───────────────────────────────────────────────────────────────── */
function HeroHeadline() {
  return (
    <div>
      <div className="overflow-hidden mb-1">
        <motion.h1
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.75rem,7.5vw,6.25rem)] font-bold text-white leading-[1.0] tracking-[-0.035em] block"
        >
          Where Intelligence
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.75rem,7.5vw,6.25rem)] font-bold leading-[1.0] tracking-[-0.035em] block text-gradient"
        >
          Meets Execution
        </motion.h1>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Main
───────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 35, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 28 });

  // Three distinct parallax depths
  const markX  = useTransform(springX, [0, 1], [-12, 12]);
  const markY  = useTransform(springY, [0, 1], [-12, 12]);
  const glowX  = useTransform(springX, [0, 1], [-40, 40]);
  const glowY  = useTransform(springY, [0, 1], [-40, 40]);
  const gridX  = useTransform(springX, [0, 1], [-8, 8]);
  const gridY  = useTransform(springY, [0, 1], [-8, 8]);
  const textX  = useTransform(springX, [0, 1], [-3, 3]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth);
      mouseY.set(e.clientY / innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* ── L1: Subtle noise grain ── */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── L2: Grid — parallax slow ── */}
      <motion.div
        className="absolute inset-0 grid-pattern"
        style={mounted ? { x: gridX, y: gridY } : {}}
      />

      {/* ── L3: Radial depth atmosphere — top ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_70%_at_50%_-15%,rgba(37,99,235,0.11),transparent_55%)]" />

      {/* ── L4: Radial depth atmosphere — bottom vignette ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(37,99,235,0.06),transparent_55%)]" />

      {/* ── L5: Cursor glow orb — fastest parallax ── */}
      {mounted && (
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(77,163,255,0.03) 40%, transparent 65%)",
            left: "50%", top: "50%",
            x: glowX, y: glowY,
            translateX: "-50%", translateY: "-50%",
          }}
        />
      )}

      {/* ── L6: Ambient particles ── */}
      {mounted && (
        <>
          <AmbientParticle x="18%" y="30%" size={3} delay={0}   duration={6} />
          <AmbientParticle x="78%" y="22%" size={2} delay={1.5} duration={7} />
          <AmbientParticle x="85%" y="65%" size={3} delay={3}   duration={8} />
          <AmbientParticle x="12%" y="72%" size={2} delay={4.5} duration={6.5} />
          <AmbientParticle x="52%" y="15%" size={2} delay={2}   duration={9} />
          <AmbientParticle x="35%" y="85%" size={2} delay={5.5} duration={7.5} />
        </>
      )}

      {/* ── L7: Horizon scan line ── */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "center" }}
        className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
      >
        <div className="h-full bg-gradient-to-r from-transparent via-glow-blue/15 to-transparent" />
      </motion.div>

      {/* ── L8: Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* ── Content ── */}
      <div className="relative z-20 container-tight pt-20 md:pt-24 flex flex-col items-center text-center">

        {/* Brand mark — parallax mid-depth */}
        <motion.div
          style={mounted ? { x: markX, y: markY } : {}}
          className="mb-10 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.65 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Layered glow halos */}
            <div className="absolute inset-0 rounded-full blur-3xl scale-[2.2] bg-nexus-blue/6 pointer-events-none" />
            <div className="absolute inset-0 rounded-full blur-2xl scale-[1.6] bg-glow-blue/4 pointer-events-none" />
            <NexusMark size={108} />
          </motion.div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7"
        >
          <span className="inline-flex items-center gap-2.5 eyebrow border border-glow-blue/12 rounded-full px-4 py-1.5 bg-nexus-blue/5">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-glow-blue"
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.15, 0.9] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
            AI-Powered Business Systems
          </span>
        </motion.div>

        {/* Headline — slight text parallax */}
        <motion.div
          style={mounted ? { x: textX } : {}}
          className="mb-7"
        >
          <HeroHeadline />
        </motion.div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
          className="text-[0.9375rem] md:text-[1rem] text-white/42 max-w-[500px] leading-[1.75] mb-11"
        >
          We design AI-powered systems, premium web experiences, and automation
          infrastructure that help modern businesses operate smarter, convert
          better, and scale with clarity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.96, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
        >
          <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.975 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-nexus-blue hover:bg-[#1d4ed8] text-white text-[0.875rem] font-semibold transition-all duration-200 glow-ring"
            >
              Book a Strategy Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white/45 hover:text-white/80 text-[0.875rem] font-medium transition-colors duration-200"
            >
              View Case Studies
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-7 bg-gradient-to-b from-white/18 to-transparent" />
            <div className="w-px h-4 bg-gradient-to-b from-white/8 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
