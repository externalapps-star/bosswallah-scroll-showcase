import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  variant?: "default" | "bordered" | "subtle";
}

const CollapsibleSection = ({ 
  title, 
  children, 
  defaultOpen = true, 
  className,
  variant = "default" 
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const variants = {
    default: "bg-card border border-border",
    bordered: "bg-card border-2 border-primary/20",
    subtle: "bg-gradient-to-br from-card/50 to-muted/20 border border-border/50"
  };

  return (
    <div className={cn(
      "rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-soft transition-all duration-300",
      variants[variant],
      isOpen && "shadow-brand",
      className
    )}>
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-muted/30 transition-colors rounded-t-xl sm:rounded-t-2xl lg:rounded-t-3xl touch-manipulation"
        aria-expanded={isOpen}
        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${title} section`}
      >
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground text-left">
          {title}
        </h3>
        <div className={cn(
          "flex-shrink-0 ml-4 transition-transform duration-300",
          isOpen && "rotate-180"
        )}>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
        </div>
      </button>

      {/* Content */}
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;