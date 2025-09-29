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
    companyName: '',
    contactNumber: '',
    email: '',
    marketingProblem: '',
    budget: '',
    expectedStartDate: '',
    currentAgency: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContactNumber = (contactNumber: string) => {
    // Remove all non-digit characters for validation
    const digitsOnly = contactNumber.replace(/\D/g, '');
    // Check if it's 10-15 digits (common phone number range)
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Validate contact number
    if (!validateContactNumber(formData.contactNumber)) {
      toast({
        title: "Invalid Contact Number",
        description: "Please enter a valid contact number (10-15 digits).",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbycDSL5d2ViQz-mSVG0zI_lVG78gORKYJeLmtXos3etDWzmXIctZIbjhuyGSjmUgjgmEQ/exec";
    const submitData = {
      type: "form",
      name: formData.name,
      companyName: formData.companyName,
      contactNumber: formData.contactNumber,
      email: formData.email,
      marketingProblem: formData.marketingProblem,
      budget: formData.budget,
      expectedStartDate: formData.expectedStartDate,
      currentAgency: formData.currentAgency
    };

    try {
      console.log("Sending contact data:", submitData);
      
      // Use no-cors mode to bypass CORS entirely
      const params = new URLSearchParams();
      params.append('type', submitData.type);
      params.append('name', submitData.name);
      params.append('companyName', submitData.companyName);
      params.append('contactNumber', submitData.contactNumber);
      params.append('email', submitData.email);
      params.append('marketingProblem', submitData.marketingProblem);
      params.append('budget', submitData.budget);
      params.append('expectedStartDate', submitData.expectedStartDate);
      params.append('currentAgency', submitData.currentAgency);
      
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
        title: "Form Submitted!",
        description: "Thank you for your consultation request.",
      });
      setIsSubmitted(true);
      
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input 
                          id="companyName" 
                          name="companyName" 
                          required 
                          value={formData.companyName} 
                          onChange={handleInputChange} 
                          className="mt-2" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactNumber">Contact Number *</Label>
                        <Input 
                          id="contactNumber" 
                          name="contactNumber" 
                          type="tel"
                          required 
                          value={formData.contactNumber} 
                          onChange={handleInputChange} 
                          className="mt-2" 
                          placeholder="+1 (555) 123-4567"
                          pattern="[\+]?[0-9\s\-\(\)]+"
                          title="Please enter a valid phone number"
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
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          title="Please enter a valid email address"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="marketingProblem">Marketing Problem *</Label>
                      <Textarea 
                        id="marketingProblem" 
                        name="marketingProblem" 
                        required
                        value={formData.marketingProblem} 
                        onChange={handleInputChange} 
                        className="mt-2" 
                        rows={3} 
                        placeholder="Describe your marketing challenges..." 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget">Budget *</Label>
                        <Input 
                          id="budget" 
                          name="budget" 
                          required 
                          value={formData.budget} 
                          onChange={handleInputChange} 
                          className="mt-2" 
                          placeholder="e.g., $5,000 - $10,000"
                        />
                      </div>

                      <div>
                        <Label htmlFor="expectedStartDate">Expected Start Date *</Label>
                        <Input 
                          id="expectedStartDate" 
                          name="expectedStartDate" 
                          type="date"
                          required 
                          value={formData.expectedStartDate} 
                          onChange={handleInputChange} 
                          className="mt-2" 
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="currentAgency">Current Agency (Optional)</Label>
                      <Input 
                        id="currentAgency" 
                        name="currentAgency" 
                        value={formData.currentAgency} 
                        onChange={handleInputChange} 
                        className="mt-2" 
                        placeholder="Name of your current marketing agency"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-2 border-primary text-primary bg-transparent hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-primary hover:text-primary-foreground hover:border-primary/20 active:bg-gradient-to-r active:from-primary active:via-accent active:to-primary active:text-primary-foreground transition-all duration-300"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Send Message"}
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
                        companyName: '',
                        contactNumber: '',
                        email: '',
                        marketingProblem: '',
                        budget: '',
                        expectedStartDate: '',
                        currentAgency: ''
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