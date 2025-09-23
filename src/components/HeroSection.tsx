import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const { t } = useLanguage();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navigationButtons = [
    { label: "Start Campaign", id: "contact", primary: true },
    { label: "Our Story", id: "about" },
    { label: "Explore Channels", id: "channels" },
    { label: "View Our Work", id: "campaigns" },
    { label: "See The Impact", id: "testimonials" },
    { label: "Latest News", id: "news" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#2C3E50' }}>
      {/* Dark background matching the reference image */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            {/* Media Services Label */}
            <div className="flex items-center gap-2 text-orange-400 font-medium">
              <span>Media Services</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-white">Accelerate Your</span>
                <br />
                <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-orange-500">
                  Growth
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Drive business growth with our B2B expertise in marketing strategy, lead generation, digital solutions, and creative services.
              </p>
            </div>

            {/* Second Part of Heading */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-orange-500">
                  With Boss
                  <br />
                  Wallah Media
                </span>
              </h2>
              
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl">
                Boss Wallah Media is India's leading social media and video production powerhouse with massive regional reach. We create campaigns that captivate, influence, and deliver measurable ROI across YouTube, Facebook, and Instagram.
              </p>
            </div>

            {/* Navigation Buttons - Desktop */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-4 pt-8">
              {navigationButtons.map((btn, index) => (
                <Button
                  key={index}
                  variant={btn.primary ? "default" : "outline"}
                  size="lg"
                  className={`${
                    btn.primary 
                      ? "bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white border-0" 
                      : "bg-white/10 text-white border-white/30 hover:bg-white hover:text-slate-900 backdrop-blur-sm"
                  } font-medium py-3 px-6 transition-all duration-300 hover:scale-105`}
                  onClick={() => document.getElementById(btn.id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {btn.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-slate-900 backdrop-blur-sm"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Menu size={20} className="mr-2" />
                Quick Navigation
              </Button>
              
              {/* Mobile Menu Dropdown */}
              {showMobileMenu && (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {navigationButtons.map((btn, index) => (
                    <Button
                      key={index}
                      variant={btn.primary ? "default" : "outline"}
                      size="sm"
                      className={`${
                        btn.primary 
                          ? "bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white border-0" 
                          : "bg-white/10 text-white border-white/30 hover:bg-white hover:text-slate-900 backdrop-blur-sm"
                      } font-medium transition-all duration-300`}
                      onClick={() => {
                        document.getElementById(btn.id)?.scrollIntoView({ behavior: 'smooth' });
                        setShowMobileMenu(false);
                      }}
                    >
                      {btn.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Statistics */}
          <div className="space-y-8 lg:space-y-12 text-right">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                18M+
              </div>
              <p className="text-gray-400 text-lg">Followers Across Platforms</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-500">
                330M+
              </div>
              <p className="text-gray-400 text-lg">Monthly Views & Engagement</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                6
              </div>
              <p className="text-gray-400 text-lg">Regional Languages</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/70 transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;