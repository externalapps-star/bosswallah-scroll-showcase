import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        variant="cta" 
        size="lg"
        className="rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 animate-pulse hover:animate-none px-6 py-3 h-auto"
        onClick={() => window.open('https://calendly.com/bosswallah', '_blank')}
      >
        <Phone className="w-5 h-5 mr-2" />
        Book a Call
      </Button>
    </div>
  );
};

export default FloatingCallButton;