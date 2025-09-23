import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, ArrowUpRight } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dark black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 text-white px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center min-h-screen lg:min-h-0 pt-20 lg:pt-0">
          {/* Left Side - Main Content */}
          <div className="space-y-8 lg:space-y-12">
            {/* Media Services Label */}
            <div className="flex items-center gap-2 text-orange-400 font-medium text-base">
              <span>Media Services</span>
              <ArrowUpRight size={16} />
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
                <span className="text-white block">Accelerate Your</span>
                <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  Growth
                </span>
              </h1>
              
              <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-2xl">
                Drive business growth with our B2B expertise in marketing strategy, lead generation, digital solutions, and creative services.
              </p>
            </div>

            {/* Second Part of Heading */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none">
                <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  With Boss
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  Wallah Media
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                Boss Wallah Media is India's leading social media and video production powerhouse with massive regional reach. We create campaigns that captivate, influence, and deliver measurable ROI across YouTube, Facebook, and Instagram.
              </p>
            </div>
          </div>

          {/* Right Side - Navigation replacing statistics */}
          <div className="space-y-6 lg:space-y-8">
            {/* Desktop Navigation - Vertically stacked to replace statistics */}
            <div className="hidden lg:flex lg:flex-col lg:space-y-4 text-right">
              {navigationButtons.map((btn, index) => (
                <Button
                  key={index}
                  variant={btn.primary ? "default" : "outline"}
                  size="lg"
                  className={`${
                    btn.primary 
                      ? "bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white border-0 text-base font-semibold py-4 px-6" 
                      : "bg-white/10 text-white border-white/30 hover:bg-white hover:text-black backdrop-blur-sm text-sm font-medium py-3 px-5"
                  } transition-all duration-300 hover:scale-105 rounded-lg w-48 ml-auto`}
                  onClick={() => document.getElementById(btn.id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {btn.label}
                </Button>
              ))}
            </div>

            {/* Mobile Navigation Menu */}
            <div className="lg:hidden">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-black backdrop-blur-sm w-full"
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
                          : "bg-white/10 text-white border-white/30 hover:bg-white hover:text-black backdrop-blur-sm"
                      } font-medium transition-all duration-300 text-sm py-3`}
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