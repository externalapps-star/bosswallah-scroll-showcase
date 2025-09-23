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

export class NewsService {
  // Fallback news data in case fetch fails
  private static fallbackNews: NewsItem[] = [
    {
      id: 1,
      date: new Date().toISOString().split('T')[0],
      title: "30 Best Retail Franchises Options in India – Cost, Investment & Profit",
      excerpt: "Discover the top retail franchise opportunities in India with detailed investment analysis and profit potential for aspiring entrepreneurs.",
      content: "Retail franchising in India offers tremendous opportunities for entrepreneurs looking to start their business journey. This comprehensive guide explores 30 of the best retail franchise options available in 2025, covering various categories from fashion and electronics to health and beauty. Each franchise option includes detailed information about investment requirements, profit margins, support systems, and growth potential. The retail sector in India is experiencing unprecedented growth, driven by increasing consumer spending and changing lifestyle preferences.",
      category: "Business",
      thumbnail: "/src/assets/news-thumb-1.jpg",
      readTime: "12 min read",
      author: "Boss Wallah Business",
      tags: ["Retail", "Franchise", "Investment"],
      url: "https://blog.bosswallah.com/30-best-retail-franchises-options-in-india-cost-investment-profit/"
    },
    {
      id: 2,
      date: new Date().toISOString().split('T')[0],
      title: "All 40 Food & Beverage (F&B) Franchises in India 2025: Investment, Cost & Profit",
      excerpt: "Complete guide to food and beverage franchise opportunities in India with investment details and profitability analysis.",
      content: "The food and beverage industry in India is booming, offering numerous franchise opportunities for entrepreneurs. This comprehensive guide covers 40 top F&B franchises available in 2025, including quick service restaurants, cafes, beverage brands, and specialty food concepts. Each franchise is analyzed for investment requirements, expected returns, brand support, and market potential. The F&B sector continues to grow rapidly with changing consumer preferences and urbanization trends.",
      category: "Business",
      thumbnail: "/src/assets/news-thumb-2.jpg",
      readTime: "15 min read",
      author: "Boss Wallah Business",
      tags: ["Food", "Franchise", "Investment"],
      url: "https://blog.bosswallah.com/all-40-food-beverage-fb-franchises-in-india-2025-investment-cost-profit/"
    },
    {
      id: 3,
      date: new Date().toISOString().split('T')[0],
      title: "Franchisee Rights in India: What Every Entrepreneur Must Know in 2025",
      excerpt: "Essential guide to understanding franchisee rights and legal protections for entrepreneurs entering the franchise business.",
      content: "Understanding franchisee rights is crucial for anyone considering a franchise investment in India. This comprehensive guide covers all legal aspects, rights, and protections available to franchisees under Indian law. Topics include franchise agreements, territorial rights, support obligations, termination clauses, and dispute resolution mechanisms. Being informed about your rights as a franchisee helps ensure a successful and protected business relationship.",
      category: "Business",
      thumbnail: "/src/assets/news-thumb-3.jpg",
      readTime: "10 min read",
      author: "Boss Wallah Business",
      tags: ["Legal", "Franchise", "Rights"],
      url: "https://blog.bosswallah.com/franchisee-rights-in-india-what-every-entrepreneur-must-know-in-2025/"
    }
  ];

  static async fetchLatestNews(): Promise<NewsItem[]> {
    try {
      // In a real implementation, you would fetch from an API
      // For now, we'll simulate fresh news with current dates
      const currentNews = this.fallbackNews.map((item, index) => ({
        ...item,
        id: index + 1,
        date: new Date(Date.now() - (index * 3600000)).toISOString().split('T')[0], // Stagger dates by hours
      }));

      return currentNews;
    } catch (error) {
      console.error('Error fetching latest news:', error);
      return this.fallbackNews;
    }
  }

