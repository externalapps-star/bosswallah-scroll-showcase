import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Calendar, 
  Clock, 
  User, 
  ExternalLink, 
  Share2, 
  Bookmark,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

const NewsModal = ({ news, isOpen, onClose, onNext, onPrevious }: NewsModalProps) => {
  const { toast } = useToast();

  if (!news) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: news.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Article link has been copied to clipboard.",
      });
    }
  };

  const handleBookmark = () => {
    toast({
      title: "Bookmarked!",
      description: "Article saved to your reading list.",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[95vh] p-0 overflow-hidden">
        <div className="relative bg-card">
          {/* Navigation Arrows */}
          {onPrevious && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-x-1 animate-[pulse_3s_ease-in-out_infinite]"
            >
              <ChevronLeft size={20} />
            </Button>
          )}
          
          {onNext && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-all duration-300 hover:scale-110 hover:translate-x-1 animate-[pulse_3s_ease-in-out_infinite]"
            >
              <ChevronRight size={20} />
            </Button>
          )}

          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 h-10 w-10 rounded-full bg-background/90 hover:bg-background shadow-lg"
          >
            <X size={18} />
          </Button>

          <ScrollArea className="max-h-[90vh]">
            {/* Featured Image */}
            <div className="relative w-full h-48 md:h-64 overflow-hidden">
              <img 
                src={news.thumbnail} 
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 mx-8 md:mx-12 space-y-4 text-center">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-foreground leading-tight">
                {news.title}
              </h1>

              {/* Meta Info */}
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                <span>{formatDate(news.date)}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {news.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {news.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Insights Box */}
              <div className="mt-8 p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                <h3 className="font-semibold text-foreground mb-2">INSIGHTS</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {news.excerpt}
                </p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-center p-6 pt-0 border-t bg-muted/30 gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="gap-2"
                >
                  <Share2 size={16} />
                  Share
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleBookmark}
                  className="gap-2"
                >
                  <Bookmark size={16} />
                  Save
                </Button>
              </div>

              {news.url && (
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => window.open(news.url, '_blank')}
                  className="gap-2"
                >
                  Read Full Article
                  <ExternalLink size={16} />
                </Button>
              )}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsModal;