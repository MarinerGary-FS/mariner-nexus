"use client";

import Link from "next/link";
import { motion, useReducedMotion, type TargetAndTransition } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-nexus-blue hover:bg-[#1d4ed8] text-white font-semibold glow-ring",
  secondary:
    "bg-white/[0.05] hover:bg-white/[0.09] text-white/75 hover:text-white font-medium border border-white/[0.09] hover:border-white/[0.15]",
  ghost:
    "bg-transparent hover:bg-white/[0.04] text-white/42 hover:text-white/75 font-medium",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[0.75rem] rounded-lg",
  md: "px-5 py-2.5 text-[0.8125rem] rounded-xl",
  lg: "px-7 py-3.5 text-[0.875rem] rounded-xl",
};

// Per-variant hover physics — primary lifts, secondary and ghost stay flat
const hoverByVariant: Record<ButtonVariant, TargetAndTransition> = {
  primary:   { scale: 1.02,  y: -1.5 },
  secondary: { scale: 1.015, y: -1   },
  ghost:     { scale: 1.01,  y: 0    },
};

const SPRING = { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const };

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const prefersReduced = useReducedMotion();

  const classes = cn(
    "inline-flex items-center justify-center gap-2 transition-all duration-200",
    variants[variant],
    sizes[size],
    disabled && "opacity-40 cursor-not-allowed pointer-events-none",
    className
  );

  const hover: TargetAndTransition | undefined = !prefersReduced && !disabled ? hoverByVariant[variant] : undefined;
  const tap:   TargetAndTransition | undefined = !prefersReduced && !disabled ? { scale: 0.975 } : undefined;

  if (href) {
    return (
      <motion.div
        whileHover={hover}
        whileTap={tap}
        transition={SPRING}
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={hover}
      whileTap={tap}
      transition={SPRING}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
