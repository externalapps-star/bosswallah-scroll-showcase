import indiaEntryIcon from "@/assets/india-entry-icon.jpg";
import eventCampaignIcon from "@/assets/event-campaign-icon.jpg";
import brandBuildingIcon from "@/assets/brand-building-icon.jpg";
import revenueIcon from "@/assets/revenue-icon.jpg";

const CampaignsSection = () => {
  const campaigns = [
    {
      title: "India Entry Program",
      description: "Global brands that want to reach a middle income, business-savvy audience work with Boss Wallah...",
      features: ["Market Entry Strategy", "Audience Analysis", "Cultural Adaptation", "ROI Tracking"],
      icon: indiaEntryIcon
    },
    {
      title: "Intense Event Based Program",
      description: "Companies that want to create an intense 3 month campaign...",
      features: ["3-Month Intensive", "Multi-Channel Approach", "Event Marketing", "Performance Metrics"],
      icon: eventCampaignIcon
    },
    {
      title: "Brand Building Campaigns",
      description: "Younger brands engage Boss Wallah for long term sustained campaigns...",
      features: ["Long-term Strategy", "Brand Identity", "Community Building", "Sustained Growth"],
      icon: brandBuildingIcon
    },
    {
      title: "Revenue Generation Campaigns",
      description: "Given Boss Wallah's strength in reaching middle-income audiences...",
      features: ["Direct Sales Focus", "Conversion Optimization", "Lead Generation", "Revenue Tracking"],
      icon: revenueIcon
    }
  ];

  return (
    <section id="campaigns" className="section-padding-tight bg-gradient-subtle border-t-2 border-primary/30">
      <div className="container-custom">
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-accent text-white px-4 py-2 rounded-full text-sm mb-3">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="font-semibold">Strategic Campaigns</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Marketing <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored strategies for every business goal and market segment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {campaigns.map((campaign, index) => (
            <div
              key={campaign.title}
              className={`bg-gradient-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-500 border h-full flex flex-col ${
                index % 2 === 0 ? 'border-primary/30 hover:border-primary/50' : 'border-accent/30 hover:border-accent/50'
              }`}
            >
              <div className="flex items-start space-x-4">
                {/* Campaign Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-xl overflow-hidden shadow-md relative ${
                    index % 2 === 0 ? 'ring-2 ring-primary/20' : 'ring-2 ring-accent/20'
                  }`}>
                    <img 
                      src={campaign.icon} 
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {campaign.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {campaign.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-1">
                    {campaign.features.map((feature, idx) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          idx === 0 ? 'bg-primary' : idx === 1 ? 'bg-accent' : 'bg-highlight'
                        }`}></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;