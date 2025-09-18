const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About <span className="gradient-text">Boss Wallah Media</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-base md:text-lg">
              Boss Wallah Media is India's leading social media and production platform, powering brand impact at scale across regional markets. With a dynamic community of 18M+ followers and 330M+ monthly views on YouTube, Facebook, and Instagram, Boss Wallah Media delivers integrated campaigns, production services, and influencer-style content for sectors like finance, health, tech, e-commerce, and digital products.
            </p>
            
            <p className="text-base md:text-lg">
              Operating six full-scale studios with 60+ anchors, editors, and creative talent, the company produces over 200 videos weekly in Telugu, Tamil, Kannada, Hindi, English and Malayalam. Trusted by large and small Indian and international brands, Boss Wallah Media ensures campaigns deliver measurable ROI.
            </p>
            
            <p className="text-base md:text-lg">
              From social promotion and integrated advertising to branded videos and UGC-style influencer content, Boss Wallah Media is the one-stop partner for brands seeking regional dominance and creative excellence in India.
            </p>
          </div>

          {/* Visual Stats Grid/Infographic */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 hover:shadow-brand transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">18M+</div>
              <div className="text-sm font-medium text-foreground">Total Followers</div>
              <div className="text-xs text-muted-foreground mt-1">Across All Platforms</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl border border-accent/20 hover:shadow-brand transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">330M+</div>
              <div className="text-sm font-medium text-foreground">Monthly Views</div>
              <div className="text-xs text-muted-foreground mt-1">YouTube, FB, Instagram</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 hover:shadow-brand transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">6</div>
              <div className="text-sm font-medium text-foreground">Full-Scale Studios</div>
              <div className="text-xs text-muted-foreground mt-1">Production Ready</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl border border-accent/20 hover:shadow-brand transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">200+</div>
              <div className="text-sm font-medium text-foreground">Weekly Videos</div>
              <div className="text-xs text-muted-foreground mt-1">Multi-Language Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;