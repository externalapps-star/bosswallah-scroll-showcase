import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Clock, User, X, ChevronLeft, ChevronRight } from "lucide-react";
interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  thumbnail: string;
  tags: string[];
  url?: string;
}
interface NewsModalProps {
  news: NewsItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}
const NewsModal = ({
  news,
  isOpen,
  onClose,
  onNext,
  onPrevious
}: NewsModalProps) => {
  if (!news) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[85vw] h-[70vh] p-0 overflow-hidden">
        <div className="relative bg-card h-full flex flex-col">
          {/* News Header */}
          <div className="flex items-center justify-between py-2 border-b px-4">
            <div></div> {/* Empty spacer for centering */}
            <h2 className="text-xl font-bold text-primary gradient-text">News</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="h-8 w-8 rounded-full text-primary hover:text-primary hover:bg-transparent focus:text-primary focus:bg-transparent active:text-primary active:bg-transparent"
            >
              <X size={16} />
            </Button>
          </div>

          {/* Navigation Arrows */}
          {onPrevious && <Button variant="ghost" size="icon" onClick={onPrevious} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground border-2 border-white/20 shadow-lg transition-all duration-300 hover:scale-110">
              <ChevronLeft size={16} />
            </Button>}
          
          {onNext && <Button variant="ghost" size="icon" onClick={onNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground border-2 border-white/20 shadow-lg transition-all duration-300 hover:scale-110">
              <ChevronRight size={16} />
            </Button>}

          <ScrollArea className="flex-1">
            {/* Content */}
            <div className="mx-12 px-3 py-4 space-y-2 pt-4 pb-2">
              {/* Small Thumbnail Preview */}
              <div className="flex gap-3 items-start mb-4">
                <div className="relative w-28 h-28 overflow-hidden rounded-lg flex-shrink-0">
                  <img src={news.thumbnail} alt={news.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 space-y-1 relative">
                  {/* Title */}
                  <h1 className="text-lg md:text-xl font-bold text-foreground leading-tight pr-8 line-clamp-2">
                    {news.title}
                  </h1>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{formatDate(news.date)}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {news.tags.map((tag, index) => <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                        {tag}
                      </Badge>)}
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose max-w-none">
                <p className="text-foreground leading-relaxed text-sm line-clamp-8">
                  Boss Wallah, India's #1 entrepreneurship platform, has seen Facebook video views surge 5X in six months—from 30M in March to 150M in August 2025. Unlike YouTube's younger audience, Facebook growth is driven by people in their 30s and 40s, seeking practical advice on business, money, and financial independence. This mirrors India's broader shift, where non-metro demand is growing 2.5X faster than metros (Nielsen 2024). Boss Wallah's business, finance, and farming content is powering one of the most engaged entrepreneurial communities online. With 18M+ followers and 330M+ monthly views across platforms, Boss Wallah Media is scaling content nationwide. The platform is doubling down on Facebook to serve ambitious Indians and help brands reach this motivated audience.
                </p>
              </div>

              {/* Insights Box */}
              <div className="mt-6 p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                <h3 className="font-semibold text-foreground mb-2 text-sm">INSIGHTS</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {news.excerpt}
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>;
};
export default NewsModal;