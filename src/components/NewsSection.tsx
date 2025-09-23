import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NewsModal from "./NewsModal";
import { useState, useEffect } from "react";
import { 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  BookOpen,
  ExternalLink,
  Filter
} from "lucide-react";
import { NewsService } from "@/services/NewsService";

// Import generated thumbnails
import newsThumb1 from "@/assets/news-thumb-1.jpg";
import newsThumb2 from "@/assets/news-thumb-2.jpg";
import newsThumb3 from "@/assets/news-thumb-3.jpg";
import newsThumb4 from "@/assets/news-thumb-4.jpg";
import newsThumb5 from "@/assets/news-thumb-5.jpg";
import newsThumb6 from "@/assets/news-thumb-6.jpg";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  thumbnail: string;
  readTime: string;
  author: string;
  tags: string[];
  url: string;
}

const NewsSection = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch latest news on component mount
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const latestNews = await NewsService.fetchNewsFromBossWallah();
        // News already has dynamic thumbnails generated
        setNewsItems(latestNews);
      } catch (error) {
        console.error('Error fetching news:', error);
        // Fallback to static news if fetch fails
        setNewsItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const categories = ["All", "Creator Hub", "Digital Skills", "Business"];

  const handleReadMore = (news: any) => {
    const newsIndex = filteredNews.findIndex(item => item.id === news.id);
    setCurrentNewsIndex(newsIndex);
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const handleNextNews = () => {
    const nextIndex = (currentNewsIndex + 1) % filteredNews.length;
    setCurrentNewsIndex(nextIndex);
    setSelectedNews(filteredNews[nextIndex]);
  };

  const handlePreviousNews = () => {
    const prevIndex = currentNewsIndex === 0 ? filteredNews.length - 1 : currentNewsIndex - 1;
    setCurrentNewsIndex(prevIndex);
    setSelectedNews(filteredNews[prevIndex]);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const filteredNews = selectedCategory === "All" 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);
  
  const displayedNews = showMore ? filteredNews : filteredNews.slice(0, 3);

  return (
    <>
      <section id="news" className="section-padding bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Latest <span className="gradient-text">News</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and strategies from Boss Wallah
            </p>
          </div>

          {/* Category Filter - only show if showMore is true */}
          {showMore && (
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter size={16} />
                <span className="text-sm font-medium">Filter by category:</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full px-4"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* News Grid */}
          {showMore ? (
            /* Grid Layout for View All */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedNews.map((item) => (
                <Card
                  key={item.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
                  onClick={() => handleReadMore(item)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-background/90 text-foreground text-xs">
                        {item.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 text-lg">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{formatDate(item.date)}</span>
                      <span>{item.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Minimalist List Layout for Homepage */
            <div className="space-y-4 mb-8 p-4 rounded-lg border border-border/50 bg-primary/5 backdrop-blur-sm shadow-soft">
              {displayedNews.map((item, index) => (
                <Card
                  key={item.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-md border-0 bg-card/30 backdrop-blur-sm"
                  onClick={() => handleReadMore(item)}
                >
                  <CardContent className="p-4 relative before:content-[''] before:absolute before:inset-0 before:rounded-lg before:border before:border-primary/30 before:animate-pulse-slow before:-z-10">
                    <div className="flex items-center gap-4">
                      {/* Thumbnail */}
                      <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-16 h-16 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {formatDate(item.date)}
                          </span>
                        </div>
                        
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1 text-lg mb-1">
                          {item.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm line-clamp-1">
                          {item.excerpt}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
              )}

          {/* View More/Less Button */}
          <div className="text-center">
            {!showMore ? (
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowMore(true)}
                className="group border-orange-200"
              >
                <BookOpen size={18} className="mr-2" />
                View All
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => setShowMore(false)}
                className="group border border-orange-200"
              >
                Show Less
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* News Modal */}
      <NewsModal 
        news={selectedNews}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNext={handleNextNews}
        onPrevious={handlePreviousNews}
      />
    </>
  );
};

export default NewsSection;