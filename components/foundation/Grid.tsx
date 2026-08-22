import { cn } from "@/lib/cn";

type GridProps = React.ComponentPropsWithoutRef<"div">;

export function Grid({ className, ...props }: GridProps) {
  return <div className={cn("mn-grid", className)} {...props} />;
}
