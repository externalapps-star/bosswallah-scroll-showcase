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
              Stay updated with the latest insights, trends, and strategies from Boss Wallah
            </p>
          </div>


          {/* News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {filteredNews.slice(0, 5).map((item, index) => (
              <Card
                key={item.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 border-2 border-transparent hover:border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden hover-scale ${
                  index === 0 ? 'lg:col-span-2 hover:border-accent/40' : ''
                }`}
                onClick={() => handleReadMore(item)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className={`w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 ${
                      index === 0 ? 'h-64' : 'h-48'
                    }`}
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-background/90 text-foreground text-xs border border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                      {index === 0 ? 'Trending' : item.category}
                    </Badge>
                  </div>
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-4 relative">
                  {/* Animated border accent */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  <h3 className={`font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 ${
                    index === 0 ? 'text-xl' : 'text-lg'
                  }`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground group-hover:text-primary/70 transition-colors duration-300">
                    <span>{formatDate(item.date)}</span>
                    <span>{item.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
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