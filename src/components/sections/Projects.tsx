'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: "orderflow",
    title: "OrderFlow: E-Commerce Analytics",
    subtitle: "End-to-End Sales & Operations Pipeline",
    description: "Analyzed 100K+ records using Python & SQL. Built interactive Power BI dashboards to identify revenue drivers and operational bottlenecks.",
    tech: ["Python", "SQL", "PostgreSQL", "Power BI", "Excel"],
    github: "https://github.com/Jatinchhabra22/OrderFlow-End-to-End-E-Commerce-Sales-Operations-Analytics",
    color: "from-purple-500/20 to-blue-500/20",
    images: [
      "/projects/orderflow-1.png",
      "/projects/orderflow-2.png",
      "/projects/orderflow-3.png",
      "/projects/orderflow-4.png",
      "/projects/orderflow-5.png"
    ]
  },
  {
    id: "swiggy",
    title: "Swiggy Sales & Performance",
    subtitle: "FoodTech Delivery Analytics Solution",
    description: "City & restaurant-level sales analysis. Identified demand patterns and growth opportunities using SQL and Power BI.",
    tech: ["Python", "SQL", "PostgreSQL", "Power BI"],
    github: "https://github.com/Jatinchhabra22/Swiggy-Food-Delivery-Analytics",
    color: "from-orange-500/20 to-red-500/20",
    images: [
      "/projects/swiggy-1.png",
      "/projects/swiggy-2.png",
      "/projects/swiggy-3.png",
      "/projects/swiggy-4.png",
      "/projects/swiggy-5.png"
    ]
  },
  {
    id: "pharma",
    title: "AI Pharma Decision System",
    subtitle: "Data Science & Predictive Modeling",
    description: "Advanced predictive system for pharmaceutical decision-making. Utilizing ML algorithms to optimize supply chain and demand forecasting.",
    tech: ["Machine Learning", "Deep Learning", "NLP", "Data Science"],
    github: "https://github.com/Jatinchhabra22/AI-PHARMA-DECISION-SYSTEM",
    color: "from-cyan-500/20 to-emerald-500/20",
    images: [
      "/projects/pharma-1.png",
      "/projects/pharma-2.png",
      "/projects/pharma-3.png",
      "/projects/pharma-4.png",
      "/projects/pharma-5.png",
      "/projects/pharma-6.png",
      "/projects/pharma-7.png",
      "/projects/pharma-8.png",
      "/projects/pharma-9.png",
      "/projects/pharma-11.png",
      "/projects/pharma-12.png",
      "/projects/pharma-13.png"
    ]
  }
];

function ProjectGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-full bg-white/5 flex flex-col items-center justify-center p-8">
        <div className="text-white/20 font-bold text-xl mb-4 italic tracking-tight">Case Study Preview</div>
        <div className="w-full h-full border border-white/10 rounded-lg bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
          <span className="text-xs text-white/10 uppercase tracking-widest">Coming Soon</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group/gallery overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image 
              src={images[currentIndex]} 
              alt={`Project screenshot ${currentIndex + 1}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={currentIndex === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Manual Navigation Controls */}
      {images.length > 1 && (
        <>
          <div className="absolute inset-y-0 left-0 flex items-center p-4 opacity-0 group-hover/gallery:opacity-100 transition-opacity z-20">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-black/50 border border-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center p-4 opacity-0 group-hover/gallery:opacity-100 transition-opacity z-20">
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-black/50 border border-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Screenshot Counter Overlay */}
          <div className="absolute bottom-6 right-6 z-20 px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white/60">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}

      {/* Progress Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-8 bg-white opacity-100' : 'w-2 bg-white/30 opacity-30 hover:opacity-60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0 0 0)"]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className="relative mb-32 last:mb-0 w-full"
    >
      <div className={`glass-card p-6 md:p-12 border-white/5 overflow-hidden group hover:border-white/20 transition-colors duration-500`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[1px] bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Project {index + 1}</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 tracking-tight">
                {project.title}
              </h3>
              <p className="text-lg text-white/40 mb-8 font-medium tracking-wide uppercase flex items-center gap-2">
                {project.subtitle}
              </p>
              <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-xl">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-12">
                {project.tech.map((t: string) => (
                  <span key={t} className="px-5 py-2 rounded-full border border-white/5 bg-white/5 text-[11px] font-bold text-white/40 uppercase tracking-widest hover:border-primary/30 hover:text-white transition-all">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-8">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 bg-white text-background rounded-full font-bold hover:bg-white/90 transition-all group/btn active:scale-95"
                >
                  Explore Case Study
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all group/git"
                >
                  <Github className="w-6 h-6" />
                  <span className="border-b border-transparent group-hover/git:border-white">Github</span>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 shadow-2xl">
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-60 transition-opacity duration-700`} />
            
            <motion.div 
              style={{ clipPath }}
              className="w-full h-full relative"
            >
              <ProjectGallery images={project.images} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="relative py-32 w-full min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] uppercase mb-4"
          >
            Featured Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Selected Projects
          </motion.h2>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
