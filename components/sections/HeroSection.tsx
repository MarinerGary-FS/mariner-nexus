"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────
   Nexus Mark — SVG brand symbol
   A precision-engineered compass/node system suggesting connectivity,
   direction, and systems intelligence.
───────────────────────────────────────────────────────────────── */
function NexusMark({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer dashed ring — slowly rotates */}
      <motion.circle
        cx="60" cy="60" r="56"
        stroke="rgba(77,163,255,0.15)"
        strokeWidth="0.75"
        strokeDasharray="6 5"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "60px 60px" }}
      />

      {/* Primary ring */}
      <circle cx="60" cy="60" r="44" stroke="rgba(77,163,255,0.12)" strokeWidth="0.75" />

      {/* Inner ring */}
      <circle cx="60" cy="60" r="28" stroke="rgba(77,163,255,0.18)" strokeWidth="0.75" />

      {/* Cardinal axes */}
      <line x1="60" y1="4"  x2="60" y2="31" stroke="rgba(77,163,255,0.35)" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="60" y1="89" x2="60" y2="116" stroke="rgba(77,163,255,0.35)" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="4"  y1="60" x2="31" y2="60" stroke="rgba(77,163,255,0.35)" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="89" y1="60" x2="116" y2="60" stroke="rgba(77,163,255,0.35)" strokeWidth="0.75" strokeLinecap="round" />

      {/* Diagonal spurs */}
      <line x1="28" y1="28" x2="40" y2="40" stroke="rgba(77,163,255,0.15)" strokeWidth="0.5" strokeLinecap="round" />
      <line x1="92" y1="28" x2="80" y2="40" stroke="rgba(77,163,255,0.15)" strokeWidth="0.5" strokeLinecap="round" />
      <line x1="28" y1="92" x2="40" y2="80" stroke="rgba(77,163,255,0.15)" strokeWidth="0.5" strokeLinecap="round" />
      <line x1="92" y1="92" x2="80" y2="80" stroke="rgba(77,163,255,0.15)" strokeWidth="0.5" strokeLinecap="round" />

      {/* Cardinal node dots */}
      <motion.circle cx="60" cy="16" r="2.5" fill="#4DA3FF" opacity="0.7"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
      />
      <motion.circle cx="60" cy="104" r="2.5" fill="#4DA3FF" opacity="0.7"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.75 }}
      />
      <motion.circle cx="16" cy="60" r="2.5" fill="#4DA3FF" opacity="0.7"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      />
      <motion.circle cx="104" cy="60" r="2.5" fill="#4DA3FF" opacity="0.7"
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2.25 }}
      />

      {/* Inner ring intersection nodes */}
      <circle cx="60" cy="32" r="1.5" fill="rgba(125,211,252,0.5)" />
      <circle cx="60" cy="88" r="1.5" fill="rgba(125,211,252,0.5)" />
      <circle cx="32" cy="60" r="1.5" fill="rgba(125,211,252,0.5)" />
      <circle cx="88" cy="60" r="1.5" fill="rgba(125,211,252,0.5)" />

      {/* Center system — pulsing core */}
      <motion.circle
        cx="60" cy="60" r="14"
        stroke="rgba(77,163,255,0.2)"
        strokeWidth="0.75"
        fill="rgba(37,99,235,0.08)"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <motion.circle
        cx="60" cy="60" r="6"
        fill="rgba(77,163,255,0.9)"
        animate={{ opacity: [0.7, 1, 0.7], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <circle cx="60" cy="60" r="2.5" fill="white" opacity="0.9" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Headline — line-by-line clip reveal
───────────────────────────────────────────────────────────────── */
function HeroHeadline() {
  return (
    <div className="overflow-hidden">
      <div className="overflow-hidden mb-1">
        <motion.h1
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.8rem,7vw,6rem)] md:text-[clamp(3.5rem,7vw,6.5rem)] font-bold text-white leading-[1.0] tracking-[-0.03em] block"
        >
          Where Intelligence
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.85, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.8rem,7vw,6rem)] md:text-[clamp(3.5rem,7vw,6.5rem)] font-bold leading-[1.0] tracking-[-0.03em] block text-gradient"
        >
          Meets Execution
        </motion.h1>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Main hero component
───────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  // Parallax transforms — different depths for each layer
  const markX = useTransform(springX, [0, 1], [-10, 10]);
  const markY = useTransform(springY, [0, 1], [-10, 10]);
  const glowX = useTransform(springX, [0, 1], [-30, 30]);
  const glowY = useTransform(springY, [0, 1], [-30, 30]);
  const gridX = useTransform(springX, [0, 1], [-6, 6]);
  const gridY = useTransform(springY, [0, 1], [-6, 6]);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black noise-overlay"
    >
      {/* ── Layer 1: Grid — shifts subtly with mouse ── */}
      <motion.div
        className="absolute inset-0 grid-pattern opacity-100"
        style={mounted ? { x: gridX, y: gridY } : {}}
      />

      {/* ── Layer 2: Deep radial depth atmosphere ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-20%,rgba(37,99,235,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_110%,rgba(37,99,235,0.06),transparent_60%)]" />

      {/* ── Layer 3: Cursor-tracking glow orb ── */}
      {mounted && (
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(77,163,255,0.04) 45%, transparent 70%)",
            left: "50%",
            top: "50%",
            x: glowX,
            y: glowY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}

      {/* ── Layer 4: Horizon scan line (load event) ── */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "center" }}
        className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
      >
        <div className="h-full bg-gradient-to-r from-transparent via-glow-blue/20 to-transparent" />
      </motion.div>

      {/* ── Layer 5: Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 container-tight pt-20 md:pt-24 flex flex-col items-center text-center">

        {/* Brand mark */}
        <motion.div
          style={mounted ? { x: markX, y: markY } : {}}
          className="mb-10 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Outer atmospheric glow */}
            <div className="absolute inset-0 rounded-full bg-nexus-blue/8 blur-3xl scale-150 pointer-events-none" />
            <div className="absolute inset-0 rounded-full bg-glow-blue/4 blur-2xl scale-125 pointer-events-none" />

            <NexusMark size={112} />
          </motion.div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7"
        >
          <span className="inline-flex items-center gap-2.5 eyebrow border border-glow-blue/12 rounded-full px-4 py-1.5 bg-nexus-blue/5">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-glow-blue"
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            AI-Powered Business Systems
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-7">
          <HeroHeadline />
        </div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[0.9375rem] md:text-base text-white/45 max-w-[520px] leading-[1.7] mb-11"
        >
          We design AI-powered systems, premium web experiences, and automation
          infrastructure that help modern businesses operate smarter, convert
          better, and scale with clarity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.92, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-nexus-blue hover:bg-[#1d4ed8] text-white text-sm font-semibold transition-all duration-200 glow-ring"
            >
              Book a Strategy Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white/55 hover:text-white/85 text-sm font-medium transition-colors duration-200"
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
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
            <div className="w-px h-3 bg-gradient-to-b from-white/10 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
