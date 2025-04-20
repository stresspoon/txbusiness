import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="overflow-hidden">
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="w-full flex-shrink-0 snap-center px-4 md:px-6 transition-all duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/5 border-white/10 mx-auto max-w-3xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-2xl">★★★★★</div>
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-110" : "bg-white/30"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}