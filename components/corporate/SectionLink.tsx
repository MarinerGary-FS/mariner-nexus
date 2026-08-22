import Link from "next/link";

export function SectionLink({ children, href }: { children: React.ReactNode; href: string }) {
  return <Link className="mn-section-link" href={href}>{children}</Link>;
}
