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
    <section id="contact" className="section-padding-tight bg-muted/30 border-t-2 border-accent/30">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-accent text-white px-4 py-2 rounded-full text-sm mb-3">
              <span className="font-semibold">Let's Connect</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Working With <span className="gradient-text">Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              We pride ourselves on being a business savvy media house
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left side - Contact info and CTA */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Ready to Transform Your Brand?
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Let's discuss how Boss Wallah Media can help you achieve your marketing goals.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground text-sm">18M+ engaged audience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground text-sm">330M+ monthly views</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-highlight rounded-full"></div>
                  <span className="text-muted-foreground text-sm">6 languages expertise</span>
                </div>
              </div>

              <Button 
                variant="cta" 
                size="lg"
                className="text-base px-6 py-3 h-auto mb-4 bg-gradient-primary text-white hover:opacity-90"
                onClick={() => window.open('https://calendly.com/bosswallah', '_blank')}
              >
                Book a Call
              </Button>
            </div>

            {/* Right side - Compact contact form */}
            <div className="bg-gradient-card rounded-2xl p-6 shadow-glow border border-primary/30">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 h-10"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-sm">Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1 h-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="problem" className="text-sm">Marketing Challenge</Label>
                  <Textarea
                    id="problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleInputChange}
                    className="mt-1"
                    rows={2}
                    placeholder="Brief description..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget" className="text-sm">Budget</Label>
                    <Input
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="mt-1 h-10"
                      placeholder="₹5-10 Lakhs"
                    />
                  </div>
                  <div>
                    <Label htmlFor="startDate" className="text-sm">Start Date</Label>
                    <Input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="mt-1 h-10"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-accent text-white hover:opacity-90 h-10"
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