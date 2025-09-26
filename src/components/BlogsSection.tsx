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
import newsThumbEcommerce from "@/assets/news-thumb-ecommerce.jpg";
import newsThumbFood from "@/assets/news-thumb-food.jpg";
import newsThumbFranchise from "@/assets/news-thumb-franchise.jpg";
import newsThumbBurger from "@/assets/news-thumb-burger.jpg";
import newsThumbCoffee from "@/assets/news-thumb-coffee.jpg";
import newsThumbBusiness from "@/assets/news-thumb-business.jpg";

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

const BlogsSection = () => {
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
        // Map thumbnails to the fetched news
        const newsWithThumbnails = latestNews.map((item, index) => ({
          ...item,
          thumbnail: [newsThumbEcommerce, newsThumbFood, newsThumbFranchise, newsThumbBurger, newsThumbCoffee, newsThumbBusiness][index % 6]
        }));
        setNewsItems(newsWithThumbnails);
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
      <section id="blogs" className="section-padding bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Latest <span className="gradient-text">Blogs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover Boss Wallah Media's scope of expertise and recent achievements in digital marketing and content creation
            </p>
          </div>

          {/* Featured Layout - Similar to reference image */}
          {!showMore ? (
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Featured Article - Left Side */}
              {displayedNews[0] && (
                <div className="lg:col-span-2">
                  <Card
                    className="group cursor-pointer overflow-hidden border-0 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500"
                    onClick={() => handleReadMore(displayedNews[0])}
                  >
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img 
                        src={displayedNews[0].thumbnail} 
                        alt={displayedNews[0].title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <Badge variant="secondary" className="bg-primary text-primary-foreground mb-4">
                          {displayedNews[0].category}
                        </Badge>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary-foreground transition-colors">
                          {displayedNews[0].title}
                        </h3>
                        <div className="flex items-center gap-3 text-white/80 text-sm">
                          <Clock size={14} />
                          <span>{formatDate(displayedNews[0].date)}</span>
                          <span>•</span>
                          <span>{displayedNews[0].readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {/* Side Articles - Right Side */}
              <div className="space-y-6">
                {displayedNews.slice(1, 4).map((item, index) => (
                  <Card
                    key={item.id}
                    className="group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-card/30 backdrop-blur-sm overflow-hidden"
                    onClick={() => handleReadMore(item)}
                  >
                    <div className="flex gap-4 p-4">
                      <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-20 h-20 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge variant="outline" className="text-xs mb-2">
                          {item.category}
                        </Badge>
                        <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 text-base">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock size={12} />
                          <span>{formatDate(item.date)}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            /* Grid Layout for View All */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {displayedNews.map((item) => (
                <Card
                  key={item.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
                  onClick={() => handleReadMore(item)}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-background/90 text-foreground text-xs">
                        {item.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 text-lg">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <Clock size={12} />
                      <span>{formatDate(item.date)}</span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* View All Button */}
          <div className="text-center">
            {!showMore ? (
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowMore(true)}
                className="px-8 py-3 text-base font-semibold bg-background hover:bg-primary hover:text-primary-foreground border-2 border-primary/20 hover:border-primary transition-all duration-300"
              >
                View All
              </Button>
            ) : (
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowMore(false)}
                className="px-8 py-3 text-base font-semibold bg-background hover:bg-primary hover:text-primary-foreground border-2 border-primary/20 hover:border-primary transition-all duration-300"
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

export default BlogsSection;