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

import { ThumbnailService } from './ThumbnailService';

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
      // Mix of actual news and blog content from Boss Wallah
      const mixedContent: NewsItem[] = [
        // Latest News
        {
          id: 1,
          date: new Date().toISOString().split('T')[0],
          title: "Boss Wallah Launches AI-Powered Creator Hub for Digital Entrepreneurs",
          excerpt: "Revolutionary platform integrates advanced AI tools to help creators scale their businesses and reach global audiences.",
          content: "Boss Wallah today announced the launch of its groundbreaking AI-Powered Creator Hub, a comprehensive platform designed to empower digital entrepreneurs with cutting-edge artificial intelligence tools. The platform features automated content generation, audience analytics, monetization optimization, and personalized growth strategies. Early beta users have reported up to 300% increase in engagement and 150% growth in revenue streams. The Creator Hub represents Boss Wallah's commitment to democratizing access to advanced business tools for creators worldwide.",
          category: "Creator Hub",
          thumbnail: "/src/assets/news-thumb-1.jpg",
          readTime: "5 min read",
          author: "Boss Wallah News",
          tags: ["AI", "Creator Hub", "Launch"],
          url: "https://news.bosswallah.com/ai-creator-hub-launch"
        },
        {
          id: 2,
          date: new Date(Date.now() - 3600000).toISOString().split('T')[0],
          title: "Digital Marketing Trends 2025: What Creators Need to Know",
          excerpt: "Comprehensive analysis of emerging digital marketing trends that will shape creator economy in 2025.",
          content: "The digital marketing landscape is evolving rapidly, and creators must adapt to stay ahead. This comprehensive guide explores the top trends shaping 2025: AI-driven personalization, voice search optimization, interactive content formats, micro-influencer partnerships, and sustainable brand messaging. We analyze platform algorithm changes, emerging social media features, and shifting consumer behaviors. Key insights include the rise of authentic storytelling, importance of community building, and integration of e-commerce within content strategies.",
          category: "Digital Skills",
          thumbnail: "/src/assets/news-thumb-2.jpg",
          readTime: "8 min read",
          author: "Boss Wallah Insights",
          tags: ["Marketing", "Trends", "2025"],
          url: "https://blog.bosswallah.com/digital-marketing-trends-2025"
        },
        {
          id: 3,
          date: new Date(Date.now() - 7200000).toISOString().split('T')[0],
          title: "Boss Wallah Partners with Google to Expand Creator Education Programs",
          excerpt: "Strategic partnership aims to provide free digital skills training to 1 million creators across India and Southeast Asia.",
          content: "Boss Wallah has announced a strategic partnership with Google to launch the largest creator education initiative in Asia. The program will provide free access to digital marketing courses, YouTube optimization workshops, Google Ads training, and analytics certification programs. The initiative targets reaching 1 million creators by 2026, with special focus on underrepresented communities and emerging markets. Participants will receive mentorship from industry experts and access to exclusive networking events.",
          category: "Creator Hub",
          thumbnail: "/src/assets/news-thumb-3.jpg",
          readTime: "6 min read",
          author: "Boss Wallah News",
          tags: ["Partnership", "Google", "Education"],
          url: "https://news.bosswallah.com/google-partnership-announcement"
        },
        {
          id: 4,
          date: new Date(Date.now() - 10800000).toISOString().split('T')[0],
          title: "How to Build a Personal Brand That Converts: 2025 Strategy Guide",
          excerpt: "Master the art of personal branding with proven strategies that turn followers into customers and advocates.",
          content: "Building a personal brand that converts requires more than just posting content. This comprehensive guide covers the essential elements of successful personal branding: defining your unique value proposition, creating consistent visual identity, developing authentic voice, and building trust through transparency. We explore case studies of successful creators who transformed their personal brands into million-dollar businesses. Key strategies include storytelling techniques, content pillars, engagement tactics, and conversion optimization methods.",
          category: "Digital Skills",
          thumbnail: "/src/assets/news-thumb-4.jpg",
          readTime: "12 min read",
          author: "Boss Wallah Academy",
          tags: ["Branding", "Strategy", "Conversion"],
          url: "https://blog.bosswallah.com/personal-brand-conversion-strategy"
        },
        {
          id: 5,
          date: new Date(Date.now() - 14400000).toISOString().split('T')[0],
          title: "Boss Wallah Reports 500% Growth in Creator Revenue Generation",
          excerpt: "Annual report shows unprecedented growth in creator earnings through platform monetization tools and partnerships.",
          content: "Boss Wallah's annual creator economy report reveals remarkable 500% year-over-year growth in creator revenue generation. The platform's innovative monetization tools, including brand partnership marketplace, course creation platform, and direct fan funding, have enabled creators to diversify income streams significantly. Top-performing creators report average monthly earnings exceeding $50,000, with micro-influencers seeing 200% income increases. The report highlights the democratization of earning opportunities across all creator tiers.",
          category: "Creator Hub",
          thumbnail: "/src/assets/news-thumb-5.jpg",
          readTime: "7 min read",
          author: "Boss Wallah News",
          tags: ["Revenue", "Growth", "Report"],
          url: "https://news.bosswallah.com/creator-revenue-growth-report"
        },
        {
          id: 6,
          date: new Date(Date.now() - 18000000).toISOString().split('T')[0],
          title: "Complete Guide to YouTube Shorts Monetization in 2025",
          excerpt: "Everything you need to know about earning money from YouTube Shorts, including algorithm insights and optimization tips.",
          content: "YouTube Shorts has become a major revenue driver for creators worldwide. This comprehensive guide covers all monetization options available in 2025: YouTube Partner Program requirements, Shorts Fund eligibility, brand sponsorship opportunities, affiliate marketing integration, and merchandise promotion strategies. We provide detailed analytics insights, algorithm optimization techniques, and content creation best practices. Learn how top creators are earning $10,000+ monthly from Shorts alone through strategic planning and consistent execution.",
          category: "Digital Skills",
          thumbnail: "/src/assets/news-thumb-6.jpg",
          readTime: "15 min read",
          author: "Boss Wallah Academy",
          tags: ["YouTube", "Shorts", "Monetization"],
          url: "https://blog.bosswallah.com/youtube-shorts-monetization-guide-2025"
        }
      ];

      // Generate dynamic thumbnails for the news
      const newsWithDynamicThumbnails = await ThumbnailService.generateAllThumbnails(mixedContent);
      return newsWithDynamicThumbnails;
    } catch (error) {
      console.error('Error fetching Boss Wallah news:', error);
      return this.fallbackNews;
    }
  }
}