const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              About <span className="gradient-text">Boss Wallah Media</span>
            </h2>
            
            <div className="text-lg leading-relaxed space-y-6 text-muted-foreground">
              <p>
                Boss Wallah Media is India's leading social media and production platform, 
                powering brand impact at scale across regional markets. With a dynamic community 
                of <strong className="text-primary">18M+ followers</strong> and <strong className="text-primary">330M+ monthly views</strong> on 
                YouTube, Facebook, and Instagram, Boss Wallah Media delivers integrated campaigns, 
                production services, and influencer-style content for sectors like finance, health, 
                tech, e-commerce, and digital products.
              </p>
              
              <p>
                Operating <strong className="text-accent">six full-scale studios</strong> with <strong className="text-accent">60+ anchors</strong>, 
                editors, and creative talent, the company produces over <strong className="text-accent">200 videos weekly</strong> in 
                Telugu, Tamil, Kannada, Hindi, English and Malayalam. Trusted by large and small 
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

          {/* Visual Stats Grid/Infographic */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {/* Followers */}
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border text-center">
                <div className="text-5xl font-bold gradient-text mb-2">18M+</div>
                <div className="text-muted-foreground font-medium">Followers</div>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4"></div>
              </div>
              
              {/* Monthly Views */}
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border text-center">
                <div className="text-5xl font-bold gradient-text mb-2">330M+</div>
                <div className="text-muted-foreground font-medium">Monthly Views</div>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4"></div>
              </div>
              
              {/* Studios */}
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border text-center">
                <div className="text-5xl font-bold gradient-text mb-2">6</div>
                <div className="text-muted-foreground font-medium">Full-Scale Studios</div>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4"></div>
              </div>
              
              {/* Videos Weekly */}
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border text-center">
                <div className="text-5xl font-bold gradient-text mb-2">200+</div>
                <div className="text-muted-foreground font-medium">Videos Weekly</div>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;