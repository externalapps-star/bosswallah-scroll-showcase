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
            <div className="flex gap-6 mb-8">
              {/* Sidebar with border - Fixed height */}
              <div className="w-80 flex-shrink-0">
                <div className="border-2 border-primary/20 rounded-lg p-4 bg-card/30 backdrop-blur-sm h-[500px]">
                  <h3 className="font-semibold text-foreground mb-4 text-lg">Categories</h3>
                  <div className="space-y-2 overflow-y-auto h-[420px]">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => {
                          setSelectedCategory(category.name);
                          setLoadedCount(8); // Reset to initial count of 8 when changing category
                        }}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 text-left ${
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
              </div>

              {/* Main Content with border and scroll - Fixed height */}
              <div className="flex-1">
                <div className="border-2 border-primary/20 rounded-lg bg-card/30 backdrop-blur-sm h-[500px] flex flex-col">
                  {/* Header */}
                  <div className="p-4 border-b border-primary/10 flex-shrink-0">
                    <h3 className="font-semibold text-foreground text-lg">Latest News</h3>
                  </div>
                  
                  {/* Scrollable News Container - Fixed height, no expansion */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-4">
                      {displayedNews.slice(0, loadedCount).map((item, index) => (
                        <Card
                          key={item.id}
                          className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-card/50 backdrop-blur-sm overflow-hidden ${
                            index >= loadedCount - 8 && index < loadedCount ? 'animate-fade-in' : ''
                          }`}
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
                    
                    {/* Load More Button inside scroll area */}
                    {hasMoreNews && (
                      <div className="text-center mt-6 pb-4">
                        <Button 
                          variant="outline" 
                          size="lg"
                          onClick={handleLoadMore}
                          disabled={isLoadingMore}
                          className="px-8 border-2 border-primary text-primary bg-transparent hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-primary hover:text-primary-foreground hover:border-primary/20 transition-all duration-300 disabled:opacity-50"
                        >
                          {isLoadingMore ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
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