import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
const FloatingCallButton = () => {
  return <TooltipProvider>
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative">
          <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
              <Button variant="cta" size="lg" className="relative rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 px-4 py-2 sm:px-8 sm:py-4 h-auto text-xs sm:text-xl font-bold bg-gradient-to-r from-primary via-accent to-primary border-2 border-white/20" onClick={() => window.open('https://calendar.app.google/E7d7wnoCdBbLwJrL9', '_blank')}>
                <Calendar className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 animate-bounce" />
                <span className="hidden sm:inline">Let's Connect</span>
                <span className="sm:hidden">Let's Connect</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="max-w-[200px] sm:max-w-xs p-2 sm:p-4 bg-gradient-to-br from-card via-card to-muted border-2 border-primary/20 shadow-brand rounded-xl backdrop-blur-sm">
              <div className="relative">
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-30"></div>
                <div className="relative">
                  <p className="text-xs sm:text-sm font-medium text-foreground leading-relaxed">
                    📅 <span className="gradient-text font-bold">Book a consultation</span> to discuss your marketing goals.
                  </p>
                  <div className="flex items-center mt-1 sm:mt-2 text-[10px] sm:text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse mr-1 sm:mr-2"></div>
                    Free consultation • 30 min
                  </div>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>;
};
export default FloatingCallButton;