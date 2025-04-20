import { motion } from "framer-motion";

interface SectionDividerProps {
  icon: string;
}

export default function SectionDivider({ icon }: SectionDividerProps) {
  return (
    <div className="relative h-24 my-12 overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10"></div>
      <motion.div 
        className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent"
        initial={{ left: "-100%" }}
        animate={{ left: "100%" }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
      />
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#131313] px-8 py-2 z-10 rounded-full border border-white/20">
        <motion.span 
          className="text-3xl font-bold"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.span>
      </div>
    </div>
  );
}
