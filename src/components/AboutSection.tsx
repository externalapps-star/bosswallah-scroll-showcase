const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            About <span className="gradient-text">Boss Wallah Media</span>
          </h2>
          
          <div className="text-lg md:text-xl leading-relaxed space-y-6 text-muted-foreground">
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

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">18M+</div>
              <div className="text-muted-foreground mt-2">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">330M+</div>
              <div className="text-muted-foreground mt-2">Monthly Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">200+</div>
              <div className="text-muted-foreground mt-2">Videos Weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">6</div>
              <div className="text-muted-foreground mt-2">Studios</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;