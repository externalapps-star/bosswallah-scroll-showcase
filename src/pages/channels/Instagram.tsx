import { ArrowLeft, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramPage = () => {
  const channels = [
    // Telugu Profiles
    {
      language: "Telugu",
      channels: [
        { name: "Boss Wallah Telugu", url: "https://www.instagram.com/bosswallah.telugu", category: "Main" },
        { name: "Boss Wallah Farming Telugu", url: "https://www.instagram.com/bosswallahfarmingtelugu", category: "Farming" },
        { name: "Boss Wallah Business Telugu", url: "https://www.instagram.com/bosswallahbusinesstelugu", category: "Business" }
      ]
    },
    // Tamil Profiles
    {
      language: "Tamil",
      channels: [
        { name: "Boss Wallah Tamil", url: "https://www.instagram.com/bosswallah.tamil", category: "Main" },
        { name: "Boss Wallah Farming Tamil", url: "https://www.instagram.com/bosswallahfarmingtamil", category: "Farming" },
        { name: "Boss Wallah Business Tamil", url: "https://www.instagram.com/bosswallahbusinesstamil", category: "Business" }
      ]
    },
    // Kannada Profiles
      {
        language: "Kannada",
        channels: [
          { name: "Boss Wallah Kannada", url: "https://www.instagram.com/ffreedomapp.kannada", category: "Main" },
          { name: "Boss Wallah Farming Kannada", url: "https://www.instagram.com/farmingkannadaffreedom", category: "Farming" },
          { name: "Boss Wallah Business Kannada", url: "https://www.instagram.com/bosswallahbusinesskannada", category: "Business" }
        ]
      },
    // Hindi Profiles
      {
        language: "Hindi", 
        channels: [
          { name: "Boss Wallah Hindi", url: "https://www.instagram.com/bosswallah.hindi", category: "Main" },
          { name: "Boss Wallah Farming Hindi", url: "https://www.instagram.com/farminghindibosswallah", category: "Farming" },
          { name: "Boss Wallah Business Hindi", url: "https://www.instagram.com/bosswallahbusinesshindi", category: "Business" }
        ]
      },
    // English Profiles
    {
      language: "English",
      channels: [
        { name: "Boss Wallah English", url: "https://www.instagram.com/bosswallah.english", category: "Main" },
        { name: "Boss Wallah Farming English", url: "https://www.instagram.com/bosswallahfarmingenglish", category: "Farming" },
        { name: "Boss Wallah Business English", url: "https://www.instagram.com/bosswallahbusinessenglish", category: "Business" }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Main": return "bg-primary/10 text-primary";
      case "Farming": return "bg-green-100 text-green-700";
      case "Business": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-subtle py-16">
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Instagram <span className="gradient-text">Profiles</span>
              </h1>
              <p className="text-xl text-muted-foreground">15 profiles across 5 languages (no Malayalam)</p>
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
                <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                  <span className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full mr-4"></span>
                  {languageGroup.language}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {languageGroup.channels.map((channel) => (
                    <div
                      key={channel.name}
                      className="bg-card rounded-xl p-4 shadow-soft hover:shadow-brand transition-all duration-300 border border-border group cursor-pointer hover-scale"
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
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Instagram size={16} className="text-pink-600" />
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(channel.category)}`}>
                          {channel.category}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-foreground mb-2 text-sm group-hover:text-primary transition-colors leading-tight">
                        {channel.name}
                      </h3>
                      
                      <div className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors">
                        Visit Profile
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

export default InstagramPage;