import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    problem: '',
    budget: '',
    startDate: '',
    agency: ''
  });
  const [webhookUrl, setWebhookUrl] = useState("");
  const [showWebhookInput, setShowWebhookInput] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
            type: "consultation_request",
            ...formData,
            timestamp: new Date().toISOString(),
            triggered_from: window.location.origin,
          }),
        });

        toast({
          title: "Request Sent!",
          description: "Your consultation request has been sent to Google Sheets via Zapier.",
        });
      } catch (error) {
        console.error("Error sending to webhook:", error);
        toast({
          title: "Request Submitted",
          description: "Request sent to Zapier. Check your Zap history to confirm.",
        });
      }
    } else {
      toast({
        title: "Form Submitted!",
        description: "Thank you for your consultation request.",
      });
    }

    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Book a <span className="gradient-text">Consulting</span> <span className="gradient-text">Call</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We pride ourselves on being a business savvy media house that understands 
              that we need to deliver what matters to our customers.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Centered Contact form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 max-w-2xl w-full backdrop-blur-sm bg-gradient-to-br from-card/90 to-card/70">
              {!isSubmitted ? (
                <>
                  {!showWebhookInput && (
                    <div className="text-center mb-6">
                      <Button 
                        variant="outline" 
                        onClick={() => setShowWebhookInput(true)}
                      >
                        Connect to Google Sheets
                      </Button>
                    </div>
                  )}
                  
                  {showWebhookInput && (
                    <div className="mb-6 p-4 bg-muted rounded-lg border">
                      <p className="text-sm text-muted-foreground mb-3">
                        Paste your Zapier webhook URL to send consultation requests to Google Sheets:
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

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        className="mt-2" 
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input 
                        id="company" 
                        name="company" 
                        required 
                        value={formData.company} 
                        onChange={handleInputChange} 
                        className="mt-2" 
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Contact Number *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel"
                        required 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        className="mt-2" 
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email"
                        required 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        className="mt-2" 
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="problem">Marketing Problem (Optional)</Label>
                      <Textarea 
                        id="problem" 
                        name="problem" 
                        value={formData.problem} 
                        onChange={handleInputChange} 
                        className="mt-2" 
                        rows={3} 
                        placeholder="Tell us about your marketing challenges..." 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget">Budget (Optional)</Label>
                        <Input 
                          id="budget" 
                          name="budget" 
                          value={formData.budget} 
                          onChange={handleInputChange} 
                          className="mt-2" 
                          placeholder="e.g. ₹5-10 Lakhs" 
                        />
                      </div>

                      <div>
                        <Label htmlFor="startDate">Expected Start Date (Optional)</Label>
                        <Input 
                          id="startDate" 
                          name="startDate" 
                          type="date" 
                          value={formData.startDate} 
                          onChange={handleInputChange} 
                          className="mt-2" 
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="agency">Current Marketing Agency (Optional)</Label>
                      <Input 
                        id="agency" 
                        name="agency" 
                        value={formData.agency} 
                        onChange={handleInputChange} 
                        className="mt-2" 
                        placeholder="Do you currently work with any agency?" 
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-2 border-primary text-primary bg-transparent hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-primary hover:text-primary-foreground hover:border-primary/20 active:bg-gradient-to-r active:from-primary active:via-accent active:to-primary active:text-primary-foreground transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Done"}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Your inquiry has been successfully submitted.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Boss Wallah will contact you soon to discuss your requirements.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        phone: '',
                        email: '',
                        problem: '',
                        budget: '',
                        startDate: '',
                        agency: ''
                      });
                    }} 
                    className="mt-6"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;