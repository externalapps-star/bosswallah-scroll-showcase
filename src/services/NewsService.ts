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
      // This would be implemented to scrape or use an API from Boss Wallah
      // For now, return the current news structure with today's dates
      const latestNews: NewsItem[] = [
        {
          id: 1,
          date: new Date().toISOString().split('T')[0],
          title: "30 Best Retail Franchises Options in India – Cost, Investment & Profit",
          excerpt: "Discover the top retail franchise opportunities in India with detailed investment analysis and profit potential for aspiring entrepreneurs.",
          content: "Retail franchising in India offers tremendous opportunities for entrepreneurs looking to start their business journey. This comprehensive guide explores 30 of the best retail franchise options available in 2025, covering various categories from fashion and electronics to health and beauty. Each franchise option includes detailed information about investment requirements, profit margins, support systems, and growth potential. The retail sector in India is experiencing unprecedented growth, driven by increasing consumer spending and changing lifestyle preferences. From established international brands to emerging local concepts, there's a franchise opportunity for every budget and interest. Key factors to consider include initial investment, ongoing fees, territory rights, training programs, and marketing support.",
          category: "Business",
          thumbnail: "/src/assets/news-thumb-1.jpg",
          readTime: "12 min read",
          author: "Boss Wallah Business",
          tags: ["Retail", "Franchise", "Investment"],
          url: "https://blog.bosswallah.com/30-best-retail-franchises-options-in-india-cost-investment-profit/"
        },
        {
          id: 2,
          date: new Date(Date.now() - 3600000).toISOString().split('T')[0],
          title: "All 40 Food & Beverage (F&B) Franchises in India 2025: Investment, Cost & Profit",
          excerpt: "Complete guide to food and beverage franchise opportunities in India with investment details and profitability analysis.",
          content: "The food and beverage industry in India is booming, offering numerous franchise opportunities for entrepreneurs. This comprehensive guide covers 40 top F&B franchises available in 2025, including quick service restaurants, cafes, beverage brands, and specialty food concepts. Each franchise is analyzed for investment requirements, expected returns, brand support, and market potential. The F&B sector continues to grow rapidly with changing consumer preferences and urbanization trends. From international chains to local favorites, opportunities range from low-investment kiosks to full-service restaurants. Success factors include location selection, operational efficiency, quality control, and customer service excellence.",
          category: "Business",
          thumbnail: "/src/assets/news-thumb-2.jpg",
          readTime: "15 min read",
          author: "Boss Wallah Business",
          tags: ["Food", "Franchise", "Investment"],
          url: "https://blog.bosswallah.com/all-40-food-beverage-fb-franchises-in-india-2025-investment-cost-profit/"
        },
        {
          id: 3,
          date: new Date(Date.now() - 7200000).toISOString().split('T')[0],
          title: "Franchisee Rights in India: What Every Entrepreneur Must Know in 2025",
          excerpt: "Essential guide to understanding franchisee rights and legal protections for entrepreneurs entering the franchise business.",
          content: "Understanding franchisee rights is crucial for anyone considering a franchise investment in India. This comprehensive guide covers all legal aspects, rights, and protections available to franchisees under Indian law. Topics include franchise agreements, territorial rights, support obligations, termination clauses, and dispute resolution mechanisms. Being informed about your rights as a franchisee helps ensure a successful and protected business relationship. Key areas covered include intellectual property usage, operational guidelines, fee structures, territory protection, training requirements, and exit procedures. Legal compliance and documentation are essential for protecting your investment.",
          category: "Business",
          thumbnail: "/src/assets/news-thumb-3.jpg",
          readTime: "10 min read",
          author: "Boss Wallah Business",
          tags: ["Legal", "Franchise", "Rights"],
          url: "https://blog.bosswallah.com/franchisee-rights-in-india-what-every-entrepreneur-must-know-in-2025/"
        },
        {
          id: 4,
          date: new Date(Date.now() - 10800000).toISOString().split('T')[0],
          title: "Most Profitable Food Franchise in India (2025) — Top Brands, ROI & How to Choose",
          excerpt: "Analyze the most profitable food franchise opportunities in India with detailed ROI calculations and selection criteria.",
          content: "Choosing the right food franchise can be the difference between success and failure in the competitive F&B industry. This guide analyzes the most profitable food franchise opportunities in India for 2025, providing detailed ROI calculations, investment breakdowns, and selection criteria. We examine established brands across various categories including pizza, burgers, Indian cuisine, beverages, and desserts. Factors affecting profitability include location dynamics, operational costs, brand recognition, customer loyalty, and scalability potential. The analysis includes case studies of successful franchisees and common pitfalls to avoid when making your selection.",
          category: "Business",
          thumbnail: "/src/assets/news-thumb-4.jpg",
          readTime: "14 min read",
          author: "Boss Wallah Business",
          tags: ["Food", "Franchise", "ROI"],
          url: "https://blog.bosswallah.com/most-profitable-food-franchise-in-india-2025-top-brands-roi-how-to-choose/"
        },
        {
          id: 5,
          date: new Date(Date.now() - 14400000).toISOString().split('T')[0],
          title: "Starbucks Franchise in India (2025): Cost, Requirements & Profit Guide",
          excerpt: "Complete guide to Starbucks franchise opportunities in India including investment requirements and profit potential.",
          content: "Starbucks remains one of the most sought-after coffee franchise opportunities globally, and India presents significant growth potential. This comprehensive guide covers everything you need to know about Starbucks franchise opportunities in India for 2025. We detail the investment requirements, application process, operational standards, training programs, and profit projections. The guide also covers territory availability, site selection criteria, design specifications, and ongoing support systems. Understanding Starbucks' business model and operational excellence standards is crucial for potential franchisees looking to join this premium coffee brand.",
          category: "Business",
          thumbnail: "/src/assets/news-thumb-5.jpg",
          readTime: "11 min read",
          author: "Boss Wallah Business",
          tags: ["Starbucks", "Coffee", "Franchise"],
          url: "https://blog.bosswallah.com/starbucks-franchise-in-india-2025-cost-requirements-profit-guide/"
        },
        {
          id: 6,
          date: new Date(Date.now() - 18000000).toISOString().split('T')[0],
          title: "How to Get a Franchise in India – A Beginner's Stepwise Checklist",
          excerpt: "Step-by-step guide for beginners to successfully acquire a franchise in India with practical tips and checklist.",
          content: "Starting a franchise business in India can be an excellent entry point into entrepreneurship, but it requires careful planning and execution. This beginner's guide provides a comprehensive stepwise checklist for acquiring a franchise successfully. We cover market research, financial planning, franchise selection criteria, due diligence processes, legal documentation, and launch preparation. The guide includes practical tips for evaluating franchise opportunities, negotiating terms, securing financing, and avoiding common mistakes. Understanding the franchise ecosystem, from initial inquiry to successful operation, is essential for making informed decisions and achieving long-term success.",
          category: "Business",
          thumbnail: "/src/assets/news-thumb-6.jpg",
          readTime: "13 min read",
          author: "Boss Wallah Business",
          tags: ["Franchise", "Guide", "Beginners"],
          url: "https://blog.bosswallah.com/how-to-get-a-franchise-in-india-a-beginners-stepwise-checklist/"
        }
      ];

      return latestNews;
    } catch (error) {
      console.error('Error fetching Boss Wallah news:', error);
      return this.fallbackNews;
    }
  }
}