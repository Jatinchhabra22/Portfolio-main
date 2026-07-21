'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import ResumeViewer from './ResumeViewer';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Tech Stack', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const ids = ['contact', 'projects', 'skills', 'experience', 'about', 'home'];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y + 140) { setActiveSection(id); break; }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${id}`);
    }
  };

  /* ── theme-aware tokens ── */
  const navBg = scrolled
    ? isDark ? 'rgba(17,17,17,0.88)' : 'rgba(245,240,235,0.92)'
    : isDark ? 'rgba(17,17,17,0.60)' : 'rgba(245,240,235,0.70)';
  const navBd = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const navSh = scrolled ? (isDark ? '0 4px 24px rgba(0,0,0,0.5)' : '0 4px 24px rgba(0,0,0,0.08)') : 'none';
  const logoFg = isDark ? '#f2f2f2' : '#111111';
  const linkFg = isDark ? 'rgba(242,242,242,0.45)' : '#777777';
  const linkAct = isDark ? '#f2f2f2' : '#111111';
  const activePill = isDark ? 'rgba(134,239,172,0.12)' : 'rgba(0,0,0,0.07)';
  const activePillBd = isDark ? 'rgba(134,239,172,0.25)' : 'rgba(0,0,0,0.12)';
  const accent = isDark ? '#86efac' : '#111111';
  const btnBg = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const btnBd = isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.10)';
  const btnFg = isDark ? 'rgba(242,242,242,0.60)' : '#666666';
  const mobBg = isDark ? 'rgba(17,17,17,0.97)' : 'rgba(245,240,235,0.97)';
  const mobBd = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.09)';
  const mobFg = isDark ? 'rgba(242,242,242,0.55)' : '#555555';
  const divC = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';

  return (
    <>
      {/* ALWAYS visible — no hide on scroll */}
      <nav className="fixed top-0 left-0 w-full z-50"
        style={{ transition: 'padding 0.3s' }}>
        <div className={`${scrolled ? 'py-2' : 'py-4'} transition-[padding] duration-300`}>
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center px-5 py-2.5 rounded-2xl"
              style={{
                background: navBg,
                border: `1px solid ${navBd}`,
                boxShadow: navSh,
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                transition: 'background 0.3s, box-shadow 0.3s',
              }}>

              {/* Logo */}
              <a href={isHome ? "#home" : "/"} 
                onClick={e => {
                  e.preventDefault();
                  if (isHome) {
                    scrollTo(e, 'home');
                  } else {
                    router.push("/");
                  }
                }}
                className="flex items-center gap-2.5" style={{ textDecoration: 'none' }}>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black"
                  style={{ background: isDark ? 'var(--accent-bg)' : 'rgba(0,0,0,0.05)', border: isDark ? '1px solid var(--accent-border)' : '1px solid rgba(0,0,0,0.1)', color: accent }}>
                  JC
                </div>
                <span className="text-sm font-bold tracking-tight hidden sm:block" style={{ color: logoFg }}>
                  Jatin<span style={{ color: accent }}>.</span>
                </span>
              </a>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-0.5">
                {navLinks.map(({ label, id }) => {
                  const isActive = activeSection === id;
                  return (
                    <a key={id} href={`#${id}`} onClick={e => scrollTo(e, id)}
                      className="relative px-3.5 py-1.5 rounded-xl text-sm font-medium transition-colors duration-150"
                      style={{ color: isActive ? linkAct : linkFg, textDecoration: 'none' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = linkAct}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = isActive ? linkAct : linkFg}>
                      {isActive && (
                        <motion.div layoutId="nav-pill" className="absolute inset-0 rounded-xl"
                          style={{ background: activePill, border: `1px solid ${activePillBd}` }}
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                      )}
                      <span className="relative z-10">{label}</span>
                    </a>
                  );
                })}
              </div>

              {/* Right */}
              <div className="hidden md:flex items-center gap-2">
                {/* Theme toggle */}
                <button onClick={toggleTheme} aria-label="Toggle theme"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-105"
                  style={{ background: btnBg, border: `1px solid ${btnBd}`, color: btnFg }}>
                  <AnimatePresence mode="wait" initial={false}>
                    {isDark ? (
                      <motion.div key="sun" initial={{ rotate: -80, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 80, opacity: 0 }} transition={{ duration: 0.18 }}>
                        <Sun className="w-3.5 h-3.5" />
                      </motion.div>
                    ) : (
                      <motion.div key="moon" initial={{ rotate: 80, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -80, opacity: 0 }} transition={{ duration: 0.18 }}>
                        <Moon className="w-3.5 h-3.5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                <button onClick={() => setIsResumeOpen(true)}
                  className="px-3.5 py-2 text-sm font-medium rounded-xl transition-all"
                  style={{ color: btnFg, background: 'transparent' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = btnBg}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}>
                  Resume
                </button>

                <a href="#contact" onClick={e => scrollTo(e, 'contact')}
                  className="px-4 py-2 rounded-xl text-sm font-semibold transition-all hover:-translate-y-px"
                  style={{ background: accent, color: isDark ? '#0a0a0a' : '#ffffff', boxShadow: `0 3px 12px ${accent}30`, textDecoration: 'none' }}>
                  Let&apos;s Connect
                </a>
              </div>

              {/* Mobile */}
              <div className="md:hidden flex items-center gap-2">
                <button onClick={toggleTheme} className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: btnBg, border: `1px solid ${btnBd}`, color: btnFg }}>
                  {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                </button>
                <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-xl"
                  style={{ background: btnBg, border: `1px solid ${btnBd}`, color: btnFg }}>
                  {mobileOpen ? <X style={{ width: 18, height: 18 }} /> : <Menu style={{ width: 18, height: 18 }} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mx-6 mt-1 rounded-2xl overflow-hidden"
              style={{ background: mobBg, border: `1px solid ${mobBd}`, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map(({ label, id }, i) => (
                  <motion.a key={id} href={`#${id}`} onClick={e => scrollTo(e, id)}
                    initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                    className="px-4 py-3 rounded-xl text-sm font-medium transition-all"
                    style={{ color: mobFg, textDecoration: 'none' }}>
                    {label}
                  </motion.a>
                ))}
                <div className="mt-2 pt-3 flex flex-col gap-2" style={{ borderTop: `1px solid ${divC}` }}>
                  <button onClick={() => { setIsResumeOpen(true); setMobileOpen(false); }}
                    className="px-4 py-3 text-sm font-medium text-left rounded-xl"
                    style={{ color: mobFg }}>View Resume</button>
                  <a href="#contact" onClick={e => scrollTo(e, 'contact')}
                    className="px-4 py-3 rounded-xl text-sm font-semibold text-center"
                    style={{ background: 'var(--accent)', color: isDark ? '#0a0a0a' : '#ffffff', textDecoration: 'none' }}>
                    Let&apos;s Connect
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
