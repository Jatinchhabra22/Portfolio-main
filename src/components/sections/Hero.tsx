'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Download, Eye, MapPin, Github, Linkedin, Mail, ArrowRight, ChevronDown } from 'lucide-react';
import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import ResumeViewer from '@/components/ResumeViewer';
import { useTheme } from '@/components/ThemeProvider';

const coreSkills = ['Python', 'Data Science', 'Data Engineering', 'Data Analytics', 'SQL', 'Deep Learning', 'Generative AI', 'Machine Learning', 'LLMs', 'NLP'];

const floatingTags = [
  { label: 'Data Science', side: 'left', top: '12%' },
  { label: 'Data Engineering', side: 'right', top: '25%' },
  { label: 'AI / ML', side: 'left', top: '44%' },
  { label: 'Analytics', side: 'right', top: '58%' },
  { label: 'Deep Learning', side: 'left', top: '72%' },
  { label: 'Generative AI', side: 'right', top: '85%' },
];

function ProfileCard({ isDark }: { isDark: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-200, 200], [4, -4]), { stiffness: 90, damping: 28 });
  const ry = useSpring(useTransform(mx, [-200, 200], [-4, 4]), { stiffness: 90, damping: 28 });

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  }, [mx, my]);
  const onLeave = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);

  const accent = isDark ? '#86efac' : '#111111';
  const cardBg = isDark ? 'rgba(18,18,18,0.97)' : 'rgba(255,255,255,0.96)';
  const cardBd = isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.09)';
  const cardSh = isDark ? '0 28px 70px rgba(0,0,0,0.70)' : '0 20px 60px rgba(0,0,0,0.10)';
  const nameFg = isDark ? '#f0f0f0' : '#0f0f0f';
  const subFg = isDark ? 'rgba(240,240,240,0.42)' : '#666666';
  const divider = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
  const statLbl = isDark ? 'rgba(240,240,240,0.28)' : '#aaaaaa';
  const metaFg = isDark ? 'rgba(240,240,240,0.28)' : '#aaaaaa';
  const skillBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
  const skillBd = isDark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.09)';
  const skillFg = isDark ? 'rgba(240,240,240,0.55)' : '#444444';
  const photoBd = isDark ? '3px solid #111111' : '3px solid #f2ede8';
  const tagBg = isDark ? 'rgba(18,18,18,0.95)' : 'rgba(255,255,255,0.95)';
  const tagBd = isDark ? 'rgba(134,239,172,0.25)' : 'rgba(0,0,0,0.12)';
  const tagSh = isDark ? '0 4px 16px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.08)';
  const bannerBg = isDark
    ? 'linear-gradient(135deg,#0c1410 0%,#111c14 50%,#111111 100%)'
    : 'linear-gradient(135deg,#e4e0db 0%,#ede9e3 60%,#f0ece8 100%)';
  const pulseDotColor = isDark ? '#4ade80' : '#111111';

  return (
    <div className="relative w-full max-w-[600px] mx-auto" style={{ perspective: '1200px' }}>
      <motion.div ref={ref}
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        onMouseMove={onMove} onMouseLeave={onLeave}
        className="relative">

        {/* Subtle accent border */}
        <div className="absolute -inset-[1px] rounded-[22px] pointer-events-none"
          style={{ background: `linear-gradient(135deg,${accent}28,${accent}08,${accent}22)` }}
        />

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[21px] overflow-hidden"
          style={{ background: cardBg, border: `1px solid ${cardBd}`, boxShadow: cardSh, transform: 'translateZ(16px)' }}>

          {/* Banner */}
          <div className="h-32 relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: bannerBg }} />
            <div className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(${accent}18 1px,transparent 1px),linear-gradient(90deg,${accent}18 1px,transparent 1px)`,
                backgroundSize: '28px 28px', opacity: 0.6,
              }}
            />
            <div className="absolute left-0 right-0 h-[1px] animate-scan"
              style={{ background: `linear-gradient(90deg,transparent,${accent}55,transparent)` }}
            />
          </div>

          {/* Photo */}
          <div className="px-7 -mt-16 pb-2">
            <motion.div
              className="w-36 h-36 rounded-2xl overflow-hidden relative"
              style={{ border: photoBd }}
              animate={{ boxShadow: [`0 0 0 2px ${accent}22`, `0 0 0 5px ${accent}38`, `0 0 0 2px ${accent}22`] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}>
              <Image
                src="/photo.jpeg" alt="Jatin Chhabra" fill
                className="object-cover object-top" sizes="144px" priority
                onError={e => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = 'none';
                  const p = img.parentElement;
                  if (p && !p.querySelector('.jc-fb')) {
                    const fb = document.createElement('div');
                    fb.className = 'jc-fb';
                    Object.assign(fb.style, {
                      width: '100%', height: '100%', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', background: isDark ? '#0c1410' : '#d1fae5',
                      fontSize: '2rem', fontWeight: '900', color: accent,
                      fontFamily: 'DM Sans,system-ui,sans-serif',
                    });
                    fb.textContent = 'JC';
                    p.appendChild(fb);
                  }
                }}
              />
            </motion.div>
          </div>

          {/* Name */}
          <div className="px-7 pt-2 pb-5">
            <h3 className="text-xl font-bold tracking-tight" style={{ color: nameFg }}>Jatin Chhabra</h3>
            <p className="text-sm mt-1 font-medium" style={{ color: subFg }}>AI Engineer · Data Scientist · Data Engineer</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: pulseDotColor }} />
              <span className="text-xs font-medium" style={{ color: accent }}>Available for Opportunities</span>
            </div>
          </div>

          <div className="mx-7 h-px" style={{ background: divider }} />

          {/* Stats */}
          <div className="px-7 py-5 grid grid-cols-3">
            {[{ l: 'Projects', v: '10+' }, { l: 'Internships', v: '3' }, { l: 'Technologies', v: '25+' }].map(s => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-black" style={{ color: accent }}>{s.v}</div>
                <div className="text-[10px] font-medium mt-1 uppercase tracking-wider" style={{ color: statLbl }}>{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mx-7 h-px" style={{ background: divider }} />

          {/* Skills */}
          <div className="px-7 py-5">
            <div className="text-[9px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: metaFg }}>Core Skills</div>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map(t => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: skillBg, border: `1px solid ${skillBd}`, color: skillFg }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="px-7 pb-6">
            <div className="flex items-center gap-2 text-xs" style={{ color: metaFg }}>
              <MapPin className="w-3 h-3" />
              India · B.Tech CSE (Data Science) ·{' '}
              <span style={{ color: accent, fontWeight: 700 }}>9.1 CGPA</span>
            </div>
          </div>
        </motion.div>

        {/* Floating skill tags */}
        {floatingTags.map((tag, i) => (
          <motion.div key={tag.label}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
            className="absolute hidden xl:flex items-center pointer-events-none"
            style={{
              top: tag.top,
              left: tag.side === 'left' ? '-22%' : undefined,
              right: tag.side === 'right' ? '-24%' : undefined,
              animation: `float ${4 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}>
            <span className="px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap"
              style={{
                background: tagBg,
                border: `1px solid ${tagBd}`,
                color: accent,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                boxShadow: tagSh,
              }}>
              {tag.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const accent = isDark ? '#86efac' : '#111111';
  const fg = isDark ? '#f0f0f0' : '#0f0f0f';
  const fgSub = isDark ? 'rgba(240,240,240,0.52)' : '#444444';
  const fgFaint = isDark ? 'rgba(240,240,240,0.35)' : '#888888';
  const btnBg = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const btnBd = isDark ? 'rgba(255,255,255,0.11)' : 'rgba(0,0,0,0.11)';
  const pulseDotColor = isDark ? '#4ade80' : '#111111';

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-center min-h-[88vh] py-8">

          {/* LEFT */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="inline-flex items-center gap-2 text-xs font-medium" style={{ color: fgFaint }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: pulseDotColor }} />
                Available for new opportunities · India
              </div>
            </motion.div>

            {/* Big name */}
            <div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
                className="text-sm font-medium tracking-[0.20em] uppercase mb-2" style={{ color: fgFaint }}>
                Hi, I&apos;m
              </motion.p>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-[0.88] font-black"
                  style={{ fontSize: 'clamp(64px, 8vw, 108px)', letterSpacing: '-0.04em', color: fg }}>
                  Jatin<br />
                  <span style={{ color: accent }}>Chhabra</span>
                </motion.h1>
              </div>
            </div>

            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg leading-relaxed max-w-xl font-light" style={{ color: fgSub }}>
              I build and ship intelligent systems combining{' '}
              <span style={{ color: fg, fontWeight: 500 }}>AI, Machine Learning</span>,{' '}
              <span style={{ color: fg, fontWeight: 500 }}>Data Engineering</span>,{' '}
              <span style={{ color: fg, fontWeight: 500 }}>Generative AI</span> and{' '}
              <span style={{ color: fg, fontWeight: 500 }}>LLMs</span> — turning raw data into scalable products and AI-driven applications that create real business impact.
            </motion.p>

            {/* Socials */}
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }} className="flex items-center gap-3">
              {[
                { icon: Github, href: 'https://github.com/Jatinchhabra22', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/jatin-chhabra-2b0455289/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:jatin.chhabra22jc@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: btnBg, border: `1px solid ${btnBd}`, color: fgFaint }}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52 }} className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: accent, color: isDark ? '#0a0a0a' : '#ffffff', boxShadow: `0 4px 14px ${isDark ? 'rgba(134,239,172,0.25)' : 'rgba(0,0,0,0.20)'}` }}>
                See my work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button onClick={() => setIsResumeOpen(true)}
                className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all hover:scale-[1.02]"
                style={{ background: btnBg, border: `1px solid ${btnBd}`, color: fgSub }}>
                <Eye className="w-4 h-4" />Resume
              </button>
              <a href="/resume.pdf" download aria-label="Download Resume"
                className="flex items-center justify-center w-10 h-10 rounded-lg transition-all hover:scale-[1.05]"
                style={{ background: btnBg, border: `1px solid ${btnBd}`, color: fgFaint }}>
                <Download className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 }}
              className="flex items-center gap-10 pt-5 flex-wrap"
              style={{ borderTop: '1px solid var(--border)' }}>
              {[
                { value: '10+', label: 'projects built' },
                { value: '3', label: 'internships' },
                { value: '25+', label: 'technologies' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-black" style={{ color: accent }}>{s.value}</div>
                  <div className="text-xs font-medium mt-0.5" style={{ color: fgFaint }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Profile card */}
          <div className="flex items-center justify-center order-1 lg:order-2 py-6 lg:py-0">
            <ProfileCard isDark={isDark} />
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="text-[9px] font-semibold tracking-[0.4em] uppercase" style={{ color: fgFaint }}>Scroll</span>
        <div className="animate-bounce"><ChevronDown className="w-4 h-4" style={{ color: fgFaint }} /></div>
      </motion.div>

      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
