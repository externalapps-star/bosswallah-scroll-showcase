import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NewsModal from "./NewsModal";
import { useState } from "react";
import { 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  BookOpen,
  ExternalLink,
  Filter
} from "lucide-react";

// Import generated thumbnails
import newsThumb1 from "@/assets/news-thumb-1.jpg";
import newsThumb2 from "@/assets/news-thumb-2.jpg";
import newsThumb3 from "@/assets/news-thumb-3.jpg";
import newsThumb4 from "@/assets/news-thumb-4.jpg";
import newsThumb5 from "@/assets/news-thumb-5.jpg";
import newsThumb6 from "@/assets/news-thumb-6.jpg";

const NewsSection = () => {
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  // Real Boss Wallah news content from their website
  const newsItems = [
    {
      id: 1,
      date: "2025-01-22",
      title: "10 Digital Marketing Trends to Watch in 2025",
      excerpt: "Stay ahead of the curve with these game-changing digital marketing trends that will define success in 2025. From AI-powered personalization to voice search optimization.",
      content: "Digital marketing is evolving at breakneck speed, and 2025 promises to be a transformative year. AI-powered personalization is becoming the norm, with brands using machine learning to deliver hyper-targeted experiences. Voice search and conversational marketing are reshaping how consumers interact with brands. Privacy-first marketing strategies are essential as third-party cookies phase out. Video content, especially short-form, continues to dominate engagement across all platforms. Augmented reality (AR) marketing is creating immersive brand experiences. Purpose-driven marketing resonates with conscious consumers. Social commerce is blurring the lines between social media and e-commerce. Micro-influencer partnerships offer authentic brand advocacy. Data analytics and attribution modeling are becoming more sophisticated. Interactive content formats are driving higher engagement rates.",
      category: "Creator Hub",
      thumbnail: newsThumb1,
      readTime: "8 min read",
      author: "Boss Wallah Blogs",
      tags: ["Digital Marketing", "Trends", "2025"],
      url: "https://blog.bosswallah.com/10-digital-marketing-trends-to-watch-in-2025/"
    },
    {
      id: 2,
      date: "2025-01-20",
      title: "100 Fresh Ideas for Every Social Media Platform (2025)",
      excerpt: "Unleash your creativity with 100 content ideas across YouTube, Instagram, Facebook, LinkedIn, and more. Never run out of engaging content again.",
      content: "Content creation has become the backbone of digital success, but coming up with fresh ideas consistently can be challenging. This comprehensive guide provides 100 actionable content ideas across all major social media platforms. For YouTube, consider educational tutorials, behind-the-scenes content, product reviews, and trending topic discussions. Instagram thrives on visual storytelling through carousel posts, Reels, Stories, and IGTV content. Facebook favors community-building content, live videos, polls, and user-generated content campaigns. LinkedIn responds well to professional insights, industry news, career advice, and thought leadership posts. Twitter excels with real-time updates, trending hashtags, Twitter Spaces, and engagement threads. Each platform has unique audience expectations and algorithmic preferences that content creators must understand to maximize reach and engagement.",
      category: "Digital Skills", 
      thumbnail: newsThumb2,
      readTime: "12 min read",
      author: "Boss Wallah Blogs",
      tags: ["Content Creation", "Social Media", "Ideas"],
      url: "https://blog.bosswallah.com/content-creation-ideas/"
    },
    {
      id: 3,
      date: "2025-01-18",
      title: "Top 10 Booming Business Ideas for Doctors in 2025",
      excerpt: "Medical professionals can expand beyond traditional practice with these innovative business opportunities that leverage healthcare expertise.",
      content: "The healthcare landscape is evolving, creating unprecedented opportunities for medical professionals to diversify their income streams. Telemedicine platforms offer scalable consultation services, breaking geographical barriers. Specialized medical consultation services provide second opinions and expert advice. Personalized wellness coaching combines medical knowledge with lifestyle guidance. Mobile medical clinics bring healthcare to underserved communities. Medical content creation and education platforms help doctors share expertise while building authority. Medical tourism facilitation services connect international patients with quality care. On-demand medical staffing solutions address healthcare workforce shortages. Medical equipment rental and retail businesses serve smaller practices. Medical billing and coding services help streamline practice operations. These business models allow doctors to leverage their expertise while creating multiple revenue streams and making healthcare more accessible.",
      category: "Business",
      thumbnail: newsThumb3,
      readTime: "10 min read",
      author: "Boss Wallah Business",
      tags: ["Healthcare", "Business Ideas", "Medical"],
      url: "https://blog.bosswallah.com/business-ideas-for-doctors/"
    },
    {
      id: 4,
      date: "2025-01-16", 
      title: "Success Story of the Ferrari Company | Ferrari Brand Case Study",
      excerpt: "Discover how Ferrari built one of the world's most prestigious luxury brands through racing heritage, exclusivity, and unwavering commitment to excellence.",
      content: "Ferrari's journey from a racing team to a global luxury icon is a masterclass in brand building and strategic positioning. Founded by Enzo Ferrari in 1939, the company initially focused exclusively on racing, which became the foundation of its legendary status. The brand's racing DNA is embedded in every aspect of the business, from product development to marketing strategy. Ferrari's scarcity model creates unprecedented demand, with production deliberately limited to maintain exclusivity. The company's vertical integration ensures quality control and brand consistency across all touchpoints. Strategic partnerships with luxury brands and high-profile events reinforce the premium positioning. Ferrari's customer experience extends beyond the car purchase, creating a lifestyle brand that customers aspire to join. The brand's emotional connection with customers drives loyalty that spans generations. This case study reveals how authenticity, heritage, and strategic scarcity can create a brand worth billions.",
      category: "Business",
      thumbnail: newsThumb4,
      readTime: "15 min read",
      author: "Boss Wallah Business",
      tags: ["Case Study", "Brand Building", "Ferrari"],
      url: "https://blog.bosswallah.com/success-story-of-the-ferrari-company-ferrari-brand-case-study/"
    },
    {
      id: 5,
      date: "2025-01-14",
      title: "10 Lucrative Cement Business Ideas to Build Your Future",
      excerpt: "Explore profitable opportunities in the booming construction industry with these innovative cement business ideas for aspiring entrepreneurs.",
      content: "The construction industry's rapid growth in India presents numerous opportunities for cement-related businesses. Mini cement plants offer local production advantages with lower transportation costs and faster delivery. Cement block manufacturing serves the growing demand for sustainable construction materials. Cement bag manufacturing addresses packaging needs for cement producers. Retail and distribution businesses create local supply chains for construction projects. Specialized cement products for niche applications command premium pricing. Mobile concrete batching plant rentals serve multiple construction sites efficiently. Cement testing laboratories ensure quality compliance for construction projects. Cement waste recycling addresses environmental concerns while creating value. Consultancy services help optimize cement usage and construction processes. Online cement marketplaces connect suppliers with buyers efficiently. Each business model requires different investment levels and expertise, allowing entrepreneurs to choose based on their resources and market understanding.",
      category: "Business",
      thumbnail: newsThumb5,
      readTime: "12 min read",
      author: "Boss Wallah Business",
      tags: ["Construction", "Business Ideas", "Cement"],
      url: "https://blog.bosswallah.com/10-lucrative-cement-business-ideas-to-build-your-future/"
    },
    {
      id: 6,
      date: "2025-01-12",
      title: "Most Profitable Food Franchise in India (2025)",
      excerpt: "Discover the top food franchise opportunities in India with detailed ROI analysis, investment requirements, and growth potential for each brand.",
      content: "India's food franchise industry is experiencing unprecedented growth, driven by changing consumer preferences and urbanization. QSR (Quick Service Restaurant) franchises lead profitability metrics with standardized operations and proven business models. Regional cuisine franchises tap into local preferences while maintaining scalability. Cloud kitchen concepts reduce overhead costs while maximizing delivery potential. Healthy food franchises cater to growing wellness consciousness among consumers. Street food franchises offer authentic experiences with modern hygiene standards. Beverage franchises complement food offerings with high-margin products. Ice cream and dessert franchises provide seasonal revenue streams. Coffee shop franchises create community gathering spaces with consistent revenue. Food truck franchises offer mobility and lower investment requirements. The key to success lies in choosing franchises with strong brand recognition, comprehensive training programs, ongoing support, and proven profitability in similar markets.",
      category: "Business",
      thumbnail: newsThumb6,
      readTime: "14 min read",
      author: "Boss Wallah Business",
      tags: ["Franchise", "Food Business", "Investment"],
      url: "https://blog.bosswallah.com/most-profitable-food-franchise-in-india-2025/"
    }
  ];

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
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="gap-2"
                >
                  <Filter size={14} />
                  {category}
                </Button>
              ))}
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
                className="group border border-orange-200 hover:border-orange-300 hover:bg-orange-50"
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