'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  GraduationCap, Briefcase, Code2, Brain, Database,
  Award, BookOpen, Cpu, TrendingUp, Globe, Zap, Star, Award as CertIcon
} from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

/* ─── Full detailed skill categories ─────────────────────────────── */
const skillCategories = [
  {
    label: 'Programming & Analysis',
    icon: Code2,
    skills: ['Python', 'Scikit-learn', 'SQL', 'MySQL', 'PostgreSQL', 'ClickHouse'],
  },
  {
    label: 'Data Science & Machine Learning',
    icon: Brain,
    skills: [
      'EDA', 'Data Preprocessing', 'Feature Engineering',
      'Supervised Learning', 'Unsupervised Learning',
      'Regression', 'Classification', 'Clustering',
      'Model Evaluation', 'SMOTE',
    ],
  },
  {
    label: 'Deep Learning, NLP & Generative AI',
    icon: Cpu,
    skills: [
      'Neural Networks', 'TensorFlow', 'Keras', 'PyTorch',
      'NLP', 'NLTK', 'Text Preprocessing', 'Tokenization',
      'Vectorization', 'Prompt Engineering',
      'LLMs', 'RAG', 'Agentic AI',
    ],
  },
  {
    label: 'Business Intelligence & Visualization',
    icon: TrendingUp,
    skills: ['Power BI', 'Tableau', 'Data Visualization', 'KPI Reporting', 'Matplotlib', 'Seaborn'],
  },
  {
    label: 'Tools & Platforms',
    icon: Database,
    skills: [
      'FastAPI', 'REST APIs', 'Postman', 'Git', 'Docker',
      'DBeaver', 'Advanced Excel', 'Microsoft Azure', 'Snowflake', 'AWS',
    ],
  },
];

/* ─── Certifications ──────────────────────────────────────────────── */
const certifications = [
  {
    title: 'Complete Data Science, Machine Learning, DL & NLP Bootcamp',
    issuer: 'Udemy',
    color: '#a78bfa',
  },
  {
    title: 'Complete Data Analyst Bootcamp',
    issuer: 'Udemy',
    color: '#86efac',
  },
  {
    title: 'Complete Generative AI Course With Langchain and Huggingface',
    issuer: 'Udemy',
    color: '#60a5fa',
  },
  {
    title: 'The Ultimate Job-Ready Data Science Course',
    issuer: 'Code with Harry',
    color: '#fbbf24',
  },
];

const interests = [
  { icon: Brain, label: 'LLMs & Agents' },
  { icon: Globe, label: 'MLOps & Cloud' },
  { icon: TrendingUp, label: 'Data Products' },
  { icon: Zap, label: 'AI Automation' },
  { icon: BookOpen, label: 'AI Research' },
  { icon: Cpu, label: 'Edge AI' },
];

