import { Podcast, Camera, Calendar } from "lucide-react";
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
      title: "Revenue Generation Campaigns",
      description: "Given Boss Wallah's strength in reaching middle-income audiences...",
      features: ["Direct Sales Focus", "Conversion Optimization", "Lead Generation", "Revenue Tracking"],
      icon: revenueIcon
    },
    {
      title: "Intense Event Based Program",
      description: "Companies that want to create an intense 3 month campaign...",
      features: ["3-Month Intensive", "Multi-Channel Approach", "Event Marketing", "Performance Metrics"],
      icon: "event"
    },
    {
      title: "Brand Building Campaigns",
      description: "Younger brands engage Boss Wallah for long term sustained campaigns...",
      features: ["Long-term Strategy", "Brand Identity", "Community Building", "Sustained Growth"],
      icon: brandBuildingIcon
    },
    {
      title: "BOSScast",
      description: "A business podcast for entrepreneurs share real challenges and solutions to grow their business...",
      features: ["Industry Spotlight", "Relatable Branding", "Evergreen Discovery", "Multi-platform Reach"],
      icon: "podcast"
    },
    {
      title: "MediaLabs",
      description: "Boss Wallah's studios empower entrepreneurs and brands to produce high-quality content with ease...",
      features: ["6 State-of-the-art Studios", "Audio & Video Ready", "Creator-friendly Setup", "Professional Editing Support"],
      icon: "camera"
    }
  ];

  return (
    <section id="campaigns" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Marketing <span className="gradient-text">Campaigns</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored strategies for every business goal and market segment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {campaigns.map((campaign, index) => (
            <div
              key={campaign.title}
              className="group relative bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-soft hover:shadow-brand transition-all duration-500 border-2 border-border h-full flex flex-col hover:bg-gradient-to-br hover:from-orange-50/80 hover:to-amber-50/60 dark:hover:from-orange-950/30 dark:hover:to-amber-950/20 overflow-hidden"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-x p-0.5">
                  <div className="w-full h-full bg-card rounded-2xl sm:rounded-3xl"></div>
                </div>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                {/* Campaign Icon */}
                <div className="flex-shrink-0 self-center sm:self-start">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg flex items-center justify-center ${
                    campaign.icon === "podcast" || campaign.icon === "camera" || campaign.icon === "event"
                      ? "bg-black" 
                      : ""
                  }`}>
                    {campaign.icon === "podcast" ? (
                      <Podcast className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange-500" />
                    ) : campaign.icon === "camera" ? (
                      <Camera className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange-500" />
                    ) : campaign.icon === "event" ? (
                      <Calendar className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange-500" />
                    ) : (
                      <img 
                        src={campaign.icon as string} 
                        alt={campaign.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">
                    {campaign.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {campaign.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {campaign.features.map((feature) => (
                      <div key={feature} className="flex items-center justify-center sm:justify-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
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