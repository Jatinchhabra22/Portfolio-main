'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight, Send, Download, MapPin, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

const socialLinks = [
  { name: 'LinkedIn', handle: 'Connect professionally', icon: Linkedin, url: 'https://www.linkedin.com/in/jatin-chhabra-2b0455289/', color: '#0a66c2', bg: 'rgba(10,102,194,0.10)', border: 'rgba(10,102,194,0.22)' },
  { name: 'GitHub', handle: 'Explore my code', icon: Github, url: 'https://github.com/Jatinchhabra22', color: '#8b949e', bg: 'rgba(139,148,158,0.10)', border: 'rgba(139,148,158,0.20)' },
  { name: 'Email', handle: 'jatin.chhabra22jc@gmail.com', icon: Mail, url: 'mailto:jatin.chhabra22jc@gmail.com', color: 'var(--accent)', bg: 'var(--accent-bg)', border: 'var(--accent-border)' },
];

type FS = 'idle' | 'focused' | 'filled';

function FloatingInput({ id, label, type = 'text', required, value, onChange, multiline, rows }: {
  id: string; label: string; type?: string; required?: boolean;
  value: string; onChange: (v: string) => void; multiline?: boolean; rows?: number;
}) {
  const [state, setState] = useState<FS>('idle');
  const active = state === 'focused';
  const up = active || value.length > 0;

  const inputStyle: React.CSSProperties = {
    background: 'var(--bg-card)',
    border: `1px solid ${active ? 'var(--accent-border)' : 'var(--border)'}`,
    boxShadow: active ? '0 0 0 3px var(--accent-bg)' : 'none',
    outline: 'none', width: '100%',
    color: 'var(--fg)', fontSize: '14px', fontFamily: 'inherit', borderRadius: '12px',
    padding: multiline ? '22px 16px 10px' : '22px 16px 8px',
    resize: 'none' as const,
    transition: 'all 0.18s ease',
    minHeight: multiline ? `${(rows || 4) * 28}px` : '52px',
    height: multiline ? 'auto' : '52px',
  };
  const labelStyle: React.CSSProperties = {
    position: 'absolute', left: '16px',
    top: up ? '8px' : (multiline ? '16px' : '50%'),
    transform: up ? 'none' : (multiline ? 'none' : 'translateY(-50%)'),
    fontSize: up ? '10px' : '13px',
    fontWeight: up ? 600 : 400,
    color: active ? 'var(--accent)' : 'var(--fg-3)',
    letterSpacing: up ? '0.06em' : '0.01em',
    textTransform: up ? 'uppercase' : 'none',
    pointerEvents: 'none',
    transition: 'all 0.18s ease',
    zIndex: 2,
  };
  const shared = {
    id, name: id, required, value, style: inputStyle,
    onFocus: () => setState('focused'),
    onBlur: () => setState(value ? 'filled' : 'idle'),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
  };

  return (
    <div style={{ position: 'relative' }}>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      {multiline ? <textarea {...shared} rows={rows || 5} /> : <input {...shared} type={type} />}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        height: '2px', width: active ? '100%' : '0%',
        background: 'var(--accent)', borderRadius: '0 0 12px 12px', transition: 'width 0.22s ease',
      }} />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const pulseDotColor = isDark ? '#4ade80' : '#111111';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    window.location.href = `mailto:jatin.chhabra22jc@gmail.com?subject=${encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    setTimeout(() => { setStatus('sent'); setTimeout(() => setStatus('idle'), 4000); }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 w-full">
      <div className="w-full px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="mb-14">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-center gap-3 mb-4">
            <div className="h-px w-6" style={{ background: 'var(--accent)', opacity: 0.5 }} />
            <span className="section-label">Contact</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.07 }}
            className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: 'var(--fg)' }}>
            Let&apos;s build something<br />
            <span style={{ color: 'var(--accent)' }}>extraordinary.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.13 }} className="mt-3 text-sm max-w-lg" style={{ color: 'var(--fg-3)' }}>
            Open to AI/ML roles, data science opportunities, and interesting collaborations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full">

          {/* Left */}
          <div className="lg:col-span-2 flex flex-col gap-4 min-w-0">

            {/* Status */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-xl p-4" style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: pulseDotColor }} />
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Open to Work</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                Seeking AI/ML engineering roles, data science positions, and research opportunities.
              </p>
              <div className="flex items-center gap-1.5 mt-2 text-xs" style={{ color: 'var(--fg-3)' }}>
                <MapPin style={{ width: '11px', height: '11px' }} />
                India · Open to Remote &amp; Relocation
              </div>
            </motion.div>

            {/* Social links */}
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="flex items-center gap-3 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: link.bg, border: `1px solid ${link.border}` }}>
                    <Icon style={{ width: '17px', height: '17px', color: link.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>{link.name}</div>
                    <div className="text-xs truncate mt-0.5" style={{ color: 'var(--fg-3)' }}>{link.handle}</div>
                  </div>
                  <ArrowUpRight style={{ width: '14px', height: '14px', color: 'var(--fg-4)', flexShrink: 0 }} />
                </motion.a>
              );
            })}

            {/* Resume */}
            <motion.a href="/resume.pdf" download
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.32 }}
              className="flex items-center gap-3 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}>
                <Download style={{ width: '17px', height: '17px', color: 'var(--accent)' }} />
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>Download Resume</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--fg-3)' }}>PDF · Always up to date</div>
              </div>
              <ArrowUpRight style={{ width: '14px', height: '14px', color: 'var(--fg-4)', marginLeft: 'auto', flexShrink: 0 }} />
            </motion.a>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="lg:col-span-3 rounded-xl p-6 md:p-7"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <h3 className="text-base font-bold mb-0.5" style={{ color: 'var(--fg)' }}>Send a message</h3>
            <p className="text-sm mb-6" style={{ color: 'var(--fg-3)' }}>I&apos;ll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FloatingInput id="name" label="Your Name" required value={form.name}
                  onChange={v => setForm(p => ({ ...p, name: v }))} />
                <FloatingInput id="email" label="your.email@example.com" type="email" required value={form.email}
                  onChange={v => setForm(p => ({ ...p, email: v }))} />
              </div>
              <FloatingInput id="subject" label="Subject" value={form.subject}
                onChange={v => setForm(p => ({ ...p, subject: v }))} />
              <FloatingInput id="message"
                label="Tell me about your project, collaboration, internship, or just say hello."
                required value={form.message} onChange={v => setForm(p => ({ ...p, message: v }))}
                multiline rows={5} />

              <button type="submit" disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-bold transition-all hover:brightness-105 active:scale-[0.98]"
                style={{
                  background: status === 'sent' ? '#22c55e' : 'var(--accent)',
                  color: (status === 'sent' || isDark) ? '#0a0a0a' : '#ffffff',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                }}>
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Send style={{ width: '14px', height: '14px' }} />Send Message
                    </motion.span>
                  )}
                  {status === 'sending' && (
                    <motion.span key="s" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border-2 border-black/20 border-t-black animate-spin" />
                      Opening...
                    </motion.span>
                  )}
                  {status === 'sent' && (
                    <motion.span key="d" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <CheckCircle style={{ width: '14px', height: '14px' }} />Done!
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <p className="text-center text-[11px]" style={{ color: 'var(--fg-3)' }}>
                Or reach me at{' '}
                <a href="mailto:jatin.chhabra22jc@gmail.com" style={{ color: 'var(--accent)' }}>
                  jatin.chhabra22jc@gmail.com
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
