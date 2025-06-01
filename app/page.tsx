import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-1";
import FAQsTwo from "@/components/faqs-2";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-3";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ContentSection />
      {/* <FAQsTwo /> */}
      <IntegrationsSection/>
      <CallToAction />
      <FooterSection/>
    </>
  );
}
