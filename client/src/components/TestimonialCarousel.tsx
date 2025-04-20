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
    }, 8000); // 더 길게 표시되도록 타이머 증가
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="overflow-hidden">
      <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="w-full flex-shrink-0 snap-center px-4 md:px-6 transition-all duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/5 border-white/10 mx-auto max-w-4xl">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center mb-6">
                    <div className="text-yellow-400 text-2xl">★★★★★</div>
                  </div>
                  <p className="text-lg md:text-xl mb-8 italic leading-relaxed sm:text-base">"{testimonial.quote}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="font-semibold text-lg">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}