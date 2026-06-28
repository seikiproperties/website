import Hero from "@/components/home/Hero";
import DeveloperStrip from "@/components/home/DeveloperStrip";
import WhySeiki from "@/components/home/WhySeiki";
import WhyDubai from "@/components/home/WhyDubai";
import Services from "@/components/home/Services";
import Founders from "@/components/home/Founders";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Process from "@/components/home/Process";
import InstagramStrip from "@/components/home/InstagramStrip";
import TrustSection from "@/components/home/TrustSection";
import InsightsPreview from "@/components/home/InsightsPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DeveloperStrip />
      <WhySeiki />
      <WhyDubai />
      <Services />
      <Founders />
      <FeaturedProperties />
      <Process />
      <InstagramStrip />
      <TrustSection />
      <InsightsPreview />
      <FinalCTA />
    </>
  );
}
