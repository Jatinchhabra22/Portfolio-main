'use client';

import { motion } from 'framer-motion';
import { ChevronDown, BarChart3, Database, PieChart, Activity, Eye, Download } from 'lucide-react';
import { useState } from 'react';
import ResumeViewer from '@/components/ResumeViewer';

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dataIcons = [
    { icon: <BarChart3 className="w-5 h-5" />, delay: 0.1, position: "top-[20%] left-[10%]" },
    { icon: <Database className="w-5 h-5" />, delay: 0.3, position: "top-[60%] left-[15%]" },
    { icon: <PieChart className="w-5 h-5" />, delay: 0.5, position: "top-[25%] right-[15%]" },
    { icon: <Activity className="w-5 h-5" />, delay: 0.7, position: "top-[70%] right-[10%]" },
  ];

  const staticLines = [
    { width: "w-[300px]", top: "top-[15%]", left: "left-[-5%]", rotate: "rotate-[15deg]" },
    { width: "w-[400px]", bottom: "bottom-[20%]", right: "right-[-10%]", rotate: "rotate-[-10deg]" },
    { width: "w-[200px]", top: "top-[60%]", left: "left-[5%]", rotate: "rotate-[45deg]" },
  ];

  const staticNodes = [
    { top: "12%", left: "18%", size: "w-1.5 h-1.5" },
    { top: "45%", left: "8%", size: "w-1 h-1" },
    { bottom: "25%", left: "20%", size: "w-2 h-2" },
    { top: "18%", right: "22%", size: "w-1 h-1" },
    { top: "55%", right: "12%", size: "w-1.5 h-1.5" },
    { bottom: "15%", right: "25%", size: "w-2.5 h-2.5" },
  ];

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Static Decorative Lines */}
      {staticLines.map((line, i) => (
        <div 
          key={`line-${i}`} 
          className={`absolute ${line.width} h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent ${line.top || ""} ${line.bottom || ""} ${line.left || ""} ${line.right || ""} ${line.rotate} pointer-events-none hidden lg:block`} 
        />
      ))}

      {/* Static Decorative Nodes */}
      {staticNodes.map((node, i) => (
        <div 
          key={`node-${i}`} 
          className={`absolute ${node.size} bg-white/10 rounded-full ${node.top || ""} ${node.bottom || ""} ${node.left || ""} ${node.right || ""} pointer-events-none hidden lg:block`} 
        />
      ))}

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-glow pointer-events-none" />
      
      {/* Floating Data Icons */}
      {dataIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.3, 0], scale: [0.8, 1, 0.8], y: [0, -20, 0] }}
          transition={{ duration: 4, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${item.position} p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm hidden md:block`}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium tracking-wider uppercase">
            Available for New Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter"
        >
          <motion.span
            animate={{ 
              textShadow: ["0 0 20px rgba(139, 92, 246, 0)", "0 0 20px rgba(139, 92, 246, 0.3)", "0 0 20px rgba(139, 92, 246, 0)"] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            JATIN
          </motion.span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent relative">
            CHHABRA
            <motion.span 
              className="absolute -inset-x-4 -inset-y-2 bg-primary/10 blur-3xl -z-10 rounded-full"
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 leading-relaxed"
        >
          Motivated aspiring <span className="text-white font-bold">Data Scientist & Analyst</span> focused on 
          turning complex datasets into actionable business decisions with high-end precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button 
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-white text-background rounded-full font-bold hover:bg-white/90 transition-all active:scale-95 flex items-center gap-2"
          >
            View Projects
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="px-6 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View Resume
            </button>
            <a 
              href="/resume.pdf" 
              download
              className="p-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm"
              title="Download Resume"
            >
              <Download className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
