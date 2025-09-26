import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeroSectionProps {
  hideSideNavigation?: boolean;
}

const HeroSection = ({ hideSideNavigation = false }: HeroSectionProps) => {
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
  return <section className="relative h-screen flex items-center justify-between overflow-hidden bg-[#1a1a2e]">
      {/* Dark background overlay */}
      

      {/* Top left "Media Services" */}
      <div className="absolute top-24 left-8 z-20">
        <span className="text-gray-400 text-sm font-light">Media Services</span>
      </div>

      {/* Mobile hamburger menu - Enhanced for touch */}
      <div className="lg:hidden absolute top-6 right-6 z-20">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="text-white p-3 hover:bg-white/10 rounded-lg transition-colors touch-manipulation"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
        {mobileMenuOpen && (
          <div className="absolute top-16 right-0 bg-[#1a1a2e]/95 backdrop-blur-md border border-gray-700 rounded-xl p-6 min-w-[280px] shadow-2xl">
            <div className="space-y-3">
              {navigationItems.map((item, index) => (
                <button 
                  key={index} 
                  onClick={() => {
                    item.action();
                    setMobileMenuOpen(false);
                  }} 
                  className="block w-full text-left text-white hover:text-purple-400 py-4 px-4 rounded-lg hover:bg-white/10 transition-colors text-base font-medium touch-manipulation border border-gray-600/30 hover:border-purple-400/50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main content and navigation container */}
      <div className="relative z-10 flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Left-aligned content - Mobile optimized */}
            <div className="max-w-6xl mt-8 lg:mt-12 px-2 sm:px-0">
              {/* "Accelerate Your" in white - Mobile responsive */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight mb-3 sm:mb-4">
                Accelerate Your Brand
              </h1>
              
              {/* "Brand Growth" with gradient - Mobile responsive */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8">
                <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent">
                  Growth With
                </span>
              </h1>
              
              {/* Subtitle - Mobile optimized */}
              <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-6 sm:mb-8 lg:mb-12 max-w-4xl leading-relaxed">
                Boss Wallah Media is India's top social media and production platform, with 18M+ subscribers, delivering 330M+ monthly views and trusted brand campaigns across multiple industries.
              </p>
              
              {/* "With Boss Wallah Media" with gradient - Mobile responsive */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8">
                <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent">
                  Boss Wallah Media
                </span>
              </h2>
            </div>

            {/* Navigation buttons - same container (desktop only) */}
            {!hideSideNavigation && (
              <div className="hidden lg:flex flex-col justify-center space-y-3 lg:space-y-4 ml-8">
                {navigationItems.map((item, index) => <button key={index} onClick={item.action} className="text-left text-white hover:text-purple-400 transition-colors text-sm lg:text-base xl:text-lg font-medium py-2 lg:py-3 px-4 lg:px-6 rounded border border-gray-600 hover:border-purple-400 hover:bg-white/10 whitespace-nowrap">
                    {item.label}
                  </button>)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10" onClick={() => document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    })}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/70 transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;