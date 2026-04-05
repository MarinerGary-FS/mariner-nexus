import HeroSection from "@/components/sections/HeroSection";
import PositioningSection from "@/components/sections/PositioningSection";
import OutcomePaths from "@/components/sections/OutcomePaths";
import CaseStudyHighlights from "@/components/sections/CaseStudyHighlights";
import ServicesSnapshot from "@/components/sections/ServicesSnapshot";
import ProcessSection from "@/components/sections/ProcessSection";
import FounderSection from "@/components/sections/FounderSection";
import ConversionSection from "@/components/sections/ConversionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PositioningSection />
      <OutcomePaths />
      <ServicesSnapshot />
      <ProcessSection />
      <CaseStudyHighlights />
      <FounderSection />
      <ConversionSection />
    </>
  );
}
