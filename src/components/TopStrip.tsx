import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import whatsappIcon from "@/assets/whatsapp-icon-new.png";
import bossWallahLogo from "@/assets/boss-wallah-logo.svg";

interface TopStripProps {
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
  navigationItems?: Array<{ label: string; action: () => void }>;
}

const TopStrip = ({ mobileMenuOpen = false, setMobileMenuOpen, navigationItems = [] }: TopStripProps) => {
  const openWhatsApp = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = "919876543210"; // Format: country code + number (no spaces or special chars)
    const message = "Hi! I'm interested in learning more about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <div className="fixed top-0 left-0 right-0 z-50 bg-white text-foreground border-b border-border px-6 shadow-soft py-2">
      {/* First Row - Logo and WhatsApp + Hamburger Menu */}
      <div className="flex items-center justify-between max-w-full">
        {/* Logo */}
        <div className="flex-shrink-0 w-[220px] h-14 flex items-center">
          <img 
            src={bossWallahLogo} 
            alt="Boss Wallah Media" 
            className="h-14 w-auto object-contain bg-white p-1 rounded transition-none" 
            loading="eager"
            decoding="sync"
            style={{
              minWidth: '200px',
              maxWidth: '200px',
              imageRendering: 'crisp-edges'
            }}
          />
        </div>

        {/* Desktop Message - Hidden on mobile */}
        <div className="hidden md:flex flex-1 justify-center">
          <p className="text-sm md:text-base font-medium">
            <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent font-bold text-3xl">#1</span> <span className="text-[#F05C25] font-bold text-3xl">Social Media Platform in South India</span>
          </p>
        </div>

        {/* WhatsApp + Mobile Hamburger Menu */}
        <div className="flex items-center gap-2">
          <Button onClick={openWhatsApp} variant="ghost" size="icon" className="hover:bg-white/10">
            <img src={whatsappIcon} alt="WhatsApp" className="h-10 w-10 object-contain" />
          </Button>
          
          {/* Mobile hamburger menu - only visible on mobile */}
          {setMobileMenuOpen && (
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-foreground p-2">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {mobileMenuOpen && (
                <div className="absolute top-full right-0 bg-white/95 backdrop-blur-md border border-gray-300 rounded-lg p-4 min-w-[200px] shadow-lg">
                  {navigationItems.map((item, index) => (
                    <button 
                      key={index} 
                      onClick={() => {
                        item.action();
                        setMobileMenuOpen(false);
                      }} 
                      className="block w-full text-left text-foreground hover:text-[#755292] py-2 px-3 rounded hover:bg-gray-100 transition-colors text-sm"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Second Row - Mobile Message */}
      <div className="md:hidden mt-2 text-center">
        <p className="text-xs font-medium">
          <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent font-bold text-lg">#1</span> <span className="text-[#F05C25] font-bold text-lg">Social Media Platform in South India</span>
        </p>
      </div>
    </div>;
};
export default TopStrip;