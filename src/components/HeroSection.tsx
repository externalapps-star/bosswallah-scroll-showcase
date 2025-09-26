import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
  return <section className="relative h-screen flex items-center justify-between overflow-hidden bg-[#1a1a2e]">
      {/* Dark background overlay */}
      

      {/* Top left "Media Services" */}
      <div className="absolute top-24 left-8 z-20">
        
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

      {/* Main content and navigation container */}
      <div className="relative z-10 flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Left-aligned content */}
            <div className="max-w-6xl mt-8 lg:mt-12">
              {/* "Accelerate Your" in white */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-bold text-white leading-none mb-4">Accelerate Your Brand</h1>
              
              {/* "Brand Growth" with gradient */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-bold leading-none mb-6 md:mb-8">
                <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent">Growth With</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-gray-400 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-8 lg:mb-12 max-w-4xl leading-relaxed">Boss Wallah Media is the number one social media agency in South India</p>
              
              {/* "With Boss Wallah Media" with gradient */}
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-bold leading-none mb-6 md:mb-8">
                <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent">Boss Wallah Media</span>
              </h2>
            </div>
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