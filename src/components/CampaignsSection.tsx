const CampaignsSection = () => {
  const campaigns = [
    {
      title: "India Entry Program",
      description: "Global brands that want to reach a middle income, business-savvy audience work with Boss Wallah...",
      features: ["Market Entry Strategy", "Audience Analysis", "Cultural Adaptation", "ROI Tracking"]
    },
    {
      title: "Intense Event Based Program",
      description: "Companies that want to create an intense 3 month campaign...",
      features: ["3-Month Intensive", "Multi-Channel Approach", "Event Marketing", "Performance Metrics"]
    },
    {
      title: "Brand Building Campaigns",
      description: "Younger brands engage Boss Wallah for long term sustained campaigns...",
      features: ["Long-term Strategy", "Brand Identity", "Community Building", "Sustained Growth"]
    },
    {
      title: "Revenue Generation Campaigns",
      description: "Given Boss Wallah's strength in reaching middle-income audiences...",
      features: ["Direct Sales Focus", "Conversion Optimization", "Lead Generation", "Revenue Tracking"]
    }
  ];

  return (
    <section id="campaigns" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Marketing <span className="gradient-text">Campaigns</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored strategies for every business goal and market segment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {campaigns.map((campaign, index) => (
            <div
              key={campaign.title}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-brand transition-all duration-300 border border-border h-full flex flex-col"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {campaign.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {campaign.description}
                  </p>
                  <div className="space-y-1">
                    {campaign.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
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