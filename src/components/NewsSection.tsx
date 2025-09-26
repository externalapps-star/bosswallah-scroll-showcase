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

  const categories = [
    { name: "All", icon: "📊" },
    { name: "Digital Skills", icon: "💻" },
    { name: "Service Business", icon: "💼" },
    { name: "Home-based Business", icon: "🏠" },
    { name: "Retail Business", icon: "🏪" },
    { name: "Personal Finance", icon: "🚀" },
    { name: "Government Schemes", icon: "💳" },
    { name: "Agriculture", icon: "🌾" },
    { name: "Animal Husbandry", icon: "🐄" },
    { name: "Handicrafts Business", icon: "🎨" },
    { name: "Manufacturing Business", icon: "⚙️" },
    { name: "Food Business", icon: "🍔" }
  ];

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
  
  const displayedNews = showMore ? filteredNews : filteredNews.slice(0, 6);

  return (
    <>
      <section id="news" className="section-padding bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Trending <span className="gradient-text">News</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and strategies from Boss Wallah
            </p>
          </div>


          {/* News Grid */}
          {showMore ? (
            /* Sidebar + Main Content Layout for View All */
            <div className="flex gap-8 mb-8">
              {/* Sidebar */}
              <div className="w-80 flex-shrink-0">
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg border transition-all duration-200 text-left ${
                        selectedCategory === category.name
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/30'
                      }`}
                    >
                      <span className="text-2xl">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <div className="space-y-4">
                  {displayedNews.map((item) => (
                    <Card
                      key={item.id}
                      className="group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-card/50 backdrop-blur-sm overflow-hidden"
                      onClick={() => handleReadMore(item)}
                    >
                      <CardContent className="p-0">
                        <div className="flex items-center">
                          {/* Thumbnail */}
                          <div className="relative overflow-hidden flex-shrink-0">
                            <img 
                              src={item.thumbnail} 
                              alt={item.title}
                              className="w-24 h-16 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>

                          {/* NEWS Label */}
                          <div className="px-4">
                            <div className="writing-mode-vertical text-xs font-bold text-muted-foreground tracking-wider">
                              NEWS
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 p-4">
                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg leading-tight">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-8">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="px-8"
                  >
                    Load More
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            /* Two-column grid layout for Homepage */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 p-4 rounded-lg border border-border/50 bg-primary/5 backdrop-blur-sm shadow-soft">
              {displayedNews.map((item, index) => (
                <Card
                  key={item.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-md border-0 bg-card/30 backdrop-blur-sm"
                  onClick={() => handleReadMore(item)}
                >
                  <CardContent className="p-4">
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
                        
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm mb-1">
                          {item.title}
                        </h3>
                      </div>

                      {/* Arrow */}
                      <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
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
                className="group bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-x hover:animate-none text-primary-foreground border-primary/20"
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
                className="group bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-x hover:animate-none text-primary-foreground border-primary/20"
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