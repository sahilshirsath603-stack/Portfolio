import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Flame, Sparkles } from 'lucide-react';
import Tilt3DCard from './canvas/Tilt3DCard';

const projects = [
  {
    title: 'Connectify – Real-Time Chat & Live Room Platform',
    description: 'A full-stack real-time chat and communication platform featuring user avatars, presence tracking, live room interaction, and robust notifications.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'WebSockets'],
    github: 'https://github.com/sahilshirsath603-stack/Chhay.A',
    demo: 'https://vibemode-vert.vercel.app/',
    badge: 'Featured App',
    gradient: 'from-red-700 via-rose-700 to-red-900',
  },
  {
    title: 'Fake News Detector',
    description: 'A hybrid AI system that classifies news articles as real or fake using BERT. Features an automated explanation engine powered by GPT-4o-mini to provide detailed rationale behind predictions.',
    tags: ['React', 'FastAPI', 'BERT', 'Python', 'OpenAI'],
    github: 'https://github.com/sahilshirsath603-stack/Fake-News-Detector',
    badge: 'AI & Intelligence System',
    gradient: 'from-rose-800 via-red-800 to-red-950',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0507] border border-red-900/50 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Flame className="w-4 h-4 text-red-500" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-base">
            Real-world applications built with modern frontend frameworks, scalable backends, and AI integrations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-700 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* 3D Projects Layout Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15 }}
            >
              <Tilt3DCard className="h-full rounded-3xl glass-card-3d border border-red-950/80 flex flex-col justify-between overflow-hidden group">
                
                {/* Header Graphic Banner */}
                <div className={`h-40 bg-gradient-to-tr ${project.gradient} relative flex items-center justify-center p-6 overflow-hidden`}>
                  <div className="absolute inset-0 bg-[#000000]/60 backdrop-blur-[2px]" />
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-red-600/20 rounded-full blur-xl pointer-events-none" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000000]/90 border border-red-800/40 text-xs font-semibold text-red-400 backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-red-400" />
                    <span>{project.badge}</span>
                  </div>

                  <h3 className="relative z-10 text-2xl font-extrabold text-white text-center font-heading drop-shadow-md">
                    {project.title.split('–')[0]}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white font-heading mb-3 group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-[#000000] border border-red-950 text-red-300 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-red-950/80">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0507] hover:bg-[#150a0e] text-slate-200 border border-red-900/40 text-xs font-semibold transition-all hover:text-red-400"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold shadow-glow-red transition-all transform hover:-translate-y-0.5"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
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
