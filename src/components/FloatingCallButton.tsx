import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const FloatingCallButton = () => {
  return (
    <TooltipProvider>
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative">
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <Button 
                variant="cta" 
                size="lg"
                className="relative rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 px-8 py-4 h-auto text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary border-2 border-white/20"
                onClick={() => window.open('https://calendly.com/bosswallah', '_blank')}
              >
                <Calendar className="w-6 h-6 mr-3" />
                Let's Connect
              </Button>
            </TooltipTrigger>
            <TooltipContent 
              side="left" 
              className="max-w-xs p-4 bg-gradient-to-br from-card via-card to-muted border-2 border-primary/20 shadow-brand rounded-xl backdrop-blur-sm"
            >
              <div className="relative">
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-30"></div>
                <div className="relative">
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    📅 <span className="gradient-text font-bold">Book a time that works for you</span> and let's discuss your marketing goals in detail.
                  </p>
                  <div className="flex items-center mt-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></div>
                    Free consultation • 30 minutes
                  </div>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default FloatingCallButton;