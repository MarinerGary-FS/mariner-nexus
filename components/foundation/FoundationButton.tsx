import Link from "next/link";
import { cn } from "@/lib/cn";

type FoundationButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: "primary" | "secondary" | "text";
};

const variants = {
  primary: "mn-button-primary",
  secondary: "mn-button-secondary",
  text: "mn-button-text",
};

export function FoundationButton({
  children,
  className,
  href,
  variant = "primary",
}: FoundationButtonProps) {
  const classes = cn("mn-button", variants[variant], className);

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}
