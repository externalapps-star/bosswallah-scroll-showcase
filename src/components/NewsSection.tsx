import { Button } from "@/components/ui/button";
import newsExpansion from "@/assets/news-expansion.jpg";
import newsMilestone from "@/assets/news-milestone.jpg";
import newsPartnership from "@/assets/news-partnership.jpg";

const NewsSection = () => {
  const newsItems = [
    {
      date: "September 2024",
      title: "Boss Wallah Media Expands to Six Regional Studios",
      excerpt: "New facilities in Chennai and Hyderabad strengthen regional content production capabilities.",
      category: "Expansion",
      thumbnail: newsExpansion
    },
    {
      date: "August 2024",
      title: "Crossing 330M Monthly Views Milestone",
      excerpt: "Platform reaches new heights in audience engagement across all social media channels.",
      category: "Achievement",
      thumbnail: newsMilestone
    },
    {
      date: "July 2024",
      title: "Partnership with Leading E-commerce Brands",
      excerpt: "Strategic collaborations drive innovative regional marketing campaigns across India.",
      category: "Partnership",
      thumbnail: newsPartnership
    }
  ];

  return (
    <section id="news" className="section-padding-tight bg-card border-t-2 border-primary/30">
      <div className="container-custom">
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm mb-3">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="font-semibold">Latest Updates</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Latest <span className="gradient-text">News</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our company developments and insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className={`bg-gradient-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 border group cursor-pointer ${
                index === 0 ? 'border-primary/30' : index === 1 ? 'border-accent/30' : 'border-highlight/30'
              }`}
            >
              {/* Thumbnail */}
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <span className={`inline-block text-white px-2 py-1 rounded-full text-xs font-medium ${
                    index === 0 ? 'bg-gradient-primary' : index === 1 ? 'bg-gradient-accent' : 'bg-highlight'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <time className="text-xs text-muted-foreground block mb-2">
                  {item.date}
                </time>
                
                <h3 className="text-sm font-bold mb-2 text-foreground group-hover:gradient-text transition-colors leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-3 text-xs">
                  {item.excerpt}
                </p>
                
                <div className="text-primary font-semibold group-hover:text-accent transition-colors text-xs">
                  Read More →
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-primary/30 hover:bg-primary/10 text-primary">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;