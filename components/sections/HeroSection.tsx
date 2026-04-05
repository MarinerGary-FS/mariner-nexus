"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────────
   Nexus Mark — precision SVG compass/node system
   V3: deeper glow halos, staggered entry, inner orbit ring
───────────────────────────────────────────────────────────────── */
function NexusMark({ size = 120, visible }: { size?: number; visible: boolean }) {
  const prefersReduced = useReducedMotion();

  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      {/* Outermost dashed ring — slow rotation */}
      <motion.circle
        cx="60" cy="60" r="56"
        stroke="rgba(77,163,255,0.1)"
        strokeWidth="0.75"
        strokeDasharray="6 5"
        animate={visible && !prefersReduced ? { rotate: 360 } : {}}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "60px 60px" }}
      />

      {/* Counter-rotating ring — tighter cadence */}
      <motion.circle
        cx="60" cy="60" r="44"
        stroke="rgba(77,163,255,0.065)"
        strokeWidth="0.5"
        strokeDasharray="2 9"
        animate={visible && !prefersReduced ? { rotate: -360 } : {}}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "60px 60px" }}
      />

      {/* Mid orbit — new for V3 */}
      <motion.circle
        cx="60" cy="60" r="50"
        stroke="rgba(37,99,235,0.055)"
        strokeWidth="0.4"
        strokeDasharray="1 14"
        animate={visible && !prefersReduced ? { rotate: 180 } : {}}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "60px 60px" }}
      />

      {/* Primary solid ring */}
      <circle cx="60" cy="60" r="36" stroke="rgba(77,163,255,0.13)" strokeWidth="0.75" />

      {/* Inner ring */}
      <circle cx="60" cy="60" r="22" stroke="rgba(77,163,255,0.17)" strokeWidth="0.75" />

      {/* Cardinal axis lines */}
      <line x1="60" y1="2"  x2="60" y2="37" stroke="rgba(77,163,255,0.28)" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="60" y1="83" x2="60" y2="118" stroke="rgba(77,163,255,0.28)" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="2"  y1="60" x2="37" y2="60" stroke="rgba(77,163,255,0.28)" strokeWidth="0.75" strokeLinecap="round" />
      <line x1="83" y1="60" x2="118" y2="60" stroke="rgba(77,163,255,0.28)" strokeWidth="0.75" strokeLinecap="round" />

      {/* Diagonal spurs */}
      <line x1="30" y1="30" x2="42" y2="42" stroke="rgba(77,163,255,0.1)" strokeWidth="0.5" strokeLinecap="round" />
      <line x1="90" y1="30" x2="78" y2="42" stroke="rgba(77,163,255,0.1)" strokeWidth="0.5" strokeLinecap="round" />
      <line x1="30" y1="90" x2="42" y2="78" stroke="rgba(77,163,255,0.1)" strokeWidth="0.5" strokeLinecap="round" />
      <line x1="90" y1="90" x2="78" y2="78" stroke="rgba(77,163,255,0.1)" strokeWidth="0.5" strokeLinecap="round" />

      {/* Cardinal node dots — sequential pulse */}
      {[
        { cx: 60, cy: 13, delay: 0 },
        { cx: 107, cy: 60, delay: 0.9 },
        { cx: 60, cy: 107, delay: 1.8 },
        { cx: 13, cy: 60, delay: 2.7 },
      ].map(({ cx, cy, delay }) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx} cy={cy} r="2.5"
          fill="#4DA3FF"
          animate={!prefersReduced ? { opacity: [0.25, 0.95, 0.25], scale: [0.85, 1.2, 0.85] } : { opacity: 0.6 }}
          transition={{ duration: 3.6, repeat: Infinity, delay, ease: "easeInOut" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}

      {/* Mid-ring intersection nodes */}
      <circle cx="60" cy="24" r="1.5" fill="rgba(125,211,252,0.4)" />
      <circle cx="60" cy="96" r="1.5" fill="rgba(125,211,252,0.4)" />
      <circle cx="24" cy="60" r="1.5" fill="rgba(125,211,252,0.4)" />
      <circle cx="96" cy="60" r="1.5" fill="rgba(125,211,252,0.4)" />

      {/* Center breathing core */}
      <motion.circle
        cx="60" cy="60" r="13"
        stroke="rgba(77,163,255,0.2)"
        strokeWidth="0.75"
        fill="rgba(37,99,235,0.08)"
        animate={!prefersReduced ? { scale: [1, 1.07, 1] } : {}}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <motion.circle
        cx="60" cy="60" r="5.5"
        fill="rgba(77,163,255,0.88)"
        animate={!prefersReduced ? { opacity: [0.6, 1, 0.6], scale: [0.88, 1.12, 0.88] } : { opacity: 0.8 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 60px" }}
      />
      <circle cx="60" cy="60" r="2.5" fill="white" opacity="0.95" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Ambient particle — more intentional, fewer count
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
        background: "radial-gradient(circle, rgba(77,163,255,0.55) 0%, transparent 70%)",
      }}
      animate={{ opacity: [0, 0.55, 0], scale: [0.4, 1, 0.4], y: [0, -24, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────
   Hero Headline — clip-reveal per line with stagger
───────────────────────────────────────────────────────────────── */
function HeroHeadline() {
  return (
    <div>
      <div className="overflow-hidden mb-[0.06em]">
        <motion.h1
          initial={{ y: "108%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.88, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.6rem,7.2vw,6rem)] font-bold text-white leading-[1.0] tracking-[-0.036em] block"
        >
          Where Intelligence
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "108%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.88, delay: 0.67, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.6rem,7.2vw,6rem)] font-bold leading-[1.0] tracking-[-0.036em] block text-gradient"
        >
          Meets Execution
        </motion.h1>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Main Hero — V3
   • Video loop when available, CSS fallback always present
   • prefers-reduced-motion respected throughout
   • 4-layer parallax with refined spring physics
   • Staged orchestrated entry — mark → eyebrow → headline → sub → CTAs
───────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Refined spring physics — heavier spring for more "weight"
  const springX = useSpring(mouseX, { stiffness: 28, damping: 32 });
  const springY = useSpring(mouseY, { stiffness: 28, damping: 32 });

  // Four distinct parallax depths
  const markX  = useTransform(springX, [0, 1], [-14, 14]);
  const markY  = useTransform(springY, [0, 1], [-14, 14]);
  const glowX  = useTransform(springX, [0, 1], [-48, 48]);
  const glowY  = useTransform(springY, [0, 1], [-48, 48]);
  const gridX  = useTransform(springX, [0, 1], [-6, 6]);
  const gridY  = useTransform(springY, [0, 1], [-6, 6]);
  const textX  = useTransform(springX, [0, 1], [-2.5, 2.5]);

  useEffect(() => {
    setMounted(true);
    if (prefersReduced) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, prefersReduced]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* ── L0: Video loop — ambient cinematic layer ── */}
      {mounted && !prefersReduced && (
        <video
          ref={videoRef}
          src="/video/hero-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoReady(true)}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            opacity: videoReady ? 0.045 : 0,
            transition: "opacity 1.8s ease",
            mixBlendMode: "screen",
          }}
        />
      )}

      {/* ── L1: Subtle noise grain ── */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── L2: Grid — parallax slow ── */}
      <motion.div
        className="absolute inset-0 grid-pattern opacity-70"
        style={mounted && !prefersReduced ? { x: gridX, y: gridY } : {}}
      />

      {/* ── L3: Radial depth — top-center atmospheric source ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_65%_at_50%_-10%,rgba(37,99,235,0.17),transparent_55%)]" />

      {/* ── L4: Radial depth — subtle bottom warmth ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_110%,rgba(37,99,235,0.05),transparent_55%)]" />

      {/* ── L5: Cursor glow orb — fastest parallax ── */}
      {mounted && !prefersReduced && (
        <motion.div
          className="absolute w-[1100px] h-[1100px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.11) 0%, rgba(77,163,255,0.032) 38%, transparent 62%)",
            left: "50%", top: "50%",
            x: glowX, y: glowY,
            translateX: "-50%", translateY: "-50%",
          }}
        />
      )}

      {/* ── L6: Ambient particles — 4 intentional, not decorative noise ── */}
      {mounted && !prefersReduced && (
        <>
          <AmbientParticle x="16%" y="28%" size={3}   delay={0}   duration={7}   />
          <AmbientParticle x="80%" y="20%" size={2}   delay={1.8} duration={8.5} />
          <AmbientParticle x="87%" y="68%" size={2.5} delay={3.6} duration={7.5} />
          <AmbientParticle x="10%" y="74%" size={2}   delay={5.2} duration={9}   />
        </>
      )}

      {/* ── L7: Horizon scan line ── */}
      {!prefersReduced && (
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "center" }}
          className="absolute top-1/2 left-0 right-0 h-px pointer-events-none"
        >
          <div className="h-full bg-gradient-to-r from-transparent via-glow-blue/[0.12] to-transparent" />
        </motion.div>
      )}

      {/* ── L8: Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* ── Content ── */}
      <div className="relative z-20 container-tight pt-24 md:pt-28 flex flex-col items-center text-center">

        {/* Brand mark — parallax mid-depth, orchestrated entry */}
        <motion.div
          style={mounted && !prefersReduced ? { x: markX, y: markY } : {}}
          className="mb-9 md:mb-10 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Layered glow halos — V4: four depth layers */}
            <div className="absolute inset-0 rounded-full blur-[80px] scale-[4.2] bg-nexus-blue/[0.035] pointer-events-none" />
            <div className="absolute inset-0 rounded-full blur-[40px] scale-[2.8] bg-nexus-blue/[0.08] pointer-events-none" />
            <div className="absolute inset-0 rounded-full blur-2xl scale-[1.9] bg-nexus-blue/[0.11] pointer-events-none" />
            <div className="absolute inset-0 rounded-full blur-md scale-[1.3] bg-glow-blue/[0.08] pointer-events-none" />
            <NexusMark size={110} visible={mounted} />
          </motion.div>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2.5 eyebrow border border-glow-blue/[0.14] rounded-full px-4 py-1.5 bg-nexus-blue/[0.06]">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-glow-blue"
              animate={!prefersReduced ? { opacity: [0.35, 1, 0.35], scale: [0.85, 1.2, 0.85] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            AI-Powered Business Systems
          </span>
        </motion.div>

        {/* Headline — slight text parallax */}
        <motion.div
          style={mounted && !prefersReduced ? { x: textX } : {}}
          className="mb-6 md:mb-7"
        >
          <HeroHeadline />
        </motion.div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.84, ease: [0.16, 1, 0.3, 1] }}
          className="text-[0.9375rem] md:text-[1rem] text-white/38 max-w-[480px] leading-[1.78] mb-10 md:mb-11"
        >
          For businesses with real potential held back by infrastructure that
          can&apos;t keep up. We build the systems — digital, automated, and
          conversion-ready — that remove that ceiling.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.98, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5"
        >
          <motion.div
            whileHover={!prefersReduced ? { scale: 1.025, y: -2 } : {}}
            whileTap={!prefersReduced ? { scale: 0.975 } : {}}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-nexus-blue hover:bg-[#1d4ed8] text-white text-[0.875rem] font-semibold transition-colors duration-200 glow-ring"
            >
              Start Your Build
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            whileHover={!prefersReduced ? { scale: 1.015, y: -1 } : {}}
            whileTap={!prefersReduced ? { scale: 0.985 } : {}}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white/42 hover:text-white/78 text-[0.875rem] font-medium transition-colors duration-200"
            >
              See the Work
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Micro-trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.18 }}
          className="text-white/18 text-[0.75rem] mt-3 tracking-wide"
        >
          30-min discovery call &middot; No cost &middot; No commitment
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={!prefersReduced ? { y: [0, 7, 0] } : {}}
            transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-px h-8 bg-gradient-to-b from-white/16 to-transparent" />
            <div className="w-px h-4 bg-gradient-to-b from-white/7 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
