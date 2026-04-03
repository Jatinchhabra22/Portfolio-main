'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const staticNodes = [
    { top: "10%", left: "5%", size: "w-2 h-2" },
    { top: "40%", left: "15%", size: "w-1 h-1" },
    { top: "80%", left: "8%", size: "w-3 h-3" },
    { top: "20%", right: "10%", size: "w-1.5 h-1.5" },
    { top: "60%", right: "5%", size: "w-2.5 h-2.5" },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center py-32 overflow-hidden">
      {/* Static Decorative Nodes */}
      {staticNodes.map((node, i) => (
        <div 
          key={i} 
          className={`absolute ${node.size} bg-white/10 rounded-full ${node.top || ""} ${node.left || ""} ${node.right || ""} pointer-events-none hidden lg:block`} 
        />
      ))}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div style={{ y, opacity }} className="relative">
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
              A motivated <br />
              <span className="text-white/40 italic font-medium">aspiring</span> <br />
              Data Scientist & Analyst
            </h2>
            <div className="flex flex-wrap gap-4 mb-10">
              {["Data Analytics", "Machine Learning", "NLP", "Deep Learning", "Python"].map((skill, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 border-white/10"
          >
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
              I am a <span className="text-white font-bold">Data Science enthusiast</span> with hands-on experience in 
              end-to-end analytics projects. I specialize in turning complex datasets into 
              strategic business insights.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Currently pursuing a B.Tech in Computer Science & Engineering (Data Science), 
              I am deeply passionate about EDA, feature engineering, and building robust predictive models. 
              My expertise spans from classical statistics to advanced deep learning techniques.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
    </section>
  );
}
