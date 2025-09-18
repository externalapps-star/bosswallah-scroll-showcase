import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChannelsSection from "@/components/ChannelsSection";
import CampaignsSection from "@/components/CampaignsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ChannelsSection />
      <CampaignsSection />
      <TestimonialsSection />
      <NewsSection />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
