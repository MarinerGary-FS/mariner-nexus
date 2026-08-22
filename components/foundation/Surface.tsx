import { cn } from "@/lib/cn";

type SurfaceProps = React.ComponentPropsWithoutRef<"div"> & {
  raised?: boolean;
};

export function Surface({ raised = false, className, ...props }: SurfaceProps) {
  return (
    <div
      className={cn(raised ? "mn-surface-raised" : "mn-surface", className)}
      {...props}
    />
  );
}
