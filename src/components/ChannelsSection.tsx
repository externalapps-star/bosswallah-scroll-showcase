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
      case "Farming": return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      case "Business": return "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20";
      case "Academy": return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
      case "Finance": return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
      case "App": return "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20";
      default: return "bg-muted text-muted-foreground border-border";
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

        {/* Enhanced Grid with Aesthetic Background */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px] opacity-30"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto p-8">
            {platforms.map((platform) => {
              const IconComponent = platform.icon;
              const isSelected = selectedPlatform === platform.id;
              return (
                <div
                  key={platform.name}
                  className="group cursor-pointer perspective-1000"
                  onClick={() => setSelectedPlatform(isSelected ? null : platform.id)}
                >
                  {/* Modern Card with 3D Transform */}
                  <div className={`relative overflow-hidden bg-gradient-to-br from-background/90 via-background/70 to-background/50 backdrop-blur-2xl rounded-2xl transition-all duration-700 border h-full flex flex-col transform-gpu ${
                    isSelected 
                      ? 'shadow-2xl border-primary/40 scale-105 rotate-y-6 bg-gradient-to-br from-primary/5 via-background/80 to-accent/5' 
                      : 'shadow-lg border-border/50 group-hover:scale-105 group-hover:shadow-xl group-hover:border-primary/30 group-hover:-rotate-y-2'
                  }`}>
                    
                    {/* Animated Background Effects */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        platform.name === 'YouTube' ? 'from-red-500/10 via-transparent to-red-600/5' :
                        platform.name === 'Facebook' ? 'from-blue-500/10 via-transparent to-blue-600/5' :
                        'from-pink-500/10 via-transparent to-purple-600/5'
                      } animate-pulse`}></div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-6 right-6 w-3 h-3 bg-primary/20 rounded-full animate-ping"></div>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-accent/30 rounded-full animate-pulse delay-500"></div>
                    <div className="absolute bottom-8 left-6 w-1 h-1 bg-primary/40 rounded-full animate-bounce delay-1000"></div>

                    <div className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                      {/* Icon Section with Enhanced Design */}
                      <div className={`relative mb-6 transition-all duration-500 ${
                        isSelected ? 'scale-110' : 'group-hover:scale-105'
                      }`}>
                        {/* Animated Ring */}
                        <div className={`absolute inset-0 rounded-full border-2 border-dashed transition-all duration-700 ${
                          platform.name === 'YouTube' ? 'border-red-400/30' :
                          platform.name === 'Facebook' ? 'border-blue-400/30' :
                          'border-pink-400/30'
                        } ${isSelected ? 'animate-spin border-primary/50' : 'animate-pulse'}`} style={{
                          width: '100px',
                          height: '100px',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}></div>
                        
                        {/* Main Icon Container */}
                        <div className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${platform.bgColor} ${
                          isSelected ? 'shadow-2xl' : 'shadow-lg group-hover:shadow-xl'
                        }`}>
                          {/* Glow Effect */}
                          <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500 ${
                            platform.name === 'YouTube' ? 'bg-red-400/40' :
                            platform.name === 'Facebook' ? 'bg-blue-400/40' :
                            'bg-pink-400/40'
                          } ${isSelected ? 'opacity-80' : ''}`}></div>
                          
                          {platform.image ? (
                            <img 
                              src={platform.image} 
                              alt={`${platform.name} logo`}
                              className={`relative z-10 object-contain transition-all duration-500 ${
                                isSelected ? 'w-12 h-12 drop-shadow-2xl' : 'w-10 h-10 group-hover:scale-110'
                              }`}
                            />
                          ) : (
                            <IconComponent 
                              size={isSelected ? 48 : 40}
                              className={`relative z-10 ${platform.color} transition-all duration-500 ${
                                isSelected ? 'drop-shadow-2xl' : 'group-hover:scale-110'
                              }`}
                            />
                          )}
                        </div>
                      </div>
                      
                      {/* Platform Title */}
                      <h3 className={`font-bold mb-3 transition-all duration-300 ${
                        isSelected 
                          ? 'text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent' 
                          : 'text-xl text-foreground group-hover:text-primary'
                      }`}>
                        {platform.name}
                      </h3>
                      
                      {/* Channel Count Badge */}
                      <div className={`relative mb-4 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30 shadow-lg' 
                          : 'bg-muted/50 text-muted-foreground border border-border group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20'
                      }`}>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
                        <span className="relative">{platform.totalChannels}</span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                        {platform.description}
                      </p>
                      
                      {/* CTA Button */}
                      <div className={`relative inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden ${
                        isSelected 
                          ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                          : 'bg-gradient-to-r from-muted/80 to-muted/60 text-foreground border border-border group-hover:from-primary/10 group-hover:to-accent/10 group-hover:text-primary group-hover:border-primary/20'
                      }`}>
                        {/* Button Background Animation */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          isSelected ? 'opacity-20' : ''
                        }`}></div>
                        
                        <span className="relative z-10 mr-2">
                          {isSelected ? 'Hide Channels' : 'Explore Channels'}
                        </span>
                        <ArrowRight size={16} className={`relative z-10 transition-transform duration-300 ${
                          isSelected ? 'rotate-45' : 'group-hover:translate-x-1'
                        }`} />
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r transition-opacity duration-300 ${
                      platform.name === 'YouTube' ? 'from-red-400/50 via-red-500/30 to-red-600/50' :
                      platform.name === 'Facebook' ? 'from-blue-400/50 via-blue-500/30 to-blue-600/50' :
                      'from-pink-400/50 via-purple-500/30 to-purple-600/50'
                    } ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                  </div>
                </div>
              );
            })}
          </div>
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