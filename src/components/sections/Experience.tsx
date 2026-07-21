'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MapPin, Database, TrendingUp, BarChart3, Code2, ChevronDown } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const experiences = [
  {
    role: 'Software Engineer Intern – Data Engineering',
    company: 'mFilterIt Pvt. Ltd.',
    companyShort: 'mFilterIt',
    location: 'On-Site',
    period: 'June 2026 – Present',
    status: 'current' as const,
    category: 'Data Engineering',
    icon: Database,
    description: 'Building scalable data engineering solutions, production data pipelines, ETL workflows and high-performance analytical systems while supporting AI/ML applications and modern data infrastructure.',
    responsibilities: [
      'Built Python and SQL data pipelines to ingest, clean, transform and validate large-scale datasets, powering analytics and AI/ML workflows.',
      'Built automated ETL and data processing solutions to improve data quality, streamline workflows and reduce manual effort across reporting pipelines.',
      'Contributed to the migration of data workflows from MySQL to ClickHouse, optimizing query performance and supporting high-volume analytical workloads.',
      'Performed API and production pipeline validation on live dashboards handling 1M+ records using FastAPI and Postman.',
    ],
    tech: ['Python', 'SQL', 'ClickHouse', 'MySQL', 'FastAPI', 'Postman', 'AWS', 'ETL', 'Data Engineering'],
  },
  {
    role: 'Business Analyst Intern',
    company: 'mFilterIt Pvt. Ltd.',
    companyShort: 'mFilterIt',
    location: 'On-Site',
    period: 'January 2026 – June 2026',
    status: 'completed' as const,
    category: 'Business Analytics',
    icon: BarChart3,
    description: 'Analyzed and visualized business data for international clients using SQL, Python, Excel and Power BI to generate insights and track key performance metrics.',
    responsibilities: [
      'Analyzed and visualized business data using SQL, Python, Excel and Power BI for international clients.',
      'Collaborated with cross-functional teams to translate business requirements into dashboards and actionable insights.',
      'Performed data cleaning, validation and EDA to improve reporting accuracy and support strategic decision-making.',
      'Built business intelligence reports and analytics dashboards using SQL, Excel and Power BI.',
    ],
    tech: ['SQL', 'Python', 'Power BI', 'Excel', 'Data Analytics', 'Business Intelligence'],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Finn FinTech',
    companyShort: 'Finn FinTech',
    location: 'Hybrid',
    period: 'September 2025 – November 2025',
    status: 'completed' as const,
    category: 'Data Analysis',
    icon: TrendingUp,
    description: 'Performed exploratory data analysis, developed sales tracking dashboards and generated business insights to support internal reporting.',
    responsibilities: [
      'Performed exploratory data analysis to identify trends impacting business performance.',
      'Developed sales tracking dashboards and performance reports for internal business teams.',
      'Cleaned and analyzed datasets using Excel and SQL to generate meaningful business insights.',
    ],
    tech: ['Excel', 'SQL', 'Data Analysis', 'Dashboarding', 'Reporting'],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Sage Media',
    companyShort: 'Sage Media',
    location: 'On-Site',
    period: 'June 2025 – July 2025',
    status: 'completed' as const,
    category: 'Frontend Development',
    icon: Code2,
    description: 'Worked on building and updating responsive webpages as part of the development team, implementing UI changes based on design feedback.',
    responsibilities: [
      'Built and updated responsive webpages as part of the development team.',
      'Implemented UI changes and fixes based on design feedback and requirements.',
    ],
    tech: ['React', 'JavaScript', 'CSS', 'Responsive Design'],
  },
];

function ExperienceCard({ exp, index, isLast }: { exp: typeof experiences[0]; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [expanded, setExpanded] = useState(index === 0);
  const Icon = exp.icon;
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const pulseDotColor = isDark ? '#4ade80' : '#111111';

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-5 mb-5 last:mb-0">

      {/* Timeline */}
      <div className="flex flex-col items-center shrink-0 pt-1" style={{ width: '28px' }}>
        <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.28, delay: index * 0.07 + 0.08 }}
          className="w-7 h-7 rounded-xl flex items-center justify-center relative z-10"
          style={{ background: 'var(--accent-bg)', border: '1.5px solid var(--accent-border)' }}>
          <Icon className="w-3.5 h-3.5" style={{ color: 'var(--accent)' }} />
          {exp.status === 'current' && (
            <span className="absolute inset-0 rounded-xl animate-ping opacity-15"
              style={{ background: 'var(--accent)' }} />
          )}
        </motion.div>
        {!isLast && (
          <div className="w-px flex-1 mt-2" style={{ background: 'var(--border)', minHeight: '20px' }} />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 min-w-0">
        <div
          className="rounded-xl overflow-hidden cursor-pointer transition-all duration-200"
          style={{
            background: expanded ? 'var(--accent-bg)' : 'var(--bg-card)',
            border: expanded ? '1px solid var(--accent-border)' : '1px solid var(--border)',
          }}
          onClick={() => setExpanded(v => !v)}>

          <div className="px-5 py-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-base font-bold leading-snug" style={{ color: 'var(--fg)' }}>
                    {exp.role}
                  </h3>
                  {exp.status === 'current' && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
                      style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}>
                      <span className="w-1 h-1 rounded-full animate-pulse" style={{ background: pulseDotColor }} />
                      Current
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>{exp.companyShort}</span>
                  <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--fg-3)' }}>
                    <MapPin className="w-3 h-3" />{exp.location}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--accent-bg)', color: 'var(--accent)' }}>
                    {exp.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--fg-3)' }}>
                  <Calendar className="w-3 h-3" />{exp.period}
                </div>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    background: expanded ? 'var(--accent-bg)' : 'var(--bg-card)',
                    border: `1px solid ${expanded ? 'var(--accent-border)' : 'var(--border)'}`,
                    color: expanded ? 'var(--accent)' : 'var(--fg-3)',
                  }}>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200"
                    style={{ transform: expanded ? 'rotate(180deg)' : 'none' }} />
                </div>
              </div>
            </div>

            <p className="text-sm mt-2.5 leading-relaxed" style={{ color: 'var(--fg-2)' }}>
              {exp.description}
            </p>
          </div>

          {/* Expanded */}
          <motion.div initial={false}
            animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}>
            <div className="px-5 pb-5">
              <div className="h-px mb-4" style={{ background: 'var(--border)' }} />
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--fg-3)' }}>
                Key Responsibilities
              </p>
              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((item, i) => (
                  <motion.li key={i}
                    initial={{ opacity: 0, x: -8 }} animate={expanded ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.22, delay: i * 0.04 }}
                    className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--fg-2)' }}>
                    <span className="mt-[8px] shrink-0 rounded-full"
                      style={{ width: '4px', height: '4px', minWidth: '4px', background: 'var(--accent)' }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-2.5" style={{ color: 'var(--fg-3)' }}>
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-lg text-[11px] font-medium"
                    style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 w-full">
      <div className="container mx-auto px-6">

        <div className="mb-14">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-center gap-3 mb-4">
            <div className="h-px w-6" style={{ background: 'var(--accent)', opacity: 0.5 }} />
            <span className="section-label">Experience</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.07 }}
            className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: 'var(--fg)' }}>
            Professional Journey
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.13 }} className="mt-3 text-sm max-w-lg" style={{ color: 'var(--fg-3)' }}>
            Click any role to expand responsibilities and tech stack.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-10 mb-12 flex-wrap">
          {[{ v: '3', l: 'companies' }, { v: '3', l: 'internships' }, { v: '13+', l: 'months XP' }].map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <div className="text-2xl font-black" style={{ color: 'var(--accent)' }}>{s.v}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--fg-4)' }}>{s.l}</div>
            </motion.div>
          ))}
        </div>

        <div className="w-full">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.role + exp.company} exp={exp} index={i} isLast={i === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
