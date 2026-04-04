"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const glowX = useTransform(springX, [-0.5, 0.5], ["-20%", "20%"]);
  const glowY = useTransform(springY, [-0.5, 0.5], ["-20%", "20%"]);

  const logoX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const logoY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5));
      mouseY.set((e.clientY / innerHeight - 0.5));
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Ambient background layers */}
      <div className="absolute inset-0">
        {/* Base radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.12),transparent)]" />

        {/* Animated glow orb tracking mouse */}
        {mounted && (
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(77,163,255,0.05) 50%, transparent 70%)",
              left: "50%",
              top: "50%",
              x: glowX,
              y: glowY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        )}

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-tight text-center z-10 pt-24">
        {/* Brand mark with parallax */}
        <motion.div
          style={mounted ? { x: logoX, y: logoY } : {}}
          className="flex justify-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-nexus-blue/10 blur-2xl scale-150" />
            <div className="absolute inset-0 rounded-full bg-glow-blue/5 blur-3xl scale-200" />

            {/* Logo container */}
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full border border-glow-blue/20 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border border-glow-blue/10" />
              <span className="text-glow-blue font-bold text-2xl md:text-3xl tracking-wider">
                MN
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/70 border border-glow-blue/15 rounded-full px-4 py-1.5 bg-nexus-blue/5">
            <span className="w-1.5 h-1.5 rounded-full bg-glow-blue animate-pulse" />
            AI-Powered Business Systems
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-white">Where Intelligence</span>
          <br />
          <span className="text-gradient">Meets Execution</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We design AI-powered systems, premium web experiences, and automation
          infrastructure that help modern businesses operate smarter, convert
          better, and scale with clarity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contact" variant="primary" size="lg">
            Book a Strategy Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <Button href="/case-studies" variant="secondary" size="lg">
            View Case Studies
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
