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
  return <div className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e] text-primary-foreground border-b border-border px-6 shadow-soft py-2">
      <div className="flex items-center justify-between max-w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={bossWallahLogo} alt="Boss Wallah Media" className="h-12 w-auto object-contain bg-white p-2 rounded" />
        </div>

        {/* Message */}
        <div className="flex-1 text-center">
          <p className="text-sm md:text-base font-medium">
            <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent font-bold">#1</span> Social Media Agency (in South India, for now)
          </p>
        </div>

        {/* CTA and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Button onClick={openWhatsApp} variant="outline" size="icon" className="hover:bg-secondary/20">
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>;
};
export default TopStrip;