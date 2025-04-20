import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isLast?: boolean;
}

export default function FAQItem({ question, answer, isLast = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center py-4 focus:outline-none group"
      >
        <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-yellow-400" />
        ) : (
          <ChevronDown className="h-6 w-6 text-white/70" />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-300 py-4 pl-4 border-l-2 border-white/20">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!isLast && <Separator className="mt-2 bg-white/10" />}
    </div>
  );
}
