import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NewsModal from "./NewsModal";
import { useState, useEffect } from "react";
import { Clock, Calendar, User, ArrowRight, BookOpen, ExternalLink, Filter } from "lucide-react";
import { NewsService } from "@/services/NewsService";

// Import blog thumbnails
import blogInstagramGrowFollowers from "@/assets/blog-instagram-grow-followers.png";
import blogInstagramBusinessAccount from "@/assets/blog-instagram-business-account.png";
import blogFinancialPlanningGuide from "@/assets/blog-financial-planning-guide.png";
import blogSaveMoneyDailyTips from "@/assets/blog-save-money-daily-tips.png";
import blogAgricultureBusinessIdeas from "@/assets/blog-agriculture-business-ideas.png";
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
          thumbnail: [blogInstagramGrowFollowers, blogInstagramBusinessAccount, blogFinancialPlanningGuide, blogSaveMoneyDailyTips, blogAgricultureBusinessIdeas][index % 5]
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
  const categories = ["All", "Creator Hub", "Finance", "Local Business"];
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
  const filteredNews = selectedCategory === "All" ? newsItems : newsItems.filter(item => item.category === selectedCategory);
  return <>
      <section id="blogs" className="section-padding bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Latest <span className="gradient-text">Blogs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Thoughtful articles to keep you informed and inspired</p>
          </div>


          {/* News Grid */}
          <div className="space-y-6 mb-8">
            {/* First Line - Trending + Regular Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Trending Card - Takes 2/3 width */}
              {filteredNews.slice(0, 1).map(item => <Card key={item.id} className="lg:col-span-2 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-accent/30 border-2 border-accent/20 hover:border-accent/60 bg-gradient-to-br from-card/70 to-accent/5 backdrop-blur-sm overflow-hidden hover-scale animate-fade-in h-80 flex flex-col" onClick={() => window.open(item.url, '_blank')}>
                  <div className="relative overflow-hidden">
                    <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-accent text-accent-foreground text-sm font-semibold border border-accent/50 group-hover:border-accent shadow-lg animate-pulse">
                        🔥 Trending
                      </Badge>
                    </div>
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <CardContent className="p-4 relative">
                    {/* Animated border accent */}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent via-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                    
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2 text-lg">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground group-hover:text-accent/70 transition-colors duration-300">
                      <span>{formatDate(item.date)}</span>
                      <span>{item.readTime}</span>
                    </div>
                  </CardContent>
                </Card>)}

              {/* First Regular Card - Takes 1/3 width */}
              {filteredNews.slice(1, 2).map((item, index) => <Card key={item.id} className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 border-2 border-transparent hover:border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden hover-scale h-80 flex flex-col" onClick={() => window.open(item.url, '_blank')}>
                  <div className="relative overflow-hidden">
                    <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-background/90 text-foreground text-xs border border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                        {item.category}
                      </Badge>
                    </div>
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-4 relative">
                    {/* Animated border accent */}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 text-lg">
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
                </Card>)}
            </div>

            {/* Second Line - 3 Regular Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredNews.slice(2, 5).map((item, index) => <Card key={item.id} className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 border-2 border-transparent hover:border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden hover-scale h-80 flex flex-col" onClick={() => window.open(item.url, '_blank')}>
                  <div className="relative overflow-hidden">
                    <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-background/90 text-foreground text-xs border border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                        {item.category}
                      </Badge>
                    </div>
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-4 relative">
                    {/* Animated border accent */}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 text-lg">
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
                </Card>)}
            </div>
          </div>

          {/* Read More Articles CTA */}
          <div className="text-center">
            <Button variant="outline" size="lg" onClick={() => window.open('https://blog.bosswallah.com/', '_blank')} className="group border-2 border-primary text-primary bg-transparent hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-primary hover:text-primary-foreground hover:border-primary/20 active:bg-gradient-to-r active:from-primary active:via-accent active:to-primary active:text-primary-foreground transition-all duration-300">
              <BookOpen size={18} className="mr-2" />
              Read More Articles
            </Button>
          </div>

        </div>
      </section>

      {/* News Modal */}
      <NewsModal news={selectedNews} isOpen={isModalOpen} onClose={handleCloseModal} onNext={handleNextNews} onPrevious={handlePreviousNews} />
    </>;
};
export default BlogsSection;