import { Button } from "@/components/ui/button";
import heroVideoBg from "@/assets/hero-video-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Montage */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroVideoBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Boss Wallah Media
          </h1>
          <p className="text-2xl md:text-3xl mb-6 font-light">
            India's Leading Social Media & Production Platform
          </p>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-light">
            Powering brand impact at scale across regional markets.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-16 py-8 h-auto font-semibold"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover Our Story
          </Button>
        </div>
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