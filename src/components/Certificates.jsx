import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, FileText } from 'lucide-react';
import trainingPdf from '../Web Development Training.pdf';
import Tilt3DCard from './canvas/Tilt3DCard';

export default function Certificates() {
  const certs = [
    {
      title: 'Web Development Training',
      issuer: 'Coincent (Online)',
      status: 'Verified Credentials',
      pdf: trainingPdf,
      points: [
        'Completed comprehensive hands-on training covering HTML5, CSS3, JavaScript ES6+, and modern web standards',
        'Built full responsive user interface components and dynamic client-side applications',
        'Mastered core web concepts, DOM manipulation, asynchronous JavaScript, and production deployment',
      ],
      tags: ['Frontend', 'JavaScript', 'Responsive Design', 'Web Architecture'],
    },
  ];

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0507] border border-red-900/50 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-red-400" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-700 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {certs.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <Tilt3DCard className="glass-card-3d rounded-3xl p-8 sm:p-10 border border-red-900/50 relative">
                <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-red-600/10 via-rose-600/5 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex flex-col md:flex-row items-start gap-8">
                  
                  {/* Badge Icon */}
                  <div className="p-4 bg-gradient-to-br from-red-600/20 to-rose-600/20 rounded-2xl border border-red-800/40 text-red-400 shrink-0 shadow-glow-red">
                    <Award className="w-10 h-10 text-red-400" />
                  </div>

                  {/* Body */}
                  <div className="space-y-4 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-extrabold text-white font-heading">
                          {cert.title}
                        </h3>
                        <p className="text-red-400 font-medium mt-1 text-base">
                          {cert.issuer}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>{cert.status}</span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-slate-300 text-sm leading-relaxed">
                      {cert.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3">
                          <span className="text-red-400 mt-1">▸</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cert.tags.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-[#000000] border border-red-950 text-slate-300 text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action */}
                    <div className="pt-4">
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white rounded-full text-sm font-bold shadow-glow-red transition-all transform hover:-translate-y-0.5"
                      >
                        <FileText className="w-4 h-4" />
                        <span>View Certificate PDF</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                  </div>
                </div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
