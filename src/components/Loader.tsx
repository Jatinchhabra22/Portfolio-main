'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: [0.77, 0, 0.175, 1] }
          }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-[300px] h-[2px] bg-white/10 relative overflow-hidden mb-8"
            >
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  repeat: Infinity
                }}
                className="absolute top-0 bottom-0 w-[40%] bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </motion.div>

            <div className="overflow-hidden flex gap-2 text-2xl md:text-3xl font-bold tracking-tighter uppercase">
              {["J", "A", "T", "I", "N", "", "C", "H", "H", "A", "B", "R", "A"].map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.1 * i,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={char === "" ? "w-4" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-4 text-xs font-bold tracking-[0.4em] uppercase text-white/30"
            >
              Crafting Insights
            </motion.div>
          </div>

          {/* Background Elements */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
