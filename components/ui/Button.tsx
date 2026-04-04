"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  const classes = cn(
    "inline-flex items-center justify-center gap-2 transition-all duration-200",
    variants[variant],
    sizes[size],
    disabled && "opacity-40 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}>
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
      whileHover={{ scale: disabled ? 1 : 1.015 }}
      whileTap={{ scale: disabled ? 1 : 0.985 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
