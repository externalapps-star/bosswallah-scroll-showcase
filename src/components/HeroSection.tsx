import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Theme Toggle - removed since it's now in header */}
      
      {/* Background Video/Montage */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Enhanced overlay with softer, more comfortable opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary/50 to-accent/60">
          {/* Subtle animated light particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse blur-sm"></div>
            <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-accent/30 rounded-full animate-bounce delay-100 blur-sm"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-ping delay-200"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/25 rounded-full animate-pulse delay-300 blur-sm"></div>
            <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-accent/25 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-2/3 left-1/2 w-0.5 h-0.5 bg-white/30 rounded-full animate-ping delay-700 blur-sm"></div>
          </div>
          
          {/* Minimal floating glitter effect */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-0.5 h-0.5 bg-white/30 rounded-full animate-pulse blur-sm opacity-40"></div>
            <div className="absolute top-32 right-24 w-0.5 h-0.5 bg-accent/40 rounded-full animate-bounce delay-150 opacity-30"></div>
            <div className="absolute bottom-40 left-32 w-0.5 h-0.5 bg-primary/30 rounded-full animate-ping delay-300 opacity-35"></div>
            <div className="absolute top-48 right-40 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse delay-400 blur-sm opacity-25"></div>
            <div className="absolute bottom-24 right-16 w-0.5 h-0.5 bg-accent/35 rounded-full animate-bounce delay-600 opacity-40"></div>
            <div className="absolute top-60 left-48 w-0.5 h-0.5 bg-white/25 rounded-full animate-ping delay-800 opacity-30"></div>
          </div>
          
          {/* Very subtle shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/2 to-transparent animate-pulse opacity-50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight whitespace-nowrap">
            {t('hero.title')}
          </h1>
          <p className="text-2xl md:text-3xl mb-6 font-light">
            {t('hero.subtitle')}
          </p>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-light">
            {t('hero.description')}
          </p>
          
          {/* Primary CTA */}
          <div className="flex flex-col items-center gap-8 mb-8">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-16 py-8 h-auto font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Campaign
            </Button>
            
            {/* Secondary CTAs Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/40 hover:bg-white hover:text-primary hover:border-white backdrop-blur-md font-medium py-3 px-6 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Story
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/40 hover:bg-white hover:text-primary hover:border-white backdrop-blur-md font-medium py-3 px-6 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('channels')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Channels
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/40 hover:bg-white hover:text-primary hover:border-white backdrop-blur-md font-medium py-3 px-6 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('campaigns')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/40 hover:bg-white hover:text-primary hover:border-white backdrop-blur-md font-medium py-3 px-6 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See The Impact
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/40 hover:bg-white hover:text-primary hover:border-white backdrop-blur-md font-medium py-3 px-6 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Latest News
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/70 transition-colors">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;