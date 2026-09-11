import { Container } from "@/components/foundation/Container";
import { Grid } from "@/components/foundation/Grid";
import { SectionLink } from "@/components/corporate/SectionLink";
import { MarinerThread } from "@/components/foundation/MarinerThread";
import { SystemsDeconstruction } from "@/components/systems/SystemsDeconstruction";
import { NexusExperience } from "@/components/nexus/NexusExperience";
import { TrackedStartLink } from "@/components/inquiry/TrackedStartLink";
import { RangeMoment } from "@/components/work/RangeMoment";
import { disciplines } from "@/content/disciplines";

const recognitionStates = [
  ["01", "Starting something new?", "We help determine what your digital presence should become."],
  ["02", "Ready for something better?", "We transform digital experiences that no longer reflect where you are going."],
  ["03", "Need everything to work together?", "We connect the experience with the systems behind it."],
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
              <h1>We build intelligent digital systems.</h1>
            </div>
            <div className="mn-home-arrival-intro">
              <p>We design connected digital environments where experience, operation, information, and intelligence work as one architecture.</p>
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
            <p className="mn-discipline-intro">Strategy shapes the objective. Experience defines the human encounter. Systems connect the operation. Intelligence organizes information, context, and evidence when the work requires it.</p>
          </Grid>
          <div className="mn-discipline-flow">
            {disciplines.map((discipline) => (
              <article data-discipline={discipline.id} key={discipline.id}>
                <span>{discipline.number}</span>
                <h3>{discipline.name}</h3>
                <p>{discipline.homeStatement}</p>
              </article>
            ))}
          </div>
          <MarinerThread label="Strategy shapes Experience, Systems, and Intelligence" nodes={4} />
          <div className="mn-discipline-footer">
            <p>The architecture follows the objective. Intelligence belongs only where it can make the operation more useful to the humans inside it.</p>
            <SectionLink href="/capabilities">Explore capabilities</SectionLink>
          </div>
        </Container>
      </section>

      <RangeMoment />

      <section className="mn-home-systems" data-navigation-context="Systems">
        <div className="mn-systems-descent">
          <Container>
            <Grid>
              <div className="mn-systems-descent-heading">
                <p className="mn-kicker">Experience → Systems → Intelligence</p>
                <h2>What becomes possible after the interface?</h2>
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
              <p>A connected flow solves one operational need. Where information and evidence must remain useful over time, an intelligence layer can preserve context and support the next human action.</p>
              <span aria-hidden="true">Experience → Systems → Intelligence when useful → Human action</span>
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
              <p>Choose an objective. The same core disciplines will reorganize around a different human and organizational need.</p>
            </div>
          </Grid>
          <NexusExperience />
        </Container>
      </section>

      <section className="mn-home-release-conversion" data-navigation-context="Corporate">
        <Container>
          <div className="mn-release-silence" aria-hidden="true"><span /><i /></div>
          <Grid>
            <p className="mn-kicker">Possibility</p>
            <div className="mn-release-question">
              <h2>What could yours become?</h2>
            </div>
            <div className="mn-release-decision">
              <p>Bring us the objective. We’ll help determine what needs to exist around it.</p>
              <TrackedStartLink source="final_conversion">Start a Project <span aria-hidden="true">→</span></TrackedStartLink>
              <small>You do not need to have the solution figured out.</small>
            </div>
          </Grid>
        </Container>
      </section>
    </div>
  );
}
