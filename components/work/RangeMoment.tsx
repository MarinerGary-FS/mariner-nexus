import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/foundation/Container";

const worlds = [
  { id: "undugu", name: "Undugu", signal: "501(c)(3) nonprofit organization · Brotherhood · Community · Movement · Participation", image: "/case-studies/undugu/card.webp" },
  { id: "serene", name: "Serene Origins", signal: "Privacy · Calm", image: "/case-studies/serene-origins/card.webp" },
  { id: "sovereign", name: "Sovereign Blueprint", signal: "Authority · Structure", image: "/case-studies/sovereign-blueprint-consulting/card.webp" },
  { id: "awakening", name: "Awakening", signal: "Immersion · Possibility", image: "/case-studies/althea-awakening-conference/card.webp" },
];

export function RangeMoment() {
  return <section className="mn-home-range" data-navigation-context="Work"><Container><div className="mn-home-range__heading"><p className="mn-kicker">Range of Worlds</p><h2>The same starting point does not require the same digital answer.</h2><p>Different audiences, identities, and objectives require different digital architectures.</p></div><div className="mn-home-range__worlds">{worlds.map((world) => <article data-world={world.id} key={world.name}><Image alt="" height={750} loading="lazy" sizes="(max-width: 767px) calc(100vw - 40px), 25vw" src={world.image} width={1200} /><div><p>{world.signal}</p><h3>{world.name}</h3></div></article>)}</div><Link href="/work">Explore Work <span aria-hidden="true">→</span></Link></Container><div className="mn-home-range__reconvergence"><Container><p>Different surfaces. One architectural discipline.</p><span aria-hidden="true">Experience → Structure → System</span></Container></div></section>;
}
