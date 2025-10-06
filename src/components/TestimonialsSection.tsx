import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsSection = () => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  
  const testimonials = [
    {
      quote: "When one of the world's largest AI platforms wanted to expand into India, they needed to quickly build awareness among middle-income, business-savvy audiences. Boss Wallah produced over 5,000 UGC-style videos in just two months, delivering authentic local storytelling that helped the brand adapt to cultural nuances and achieve a smooth, high-impact entry into the Indian market.",
      author: "Growth Marketing Leader, India Region",
      company: "Global AI Platform",
      rating: 5
    },
    {
      quote: "A fast-growing insurance broking platform partnered with Boss Wallah to scale their premium business. Through a focused performance-driven campaign, we created a revenue engine that generated ₹15.82 crore in premiums within six months, setting a new benchmark for measurable ROI in their segment.",
      author: "Founder",
      company: "One of India's Top 5 marketing Agencies",
      rating: 5
    },
    {
      quote: "For a consumer brand entering South India, Boss Wallah crafted an intensive three-month multi-channel campaign combining social media storytelling, on-ground activations, and influencer-led engagement. We positioned the launch as a cultural moment rather than just a product introduction, driving massive visibility, high event footfall, and direct customer conversions, which gave the brand strong momentum in a competitive market.",
      author: "Senior Vice President – Marketing",
      company: "Leading Consumer Brand",
      rating: 5
    },
    {
      quote: "India's #1 credit score improvement platform turned to Boss Wallah at the very beginning of their journey. From day one, we built their credibility through strategic video storytelling, thought-leadership content, and long-term audience engagement. Today, they are widely recognized as a trusted name in their category, with Boss Wallah's consistent campaigns forming the foundation of their growth story.",
      author: "Senior Vice President – Marketing",
      company: "Credit Technology Platform",
      rating: 5
    },
    {
      quote: "A fintech credit card platform needed to grow its digital presence fast. Boss Wallah launched and optimized their YouTube channel with a steady stream of relatable, value-driven videos. Within four months, the channel grew to 3X subscribers, creating a vibrant community that continues to fuel brand advocacy and conversions.",
      author: "Chief Marketing Officer (CMO)",
      company: "Fintech Credit Card Company",
      rating: 5
    },
    {
      quote: "A leading insurance company sought fresh ways to connect with customers and increase sales. Boss Wallah produced 300 personalized UGC-style influencer videos in just one month, giving the brand relatable content that felt authentic to audiences. The campaign directly boosted customer engagement and delivered a noticeable lift in sales.",
      author: "Vice President – Content & Partnerships",
      company: "Leading Advertising Agency",
      rating: 5
    }
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentGroupIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const totalGroups = Math.ceil(testimonials.length / 3);

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16 mt-4 md:mt-0">
          <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-6 text-foreground whitespace-nowrap">
            Customer <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from brands that have achieved remarkable success with our campaigns
          </p>
        </div>

        {/* Mobile: Single card carousel */}
        <div className="md:hidden relative">
          <button
            onClick={() => setCurrentGroupIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-card border-2 border-border rounded-full p-2 shadow-lg hover:bg-primary hover:text-white transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => setCurrentGroupIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card border-2 border-border rounded-full p-2 shadow-lg hover:bg-primary hover:text-white transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          <div className="px-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentGroupIndex ? 'block' : 'hidden'
                }`}
              >
                <div className="bg-card rounded-3xl p-6 shadow-soft border border-primary/40 min-h-[400px] flex flex-col">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-lg text-primary">★</div>
                    ))}
                  </div>
                  <blockquote className="mb-6 leading-relaxed text-sm text-foreground text-left flex-1">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-4 mt-auto">
                    <div className="text-sm font-semibold text-primary">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3-card carousel */}
        <div className="hidden md:block relative">
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 bg-card border-2 border-border rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition-all"
            aria-label="Previous group"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 bg-card border-2 border-border rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition-all"
            aria-label="Next group"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {Array.from({ length: totalGroups }).map((_, groupIndex) => (
                <div key={groupIndex} className="flex-[0_0_100%] min-w-0">
                  <div className="grid grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.slice(groupIndex * 3, groupIndex * 3 + 3).map((testimonial, index) => {
                      const actualIndex = groupIndex * 3 + index;
                      const isInView = groupIndex === currentGroupIndex;
                      
                      return (
                        <div
                          key={actualIndex}
                          className={`transition-all duration-700 transform ${
                            isInView ? 'scale-100 opacity-100' : 'scale-95 opacity-50'
                          }`}
                        >
                          <div
                            className={`bg-card rounded-3xl p-6 shadow-soft transition-all duration-700 border min-h-[480px] flex flex-col ${
                              isInView
                                ? 'border-primary/40 shadow-brand bg-gradient-to-br from-primary/5 to-accent/5'
                                : 'border-border'
                            }`}
                          >
                            <div className="flex space-x-1 mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-5 h-5 text-lg transition-colors duration-300 ${
                                    isInView ? 'text-primary' : 'text-accent'
                                  }`}
                                >
                                  ★
                                </div>
                              ))}
                            </div>

                            <blockquote
                              className={`mb-6 leading-relaxed text-[12px] text-left flex-1 transition-colors duration-300 ${
                                isInView ? 'text-foreground' : 'text-muted-foreground'
                              }`}
                            >
                              "{testimonial.quote}"
                            </blockquote>

                            <div className="border-t border-border pt-4 mt-auto">
                              <div
                                className={`text-sm font-semibold transition-colors duration-300 ${
                                  isInView ? 'text-primary' : 'text-foreground'
                                }`}
                              >
                                {testimonial.author}
                              </div>
                              <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (emblaApi) emblaApi.scrollTo(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentGroupIndex
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;