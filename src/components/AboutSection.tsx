import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animation state for numbers
  const [animatedValues, setAnimatedValues] = useState({
    followers: 0,
    views: 0,
    studios: 0,
    videos: 0
  });

  // Counter animation function
  const animateCounter = (target: number, key: keyof typeof animatedValues) => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, target);
      
      setAnimatedValues(prev => ({
        ...prev,
        [key]: Math.floor(current)
      }));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
  };

  // Reset and start animations
  const startAnimations = () => {
    // Reset values to 0
    setAnimatedValues({
      followers: 0,
      views: 0,
      studios: 0,
      videos: 0
    });

    // Start animations with slight delay
    setTimeout(() => {
      animateCounter(18, 'followers');
      animateCounter(330, 'views');
      animateCounter(6, 'studios');
      animateCounter(200, 'videos');
    }, 200);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimations();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content - Mobile optimized */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-foreground">
              About <span className="gradient-text">Boss Wallah</span>
            </h2>
            
            <div className="text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-6 text-muted-foreground">
              <p>
                Boss Wallah Media is India's leading social media and production platform, powering brand impact at scale across regional markets. With a dynamic community of <strong className="text-accent">18M+ followers</strong> and <strong className="text-accent">330M+ monthly views</strong> on YouTube, Facebook, and Instagram, Boss Wallah Media delivers integrated campaigns, production services, and influencer-style content for sectors like finance, health, tech, e-commerce, and digital products.
              </p>
              
              <p>
                Operating <strong className="text-accent">six full-scale studios</strong> with <strong className="text-accent">60+ anchors</strong>, 
                editors, and creative talent, the company produces over <strong className="text-accent">200 videos weekly</strong> in 
                Telugu, Tamil, Kannada, Malayalam, Hindi, and English. Trusted by large and small
                Indian and international brands, Boss Wallah Media ensures campaigns deliver 
                measurable ROI.
              </p>
              
              <p>
                From social promotion and integrated advertising to branded videos and UGC-style 
                influencer content, <strong className="text-primary">Boss Wallah Media is the one-stop partner</strong> for 
                brands seeking regional dominance and creative excellence in India.
              </p>
            </div>
          </div>

          {/* Visual Stats Grid/Infographic - Mobile optimized */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {/* Followers */}
              <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-soft border border-border text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-1 sm:mb-2">{animatedValues.followers}M+</div>
                <div className="text-muted-foreground font-medium text-xs sm:text-sm lg:text-base">Followers</div>
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-2 sm:mt-4"></div>
              </div>
              
              {/* Monthly Views */}
              <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-soft border border-border text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-1 sm:mb-2">{animatedValues.views}M+</div>
                <div className="text-muted-foreground font-medium text-xs sm:text-sm lg:text-base">Monthly Views</div>
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-2 sm:mt-4"></div>
              </div>
              
              {/* Studios */}
              <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-soft border border-border text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-1 sm:mb-2">{animatedValues.studios}</div>
                <div className="text-muted-foreground font-medium text-xs sm:text-sm lg:text-base">Full-Scale Studios</div>
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-2 sm:mt-4"></div>
              </div>
              
              {/* Videos Weekly */}
              <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-soft border border-border text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-1 sm:mb-2">{animatedValues.videos}+</div>
                <div className="text-muted-foreground font-medium text-xs sm:text-sm lg:text-base">Videos Weekly</div>
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-2 sm:mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;