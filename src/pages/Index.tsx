import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChannelsSection from "@/components/ChannelsSection";
import CampaignsSection from "@/components/CampaignsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ChannelsSection />
      <CampaignsSection />
      <TestimonialsSection />
      <ContactSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
