import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showWebhookInput, setShowWebhookInput] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            type: "newsletter_subscription",
            email: email,
            timestamp: new Date().toISOString(),
            triggered_from: window.location.origin,
          }),
        });

        toast({
          title: "Successfully Subscribed!",
          description: "Your email has been sent to Google Sheets via Zapier.",
        });
      } catch (error) {
        console.error("Error sending to webhook:", error);
        toast({
          title: "Subscription Successful",
          description: "Request sent to Zapier. Check your Zap history to confirm.",
        });
      }
    } else {
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
    }

    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Subscribe to Our <span className="gradient-text">Newsletter</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest insights, tips, and updates on digital marketing, 
            business growth strategies, and exclusive content delivered straight to your inbox.
          </p>
          
          {!showWebhookInput && (
            <Button 
              variant="outline" 
              onClick={() => setShowWebhookInput(true)}
              className="mb-6"
            >
              Connect to Google Sheets
            </Button>
          )}
          
          {showWebhookInput && (
            <div className="mb-6 p-4 bg-card rounded-lg border">
              <p className="text-sm text-muted-foreground mb-3">
                Paste your Zapier webhook URL to send newsletter signups to Google Sheets:
              </p>
              <Input
                type="url"
                placeholder="https://hooks.zapier.com/hooks/catch/..."
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="mb-2"
              />
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowWebhookInput(false)}
              >
                Hide
              </Button>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="whitespace-nowrap"
            >
              {isLoading ? "Subscribing..." : "Subscribe Now"}
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;