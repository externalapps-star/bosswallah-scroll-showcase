import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import heroVideoBg from "@/assets/hero-video-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      
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
        {/* Enhanced overlay with glitters and light effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70">
          {/* Animated light particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse blur-sm"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/60 rounded-full animate-bounce delay-100 blur-sm"></div>
            <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/30 rounded-full animate-ping delay-200"></div>
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse delay-300 blur-sm"></div>
            <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-accent/40 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-white/60 rounded-full animate-ping delay-700 blur-sm"></div>
          </div>
          
          {/* Floating glitter effect */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-0.5 h-0.5 bg-white/70 rounded-full animate-pulse blur-sm opacity-80"></div>
            <div className="absolute top-32 right-24 w-0.5 h-0.5 bg-accent/80 rounded-full animate-bounce delay-150 opacity-60"></div>
            <div className="absolute bottom-40 left-32 w-1 h-1 bg-primary/50 rounded-full animate-ping delay-300 opacity-70"></div>
            <div className="absolute top-48 right-40 w-0.5 h-0.5 bg-white/90 rounded-full animate-pulse delay-400 blur-sm"></div>
            <div className="absolute bottom-24 right-16 w-0.5 h-0.5 bg-accent/70 rounded-full animate-bounce delay-600 opacity-80"></div>
            <div className="absolute top-60 left-48 w-1 h-1 bg-white/40 rounded-full animate-ping delay-800 opacity-60"></div>
          </div>
          
          {/* Subtle shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
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
          
          {/* Primary CTA */}
          <div className="flex flex-col items-center gap-8 mb-8">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-16 py-8 h-auto font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('channels')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Channels
            </Button>
            
            {/* Secondary CTAs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/40 hover:bg-white/20 hover:border-white/60 backdrop-blur-md font-medium py-3 px-6 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('campaigns')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/40 hover:bg-white/20 hover:border-white/60 backdrop-blur-md font-medium py-3 px-6 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Story
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/40 hover:bg-white/20 hover:border-white/60 backdrop-blur-md font-medium py-3 px-6 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Latest News
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/40 hover:bg-white/20 hover:border-white/60 backdrop-blur-md font-medium py-3 px-6 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Customer Reviews
              </Button>
            </div>
          </div>
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