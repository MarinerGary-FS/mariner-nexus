import HeroSection from "@/components/sections/HeroSection";
import PositioningSection from "@/components/sections/PositioningSection";
import OutcomePaths from "@/components/sections/OutcomePaths";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ServicesSnapshot from "@/components/sections/ServicesSnapshot";
import SystemFlowSection from "@/components/sections/SystemFlowSection";
import ProcessSection from "@/components/sections/ProcessSection";
import QualificationSection from "@/components/sections/QualificationSection";
import CaseStudyHighlights from "@/components/sections/CaseStudyHighlights";
import FounderSection from "@/components/sections/FounderSection";
import ConversionSection from "@/components/sections/ConversionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PositioningSection />
      <OutcomePaths />
      <BeforeAfterSection />
      <ServicesSnapshot />
      <SystemFlowSection />
      <ProcessSection />
      <QualificationSection />
      <CaseStudyHighlights />
      <FounderSection />
      <ConversionSection />
    </>
  );
}
