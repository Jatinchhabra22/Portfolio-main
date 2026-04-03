'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/jatin-chhabra-2b0455289/",
      color: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Jatinchhabra22",
      color: "hover:text-gray-400"
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:jatin.chhabra22jc@gmail.com",
      color: "hover:text-primary"
    }
  ];

  return (
    <section className="relative py-32 w-full overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-12 md:p-24 border-white/5 relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-bold tracking-[0.3em] uppercase mb-6 block"
              >
                Get in Touch
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
              >
                Let&apos;s build <br /> something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">extraordinary.</span>
              </motion.h2>
              <p className="text-xl text-white/60 leading-relaxed mb-12 max-w-md">
                Whether you have a question or just want to say hi, my inbox is always open. 
                I&apos;m currently looking for new opportunities in Data Analysis and Data Science.
              </p>
              
              <div className="flex items-center gap-8">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white/40 ${link.color} transition-all duration-300 hover:scale-110`}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm"
              >
                <form className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-white/40">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary transition-colors outline-none text-xl"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-white/40">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary transition-colors outline-none text-xl"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-white/40">Message</label>
                    <textarea 
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-primary transition-colors outline-none text-xl min-h-[120px] resize-none"
                      placeholder="Your Message"
                    />
                  </div>
                  <button className="group flex items-center gap-3 px-10 py-5 bg-white text-background rounded-full font-bold hover:bg-white/90 transition-all active:scale-95 w-full justify-center">
                    Send Message
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
