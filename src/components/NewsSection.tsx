import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const newsItems = [
    {
      date: "September 2024",
      title: "Boss Wallah Media Expands to Six Regional Studios",
      excerpt: "New facilities in Chennai and Hyderabad strengthen regional content production capabilities.",
      category: "Expansion"
    },
    {
      date: "August 2024",
      title: "Crossing 330M Monthly Views Milestone",
      excerpt: "Platform reaches new heights in audience engagement across all social media channels.",
      category: "Achievement"
    },
    {
      date: "July 2024",
      title: "Partnership with Leading E-commerce Brands",
      excerpt: "Strategic collaborations drive innovative regional marketing campaigns across India.",
      category: "Partnership"
    }
  ];

  return (
    <section id="news" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
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
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-brand transition-all duration-300 border border-border group cursor-pointer"
            >
              <div className="mb-4">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>
              </div>
              
              <time className="text-sm text-muted-foreground block mb-3">
                {item.date}
              </time>
              
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.excerpt}
              </p>
              
              <div className="mt-6 text-primary font-semibold group-hover:text-accent transition-colors">
                Read More →
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