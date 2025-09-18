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
    <section id="news" className="section-padding bg-background border-t-4 border-accent/20">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Latest <span className="gradient-text">News</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our company developments and industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-brand transition-all duration-300 border border-border group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <time className="text-sm text-muted-foreground block mb-3">
                  {item.date}
                </time>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                
                <div className="text-primary font-semibold group-hover:text-accent transition-colors">
                  Read More →
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;