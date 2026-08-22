import { Container } from "@/components/foundation/Container";
import { Grid } from "@/components/foundation/Grid";
import { SectionLink } from "@/components/corporate/SectionLink";
import { MarinerThread } from "@/components/foundation/MarinerThread";

const recognitionStates = [
  ["01", "Starting something new?", "We help determine what your digital presence should become."],
  ["02", "Ready for something better?", "We transform digital experiences that no longer reflect where you are going."],
  ["03", "Need everything to work together?", "We connect the experience with the systems behind it."],
];

const disciplines = [
  ["Strategy", "Determine what should exist and why."],
  ["Experience", "Create how people interact with it."],
  ["Systems", "Connect what happens behind the experience."],
];

export default function CorporateHome() {
  return (
    <div className="mn-corporate-home mn-environment-light">
      <section className="mn-home-arrival" data-navigation-context="Corporate">
        <Container>
          <Grid>
            <div className="mn-home-arrival-title">
              <div className="mn-signal-line" />
              <p className="mn-kicker">Mariner Nexus</p>
              <h1>Where strategy, experience, and technology converge.</h1>
            </div>
            <div className="mn-home-arrival-intro">
              <p>Mariner Nexus creates sophisticated digital experiences and connected systems designed around how organizations and individuals actually operate.</p>
              <div className="mn-home-actions">
                <a href="#explore">Explore Mariner Nexus</a>
                <SectionLink href="/start">Start a Project</SectionLink>
              </div>
            </div>
          </Grid>
        </Container>
      </section>

      <section className="mn-recognition" data-navigation-context="Experience" id="explore">
        <Container>
          <Grid>
            <div className="mn-recognition-heading">
              <p className="mn-kicker">Where you are now</p>
              <h2>The right next step depends on what needs to change.</h2>
              <p>You do not need to arrive with the solution figured out.</p>
            </div>
            <div className="mn-recognition-list">
              {recognitionStates.map(([number, title, description]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </Grid>
        </Container>
      </section>

      <section className="mn-discipline-model mn-environment-dark" data-navigation-context="Systems">
        <Container>
          <Grid>
            <div className="mn-discipline-heading">
              <p className="mn-kicker">One connected model</p>
              <h2>We think beyond the website.</h2>
            </div>
            <p className="mn-discipline-intro">Strategy informs the experience. The experience reveals what the systems must support. Each discipline strengthens the others.</p>
          </Grid>
          <div className="mn-discipline-flow">
            {disciplines.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <MarinerThread label="Strategy connects Experience and Systems" />
          <div className="mn-discipline-footer">
            <p>Technology should simplify the business—not become another problem to manage.</p>
            <SectionLink href="/capabilities">Explore capabilities</SectionLink>
          </div>
        </Container>
      </section>

      <section className="mn-home-confidence" data-navigation-context="Approach">
        <Container>
          <Grid>
            <p className="mn-kicker">A stronger digital operation</p>
            <div>
              <h2>Built around the business it is meant to serve.</h2>
              <p>Experience-based. Strategy-led. Solution-specific.</p>
              <MarinerThread label="The connected model continues into the Mariner Nexus approach" nodes={2} />
              <div><SectionLink href="/approach">See how Mariner Nexus works</SectionLink><SectionLink href="/start">Start a Project</SectionLink></div>
            </div>
          </Grid>
        </Container>
      </section>
    </div>
  );
}
