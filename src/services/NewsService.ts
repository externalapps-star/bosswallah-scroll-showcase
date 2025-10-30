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
          date: "2025-10-30",
          title: "Trust + Compliance: The UGC Video Formula Fintech Marketers in India Are Missing",
          excerpt: "If there's one thing Indian consumers love more than cashback, it's trust. Discover how authentic UGC videos can build both trust and compliance together for fintech brands.",
          content: "That's where UGC, or User-Generated Content, comes in. Think of it as word-of-mouth marketing in the digital age: real users, real experiences, and real emotions on video. But while many fintech marketers in India are chasing influencers or polishing compliance decks, they are missing the one formula that can actually build both trust and compliance together: authentic UGC videos. Let's decode why this formula is so powerful and why fintech brands can't afford to ignore it anymore.",
          category: "Video & UGC Production",
          thumbnail: "blog-ugc-video-formula-new.png",
          readTime: "8 min read",
          author: "Boss Wallah Blogs",
          tags: ["fintech", "ugc", "video marketing"],
          url: "https://bosswallah.com/blog/video-ugc-production/trust-compliance-the-ugc-video-formula-fintech-marketers-in-india-are-missing/"
        },
        {
          id: 2,
          date: "2025-10-29",
          title: "The Secret Weapon Behind Explosive FMCG Brand Growth: Product Video Shoots",
          excerpt: "If there is one sector that never sleeps, it is the FMCG industry. Discover how product video shoots have become the hidden weapon behind explosive FMCG brand growth.",
          content: "From the toothpaste you use in the morning to the snack you munch on at midnight, Fast-Moving Consumer Goods (FMCG) are an inseparable part of our daily lives. The market is fast, competitive, and brutally unforgiving. Hundreds of brands are fighting for the same few seconds of your attention on a supermarket shelf or a social media feed. Welcome to the era where product video shoots have become the hidden weapon behind explosive FMCG brand growth.",
          category: "Video & UGC Production", 
          thumbnail: "blog-fmcg-brand-new.png",
          readTime: "7 min read",
          author: "Boss Wallah Blogs",
          tags: ["fmcg", "product videos", "brand growth"],
          url: "https://bosswallah.com/blog/video-ugc-production/the-secret-weapon-behind-explosive-fmcg-brand-growth-product-video-shoots/"
        },
        {
          id: 3,
          date: "2025-10-29",
          title: "Beyond Doctors & Data: The Rise of Patient-Driven UGC Videos in Indian Healthcare Marketing",
          excerpt: "Healthcare ads in India used to look the same. But something has changed. Hospitals have realised that the best storytellers are the patients themselves.",
          content: "Welcome to the new era of healthcare marketing, powered by patient-driven UGC (User-Generated Content) videos, where real stories beat scripted lines, and authenticity becomes the new advertisement. For years, Indian healthcare marketing revolved around authority, expert opinions, medical data, and certifications. Today, the internet has flipped that equation. Patients want more than qualifications. They want a connection.",
          category: "Video & UGC Production",
          thumbnail: "blog-healthcare-marketing-new.jpg",
          readTime: "9 min read", 
          author: "Boss Wallah Blogs",
          tags: ["healthcare", "ugc", "marketing"],
          url: "https://bosswallah.com/blog/video-ugc-production/beyond-doctors-data-the-rise-of-patient-driven-ugc-videos-in-indian-healthcare-marketing/"
        },
        {
          id: 4,
          date: "2025-10-29",
          title: "5 Ways Indian Brands Are Scaling YouTube Collaborations for Long-Term Growth",
          excerpt: "If there's one place where Indian brands are thriving right now, it's YouTube. Discover the five clever ways successful brands are scaling YouTube collaborations for sustainable growth.",
          content: "Whether it's a tech brand explaining product features through reviews or a D2C skincare label partnering with creators, YouTube collaborations are now central to every smart marketing strategy. But the most successful brands aren't chasing quick wins. They're focusing on long-term growth through consistent, thoughtful, and authentic collaborations. Let's explore the five clever ways they're doing it.",
          category: "Video & UGC Production",
          thumbnail: "blog-youtube-collaborations-new.jpg", 
          readTime: "6 min read",
          author: "Boss Wallah Blogs",
          tags: ["youtube", "collaborations", "brand growth"],
          url: "https://bosswallah.com/blog/video-ugc-production/5-ways-indian-brands-are-scaling-youtube-collaborations-for-long-term-growth/"
        },
        {
          id: 5,
          date: "2025-10-29",
          title: "How Fashion Brands in Tier-2 & Tier-3 India Are Winning Big on Social Media",
          excerpt: "A few years ago, most people believed that fashion marketing magic only happened in places like Mumbai or Delhi. But scroll through Instagram today and you'll notice something surprising.",
          content: "A small boutique from Surat, a designer from Indore, or a label from Jaipur might have more likes, comments, and loyal followers than many big-city brands. The short answer is that social media gave everyone a level playing field. The long answer is that these smaller-town brands figured out how to use it better. Let's see how they did it.",
          category: "Social Media Growth",
          thumbnail: "blog-fashion-brands-tier2-new.png",
          readTime: "8 min read",
          author: "Boss Wallah Blogs", 
          tags: ["fashion", "social media", "tier-2"],
          url: "https://bosswallah.com/blog/social-media-growth/how-fashion-brands-in-tier-2-tier-3-india-are-winning-big-on-social-media/"
        }];

      return latestNews;
    } catch (error) {
      console.error('Error fetching Boss Wallah news:', error);
      return this.fallbackNews;
    }
  }
}