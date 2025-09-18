import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    problem: '',
    budget: '',
    startDate: '',
    agency: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Working With <span className="gradient-text">Us</span>
          </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We pride ourselves on being a business savvy media house that understands 
              that we need to deliver what matters to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Contact info and CTA */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Ready to Transform Your Brand?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how Boss Wallah Media can help you achieve your marketing goals 
                across India's diverse regional markets.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">18M+ engaged audience across platforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">330M+ monthly video views</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">6 languages and regional expertise</span>
                </div>
              </div>

              <Button 
                variant="cta" 
                size="lg"
                className="text-lg px-8 py-6 h-auto mb-6"
                onClick={() => window.open('https://calendly.com/bosswallah', '_blank')}
              >
                Book a Call
              </Button>
            </div>

            {/* Right side - Contact form */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
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
                  variant="default" 
                  size="lg"
                  className="w-full"
                >
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;