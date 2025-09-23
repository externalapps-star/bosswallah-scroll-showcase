import { useState } from "react";
import { Menu, X, Phone, Mail, Youtube, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import bossWallahLogo from "@/assets/boss-wallah-logo.svg";

interface SidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Sidebar = ({ isMenuOpen, setIsMenuOpen }: SidebarProps) => {
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
      {/* Logo Section */}
      <div className="px-6 bg-[#1a1a2e] py-[11.25px]">
        <div className="bg-white p-2 rounded">
          <img src={bossWallahLogo} alt="Boss Wallah Media" className="h-8 w-auto" />
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 flex flex-col p-6">
        {!isMenuOpen ? (
          <div className="flex items-center justify-center h-full">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-14 w-14 rounded-full border-2 border-primary/30 hover:border-primary bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              <Menu className="h-7 w-7" />
            </Button>
          </div>
        ) : (
          <div className="w-full relative">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-0 right-0 h-8 w-8 rounded-full flex items-center justify-center text-white hover:bg-primary/20 hover:text-primary transition-all duration-200"
            >
              <X className="h-4 w-4" />
            </button>
            <nav className="space-y-3 pt-12">
              {navigationItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-primary/20 hover:text-primary transition-all duration-200">
                  {item.label}
                </button>)}
            </nav>
          </div>
        )}
      </div>

      {/* Contact Details */}
      <div className="p-6 border-t border-white/10 space-y-4">
        <div className="space-y-3">
          <a href="tel:+919876543210" className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+91 98765 43210</span>
          </a>
          <a href="mailto:hello@bosswallah.com" className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
            <span className="text-sm">hello@bosswallah.com</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-3 pt-2">
          {socialLinks.map((social, index) => <a key={index} href={social.href} className="text-gray-400 hover:text-primary transition-colors">
              <social.icon className="h-5 w-5" />
            </a>)}
        </div>
      </div>
    </div>;
  return <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-56 z-50">
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
          <SheetContent side="left" className="p-0 w-56">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>;
};
export default Sidebar;