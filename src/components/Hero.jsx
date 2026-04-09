import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import resumePdf from '../Sahil_Shirsath_CV.pdf';

export default function Hero({ onTriggerGravity }) {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Hi, my name is</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Sahil Shirsath.<br />
            <span className="text-slate-500 text-4xl sm:text-6xl mt-2 block">Web Developer.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed"
          >
            Aspiring software engineer with expertise in full-stack development and machine learning, experienced in building real-world applications including an NLP-based Fake News Detection system and a real-time chat platform with live interaction features. Strong foundation in React, Node.js, and scalable system design, with a focus on delivering efficient and impactful solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              View Projects <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href={resumePdf} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/20 backdrop-blur-sm"
            >
              Download CV <Download className="w-5 h-5" />
            </a>
            <button onClick={onTriggerGravity} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent hover:bg-white/5 text-slate-400 hover:text-white font-medium transition-colors border border-slate-700">
              Break the UI
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
