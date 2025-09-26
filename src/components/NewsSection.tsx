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
  const [loadedCount, setLoadedCount] = useState(8);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

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
    : newsItems.filter(item => item.category === selectedCategory.replace(/\s+/g, " "));
  
  const displayedNews = showMore ? filteredNews.slice(0, loadedCount) : filteredNews.slice(0, 6);

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    setLoadedCount(prev => Math.min(prev + 8, filteredNews.length));
    setIsLoadingMore(false);
  };

  const hasMoreNews = showMore && loadedCount < filteredNews.length;

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
            <div className="flex gap-8 mb-12">
              {/* Sidebar with enhanced shadows and borders */}
              <div className="w-80 flex-shrink-0">
                <div className="relative rounded-xl p-6 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md h-[500px] shadow-2xl border border-border/20 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-primary/5 before:to-accent/5 before:backdrop-blur-sm">
                  <div className="relative z-10">
                    <div className="p-6 border-b border-primary/20 mb-6 bg-gradient-to-r from-primary/5 to-accent/5">
                      <h3 className="font-bold text-foreground text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">Categories</h3>
                    </div>
                    <div className="space-y-3 overflow-y-auto h-[400px] px-6 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                      {categories.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => {
                            setSelectedCategory(category.name);
                            setLoadedCount(8); // Reset to initial count of 8 when changing category
                          }}
                          className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 text-left shadow-sm hover:shadow-md hover:scale-[1.02] ${
                            selectedCategory === category.name
                              ? 'border-primary/40 bg-gradient-to-r from-primary/10 to-accent/10 text-primary shadow-lg shadow-primary/10'
                              : 'border-border/30 bg-gradient-to-r from-card/80 to-card/60 hover:from-card hover:to-card/90 hover:border-primary/40'
                          }`}
                        >
                          <span className="text-2xl filter drop-shadow-sm">{category.icon}</span>
                          <span className="font-semibold">{category.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content with enhanced shadows and borders */}
              <div className="flex-1">
                <div className="relative rounded-xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md h-[500px] flex flex-col shadow-2xl border border-border/20 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-primary/5 before:to-accent/5 before:backdrop-blur-sm">
                  {/* Header with enhanced styling */}
                  <div className="relative z-10 p-6 border-b border-primary/20 flex-shrink-0 bg-gradient-to-r from-primary/5 to-accent/5">
                    <h3 className="font-bold text-foreground text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">Latest News</h3>
                  </div>
                  
                  {/* Scrollable News Container with enhanced styling */}
                  <div className="relative z-10 flex-1 overflow-y-auto p-6">
                    <div className="space-y-5">
                      {displayedNews.slice(0, loadedCount).map((item, index) => (
                        <Card
                          key={item.id}
                          className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02] border-0 bg-gradient-to-r from-card/70 to-card/50 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg hover:from-card/90 hover:to-card/70 ${
                            index >= loadedCount - 8 && index < loadedCount ? 'animate-fade-in' : ''
                          }`}
                          onClick={() => handleReadMore(item)}
                        >
                          <CardContent className="p-0">
                            <div className="flex items-center">
                              {/* Thumbnail with enhanced styling */}
                              <div className="relative overflow-hidden flex-shrink-0 rounded-l-xl">
                                <img 
                                  src={item.thumbnail} 
                                  alt={item.title}
                                  className="w-28 h-20 object-cover transition-transform duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 group-hover:to-transparent transition-all duration-300"></div>
                              </div>

                              {/* Content with enhanced typography */}
                              <div className="flex-1 p-5">
                                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg leading-tight line-clamp-2 drop-shadow-sm">
                                  {item.title}
                                </h3>
                              </div>

                              {/* Enhanced arrow indicator */}
                              <div className="pr-5">
                                <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 drop-shadow-sm" />
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    {/* Enhanced Load More Button */}
                    {hasMoreNews && (
                      <div className="text-center mt-8 pb-4">
                        <Button 
                          variant="outline" 
                          size="lg"
                          onClick={handleLoadMore}
                          disabled={isLoadingMore}
                          className="px-10 py-3 border-2 border-primary/30 text-primary bg-gradient-to-r from-transparent to-transparent hover:from-primary hover:to-accent hover:text-primary-foreground hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 disabled:opacity-50 rounded-xl font-semibold"
                        >
                          {isLoadingMore ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-3"></div>
                              Loading...
                            </>
                          ) : (
                            'Load More'
                          )}
                        </Button>
                      </div>
                    )}
                  </div>
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
                  <CardContent className="p-4 border-2 border-white rounded-lg">
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
                className="group border-2 border-primary text-primary bg-transparent hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-primary hover:text-primary-foreground hover:border-primary/20 active:bg-gradient-to-r active:from-primary active:via-accent active:to-primary active:text-primary-foreground transition-all duration-300"
              >
                <BookOpen size={18} className="mr-2" />
                View All
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => {
                  setShowMore(false);
                  setSelectedCategory("All"); // Reset to show all categories
                  setLoadedCount(8); // Reset for homepage view
                }}
                className="group border-2 border-primary text-primary bg-transparent hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-primary hover:text-primary-foreground hover:border-primary/20 active:bg-gradient-to-r active:from-primary active:via-accent active:to-primary active:text-primary-foreground transition-all duration-300"
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