function SkillCard({ cat, i }: { cat: typeof skillCategories[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = cat.icon;
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: i * 0.05 }}
      className="rounded-xl p-5 cursor-default hover:-translate-y-0.5 transition-transform duration-200"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}>
          <Icon className="w-4 h-4" style={{ color: 'var(--accent)' }} />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
          {cat.label}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {cat.skills.map(skill => (
          <span key={skill} className="px-2 py-0.5 rounded-md text-[11px] font-medium"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--fg-2)' }}>
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function About() {
  const bioRef = useRef(null);
  const bioInView = useInView(bioRef, { once: true, margin: '-80px' });
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const pulseDotColor = isDark ? '#4ade80' : '#111111';

  return (
    <section id="about" className="relative py-24 w-full">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-center gap-3 mb-4">
            <div className="h-px w-6" style={{ background: 'var(--accent)', opacity: 0.5 }} />
            <span className="section-label">About</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.07 }}
            className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: 'var(--fg)' }}>
            Building AI systems that<br />
            <span style={{ color: 'var(--accent)' }}>make a real impact.</span>
          </motion.h2>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-12 mb-14 flex-wrap">
          {[{ v: '10+', l: 'projects' }, { v: '3', l: 'internships' }, { v: '25+', l: 'technologies' }, { v: '6+', l: 'AI domains' }].map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <div className="text-3xl font-black" style={{ color: 'var(--accent)' }}>{s.v}</div>
              <div className="text-xs mt-0.5 uppercase tracking-wider" style={{ color: 'var(--fg-4)' }}>{s.l}</div>
            </motion.div>
          ))}
        </div>

        {/* Bio + sidebar */}
        <div ref={bioRef} className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">

          {/* Bio */}
          <motion.div initial={{ opacity: 0, x: -18 }} animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 rounded-xl px-6 py-6"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <div className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                Hi, I&apos;m <span style={{ color: 'var(--fg)', fontWeight: 700 }}>Jatin Chhabra</span> — a Data Science,
                Artificial Intelligence & Machine Learning Engineer passionate about building intelligent
                systems that solve real-world problems.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                A Data Science, AI & Data Engineering enthusiast with hands-on experience in analytics, 
                machine learning, and production data engineering. I specialize in{' '}
                <span style={{ color: 'var(--fg)', fontWeight: 600 }}>end-to-end AI solutions</span>{' '}
                combining Machine Learning, Deep Learning, Data Engineering, Generative AI, LLMs, NLP,
                Computer Vision, and modern software engineering.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                Proficient in Python, SQL, Power BI, and Excel, with a strong foundation in data preprocessing, 
                feature engineering, model development, ETL pipelines, and exploratory data analysis. 
                Currently pursuing a{' '}
                <span style={{ color: 'var(--fg)', fontWeight: 600 }}>B.Tech CSE (Data Science)</span>{' '}
                with a <span style={{ color: 'var(--accent)', fontWeight: 700 }}>9.1 CGPA</span>, with hands-on
                experience building scalable data solutions, analytics workflows, and production-ready AI solutions 
                that create real business impact.
              </p>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 18 }} animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-4">

            {/* Education */}
            <div className="rounded-xl p-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}>
                  <GraduationCap className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                </div>
                <span className="text-xs font-bold tracking-[0.16em] uppercase" style={{ color: 'var(--accent)' }}>Education</span>
              </div>
              <p className="text-sm font-bold" style={{ color: 'var(--fg)' }}>B.Tech — CSE (Data Science)</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg"
                  style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}>
                  <Star className="w-3 h-3" style={{ color: 'var(--accent)' }} />
                  <span className="text-sm font-black" style={{ color: 'var(--accent)' }}>9.1</span>
                  <span className="text-xs" style={{ color: 'var(--fg-4)' }}>/ 10 CGPA</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-2.5">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: pulseDotColor }} />
                <span className="text-xs" style={{ color: 'var(--fg-4)' }}>Currently Pursuing</span>
              </div>
            </div>

            {/* Current role */}
            <div className="rounded-xl p-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}>
                  <Briefcase className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                </div>
                <span className="text-xs font-bold tracking-[0.16em] uppercase" style={{ color: 'var(--accent)' }}>Current Role</span>
              </div>
              <p className="text-sm font-bold" style={{ color: 'var(--fg)' }}>SWE Intern – Data Engineering</p>
              <p className="text-xs mt-1" style={{ color: 'var(--fg-4)' }}>mFilterIt Pvt. Ltd. · On-Site</p>
              <div className="flex items-center gap-1.5 mt-2.5">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: pulseDotColor }} />
                <span className="text-xs" style={{ color: 'var(--fg-4)' }}>June 2026 – Present</span>
              </div>
            </div>

            {/* Interests */}
            <div className="rounded-xl p-5" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}>
                  <Award className="w-4 h-4" style={{ color: 'var(--accent)' }} />
                </div>
                <span className="text-xs font-bold tracking-[0.16em] uppercase" style={{ color: 'var(--accent)' }}>Interests</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {interests.map(item => {
                  const Icon = item.icon;
                  return (
                    <span key={item.label} className="flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium"
                      style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}>
                      <Icon className="w-3 h-3" />{item.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── Skills Section ─────────────────────────────────────────── */}
        <div id="skills" className="scroll-mt-24 mb-16">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-center gap-3 mb-8">
            <div className="h-px w-6" style={{ background: 'var(--accent)', opacity: 0.5 }} />
            <span className="section-label">Technical Skills</span>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {skillCategories.map((cat, i) => <SkillCard key={cat.label} cat={cat} i={i} />)}
          </div>
        </div>

        {/* ─── Certifications Section ──────────────────────────────────── */}
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-center gap-3 mb-8">
            <div className="h-px w-6" style={{ background: 'var(--accent)', opacity: 0.5 }} />
            <span className="section-label">Certifications</span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div key={cert.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-xl p-5 flex flex-col gap-3 hover:-translate-y-0.5 transition-transform duration-200"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}28` }}>
                  <CertIcon className="w-4.5 h-4.5" style={{ color: cert.color, width: '18px', height: '18px' }} />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-snug" style={{ color: 'var(--fg)' }}>
                    {cert.title}
                  </p>
                  <p className="text-xs mt-1.5 font-medium" style={{ color: 'var(--fg-4)' }}>
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
