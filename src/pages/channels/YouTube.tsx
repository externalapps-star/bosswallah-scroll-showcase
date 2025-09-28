import { ArrowLeft, Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const YouTubePage = () => {
  const channels = [
    // Telugu Channels
    {
      language: "Telugu",
      channels: [
        { name: "Boss Wallah Telugu", url: "https://www.youtube.com/@bosswallahtelugu", category: "Main", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" },
        { name: "Boss Wallah Farming Telugu", url: "https://www.youtube.com/@bosswallahfarmingtelugu", category: "Farming", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" },
        { name: "Boss Wallah Academy Telugu", url: "https://www.youtube.com/@bosswallahAcademytelugu", category: "Academy", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" }
      ]
    },
    // Tamil Channels
    {
      language: "Tamil",
      channels: [
        { name: "Boss Wallah Tamil", url: "https://www.youtube.com/@bosswallahtamil", category: "Main", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" },
        { name: "Boss Wallah Farming Tamil", url: "https://www.youtube.com/@bosswallahfarmingtamil", category: "Farming", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" },
        { name: "Boss Wallah Academy Tamil", url: "https://www.youtube.com/@bosswallahAcademytamil", category: "Academy", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" }
      ]
    },
    // Kannada Channels
    {
      language: "Kannada",
      channels: [
        { name: "Boss Wallah Kannada", url: "https://www.youtube.com/@bosswallahkannada", category: "Main", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" },
        { name: "Boss Wallah Farming Kannada", url: "https://www.youtube.com/@bosswallahfarmingkannada", category: "Farming", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" },
        { name: "Boss Wallah Academy Kannada", url: "https://www.youtube.com/@bosswallahAcademykannada", category: "Academy", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" }
      ]
    },
    // Malayalam Channels
    {
      language: "Malayalam",
      channels: [
        { name: "Boss Wallah Malayalam", url: "https://www.youtube.com/@bosswallahmalayalam", category: "Main", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" }
      ]
    },
    // Hindi Channels
    {
      language: "Hindi",
      channels: [
        { name: "Boss Wallah Hindi", url: "https://www.youtube.com/@bosswallahhindi", category: "Main", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" },
        { name: "Boss Wallah Farming Hindi", url: "https://www.youtube.com/@bosswallahfarminghindi", category: "Farming", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" },
        { name: "Boss Wallah Academy Hindi", url: "https://www.youtube.com/@bosswallahAcademyhindi", category: "Academy", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" }
      ]
    },
    // English Channels
    {
      language: "English",
      channels: [
        { name: "Boss Wallah English", url: "https://www.youtube.com/@bosswallahenglish", category: "Main", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" },
        { name: "Boss Wallah Farming English", url: "https://www.youtube.com/@bosswallahfarmingenglish", category: "Farming", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" },
        { name: "Boss Wallah Academy English", url: "https://www.youtube.com/@bosswallahAcademyenglish", category: "Academy", thumbnail: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Main": return "bg-primary/10 text-primary";
      case "Farming": return "bg-green-100 text-green-700";
      case "Academy": return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-subtle py-8">
        <div className="container-custom">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Channels
          </Button>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
              <Youtube size={32} className="text-red-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                YouTube <span className="gradient-text">Channels</span>
              </h1>
              <p className="text-xl text-muted-foreground">16 channels across 6 languages</p>
            </div>
          </div>
        </div>
      </div>

      {/* Channels Grid */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {channels.map((languageGroup) => (
              <div key={languageGroup.language}>
                <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                  <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full mr-4"></span>
                  {languageGroup.language}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {languageGroup.channels.map((channel) => (
                    <div
                      key={channel.name}
                      className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-brand transition-all duration-300 border border-border group cursor-pointer"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = channel.url;
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden group-hover:scale-110 transition-transform">
                          <img 
                            src={channel.thumbnail} 
                            alt={`${channel.name} thumbnail`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(channel.category)}`}>
                          {channel.category}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {channel.name}
                      </h3>
                      
                      <div className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors">
                        Watch Channel
                        <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubePage;