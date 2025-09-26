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
  return <section className="relative min-h-screen flex items-center justify-between overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
      {/* Gradient overlay for better mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20"></div>

      {/* Top left "Media Services" */}
      <div className="absolute top-20 sm:top-24 left-4 sm:left-8 z-20">
        <span className="text-white/80 text-xs sm:text-sm font-light font-fira">Media Services</span>
      </div>

      {/* Mobile hamburger menu - Floating style */}
      <div className="lg:hidden absolute top-4 right-4 z-50">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="bg-white/10 backdrop-blur-md text-white p-3 rounded-xl border border-white/20 shadow-lg active:scale-95 transition-all"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        {mobileMenuOpen && (
          <div className="absolute top-16 right-0 bg-white/95 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[220px] shadow-xl">
            {navigationItems.map((item, index) => (
              <button 
                key={index} 
                onClick={() => {
                  item.action();
                  setMobileMenuOpen(false);
                }} 
                className="block w-full text-left text-primary hover:text-secondary py-3 px-4 rounded-lg hover:bg-primary/10 transition-all text-sm font-semibold font-fira border-b border-primary/10 last:border-b-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main content and navigation container */}
      <div className="relative z-10 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-screen py-20">
            {/* Left-aligned content */}
            <div className="max-w-6xl mt-8 lg:mt-12">
              {/* Main heading - Mobile optimized */}
              <h1 className="font-fira text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4">
                Accelerate Your Brand
              </h1>
              
              {/* Gradient text - Mobile optimized */}
              <h1 className="font-fira text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                <span className="gradient-text-mobile">Growth With</span>
              </h1>
              
              {/* Subtitle - Mobile responsive */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 lg:mb-12 max-w-4xl leading-relaxed font-fira font-light">
                Boss Wallah Media is India's top social media and production platform, with 18M+ subscribers, delivering 330M+ monthly views and trusted brand campaigns across multiple industries.
              </p>
              
              {/* Company name with gradient */}
              <h2 className="font-fira text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
                <span className="gradient-text-mobile">Boss Wallah Media</span>
              </h2>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
                <Button 
                  variant="cta" 
                  size="mobile"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto"
                >
                  Start Your Campaign
                </Button>
                <Button 
                  variant="outline" 
                  size="mobile"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
                >
                  Learn Our Story
                </Button>
              </div>
            </div>

            {/* Navigation buttons - Desktop only */}
            {!hideSideNavigation && (
              <div className="hidden lg:flex flex-col justify-center space-y-3 lg:space-y-4 ml-8">
                {navigationItems.map((item, index) => (
                  <button 
                    key={index} 
                    onClick={item.action} 
                    className="text-left text-white hover:text-secondary transition-all text-sm lg:text-base xl:text-lg font-semibold py-3 px-6 rounded-xl border border-white/30 hover:border-secondary hover:bg-white/10 whitespace-nowrap font-fira backdrop-blur-sm shadow-lg active:scale-95"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile-optimized scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10" 
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center hover:border-white transition-all backdrop-blur-sm bg-white/10">
          <div className="w-1.5 h-4 bg-white/70 rounded-full mt-3"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;