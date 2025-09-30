import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Youtube, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import bossWallahLogo from "@/assets/boss-wallah-logo.svg";
interface SidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}
const Sidebar = ({
  isMenuOpen,
  setIsMenuOpen
}: SidebarProps) => {
  const [activeSection, setActiveSection] = useState("home");

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
    label: "Blogs",
    id: "blogs"
  }, {
    label: "Newsletter",
    id: "newsletter"
  }, {
    label: "Consult",
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
  return <>
    {/* Mobile Sidebar */}
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="fixed top-4 right-4 z-50 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-80">
          <div className="flex flex-col h-full bg-[#1a1a2e]">
            {/* Header */}
            <div className="p-6 border-b border-border/10">
              <h2 className="text-white text-lg font-semibold">Menu</h2>
            </div>
            
            {/* Navigation */}
            <div className="flex-1 p-6">
              <nav className="space-y-2">
                {navigationItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors">
                    {item.label}
                  </button>)}
              </nav>
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-border/10 space-y-4">
              <div className="space-y-3">
                <a href="tel:+917899571799" className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+91 7899571799</span>
                </a>
                <a href="mailto:brand@bosswallah.com" className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">brand@bosswallah.com</span>
                </a>
              </div>
              <div className="flex space-x-4 pt-2">
                <a href={socialLinks[0].href} className="text-gray-400 hover:text-red-500 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href={socialLinks[1].href} className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href={socialLinks[2].href} className="text-gray-400 hover:text-pink-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </>;
};
export default Sidebar;