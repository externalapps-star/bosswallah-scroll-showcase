import { Button } from "@/components/ui/button";
import newsExpansion from "@/assets/news-expansion.jpg";
import newsMilestone from "@/assets/news-milestone.jpg";
import newsPartnership from "@/assets/news-partnership.jpg";
import { useState, useEffect } from "react";

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
    },
    {
      date: "June 2024",
      title: "Launch of Boss Wallah Academy",
      excerpt: "Educational platform empowering creators with marketing skills and digital knowledge.",
      category: "Innovation",
      thumbnail: newsExpansion
    },
    {
      date: "May 2024",
      title: "500+ Successful Brand Campaigns",
      excerpt: "Celebrating half a millennium of successful brand partnerships and campaigns.",
      category: "Milestone",
      thumbnail: newsMilestone
    },
    {
      date: "April 2024",
      title: "AI-Powered Content Strategy Launch",
      excerpt: "Revolutionary AI tools for content optimization and audience targeting strategies.",
      category: "Technology",
      thumbnail: newsPartnership
    },
    {
      date: "March 2024",
      title: "Boss Wallah Goes Global",
      excerpt: "International expansion with offices in Singapore and Dubai markets.",
      category: "Expansion",
      thumbnail: newsExpansion
    },
    {
      date: "February 2024",
      title: "100M Creator Network Milestone",
      excerpt: "Building India's largest creator ecosystem with over 100 million creators.",
      category: "Network",
      thumbnail: newsMilestone
    },
    {
      date: "January 2024",
      title: "Series C Funding Round Completion",
      excerpt: "Securing $50M to accelerate regional content and technology development.",
      category: "Investment",
      thumbnail: newsPartnership
    },
    {
      date: "December 2023",
      title: "Boss Wallah Awards 2023",
      excerpt: "Celebrating top creators and campaigns that defined the year in digital marketing.",
      category: "Event",
      thumbnail: newsExpansion
    },
    {
      date: "November 2023",
      title: "Regional Language Platform Launch",
      excerpt: "Supporting content creation in 15+ Indian languages for better reach.",
      category: "Innovation",
      thumbnail: newsMilestone
    },
    {
      date: "October 2023",
      title: "Sustainability Initiative Launch",
      excerpt: "Green marketing practices and carbon-neutral content production commitment.",
      category: "Sustainability",
      thumbnail: newsPartnership
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [newsItems.length]);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % newsItems.length;
      items.push({
        ...newsItems[index],
        isMiddle: i === 2,
        position: i
      });
    }
    return items;
  };

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

        {/* Auto-scrolling news carousel */}
        <div className="flex justify-center items-center">
          <div className="flex gap-4 items-center overflow-hidden w-full max-w-7xl">
            {getVisibleItems().map((item, index) => (
              <article
                key={`${item.date}-${index}`}
                className={`
                  relative bg-card rounded-2xl overflow-hidden shadow-soft border transition-all duration-700 cursor-pointer flex-shrink-0
                  ${item.isMiddle ? 
                    'w-80 h-96 scale-110 z-10 border-4 border-primary' : 
                    'w-64 h-80 border-border hover:shadow-brand'
                  }
                  ${item.position < 2 ? 'opacity-60' : ''}
                  ${item.position > 2 ? 'opacity-60' : ''}
                `}
                style={{
                  transform: item.isMiddle ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                {/* Snake-like animated border for middle card */}
                {item.isMiddle && (
                  <div className="absolute inset-0 rounded-2xl pointer-events-none">
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `
                          conic-gradient(
                            from 0deg at 50% 50%,
                            hsl(var(--primary)) 0deg,
                            hsl(var(--accent)) 60deg,
                            hsl(var(--primary)) 120deg,
                            hsl(var(--accent)) 180deg,
                            hsl(var(--primary)) 240deg,
                            hsl(var(--accent)) 300deg,
                            hsl(var(--primary)) 360deg
                          )
                        `,
                        animation: 'spin 3s linear infinite',
                        padding: '2px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude'
                      }}
                    />
                  </div>
                )}

                {/* Thumbnail */}
                <div className={`relative overflow-hidden ${item.isMiddle ? 'h-52' : 'h-40'}`}>
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-4 ${item.isMiddle ? 'p-6' : 'p-4'}`}>
                  <time className="text-xs text-muted-foreground block mb-2">
                    {item.date}
                  </time>
                  
                  <h3 className={`font-bold mb-3 text-foreground transition-colors ${
                    item.isMiddle ? 'text-lg' : 'text-base'
                  }`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-muted-foreground leading-relaxed mb-3 ${
                    item.isMiddle ? 'text-sm' : 'text-xs'
                  }`}>
                    {item.excerpt}
                  </p>
                  
                  <div className="text-primary font-semibold text-xs hover:text-accent transition-colors">
                    Read More →
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: newsItems.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
              }`}
            />
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