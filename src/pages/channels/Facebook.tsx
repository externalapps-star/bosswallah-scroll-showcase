import { ArrowLeft, Facebook, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const FacebookPage = () => {
  const channels = [
    // Telugu Pages
    {
      language: "Telugu",
      channels: [
        { name: "Boss Wallah Telugu", url: "https://www.facebook.com/bosswallahtelugu", category: "Main" },
        { name: "Boss Wallah Farming Telugu", url: "https://www.facebook.com/bosswallahfarmingtelugu", category: "Farming" },
        { name: "Boss Wallah Business Telugu", url: "https://www.facebook.com/bosswallahbusinesstelugu", category: "Business" }
      ]
    },
    // Tamil Pages
    {
      language: "Tamil",
      channels: [
        { name: "Boss Wallah Tamil", url: "https://www.facebook.com/bosswallahtamil", category: "Main" },
        { name: "Boss Wallah Farming Tamil", url: "https://www.facebook.com/bosswallahfarmingtamil", category: "Farming" },
        { name: "Boss Wallah Business Tamil", url: "https://www.facebook.com/bosswallahbusinesstamil", category: "Business" }
      ]
    },
    // Kannada Pages
    {
      language: "Kannada",
      channels: [
        { name: "Boss Wallah Money Kannada", url: "https://www.facebook.com/bosswallahmoneykannada", category: "Finance" },
        { name: "Boss Wallah Farming Kannada", url: "https://www.facebook.com/bosswallahfarmingkannada", category: "Farming" },
        { name: "Boss Wallah Business Kannada", url: "https://www.facebook.com/bosswallahbusinesskannada", category: "Business" }
      ]
    },
    // Hindi Pages
    {
      language: "Hindi",
      channels: [
        { name: "Boss Wallah Hindi", url: "https://www.facebook.com/bosswallahhindi", category: "Main" },
        { name: "Boss Wallah Farming Hindi", url: "https://www.facebook.com/bosswallahfarminghindi", category: "Farming" },
        { name: "Boss Wallah Business Hindi", url: "https://www.facebook.com/bosswallahbusinesshindi", category: "Business" }
      ]
    },
    // English Pages
    {
      language: "English",
      channels: [
        { name: "Boss Wallah English", url: "https://www.facebook.com/bosswallahenglish", category: "Main" },
        { name: "Boss Wallah Farming English", url: "https://www.facebook.com/bosswallahfarmingenglish", category: "Farming" },
        { name: "Boss Wallah Business English", url: "https://www.facebook.com/bosswallahbusinessenglish", category: "Business" }
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Main": return "bg-primary/10 text-primary";
      case "Farming": return "bg-green-100 text-green-700";
      case "Business": return "bg-purple-100 text-purple-700";
      case "Finance": return "bg-yellow-100 text-yellow-700";
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
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Facebook size={32} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Facebook <span className="gradient-text">Pages</span>
              </h1>
              <p className="text-xl text-muted-foreground">15 pages across 5 languages</p>
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
                      className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-brand transition-all duration-300 border border-border group cursor-pointer"
                      onClick={() => window.open(channel.url, '_blank')}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Facebook size={24} className="text-blue-600" />
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(channel.category)}`}>
                          {channel.category}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {channel.name}
                      </h3>
                      
                      <div className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors">
                        Visit Page
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

export default FacebookPage;