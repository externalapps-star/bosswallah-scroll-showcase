import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import heroVideoBg from "@/assets/hero-video-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Montage */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroVideoBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Boss Wallah Media
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-medium">
          India's Leading Social Media & Production Platform
        </p>
        <p className="text-lg md:text-xl mb-12 opacity-90 max-w-3xl mx-auto">
          Powering brand impact at scale across regional markets.
        </p>
        <Button 
          variant="hero" 
          size="lg"
          className="text-lg px-12 py-6 h-auto"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Discover Our Story
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;