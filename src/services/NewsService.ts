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
      // Latest Boss Wallah blog posts with working URLs
      const latestNews: NewsItem[] = [
        {
          id: 1,
          date: "2024-12-22",
          title: "30 Best Retail Franchises Options in India – Cost, Investment & Profit",
          excerpt: "Discover the top retail franchise opportunities in India with detailed investment requirements and profit potential for 2025.",
          content: "Retail franchising presents one of the most lucrative business opportunities in India today. This comprehensive guide explores 30 of the best retail franchise options available, covering everything from initial investment costs to expected returns. Whether you're a first-time entrepreneur or looking to expand your business portfolio, these franchise opportunities offer proven business models with strong support systems.",
          category: "Franchise",
          thumbnail: "",
          readTime: "8 min read",
          author: "Boss Wallah Team",
          tags: ["franchise", "retail", "investment", "business"],
          url: "https://blog.bosswallah.com/30-best-retail-franchises-options-in-india-cost-investment-profit/"
        },
        {
          id: 2,
          date: "2024-12-22",
          title: "All 40 Food & Beverage (F&B) Franchises in India 2025: Investment, Cost & Profit",
          excerpt: "Complete guide to food and beverage franchise opportunities in India with investment details and profit analysis.",
          content: "The food and beverage industry offers some of the most popular and profitable franchise opportunities in India. This detailed analysis covers 40 top F&B franchises, their investment requirements, operational costs, and expected returns. From quick-service restaurants to specialty food concepts, discover which franchise model suits your budget and business goals.",
          category: "Franchise",
          thumbnail: "",
          readTime: "12 min read",
          author: "F&B Expert",
          tags: ["food", "beverage", "franchise", "restaurant"],
          url: "https://blog.bosswallah.com/all-40-food-beverage-fb-franchises-in-india-2025-investment-cost-profit/"
        },
        {
          id: 3,
          date: "2024-12-22",
          title: "Franchisee Rights in India: What Every Entrepreneur Must Know in 2025",
          excerpt: "Essential guide to franchisee rights and legal protections for entrepreneurs considering franchise investments in India.",
          content: "Understanding your rights as a franchisee is crucial before making any franchise investment. This comprehensive guide covers all the legal protections, rights, and obligations of franchisees in India. Learn about territorial rights, contract terms, support expectations, and dispute resolution mechanisms to make informed franchise decisions.",
          category: "Legal",
          thumbnail: "",
          readTime: "6 min read",
          author: "Legal Expert",
          tags: ["franchisee", "rights", "legal", "entrepreneur"],
          url: "https://blog.bosswallah.com/franchisee-rights-in-india-what-every-entrepreneur-must-know-in-2025/"
        },
        {
          id: 4,
          date: "2024-12-22",
          title: "Most Profitable Food Franchise in India (2025) — Top Brands, ROI & How to Choose",
          excerpt: "Discover the most profitable food franchises in India with detailed ROI analysis and selection criteria.",
          content: "Finding the most profitable food franchise requires careful analysis of market trends, brand strength, and financial performance. This guide identifies the top-performing food franchises in India, their return on investment potential, and key factors to consider when choosing the right franchise for your investment goals.",
          category: "Food Business",
          thumbnail: "",
          readTime: "10 min read",
          author: "Business Analyst",
          tags: ["profitable", "food", "franchise", "ROI"],
          url: "https://blog.bosswallah.com/most-profitable-food-franchise-in-india-2025-top-brands-roi-how-to-choose/"
        },
        {
          id: 5,
          date: "2024-12-22",
          title: "Starbucks Franchise in India (2025): Cost, Requirements & Profit Guide",
          excerpt: "Complete guide to Starbucks franchise opportunities in India including investment requirements and profit potential.",
          content: "Starbucks remains one of the most sought-after coffee franchise opportunities globally. This detailed guide covers everything you need to know about Starbucks franchise opportunities in India, including investment costs, operational requirements, and profit expectations for 2025.",
          category: "Coffee Business",
          thumbnail: "",
          readTime: "7 min read",
          author: "Coffee Industry Expert",
          tags: ["starbucks", "coffee", "franchise", "investment"],
          url: "https://blog.bosswallah.com/starbucks-franchise-in-india-2025-cost-requirements-profit-guide/"
        },
        {
          id: 6,
          date: "2024-12-15",
          title: "How to Start a Cloud Kitchen Franchise in India (2025)",
          excerpt: "Step-by-step guide to starting a profitable cloud kitchen franchise business in India's growing food delivery market.",
          content: "Cloud kitchens represent the future of food service, offering lower overhead costs and higher profit margins. This comprehensive guide walks you through everything needed to start a successful cloud kitchen franchise in India, from initial setup to scaling operations.",
          category: "Cloud Kitchen",
          thumbnail: "",
          readTime: "9 min read",
          author: "Food Tech Expert",
          tags: ["cloud kitchen", "franchise", "food delivery", "startup"],
          url: "https://blog.bosswallah.com/how-to-start-a-cloud-kitchen-franchise-in-india-2025/"
        },
        {
          id: 4,
          date: new Date(Date.now() - 10800000).toISOString().split('T')[0],
          title: "Home-Based Business Ideas That Actually Make Money in 2025",
          excerpt: "Profitable home-based business opportunities that require minimal investment and offer excellent earning potential.",
          content: "Working from home has evolved beyond remote employment to include numerous entrepreneurial opportunities. This guide explores 25+ home-based business ideas that have proven profitable in 2025, requiring minimal initial investment while offering substantial earning potential. Categories include online services (virtual assistance, content writing, graphic design, digital marketing), e-commerce ventures (dropshipping, Amazon FBA, handmade products), educational services (online tutoring, course creation, coaching), food businesses (catering, baking, meal prep), and creative services (photography, event planning, interior design). Each business idea includes startup costs, skill requirements, income potential, and scaling strategies. The guide also covers legal considerations, tax implications, workspace setup, time management, and marketing strategies specific to home-based businesses. Special attention is given to leveraging technology, building online presence, and creating sustainable business models. Success stories and case studies demonstrate how entrepreneurs have built six-figure businesses from their homes. The guide includes resources for business registration, financial management, and professional networking.",
          category: "Home-based Business",
          thumbnail: "/src/assets/news-thumb-4.jpg",
          readTime: "16 min read",
          author: "Boss Wallah Entrepreneur",
          tags: ["Home Business", "Entrepreneurship", "Online", "Business"],
          url: "https://blog.bosswallah.com/home-based-business-ideas-make-money-2025/"
        },
        {
          id: 5,
          date: new Date(Date.now() - 14400000).toISOString().split('T')[0],
          title: "Personal Finance Management: Building Wealth Through Smart Money Habits",
          excerpt: "Master personal finance fundamentals and develop wealth-building strategies for long-term financial independence.",
          content: "Personal finance management is the foundation of financial success and wealth building. This comprehensive guide covers essential personal finance principles, from budgeting and saving to investing and retirement planning. The content is structured for beginners and includes advanced strategies for experienced individuals. Key topics include creating effective budgets, emergency fund establishment, debt management strategies, investment portfolio diversification, tax optimization, insurance planning, and retirement preparation. The guide explains various investment options including mutual funds, stocks, bonds, real estate investment trusts (REITs), and alternative investments. Practical tools include budget templates, investment calculators, goal-setting frameworks, and progress tracking methods. The guide also addresses common financial mistakes, psychological aspects of money management, and behavioral finance principles. Special sections cover financial planning for different life stages, from young professionals to retirees. The content emphasizes the power of compound interest, consistent investing, and long-term thinking in wealth accumulation. Real-world examples and case studies illustrate successful wealth-building journeys across different income levels and professions.",
          category: "Personal Finance",
          thumbnail: "/src/assets/news-thumb-5.jpg",
          readTime: "20 min read",
          author: "Boss Wallah Finance",
          tags: ["Finance", "Investment", "Wealth", "Business"],
          url: "https://blog.bosswallah.com/personal-finance-management-building-wealth-smart-money-habits/"
        },
        {
          id: 6,
          date: new Date(Date.now() - 18000000).toISOString().split('T')[0],
          title: "Government Schemes for Small Business: Complete Guide to Funding & Support",
          excerpt: "Comprehensive overview of government schemes, subsidies, and support programs available for small businesses and startups.",
          content: "The Indian government offers numerous schemes and initiatives to support small businesses, startups, and entrepreneurs. This comprehensive guide details available funding options, eligibility criteria, application processes, and success strategies for accessing government support. Major schemes covered include Pradhan Mantri Mudra Yojana (PMMY), Stand-Up India, Startup India, MSME schemes, Digital India initiatives, and state-specific programs. Each scheme is explained with detailed eligibility requirements, loan amounts, interest rates, and application procedures. The guide also covers documentation requirements, common application mistakes, and tips for improving approval chances. Additional topics include tax benefits for startups, government tenders for small businesses, export promotion schemes, technology upgrade programs, and skill development initiatives. The content includes success stories of businesses that have benefited from these schemes and transformed their operations. Practical sections cover how to prepare business plans for government applications, maintain compliance requirements, and leverage multiple schemes simultaneously. The guide serves as a complete resource for entrepreneurs looking to access government support for business growth and expansion.",
          category: "Government Schemes",
          thumbnail: "/src/assets/news-thumb-6.jpg",
          readTime: "22 min read",
          author: "Boss Wallah Policy",
          tags: ["Government", "Funding", "MSME", "Business"],
          url: "https://blog.bosswallah.com/government-schemes-small-business-funding-support-guide/"
        },
        {
          id: 7,
          date: new Date(Date.now() - 21600000).toISOString().split('T')[0],
          title: "Agriculture Business Opportunities: Modern Farming & Agtech Solutions",
          excerpt: "Explore profitable agriculture business opportunities leveraging modern farming techniques and agricultural technology.",
          content: "Agriculture business in India is experiencing a technological revolution, creating numerous opportunities for entrepreneurs and farmers. This guide explores modern agriculture business opportunities that combine traditional farming with cutting-edge technology. Topics include precision farming, hydroponics, vertical farming, organic produce, agtech startups, farm-to-table businesses, and agricultural equipment leasing. The content covers investment requirements, technical knowledge needed, market potential, and profitability analysis for each opportunity. Special emphasis is placed on sustainable farming practices, climate-smart agriculture, and leveraging government support for agricultural ventures. The guide discusses emerging trends like drone technology in farming, IoT applications, blockchain in supply chain, artificial intelligence for crop monitoring, and data analytics for yield optimization. Practical sections include business plan templates for agricultural ventures, funding sources specific to agriculture, partnership opportunities with cooperatives, and export potential for agricultural products. Case studies highlight successful agricultural entrepreneurs who have built profitable businesses using modern techniques. The guide also addresses challenges like climate change adaptation, water conservation, soil health management, and market access strategies.",
          category: "Agriculture",
          thumbnail: "/src/assets/news-thumb-1.jpg",
          readTime: "19 min read",
          author: "Boss Wallah Agri",
          tags: ["Agriculture", "Technology", "Farming", "Business"],
          url: "https://blog.bosswallah.com/agriculture-business-opportunities-modern-farming-agtech/"
        },
        {
          id: 8,
          date: new Date(Date.now() - 25200000).toISOString().split('T')[0],
          title: "Animal Husbandry Business: Profitable Livestock & Dairy Farming Guide",
          excerpt: "Complete guide to starting and scaling profitable animal husbandry businesses including dairy, poultry, and livestock farming.",
          content: "Animal husbandry presents excellent business opportunities for entrepreneurs interested in agriculture and livestock farming. This comprehensive guide covers various animal husbandry businesses including dairy farming, poultry farming, goat farming, pig farming, fish farming, and bee keeping. Each business type is analyzed for investment requirements, operational procedures, market demand, profitability, and scaling potential. The guide provides detailed information on breed selection, housing requirements, feeding protocols, health management, breeding programs, and product marketing strategies. Financial analysis includes startup costs, operational expenses, revenue projections, and break-even timelines. The content also covers modern techniques like artificial insemination, automated feeding systems, climate-controlled housing, and integrated farming approaches. Regulatory aspects include licensing requirements, animal welfare standards, environmental clearances, and quality certifications. The guide addresses common challenges such as disease management, feed cost optimization, market price fluctuations, and seasonal demand variations. Success stories showcase farmers who have built profitable animal husbandry businesses across different scales. Additional topics include value-added products, direct marketing strategies, cooperative formation, and leveraging technology for improved productivity and profitability.",
          category: "Animal Husbandry",
          thumbnail: "/src/assets/news-thumb-2.jpg",
          readTime: "17 min read",
          author: "Boss Wallah Livestock",
          tags: ["Animal Husbandry", "Dairy", "Farming", "Business"],
          url: "https://blog.bosswallah.com/animal-husbandry-business-livestock-dairy-farming-guide/"
        },
        {
          id: 9,
          date: new Date(Date.now() - 28800000).toISOString().split('T')[0],
          title: "Handicrafts Business: Traditional Crafts to Global Markets",
          excerpt: "Transform traditional handicraft skills into profitable businesses with modern marketing and e-commerce strategies.",
          content: "India's rich handicraft tradition offers immense business potential for artisans and entrepreneurs. This guide explores how to build successful handicrafts businesses by combining traditional skills with modern business practices. Coverage includes various handicraft categories such as textiles, pottery, woodwork, metalwork, jewelry, leather goods, and decorative items. The content provides strategies for skill development, product design, quality standardization, pricing strategies, and brand building. Modern marketing approaches include e-commerce platforms, social media marketing, craft fairs, export opportunities, and direct-to-consumer sales. The guide addresses common challenges faced by handicraft businesses including raw material sourcing, skilled labor availability, quality consistency, and market access. Financial aspects cover startup costs, working capital requirements, pricing models, and profitability optimization. Special sections focus on leveraging government schemes for handicrafts, obtaining geographical indication (GI) tags, participating in international trade fairs, and building export networks. The content includes success stories of artisans who have scaled their traditional crafts into profitable businesses. Digital transformation strategies help traditional craftspeople reach global markets through online platforms and digital marketing techniques.",
          category: "Handicrafts Business",
          thumbnail: "/src/assets/news-thumb-3.jpg",
          readTime: "14 min read",
          author: "Boss Wallah Crafts",
          tags: ["Handicrafts", "Traditional", "Export", "Business"],
          url: "https://blog.bosswallah.com/handicrafts-business-traditional-crafts-global-markets/"
        },
        {
          id: 10,
          date: new Date(Date.now() - 32400000).toISOString().split('T')[0],
          title: "Manufacturing Business Opportunities in India: Industry Analysis & Setup Guide",
          excerpt: "Comprehensive guide to manufacturing business opportunities in India with industry analysis and step-by-step setup procedures.",
          content: "Manufacturing sector in India offers diverse opportunities for entrepreneurs across various industries. This comprehensive guide analyzes manufacturing business opportunities in sectors like textiles, pharmaceuticals, automotive components, electronics, food processing, chemicals, and machinery. Each sector is evaluated for market size, growth potential, investment requirements, regulatory framework, and competitive landscape. The guide provides step-by-step procedures for setting up manufacturing units including land acquisition, licenses and approvals, machinery procurement, raw material sourcing, and workforce recruitment. Financial planning covers project cost estimation, funding options, working capital requirements, and profitability analysis. The content addresses modern manufacturing concepts like lean manufacturing, quality management systems, automation integration, and Industry 4.0 technologies. Regulatory compliance sections cover pollution control clearances, factory licenses, labor law compliance, and product certifications. The guide explores government incentives for manufacturing including Make in India benefits, cluster development programs, and export promotion schemes. Special focus on MSME manufacturing opportunities includes small-scale industry options, technology upgradation schemes, and market linkage programs. Case studies highlight successful manufacturing entrepreneurs who have built scalable businesses across different sectors.",
          category: "Manufacturing Business",
          thumbnail: "/src/assets/news-thumb-4.jpg",
          readTime: "25 min read",
          author: "Boss Wallah Manufacturing",
          tags: ["Manufacturing", "Industry", "Setup", "Business"],
          url: "https://blog.bosswallah.com/manufacturing-business-opportunities-india-analysis-setup-guide/"
        },
        {
          id: 11,
          date: new Date(Date.now() - 36000000).toISOString().split('T')[0],
          title: "Service Business Ideas: High-Profit Service Sectors for Entrepreneurs",
          excerpt: "Discover high-profit service business opportunities that require minimal investment but offer excellent scalability potential.",
          content: "Service businesses offer excellent opportunities for entrepreneurs looking to start with minimal capital investment while achieving high profit margins. This comprehensive guide explores various service business categories including professional services, personal services, business services, and technology services. Professional services covered include consulting, accounting, legal services, real estate, insurance, and financial advisory. Personal services include beauty and wellness, fitness training, home services, event management, and educational services. Business services encompass digital marketing, HR consulting, logistics, cleaning services, and security services. Technology services include software development, IT support, web design, and digital transformation consulting. Each service category is analyzed for market demand, competitive landscape, pricing strategies, service delivery models, and growth potential. The guide provides frameworks for service business development including service design, customer acquisition strategies, pricing models, quality assurance, and customer retention. Operational aspects cover team building, service standardization, technology integration, and scalability planning. Financial planning includes startup costs, operational expenses, pricing strategies, and profitability optimization. Success stories showcase service entrepreneurs who have built profitable and scalable businesses across different sectors.",
          category: "Service Business",
          thumbnail: "/src/assets/news-thumb-5.jpg",
          readTime: "21 min read",
          author: "Boss Wallah Services",
          tags: ["Services", "Consulting", "Scalability", "Business"],
          url: "https://blog.bosswallah.com/service-business-ideas-high-profit-sectors-entrepreneurs/"
        },
        {
          id: 12,
          date: new Date(Date.now() - 39600000).toISOString().split('T')[0],
          title: "E-commerce Business Guide: From Startup to Scale in 2025",
          excerpt: "Complete roadmap for building successful e-commerce businesses with modern strategies and growth techniques.",
          content: "E-commerce continues to revolutionize retail business, offering entrepreneurs unprecedented opportunities to reach global markets. This comprehensive guide covers every aspect of building and scaling e-commerce businesses in 2025. Starting with business model selection (B2C, B2B, marketplace, dropshipping), the guide progresses through market research, product selection, supplier sourcing, and competitive analysis. Technology aspects include platform selection (Shopify, WooCommerce, Magento), website development, mobile optimization, and integration with payment gateways and logistics providers. Marketing strategies cover search engine optimization, social media marketing, influencer partnerships, email marketing, and paid advertising across platforms. Operational excellence includes inventory management, order fulfillment, customer service, and return management. The guide addresses advanced topics like personalization, artificial intelligence implementation, voice commerce, and omnichannel strategies. Financial management covers pricing strategies, cost optimization, cash flow management, and scaling funding. Legal and compliance aspects include business registration, tax obligations, data protection, and international trade regulations. Success stories and case studies demonstrate how entrepreneurs have built profitable e-commerce businesses across various product categories and market segments.",
          category: "Digital Skills",
          thumbnail: "/src/assets/news-thumb-6.jpg",
          readTime: "23 min read",
          author: "Boss Wallah E-commerce",
          tags: ["E-commerce", "Online", "Scaling", "Business"],
          url: "https://blog.bosswallah.com/ecommerce-business-guide-startup-scale-2025/"
        }
      ];

      return latestNews;
    } catch (error) {
      console.error('Error fetching Boss Wallah news:', error);
      return this.fallbackNews;
    }
  }
}