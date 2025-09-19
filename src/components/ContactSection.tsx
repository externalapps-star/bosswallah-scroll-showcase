import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    problem: '',
    budget: '',
    startDate: '',
    agency: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setIsSubmitted(true);
  };
  return <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's Start <span className="gradient-text">Talking</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We pride ourselves on being a business savvy media house that understands 
              that we need to deliver what matters to our customers.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Centered Contact form */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border max-w-2xl w-full">
              {!isSubmitted ? <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" name="company" required value={formData.company} onChange={handleInputChange} className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="problem">Marketing Problem (Optional)</Label>
                    <Textarea id="problem" name="problem" value={formData.problem} onChange={handleInputChange} className="mt-2" rows={3} placeholder="Tell us about your marketing challenges..." />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">Budget (Optional)</Label>
                      <Input id="budget" name="budget" value={formData.budget} onChange={handleInputChange} className="mt-2" placeholder="e.g. ₹5-10 Lakhs" />
                    </div>

                    <div>
                      <Label htmlFor="startDate">Expected Start Date (Optional)</Label>
                      <Input id="startDate" name="startDate" type="date" value={formData.startDate} onChange={handleInputChange} className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="agency">Current Marketing Agency (Optional)</Label>
                    <Input id="agency" name="agency" value={formData.agency} onChange={handleInputChange} className="mt-2" placeholder="Do you currently work with any agency?" />
                  </div>

                  <Button type="submit" variant="default" size="lg" className="w-full">
                    DONE
                  </Button>
                </form> : <div className="text-center py-8">
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
                  <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-6">
                    Submit Another Inquiry
                  </Button>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;