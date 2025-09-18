import { Youtube, Facebook, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChannelsSection = () => {
  const platforms = [
    {
      name: "YouTube",
      icon: Youtube,
      description: "High-quality video content across multiple languages with millions of subscribers",
      totalChannels: "16 Channels",
      color: "text-red-600",
      bgColor: "bg-red-50",
      link: "/channels/youtube"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      description: "Engaging social content and community building across regional markets",
      totalChannels: "15 Pages",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      link: "/channels/facebook"
    },
    {
      name: "Instagram",
      icon: Instagram,
      description: "Visual storytelling and brand experiences with authentic regional content", 
      totalChannels: "15 Profiles",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      link: "/channels/instagram"
    },
  ];

  return (
    <section id="channels" className="section-padding-tight bg-muted/30 border-t-2 border-accent/30">
      <div className="container-custom">
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-accent text-white px-4 py-2 rounded-full text-sm mb-3">
            <span className="font-semibold">Multi-Platform</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Social Media <span className="gradient-text">Channels</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with millions across multiple platforms and languages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {platforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className="group cursor-pointer"
                onClick={() => window.open(platform.link, '_self')}
              >
                <div className="bg-gradient-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-500 group-hover:scale-105 border border-primary/30 h-full flex flex-col">
                  <div className="text-center flex-1">
                    {/* Icon Container */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${platform.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent 
                        size={32}
                        className={`${platform.color}`}
                      />
                    </div>
                    
                    {/* Platform Name */}
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:gradient-text transition-colors">
                      {platform.name}
                    </h3>
                    
                    {/* Channel Count */}
                    <div className="text-xs font-semibold text-white mb-3 bg-gradient-primary rounded-full px-3 py-1 inline-block">
                      {platform.totalChannels}
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      {platform.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-center text-primary font-semibold group-hover:text-accent transition-colors text-sm">
                      View Channels
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm">
            Available in <strong className="gradient-text">Telugu, Tamil, Kannada, Hindi, English, and Malayalam</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;