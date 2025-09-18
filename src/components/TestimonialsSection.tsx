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
    <section id="testimonials" className="section-padding-tight bg-card border-t-2 border-primary/30">
      <div className="container-custom">
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm mb-3">
            <span className="font-semibold">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Customer <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from brands that achieved remarkable success with our campaigns
          </p>
        </div>


        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-card rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all duration-500 border h-full flex flex-col ${
                index % 2 === 0 ? 'border-primary/30' : 'border-accent/30'
              }`}
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-3 h-3 text-accent text-sm">★</div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground mb-4 leading-relaxed italic flex-1 text-sm">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-primary/20 pt-4 mt-auto">
                <div className="font-semibold text-foreground text-sm">{testimonial.author}</div>
                <div className="text-xs text-primary font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;