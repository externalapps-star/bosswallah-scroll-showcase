import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const HeroSection = () => {
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
  return <section className="relative min-h-screen flex items-center justify-between overflow-hidden bg-[#1a1a2e]">
      {/* Dark background overlay */}
      

      {/* Top left "Media Services" */}
      <div className="absolute top-8 left-8 z-20">
        <span className="text-gray-400 text-sm font-light">Media Services</span>
      </div>

      {/* Mobile hamburger menu */}
      <div className="lg:hidden absolute top-8 right-8 z-20">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {mobileMenuOpen && <div className="absolute top-12 right-0 bg-[#1a1a2e]/95 backdrop-blur-md border border-gray-700 rounded-lg p-4 min-w-[200px]">
            {navigationItems.map((item, index) => <button key={index} onClick={() => {
          item.action();
          setMobileMenuOpen(false);
        }} className="block w-full text-left text-white hover:text-purple-400 py-2 px-3 rounded hover:bg-white/10 transition-colors text-sm">
                {item.label}
              </button>)}
          </div>}
      </div>

      {/* Main content - left side */}
      <div className="relative z-10 flex-1 px-8 lg:px-16 overflow-hidden">
        <div className="max-w-3xl">
          {/* "Accelerate Your" in white */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">Accelerate Your Brand</h1>
          
          {/* "Brand Growth" with gradient */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent">Growth With</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl mb-12 max-w-2xl leading-relaxed">
            Drive business growth with our B2B expertise in marketing strategy, lead generation, digital solutions, and creative services.
          </p>
          
          {/* "With Boss Wallah Media" with gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent">Boss Wallah Media</span>
          </h2>
          
          {/* Bottom description */}
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed">
            Boss Wallah Media is India's top social media and production platform, delivering 330M+ monthly views and trusted brand campaigns across multiple industries.
          </p>
        </div>
      </div>

      {/* Navigation buttons - right side (desktop only) */}
      <div className="hidden lg:flex flex-col justify-center space-y-4 pr-16 z-10">
        {navigationItems.map((item, index) => <button key={index} onClick={item.action} className="text-left text-white hover:text-purple-400 transition-colors text-lg font-medium py-3 px-6 rounded border border-gray-600 hover:border-purple-400 hover:bg-white/10">
            {item.label}
          </button>)}
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