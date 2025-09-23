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
      const realNews: NewsItem[] = [
        // Latest blog posts from Boss Wallah's official website
        {
          id: 1,
          date: new Date(Date.now() - 900000).toISOString().split('T')[0], // 15 hours ago
          title: "30 Best Retail Franchises Options in India – Cost, Investment & Profit",
          excerpt: "Discover the top retail franchise opportunities in India with detailed investment analysis and profit potential for aspiring entrepreneurs.",
          content: "This comprehensive guide explores 30 of the best retail franchise options available in 2025, covering various categories from fashion and electronics to health and beauty. Each franchise option includes detailed information about investment requirements, profit margins, support systems, and growth potential. The retail sector in India is experiencing unprecedented growth, driven by increasing consumer spending and changing lifestyle preferences.",
          category: "Business",
          thumbnail: "/src/assets/news-thumb-1.jpg",
          readTime: "12 min read",
          author: "Boss Wallah Business",
          tags: ["Retail", "Franchise", "Investment"],
          url: "https://blog.bosswallah.com/30-best-retail-franchises-options-in-india-cost-investment-profit/"
        },
        {
          id: 2,
          date: new Date(Date.now() - 900000).toISOString().split('T')[0], // 15 hours ago
          title: "All 40 Food & Beverage (F&B) Franchises in India 2025: Investment, Cost & Profit",
          excerpt: "Complete guide to food and beverage franchise opportunities in India with investment details and profitability analysis.",
          content: "The food and beverage industry in India is booming, offering numerous franchise opportunities for entrepreneurs. This comprehensive guide covers 40 top F&B franchises available in 2025, including quick service restaurants, cafes, beverage brands, and specialty food concepts. Each franchise is analyzed for investment requirements, expected returns, brand support, and market potential.",
          category: "Business",
          thumbnail: "/src/assets/news-thumb-2.jpg",
          readTime: "15 min read",
          author: "Boss Wallah Business",
          tags: ["Food", "Franchise", "Investment"],
          url: "https://blog.bosswallah.com/all-40-food-beverage-fb-franchises-in-india-2025-investment-cost-profit/"
        },
        {
          id: 3,
          date: new Date(Date.now() - 1080000).toISOString().split('T')[0], // 18 hours ago
          title: "Franchisee Rights in India: What Every Entrepreneur Must Know in 2025",
          excerpt: "Essential guide to understanding franchisee rights and legal protections for entrepreneurs entering the franchise business.",
          content: "Understanding franchisee rights is crucial for anyone considering a franchise investment in India. This comprehensive guide covers all legal aspects, rights, and protections available to franchisees under Indian law. Topics include franchise agreements, territorial rights, support obligations, termination clauses, and dispute resolution mechanisms.",
          category: "Business",
          thumbnail: "/src/assets/news-thumb-3.jpg",
          readTime: "10 min read",
          author: "Boss Wallah Business",
          tags: ["Legal", "Franchise", "Rights"],
          url: "https://blog.bosswallah.com/franchisee-rights-in-india-what-every-entrepreneur-must-know-in-2025/"
        },
        {
          id: 4,
          date: new Date(Date.now() - 7776000000).toISOString().split('T')[0], // 3 months ago
          title: "YouTube Update 2025 Explained: New Policies, Features & Monetization Changes",
          excerpt: "YouTube's biggest update ever introduces new policies, powerful AI tools, advanced features, and crucial monetization changes for creators.",
          content: "YouTube has announced its biggest update ever — the YouTube Update 2025. This major update introduces new policies, powerful AI tools for YouTube, advanced features, and crucial monetisation changes that will directly impact creators and brands worldwide. Whether you're a full-time YouTuber, a small business using YouTube for marketing, or just someone interested in the future of digital content, this update will change how you create, consume, and earn from YouTube.",
          category: "Creator Hub",
          thumbnail: "/src/assets/news-thumb-4.jpg",
          readTime: "8 min read",
          author: "Bhoomireddy Hemalatha",
          tags: ["YouTube", "Update", "Monetization"],
          url: "https://blog.bosswallah.com/youtube-update-2025/"
        },
        {
          id: 5,
          date: new Date(Date.now() - 1814400000).toISOString().split('T')[0], // 3 weeks ago
          title: "YouTube Shorts Monetization 2025: New Updates, Revenue Share & Best Practices",
          excerpt: "Everything you need to know about earning money from YouTube Shorts, including new revenue sharing updates and optimization strategies.",
          content: "YouTube Shorts has become a major revenue driver for creators worldwide. This comprehensive guide covers all monetization options available in 2025: YouTube Partner Program requirements, new revenue sharing models, brand sponsorship opportunities, and best practices for maximizing earnings. Learn advanced strategies used by top creators to earn significant income from short-form content.",
          category: "Creator Hub",
          thumbnail: "/src/assets/news-thumb-5.jpg",
          readTime: "12 min read",
          author: "Bhoomireddy Hemalatha",
          tags: ["YouTube", "Shorts", "Monetization"],
          url: "https://blog.bosswallah.com/youtube-shorts-monetization-2025-new-updates-revenue-share-best-practices/"
        },
        {
          id: 6,
          date: new Date(Date.now() - 7776000000).toISOString().split('T')[0], // 3 months ago
          title: "Is Instagram Adding Profile Views in 2025? (New Update Explained)",
          excerpt: "Comprehensive analysis of Instagram's rumored profile view feature and what it means for creators and businesses.",
          content: "Instagram is constantly evolving to enhance user experience and provide better insights for creators and businesses. Recent rumors suggest that Instagram might be adding a profile views feature in 2025, similar to what we see on other social media platforms. This article explores the implications of this potential feature, how it might work, and what it could mean for content creators, influencers, and businesses using Instagram for marketing.",
          category: "Digital Skills",
          thumbnail: "/src/assets/news-thumb-6.jpg",
          readTime: "6 min read",
          author: "Boss Wallah Blogs",
          tags: ["Instagram", "Profile Views", "Social Media"],
          url: "https://blog.bosswallah.com/is-instagram-adding-profile-views/"
        }
      ];

      // Generate dynamic thumbnails for the news
      const newsWithDynamicThumbnails = await ThumbnailService.generateAllThumbnails(realNews);
      return newsWithDynamicThumbnails;
    } catch (error) {
      console.error('Error fetching Boss Wallah news:', error);
      return this.fallbackNews;
    }
  }
}