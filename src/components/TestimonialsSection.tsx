import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [{
    quote: "Boss Wallah Media transformed our regional market presence completely. Their understanding of local audiences is unmatched.",
    author: "Marketing Director",
    company: "Leading E-commerce Brand",
    rating: 5
  }, {
    quote: "The ROI we achieved through their campaigns exceeded all expectations. Professional, creative, and results-driven.",
    author: "Brand Manager",
    company: "Fintech Startup",
    rating: 5
  }, {
    quote: "Their multi-language content strategy helped us connect with audiences we never reached before.",
    author: "CMO",
    company: "Healthcare Platform",
    rating: 5
  }];

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 text-foreground whitespace-nowrap">
            Customer <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from brands that have achieved remarkable success with our campaigns
          </p>
        </div>

        {/* Client Logos Section */}
        <div className="mb-16">
          
        </div>

        {/* Testimonials Grid with Auto-scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isMiddle = index === 1;
            const isActive = index === currentIndex;
            
            return (
              <div 
                key={index} 
                className={`group relative transition-all duration-700 transform ${
                  isActive ? 'scale-105 z-10' : 'scale-100'
                } ${isMiddle ? 'md:scale-110' : ''}`}
              >
                {/* Animated Border for Middle Card */}
                {isMiddle && (
                  <div className="absolute inset-0 rounded-3xl opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient-x p-0.5">
                      <div className="w-full h-full bg-card rounded-3xl"></div>
                    </div>
                  </div>
                )}
                
                <div className={`relative z-10 bg-card rounded-3xl p-8 shadow-soft transition-all duration-700 border h-full flex flex-col ${
                  isMiddle 
                    ? 'border-transparent hover:shadow-brand' 
                    : isActive 
                      ? 'border-primary/40 shadow-brand hover:shadow-brand' 
                      : 'border-border hover:shadow-brand'
                } ${isActive ? 'bg-gradient-to-br from-primary/5 to-accent/5' : ''}`}>
                  {/* Rating */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => 
                      <div key={i} className={`w-5 h-5 text-lg transition-colors duration-300 ${
                        isActive || isMiddle ? 'text-primary' : 'text-accent'
                      }`}>★</div>
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className={`mb-6 leading-relaxed italic flex-1 text-xs md:text-lg transition-colors duration-300 ${
                    isActive || isMiddle ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-border pt-6 mt-auto">
                    <div className={`text-base md:text-base font-semibold transition-colors duration-300 ${
                      isActive || isMiddle ? 'text-primary' : 'text-foreground'
                    }`}>{testimonial.author}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Indicator Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;