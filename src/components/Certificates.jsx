import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import trainingPdf from '../Web Development Training.pdf';

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-emerald-500"></span>
            Certifications
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -z-10" />
            
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="p-3 bg-emerald-500/20 rounded-xl shrink-0">
                <Award className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Web Development Training</h3>
                <div className="text-xl text-emerald-400 mb-4 font-medium">
                  Coincent (Online)
                </div>
                <ul className="text-slate-400 leading-relaxed mb-6 space-y-2 list-none">
                  <li className="flex gap-3">
                    <span className="text-emerald-500 mt-1.5 text-xs">◆</span>
                    <span>Completed structured training covering HTML, CSS, JavaScript, and modern web development practices</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-500 mt-1.5 text-xs">◆</span>
                    <span>Gained hands-on experience in building responsive web applications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-500 mt-1.5 text-xs">◆</span>
                    <span>Learned fundamentals of frontend development and project deployment</span>
                  </li>
                </ul>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="inline-block px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700">
                    Status: Completed
                  </div>
                  <a 
                    href={trainingPdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 rounded-full text-sm font-medium border border-emerald-500/20 transition-colors"
                  >
                    View Certificate <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
