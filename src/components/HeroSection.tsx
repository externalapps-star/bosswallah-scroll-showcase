import { Button } from "@/components/ui/button";
import { useState } from "react";
import TopStrip from "./TopStrip";

interface HeroSectionProps {
  hideSideNavigation?: boolean;
}

const HeroSection = ({
  hideSideNavigation = false
}: HeroSectionProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigationItems = [{
    label: "Start Campaign",
    action: () => document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, {
    label: "Our Story",
    action: () => document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, {
    label: "Explore Channels",
    action: () => document.getElementById('channels')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, {
    label: "View Our Work",
    action: () => document.getElementById('campaigns')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, {
    label: "See The Impact",
    action: () => document.getElementById('testimonials')?.scrollIntoView({
      behavior: 'smooth'
    })
  }, {
    label: "Latest News",
    action: () => document.getElementById('news')?.scrollIntoView({
      behavior: 'smooth'
    })
  }];
  return (
    <>
      <TopStrip 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <section className="relative h-screen flex items-center justify-between overflow-hidden bg-[#1a1a2e] pt-20">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hero-content-creation.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for text readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]"></div>

        {/* Top left "Media Services" */}
        <div className="absolute top-24 left-8 z-20">
          
        </div>

      {/* Main content and navigation container */}
      <div className="relative z-10 flex-1">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Left-aligned content */}
          <div className="max-w-4xl mt-4 sm:mt-6 md:mt-8 lg:mt-12 w-full">
            {/* "Accelerate Your Brand" - Mobile optimized */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight sm:leading-none mb-3 sm:mb-4 break-words sm:whitespace-nowrap">
              Accelerate Your Brand
            </h1>
            
            {/* "Growth With" - Mobile optimized */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight sm:leading-none mb-4 sm:mb-6 md:mb-8 text-white">
              Growth With
            </h1>
            
            {/* "Boss Wallah Media" with gradient - Mobile optimized */}
            <h2 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none mb-4 sm:mb-6 md:mb-8 -mt-2 sm:-mt-4 whitespace-nowrap">
              <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent">
                Boss Wallah Media
              </span>
            </h2>
          </div>
        </div>
      </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10" onClick={() => document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    })}>
        <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/70 transition-colors">
          <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full mt-1 sm:mt-2"></div>
        </div>
      </div>
      </section>
    </>
  );
};
export default HeroSection;