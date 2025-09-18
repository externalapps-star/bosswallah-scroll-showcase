const AboutSection = () => {
  return (
    <section id="about" className="section-padding-tight bg-gradient-card border-t-2 border-primary/30">
      <div className="container-custom">
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm mb-3">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="font-semibold">About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About <span className="gradient-text">Boss Wallah Media</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="text-sm leading-relaxed space-y-3 text-muted-foreground">
              <p>
                Boss Wallah Media is India's leading social media and production platform, 
                powering brand impact at scale across regional markets. With a dynamic community 
                of <strong className="gradient-text">18M+ followers</strong> and <strong className="gradient-text">330M+ monthly views</strong> on 
                YouTube, Facebook, and Instagram.
              </p>
              
              <p>
                Operating <strong className="text-accent">six full-scale studios</strong> with <strong className="text-accent">60+ anchors</strong>, 
                editors, and creative talent, producing over <strong className="text-accent">200 videos weekly</strong> in 
                Telugu, Tamil, Kannada, Hindi, English and Malayalam.
              </p>
            </div>
          </div>

          {/* Compact Stats Grid */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {/* Followers */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">18M+</div>
                <div className="text-xs text-muted-foreground">Followers</div>
              </div>
              
              {/* Monthly Views */}
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-1">330M+</div>
                <div className="text-xs text-muted-foreground">Views</div>
              </div>
              
              {/* Studios */}
              <div className="bg-gradient-to-br from-highlight/10 to-highlight/5 border border-highlight/30 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-highlight mb-1">6</div>
                <div className="text-xs text-muted-foreground">Studios</div>
              </div>
              
              {/* Videos Weekly */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text mb-1">200+</div>
                <div className="text-xs text-muted-foreground">Weekly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;