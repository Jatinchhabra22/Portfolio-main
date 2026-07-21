'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Eye } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function ResumeViewer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const overlayBg = isDark ? 'rgba(10,10,10,0.92)' : 'rgba(242,237,232,0.92)';
  const cardBg = isDark ? '#161616' : '#ffffff';
  const cardBd = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.09)';
  const headerBg = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)';
  const headerBd = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const titleFg = isDark ? '#f0f0f0' : '#0f0f0f';
  /* Subtle button matching site accent */
  const btnBg = isDark ? '#86efac' : '#111111';
  const btnColor = isDark ? '#0a0a0a' : '#ffffff';
  const closeBd = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.09)';
  const closeFg = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.50)';
  const contentBg = isDark ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.05)';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
          style={{ background: overlayBg, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          <motion.div
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-full rounded-3xl overflow-hidden flex flex-col"
            style={{ background: cardBg, border: `1px solid ${cardBd}`, boxShadow: isDark ? '0 32px 80px rgba(0,0,0,0.7)' : '0 32px 80px rgba(0,0,0,0.15)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 md:p-6 shrink-0"
              style={{ background: headerBg, borderBottom: `1px solid ${headerBd}` }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}>
                  <Eye style={{ color: 'var(--accent)', width: '18px', height: '18px' }} />
                </div>
                <h3 className="text-base font-bold" style={{ color: titleFg }}>Resume Preview</h3>
              </div>

              <div className="flex items-center gap-3">
                <a href="/resume.pdf" download
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-[1.03] active:scale-[0.97]"
                  style={{ background: btnBg, color: btnColor, boxShadow: `0 3px 10px ${isDark ? 'rgba(134,239,172,0.20)' : 'rgba(0,0,0,0.18)'}` }}>
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
                <button onClick={onClose}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-105"
                  style={{ background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', border: `1px solid ${closeBd}`, color: closeFg }}>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* PDF viewer */}
            <div className="flex-1 overflow-auto p-4 md:p-8 flex justify-center items-start"
              style={{ background: contentBg }}>
              <div className="w-full max-w-4xl aspect-[1/1.414] bg-white shadow-2xl rounded-lg overflow-hidden relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: '#f8f8f8' }}>
                    <div className="w-10 h-10 rounded-full border-4 animate-spin"
                      style={{ borderColor: 'rgba(134,239,172,0.2)', borderTopColor: 'var(--accent)' }}
                    />
                  </div>
                )}
                <iframe src="/resume.pdf#toolbar=0" className="w-full h-full border-none"
                  title="Jatin Chhabra Resume" onLoad={() => setIsLoading(false)} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
