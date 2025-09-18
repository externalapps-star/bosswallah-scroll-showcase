import { Youtube, Facebook, Instagram, ArrowRight, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import youtubeLogo from "@/assets/youtube-logo.png";
import facebookLogo from "@/assets/facebook-logo.png";
import instagramLogo from "@/assets/instagram-logo.png";

const ChannelsSection = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const platforms = [
    {
      name: "YouTube",
      icon: Youtube,
      image: youtubeLogo,
      description: "High-quality video content across multiple languages with millions of subscribers",
      totalChannels: "16 Channels",
      color: "text-red-600",
      bgColor: "bg-white",
      id: "youtube"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      image: facebookLogo,
      description: "Engaging social content and community building across regional markets",
      totalChannels: "15 Pages",
      color: "text-blue-600",
      bgColor: "bg-white",
      id: "facebook"
    },
    {
      name: "Instagram",
      icon: Instagram,
      image: instagramLogo,
      description: "Visual storytelling and brand experiences with authentic regional content", 
      totalChannels: "15 Profiles",
      color: "text-pink-600",
      bgColor: "bg-white",
      id: "instagram"
    },
  ];

  // Channel data
  const channelData = {
    youtube: [
      {
        language: "Telugu",
        channels: [
          { name: "Boss Wallah Telugu", url: "https://www.youtube.com/@bosswallahtelugu", category: "Main" },
          { name: "Boss Wallah Farming Telugu", url: "https://www.youtube.com/@bosswallahfarmingtelugu", category: "Farming" },
          { name: "Boss Wallah Academy Telugu", url: "https://www.youtube.com/@bosswallahAcademytelugu", category: "Academy" }
        ]
      },
      {
        language: "Tamil",
        channels: [
          { name: "Boss Wallah Tamil", url: "https://www.youtube.com/@bosswallahtamil", category: "Main" },
          { name: "Boss Wallah Farming Tamil", url: "https://www.youtube.com/@bosswallahfarmingtamil", category: "Farming" },
          { name: "Boss Wallah Academy Tamil", url: "https://www.youtube.com/@bosswallahAcademytamil", category: "Academy" }
        ]
      },
      {
        language: "Kannada",
        channels: [
          { name: "Boss Wallah Kannada", url: "https://www.youtube.com/@bosswallahkannada", category: "Main" },
          { name: "Boss Wallah Farming Kannada", url: "https://www.youtube.com/@bosswallahfarmingkannada", category: "Farming" },
          { name: "Boss Wallah Academy Kannada", url: "https://www.youtube.com/@bosswallahAcademykannada", category: "Academy" }
        ]
      },
      {
        language: "Hindi",
        channels: [
          { name: "Boss Wallah Hindi", url: "https://www.youtube.com/@bosswallahhindi", category: "Main" },
          { name: "Boss Wallah Farming Hindi", url: "https://www.youtube.com/@bosswallahfarminghindi", category: "Farming" },
          { name: "Boss Wallah Academy Hindi", url: "https://www.youtube.com/@bosswallahAcademyhindi", category: "Academy" }
        ]
      },
      {
        language: "English",
        channels: [
          { name: "Boss Wallah English", url: "https://www.youtube.com/@bosswallahenglish", category: "Main" },
          { name: "Boss Wallah Farming English", url: "https://www.youtube.com/@bosswallahfarmingenglish", category: "Farming" },
          { name: "Boss Wallah Academy English", url: "https://www.youtube.com/@bosswallahAcademyenglish", category: "Academy" }
        ]
      },
      {
        language: "Malayalam",
        channels: [
          { name: "Boss Wallah Malayalam", url: "https://www.youtube.com/@bosswallahmalayalam", category: "Main" }
        ]
      }
    ],
    facebook: [
      {
        language: "Telugu",
        channels: [
          { name: "Boss Wallah Telugu", url: "https://www.facebook.com/bosswallahtelugu", category: "Main" },
          { name: "Boss Wallah Farming Telugu", url: "https://www.facebook.com/bosswallahfarmingtelugu", category: "Farming" },
          { name: "Boss Wallah Business Telugu", url: "https://www.facebook.com/bosswallahbusinesstelugu", category: "Business" }
        ]
      },
      {
        language: "Tamil",
        channels: [
          { name: "Boss Wallah Tamil", url: "https://www.facebook.com/bosswallahtamil", category: "Main" },
          { name: "Boss Wallah Farming Tamil", url: "https://www.facebook.com/bosswallahfarmingtamil", category: "Farming" },
          { name: "Boss Wallah Business Tamil", url: "https://www.facebook.com/bosswallahbusinesstamil", category: "Business" }
        ]
      },
      {
        language: "Kannada",
        channels: [
          { name: "Boss Wallah Money Kannada", url: "https://www.facebook.com/bosswallahmoneykannada", category: "Finance" },
          { name: "Boss Wallah Farming Kannada", url: "https://www.facebook.com/bosswallahfarmingkannada", category: "Farming" },
          { name: "Boss Wallah Business Kannada", url: "https://www.facebook.com/bosswallahbusinesskannada", category: "Business" }
        ]
      },
      {
        language: "Hindi",
        channels: [
          { name: "Boss Wallah Hindi", url: "https://www.facebook.com/bosswallahhindi", category: "Main" },
          { name: "Boss Wallah Farming Hindi", url: "https://www.facebook.com/bosswallahfarminghindi", category: "Farming" },
          { name: "Boss Wallah Business Hindi", url: "https://www.facebook.com/bosswallahbusinesshindi", category: "Business" }
        ]
      },
      {
        language: "English",
        channels: [
          { name: "Boss Wallah English", url: "https://www.facebook.com/bosswallahenglish", category: "Main" },
          { name: "Boss Wallah Farming English", url: "https://www.facebook.com/bosswallahfarmingenglish", category: "Farming" },
          { name: "Boss Wallah Business English", url: "https://www.facebook.com/bosswallahbusinessenglish", category: "Business" }
        ]
      }
    ],
    instagram: [
      {
        language: "Telugu",
        channels: [
          { name: "Boss Wallah Telugu", url: "https://www.instagram.com/bosswallah.telugu", category: "Main" },
          { name: "Boss Wallah Farming Telugu", url: "https://www.instagram.com/bosswallahfarmingtelugu", category: "Farming" },
          { name: "Boss Wallah Business Telugu", url: "https://www.instagram.com/bosswallahbusinesstelugu", category: "Business" }
        ]
      },
      {
        language: "Tamil",
        channels: [
          { name: "Boss Wallah Tamil", url: "https://www.instagram.com/bosswallah.tamil", category: "Main" },
          { name: "Boss Wallah Farming Tamil", url: "https://www.instagram.com/bosswallahfarmingtamil", category: "Farming" },
          { name: "Boss Wallah Business Tamil", url: "https://www.instagram.com/bosswallahbusinesstamil", category: "Business" }
        ]
      },
      {
        language: "Kannada",
        channels: [
          { name: "Ffreedom App Kannada", url: "https://www.instagram.com/ffreedomapp.kannada", category: "App" },
          { name: "Farming Kannada Ffreedom", url: "https://www.instagram.com/farmingkannadaffreedom", category: "Farming" },
          { name: "Boss Wallah Business Kannada", url: "https://www.instagram.com/bosswallahbusinesskannada", category: "Business" }
        ]
      },
      {
        language: "Hindi",
        channels: [
          { name: "Boss Wallah Hindi", url: "https://www.instagram.com/bosswallah.hindi", category: "Main" },
          { name: "Farming Hindi Boss Wallah", url: "https://www.instagram.com/farminghindibosswallah", category: "Farming" },
          { name: "Boss Wallah Business Hindi", url: "https://www.instagram.com/bosswallahbusinesshindi", category: "Business" }
        ]
      },
      {
        language: "English",
        channels: [
          { name: "Boss Wallah English", url: "https://www.instagram.com/bosswallah.english", category: "Main" },
          { name: "Boss Wallah Farming English", url: "https://www.instagram.com/bosswallahfarmingenglish/", category: "Farming" },
          { name: "Boss Wallah Business English", url: "https://www.instagram.com/bosswallahbusinessenglish/", category: "Business" }
        ]
      }
    ]
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Main": return "bg-primary/10 text-primary border-primary/20";
      case "Farming": return "bg-green-100 text-green-700 border-green-200";
      case "Business": return "bg-purple-100 text-purple-700 border-purple-200";
      case "Academy": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Finance": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "App": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

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
            const isSelected = selectedPlatform === platform.id;
            return (
              <div
                key={platform.name}
                className="group cursor-pointer"
                onClick={() => setSelectedPlatform(isSelected ? null : platform.id)}
              >
                <div className={`relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 group-hover:scale-105 border border-white/20 h-full flex flex-col ${
                  isSelected ? 'border-primary/50 shadow-2xl ring-2 ring-primary/30 bg-gradient-to-br from-primary/10 to-accent/5' : 'hover:border-primary/30'
                }`}>
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                    isSelected ? 'opacity-100' : ''
                  }`}></div>
                  
                  {/* Floating Dots Decoration */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-8 w-1 h-1 bg-accent/40 rounded-full animate-pulse delay-300"></div>
                  
                  <div className="relative z-10 text-center flex-1">
                    {/* Icon Container with Enhanced Styling */}
                    <div className={`relative w-28 h-28 mx-auto mb-8 rounded-3xl flex items-center justify-center ${platform.bgColor} group-hover:scale-110 transition-all duration-500 shadow-lg ${
                      isSelected ? 'scale-110 shadow-xl' : ''
                    } before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-300`}>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
                        platform.name === 'YouTube' ? 'from-red-400/20 to-red-600/20' :
                        platform.name === 'Facebook' ? 'from-blue-400/20 to-blue-600/20' :
                        'from-pink-400/20 to-purple-600/20'
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
                      
                      {platform.image ? (
                        <img 
                          src={platform.image} 
                          alt={`${platform.name} logo`}
                          className={`relative z-10 w-16 h-16 object-contain ${isSelected ? 'scale-110' : ''} transition-transform duration-500 drop-shadow-lg`}
                        />
                      ) : (
                        <IconComponent 
                          size={64}
                          className={`relative z-10 ${platform.color} ${isSelected ? 'scale-110' : ''} transition-transform duration-500 drop-shadow-lg`}
                        />
                      )}
                    </div>
                    
                    {/* Platform Name with Enhanced Typography */}
                    <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                      isSelected ? 'text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' : 'text-foreground group-hover:text-primary'
                    }`}>
                      {platform.name}
                    </h3>
                    
                    {/* Channel Count with Modern Badge */}
                    <div className={`relative inline-block text-sm font-semibold mb-6 rounded-full px-6 py-3 transition-all duration-300 backdrop-blur-sm ${
                      isSelected ? 'text-primary bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 shadow-lg' : 'text-primary bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40'
                    }`}>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent"></div>
                      <span className="relative z-10">{platform.totalChannels}</span>
                    </div>
                    
                    {/* Description with Better Styling */}
                    <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                      {platform.description}
                    </p>
                    
                    {/* Enhanced CTA Button */}
                    <div className={`inline-flex items-center justify-center font-semibold px-6 py-3 rounded-2xl transition-all duration-300 backdrop-blur-sm ${
                      isSelected ? 'text-white bg-gradient-to-r from-primary to-accent shadow-lg' : 'text-primary bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 group-hover:from-primary/20 group-hover:to-accent/20 group-hover:border-primary/40 group-hover:shadow-md'
                    }`}>
                      {isSelected ? 'Hide Channels' : 'View All Channels'}
                      <ArrowRight size={18} className={`ml-2 transition-transform duration-300 ${
                        isSelected ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Channel Details Panel */}
        {selectedPlatform && (
          <div className="mt-16 animate-in slide-in-from-top-10 duration-500">
            <Card className="border-primary/20 shadow-brand bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    {(() => {
                      const platform = platforms.find(p => p.id === selectedPlatform);
                      const IconComponent = platform?.icon;
                      return (
                        <>
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${platform?.bgColor}`}>
                            {platform?.image ? (
                              <img 
                                src={platform.image} 
                                alt={`${platform.name} logo`}
                                className="w-12 h-12 object-contain"
                              />
                            ) : (
                              IconComponent && <IconComponent size={32} className={platform.color} />
                            )}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-foreground">
                              {platform?.name} <span className="gradient-text">Channels</span>
                            </h3>
                            <p className="text-muted-foreground">
                              {platform?.totalChannels.toLowerCase()} across multiple languages
                            </p>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedPlatform(null)}
                    className="hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X size={20} />
                  </Button>
                </div>

                <Tabs defaultValue={channelData[selectedPlatform as keyof typeof channelData]?.[0]?.language} className="w-full">
                  <TabsList className="grid w-full grid-cols-5 lg:grid-cols-6 mb-8 bg-muted/50">
                    {channelData[selectedPlatform as keyof typeof channelData]?.map((languageGroup) => (
                      <TabsTrigger
                        key={languageGroup.language}
                        value={languageGroup.language}
                        className="text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        {languageGroup.language}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {channelData[selectedPlatform as keyof typeof channelData]?.map((languageGroup) => (
                    <TabsContent key={languageGroup.language} value={languageGroup.language} className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {languageGroup.channels.map((channel) => (
                          <div
                            key={channel.name}
                            className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/50 group cursor-pointer hover:scale-105"
                            onClick={() => window.open(channel.url, '_blank')}
                          >
                            <div className="flex items-start justify-between mb-4">
                              {(() => {
                                const platform = platforms.find(p => p.id === selectedPlatform);
                                const IconComponent = platform?.icon;
                                return (
                                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${platform?.bgColor}`}>
                                    {platform?.image ? (
                                      <img 
                                        src={platform.image} 
                                        alt={`${platform.name} logo`}
                                        className="w-8 h-8 object-contain"
                                      />
                                    ) : (
                                      IconComponent && <IconComponent size={20} className={platform.color} />
                                    )}
                                  </div>
                                );
                              })()}
                              <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(channel.category)}`}>
                                {channel.category}
                              </div>
                            </div>
                            
                            <h4 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                              {channel.name}
                            </h4>
                            
                            <div className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors">
                              Visit Channel
                              <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

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