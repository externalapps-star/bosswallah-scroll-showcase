import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import bossWallahLogo from "@/assets/boss-wallah-logo.svg";

const TopStrip = () => {
  const openWhatsApp = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = "919876543210"; // Format: country code + number (no spaces or special chars)
    const message = "Hi! I'm interested in learning more about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const navigationItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Channels", id: "channels" },
    { label: "Campaigns", id: "campaigns" },
    { label: "Testimonials", id: "testimonials" },
    { label: "News", id: "news" },
    { label: "Newsletter", id: "newsletter" },
    { label: "Consult", id: "contact" }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e] text-primary-foreground border-b border-border px-6 shadow-soft py-3">
      <div className="flex items-center justify-between max-w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src={bossWallahLogo} 
            alt="Boss Wallah Media" 
            className="h-10 w-auto object-contain bg-white p-1 rounded" 
          />
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden lg:flex flex-1 justify-center">
          <nav className="flex items-center space-x-8">
            {navigationItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)} 
                className="text-sm font-medium text-white hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* CTA and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Button onClick={openWhatsApp} variant="secondary" size="sm" className="bg-secondary text-primary hover:bg-secondary/90 font-medium px-3 py-2">
            <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 mr-2" />
            Talk to Our Team
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default TopStrip;