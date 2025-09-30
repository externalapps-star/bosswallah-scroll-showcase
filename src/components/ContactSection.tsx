import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { CheckCircle, CalendarIcon } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    contactNumber: '',
    email: '',
    marketingProblem: '',
    budget: '',
    expectedStartDate: null as Date | null,
    currentAgency: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    // More strict email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email) && email.includes('.') && email.length > 5;
  };

  const validateContactNumber = (contactNumber: string) => {
    // Remove all non-digit characters for validation
    const digitsOnly = contactNumber.replace(/\D/g, '');
    
    // If it's 10 digits, assume it's Indian number (default)
    if (digitsOnly.length === 10) {
      return true; // Valid Indian mobile number
    }
    
    // For international numbers, check if it's 10-15 digits
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Real-time email validation
    if (name === 'email') {
      if (value) {
        if (!validateEmail(value)) {
          setEmailError('Invalid email format. Please enter a valid email address.');
        } else {
          setEmailError('');
        }
      } else {
        setEmailError('Email address is required.');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Strict email validation - prevent submission if invalid
    if (!formData.email || !validateEmail(formData.email)) {
      toast({
        title: "Invalid Email Address",
        description: "Please enter a valid email address before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    // Check if there are any validation errors
    if (emailError) {
      toast({
        title: "Form Error",
        description: "Please fix the email address before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Validate expected start date
    if (!formData.expectedStartDate) {
      toast({
        title: "Date Required",
        description: "Please select an expected start date.",
        variant: "destructive",
      });
      return;
    }

    if (formData.expectedStartDate < new Date()) {
      toast({
        title: "Invalid Date",
        description: "Expected start date cannot be in the past.",
        variant: "destructive",
      });
      return;
    }

    // Validate contact number
    if (!validateContactNumber(formData.contactNumber)) {
      toast({
        title: "Invalid Contact Number",
        description: "Please enter a valid contact number (10 digits for India, or international format).",
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
      
      
      // Use no-cors mode to bypass CORS entirely
      const params = new URLSearchParams();
      params.append('type', submitData.type);
      params.append('name', submitData.name);
      params.append('companyName', submitData.companyName);
      
      // Auto-prefix Indian numbers with +91 if they're 10 digits
      let contactNumber = submitData.contactNumber.replace(/\D/g, ''); // Remove non-digits
      if (contactNumber.length === 10) {
        contactNumber = '+91' + contactNumber; // Add India country code
      } else if (!submitData.contactNumber.startsWith('+')) {
        contactNumber = '+' + contactNumber; // Add + for other international numbers
      } else {
        contactNumber = submitData.contactNumber; // Keep as is if already formatted
      }
      
      params.append('contactNumber', contactNumber);
      params.append('email', submitData.email);
      params.append('marketingProblem', submitData.marketingProblem);
      params.append('budget', submitData.budget);
      params.append('expectedStartDate', formData.expectedStartDate ? format(formData.expectedStartDate, 'yyyy-MM-dd') : '');
      params.append('currentAgency', submitData.currentAgency);
      
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // This bypasses CORS but we can't read the response
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString()
      });
      
      
      
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
          <div className="text-center mb-8 md:mb-16 mt-4 md:mt-0">
            <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-6 text-foreground whitespace-nowrap">
              Book a <span className="gradient-text">Consulting</span> <span className="gradient-text">Call</span>
            </h2>
            <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
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
                        <Label htmlFor="name" className="text-sm">Name *</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          required 
                          value={formData.name} 
                          onChange={handleInputChange} 
                          className="mt-2 text-sm" 
                        />
                      </div>

                      <div>
                        <Label htmlFor="companyName" className="text-sm">Company Name *</Label>
                        <Input 
                          id="companyName" 
                          name="companyName" 
                          required 
                          value={formData.companyName} 
                          onChange={handleInputChange} 
                          className="mt-2 text-sm" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactNumber" className="text-sm">Contact Number *</Label>
                        <Input 
                          id="contactNumber" 
                          name="contactNumber" 
                          type="tel"
                          required 
                          value={formData.contactNumber} 
                          onChange={handleInputChange} 
                          className="mt-2 text-sm" 
                          placeholder="9876543210 (Indian format) or +1-555-123-4567 (International)"
                          title="Enter 10 digits for Indian numbers or full international format"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm">Email Address *</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email"
                          required 
                          value={formData.email} 
                          onChange={handleInputChange} 
                          className={`mt-2 text-sm ${emailError ? 'border-red-500 focus:border-red-500' : ''}`}
                          placeholder="your@email.com"
                          title="Please enter a valid email address"
                        />
                        {emailError && (
                          <p className="text-red-500 text-xs mt-1">{emailError}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="marketingProblem" className="text-sm">Marketing Problem *</Label>
                      <Textarea 
                        id="marketingProblem" 
                        name="marketingProblem" 
                        required
                        value={formData.marketingProblem} 
                        onChange={handleInputChange} 
                        className="mt-2 text-sm" 
                        rows={3} 
                        placeholder="Describe your marketing challenges..." 
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget" className="text-sm">Budget *</Label>
                        <Input 
                          id="budget" 
                          name="budget" 
                          required 
                          value={formData.budget} 
                          onChange={handleInputChange} 
                          className="mt-2 text-sm" 
                          placeholder="e.g., $5,000 - $10,000"
                        />
                      </div>

                      <div>
                        <Label htmlFor="expectedStartDate" className="text-sm">Expected Start Date *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full mt-2 justify-start text-left font-normal text-sm",
                                !formData.expectedStartDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.expectedStartDate ? (
                                format(formData.expectedStartDate, "PPP")
                              ) : (
                                <span>Pick a start date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={formData.expectedStartDate}
                              onSelect={(date) => setFormData({...formData, expectedStartDate: date})}
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="currentAgency" className="text-sm">Current Agency (Optional)</Label>
                      <Input 
                        id="currentAgency" 
                        name="currentAgency" 
                        value={formData.currentAgency} 
                        onChange={handleInputChange} 
                        className="mt-2 text-sm" 
                        placeholder="Name of your current marketing agency"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="outline" 
                      size="lg" 
                      className={cn(
                        "w-full border-2 transition-all duration-300 text-sm",
                        emailError || !formData.email || !validateEmail(formData.email)
                          ? "border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed opacity-50"
                          : "border-primary text-primary bg-transparent hover:bg-gradient-to-r hover:from-primary hover:via-accent hover:to-primary hover:text-primary-foreground hover:border-primary/20 active:bg-gradient-to-r active:from-primary active:via-accent active:to-primary active:text-primary-foreground"
                      )}
                      disabled={isLoading || !!emailError || !formData.email || !validateEmail(formData.email)}
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
                      setEmailError('');
                      setFormData({
                        name: '',
                        companyName: '',
                        contactNumber: '',
                        email: '',
                        marketingProblem: '',
                        budget: '',
                        expectedStartDate: null,
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