'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Loader from '@/components/Loader';
import Nav from '@/components/Nav';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const borderGrad = isDark
    ? 'linear-gradient(to right,transparent,rgba(74,222,128,0.25),transparent)'
    : 'linear-gradient(to right,transparent,rgba(0,0,0,0.10),transparent)';
  const nameColor = 'var(--fg)';
  const metaColor = 'var(--fg-4)';
  const creditColor = 'var(--fg-4)';
  const iconBg = 'var(--bg-card)';
  const iconBd = 'var(--border)';
  const iconFg = 'var(--fg-3)';
  const logoBg = isDark ? 'rgba(74,222,128,0.15)' : 'rgba(0,0,0,0.05)';
  const logoBorder = isDark ? 'rgba(74,222,128,0.30)' : 'rgba(0,0,0,0.12)';
  const logoTextColor = isDark ? '#4ade80' : '#111111';

  return (
    <footer className="relative w-full overflow-hidden">
      <div className="h-px w-full" style={{ background: borderGrad }} />
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black"
              style={{ background: logoBg, border: `1px solid ${logoBorder}` }}>
              <span className="text-xs font-black" style={{ color: logoTextColor }}>JC</span>
            </div>
            <div>
              <span className="text-sm font-bold" style={{ color: nameColor }}>Jatin Chhabra</span>
              <span style={{ color: metaColor }} className="mx-2">·</span>
              <span className="text-xs" style={{ color: metaColor }}>© 2026</span>
            </div>
          </div>

          {/* Credit */}
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-xs text-center" style={{ color: creditColor }}>
            Designed &amp; Developed by{' '}
            <span className="font-semibold" style={{ color: 'var(--fg-3)' }}>
              Jatin Chhabra
            </span>
          </motion.p>

          {/* Social icons + scroll top */}
          <div className="flex items-center gap-2.5">
            {[
              { icon: Github, href: 'https://github.com/Jatinchhabra22', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/jatin-chhabra-2b0455289/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:jatin.chhabra22jc@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                style={{ background: iconBg, border: `1px solid ${iconBd}`, color: iconFg }}>
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
            <button onClick={scrollToTop} aria-label="Scroll to top"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 ml-1"
              style={{ background: iconBg, border: `1px solid ${iconBd}`, color: iconFg }}>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col" style={{ background: 'var(--bg)' }}>
      <div className="fixed inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)', backgroundSize: '64px 64px', opacity: 0.4 }} />
      <Loader />
      <Nav />

      <div className="w-full">
        {/* Home */}
        <div id="home"><Hero /></div>

        {/* About — contains id="skills" inside for Tech Stack nav */}
        <div id="about"><About /></div>

        {/* Experience */}
        <div id="experience"><Experience /></div>

        {/* Projects */}
        <div id="projects"><Projects /></div>

        {/* Contact */}
        <div id="contact"><Contact /></div>
      </div>

      <Footer />
    </main>
  );
}
