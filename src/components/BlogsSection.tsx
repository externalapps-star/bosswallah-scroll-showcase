import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NewsModal from "./NewsModal";
import { useState, useEffect } from "react";
import { Clock, Calendar, User, ArrowRight, BookOpen, ExternalLink, Filter } from "lucide-react";
import { NewsService } from "@/services/NewsService";

// Import blog thumbnails
import blogScaleUgcCreators from "@/assets/blog-scale-ugc-creators.jpg";
import blogUgcSupportCosts from "@/assets/blog-ugc-support-costs.png";
import blogLongFormUgc from "@/assets/blog-long-form-ugc.png";
import blogUgcOutperformAds from "@/assets/blog-ugc-outperform-ads.png";
import blogSmallCreatorsCollaborate from "@/assets/blog-small-creators-collaborate.png";
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

  // Static blog posts
  useEffect(() => {
    const staticBlogs: NewsItem[] = [
      {
        id: 1,
        date: "2025-11-19",
        title: "How to Scale UGC Creators for Monthly Content Calendars Without Losing Authenticity",
        excerpt: "Scaling UGC is not about increasing quantity. It is about increasing creators while keeping the creativity fresh.",
        content: "If you are a brand that wants to publish consistent content, you already know the struggle...",
        category: "Video & UGC Production",
        thumbnail: blogScaleUgcCreators,
        readTime: "5 min read",
        author: "Prateek S",
        tags: ["UGC", "Content Strategy"],
        url: "https://bosswallah.com/blog/video-ugc-production/how-to-scale-ugc-creators-for-monthly-content-calendars-without-losing-authenticity/"
      },
      {
        id: 2,
        date: "2025-11-19",
        title: "How UGC Videos Reduce Customer Support Costs by Pre-Answering Buyer Questions",
        excerpt: "UGC videos have now become the unofficial assistants every support team secretly dreams of.",
        content: "Every brand wants two things: more customers and fewer questions from those customers...",
        category: "Video & UGC Production",
        thumbnail: blogUgcSupportCosts,
        readTime: "5 min read",
        author: "Prateek S",
        tags: ["UGC", "Customer Support"],
        url: "https://bosswallah.com/blog/video-ugc-production/how-ugc-videos-reduce-customer-support-costs-by-pre-answering-buyer-questions/"
      },
      {
        id: 3,
        date: "2025-11-19",
        title: "How Brands Are Using Long Form UGC Instead of Testimonials to Increase Conversions",
        excerpt: "Long-form UGC is replacing traditional testimonials as the new trust-building engine.",
        content: "There was a time when brands proudly displayed short testimonials as proof of quality...",
        category: "Video & UGC Production",
        thumbnail: blogLongFormUgc,
        readTime: "4 min read",
        author: "Prateek S",
        tags: ["UGC", "Conversions"],
        url: "https://bosswallah.com/blog/video-ugc-production/how-brands-are-using-long-form-ugc-instead-of-testimonials-to-increase-conversions/"
      },
      {
        id: 4,
        date: "2025-11-19",
        title: "Why UGC Videos Outperform Studio Ads in High-Consideration B2B Industries",
        excerpt: "When the stakes are high, people do not want glamour. They want the truth.",
        content: "If you have spent even a week in B2B marketing, you already know that buyers do not get influenced easily...",
        category: "Video & UGC Production",
        thumbnail: blogUgcOutperformAds,
        readTime: "5 min read",
        author: "Prateek S",
        tags: ["UGC", "B2B Marketing"],
        url: "https://bosswallah.com/blog/video-ugc-production/why-ugc-videos-outperform-studio-ads-in-high-consideration-b2b-industries/"
      },
      {
        id: 5,
        date: "2025-11-19",
        title: "How Small Creators Can Collaborate With Big Creators Without Paying",
        excerpt: "You can still collaborate with big creators without spending money. It takes strategy, effort, and a little charm.",
        content: "Every small creator dreams of that one big collaboration that changes everything...",
        category: "Creator Hub",
        thumbnail: blogSmallCreatorsCollaborate,
        readTime: "4 min read",
        author: "Prateek S",
        tags: ["Creator", "Collaboration"],
        url: "https://bosswallah.com/blog/creator-hub/how-small-creators-can-collaborate-with-big-creators-without-paying/"
      }
    ];
    setNewsItems(staticBlogs);
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
          <div className="text-center mb-8 md:mb-16 mt-4 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-6 text-foreground whitespace-nowrap">
              Latest <span className="gradient-text">Blogs</span>
            </h2>
            <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">Thoughtful articles to keep you informed and inspired</p>
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
                    
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2 text-base md:text-lg">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 line-clamp-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground group-hover:text-accent/70 transition-colors duration-300">
                      <span>{formatDate(item.date)}</span>
                      <span>{item.readTime}</span>
                    </div>
                  </CardContent>
                </Card>)}

              {/* First Regular Card - Takes 1/3 width */}
              {filteredNews.slice(1, 2).map((item, index) => <Card key={item.id} className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 border-2 border-accent/20 md:border-transparent hover:border-accent/60 md:hover:border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden hover-scale h-80 flex flex-col" onClick={() => window.open(item.url, '_blank')}>
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
                    
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 text-base md:text-lg">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 line-clamp-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
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
              {filteredNews.slice(2, 5).map((item, index) => <Card key={item.id} className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 border-2 border-accent/20 md:border-transparent hover:border-accent/60 md:hover:border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden hover-scale h-80 flex flex-col" onClick={() => window.open(item.url, '_blank')}>
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
                    
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 text-base md:text-lg">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 line-clamp-2 group-hover:text-muted-foreground/80 transition-colors duration-300">
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
            <Button variant="outline" size="lg" onClick={() => window.open('https://bosswallah.com/blog/', '_blank')} className="group border-2 border-primary text-primary bg-transparent hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-primary hover:text-primary-foreground hover:border-primary/20 active:bg-gradient-to-r active:from-primary active:via-accent active:to-primary active:text-primary-foreground transition-all duration-300">
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