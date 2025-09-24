import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import whatsappIcon from "@/assets/whatsapp-icon.png";
const TopStrip = () => {
  const openWhatsApp = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = "919876543210"; // Format: country code + number (no spaces or special chars)
    const message = "Hi! I'm interested in learning more about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <div className="fixed top-0 left-0 lg:left-56 right-0 z-50 bg-primary text-primary-foreground border-b border-border px-6 shadow-soft py-2">
      <div className="flex items-center justify-between max-w-full">
        {/* Message */}
        <div className="flex-1 text-center">
          <p className="text-sm md:text-base font-medium">
            Take the First Step Towards Accelerated Growth
          </p>
        </div>

        {/* CTA and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Button onClick={openWhatsApp} variant="secondary" size="sm" className="bg-secondary text-primary hover:bg-secondary/90 font-medium px-2 py-1">
            <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 mr-1" />
            Talk to Our Team
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>;
};
export default TopStrip;