import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

    const scriptURL = "https://script.google.com/a/macros/bosswallah.com/s/AKfycbzwWwVNDHzHp3FvaGl6jYhWAfO41-dwEtvgSFpwCLz3U9SSUG1YqzKUJDMdSoPuK8Olog/exec";
    const formData = {
      type: "newsletter",
      email: email
    };

    try {
      console.log("Newsletter submission data:", formData);
      console.log("Sending to URL:", scriptURL);
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      
      // With no-cors mode, we can't read the response, so we assume success
      
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Subscription Failed",
        description: "Oops! Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
              className="whitespace-nowrap bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-x hover:animate-none text-primary-foreground border-primary/20"
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