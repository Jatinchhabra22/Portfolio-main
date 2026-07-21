'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function Loader() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return Math.min(p + Math.random() * 18 + 4, 100);
      });
    }, 80);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  const name = ['J', 'A', 'T', 'I', 'N', ' ', 'C', 'H', 'H', 'A', 'B', 'R', 'A'];
  const jcColor = isDark ? '#4ade80' : '#111111';

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'var(--bg)' }}
        >
          {/* Glow orbs */}
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }} className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px]"
              style={{ background: 'radial-gradient(circle,rgba(139,92,246,0.18) 0%,transparent 70%)' }}
            />
            <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full blur-[100px]"
              style={{ background: 'radial-gradient(circle,rgba(6,182,212,0.10) 0%,transparent 70%)' }}
            />
          </motion.div>

          {/* Grid */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(139,92,246,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.08) 1px,transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative flex flex-col items-center gap-8 z-10">
            {/* Logo mark */}
            <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{ background: isDark ? 'linear-gradient(135deg,rgba(139,92,246,0.22),rgba(6,182,212,0.12))' : 'rgba(0,0,0,0.05)', border: isDark ? '1px solid rgba(139,92,246,0.28)' : '1px solid rgba(0,0,0,0.1)' }}>
              <span className="text-2xl font-black" style={{ color: jcColor }}>JC</span>
            </motion.div>

            {/* Name */}
            <div className="overflow-hidden flex gap-[1px]">
              {name.map((char, i) => (
                <motion.span key={i}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.05 * i + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`text-2xl md:text-3xl font-black tracking-[0.12em] uppercase ${char === ' ' ? 'w-3' : ''}`}
                  style={{
                    color: char === ' ' ? 'transparent' : 'var(--fg)',
                    textShadow: i < 5 ? '0 0 20px rgba(139,92,246,0.4)' : '0 0 20px rgba(6,182,212,0.3)',
                  }}>
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-[10px] font-semibold tracking-[0.5em] uppercase"
              style={{ color: 'var(--fg-subtle)' }}>
              AI · ML · Data Science
            </motion.p>

            {/* Progress */}
            <div className="w-[240px]">
              <div className="w-full h-[2px] rounded-full overflow-hidden"
                style={{ background: 'var(--border)' }}>
                <div className="h-full rounded-full transition-all duration-100"
                  style={{
                    width: `${Math.min(progress, 100)}%`,
                    background: 'linear-gradient(90deg,var(--primary),var(--secondary))',
                    boxShadow: '0 0 10px rgba(139,92,246,0.5)',
                  }}
                />
              </div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="flex justify-between mt-2">
                <span className="text-[9px] font-mono tracking-widest" style={{ color: 'var(--fg-faint)' }}>INITIALIZING</span>
                <span className="text-[9px] font-mono" style={{ color: 'var(--fg-faint)' }}>{Math.min(Math.round(progress), 100)}%</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
