import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import newsExpansion from "@/assets/news-expansion.jpg";
import newsMilestone from "@/assets/news-milestone.jpg";
import newsPartnership from "@/assets/news-partnership.jpg";
import { useState } from "react";
import { Clock, Calendar, TrendingUp, Users, Globe, Award, ExternalLink, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Real news content based on Boss Wallah website
  const newsItems = [
    {
      id: 1,
      date: "2025-01-20",
      title: "Boss Wallah Launches Comprehensive Franchise Guide for Indian Entrepreneurs",
      excerpt: "New educational content helps entrepreneurs understand franchise rights, requirements, and profitable opportunities in India's growing franchise market.",
      category: "Business Growth",
      type: "major",
      thumbnail: newsExpansion,
      readTime: "3 min read",
      isRecent: true
    },
    {
      id: 2,
      date: "2025-01-18",
      title: "Most Profitable Food Franchise Opportunities Revealed for 2025",
      excerpt: "Comprehensive analysis of top-performing food franchise brands, ROI calculations, and strategic insights for franchise selection in Indian markets.",
      category: "Market Analysis",
      type: "featured",
      thumbnail: newsMilestone,
      readTime: "5 min read",
      isRecent: true
    },
    {
      id: 3,
      date: "2025-01-16",
      title: "Starbucks Franchise Guide: Complete Cost and Profit Analysis",
      excerpt: "Detailed breakdown of Starbucks franchise requirements, investment costs, and profitability projections for Indian entrepreneurs.",
      category: "Franchise",
      type: "standard",
      thumbnail: newsPartnership,
      readTime: "4 min read",
      isRecent: true
    },
    {
      id: 4,
      date: "2024-12-15",
      title: "10 Future Business Trends Shaping India's Entrepreneurial Landscape",
      excerpt: "Boss Wallah identifies key business opportunities and growth sectors that Indian entrepreneurs can't afford to miss in 2025.",
      category: "Trends",
      type: "featured",
      thumbnail: newsExpansion,
      readTime: "6 min read",
      isRecent: false
    },
    {
      id: 5,
      date: "2024-11-28",
      title: "Boss Wallah Platform Reaches 2M+ Entrepreneur Community Milestone",
      excerpt: "Educational platform celebrates significant growth in entrepreneur education, course completions, and business success stories.",
      category: "Milestone",
      type: "major",
      thumbnail: newsMilestone,
      readTime: "2 min read",
      isRecent: false
    },
    {
      id: 6,
      date: "2024-10-20",
      title: "Digital Skills Training Expands Across Regional Languages",
      excerpt: "New courses in Telugu, Tamil, Kannada, Malayalam, Hindi, and English help entrepreneurs build digital marketing expertise.",
      category: "Education",
      type: "standard",
      thumbnail: newsPartnership,
      readTime: "3 min read",
      isRecent: false
    }
  ];

  const categories = ["All", "Business Growth", "Market Analysis", "Franchise", "Trends", "Milestone", "Education"];

  const filteredNews = activeFilter === "All" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Business Growth": return TrendingUp;
      case "Market Analysis": return Globe;
      case "Franchise": return Users;
      case "Trends": return TrendingUp;
      case "Milestone": return Award;
      case "Education": return Users;
      default: return Calendar;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Business Growth": return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "Market Analysis": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "Franchise": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "Trends": return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      case "Milestone": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Education": return "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section id="news" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Latest <span className="gradient-text">News & Updates</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about Boss Wallah's latest developments, business insights, and entrepreneurship trends
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'hover:bg-primary/10 hover:border-primary/30'
                }`}
              >
                <IconComponent size={16} />
                {category}
              </Button>
            );
          })}
        </div>

        {/* News Grid - Modern Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredNews.map((item, index) => {
            const IconComponent = getCategoryIcon(item.category);
            const isLarge = item.type === "major" || item.type === "featured";
            
            return (
              <Card
                key={item.id}
                className={`group cursor-pointer overflow-hidden border-0 shadow-soft hover:shadow-brand transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm ${
                  isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                } ${item.type === "featured" ? 'ring-2 ring-primary/20' : ''}`}
              >
                <div className="relative overflow-hidden">
                  {/* Thumbnail */}
                  <div className={`relative overflow-hidden ${isLarge ? 'h-64' : 'h-48'}`}>
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`flex items-center gap-1.5 ${getCategoryColor(item.category)} border-0`}>
                        <IconComponent size={12} />
                        {item.category}
                      </Badge>
                    </div>

                    {/* Recent Badge */}
                    {item.isRecent && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-red-500/90 text-white border-0 animate-pulse">
                          New
                        </Badge>
                      </div>
                    )}

                    {/* Read More Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                        <ExternalLink size={16} className="mr-2" />
                        Read Article
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {new Date(item.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {item.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2 ${
                      isLarge ? 'text-xl' : 'text-lg'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                      {item.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-primary font-semibold group-hover:text-accent transition-colors flex items-center gap-2">
                        Read More
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </div>
                      
                      {item.type === "featured" && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <span>View All News & Updates</span>
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Newsletter Signup CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl border border-primary/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Stay Updated with Boss Wallah
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest business insights, franchise opportunities, and entrepreneurship tips delivered to your inbox.
            </p>
            <Button size="lg" className="group">
              Subscribe to Newsletter
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;