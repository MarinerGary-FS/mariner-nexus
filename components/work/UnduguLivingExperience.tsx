import Image from "next/image";
import Link from "next/link";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { UnduguExperienceHeader } from "@/components/work/UnduguExperienceHeader";
import { InterfaceDeconstructionModel } from "@/components/work/InterfaceDeconstructionModel";
import { ResponsivePerformance } from "@/components/work/ResponsivePerformance";

const unduguSans = DM_Sans({ subsets: ["latin"], variable: "--font-undugu-sans", display: "swap" });
const unduguDisplay = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"], style: ["normal", "italic"], variable: "--font-undugu-display", display: "swap" });

export function UnduguLivingExperience() {
  return <ResponsivePerformance deconstruction={<InterfaceDeconstructionModel />}><section aria-labelledby="undugu-living-title" className={`mn-undugu-living ${unduguSans.variable} ${unduguDisplay.variable}`}>
    <UnduguExperienceHeader />
    <div className="mn-undugu-live-hero">
      <div className="mn-undugu-live-copy">
        <h3 id="undugu-living-title">You have been carrying too much alone. <em>Step into the room.</em></h3>
        <p>Undugu is a 501(c)(3) nonprofit organization focused on brotherhood, community, movement and participation.</p>
        <div className="mn-undugu-live-actions">
          <Link href="https://www.undugu.org/#enter-the-room" rel="noreferrer" target="_blank">Experience the Movement <span aria-hidden="true">→</span><span className="sr-only"> — opens the live Undugu website in a new tab</span></Link>
          <Link href="https://www.undugu.org/donate" rel="noreferrer" target="_blank">Support the Movement<span className="sr-only"> — opens the live Undugu website in a new tab</span></Link>
        </div>
      </div>
      <figure className="mn-undugu-live-image">
        <Image alt="" height={1012} loading="lazy" sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) 56vw, 52vw" src="/case-studies/undugu/living/chop-it-up-full-room.jpg" width={1800} />
      </figure>
      <p aria-hidden="true" className="mn-undugu-live-scroll">Scroll to enter <span /></p>
    </div>
  </section></ResponsivePerformance>;
}
