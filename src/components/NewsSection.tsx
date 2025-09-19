import { Button } from "@/components/ui/button";
import newsExpansion from "@/assets/news-expansion.jpg";
import newsMilestone from "@/assets/news-milestone.jpg";
import newsPartnership from "@/assets/news-partnership.jpg";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [newsItems.length, isAutoPlaying, isDragging]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + newsItems.length) % newsItems.length;
      items.push({
        ...newsItems[index],
        isCenter: i === 0,
        position: i,
        offset: i
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

        {/* Enhanced news carousel with manual controls */}
        <div className="relative">
          {/* Navigation Controls */}
          <div className="flex justify-center items-center mb-6 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={toggleAutoPlay}
              className="flex items-center gap-2 rounded-full"
            >
              {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isAutoPlaying ? 'Pause' : 'Play'}
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full hover:bg-primary hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="relative flex justify-center items-center perspective-1000"
            style={{ height: '480px' }}
          >
            {getVisibleItems().map((item, index) => {
              const scale = item.isCenter ? 1.15 : 0.85;
              const opacity = Math.abs(item.offset) <= 1 ? (item.isCenter ? 1 : 0.7) : 0.4;
              const translateX = item.offset * 280;
              const rotateY = item.offset * -15;
              const zIndex = item.isCenter ? 20 : 10 - Math.abs(item.offset);
              
              return (
                <article
                  key={`${item.date}-${item.offset}`}
                  className="absolute bg-card rounded-2xl overflow-hidden shadow-soft border border-border cursor-pointer transition-all duration-700 ease-out w-72"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity: opacity,
                    zIndex: zIndex,
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => setCurrentIndex((currentIndex + item.offset + newsItems.length) % newsItems.length)}
                >
                  {/* Enhanced animated border for center card */}
                  {item.isCenter && (
                    <>
                      {/* Gradient border animation */}
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-x opacity-75"></div>
                      
                      {/* Pulsing glow effect */}
                      <div className="absolute -inset-2 rounded-2xl bg-primary/20 animate-pulse blur-sm"></div>
                      
                      {/* Rotating particles */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                        <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                        <div className="absolute bottom-2 left-2 w-1 h-1 bg-accent rounded-full animate-ping animation-delay-500"></div>
                        <div className="absolute top-1/2 left-0 w-1 h-4 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse"></div>
                        <div className="absolute top-0 left-1/2 w-4 h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse animation-delay-300"></div>
                      </div>
                    </>
                  )}

                  {/* Card content with relative positioning to stay above border effects */}
                  <div className="relative bg-card rounded-2xl overflow-hidden">
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                      </div>
                      
                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <time className="text-sm text-muted-foreground block mb-3">
                        {item.date}
                      </time>
                      
                      <h3 className="text-lg font-bold mb-4 text-foreground hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-primary font-semibold hover:text-accent transition-colors cursor-pointer">
                          Read More →
                        </div>
                        {item.isCenter && (
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
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