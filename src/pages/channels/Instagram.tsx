import { ArrowLeft, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramPage = () => {
  const channels = [
    // Telugu Profiles
    {
      language: "Telugu",
      channels: [
        { name: "Boss Wallah Telugu", url: "https://www.instagram.com/bosswallah.telugu", category: "Main" },
        { name: "Boss Wallah Academy Telugu", url: "https://www.instagram.com/bosswallahacademytelugu", category: "Academy" }
      ]
    },
    // Tamil Profiles
    {
      language: "Tamil",
      channels: [
        { name: "Boss Wallah Tamil", url: "https://www.instagram.com/bosswallah.tamil", category: "Main" },
        { name: "Boss Wallah Academy Tamil", url: "https://www.instagram.com/bosswallahacademytamil", category: "Academy" }
      ]
    },
    // Kannada Profiles
    {
      language: "Kannada",
      channels: [
        { name: "Boss Wallah Kannada", url: "https://www.instagram.com/ffreedomapp.kannada", category: "Main" }
      ]
    },
    // Hindi Profiles
    {
      language: "Hindi", 
      channels: [
        { name: "Boss Wallah Hindi", url: "https://www.instagram.com/bosswallah.hindi", category: "Main" },
        { name: "Boss Wallah Farming Hindi", url: "https://www.instagram.com/bosswallahfarminghindi", category: "Farming" }
      ]
    },
    // English Profiles
    {
      language: "English",
      channels: [
        { name: "Boss Wallah English", url: "https://www.instagram.com/bosswallah.english", category: "Main" },
        { name: "Boss Wallah Farming English", url: "https://www.instagram.com/bosswallahfarmingenglish", category: "Farming" }
      ]
    },
    // Malayalam Profiles
    {
      language: "Malayalam",
      channels: [
        { name: "Boss Wallah Malayalam", url: "https://www.instagram.com/bosswallah.malayalam", category: "Main" }
      ]
    },
    // Other Profiles
    {
      language: "Other",
      channels: [
        { name: "Boss Wallah App", url: "https://www.instagram.com/bosswallahapp", category: "App" }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Main": return "bg-primary/10 text-primary";
      case "Academy": return "bg-blue-100 text-blue-700";
      case "Farming": return "bg-green-100 text-green-700";
      case "App": return "bg-orange-100 text-orange-700";
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
            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center">
              <Instagram size={32} className="text-pink-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground whitespace-nowrap">
                Instagram <span className="gradient-text">Profiles</span>
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground">11 active profiles across 6 languages + app</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profiles Grid */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {channels.map((languageGroup) => (
              <div key={languageGroup.language}>
                <h2 className="text-sm md:text-2xl font-bold mb-6 text-foreground flex items-center">
                  <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full mr-4"></span>
                  {languageGroup.language}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {languageGroup.channels.map((channel) => (
                    <div
                      key={channel.name}
                      className="bg-card rounded-lg md:rounded-xl p-3 md:p-6 shadow-soft hover:shadow-brand transition-all duration-300 border border-border group cursor-pointer hover-scale"
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
                      <div className="flex items-center justify-end mb-2 md:mb-4">
                        <div className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-medium ${getCategoryColor(channel.category)}`}>
                          {channel.category}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-foreground mb-1.5 md:mb-3 text-xs md:text-lg group-hover:text-primary transition-colors leading-tight">
                        {channel.name}
                      </h3>
                      
                      <div className="flex items-center text-primary font-medium text-[11px] md:text-sm group-hover:text-accent transition-colors">
                        Visit Profile
                        <ExternalLink size={14} className="ml-1.5 md:ml-2 group-hover:translate-x-1 transition-transform md:w-5 md:h-5" />
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

export default InstagramPage;