'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import ProjectCard, { Project } from '@/components/ProjectCard';

export const featuredProjects: Project[] = [
  {
    id: 'insightai', index: '01',
    title: 'InsightAI',
    subtitle: 'Decision Intelligence Platform',
    tagline: 'ML Studio · AI Copilot · Forecasting · RAG',
    description: 'A unified enterprise-grade decision intelligence platform that transforms raw datasets into instant, data-grounded answers. Combines an ML training studio, Prophet/AutoARIMA forecasting, RAG-powered AI Copilot (Ollama + ChromaDB), natural-language SQL queries, and AI-generated PDF reports — all in one workspace.',
    problem: 'Teams drown in BI dashboards and stale reports but still can\'t answer "why did churn spike?" or "will we hit Q3 revenue?" without manual digging.',
    solution: 'Full-stack ML platform: upload data → auto-profile → train models → forecast → interrogate with natural-language AI Copilot — zero data science degree needed.',
    features: ['ML Studio (XGBoost, LightGBM, CatBoost, SHAP)', 'AI Copilot with RAG over your datasets', 'Prophet & AutoARIMA time-series forecasting', 'Natural-language → SQL query engine', 'AI-generated PDF reports', 'Model registry with versioned REST predictions'],
    tech: ['FastAPI', 'Python', 'React', 'LLMs', 'RAG', 'ChromaDB', 'PostgreSQL', 'Ollama'],
    github: 'https://github.com/Jatinchhabra22/InsightAI-',
    live: '',
    useThemeColor: true,
    images: [],
    video: '/projects/InsightAI.mp4',
  },
  {
    id: 'pharma', index: '02',
    title: 'AI Pharma Decision System',
    subtitle: 'Predictive Intelligence for Healthcare',
    tagline: 'ML-Powered Pharmaceutical Decision Making',
    description: 'Built an advanced AI system for pharmaceutical decision-making combining predictive modeling, NLP-based drug information extraction, and demand forecasting. Utilized classical ML and deep learning to optimize supply chains and reduce stockout risks.',
    problem: 'Manual, error-prone pharmaceutical supply chain decisions causing stockouts and waste.',
    solution: 'ML ensemble + NLP pipeline automating demand forecasting and decision support.',
    features: ['Demand forecasting models', 'NLP drug extraction', 'Supply chain optimization', 'Deep learning pipelines', 'Explainable AI outputs'],
    tech: ['Machine Learning', 'Deep Learning', 'NLP', 'Python', 'Scikit-learn'],
    github: 'https://github.com/Jatinchhabra22/AI-PHARMA-DECISION-SYSTEM',
    live: 'https://ai-pharma-decision-system-wzns9osvwjecmix4fqtpa3.streamlit.app/',
    useThemeColor: true,
    images: ['/projects/pharma-1.png', '/projects/pharma-2.png', '/projects/pharma-3.png', '/projects/pharma-4.png', '/projects/pharma-5.png', '/projects/pharma-6.png', '/projects/pharma-7.png', '/projects/pharma-8.png', '/projects/pharma-9.png', '/projects/pharma-11.png', '/projects/pharma-12.png', '/projects/pharma-13.png'],
  },
  {
    id: 'docbuddy', index: '03',
    title: 'DocBuddy',
    subtitle: 'Medical AI & LLM Fine-Tuning',
    tagline: 'LightGBM Symptom Classifier · LLaMA-3 QLoRA · 773 Diseases',
    description: 'An end-to-end medical AI project covering the full ML spectrum — from a production-ready LightGBM symptom checker (773 diseases, 76.84% accuracy) to a complete QLoRA fine-tuning pipeline for LLaMA-3 8B on 246,945 medical records. Two approaches to the same problem: structured ML classification vs. generative LLM reasoning.',
    problem: 'Medical symptom checkers are either too simplistic (rule-based) or require expensive LLM inference — no middle ground with explainability.',
    solution: 'Dual-approach: LightGBM classifier for fast CPU inference + QLoRA LLaMA-3 8B fine-tune for rich conversational diagnosis reasoning.',
    features: ['LightGBM classifier — 773 diseases, 377 features, 76.84% accuracy', 'QLoRA fine-tuning pipeline for LLaMA-3 8B (197K samples)', 'Streamlit chat UI with top-5 ranked predictions', 'FastAPI server with /predict, /health, /diseases', 'Complete data pipeline: CSV → JSONL → 80/10/10 split', 'LoRA adapter merge + interactive inference CLI'],
    tech: ['Python', 'LLaMA-3', 'LightGBM', 'QLoRA', 'HuggingFace', 'FastAPI', 'Streamlit'],
    github: 'https://github.com/Jatinchhabra22/DocBuddy',
    live: '',
    useThemeColor: true,
    images: ['/projects/doc1.png', '/projects/doc2.png', '/projects/doc3.png', '/projects/doc4.png', '/projects/doc5.png'],
  },
  {
    id: 'neersetu', index: '04',
    title: 'NeerSetu',
    subtitle: 'Smart Community Health System',
    tagline: 'Water Quality Monitoring & AI Health Risk Prediction',
    description: 'NeerSetu is a comprehensive water quality monitoring and health management system designed for rural communities. It combines IoT sensors, machine learning, and real-time analytics to provide early warning systems for water contamination and health risks.',
    problem: 'Lack of real-time water quality monitoring and early warning systems in rural communities.',
    solution: 'IoT-based sensor network + ML-powered health risk prediction with multi-channel alerts.',
    features: ['Real-time water quality monitoring', 'AI-powered health risk prediction', 'Mobile app for community access', 'Interactive dashboard for admins', 'Multi-channel alert system', 'Geographic mapping and visualization'],
    tech: ['React', 'React Native', 'Node.js', 'Express', 'MongoDB', 'Python', 'FastAPI', 'Leaflet'],
    github: 'https://github.com/Jatinchhabra22/NeerSetu',
    live: '',
    useThemeColor: true,
    images: ['/projects/Neersetu 1.png', '/projects/Neersetu 2.png'],
  },
  {
    id: 'orderflow', index: '05',
    title: 'OrderFlow',
    subtitle: 'E-Commerce Analytics Platform',
    tagline: 'End-to-End Sales & Operations Intelligence',
    description: 'Analyzed 100K+ records to uncover hidden revenue drivers and operational bottlenecks. Built automated ETL pipelines from raw transactional data into a clean PostgreSQL warehouse, then visualized KPIs through interactive Power BI dashboards enabling data-driven decisions.',
    problem: 'Fragmented sales data across multiple sources with no unified analytics.',
    solution: 'End-to-end pipeline: raw data → cleaned warehouse → interactive dashboards.',
    features: ['100K+ records processed', 'Automated ETL pipeline', 'Interactive Power BI dashboards', 'Revenue trend analysis', 'Operational KPIs'],
    tech: ['Python', 'SQL', 'PostgreSQL', 'Power BI', 'Excel'],
    github: 'https://github.com/Jatinchhabra22/OrderFlow-End-to-End-E-Commerce-Sales-Operations-Analytics',
    live: '',
    useThemeColor: true,
    images: ['/projects/orderflow-1.png', '/projects/orderflow-2.png', '/projects/orderflow-3.png', '/projects/orderflow-4.png', '/projects/orderflow-5.png'],
  },
];

export default function Projects() {
  const fg = 'var(--fg)';
  const fgSub = 'var(--fg-2)';
  const glowBg = 'rgba(134,239,172,0.05)';
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="projects" className="relative py-28 w-full overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-30"
        style={{ background: `radial-gradient(circle,${glowBg} 0%,transparent 70%)` }}
      />
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: 'var(--primary)', opacity: 0.6 }} />
              <span className="section-label">Featured Work</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter leading-tight" style={{ color: fg }}>
              Selected<br />
              <span style={{ color: 'var(--accent)' }}>
                Projects
              </span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.2 }} className="text-base mt-4 max-w-xl" style={{ color: fgSub }}>
              End-to-end data and AI projects spanning analytics, machine learning, and intelligent systems.
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.25 }}>
            <Link href="/all-projects">
              <motion.button
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', color: 'var(--accent)' }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 24px var(--accent-bg)' }} whileTap={{ scale: 0.98 }}>
                View More Projects
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <div>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
