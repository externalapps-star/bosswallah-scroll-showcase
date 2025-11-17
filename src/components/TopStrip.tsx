import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Youtube, Facebook, Instagram } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import whatsappIcon from "@/assets/whatsapp-icon-new.png";
import bossWallahLogo from "@/assets/boss-wallah-logo-v2.jpg";

interface TopStripProps {
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
}

const TopStrip = ({ mobileMenuOpen = false, setMobileMenuOpen }: TopStripProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && setMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "channels", "campaigns", "testimonials", "news", "blogs", "newsletter", "contact"];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://calendly.com/d/ctcn-pgy-jxt', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    if (setMobileMenuOpen) setMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Channels", id: "channels" },
    { label: "Campaigns", id: "campaigns" },
    { label: "Testimonials", id: "testimonials" },
    { label: "News", id: "news" },
    { label: "Blogs", id: "blogs" },
    { label: "Newsletter", id: "newsletter" },
    { label: "Consult", id: "contact" }
  ];

  const socialLinks = [
    { icon: Youtube, href: "/channels/youtube", color: "text-red-500" },
    { icon: Facebook, href: "/channels/facebook", color: "text-blue-600" },
    { icon: Instagram, href: "/channels/instagram", color: "text-pink-500" }
  ];
  return <div className="fixed top-0 left-0 right-0 z-50 bg-white text-foreground border-b border-border px-6 shadow-soft py-2">
      {/* First Row - Logo and WhatsApp + Hamburger Menu */}
      <div className="flex items-center justify-between max-w-full">
        {/* Logo */}
        <div className="flex-shrink-0 w-[340px] h-14 flex items-center">
          <img 
            src={bossWallahLogo} 
            alt="Boss Wallah Media" 
            className="h-14 w-auto object-contain bg-white p-1 rounded transition-none" 
            loading="eager"
            decoding="sync"
            style={{
              minWidth: '320px',
              maxWidth: '320px',
              imageRendering: 'crisp-edges'
            }}
          />
        </div>

        {/* Desktop Message - Hidden on mobile */}
        <div className="hidden md:flex flex-1 justify-center ml-[-80px]">
          <p className="text-sm md:text-base font-medium">
            <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent font-bold text-3xl">#1</span> <span className="text-[#F05C25] font-bold text-3xl">Social Media Platform in India</span>
          </p>
        </div>

        {/* WhatsApp + Mobile Hamburger Menu */}
        <div className="flex items-center gap-2">
          <Button onClick={openWhatsApp} variant="ghost" size="icon" className="hover:bg-white/10">
            <img src={whatsappIcon} alt="WhatsApp" className="h-10 w-10 object-contain" />
          </Button>
          
          {/* Mobile hamburger menu - only visible on mobile */}
          {setMobileMenuOpen && (
            <div className="md:hidden" ref={menuRef}>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#1a1a2e] hover:text-[#755292] p-2 transition-colors">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {mobileMenuOpen && (
                <div className="absolute top-full right-0 bg-[#1a1a2e]/95 backdrop-blur-md border border-gray-700 rounded-lg p-4 min-w-[200px] max-h-[70vh] overflow-y-auto shadow-lg">
                  {navigationItems.map((item, index) => (
                    <button 
                      key={index} 
                      onClick={() => scrollToSection(item.id)} 
                      className={`block w-full text-left py-2 px-3 rounded transition-colors text-xs ${
                        activeSection === item.id 
                          ? 'bg-[#F05C25] text-white font-medium' 
                          : 'text-white hover:text-[#F05C25] hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  {/* Contact Information */}
                  <div className="mt-4 pt-4 border-t border-gray-600 space-y-3">
                    <div className="space-y-2">
                      <div>
                        <a href="tel:+918123405371" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                          <Phone className="h-4 w-4 flex-shrink-0" />
                          <span className="text-xs">+91 8123405371</span>
                        </a>
                        <p className="text-[8px] text-[#F05C25] ml-7 italic mt-0.5 leading-tight">[For business & marketing enquiries only]</p>
                      </div>
                      <a href="mailto:brand@bosswallah.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                        <Mail className="h-4 w-4 flex-shrink-0" />
                        <span className="text-xs">brand@bosswallah.com</span>
                      </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 pt-1">
                      {socialLinks.map((social, index) => (
                        <a 
                          key={index}
                          href={social.href} 
                          className={`text-gray-400 hover:${social.color} transition-colors`}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Second Row - Mobile Message */}
      <div className="md:hidden mt-2 text-center">
        <p className="text-[10px] font-medium leading-tight">
          <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent font-bold text-sm">#1</span> <span className="text-[#F05C25] font-bold text-sm">Social Media Platform in India</span>
        </p>
      </div>
    </div>;
};
export default TopStrip;