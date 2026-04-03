'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Business Analyst Intern",
    company: "mFilterit (On-Site)",
    period: "Jan 2026 - Present",
    description: [
      "Analysed digital advertising and fraud-detection datasets for multiple client campaigns using SQL, Excel, and Power BI, identifying suspicious patterns, invalid traffic, and fraud percentages to support data-driven decisions.",
      "Developed interactive dashboards and performance reports highlighting fraud trends, campaign effectiveness, and key risk indicators, enabling stakeholders to monitor and optimize ad spend and operational strategies."
    ]
  },
  {
    role: "Data Analyst Intern",
    company: "Finn Fintech (Hybrid)",
    period: "Sep 2025 - Nov 2025",
    description: [
      "Analysed sales datasets to identify month-on-month revenue trends and performance drivers.",
      "Performed Exploratory data analysis on sales data to highlight factors impacting overall business performance.",
      "Developed sales tracking metrics and dashboards to support monthly performance reviews and internal reporting."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Sage Media (On-Site)",
    period: "Jun 2025 - July 2025",
    description: [
      "Worked on building and updating responsive webpages as part of the development team.",
      "Helped implement UI changes and fixes based on design and feedback."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 w-full overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] uppercase mb-4"
          >
            My Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Professional Experience
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-16 last:pb-0 border-l border-white/10"
            >
              {/* Timeline Node */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              
              <div className="glass-card p-8 md:p-10 border-white/5 hover:border-white/10 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-white/40 mt-2 font-medium">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-white/20">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-4 text-white/60 leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/4" />
    </section>
  );
}
