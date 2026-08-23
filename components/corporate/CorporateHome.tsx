import { Container } from "@/components/foundation/Container";
import { Grid } from "@/components/foundation/Grid";
import { SectionLink } from "@/components/corporate/SectionLink";
import { MarinerThread } from "@/components/foundation/MarinerThread";
import { SystemsDeconstruction } from "@/components/systems/SystemsDeconstruction";
import { NexusExperience } from "@/components/nexus/NexusExperience";
import { TrackedStartLink } from "@/components/inquiry/TrackedStartLink";

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

const approachSteps = ["Understand", "Define", "Architect", "Create", "Connect", "Refine", "Launch", "Evolve"];

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
                <TrackedStartLink source="hero">Start a Project</TrackedStartLink>
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

      <section className="mn-home-systems" data-navigation-context="Systems">
        <div className="mn-systems-descent">
          <Container>
            <Grid>
              <div className="mn-systems-descent-heading">
                <p className="mn-kicker">Experience → Systems</p>
                <h2>What happens after the interface?</h2>
              </div>
              <p>A polished interaction creates attention. A connected operation determines what that attention can become.</p>
            </Grid>
          </Container>
        </div>
        <div className="mn-systems-depth mn-environment-dark">
          <Container>
            <SystemsDeconstruction />
            <div className="mn-systems-signature">
              <p>The experience shouldn’t stop when someone clicks Submit.</p>
            </div>
            <div className="mn-systems-continuation">
              <p>A connected flow solves one operational need. Change the objective, and the architecture must change with it.</p>
              <span aria-hidden="true">Experience → System → Outcome</span>
            </div>
          </Container>
        </div>
      </section>

      <section className="mn-home-nexus mn-environment-dark" data-navigation-context="Nexus">
        <Container>
          <Grid>
            <div className="mn-nexus-heading">
              <p className="mn-kicker">The Nexus</p>
              <h2>Different objectives require different digital architectures.</h2>
            </div>
            <div className="mn-nexus-intro">
              <p>What are you trying to create?</p>
              <p>Choose an objective. The same core intelligence will reorganize around a different human and organizational need.</p>
            </div>
          </Grid>
          <NexusExperience />
        </Container>
      </section>

      <section className="mn-home-reassurance" data-navigation-context="Approach">
        <Container>
          <Grid>
            <div className="mn-reassurance-heading"><p className="mn-kicker">A disciplined process</p><h2>Ambition needs structure.</h2><p>Vision without execution is decoration.</p></div>
            <ol>{approachSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
          </Grid>
          <div className="mn-reassurance-close"><p>One connected method—from understanding the objective to evolving what is live.</p><SectionLink href="/approach">See the complete approach</SectionLink></div>
        </Container>
      </section>

      <section className="mn-home-possibility" data-navigation-context="Begin"><Container><p>You’ve seen what we’ve built.</p><h2>What could yours become?</h2></Container></section>

      <section className="mn-home-final-conversion" data-navigation-context="Begin"><Container><Grid><p className="mn-kicker">Begin</p><div><MarinerThread label="The connected journey resolves into one clear next step" nodes={2} /><h2>What are you trying to create?</h2><p>You don’t need to arrive with the solution figured out.</p><TrackedStartLink source="final_conversion">Start a Project <span aria-hidden="true">→</span></TrackedStartLink></div></Grid></Container></section>
    </div>
  );
}
