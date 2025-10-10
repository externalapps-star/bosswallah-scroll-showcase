import { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
            {/* Calendly inline widget */}
            <div className="w-full max-w-4xl">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/d/cw48-mxp-ckx" 
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;