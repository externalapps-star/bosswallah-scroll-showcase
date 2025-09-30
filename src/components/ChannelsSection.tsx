import { Youtube, Facebook, Instagram, ArrowRight, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import youtubeLogo from "@/assets/youtube-logo.png";
import facebookLogo from "@/assets/facebook-logo.png";
import instagramLogo from "@/assets/instagram-logo.png";

const ChannelsSection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const navigate = useNavigate();

  const platforms = [
    {
      name: "YouTube",
      icon: Youtube,
      image: youtubeLogo,
      description: "High-quality video content across multiple languages with millions of subscribers",
      totalChannels: "14 Channels",
      color: "text-red-600",
      bgColor: "bg-white",
      id: "youtube"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      image: facebookLogo,
      description: "Engaging social content and community building across regional markets",
      totalChannels: "10 Pages",
      color: "text-blue-600",
      bgColor: "bg-white",
      id: "facebook"
    },
    {
      name: "Instagram",
      icon: Instagram,
      image: instagramLogo,
      description: "Visual storytelling and brand experiences with authentic regional content", 
      totalChannels: "11 Profiles",
      color: "text-pink-600",
      bgColor: "bg-white",
      id: "instagram"
    },
  ];

  // Channel data - Ordered by preference: Telugu, Tamil, Kannada, Malayalam, Hindi, English
  const channelData = {
    youtube: [
      {
        language: "Telugu",
        channels: [
          { name: "Boss Wallah Telugu", url: "https://www.youtube.com/@bosswallahtelugu", category: "Main" },
          { name: "Boss Wallah Academy Telugu", url: "https://www.youtube.com/@bosswallahacademytelugu", category: "Academy" },
          { name: "Boss Wallah Farming Telugu", url: "https://www.youtube.com/@bosswallahfarmingtelugu", category: "Farming" }
        ]
      },
      {
        language: "Tamil",
        channels: [
          { name: "Boss Wallah Tamil", url: "https://www.youtube.com/@bosswallahtamil", category: "Main" },
          { name: "Boss Wallah Academy Tamil", url: "https://www.youtube.com/@bosswallahacademytamil", category: "Academy" },
          { name: "Boss Wallah Farming Tamil", url: "https://www.youtube.com/@bosswallahfarmingtamil", category: "Farming" }
        ]
      },
      {
        language: "Kannada",
        channels: [
          { name: "Boss Wallah Kannada", url: "https://www.youtube.com/@bosswallahkannada", category: "Main" },
          { name: "Boss Wallah Academy Kannada", url: "https://www.youtube.com/@bosswallahacademykannada", category: "Academy" },
          { name: "Boss Wallah Farming Kannada", url: "https://www.youtube.com/@bosswallahfarmingkannada", category: "Farming" }
        ]
      },
      {
        language: "Malayalam",
        channels: [
          { name: "Boss Wallah Malayalam", url: "https://www.youtube.com/@bosswallahmalayalam", category: "Main" }
        ]
      },
      {
        language: "Hindi",
        channels: [
          { name: "Boss Wallah Hindi", url: "https://www.youtube.com/@bosswallahhindi", category: "Main" },
          { name: "Boss Wallah Academy Hindi", url: "https://www.youtube.com/@bosswallahacademyhindi", category: "Academy" },
          { name: "Boss Wallah Farming Hindi", url: "https://www.youtube.com/@bosswallahfarminghindi", category: "Farming" }
        ]
      },
      {
        language: "English",
        channels: [
          { name: "Boss Wallah English", url: "https://www.youtube.com/@bosswallahenglish", category: "Main" }
        ]
      }
    ],
    facebook: [
      {
        language: "Telugu",
        channels: [
          { name: "Boss Wallah Telugu", url: "https://www.facebook.com/bosswallahtelugu", category: "Main" },
          { name: "Boss Wallah Academy Telugu", url: "https://www.facebook.com/bosswallahacademytelugu", category: "Academy" }
        ]
      },
      {
        language: "Tamil",
        channels: [
          { name: "Boss Wallah Tamil", url: "https://www.facebook.com/bosswallahtamil", category: "Main" },
          { name: "Boss Wallah Academy Tamil", url: "https://www.facebook.com/bosswallahacademytamil", category: "Academy" }
        ]
      },
      {
        language: "Kannada",
        channels: [
          { name: "Boss Wallah Kannada", url: "https://www.facebook.com/bosswallahkannada", category: "Main" },
          { name: "Boss Wallah Academy Kannada", url: "https://www.facebook.com/bosswallahacademykannada", category: "Academy" }
        ]
      },
      {
        language: "Hindi",
        channels: [
          { name: "Boss Wallah Hindi", url: "https://www.facebook.com/hindibosswallah", category: "Main" },
          { name: "Boss Wallah Academy Hindi", url: "https://www.facebook.com/bosswallahacademyhindi", category: "Academy" }
        ]
      },
      {
        language: "English",
        channels: [
          { name: "Boss Wallah English", url: "https://www.facebook.com/bosswallahenglish", category: "Main" }
        ]
      },
      {
        language: "Malayalam",
        channels: [
          { name: "Boss Wallah Malayalam", url: "https://www.facebook.com/bosswallahmalayalam", category: "Main" }
        ]
      }
    ],
    instagram: [
      {
        language: "Telugu",
        channels: [
          { name: "Boss Wallah Telugu", url: "https://www.instagram.com/bosswallah.telugu", category: "Main" },
          { name: "Boss Wallah Academy Telugu", url: "https://www.instagram.com/bosswallahacademytelugu", category: "Academy" }
        ]
      },
      {
        language: "Tamil",
        channels: [
          { name: "Boss Wallah Tamil", url: "https://www.instagram.com/bosswallah.tamil", category: "Main" },
          { name: "Boss Wallah Academy Tamil", url: "https://www.instagram.com/bosswallahacademytamil", category: "Academy" }
        ]
      },
      {
        language: "Kannada",
        channels: [
          { name: "Boss Wallah Kannada", url: "https://www.instagram.com/ffreedomapp.kannada", category: "Main" }
        ]
      },
      {
        language: "Hindi",
        channels: [
          { name: "Boss Wallah Hindi", url: "https://www.instagram.com/bosswallah.hindi", category: "Main" },
          { name: "Boss Wallah Farming Hindi", url: "https://www.instagram.com/bosswallahfarminghindi", category: "Farming" }
        ]
      },
      {
        language: "English",
        channels: [
          { name: "Boss Wallah English", url: "https://www.instagram.com/bosswallah.english", category: "Main" },
          { name: "Boss Wallah Farming English", url: "https://www.instagram.com/bosswallahfarmingenglish", category: "Farming" }
        ]
      },
      {
        language: "Malayalam",
        channels: [
          { name: "Boss Wallah Malayalam", url: "https://www.instagram.com/bosswallah.malayalam", category: "Main" }
        ]
      },
      {
        language: "Other",
        channels: [
          { name: "Boss Wallah App", url: "https://www.instagram.com/bosswallahapp", category: "App" }
        ]
      }
    ]
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Main": return "bg-primary/10 text-primary border-primary/20";
      case "Farming": return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      case "Business": return "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20";
      case "Academy": return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
      case "App": return "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="channels" className="py-4 pb-2 md:py-8 px-4 bg-background">
      <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 text-foreground whitespace-nowrap">
            Our Social Media <span className="gradient-text">Channels</span>
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with millions across multiple platforms and languages
          </p>
        </div>

        {/* Enhanced Grid with Aesthetic Background */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px] opacity-30"></div>
          
          <div className="relative flex md:grid md:grid-cols-3 gap-2 md:gap-8 max-w-7xl mx-auto px-6 py-2 md:p-8 overflow-x-auto md:overflow-x-visible scrollbar-hide snap-x snap-mandatory md:snap-none scroll-smooth">
            {platforms.map((platform) => {
              const IconComponent = platform.icon;
              const isSelected = selectedPlatform === platform.id;
              return (
                <div
                  key={platform.name}
                  className="group cursor-pointer flex-none w-[calc(80vw-8px)] md:w-auto snap-start"
                  onClick={() => setSelectedPlatform(isSelected ? null : platform.id)}
                >
                  {/* Brand-Themed Card with Authentic Colors */}
                  <div className={`relative overflow-hidden bg-card rounded-2xl transition-all duration-500 border-2 h-full flex flex-col shadow-lg ${
                    platform.name === 'YouTube' ? (
                      isSelected 
                        ? 'border-red-500 shadow-red-500/30 md:scale-105 shadow-2xl' 
                        : 'border-red-200 dark:border-red-800 group-hover:border-red-400 group-hover:shadow-red-500/20 md:group-hover:scale-102 group-hover:shadow-xl'
                    ) : platform.name === 'Facebook' ? (
                      isSelected 
                        ? 'border-blue-500 shadow-blue-500/30 md:scale-105 shadow-2xl' 
                        : 'border-blue-200 dark:border-blue-800 group-hover:border-blue-400 group-hover:shadow-blue-500/20 md:group-hover:scale-102 group-hover:shadow-xl'
                    ) : (
                      isSelected 
                        ? 'border-pink-500 shadow-pink-500/30 md:scale-105 shadow-2xl' 
                        : 'border-pink-200 dark:border-pink-800 group-hover:border-pink-400 group-hover:shadow-pink-500/20 md:group-hover:scale-102 group-hover:shadow-xl'
                    )
                  }`}>
                    
                    {/* Brand Color Header Section */}
                    <div className={`relative h-24 flex items-center justify-center ${
                      platform.name === 'YouTube' 
                        ? 'bg-gradient-to-r from-red-600 to-red-500' 
                        : platform.name === 'Facebook'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500'
                        : 'bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600'
                    }`}>
                      
                      {/* Decorative Pattern - reduced for clarity */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-4 left-6 w-6 h-6 border border-white/20 rounded-full"></div>
                        <div className="absolute top-6 right-8 w-4 h-4 border border-white/15 rounded-full"></div>
                        <div className="absolute bottom-4 left-10 w-5 h-5 border border-white/10 rounded-full"></div>
                      </div>
                      
                      {/* Platform Icon */}
                      <div className="relative z-10">
                        {platform.image ? (
                          <div className={`w-16 h-16 bg-white rounded-xl shadow-lg ${
                            platform.name === 'YouTube' || platform.name === 'Instagram' ? 'p-0' : 'p-1'
                          }`}>
                            <img 
                              src={platform.image} 
                              alt={`${platform.name} logo`}
                              className={`w-full h-full object-contain ${
                                platform.name === 'YouTube' || platform.name === 'Instagram' ? 'rounded-xl' : ''
                              }`}
                            />
                          </div>
                        ) : (
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                            <IconComponent 
                              size={32}
                              className={platform.color}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 p-3 md:p-6 flex flex-col">
                      
                      {/* Platform Title */}
                      <h3 className={`text-lg md:text-2xl font-bold mb-3 ${
                        platform.name === 'YouTube' 
                          ? 'text-red-600 dark:text-red-400' 
                          : platform.name === 'Facebook'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-pink-600 dark:text-pink-400'
                      }`}>
                        {platform.name}
                      </h3>
                      
                      {/* Channel Count with Brand Colors */}
                      <div className={`inline-flex items-center px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 w-fit ${
                        platform.name === 'YouTube' 
                          ? 'bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800' 
                          : platform.name === 'Facebook'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800'
                          : 'bg-pink-50 text-pink-700 border border-pink-200 dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800'
                      }`}>
                        <div className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full mr-1 md:mr-2 ${
                          platform.name === 'YouTube' ? 'bg-red-500' :
                          platform.name === 'Facebook' ? 'bg-blue-500' : 'bg-pink-500'
                        }`}></div>
                        {platform.totalChannels}
                      </div>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6 flex-1">
                        {platform.description}
                      </p>
                      
                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <button 
                          className={`w-full py-2 md:py-3 px-3 md:px-4 rounded-lg font-medium text-xs md:text-sm transition-all duration-300 ${
                            isSelected 
                              ? `text-white ${
                                  platform.name === 'YouTube' ? 'bg-red-600 hover:bg-red-700' :
                                  platform.name === 'Facebook' ? 'bg-blue-600 hover:bg-blue-700' :
                                  'bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700'
                                }` 
                              : `${
                                  platform.name === 'YouTube' ? 'bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/30' :
                                  platform.name === 'Facebook' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/30' :
                                  'bg-pink-50 text-pink-700 hover:bg-pink-100 dark:bg-pink-900/20 dark:text-pink-300 dark:hover:bg-pink-900/30'
                                }`
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPlatform(isSelected ? null : platform.id);
                          }}
                        >
                          <div className="flex items-center justify-center">
                            <span>{isSelected ? 'Hide Channels' : 'Explore Channels'}</span>
                            <ArrowRight size={16} className={`ml-2 transition-transform duration-300 ${
                              isSelected ? 'rotate-45' : 'group-hover:translate-x-1'
                            }`} />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Platform Details */}
        {selectedPlatform && (
          <div className="mt-16">
            {/* Enhanced Background similar to main cards */}
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-3xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px] opacity-30"></div>
              
              <div className={`relative bg-card rounded-2xl transition-all duration-500 border-2 shadow-lg ${
                selectedPlatform === 'youtube' ? 'border-red-500/60 shadow-red-500/20' :
                selectedPlatform === 'facebook' ? 'border-blue-500/60 shadow-blue-500/20' :
                'border-pink-500/60 shadow-pink-500/20'
              }`}>
                
                {/* Brand Color Header Section similar to main cards */}
                <div className={`relative h-24 flex items-center justify-between px-8 rounded-t-2xl ${
                  selectedPlatform === 'youtube' 
                    ? 'bg-gradient-to-r from-red-500/90 to-red-600/90' 
                    : selectedPlatform === 'facebook'
                    ? 'bg-gradient-to-r from-blue-500/90 to-blue-600/90'
                    : 'bg-gradient-to-r from-pink-500/90 via-purple-500/90 to-pink-600/90'
                }`}>
                  
                  {/* Decorative Pattern - reduced for clarity */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-4 left-6 w-6 h-6 border border-white/20 rounded-full"></div>
                    <div className="absolute top-6 right-8 w-4 h-4 border border-white/15 rounded-full"></div>
                    <div className="absolute bottom-4 left-10 w-5 h-5 border border-white/10 rounded-full"></div>
                  </div>
                  
                  <h3 className="text-xl md:text-3xl font-bold text-white relative z-10">
                    {platforms.find(p => p.id === selectedPlatform)?.name} Channels
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedPlatform(null)}
                    className="rounded-full text-primary-foreground hover:bg-primary-foreground/20 relative z-10"
                  >
                    <X size={20} />
                  </Button>
                </div>

                <div className="p-4 md:p-8">
                  <Tabs defaultValue="all" className="w-full">
                  <div>
                  <TabsList className="grid grid-cols-4 gap-2 text-[10px] md:text-sm md:grid-cols-7 md:gap-0 h-auto p-2">
                    <TabsTrigger value="all" className="px-1.5 py-1.5 text-[10px] md:text-sm">All</TabsTrigger>
                    <TabsTrigger value="Telugu" className="px-1 py-1.5 text-[10px] md:text-sm">Telugu</TabsTrigger>
                    <TabsTrigger value="Tamil" className="px-1 py-1.5 text-[10px] md:text-sm">Tamil</TabsTrigger>
                    <TabsTrigger value="Kannada" className="px-1 py-1.5 text-[10px] md:text-sm">Kannada</TabsTrigger>
                    <TabsTrigger value="Malayalam" className="px-0.5 py-1.5 text-[9px] md:text-sm">Malayalam</TabsTrigger>
                    <TabsTrigger value="Hindi" className="px-1 py-1.5 text-[10px] md:text-sm">Hindi</TabsTrigger>
                    <TabsTrigger value="English" className="px-1 py-1.5 text-[10px] md:text-sm">English</TabsTrigger>
                  </TabsList>
                  </div>

                  <TabsContent value="all" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {channelData[selectedPlatform as keyof typeof channelData]?.map((languageGroup, idx) => (
                        <div key={idx}>
                          <h4 className="text-sm md:text-lg font-semibold mb-4 text-foreground">{languageGroup.language}</h4>
                          <div className="space-y-3">
                            {languageGroup.channels.map((channel, channelIdx) => (
                              <Card key={channelIdx} className="group hover:shadow-md transition-all duration-300">
                                <CardContent className="p-4">
                                  <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                      <h5 className="text-xs md:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                        {channel.name}
                                      </h5>
                                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${getCategoryColor(channel.category)}`}>
                                        {channel.category}
                                      </div>
                                    </div>
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      onClick={() => window.open(channel.url, '_blank')}
                                      className="ml-2"
                                    >
                                      <ExternalLink size={14} />
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {/* Language-specific tabs */}
                  {["Telugu", "Tamil", "Kannada", "Malayalam", "Hindi", "English"].map((language) => (
                    <TabsContent key={language} value={language} className="mt-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {channelData[selectedPlatform as keyof typeof channelData]
                          ?.filter(languageGroup => languageGroup.language === language)
                          .map((languageGroup, idx) => (
                          <div key={idx} className="col-span-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {languageGroup.channels.map((channel, channelIdx) => (
                                <Card key={channelIdx} className="group hover:shadow-md transition-all duration-300">
                                  <CardContent className="p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex-1">
                                        <h5 className="text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors">
                                          {channel.name}
                                        </h5>
                                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${getCategoryColor(channel.category)}`}>
                                          {channel.category}
                                        </div>
                                      </div>
                                      <Button
                                        size="sm"
                                        variant="ghost"
                                        onClick={() => window.open(channel.url, '_blank')}
                                        className="ml-2"
                                      >
                                        <ExternalLink size={14} />
                                      </Button>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChannelsSection;