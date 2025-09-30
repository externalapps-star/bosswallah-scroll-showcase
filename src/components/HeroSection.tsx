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
        {/* Dark background overlay */}
        

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
            
            {/* "Growth With" with gradient - Mobile optimized */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight sm:leading-none mb-4 sm:mb-6 md:mb-8">
              <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent">
                Growth With
              </span>
            </h1>
            
            {/* Subtitle - Mobile optimized */}
            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 lg:mb-12 max-w-full sm:max-w-4xl leading-relaxed px-1 sm:px-0">
              #1 Social Media Platform in South India
            </p>
            
            {/* Connect CTA Button */}
            <div className="mb-6 sm:mb-8">
              <Button 
                variant="default" 
                size="lg"
                className="bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://calendar.app.google/E7d7wnoCdBbLwJrL9', '_blank')}
              >
                Let's Connect
              </Button>
            </div>

            {/* Scroll indicator - smaller and placed after CTA */}
            <div className="flex justify-center">
              <div className="animate-bounce cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                <div className="w-4 h-6 border-2 border-white/50 rounded-full flex justify-center hover:border-white/70 transition-colors">
                  <div className="w-0.5 h-2 bg-white/50 rounded-full mt-1"></div>
                </div>
              </div>
            </div>
            
            {/* "Boss Wallah Media" with gradient - Mobile optimized */}
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight sm:leading-none mb-4 sm:mb-6 md:mb-8 -mt-2 sm:-mt-4 mt-8">
              <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent">
                Boss Wallah Media
              </span>
            </h2>
          </div>
        </div>
      </div>
      </div>

      </section>
    </>
  );
};
export default HeroSection;