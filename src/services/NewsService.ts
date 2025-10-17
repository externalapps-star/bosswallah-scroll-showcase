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
      url: "https://bosswallah.ai/blog/local-business/30-best-retail-franchises-options-in-india-cost-investment-profit/"
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
      url: "https://bosswallah.ai/blog/local-business/all-40-food-beverage-fb-franchises-in-india-2025-investment-cost-profit/"
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
      url: "https://bosswallah.ai/blog/local-business/franchisee-rights-in-india-what-every-entrepreneur-must-know-in-2025/"
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
      // Real blog posts from Boss Wallah
      const latestNews: NewsItem[] = [
        {
          id: 1,
          date: "2024-09-22",
          title: "How to grow Instagram from zero followers ( Step-by-step Guide)",
          excerpt: "A comprehensive step-by-step guide to growing your Instagram account from zero followers to thousands. Learn proven strategies, content creation tips, and engagement techniques that actually work.",
          content: "Growing Instagram from zero followers requires a strategic approach. Start by optimizing your profile with a clear profile picture, searchable username, compelling bio, and link. Define your niche and understand your audience to attract engaged followers. Post consistently with high-quality content using Reels, carousels, stories, and posts with a value-driven content mix. Engage authentically by replying to comments/DMs, interacting with your audience, and collaborating with other creators.",
          category: "Creator Hub",
          thumbnail: "blog-instagram-zero-followers.png",
          readTime: "8 min read",
          author: "Bhoomireddy Hemalatha",
          tags: ["instagram", "social media", "growth"],
          url: "https://bosswallah.com/blog/creator-hub/how-to-grow-instagram-from-zero-followers-step-by-step-guide/"
        },
        {
          id: 2,
          date: "2024-09-08",
          title: "How to Grow Your Instagram Business Account: A Proven Strategy for 2025",
          excerpt: "Transform your Instagram business account with proven strategies for 2025. Learn about business profile optimization, content formats, posting consistency, and engagement techniques to boost your brand's reach.",
          content: "Optimize your business profile with professional photo, keyword-rich bio, and clickable CTAs. Post consistently 3-5 times weekly to boost follower growth up to 2x faster. Mix content formats with Reels for reach, Carousels for engagement, Stories for interaction, and Lives for connection. Engage smartly using niche hashtags, reply to comments/DMs, and leverage user-generated content. Track performance using Instagram Insights to monitor reach, saves, shares, and engagement.",
          category: "Creator Hub", 
          thumbnail: "blog-instagram-business.png",
          readTime: "7 min read",
          author: "Bhoomireddy Hemalatha",
          tags: ["instagram", "business", "strategy"],
          url: "https://bosswallah.com/blog/creator-hub/how-to-grow-your-instagram-business-account-a-proven-strategy-for-2025/"
        },
        {
          id: 3,
          date: "2024-07-29",
          title: "Financial Planning for Beginners: A Simple Guide to Start in 2025",
          excerpt: "Master the basics of financial planning with this comprehensive beginner's guide. Learn about setting financial goals, creating budgets, building emergency funds, and making smart investment decisions for a secure financial future.",
          content: "Financial planning starts with understanding the basics, setting clear financial goals, and creating a budget that works. Learn about building emergency funds, exploring investment options like mutual funds and stocks, and establishing a strong financial foundation. The guide covers understanding the basics, setting your financial goals, creating a budget that works, building a strong financial foundation, planning for the future, and frequently asked questions.",
          category: "Finance",
          thumbnail: "blog-financial-planning.png",
          readTime: "9 min read", 
          author: "Sandesh NL",
          tags: ["finance", "planning", "investment"],
          url: "https://bosswallah.com/blog/finance/financial-planning-for-beginners/"
        },
        {
          id: 4,
          date: "2024-08-29",
          title: "How to Save Money Daily in India: Proven Techniques That Anyone Can Follow",
          excerpt: "Discover practical money-saving techniques that work in the Indian context. From daily spending habits to smart financial decisions, learn proven methods to build wealth consistently.",
          content: "Track your spending to understand where money goes - the first step to savings. Create a daily savings plan starting small (₹50-100/day) following the 50/30/20 budgeting rule. Adopt smart habits like cooking at home, using public transport, avoiding impulse buying, and shopping in bulk. Automate your savings using auto-transfers, round-up apps, and split your salary into goal-based accounts. Invest wisely by building an emergency fund, starting SIPs, and using high-interest accounts to grow wealth.",
          category: "Finance",
          thumbnail: "blog-save-money-daily.png", 
          readTime: "6 min read",
          author: "Prateek S",
          tags: ["savings", "money", "budgeting"],
          url: "https://bosswallah.com/blog/finance/how-to-save-money-daily-in-india-proven-techniques-that-anyone-can-follow/"
        },
        {
          id: 5,
          date: "2024-07-29",
          title: "Top 10 Agri Startup Ideas for Entrepreneurs in 2025",
          excerpt: "Explore profitable agriculture startup opportunities in 2025. From tech-driven solutions to modern farming business models, discover ideas with high ROI potential and scalability in India's evolving agricultural sector.",
          content: "Agriculture is evolving with tech-driven agri startups making farming smarter and more profitable. Entrepreneurs are turning traditional farming into modern agri-business models. The article explores 10 profitable and trending agri startup ideas for 2025, discussing investment, scalability, and monthly income potential for each startup. Tables and infographics are used to simplify and present data clearly.",
          category: "Local Business",
          thumbnail: "blog-agri-startups.png",
          readTime: "8 min read",
          author: "Prateek S", 
          tags: ["agriculture", "startup", "farming"],
          url: "https://bosswallah.com/blog/local-business/farming/agri-startups/"
        }];

      return latestNews;
    } catch (error) {
      console.error('Error fetching Boss Wallah news:', error);
      return this.fallbackNews;
    }
  }
}