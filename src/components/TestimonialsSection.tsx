const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Boss Wallah Media transformed our regional market presence completely. Their understanding of local audiences is unmatched.",
      author: "Marketing Director",
      company: "Leading E-commerce Brand",
      rating: 5
    },
    {
      quote: "The ROI we achieved through their campaigns exceeded all expectations. Professional, creative, and results-driven.",
      author: "Brand Manager",
      company: "Fintech Startup",
      rating: 5
    },
    {
      quote: "Their multi-language content strategy helped us connect with audiences we never reached before.",
      author: "CMO",
      company: "Healthcare Platform",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Customer <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from brands that have achieved remarkable success with our campaigns
          </p>
        </div>

        {/* Client Logos Section */}
        <div className="mb-16">
          <div className="bg-card rounded-3xl p-8 shadow-soft border border-border">
            <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">
              Trusted by Leading Brands
            </h3>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-muted-foreground">
                Working with major brands across e-commerce, fintech, healthcare, and more
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-brand transition-all duration-500 border border-border h-full flex flex-col"
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-accent text-lg">★</div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic flex-1 text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-6 mt-auto">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;