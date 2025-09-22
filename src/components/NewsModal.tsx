import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Clock, User, ExternalLink, Share2, Bookmark, X, ChevronLeft, ChevronRight } from "lucide-react";
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
const NewsModal = ({
  news,
  isOpen,
  onClose,
  onNext,
  onPrevious
}: NewsModalProps) => {
  const {
    toast
  } = useToast();
  if (!news) return null;
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: news.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Article link has been copied to clipboard."
      });
    }
  };
  const handleBookmark = () => {
    toast({
      title: "Bookmarked!",
      description: "Article saved to your reading list."
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
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[80vw] h-[70vh] p-0 overflow-hidden">
        <div className="relative bg-card h-full flex flex-col">
          {/* Navigation Arrows */}
          {onPrevious && <Button variant="ghost" size="icon" onClick={onPrevious} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300">
              <ChevronLeft size={16} />
            </Button>}
          
          {onNext && <Button variant="ghost" size="icon" onClick={onNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300">
              <ChevronRight size={16} />
            </Button>}

          {/* Close Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="absolute right-4 top-4 z-10 h-8 w-8 rounded-full border border-orange-200 hover:bg-orange-50 transition-all duration-300 text-black"
          >
            <X size={16} />
          </Button>

          <ScrollArea className="flex-1">
            {/* Content */}
            <div className="mx-14 px-3 py-4 space-y-2 pt-6 pb-6">
              {/* Small Thumbnail Preview */}
              <div className="flex gap-3 items-start mb-4">
                <div className="relative w-28 h-28 overflow-hidden rounded-lg flex-shrink-0">
                  <img src={news.thumbnail} alt={news.title} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 space-y-1 relative">
                  {/* Close Button - aligned with title */}
                  

                  {/* Title */}
                  <h1 className="text-lg md:text-xl font-bold text-foreground leading-tight pr-8">
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
              <div className="prose max-w-none line-clamp-10">
                <p className="text-foreground leading-relaxed text-sm">
                  {news.content}
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

            {/* Footer Actions */}
            <div className="flex items-center justify-between mx-16 px-4 py-4 border-t bg-muted/30 flex-shrink-0">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
                  <Share2 size={16} />
                  Share
                </Button>
                
                <Button variant="outline" size="sm" onClick={handleBookmark} className="gap-2">
                  <Bookmark size={16} />
                  Save
                </Button>
              </div>

              {news.url && <Button variant="default" size="sm" onClick={() => window.open(news.url, '_blank')} className="gap-2">
                  Read Full Article
                  <ExternalLink size={16} />
                </Button>}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>;
};
export default NewsModal;