import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code2, Cpu, Flame, Shield, Sparkles } from 'lucide-react';
import resumePdf from '../Sahil_Shirsath_CV.pdf';
import Hero3DCanvas from './canvas/Hero3DCanvas';
import Tilt3DCard from './canvas/Tilt3DCard';

const roles = ["Full-Stack Developer", "Machine Learning Engineer", "Software Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden bg-cyber-grid">
      {/* Pure Crimson Flare Ambient Lighting */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-red-600/20 rounded-full blur-[170px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-rose-700/20 rounded-full blur-[170px] -z-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0507] border border-red-900/50 text-red-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-glow-red">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>The Dark Knight Codebase • Full-Stack & ML Specialist</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-heading leading-tight">
                Hi, I'm <span className="text-gradient">Sahil Shirsath</span>
              </h1>
              
              <div className="h-12 sm:h-16 mt-2 flex items-center">
                <span className="text-2xl sm:text-4xl font-bold text-slate-300">
                  I am a{' '}
                  <span className="text-red-500 border-b-2 border-red-500/60 pb-1">
                    {roles[roleIndex]}
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl"
            >
              Passionate software engineer focused on crafting full-stack web applications and machine learning solutions. Graduated with a B.Tech in CSE (8.33 CGPA), experienced in building real-time applications, NLP fake news detection systems, and scalable backend platforms using React, Node.js, and Python.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-bold shadow-glow-red hover:shadow-glow-crimson transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0a0507] hover:bg-[#150a0e] text-slate-200 font-semibold border border-red-900/50 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 hover:border-red-500"
              >
                <span>Download CV</span>
                <Download className="w-5 h-5 text-red-500" />
              </a>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-red-950/80 max-w-lg"
            >
              <div>
                <h4 className="text-2xl font-extrabold text-white font-heading">5+</h4>
                <p className="text-xs text-slate-400">Core Projects</p>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-red-500 font-heading">8.33</h4>
                <p className="text-xs text-slate-400">B.Tech CGPA</p>
              </div>
              <div>
                <h4 className="text-2xl font-extrabold text-rose-500 font-heading">10+</h4>
                <p className="text-xs text-slate-400">Tech Stacks</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Crimson Canvas */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Tilt3DCard className="w-full rounded-3xl glass-card-3d p-6 border border-red-900/50">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#000000]/90 border border-red-900/50 text-xs font-semibold uppercase tracking-wider text-red-400">
                <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span>I'm Vengeance</span>
              </div>

              <Hero3DCanvas />

              {/* Dynamic Floating Badges */}
              <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#000000]/90 border border-red-900/50 text-rose-300 text-xs font-semibold backdrop-blur-md flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-red-400" /> React & Node.js
                </span>
                <span className="px-3 py-1 rounded-full bg-[#000000]/90 border border-red-900/50 text-red-300 text-xs font-semibold backdrop-blur-md flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-red-500" /> Python & ML
                </span>
              </div>
            </Tilt3DCard>
          </div>

        </div>
      </div>
    </section>
  );
}
