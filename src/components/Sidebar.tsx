import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Youtube, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import bossWallahLogo from "@/assets/boss-wallah-logo.svg";

interface SidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Sidebar = ({ isMenuOpen, setIsMenuOpen }: SidebarProps) => {
  
  // Auto-open/close menu based on Hero section scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isInHeroSection = rect.top <= window.innerHeight && rect.bottom >= 0;
        
        if (isInHeroSection && window.scrollY > 50) {
          setIsMenuOpen(true);
        } else if (isInHeroSection && window.scrollY <= 50) {
          setIsMenuOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };
  const navigationItems = [{
    label: "Home",
    id: "home"
  }, {
    label: "About",
    id: "about"
  }, {
    label: "Channels",
    id: "channels"
  }, {
    label: "Campaigns",
    id: "campaigns"
  }, {
    label: "Testimonials",
    id: "testimonials"
  }, {
    label: "News",
    id: "news"
  }, {
    label: "Contact",
    id: "contact"
  }];
  const socialLinks = [{
    icon: Youtube,
    href: "/channels/youtube",
    color: "text-red-500"
  }, {
    icon: Facebook,
    href: "/channels/facebook",
    color: "text-blue-600"
  }, {
    icon: Instagram,
    href: "/channels/instagram",
    color: "text-pink-500"
  }];
  const SidebarContent = () => <div className="flex flex-col h-full bg-[#1a1a2e] border-r border-border/20">
      {/* Logo Section - Completely Static */}
      <div className="px-4 md:px-6 bg-[#1a1a2e] py-3 relative z-30 transform-none will-change-auto" style={{
        transition: 'none', 
        animation: 'none',
        position: 'relative',
        transform: 'none',
        backfaceVisibility: 'hidden',
        perspective: 'none',
        willChange: 'auto'
      }}>
        <img src={bossWallahLogo} alt="Boss Wallah Media" className="h-10 md:h-12 w-auto object-contain opacity-100 visible bg-white p-1 rounded transform-none will-change-auto" style={{
          transition: 'none', 
          animation: 'none',
          transform: 'none',
          backfaceVisibility: 'hidden',
          perspective: 'none',
          willChange: 'auto'
        }} />
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 flex flex-col p-4 md:p-6 relative overflow-hidden">
        <div className="flex items-center justify-center h-full">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-14 w-14 rounded-full border-2 border-primary/30 bg-primary/10 text-primary">
            <Menu className="h-7 w-7" />
          </Button>
        </div>
        
        {/* Navigation overlay - scrollable within this section */}
        {isMenuOpen && (
          <div className="absolute inset-0 bg-[#1a1a2e] z-10 flex flex-col max-h-full overflow-y-auto">
            <div className="p-2">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-2 right-2 h-6 w-6 rounded-full flex items-center justify-center text-white z-20"
              >
                <X className="h-3 w-3" />
              </button>
              <nav className="space-y-1 pt-8 pb-4">
                {navigationItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left px-3 py-2 rounded text-sm text-white">
                    {item.label}
                  </button>)}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Contact Details */}
      <div className="p-4 md:p-6 border-t border-white/10 space-y-3 md:space-y-4">
        <div className="space-y-2">
          <a href="tel:+919876543210" className="flex items-center space-x-2 text-gray-400">
            <Phone className="h-3 w-3 flex-shrink-0" />
            <span className="text-xs truncate">+91 98765 43210</span>
          </a>
          <a href="mailto:hello@bosswallah.com" className="flex items-center space-x-2 text-gray-400">
            <Mail className="h-3 w-3 flex-shrink-0" />
            <span className="text-xs truncate">hello@bosswallah.com</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-3 pt-2">
          {socialLinks.map((social, index) => <a key={index} href={social.href} className="text-gray-400">
              <social.icon className="h-5 w-5" />
            </a>)}
        </div>
      </div>
    </div>;
  return <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-40 xl:w-44 z-50">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 sm:w-72">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>;
};
export default Sidebar;