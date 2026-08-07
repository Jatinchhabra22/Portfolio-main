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
    id: 'swiggy', index: '05',
    title: 'Swiggy Analytics',
    subtitle: 'FoodTech Delivery Intelligence',
    tagline: 'City & Restaurant-Level Sales Analysis',
    description: "Deep-dived into Swiggy's delivery ecosystem to uncover demand patterns, top-performing restaurants, and city-level growth opportunities. Combined SQL querying with Power BI storytelling to deliver actionable insights for business expansion.",
    problem: 'No visibility into which cities, cuisines, or restaurants drive the most value.',
    solution: 'SQL-powered analytics layer surfacing demand patterns and growth levers.',
    features: ['City-level demand mapping', 'Restaurant performance ranking', 'Cuisine trend analysis', 'SQL query optimization', 'Interactive BI dashboards'],
    tech: ['Python', 'SQL', 'PostgreSQL', 'Power BI'],
    github: 'https://github.com/Jatinchhabra22/Swiggy-Food-Delivery-Analytics',
    live: '',
    useThemeColor: true,
    images: ['/projects/swiggy-1.png', '/projects/swiggy-2.png', '/projects/swiggy-3.png', '/projects/swiggy-4.png', '/projects/swiggy-5.png'],
  },
  {
    id: 'smart-attendance', index: '06',
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
    id: 'ott-analysis', index: '07',
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
    id: 'novastat', index: '08',
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
    id: 'upi-analysis', index: '09',
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
  },
  {
    id: 'lead-crm', index: '10',
    title: 'Lead-to-CRM Automation Platform',
    subtitle: 'Enterprise SaaS Automation',
    tagline: 'AI-Powered Lead Capture, Scoring & CRM Sync',
    description: 'An enterprise-grade SaaS platform that automates the full lead lifecycle — from capture and AI-powered qualification to multi-CRM synchronisation. Features a visual drag-and-drop workflow builder, smart lead scoring, real-time webhook processing, and a comprehensive analytics dashboard.',
    problem: 'Sales teams manually routing leads across CRMs with no intelligent qualification or automated handoff.',
    solution: 'End-to-end automation: webhook capture → AI scoring → round-robin routing → CRM sync → Slack/email alerts.',
    features: ['Visual Drag-and-Drop Workflow Builder', 'AI-Powered Lead Scoring & Qualification', 'Multi-CRM Integration (HubSpot, Salesforce, Zoho)', 'Real-Time Webhook Processing', 'Role-Based Access Control', 'Audit Logging & Analytics Dashboard'],
    tech: ['FastAPI', 'Python', 'React', 'PostgreSQL', 'Redis', 'Celery'],
    github: 'https://github.com/Jatinchhabra22',
    live: '',
    useThemeColor: true,
    images: [],
  },
  {
    id: 'invoice-automation', index: '11',
    title: 'Invoice & Reporting Automation',
    subtitle: 'Full-Stack Finance Platform',
    tagline: 'Invoice Lifecycle · PDF Generation · Scheduled Reports',
    description: 'A production-grade invoice management platform handling the complete lifecycle from creation to payment. Features a visual invoice builder with custom branding, automated PDF generation via ReportLab & WeasyPrint, Celery-powered scheduled reports, AWS S3 storage, and a full analytics dashboard.',
    problem: 'Manual invoice creation, delivery, and payment tracking causing delays and errors in billing workflows.',
    solution: 'FastAPI + React platform with async email delivery, Celery background workers, and PDF export — end-to-end automation.',
    features: ['Visual Invoice Builder with Custom Branding', 'PDF Generation (ReportLab + WeasyPrint)', 'Automated Scheduling via Celery + Redis', 'AWS S3 Cloud Storage', 'Multi-Currency & Tax Support', 'Revenue Analytics Dashboard'],
    tech: ['FastAPI', 'Python', 'React', 'PostgreSQL', 'Celery', 'Redis', 'AWS S3'],
    github: 'https://github.com/Jatinchhabra22',
    live: '',
    useThemeColor: true,
    images: [],
  },
  {
    id: 'agentflow', index: '12',
    title: 'AgentFlow — AI Content Agent',
    subtitle: 'Multi-Agent AI Automation',
    tagline: '9-Node LLM Pipeline · Content Generation · SEO · Fact-Check',
    description: 'A full-stack multi-agent AI content operations platform. A coordinated pipeline of 9 specialised AI agents — Planner, Researcher, Retriever, Reasoner, Writer, SEO Optimizer, Fact Checker, Reviewer, Publisher — researches, writes, SEO-optimises, fact-checks, and publishes content end-to-end. Powered by OpenAI GPT-4o or local LLM in demo mode.',
    problem: 'Content production bottlenecked by manual research, writing, and SEO optimisation across disconnected tools.',
    solution: '9-agent sequential pipeline: topic in → strategy → research → write → SEO → fact-check → review → publish in Markdown/HTML/JSON.',
    features: ['9-Node Sequential Agent Pipeline', 'Real-Time Step-by-Step Workflow Tracker', 'OpenAI GPT-4o + Demo Mode (no API key)', 'Multi-Format Export (Markdown, HTML, JSON)', 'SEO Scoring & Meta Generation', '3D Agent Constellation Landing (Three.js)'],
    tech: ['FastAPI', 'Python', 'React', 'OpenAI', 'LLMs', 'Three.js', 'Redux Toolkit'],
    github: 'https://github.com/Jatinchhabra22',
    live: '',
    useThemeColor: true,
    images: [],
  },
  {
    id: 'docuflow', index: '13',
    title: 'DocuFlow — Document Processing',
    subtitle: 'Intelligent Document Processing',
    tagline: 'OCR · AI Extraction · Validation Workflows',
    description: 'An enterprise Intelligent Document Processing (IDP) platform. Upload any document — invoice, resume, contract, receipt — and the platform runs OCR (Tesseract/EasyOCR/PaddleOCR), AI field extraction with confidence scores, human validation workflows, and exports structured data to CSV, Excel, Google Sheets, or webhooks.',
    problem: 'Enterprises drowning in unstructured documents with no automated extraction or validation pipeline.',
    solution: 'FastAPI backend with real OCR pipeline + OpenAI extraction, feeding a validation queue and multi-format export engine.',
    features: ['Multi-Engine OCR (Tesseract, EasyOCR, PaddleOCR)', 'AI Field Extraction with Confidence Scores', 'Human Validation Review Queue', 'Visual Automation Workflow Rules', 'Multi-Format Export (CSV, Excel, Sheets, Webhooks)', 'Audit Logs & Analytics Dashboard'],
    tech: ['FastAPI', 'Python', 'React', 'Tesseract OCR', 'OpenAI', 'Pydantic'],
    github: 'https://github.com/Jatinchhabra22',
    live: '',
    useThemeColor: true,
    images: [],
  },
  {
    id: 'rag-chatbot', index: '14',
    title: 'RAG Support Chatbot',
    subtitle: 'Enterprise AI Knowledge Assistant',
    tagline: 'RAG · Vector Search · Citations · Multi-Source Ingestion',
    description: 'An enterprise AI Knowledge Assistant platform with multi-source document ingestion, hybrid RAG retrieval (semantic + keyword), streaming chat with citations and confidence scores, and a full admin analytics dashboard. Provider-agnostic embeddings support OpenAI, Ollama, BGE, Nomic, Pinecone, and PostgreSQL adapters.',
    problem: 'Support teams answering repetitive questions manually with no grounded, cited knowledge retrieval.',
    solution: 'RAG pipeline: ingest → chunk → embed → hybrid retrieve → stream answer with citations and confidence scores.',
    features: ['Multi-Source Document Ingestion', 'Hybrid RAG Retrieval (Semantic + Keyword)', 'Streaming Chat with Citations & Confidence', 'Provider-Agnostic Embeddings (OpenAI, Ollama, BGE)', 'Knowledge Base & Collection Management', 'Admin Analytics with 1000-document Seed'],
    tech: ['FastAPI', 'Python', 'React', 'RAG', 'ChromaDB', 'LLMs', 'Vector Search'],
    github: 'https://github.com/Jatinchhabra22',
    live: '',
    useThemeColor: true,
    images: [],
  },
  {
    id: 'social-autoposter', index: '15',
    title: 'Social Media Auto-Poster',
    subtitle: 'Multi-Platform Publishing Automation',
    tagline: 'Schedule Once · Publish Everywhere · 8 Platforms',
    description: 'A multi-platform social publishing automation tool. Compose once and schedule posts to X, LinkedIn, Instagram, Facebook, TikTok, YouTube, Threads, and Pinterest. Features a visual post composer, calendar view, creative media library, engagement analytics, and rule-based publish automations.',
    problem: 'Manually cross-posting content to 8 platforms is repetitive, error-prone, and time-consuming.',
    solution: 'FastAPI + React platform: compose → schedule → auto-publish via platform APIs → analytics dashboard.',
    features: ['Multi-Platform Publishing (8 Platforms)', 'Visual Post Composer & Calendar View', 'Rule-Based Publish Automations', 'Creative Media Library', 'Reach & Engagement Analytics', 'Platform Connect / Disconnect Flow'],
    tech: ['FastAPI', 'Python', 'React', 'TypeScript', 'Zustand', 'Recharts'],
    github: 'https://github.com/Jatinchhabra22',
    live: '',
    useThemeColor: true,
    images: [],
  },
  {
    id: 'nexora', index: '16',
    title: 'Nexora — Fashion E-Commerce',
    subtitle: 'Luxury Fashion Storefront',
    tagline: 'Mouse Spotlight Hero · Full Catalog · Checkout Flow',
    description: 'A minimal, futuristic fashion e-commerce frontend for the LGPSM label. Features a cinematic mouse spotlight image reveal hero, a full product catalog with category filtering, collection browsing, editorial journal, shopping cart with persistent state, and a complete checkout flow.',
    problem: 'Luxury fashion brands need a premium digital storefront that matches their editorial identity.',
    solution: 'React storefront with a radial spotlight hero effect, cart via React Context, and a complete multi-page purchase funnel.',
    features: ['Mouse Spotlight Image Reveal Hero', 'Product Catalog with Filters & Sorting', 'Cart with Persistent State', 'Editorial Journal Section', 'Multi-Step Checkout Flow', 'Collection Archive Browsing'],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router', 'React Context'],
    github: 'https://github.com/Jatinchhabra22',
    live: '',
    useThemeColor: true,
    images: [],
  },
  {
    id: 'elevare', index: '17',
    title: 'Elevare Estates',
    subtitle: 'Luxury Real Estate Platform',
    tagline: 'Cinematic Hero Video · Property Portfolio · GSAP Animations',
    description: 'A high-end real estate marketing website for a luxury smart living brand. Features a cinematic full-viewport hero video, property portfolio with filtering, investment opportunities section, GSAP-powered scroll animations and parallax effects, and Framer Motion page transitions — evoking the aesthetic of premium architectural brands.',
    problem: 'Luxury real estate brands lack digital experiences that match the quality of their physical properties.',
    solution: 'React + GSAP + Framer Motion site with cinematic hero video, scroll-driven parallax, and a complete property browsing experience.',
    features: ['Cinematic Full-Viewport Hero Video', 'GSAP Scroll Animations & Parallax', 'Framer Motion Page Transitions', 'Property Portfolio with Filtering', 'Investment Opportunities Section', 'Tour Scheduling & Inquiry Flow'],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Zustand'],
    github: 'https://github.com/Jatinchhabra22',
    live: '',
    useThemeColor: true,
    images: [],
  },
  {
    id: 'orbital', index: '18',
    title: 'Orbital Automation',
    subtitle: 'Enterprise AI Marketing Site',
    tagline: 'Scroll-Scrubbed Video · 3D Elements · Glass Editorial Design',
    description: 'A cinematic, glass-editorial enterprise AI automation marketing website. Features a scroll-scrubbed hero video (playback tied to scroll position), React Three Fiber 3D scenes with Rapier physics, GSAP-driven section reveals, and a complete multi-page structure covering solutions, industries, case studies, and pricing.',
    problem: 'Enterprise AI companies need marketing sites that feel as advanced as the technology they are selling.',
    solution: 'React + Three.js site with scroll-scrubbed video, glass UI, 3D physics scenes, and a full product content architecture.',
    features: ['Scroll-Scrubbed Hero Video', '3D Scenes with Rapier Physics (React Three Fiber)', 'Glass Editorial UI Design', 'GSAP Section Reveals & Parallax', 'Full Multi-Page Content Architecture', 'Product Dashboard Preview'],
    tech: ['React', 'TypeScript', 'Three.js', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
    github: 'https://github.com/Jatinchhabra22',
    live: '',
    useThemeColor: true,
    images: [],
  },
  {
    id: 'aetherai', index: '19',
    title: 'AetherAI — AI SaaS Website',
    subtitle: 'AI Product Marketing Site',
    tagline: 'Full Landing Page · Dashboard UI · AI Agent Flow Visualisation',
    description: 'A polished, production-grade marketing website for an AI SaaS platform. Features a scroll-progress hero, cursor glow effect, AI agent flow visualisation, live AI chat demo, integrations grid, D3-powered analytics previews, testimonials, pricing tiers, and a complete internal dashboard UI.',
    problem: 'AI startups need a world-class marketing site that demonstrates product capability before users sign up.',
    solution: 'React site with live AI chat demo, multi-agent pipeline diagram, animated analytics, and a full dashboard preview.',
    features: ['Live AI Chat Demo Interface', 'Multi-Agent Pipeline Flow Diagram', 'D3 & Recharts Analytics Previews', 'Cursor Glow + Scroll Progress', 'Hero Video Background', 'Full Dashboard UI Preview'],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'D3', 'Redux Toolkit'],
    github: 'https://github.com/Jatinchhabra22',
    live: '',
    useThemeColor: true,
    images: [],
  },
  {
    id: 'minimo', index: '20',
    title: 'MINIMO™ — Kids Streetwear',
    subtitle: 'Premium Kids Fashion Marketplace',
    tagline: 'Flying Cart Animation · 100 Products · Admin Dashboard',
    description: 'A world-class kids fashion marketplace with 100 demo products across 9 categories, a ToonHub character carousel, persistent cart with coupon codes, 4-step Zod-validated checkout, product wishlist and compare, GSAP scroll reveals, and a full admin dashboard with revenue charts and order management.',
    problem: 'Kids fashion brands need a marketplace that is both premium and playful without compromising on UX quality.',
    solution: 'React + Zustand marketplace with flying add-to-cart animation, skeleton loading, dark mode, and a complete admin panel.',
    features: ['100 Products Across 9 Categories', 'Flying Add-to-Cart Animation', 'Persistent Cart with Coupon Codes', '4-Step Zod-Validated Checkout', 'Product Compare & Wishlist', 'Admin Dashboard with Revenue Charts'],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Zustand', 'Zod'],
    github: 'https://github.com/Jatinchhabra22',
    live: '',
    useThemeColor: true,
    images: [],
  },
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
