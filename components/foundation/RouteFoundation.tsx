import Link from "next/link";
import { Container } from "@/components/foundation/Container";
import { Grid } from "@/components/foundation/Grid";

type RouteLink = { label: string; href: string };

type RouteFoundationProps = {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  links?: RouteLink[];
  children?: React.ReactNode;
};

export function RouteFoundation({ children, description, eyebrow, links = [], note, title }: RouteFoundationProps) {
  return (
    <article className="mn-route-foundation mn-environment-light">
      <section className="mn-route-hero">
        <Container>
          <Grid>
            <div className="mn-route-title">
              <div className="mn-signal-line" />
              <p className="mn-kicker">{eyebrow}</p>
              <h1 className="mn-display">{title}</h1>
            </div>
            <div className="mn-route-intro">
              <p className="mn-lead">{description}</p>
              {links.length > 0 && (
                <div className="mn-route-links">
                  {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
                </div>
              )}
            </div>
          </Grid>
        </Container>
      </section>
      <section className="mn-route-status">
        <Container>
          <Grid>
            <p className="mn-kicker">Foundation status</p>
            <div>
              <p>{note}</p>
              {children}
            </div>
          </Grid>
        </Container>
      </section>
    </article>
  );
}
