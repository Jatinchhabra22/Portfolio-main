'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ResumeViewer from './ResumeViewer';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-4 bg-background/80 backdrop-blur-lg border-b border-white/5' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => scrollTo(e, 'home')}
            className="text-2xl font-bold tracking-tighter uppercase"
          >
            JC<span className="text-primary">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-10">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollTo(e, item)}
                className="text-sm font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="px-6 py-2.5 bg-white text-background rounded-full font-bold text-sm hover:bg-white/90 transition-all active:scale-95"
            >
              Resume
            </button>
          </div>
          
          {/* Mobile Menu Button Placeholder */}
          <div className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 cursor-pointer">
            <div className="w-full h-0.5 bg-white" />
            <div className="w-3/4 h-0.5 bg-white ml-auto" />
          </div>
        </div>
      </motion.nav>

      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
