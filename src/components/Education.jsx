import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ExternalLink, Award, CheckCircle2, Flame } from 'lucide-react';
import Tilt3DCard from './canvas/Tilt3DCard';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0507] border border-red-900/50 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4 text-red-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading">
            Education <span className="text-gradient">& Status</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-700 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Tilt3DCard className="glass-card-3d rounded-3xl p-8 sm:p-10 border border-red-900/50 relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-red-600/10 via-rose-600/5 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex flex-col md:flex-row items-start gap-8">
                
                {/* Icon Container */}
                <div className="p-4 bg-gradient-to-br from-red-600/20 to-rose-600/20 rounded-2xl border border-red-800/40 text-red-400 shrink-0 shadow-glow-red">
                  <GraduationCap className="w-10 h-10 text-red-400" />
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      Bachelor of Technology in Computer Science & Engineering
                    </h3>
                    
                    <div className="mt-2 flex items-center gap-2 text-red-400 font-semibold text-lg">
                      <a
                        href="https://www.sandipuniversity.edu.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-rose-300 transition-colors inline-flex items-center gap-2"
                      >
                        Sandip University <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    Graduated with a Bachelor of Technology in Computer Science & Engineering, with a focus on software engineering, full-stack web development, machine learning, and building practical, user-focused applications.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-[#050304] p-2.5 rounded-xl border border-red-950/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Software Engineering & Architecture</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-[#050304] p-2.5 rounded-xl border border-red-950/80">
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                      <span>Full-Stack Web Development</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-[#050304] p-2.5 rounded-xl border border-red-950/80">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Machine Learning & NLP Systems</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-[#050304] p-2.5 rounded-xl border border-red-950/80">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                      <span>Database Management & Algorithms</span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold border border-emerald-500/30 shadow-sm">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Status: Graduated</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-950/60 text-red-300 text-sm font-semibold border border-red-800/40">
                      <Award className="w-4 h-4 text-red-400" />
                      <span>CGPA: 8.33 / 10</span>
                    </div>
                  </div>

                </div>
              </div>
            </Tilt3DCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
