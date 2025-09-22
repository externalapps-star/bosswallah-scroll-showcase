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
  X
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
}

const NewsModal = ({ news, isOpen, onClose }: NewsModalProps) => {
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
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-background">
        {/* Header */}
        <DialogHeader className="relative p-6 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <Badge variant="secondary" className="mb-3">
                {news.category}
              </Badge>
              <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                {news.title}
              </DialogTitle>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User size={14} />
                  {news.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {formatDate(news.date)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {news.readTime}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share2 size={16} />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleBookmark}>
                <Bookmark size={16} />
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X size={16} />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <Separator />

        {/* Content */}
        <ScrollArea className="flex-1 px-6">
          <div className="py-6">
            {/* Featured Image */}
            <div className="relative mb-8 rounded-lg overflow-hidden">
              <img 
                src={news.thumbnail} 
                alt={news.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {news.excerpt}
              </p>
              
              <div className="space-y-6 text-foreground leading-relaxed">
                {news.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t">
              {news.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="border-t p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 size={16} className="mr-2" />
                Share Article
              </Button>
              <Button variant="outline" size="sm" onClick={handleBookmark}>
                <Bookmark size={16} className="mr-2" />
                Save for Later
              </Button>
            </div>
            
            {news.url && (
              <Button asChild>
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-2" />
                  Read on Boss Wallah
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsModal;