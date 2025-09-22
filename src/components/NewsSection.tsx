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
  ExternalLink
} from "lucide-react";

const NewsSection = () => {
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // Real Boss Wallah news content from their website
  const newsItems = [
    {
      id: 1,
      date: "2025-01-22",
      title: "10 Digital Marketing Trends to Watch in 2025",
      excerpt: "Stay ahead of the curve with these game-changing digital marketing trends that will define success in 2025. From AI-powered personalization to voice search optimization.",
      content: "Digital marketing is evolving at breakneck speed, and 2025 promises to be a transformative year. AI-powered personalization is becoming the norm, with brands using machine learning to deliver hyper-targeted experiences. Voice search and conversational marketing are reshaping how consumers interact with brands. Privacy-first marketing strategies are essential as third-party cookies phase out. Video content, especially short-form, continues to dominate engagement across all platforms. Augmented reality (AR) marketing is creating immersive brand experiences. Purpose-driven marketing resonates with conscious consumers. Social commerce is blurring the lines between social media and e-commerce. Micro-influencer partnerships offer authentic brand advocacy. Data analytics and attribution modeling are becoming more sophisticated. Interactive content formats are driving higher engagement rates.",
      category: "Creator Hub",
      thumbnail: "https://blog.bosswallah.com/wp-content/uploads/2024/08/Freepik_digital-marketing-trends.jpg",
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
      thumbnail: "https://blog.bosswallah.com/wp-content/uploads/2024/09/100-Fresh-Ideas-for-Every-Social-Media-Platform-2025.jpg",
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
      thumbnail: "https://blog.bosswallah.com/wp-content/uploads/2024/11/Top-10-Booming-Business-Ideas-for-Doctors-in-2025.jpg",
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
      thumbnail: "https://blog.bosswallah.com/wp-content/uploads/2024/08/Success-Story-of-the-Ferrari-Company-Ferrari-Brand-Case-Study.jpg",
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
      thumbnail: "https://blog.bosswallah.com/wp-content/uploads/2024/11/10-Lucrative-Cement-Business-Ideas-to-Build-Your-Future.jpg",
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
      thumbnail: "https://blog.bosswallah.com/wp-content/uploads/2024/10/Most-Profitable-Food-Franchise-in-India-2025.jpg",
      readTime: "14 min read",
      author: "Boss Wallah Business",
      tags: ["Franchise", "Food Business", "Investment"],
      url: "https://blog.bosswallah.com/most-profitable-food-franchise-in-india-2025/"
    }
  ];

  const handleReadMore = (news: any) => {
    setSelectedNews(news);
    setIsModalOpen(true);
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

  const displayedNews = showMore ? newsItems : newsItems.slice(0, 3);

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

          {/* News Grid */}
          <div className="space-y-6 mb-8">
            {displayedNews.map((item, index) => (
              <Card
                key={item.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-card/50 backdrop-blur-sm ${
                  index === 0 ? 'md:flex md:items-center md:gap-8' : ''
                }`}
                onClick={() => handleReadMore(item)}
              >
                <div className={`${index === 0 ? 'md:w-1/2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        index === 0 ? 'h-64' : 'h-48'
                      }`}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90 text-foreground">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardContent className={`p-6 ${index === 0 ? 'md:w-1/2' : ''}`}>
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(item.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {item.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {item.author}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 ${
                    index === 0 ? 'text-2xl' : 'text-xl'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="p-0 h-auto font-semibold text-primary hover:text-accent group/btn">
                      Read Article
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                    
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          {!showMore && newsItems.length > 3 && (
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowMore(true)}
                className="group"
              >
                <BookOpen size={18} className="mr-2" />
                View All {newsItems.length} Articles
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* News Modal */}
      <NewsModal 
        news={selectedNews}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default NewsSection;