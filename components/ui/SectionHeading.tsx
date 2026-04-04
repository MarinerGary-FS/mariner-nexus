import { clsx } from "clsx";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleGradient?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  titleGradient = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {label && (
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-glow-blue/80">
          {label}
        </span>
      )}
      <h2
        className={clsx(
          "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight",
          titleGradient ? "text-gradient" : "text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
