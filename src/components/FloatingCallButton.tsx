import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const FloatingCallButton = () => {
  return (
    <TooltipProvider>
      <div className="fixed bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 z-50">
        <div className="relative">
          {/* Mobile-optimized animated ring effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse opacity-50"></div>
          
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <Button 
                variant="cta" 
                size="mobile"
                className="relative rounded-full shadow-brand hover:shadow-orange transition-all duration-300 hover:scale-105 active:scale-95 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 h-auto text-sm sm:text-base lg:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-size-200 animate-gradient-x hover:animate-none border-2 border-white/20 font-fira will-change-transform"
                onClick={() => window.open('https://calendly.com/bosswallah', '_blank')}
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 animate-bounce" />
                <span className="hidden sm:inline">Let's Connect</span>
                <span className="sm:hidden">Connect</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent 
              side="left" 
              className="max-w-xs p-3 sm:p-4 bg-card/95 backdrop-blur-md border-2 border-primary/20 shadow-brand rounded-xl mr-2 sm:mr-0"
            >
              <div className="relative">
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-30"></div>
                <div className="relative font-fira">
                  <p className="text-xs sm:text-sm font-medium text-foreground leading-relaxed">
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