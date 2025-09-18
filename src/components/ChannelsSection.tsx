import youtubeIcon from "@/assets/youtube-icon.jpg";
import facebookIcon from "@/assets/facebook-icon.jpg";
import instagramIcon from "@/assets/instagram-icon.jpg";

const ChannelsSection = () => {
  const channels = [
    {
      name: "YouTube",
      icon: youtubeIcon,
      description: "High-quality video content across multiple languages",
      link: "#", // Replace with actual YouTube channel links
    },
    {
      name: "Facebook",
      icon: facebookIcon,
      description: "Engaging social content and community building",
      link: "#", // Replace with actual Facebook page links
    },
    {
      name: "Instagram",
      icon: instagramIcon,
      description: "Visual storytelling and brand experiences",
      link: "#", // Replace with actual Instagram profile links
    },
  ];

  return (
    <section id="channels" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Social Media <span className="gradient-text">Channels</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with millions across multiple platforms and languages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {channels.map((channel) => (
            <div
              key={channel.name}
              className="group cursor-pointer"
              onClick={() => window.open(channel.link, '_blank')}
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-brand transition-all duration-300 group-hover:scale-105 border border-border">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={channel.icon} 
                      alt={`${channel.name} Channel`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {channel.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {channel.description}
                  </p>
                  <div className="mt-6 text-primary font-semibold group-hover:text-accent transition-colors">
                    Explore Channels →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg">
            Available in <strong className="text-primary">Telugu, Tamil, Kannada, Hindi, English, and Malayalam</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;