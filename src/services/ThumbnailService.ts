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

export class ThumbnailService {
  static async generateThumbnail(newsItem: NewsItem): Promise<string> {
    try {
      // Create a descriptive prompt based on the news content
      const prompt = this.createPromptFromNews(newsItem);
      
      // Generate image using the imagegen service
      const thumbnailPath = `src/assets/news-thumb-${newsItem.id}-generated.jpg`;
      
      // Call the image generation function
      await this.callImageGeneration(prompt, thumbnailPath);
      
      return thumbnailPath;
    } catch (error) {
      console.error('Error generating thumbnail:', error);
      // Return fallback thumbnail
      return `/src/assets/news-thumb-${(newsItem.id % 6) + 1}.jpg`;
    }
  }

  private static createPromptFromNews(newsItem: NewsItem): string {
    const categoryImages = {
      'Business': 'professional business scene with modern office buildings and entrepreneurs',
      'Creator Hub': 'creative content creator workspace with cameras and digital tools',
      'Digital Skills': 'modern technology and digital learning environment',
      'Legal': 'professional legal consultation and documentation scene'
    };

    const baseCategory = categoryImages[newsItem.category as keyof typeof categoryImages] || 'modern business environment';
    
    // Extract key themes from title and content
    let themePrompt = '';
    if (newsItem.title.toLowerCase().includes('franchise')) {
      themePrompt = 'franchise business meeting with branded storefront and partnership handshake';
    } else if (newsItem.title.toLowerCase().includes('food') || newsItem.title.toLowerCase().includes('restaurant')) {
      themePrompt = 'modern restaurant interior with food franchise branding and customers';
    } else if (newsItem.title.toLowerCase().includes('retail')) {
      themePrompt = 'modern retail store with shopping displays and customer engagement';
    } else if (newsItem.title.toLowerCase().includes('investment') || newsItem.title.toLowerCase().includes('profit')) {
      themePrompt = 'financial growth charts and investment planning with modern business setting';
    } else if (newsItem.title.toLowerCase().includes('starbucks') || newsItem.title.toLowerCase().includes('coffee')) {
      themePrompt = 'modern coffee shop interior with premium branding and cafe atmosphere';
    } else {
      themePrompt = baseCategory;
    }

    return `${themePrompt}, professional photography, high quality, business editorial style, clean composition, bright lighting, 16:9 aspect ratio`;
  }

  private static async callImageGeneration(prompt: string, targetPath: string): Promise<void> {
    try {
      // Use the actual image generation service
      const response = await fetch('/api/imagegen/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          target_path: targetPath,
          width: 512,
          height: 320,
          model: 'flux.schnell'
        })
      });

      if (!response.ok) {
        throw new Error(`Image generation failed: ${response.statusText}`);
      }

      console.log(`Successfully generated thumbnail: ${targetPath}`);
    } catch (error) {
      console.error('Image generation failed:', error);
      throw error;
    }
  }

  static async generateAllThumbnails(newsItems: NewsItem[]): Promise<NewsItem[]> {
    const updatedItems = await Promise.all(
      newsItems.map(async (item) => {
        try {
          const thumbnail = await this.generateThumbnail(item);
          return { ...item, thumbnail };
        } catch (error) {
          console.error(`Failed to generate thumbnail for news ${item.id}:`, error);
          // Use fallback thumbnail
          return { 
            ...item, 
            thumbnail: `/src/assets/news-thumb-${(item.id % 6) + 1}.jpg`
          };
        }
      })
    );

    return updatedItems;
  }
}