import { useState } from "react";
import { Menu, X, Phone, Mail, Youtube, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import bossWallahLogo from "@/assets/boss-wallah-logo.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navigationItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Channels", id: "channels" },
    { label: "Campaigns", id: "campaigns" },
    { label: "Testimonials", id: "testimonials" },
    { label: "News", id: "news" },
    { label: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: Youtube, href: "/channels/youtube", color: "text-red-500" },
    { icon: Facebook, href: "/channels/facebook", color: "text-blue-600" },
    { icon: Instagram, href: "/channels/instagram", color: "text-pink-500" },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#1a1a2e] border-r border-border/20">
      {/* Logo Section */}
      <div className="p-6 border-b border-white/10 bg-white">
        <img 
          src={bossWallahLogo} 
          alt="Boss Wallah Media" 
          className="h-12 w-auto"
        />
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="h-14 w-14 rounded-full border-2 border-primary/30 hover:border-primary bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <Menu className="h-7 w-7" />
          </Button>
        </div>

        {/* Navigation Items - Hidden by default, shown when hamburger is clicked */}
        {isOpen && (
          <nav className="space-y-3 mt-8 w-full">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-primary/20 hover:text-primary transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Contact Details */}
      <div className="p-6 border-t border-white/10 space-y-4">
        <div className="space-y-3">
          <a 
            href="tel:+919876543210" 
            className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm">+91 98765 43210</span>
          </a>
          <a 
            href="mailto:hello@bosswallah.com" 
            className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span className="text-sm">hello@bosswallah.com</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-3 pt-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-64 z-40">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed top-16 left-4 z-50 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 text-black hover:bg-white"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;