export function ExternalProjectLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="mn-external-project-link" href={href} rel="noopener noreferrer" target="_blank">{children}<span className="sr-only"> (opens in a new tab)</span></a>;
}
