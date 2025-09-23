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
    <div className="flex flex-col h-full bg-black border-r border-border">
      {/* Logo Section */}
      <div className="p-6 border-b border-border">
        <img 
          src={bossWallahLogo} 
          alt="Boss Wallah Media" 
          className="h-12 w-auto"
        />
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 p-6">
        <div className="flex items-center justify-center mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="h-12 w-12 rounded-full border border-border hover:bg-muted"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Navigation Items - Hidden by default, shown when hamburger is clicked */}
        {isOpen && (
          <nav className="space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Contact Details */}
      <div className="p-6 border-t border-border space-y-4">
        <div className="space-y-3">
          <a 
            href="tel:+919876543210" 
            className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm">+91 98765 43210</span>
          </a>
          <a 
            href="mailto:hello@bosswallah.com" 
            className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
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
              className={`${social.color} hover:opacity-80 transition-opacity`}
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
      <div className="hidden lg:block fixed left-0 top-0 h-full w-80 z-40">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed top-4 left-4 z-50 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-80">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;