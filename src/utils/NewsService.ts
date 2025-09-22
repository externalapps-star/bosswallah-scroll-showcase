import { FirecrawlService } from './FirecrawlService';

export interface NewsItem {
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
  url?: string;
}

export class NewsService {
  private static CACHE_KEY = 'boss_wallah_news_cache';
  private static CACHE_EXPIRY_KEY = 'boss_wallah_news_cache_expiry';
  private static CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

  static async fetchLatestNews(): Promise<NewsItem[]> {
    // Check cache first
    const cachedNews = this.getCachedNews();
    if (cachedNews) {
      console.log('Using cached news data');
      return cachedNews;
    }

    try {
      console.log('Fetching latest news from Boss Wallah website...');
      
      // Try to crawl the Boss Wallah blog
      const crawlResult = await FirecrawlService.crawlWebsite('https://blog.bosswallah.com');
      
      if (crawlResult.success && crawlResult.data) {
        const parsedNews = this.parseNewsFromCrawlData(crawlResult.data);
        this.cacheNews(parsedNews);
        return parsedNews;
      } else {
        console.warn('Failed to fetch from website, using fallback data');
        return this.getFallbackNews();
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      return this.getFallbackNews();
    }
  }

  private static getCachedNews(): NewsItem[] | null {
    try {
      const cached = localStorage.getItem(this.CACHE_KEY);
      const expiry = localStorage.getItem(this.CACHE_EXPIRY_KEY);
      
      if (cached && expiry && Date.now() < parseInt(expiry)) {
        return JSON.parse(cached);
      }
    } catch (error) {
      console.error('Error reading cached news:', error);
    }
    return null;
  }

  private static cacheNews(news: NewsItem[]): void {
    try {
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(news));
      localStorage.setItem(this.CACHE_EXPIRY_KEY, (Date.now() + this.CACHE_DURATION).toString());
    } catch (error) {
      console.error('Error caching news:', error);
    }
  }

  private static parseNewsFromCrawlData(crawlData: any): NewsItem[] {
    // This is a simplified parser - in reality you'd need more sophisticated parsing
    // based on the actual structure of the Boss Wallah blog
    const articles = crawlData.data || [];
    
    return articles.slice(0, 10).map((article: any, index: number) => ({
      id: index + 1,
      date: article.publishedAt || new Date().toISOString().split('T')[0],
      title: article.title || `Boss Wallah Update ${index + 1}`,
      excerpt: article.description || article.excerpt || 'Latest insights from Boss Wallah team.',
      content: article.content || article.markdown || 'Full content available on Boss Wallah website.',
      category: this.extractCategory(article.title || ''),
      thumbnail: article.image || `/api/placeholder/400/300`,
      readTime: this.estimateReadTime(article.content || ''),
      author: 'Boss Wallah Team',
      tags: this.extractTags(article.title || ''),
      url: article.url || 'https://blog.bosswallah.com'
    }));
  }

  private static extractCategory(title: string): string {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('marketing') || lowerTitle.includes('content')) return 'Creator Hub';
    if (lowerTitle.includes('business') || lowerTitle.includes('franchise')) return 'Business';
    if (lowerTitle.includes('digital') || lowerTitle.includes('social')) return 'Digital Skills';
    return 'Business';
  }

  private static extractTags(title: string): string[] {
    const commonTags = ['Business', 'Marketing', 'Digital', 'Strategy', 'Growth'];
    return commonTags.slice(0, Math.floor(Math.random() * 3) + 1);
  }

  private static estimateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  }

  private static getFallbackNews(): NewsItem[] {
    // Import fallback thumbnails
    const newsThumb1 = "/src/assets/news-thumb-1.jpg";
    const newsThumb2 = "/src/assets/news-thumb-2.jpg";
    const newsThumb3 = "/src/assets/news-thumb-3.jpg";
    const newsThumb4 = "/src/assets/news-thumb-4.jpg";
    const newsThumb5 = "/src/assets/news-thumb-5.jpg";
    const newsThumb6 = "/src/assets/news-thumb-6.jpg";

    return [
      {
        id: 1,
        date: "2025-01-22",
        title: "10 Digital Marketing Trends to Watch in 2025",
        excerpt: "Stay ahead of the curve with these game-changing digital marketing trends that will define success in 2025.",
        content: "Digital marketing is evolving at breakneck speed, and 2025 promises to be a transformative year...",
        category: "Creator Hub",
        thumbnail: newsThumb1,
        readTime: "8 min read",
        author: "Boss Wallah Team",
        tags: ["Digital Marketing", "Trends", "2025"],
        url: "https://blog.bosswallah.com/digital-marketing-trends-2025/"
      },
      {
        id: 2,
        date: "2025-01-20",
        title: "100 Fresh Content Ideas for Social Media Success",
        excerpt: "Never run out of engaging content again with these creative ideas for every platform.",
        content: "Content creation has become the backbone of digital success...",
        category: "Digital Skills",
        thumbnail: newsThumb2,
        readTime: "12 min read",
        author: "Boss Wallah Team",
        tags: ["Content", "Social Media", "Marketing"],
        url: "https://blog.bosswallah.com/content-ideas-social-media/"
      },
      {
        id: 3,
        date: "2025-01-18",
        title: "Top Business Opportunities for Healthcare Professionals",
        excerpt: "Innovative business ideas that leverage medical expertise beyond traditional practice.",
        content: "The healthcare landscape is creating unprecedented opportunities...",
        category: "Business",
        thumbnail: newsThumb3,
        readTime: "10 min read",
        author: "Boss Wallah Team",
        tags: ["Healthcare", "Business", "Innovation"],
        url: "https://blog.bosswallah.com/healthcare-business-opportunities/"
      }
    ];
  }
}