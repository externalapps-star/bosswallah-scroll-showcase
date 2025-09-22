import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import newsExpansion from "@/assets/news-expansion.jpg";
import newsMilestone from "@/assets/news-milestone.jpg";
import newsPartnership from "@/assets/news-partnership.jpg";
import { useState } from "react";
import { 
  Clock, 
  Calendar, 
  TrendingUp, 
  Users, 
  Globe, 
  Award, 
  ExternalLink, 
  ArrowRight, 
  Youtube, 
  Instagram, 
  Facebook,
  BookOpen,
  Briefcase,
  Zap,
  Filter
} from "lucide-react";

const NewsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState("featured"); // 'featured' or 'all'

  // Real Boss Wallah news content from their website
  const newsItems = [
    {
      id: 1,
      date: "2025-01-22",
      title: "YouTube Shorts Monetization 2025: New Updates, Revenue Share & Best Practices",
      excerpt: "Discover the latest YouTube Shorts monetization updates for 2025, including new revenue share models, eligibility criteria, and best practices for Indian creators.",
      category: "Creator Hub",
      type: "featured",
      thumbnail: newsExpansion,
      readTime: "8 min read",
      author: "Bhoomireddy Hemalatha",
      isRecent: true,
      tags: ["YouTube", "Monetization", "Creators"]
    },
    {
      id: 2,
      date: "2025-01-20",
      title: "YouTube Update 2025 Explained: New Policies, Features & Monetization Changes",
      excerpt: "Complete breakdown of YouTube's biggest update ever with new policies, AI tools, advanced features, and crucial monetization changes for creators and brands.",
      category: "Creator Hub", 
      type: "major",
      thumbnail: newsMilestone,
      readTime: "12 min read",
      author: "Bhoomireddy Hemalatha",
      isRecent: true,
      tags: ["YouTube", "Policy Update", "AI Tools"]
    },
    {
      id: 3,
      date: "2025-01-18",
      title: "Top 10 Trending Songs on Instagram Reels Today in India (2025)",
      excerpt: "Latest trending audio tracks dominating Instagram Reels in India. Boost your reach with these viral songs that are making creators famous.",
      category: "Digital Skills",
      type: "featured",
      thumbnail: newsPartnership,
      readTime: "6 min read",
      author: "Boss Wallah Blogs",
      isRecent: true,
      tags: ["Instagram", "Reels", "Trending"]
    },
    {
      id: 4,
      date: "2025-01-16", 
      title: "Top 10 Trending Hashtags on Instagram Today in India Reels (2025 Guide)",
      excerpt: "Master Instagram's algorithm with the most effective hashtags for Indian Reels. Complete guide with performance metrics and best practices.",
      category: "Digital Skills",
      type: "standard",
      thumbnail: newsExpansion,
      readTime: "5 min read",
      author: "Boss Wallah Blogs",
      isRecent: true,
      tags: ["Instagram", "Hashtags", "Social Media"]
    },
    {
      id: 5,
      date: "2025-01-14",
      title: "Top 10 Facebook Reels Hashtags Trending in 2025",
      excerpt: "Maximize your Facebook Reels reach with these trending hashtags. Essential guide for businesses and creators targeting Indian audiences.",
      category: "Digital Skills",
      type: "standard",
      thumbnail: newsMilestone,
      readTime: "4 min read",
      author: "Boss Wallah Blogs",
      isRecent: true,
      tags: ["Facebook", "Reels", "Marketing"]
    },
    {
      id: 6,
      date: "2025-01-12",
      title: "Top 10 Trending South Indian Song on Reels (2025 Viral List)",
      excerpt: "Viral South Indian tracks taking over Instagram and Facebook Reels. Covers Tamil, Telugu, Malayalam, and Kannada hits perfect for content creators.",
      category: "Digital Skills",
      type: "standard",
      thumbnail: newsPartnership,
      readTime: "7 min read",
      author: "Boss Wallah Blogs",
      isRecent: false,
      tags: ["Regional Content", "Music", "South India"]
    },
    {
      id: 7,
      date: "2025-01-10",
      title: "Top 10 Direct Selling Companies in India 2025",
      excerpt: "Complete analysis of India's leading direct selling companies with revenue data, product categories, and business opportunities for entrepreneurs.",
      category: "Business",
      type: "featured",
      thumbnail: newsExpansion,
      readTime: "10 min read",
      author: "Boss Wallah Business",
      isRecent: false,
      tags: ["Direct Selling", "Business Opportunity", "Entrepreneurship"]
    },
    {
      id: 8,
      date: "2025-01-08",
      title: "Boss Wallah Academy Launches Advanced Creator Certification Program",
      excerpt: "New comprehensive certification program designed to help Indian creators master platform-specific strategies across YouTube, Instagram, and Facebook.",
      category: "Company News",
      type: "major",
      thumbnail: newsMilestone,
      readTime: "5 min read",
      author: "Boss Wallah Team",
      isRecent: false,
      tags: ["Education", "Certification", "Creators"]
    }
  ];

  const categories = ["All", "Creator Hub", "Digital Skills", "Business", "Company News"];

  const filteredNews = activeFilter === "All" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeFilter);

  const displayedNews = viewMode === "featured" 
    ? filteredNews.slice(0, 6) 
    : filteredNews;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Creator Hub": return Youtube;
      case "Digital Skills": return Instagram;
      case "Business": return Briefcase;
      case "Company News": return Award;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Creator Hub": return "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800";
      case "Digital Skills": return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800";
      case "Business": return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800";
      case "Company News": return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800";
      default: return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800/20 dark:text-gray-300 dark:border-gray-700";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="news" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Latest <span className="gradient-text">News & Updates</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest insights on creator monetization, digital marketing trends, and business opportunities from Boss Wallah
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category);
              return (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    activeFilter === category 
                      ? 'bg-primary text-primary-foreground shadow-md scale-105' 
                      : 'hover:bg-primary/10 hover:border-primary/30 hover:scale-105'
                  }`}
                >
                  <IconComponent size={16} />
                  {category}
                  {category !== "All" && (
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {newsItems.filter(item => item.category === category).length}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-muted-foreground" />
            <Button
              variant={viewMode === "featured" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("featured")}
              className="text-sm"
            >
              Featured
            </Button>
            <Button
              variant={viewMode === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("all")}
              className="text-sm"
            >
              All News
            </Button>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedNews.map((item, index) => {
            const IconComponent = getCategoryIcon(item.category);
            const isLarge = item.type === "major" && index < 2;
            const isFeatured = item.type === "featured";
            
            return (
              <Card
                key={item.id}
                className={`group cursor-pointer overflow-hidden transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-brand ${
                  isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                } ${isFeatured ? 'ring-2 ring-primary/20 shadow-lg' : ''}`}
              >
                <div className="relative overflow-hidden">
                  {/* Thumbnail */}
                  <div className={`relative overflow-hidden ${isLarge ? 'h-64' : 'h-48'}`}>
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`flex items-center gap-1.5 border ${getCategoryColor(item.category)}`}>
                        <IconComponent size={12} />
                        {item.category}
                      </Badge>
                    </div>

                    {/* Status Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {item.isRecent && (
                        <Badge className="bg-red-500/90 text-white border-0 animate-pulse text-xs">
                          Latest
                        </Badge>
                      )}
                      {isFeatured && (
                        <Badge className="bg-amber-500/90 text-white border-0 text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Read Article Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                        <BookOpen size={16} className="mr-2" />
                        Read Article
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {formatDate(item.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {item.readTime}
                      </div>
                    </div>

                    {/* Author */}
                    <div className="text-xs text-muted-foreground mb-3">
                      By {item.author}
                    </div>

                    {/* Title */}
                    <h3 className={`font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2 ${
                      isLarge ? 'text-xl' : 'text-lg'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs bg-muted/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-primary font-semibold group-hover:text-accent transition-colors flex items-center gap-2">
                        Read Full Article
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </div>
                      
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Load More / View All */}
        {viewMode === "featured" && filteredNews.length > 6 && (
          <div className="text-center mb-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setViewMode("all")}
              className="group border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <Zap size={18} className="mr-2" />
              <span>View All {filteredNews.length} Articles</span>
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        )}

        {/* Boss Wallah Blog CTA */}
        <div className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl border border-primary/20 p-8 md:p-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Explore Boss Wallah Blog
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Discover comprehensive guides, industry insights, and actionable strategies to grow your business and master digital marketing across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <BookOpen size={20} className="mr-2" />
                Visit Boss Wallah Blog
                <ExternalLink size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Users size={20} className="mr-2" />
                Join Creator Community
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;