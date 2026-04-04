"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";

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
    "bg-nexus-blue hover:bg-glow-blue text-white font-semibold border border-nexus-blue/0 hover:border-glow-blue/30",
  secondary:
    "bg-white/[0.06] hover:bg-white/[0.1] text-white font-medium border border-white/[0.1] hover:border-white/20",
  ghost:
    "bg-transparent hover:bg-white/[0.05] text-white/70 hover:text-white font-medium border border-transparent",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-sm rounded-lg",
  lg: "px-8 py-4 text-base rounded-xl",
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
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 transition-all duration-200",
    variants[variant],
    sizes[size],
    disabled && "opacity-40 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
