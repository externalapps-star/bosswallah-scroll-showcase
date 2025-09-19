import Header from "@/components/Header";
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
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ChannelsSection />
        <CampaignsSection />
      </div>
      <TestimonialsSection />
      <NewsSection />
      <div id="contact">
        <Footer />
      </div>
      <FloatingCallButton />
    </div>
  );
};

export default Index;
