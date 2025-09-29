import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NewsModal from "./NewsModal";
import { useState, useEffect } from "react";
import { Clock, Calendar, User, ArrowRight, BookOpen, ExternalLink, Filter } from "lucide-react";
import { NewsService } from "@/services/NewsService";

// Import generated thumbnails
import newsThumbEcommerce from "@/assets/news-thumb-ecommerce.jpg";
import newsThumbFood from "@/assets/news-thumb-food.jpg";
import newsThumbFranchise from "@/assets/news-thumb-franchise.jpg";
import newsThumbBurger from "@/assets/news-thumb-burger.jpg";
import newsThumbCoffee from "@/assets/news-thumb-coffee.jpg";
import newsThumbBusiness from "@/assets/news-thumb-business.jpg";
import youtubeAiThumbnail from "@/assets/youtube-ai-thumbnail.png";
import facelessInfluencersThumbnail from "@/assets/faceless-influencers-thumbnail.png";
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
        // Featured trending articles
        const trendingArticles = [
          {
            id: 9999,
            date: "2025-05-24",
            title: "Boss Wallah Becomes South India's No.1 YouTube Business Network",
            excerpt: "South India's most powerful multi-language business learning platform crosses 13 million subscribers and dominates with over 200 million monthly views.",
            content: "Boss Wallah, India's most inclusive entrepreneurship learning platform, has become South India's #1 YouTube network for multi-language business content. With 13M+ subscribers and 200M+ monthly views across 14 channels, it delivers practical business knowledge in Telugu, Tamil, Kannada, Malayalam, Hindi, and English. The ecosystem includes core business, Academy, and Farming channels—reaching Tier 2/3 towns, farmers, homemakers, and youth. Unlike single-language creators, Boss Wallah spans all four major South Indian languages at scale. Its mobile app integrates content, community, mentorship, and structured learning. Boss Wallah is redefining how South India learns to start and grow businesses.",
            category: "Digital Skills",
            thumbnail: newsThumbBusiness,
            readTime: "3 min read",
            author: "Boss Wallah Blogs",
            tags: ["YouTube", "Business Network", "South India"],
            url: "https://blog.bosswallah.com/boss-wallah-becomes-south-indias-no-1-youtube-business-network/"
          },
          {
            id: 9998,
            date: "2025-09-24",
            title: "From 30M to 150M Views: Boss Wallah's Facebook Surge Reveals India's Business and Personal Finance Aspirations",
            excerpt: "Boss Wallah has reported a fivefold surge in video views on Facebook within just six months, scaling from 30 million in March to 150 million in August 2025.",
            content: "Boss Wallah, India's #1 entrepreneurship platform, has seen Facebook video views surge 5X in six months—from 30M in March to 150M in August 2025. Unlike YouTube's younger audience, Facebook growth is driven by people in their 30s and 40s, seeking practical advice on business, money, and financial independence. This mirrors India's broader shift, where non-metro demand is growing 2.5X faster than metros (Nielsen 2024). Boss Wallah's business, finance, and farming content is powering one of the most engaged entrepreneurial communities online. With 18M+ followers and 330M+ monthly views across platforms, Boss Wallah Media is scaling content nationwide. The platform is doubling down on Facebook to serve ambitious Indians and help brands reach this motivated audience.",
            category: "Digital Skills",
            thumbnail: newsThumbEcommerce,
            readTime: "3 min read",
            author: "PRNewswire",
            tags: ["Facebook", "Growth", "Social Media"],
            url: "https://www.business-standard.com/content/press-releases-ani/from-30m-to-150m-views-boss-wallah-elevates-south-indians-business-and-personal-finance-aspirations-125092400965_1.html"
          }
        ];

        const latestNews = await NewsService.fetchNewsFromBossWallah();
        // Create content for second row cards based on trending topics
        const secondRowCards = [
          {
            id: 9997,
            date: "2025-09-16",
            title: "YouTube's AI Gamble: A New Era for Content?",
            excerpt: "YouTube unveils revolutionary AI tools including Veo 3 integration for Shorts, transforming how creators produce content with text-to-video generation and automated backgrounds.",
            content: "YouTube is betting big on AI as its next major growth driver. The platform has introduced groundbreaking generative AI tools for Shorts creators, including a custom version of Google's Veo 3 text-to-video model. These tools allow creators to generate video backgrounds, create clips with sound using simple text prompts, and apply motion effects to photos - all for free. The Dream Screen feature enables instant photo and video creation based on creator prompts. This AI integration represents YouTube's strategic shift to democratize content creation, making professional-quality video production accessible to millions of creators worldwide. With AI-powered features for dialogue-to-song conversion and video restyling, YouTube is positioning itself at the forefront of the creator economy revolution.",
            category: "Digital Skills",
            thumbnail: youtubeAiThumbnail,
            readTime: "2 min read",
            author: "Tech Reporter",
            tags: ["YouTube", "AI", "Content Creation"],
            url: "https://techcrunch.com/2025/09/16/youtube-announces-new-generative-ai-tools-for-shorts-creators/"
          },
          {
            id: 9996,
            date: "2025-04-16",
            title: "India's Faceless Influencers: A New Era of Digital Fame",
            excerpt: "The rise of faceless influencers and AI avatars is reshaping India's digital marketing landscape, with authenticity transcending physical appearance in 2025.",
            content: "India is witnessing a revolutionary shift in influencer marketing with the emergence of faceless influencers and AI avatars. These digital personalities are gaining massive followings without showing their faces, focusing instead on craft, content quality, and authentic storytelling. India's first AI mom influencer has already launched and is trending across social platforms. This movement represents a paradigm shift where authenticity transcends physicality - creators are building trust through consistent value delivery rather than personal branding. Brands are increasingly exploring AI influencers for their cost-effectiveness, scalability, and 24/7 availability. From virtual cooking shows to tech tutorials, faceless creators are proving that engagement depends more on content quality than creator appearance. This trend is particularly strong in India's Tier 2 and Tier 3 cities, where creators prefer anonymity while building substantial audiences.",
            category: "Digital Skills",
            thumbnail: facelessInfluencersThumbnail,
            readTime: "3 min read",
            author: "Digital Marketing Expert",
            tags: ["Influencers", "AI", "Digital Marketing"],
            url: "https://www.kolsquare.com/en/blog/unveiling-the-power-of-faceless-influencers-how-authenticity-transcends-physicality"
          }
        ];
        
        // Map thumbnails to the fetched news
        const newsWithThumbnails = latestNews.map((item, index) => ({
          ...item,
          thumbnail: [newsThumbFranchise, newsThumbBurger, newsThumbCoffee, newsThumbFood][index % 4]
        }));
        
        // Combine trending articles with second row content and other news
        setNewsItems([...trendingArticles, ...secondRowCards, ...newsWithThumbnails]);
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
  const categories = [{
    name: "All",
    icon: "📊"
  }, {
    name: "Digital Skills",
    icon: "💻"
  }, {
    name: "Service Business",
    icon: "💼"
  }, {
    name: "Home-based Business",
    icon: "🏠"
  }, {
    name: "Retail Business",
    icon: "🏪"
  }, {
    name: "Personal Finance",
    icon: "🚀"
  }, {
    name: "Government Schemes",
    icon: "💳"
  }, {
    name: "Agriculture",
    icon: "🌾"
  }, {
    name: "Animal Husbandry",
    icon: "🐄"
  }, {
    name: "Handicrafts Business",
    icon: "🎨"
  }, {
    name: "Manufacturing Business",
    icon: "⚙️"
  }, {
    name: "Food Business",
    icon: "🍔"
  }];
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
  const filteredNews = selectedCategory === "All" ? newsItems : newsItems.filter(item => item.category === selectedCategory.replace(/\s+/g, " "));
  const displayedNews = showMore ? filteredNews.slice(0, loadedCount) : filteredNews.slice(0, 4);
  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
    setLoadedCount(prev => Math.min(prev + 8, filteredNews.length));
    setIsLoadingMore(false);
  };
  const hasMoreNews = showMore && loadedCount < filteredNews.length;
  return <>
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
          {showMore ? (/* Sidebar + Main Content Layout for View All */
        <div className="flex gap-6 mb-8">
              {/* Sidebar with border - Fixed height */}
              

              {/* Main Content with border and scroll - Fixed height */}
              <div className="flex-1">
                <div className="border-2 border-primary/40 rounded-lg bg-card/30 backdrop-blur-sm h-[500px] flex flex-col">
                  {/* Header */}
                  <div className="p-4 border-b border-primary/30 flex-shrink-0">
                    <h3 className="font-semibold text-foreground text-lg">Latest News</h3>
                  </div>
                  
                  {/* Scrollable News Container - Fixed height, no expansion */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-4">
                      {displayedNews.slice(0, loadedCount).map((item, index) => <Card key={item.id} className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] active:translate-y-0 border-0 bg-card/50 backdrop-blur-sm overflow-hidden transform-gpu ${index >= loadedCount - 8 && index < loadedCount ? 'animate-fade-in' : ''}`} onClick={() => handleReadMore(item)}>
                          <CardContent className="p-0">
                            <div className="flex items-center">
                              {/* Thumbnail */}
                              <div className="relative overflow-hidden flex-shrink-0">
                                <img src={item.thumbnail} alt={item.title} className="w-24 h-16 object-cover transition-transform duration-500 group-hover:scale-105" />
                              </div>


                              {/* Content */}
                              <div className="flex-1 p-4">
                                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg leading-tight">
                                  {item.title}
                                </h3>
                              </div>
                            </div>
                          </CardContent>
                        </Card>)}
                    </div>
                    
                    {/* Load More Button inside scroll area */}
                    {hasMoreNews && <div className="text-center mt-6 pb-4">
                        <Button variant="outline" size="lg" onClick={handleLoadMore} disabled={isLoadingMore} className="px-8 border-2 border-primary text-primary bg-transparent hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-primary hover:text-primary-foreground hover:border-primary/20 transition-all duration-300 disabled:opacity-50">
                          {isLoadingMore ? <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                              Loading...
                            </> : 'Load More'}
                        </Button>
                      </div>}
                  </div>
                </div>
              </div>
            </div>) : (/* Two-column grid layout for Homepage */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 p-4 rounded-lg border border-border/50 bg-primary/5 backdrop-blur-sm shadow-soft">
              {displayedNews.map((item, index) => <Card key={item.id} className="group cursor-pointer transition-all duration-300 hover:shadow-md border-0 bg-card/30 backdrop-blur-sm" onClick={() => handleReadMore(item)}>
                  <CardContent className="p-4 border-2 border-white rounded-lg">
                    <div className="flex items-center gap-4">
                      {/* Thumbnail */}
                      <div className="relative overflow-hidden rounded-lg flex-shrink-0">
                        <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover transition-transform duration-500 group-hover:scale-105" />
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
                </Card>)}
            </div>)}

          {/* View More/Less Button */}
          <div className="text-center">
            {!showMore ? <Button variant="outline" size="lg" onClick={() => setShowMore(true)} className="group border-2 border-primary text-primary bg-transparent hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-primary hover:text-primary-foreground hover:border-primary/20 active:bg-gradient-to-r active:from-primary active:via-accent active:to-primary active:text-primary-foreground transition-all duration-300">
                <BookOpen size={18} className="mr-2" />
                View All
              </Button> : <Button variant="ghost" size="lg" onClick={() => {
            setShowMore(false);
            setSelectedCategory("All"); // Reset to show all categories
            setLoadedCount(8); // Reset for homepage view
          }} className="group border-2 border-primary text-primary bg-transparent hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-primary hover:text-primary-foreground hover:border-primary/20 active:bg-gradient-to-r active:from-primary active:via-accent active:to-primary active:text-primary-foreground transition-all duration-300">
                Show Less
              </Button>}
          </div>
        </div>
      </section>

      {/* News Modal */}
      <NewsModal news={selectedNews} isOpen={isModalOpen} onClose={handleCloseModal} onNext={handleNextNews} onPrevious={handlePreviousNews} />
    </>;
};
export default NewsSection;