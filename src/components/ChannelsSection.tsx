import { Youtube, Facebook, Instagram } from "lucide-react";

const ChannelsSection = () => {
  const channels = [
    {
      name: "YouTube",
      icon: Youtube,
      description: "High-quality video content across multiple languages",
      link: "#", // Replace with actual YouTube channel links
      color: "text-red-600"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      description: "Engaging social content and community building",
      link: "#", // Replace with actual Facebook page links
      color: "text-blue-600"
    },
    {
      name: "Instagram",
      icon: Instagram,
      description: "Visual storytelling and brand experiences", 
      link: "#", // Replace with actual Instagram profile links
      color: "text-pink-600"
    },
  ];

  return (
    <section id="channels" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Social Media <span className="gradient-text">Channels</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with millions across multiple platforms and languages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((channel) => {
            const IconComponent = channel.icon;
            return (
              <div
                key={channel.name}
                className="group cursor-pointer"
                onClick={() => window.open(channel.link, '_blank')}
              >
                <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-brand transition-all duration-300 group-hover:scale-105 border border-border h-full flex flex-col">
                  <div className="text-center flex-1">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-background shadow-lg">
                      <IconComponent 
                        size={48}
                        className={`${channel.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {channel.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                      {channel.description}
                    </p>
                    <div className="text-primary font-semibold group-hover:text-accent transition-colors text-sm">
                      Explore Channels →
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            Available in <strong className="text-primary">Telugu, Tamil, Kannada, Hindi, English, and Malayalam</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;