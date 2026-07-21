'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ChevronRight, ChevronLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from '@/components/ThemeProvider';

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  github: string;
  live: string;
  useThemeColor: boolean;
  images: string[];
}

function ProjectGallery({ images }: { images: string[] }) {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(0);
  const next = (e: React.MouseEvent) => { 
    if (images.length === 0) return;
    e.stopPropagation(); 
    setDir(1); 
    setCur(p => (p + 1) % images.length); 
  };
  const prev = (e: React.MouseEvent) => { 
    if (images.length === 0) return;
    e.stopPropagation(); 
    setDir(-1); 
    setCur(p => (p - 1 + images.length) % images.length); 
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center p-8" style={{ color: 'var(--fg-3)' }}>
          Screenshots coming soon
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group/gallery overflow-hidden">
      <AnimatePresence initial={false} custom={dir} mode="wait">
        <motion.div key={cur} custom={dir}
          initial={{ opacity: 0, x: dir > 0 ? 60 : -60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir > 0 ? -60 : 60 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0">
          <Image src={images[cur]} alt={`Screenshot ${cur + 1}`} fill className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw" priority={cur === 0} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-all z-20 backdrop-blur-md text-white" style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover/gallery:opacity-100 transition-all z-20 backdrop-blur-md text-white" style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 rounded-full text-[10px] font-bold text-white/50 backdrop-blur-md" style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {cur + 1} / {images.length}
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.slice(0, Math.min(images.length, 8)).map((_, i) => (
              <button key={i} onClick={e => { e.stopPropagation(); setCur(i); }} className="h-1 rounded-full transition-all duration-300"
                style={{ width: i === cur ? '24px' : '6px', background: i === cur ? 'var(--accent)' : 'rgba(255,255,255,0.25)', boxShadow: i === cur ? '0 0 8px var(--accent)' : 'none' }} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const isEven = index % 2 === 0;
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const cardBg = 'var(--bg-card)';
  const cardBd = 'var(--border)';
  const cardSh = 'none';
  const titleFg = 'var(--fg)';
  const tagline = 'var(--fg-3)';
  const descFg = 'var(--fg-2)';
  const featBg = 'var(--bg-card)';
  const featBd = 'var(--border)';
  const featFg = 'var(--fg-2)';
  const ghFg = 'var(--fg-3)';

  return (
    <motion.div ref={ref} style={{ opacity, y }} className="mb-24 last:mb-0">
      <div className="relative rounded-3xl overflow-hidden group transition-all duration-500 hover:-translate-y-1"
        style={{ background: cardBg, border: `1px solid ${cardBd}`, boxShadow: cardSh }}>
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 60px var(--accent-bg),0 0 60px var(--accent-bg)' }}
        />

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}>
          {/* Image */}
          <div className={`relative aspect-[16/10] lg:aspect-auto overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'}`} style={{ minHeight: '300px' }}>
            <div className="absolute inset-0 z-10 pointer-events-none"
              style={{ background: isEven ? 'linear-gradient(to left,transparent 60%,var(--accent-bg) 100%)' : 'linear-gradient(to right,transparent 60%,var(--accent-bg) 100%)' }}
            />
            <ProjectGallery images={project.images} />
          </div>

          {/* Content */}
          <div className={`p-8 md:p-12 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-3 mb-5">
              <span className="text-5xl font-black opacity-10 select-none" style={{ color: 'var(--accent)' }}>{project.index}</span>
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase" style={{ color: 'var(--accent)' }}>{project.subtitle}</span>
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-2 transition-colors" style={{ color: titleFg }}>{project.title}</h3>
            <p className="text-sm font-medium mb-5" style={{ color: tagline }}>{project.tagline}</p>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: descFg }}>{project.description}</p>

            {/* Problem / Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[{ label: 'Problem', content: project.problem, color: '#ef4444' }, { label: 'Solution', content: project.solution, color: 'var(--accent)' }].map(item => (
                <div key={item.label} className="rounded-xl p-3"
                  style={{ background: item.label === 'Problem' ? `${item.color}08` : 'var(--accent-bg)', border: item.label === 'Problem' ? `1px solid ${item.color}20` : '1px solid var(--accent-border)' }}>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5" style={{ color: item.color }}>{item.label}</div>
                  <p className="text-xs leading-relaxed" style={{ color: descFg }}>{item.content}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.features.map(f => (
                <span key={f} className="px-2.5 py-1 rounded-md text-[11px] font-medium"
                  style={{ background: featBg, border: `1px solid ${featBd}`, color: featFg }}>{f}</span>
              ))}
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map(t => (
                <span key={t} className="px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider"
                  style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}>{t}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                style={{ background: 'var(--accent)', color: isDark ? '#0a0a0a' : '#ffffff', border: '1px solid var(--accent-border)' }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px var(--accent-bg)' }} whileTap={{ scale: 0.98 }}>
                Explore Project
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </motion.a>

              {project.live ? (
                <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="group/live flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                  style={{
                    background: 'var(--accent-bg)',
                    border: '1px solid var(--accent-border)',
                    color: 'var(--accent)',
                  }}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
              ) : (
                <span className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    color: 'var(--fg-4)',
                  }}>
                  <ExternalLink className="w-4 h-4" />
                  Live Demo Soon
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
