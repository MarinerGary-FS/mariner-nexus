import { cn } from "@/lib/cn";

type SignalStateProps = {
  className?: string;
  label: string;
  state: "rest" | "active" | "signal" | "settle";
};

const stateStyles = {
  rest: "bg-[var(--mn-signal-rest)]",
  active: "bg-[var(--mn-signal-active)]",
  signal: "bg-[var(--mn-signal)]",
  settle: "bg-[var(--mn-signal-settle)] border border-[var(--mn-line-strong)]",
};

export function SignalState({ className, label, state }: SignalStateProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("size-2.5 rounded-full", stateStyles[state])} aria-hidden="true" />
      <span className="text-[var(--mn-type-caption)] font-semibold uppercase tracking-[0.12em] text-[var(--mn-ink-secondary)]">
        {label}
      </span>
    </div>
  );
}
