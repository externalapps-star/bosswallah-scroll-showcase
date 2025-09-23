import Sidebar from "@/components/Sidebar";
import TopStrip from "@/components/TopStrip";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChannelsSection from "@/components/ChannelsSection";
import CampaignsSection from "@/components/CampaignsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="lg:ml-80">
        <TopStrip />
        
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="channels">
          <ChannelsSection />
        </div>
        <div id="campaigns">
          <CampaignsSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="news">
          <NewsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
      
      <FloatingCallButton />
    </div>
  );
};

export default Index;
