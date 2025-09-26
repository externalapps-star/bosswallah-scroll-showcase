import Sidebar from "@/components/Sidebar";
import TopStrip from "@/components/TopStrip";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChannelsSection from "@/components/ChannelsSection";
import CampaignsSection from "@/components/CampaignsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import NewsletterSection from "@/components/NewsletterSection";
import BlogsSection from "@/components/BlogsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { useState } from "react";

const Index = () => {
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Sidebar isMenuOpen={sidebarMenuOpen} setIsMenuOpen={setSidebarMenuOpen} />
      
      {/* Main Content Area - No left margin since sidebar is removed */}
      <div>
        <TopStrip />
        
        <div id="home">
          <HeroSection hideSideNavigation={sidebarMenuOpen} />
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
        <div id="newsletter">
          <NewsletterSection />
        </div>
        <div id="blogs">
          <BlogsSection />
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
