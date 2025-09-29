import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import whatsappIcon from "@/assets/whatsapp-icon-new.png";
import bossWallahLogo from "@/assets/boss-wallah-logo.svg";
const TopStrip = () => {
  const openWhatsApp = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = "919876543210"; // Format: country code + number (no spaces or special chars)
    const message = "Hi! I'm interested in learning more about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <div className="fixed top-0 left-0 right-0 z-50 bg-white text-foreground border-b border-border px-6 shadow-soft py-2">
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

        {/* Message */}
        <div className="flex-1 text-center">
          <p className="text-sm md:text-base font-medium">
            <span className="bg-gradient-to-r from-[#755292] to-[#F05C25] bg-clip-text text-transparent font-bold text-3xl">#1</span> <span className="text-[#F05C25] font-bold text-3xl">Social Media Platform in South India</span>
          </p>
        </div>

        {/* CTA and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button onClick={openWhatsApp} variant="ghost" size="icon" className="hover:bg-white/10">
            <img src={whatsappIcon} alt="WhatsApp" className="h-10 w-10 object-contain" />
          </Button>
        </div>
      </div>
    </div>;
};
export default TopStrip;