import { motion } from "framer-motion";

interface SectionDividerProps {
  icon: string;
}

export default function SectionDivider({ icon }: SectionDividerProps) {
  return (
    <div className="relative h-16 my-8 overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10"></div>
      <motion.div 
        className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"
        initial={{ left: "-100%" }}
        animate={{ left: "100%" }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
      />
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#131313] px-6 z-10">
        <motion.span 
          className="text-xl font-bold"
          animate={{ opacity: [0.5, 1, 0.5] }}
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