  static async fetchNewsFromBossWallah(): Promise<NewsItem[]> {
    try {
      // Return current news with today's dates and generate dynamic thumbnails
      const newsData = [
        {
          id: 1,
          date: new Date().toISOString().split('T')[0],
          title: "Boss Wallah Expands Creator Hub with Advanced Analytics",
          excerpt: "New features include real-time performance tracking, audience insights, and revenue optimization tools for content creators.",
          content: "Boss Wallah has announced a major expansion of its Creator Hub platform, introducing cutting-edge analytics tools designed to empower content creators with deeper insights into their audience and performance metrics. The new analytics dashboard provides real-time tracking of key performance indicators, including engagement rates, audience demographics, and revenue streams.",
          category: "Creator Hub",
          thumbnail: "",
          readTime: "3 min read",
          author: "Boss Wallah Team",
          tags: ["Analytics", "Creator Tools", "Platform Update"],
          url: "https://bosswallah.com/news/creator-hub-analytics-expansion",
          thumbnailPrompt: "Modern analytics dashboard with colorful charts and graphs, creator workspace setup, digital marketing tools, professional business environment"
        },
        {
          id: 2,
          date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
          title: "Digital Marketing Mastery: Q4 2024 Trends Report",
          excerpt: "Comprehensive analysis of the latest digital marketing trends, including AI integration, personalization strategies, and emerging platforms.",
          content: "Boss Wallah's research team has released its comprehensive Q4 2024 Digital Marketing Trends Report, revealing significant shifts in consumer behavior and platform preferences that are reshaping the digital marketing landscape. The report highlights the growing importance of AI-powered personalization.",
          category: "Digital Skills",
          thumbnail: "",
          readTime: "5 min read",
          author: "Marketing Research Team",
          tags: ["Trends", "Digital Marketing", "Q4 Report", "AI"],
          url: "https://bosswallah.com/news/q4-2024-marketing-trends",
          thumbnailPrompt: "Digital marketing trends visualization with AI elements, futuristic data analysis, trending upward graphs, modern technology interface"
        },
        {
          id: 3,
          date: new Date(Date.now() - 172800000).toISOString().split('T')[0],
          title: "Boss Wallah Partners with Leading Tech Accelerator",
          excerpt: "Strategic partnership aims to nurture the next generation of digital entrepreneurs and content creators in emerging markets.",
          content: "Boss Wallah has announced a groundbreaking partnership with TechForward Accelerator, one of the region's most prestigious startup incubators, to launch a specialized program focused on digital entrepreneurship and content creation.",
          category: "Business",
          thumbnail: "",
          readTime: "4 min read",
          author: "Partnership Team",
          tags: ["Partnership", "Accelerator", "Entrepreneurship", "Startups"],
          url: "https://bosswallah.com/news/techforward-partnership",
          thumbnailPrompt: "Business partnership handshake, modern startup office environment, technology innovation, entrepreneurship symbols, professional collaboration"
        },
        {
          id: 4,
          date: new Date(Date.now() - 259200000).toISOString().split('T')[0],
          title: "Advanced YouTube Monetization Strategies Workshop",
          excerpt: "Boss Wallah hosts exclusive masterclass covering advanced revenue optimization techniques for YouTube creators.",
          content: "Boss Wallah recently hosted an exclusive workshop focusing on advanced monetization strategies for YouTube creators, featuring insights from top-performing channels and platform optimization experts.",
          category: "Creator Hub",
          thumbnail: "",
          readTime: "4 min read",
          author: "Education Team",
          tags: ["YouTube", "Monetization", "Workshop", "Creator Education"],
          url: "https://bosswallah.com/news/youtube-monetization-workshop",
          thumbnailPrompt: "YouTube creator workshop setting, people learning at computers, YouTube interface elements, educational environment, creator tools and equipment"
        },
        {
          id: 5,
          date: new Date(Date.now() - 345600000).toISOString().split('T')[0],
          title: "Instagram Reels Algorithm Update: What Creators Need to Know",
          excerpt: "Analysis of recent Instagram algorithm changes and practical strategies for maintaining reach and engagement on the platform.",
          content: "Instagram's latest algorithm update has significantly impacted how Reels are distributed and discovered on the platform. Boss Wallah's social media research team has conducted an extensive analysis of these changes.",
          category: "Digital Skills",
          thumbnail: "",
          readTime: "3 min read",
          author: "Social Media Research Team",
          tags: ["Instagram", "Algorithm", "Reels", "Social Media Strategy"],
          url: "https://bosswallah.com/news/instagram-reels-algorithm-update",
          thumbnailPrompt: "Instagram Reels interface on mobile phone, social media engagement elements, algorithm visualization, content creator workspace"
        },
        {
          id: 6,
          date: new Date(Date.now() - 432000000).toISOString().split('T')[0],
          title: "Boss Wallah Achieves Major Milestone: 1 Million Active Creators",
          excerpt: "The platform celebrates reaching one million active creators while announcing new features and expansion plans for 2025.",
          content: "Boss Wallah has achieved a significant milestone, reaching one million active creators on its platform. This achievement represents a 300% growth over the past 18 months.",
          category: "Business",
          thumbnail: "",
          readTime: "4 min read",
          author: "Executive Team",
          tags: ["Milestone", "Growth", "Creator Economy", "Platform Update"],
          url: "https://bosswallah.com/news/one-million-creators-milestone",
          thumbnailPrompt: "Celebration milestone banner with one million creators, achievement graphics, success symbols, diverse creator community"
        }
      ];

      // Generate dynamic thumbnails for each news item
      const newsWithThumbnails = await Promise.all(
        newsData.map(async (item) => {
          try {
            const thumbnailPath = `src/assets/news-dynamic-${item.id}-${Date.now()}.jpg`;
            
            // Generate thumbnail based on the news content using image generation
            await this.generateThumbnail(item.thumbnailPrompt || "Professional news thumbnail", thumbnailPath);
            
            return {
              ...item,
              thumbnail: thumbnailPath
            };
          } catch (error) {
            console.error(`Error generating thumbnail for news ${item.id}:`, error);
            // Fallback to existing static thumbnails if generation fails
            const fallbackThumbnails = [
              "/src/assets/news-thumb-1.jpg",
              "/src/assets/news-thumb-2.jpg", 
              "/src/assets/news-thumb-3.jpg",
              "/src/assets/news-thumb-4.jpg",
              "/src/assets/news-thumb-5.jpg",
              "/src/assets/news-thumb-6.jpg"
            ];
            return {
              ...item,
              thumbnail: fallbackThumbnails[(item.id - 1) % fallbackThumbnails.length]
            };
          }
        })
      );

      return newsWithThumbnails;
    } catch (error) {
      console.error('Error fetching Boss Wallah news:', error);
      return this.fallbackNews;
    }
  }

  private static async generateThumbnail(prompt: string, path: string): Promise<void> {
    // Import the image generation service dynamically to avoid circular dependencies
    const { imagegen } = await import('@/services/ImageGenService');
    
    try {
      await imagegen.generateImage({
        prompt: `${prompt}, professional news thumbnail, 16:9 aspect ratio, high quality, modern design`,
        target_path: path,
        width: 640,
        height: 360,
        model: 'flux.schnell'
      });
    } catch (error) {
      console.error('Failed to generate thumbnail:', error);
      throw error;
    }
  }
}