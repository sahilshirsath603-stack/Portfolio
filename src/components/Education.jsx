import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ExternalLink } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-indigo-500"></span>
            Education
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full -z-10" />
            
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="p-3 bg-indigo-500/20 rounded-xl shrink-0">
                <GraduationCap className="w-8 h-8 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">B.Tech in Computer Science</h3>
                <div className="text-xl text-indigo-400 mb-4 font-medium flex items-center gap-2">
                  <a href="https://www.sandipuniversity.edu.in/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors inline-flex items-center gap-2">
                    Sandip University <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Currently in my 8th semester, pursuing my Bachelor of Technology degree. Focusing on software engineering, web development, and exploring modern tech stacks to build robust applications.
                </p>
                <div className="inline-block px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700">
                  Current Status: Pursuing
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
