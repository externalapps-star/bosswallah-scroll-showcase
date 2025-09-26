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

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-b border-border shadow-brand py-3 px-4">
      <div className="flex items-center justify-between max-w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src={bossWallahLogo} 
            alt="Boss Wallah Media" 
            className="h-8 sm:h-10 md:h-12 w-auto object-contain bg-white p-1 sm:p-2 rounded-lg" 
          />
        </div>

        {/* Message - Hidden on small screens */}
        <div className="hidden sm:flex flex-1 text-center px-4">
          <p className="text-sm md:text-base font-medium text-white">
            Take the First Step Towards Accelerated Growth
          </p>
        </div>

        {/* CTA and Theme Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button 
            onClick={openWhatsApp} 
            variant="secondary" 
            size="sm" 
            className="bg-white text-primary hover:bg-white/90 font-semibold px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Talk to Our Team</span>
            <span className="sm:hidden">Talk</span>
          </Button>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStrip;