'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import ProjectCard, { Project } from '@/components/ProjectCard';
import Nav from '@/components/Nav';
import Loader from '@/components/Loader';
import { useTheme } from '@/components/ThemeProvider';
import { featuredProjects } from '@/components/sections/Projects';

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

const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: 'smart-attendance', index: '05',
    title: 'Smart Attendance & Curriculum App',
    subtitle: 'AI-Powered EdTech Platform',
    tagline: 'Face Recognition Attendance & Task Recommendations',
    description: 'An intelligent AI-powered system designed to automate attendance using Face Recognition, predict future attendance patterns using Machine Learning, and optimize student free-time with personalized task recommendations.',
    problem: 'Manual attendance is time-consuming and prone to proxy; no personalized free-time task suggestions.',
    solution: '3-layer microservice architecture with face recognition, attendance prediction, and NLP-based task recommendations.',
    features: ['AI Face Recognition Attendance', 'Attendance Prediction with Linear Regression', 'Intelligent Free-Time Optimizer (TF-IDF + Cosine Similarity)', 'Advanced Analytics with Chart.js', 'Multi-Role Dashboards', 'Email Alerts for Low Attendance'],
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Python', 'Flask', 'dlib', 'scikit-learn'],
    github: 'https://github.com/Jatinchhabra22/Smart-Attendance-Cirrculam-App',
    live: '',
    useThemeColor: true,
    images: ['/projects/SMART.png'],
  },
  {
    id: 'ott-analysis', index: '06',
    title: 'OTT Platform Analysis',
    subtitle: 'Media Content Analytics',
    tagline: 'Netflix, Prime, Disney+ Content Insights',
    description: 'A comprehensive exploratory data analysis of content from major OTT platforms including Netflix, Amazon Prime, and Disney+ to uncover trends in content distribution, genres, ratings, and more.',
    problem: 'No centralized analysis of cross-platform OTT content trends and patterns.',
    solution: 'In-depth EDA using Pandas, Matplotlib, and Seaborn to derive actionable insights.',
    features: ['Platform-wise Content Distribution', 'Content Type Comparison', 'Release Year Trends', 'Top Genres Analysis', 'Rating Distribution', 'Top Producing Countries', 'Content Added Over Time'],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    github: 'https://github.com/Jatinchhabra22/OTT-Analysis-',
    live: '',
    useThemeColor: true,
    images: ['/projects/Ott analysis.png'],
  },
  {
    id: 'novastat', index: '07',
    title: 'NovaStat',
    subtitle: 'Government Survey Platform',
    tagline: 'Survey Data Processing & Reporting',
    description: 'A production-ready full-stack web application for processing government survey datasets, cleaning data, detecting statistical biases, applying design weights, and generating MoSPI-compliant analytical reports.',
    problem: 'Time-consuming manual processing of survey data with no automated bias detection or reporting.',
    solution: 'FastAPI backend + React frontend pipeline for data cleaning, bias detection, and report generation.',
    features: ['CSV/Excel Data Ingestion', 'Automated Data Cleaning', 'Statistical Bias Detection Heatmaps', 'Design Weight Application', 'MoSPI-Compliant Report Generation', 'Geospatial Visualizations'],
    tech: ['React', 'Vite', 'FastAPI', 'Pandas', 'NumPy', 'scikit-learn', 'SQLite', 'Plotly.js'],
    github: 'https://github.com/Jatinchhabra22/NovaStat',
    live: '',
    useThemeColor: true,
    images: ['/projects/NovastatAI.png'],
  },
  {
    id: 'upi-analysis', index: '08',
    title: 'UPI Transaction Analysis',
    subtitle: 'Financial Payments Analytics',
    tagline: 'UPI Payment Pattern Insights',
    description: 'An in-depth exploratory data analysis of 15,000+ UPI transactions to understand payment patterns, success/failure rates, popular apps, transaction types, and time-based trends.',
    problem: 'Lack of insights into UPI transaction behavior and failure patterns.',
    solution: 'Comprehensive EDA to uncover transaction patterns and actionable insights.',
    features: ['Transaction Status Analysis', 'Failure Reasons Breakdown', 'Popular UPI Apps Usage', 'Transaction Type Distribution', 'Top Merchant Categories', 'Hourly & Time-of-Day Patterns', 'Top Cities by Volume'],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    github: 'https://github.com/Jatinchhabra22/UPI-Transaction-Analysis-',
    live: '',
    useThemeColor: true,
    images: ['/projects/Upi analysis.png'],
  }
];

export default function AllProjectsPage() {
  const fg = 'var(--fg)';
  const fgSub = 'var(--fg-2)';
  const glowBg = 'rgba(134,239,172,0.05)';

  return (
    <main className="relative flex min-h-screen flex-col" style={{ background: 'var(--bg)' }}>
      <div className="fixed inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)', backgroundSize: '64px 64px', opacity: 0.4 }} />
      <Loader />
      <Nav />

      <div className="w-full pt-32 pb-20">
        <section className="relative w-full overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-30"
            style={{ background: `radial-gradient(circle,${glowBg} 0%,transparent 70%)` }}
          />
          <div className="container mx-auto px-6">
            <div className="mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
                <Link href="/#projects" className="group flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: fgSub }}>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: 'var(--primary)', opacity: 0.6 }} />
                <span className="section-label">All Projects</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }} className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter leading-tight" style={{ color: fg }}>
                All<br />
                <span style={{ color: 'var(--accent)' }}>
                  Projects
                </span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }} className="text-base mt-4 max-w-xl" style={{ color: fgSub }}>
                Complete collection of all my data and AI projects.
              </motion.p>
            </div>
            <div>
              {allProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
