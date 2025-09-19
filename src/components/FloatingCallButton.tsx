import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {/* Animated ring effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse opacity-50"></div>
        
        <Button 
          variant="cta" 
          size="lg"
          className="relative rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 px-8 py-4 h-auto text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-x hover:animate-none border-2 border-white/20"
          onClick={() => window.open('https://calendly.com/bosswallah', '_blank')}
        >
          <Calendar className="w-6 h-6 mr-3 animate-bounce" />
          Let's Connect
        </Button>
      </div>
    </div>
  );
};

export default FloatingCallButton;