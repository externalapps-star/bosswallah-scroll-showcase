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
    <section id="channels" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Social Media <span className="gradient-text">Channels</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with millions across multiple platforms and languages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <div
                key={platform.name}
                className="group cursor-pointer"
                onClick={() => window.open(platform.link, '_self')}
              >
                <div className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-brand transition-all duration-500 group-hover:scale-105 border border-border h-full flex flex-col">
                  <div className="text-center flex-1">
                    {/* Icon Container */}
                    <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center ${platform.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent 
                        size={56}
                        className={`${platform.color}`}
                      />
                    </div>
                    
                    {/* Platform Name */}
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {platform.name}
                    </h3>
                    
                    {/* Channel Count */}
                    <div className="text-sm font-semibold text-primary mb-4 bg-primary/10 rounded-full px-4 py-2 inline-block">
                      {platform.totalChannels}
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {platform.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-center text-primary font-semibold group-hover:text-accent transition-colors">
                      View All Channels
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Available in <strong className="text-primary">Telugu, Tamil, Kannada, Hindi, English, and Malayalam</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;