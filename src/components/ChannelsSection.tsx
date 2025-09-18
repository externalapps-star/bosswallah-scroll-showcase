import { Youtube, Facebook, Instagram } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

  const languageChannels = [
    { name: "Telugu", preview: "Regional content for Telugu audience", subscribers: "5.2M" },
    { name: "Tamil", preview: "Engaging Tamil language content", subscribers: "3.8M" },
    { name: "Kannada", preview: "Kannada content for local markets", subscribers: "2.4M" },
    { name: "Hindi", preview: "Hindi content for pan-India reach", subscribers: "4.1M" },
    { name: "English", preview: "Global English content", subscribers: "1.9M" },
    { name: "Malayalam", preview: "Malayalam regional content", subscribers: "1.2M" },
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

        {/* Language Channel Carousel */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
            Channel Previews by <span className="gradient-text">Language</span>
          </h3>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {languageChannels.map((channel) => (
                <CarouselItem key={channel.name} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-xl p-4 shadow-soft border border-border h-full hover:shadow-brand transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-3 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{channel.name}</div>
                        <div className="text-sm text-muted-foreground">{channel.subscribers} subscribers</div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{channel.name} Channel</h4>
                    <p className="text-sm text-muted-foreground">{channel.preview}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ChannelsSection;