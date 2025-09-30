import { ArrowLeft, Facebook, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const FacebookPage = () => {
  const channels = [
    // Telugu Pages
    {
      language: "Telugu",
      channels: [
        { name: "Boss Wallah Telugu", url: "https://www.facebook.com/bosswallahtelugu", category: "Main" },
        { name: "Boss Wallah Academy Telugu", url: "https://www.facebook.com/bosswallahacademytelugu", category: "Academy" }
      ]
    },
    // Tamil Pages
    {
      language: "Tamil",
      channels: [
        { name: "Boss Wallah Tamil", url: "https://www.facebook.com/bosswallahtamil", category: "Main" },
        { name: "Boss Wallah Academy Tamil", url: "https://www.facebook.com/bosswallahacademytamil", category: "Academy" }
      ]
    },
    // Kannada Pages
    {
      language: "Kannada",
      channels: [
        { name: "Boss Wallah Kannada", url: "https://www.facebook.com/bosswallahkannada", category: "Main" },
        { name: "Boss Wallah Academy Kannada", url: "https://www.facebook.com/bosswallahacademykannada", category: "Academy" }
      ]
    },
    // Hindi Pages
    {
      language: "Hindi",
      channels: [
        { name: "Boss Wallah Hindi", url: "https://www.facebook.com/hindibosswallah", category: "Main" },
        { name: "Boss Wallah Academy Hindi", url: "https://www.facebook.com/bosswallahacademyhindi", category: "Academy" }
      ]
    },
    // English Pages
    {
      language: "English",
      channels: [
        { name: "Boss Wallah English", url: "https://www.facebook.com/bosswallahenglish", category: "Main" }
      ]
    },
    // Malayalam Pages
    {
      language: "Malayalam",
      channels: [
        { name: "Boss Wallah Malayalam", url: "https://www.facebook.com/bosswallahmalayalam", category: "Main" }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Main": return "bg-primary/10 text-primary";
      case "Farming": return "bg-green-100 text-green-700";
      case "Business": return "bg-purple-100 text-purple-700";
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
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Facebook size={32} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground whitespace-nowrap">
                Facebook <span className="gradient-text">Pages</span>
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground">10 active pages across 6 languages</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pages Grid */}
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
                      className="bg-card rounded-lg p-3 shadow-soft hover:shadow-brand transition-all duration-300 border border-border group cursor-pointer hover-scale"
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
                      <div className="flex items-center justify-end mb-2">
                        <div className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${getCategoryColor(channel.category)}`}>
                          {channel.category}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-foreground mb-1.5 text-xs group-hover:text-primary transition-colors leading-tight">
                        {channel.name}
                      </h3>
                      
                      <div className="flex items-center text-primary font-medium text-[11px] group-hover:text-accent transition-colors">
                        Visit Page
                        <ExternalLink size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
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

export default FacebookPage;