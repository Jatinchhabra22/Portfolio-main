'use client';

import { Suspense } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
 import Experience from '@/components/sections/Experience';
 import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Loader from '@/components/Loader';
 import ThreeBackground from '@/components/ThreeBackground';
 import Nav from '@/components/Nav';
 
 export default function Home() {
   return (
     <main className="relative flex min-h-screen flex-col items-center justify-between">
       <Loader />
       <ThreeBackground />
       <Nav />
       
       {/* Sections Wrapper */}
       <div className="w-full">
         <Hero />
         <div id="about">
            <About />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
         <div id="contact">
           <Contact />
         </div>
       </div>

      {/* Footer */}
      <footer className="w-full py-12 px-6 border-t border-white/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter uppercase">Jatin Chhabra</span>
            <span className="text-white/20 ml-4">© 2026</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-white/40 uppercase tracking-widest">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="/resume.pdf" download className="hover:text-white transition-colors">Resume</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
