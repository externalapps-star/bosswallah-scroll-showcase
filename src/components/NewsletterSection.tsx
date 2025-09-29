import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { CheckCircle } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

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

    const scriptURL = "https://script.google.com/macros/s/AKfycbycDSL5d2ViQz-mSVG0zI_lVG78gORKYJeLmtXos3etDWzmXIctZIbjhuyGSjmUgjgmEQ/exec";
    const formData = {
      type: "newsletter",
      email: email
    };

    try {
      console.log("Sending newsletter data:", formData);
      
      // Use no-cors mode to bypass CORS entirely
      const params = new URLSearchParams();
      params.append('type', formData.type);
      params.append('email', formData.email);
      
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // This bypasses CORS but we can't read the response
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString()
      });
      
      console.log("Request sent successfully (no-cors mode)");
      
      // With no-cors, we can't read the response, so we assume success
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
      setIsSubscribed(true);
      
    } catch (error) {
      console.error("Fetch error details:", error);
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      toast({
        title: "Network Error", 
        description: "Please check your internet connection and try again.",
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
          {!isSubscribed ? (
            <>
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
            </>
          ) : (
            <div className="py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                <span className="gradient-text">Thank You!</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                🎉 You are now subscribed to our newsletter!
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Get ready to receive the latest insights, tips, and updates on digital marketing 
                and business growth strategies delivered straight to your inbox.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setIsSubscribed(false);
                  setEmail("");
                }}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Subscribe Another Email
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;