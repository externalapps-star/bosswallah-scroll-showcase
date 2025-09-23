import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
const TopStrip = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <div className="fixed top-0 left-0 lg:left-56 right-0 z-50 bg-background border-b border-border px-6 shadow-soft py-2">
      <div className="flex items-center justify-between max-w-full">
        {/* Message */}
        <div className="flex-1 text-center">
          <p className="text-sm md:text-base font-medium">
            Take the First Step Towards Accelerated Growth
          </p>
        </div>

        {/* CTA and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Button onClick={scrollToContact} variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90 font-medium">
            Talk to Our Team
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>;
};
export default TopStrip;