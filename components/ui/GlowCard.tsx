"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlowCard({
  children,
  className,
  hover = true,
  glow = false,
}: GlowCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        "glass-card rounded-xl overflow-hidden",
        hover && "glass-card-hover cursor-default",
        glow && "glow-blue-sm",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
