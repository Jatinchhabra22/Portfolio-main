'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Eye } from 'lucide-react';
import { useState } from 'react';

export default function ResumeViewer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-background/90 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl h-full bg-card border border-white/10 rounded-3xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">Resume Preview</h3>
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href="/resume.pdf" 
                  download 
                  className="flex items-center gap-2 px-5 py-2.5 bg-white text-background rounded-full font-bold text-sm hover:bg-white/90 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
                <button 
                  onClick={onClose}
                  className="p-2.5 rounded-full border border-white/10 hover:bg-white/5 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto bg-black/40 p-4 md:p-8 flex justify-center">
              <div className="w-full max-w-4xl aspect-[1/1.414] bg-white shadow-2xl rounded-sm overflow-hidden relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-card">
                    <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                  </div>
                )}
                <iframe 
                  src="/resume.pdf#toolbar=0" 
                  className="w-full h-full border-none"
                  title="Resume PDF"
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
