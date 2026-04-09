import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Connectify – Real-Time Chat & Live Room Platform',
    description: 'A full-stack real-time chat and communication platform featuring user avatars, presence tracking, and robust notifications.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/sahilshirsath603-stack/Chhay.A',
    demo: 'https://chaaya-vert.vercel.app/',
    image: '/swarix_preview.png',
  },
  {
    title: 'Fake News Detector',
    description: 'A hybrid AI system that classifies news articles as real or fake using BERT. It features an automated explanation engine powered by GPT-4o-mini to help users understand the reasoning behind each prediction.',
    tags: ['React', 'FastAPI', 'BERT', 'Python', 'OpenAI'],
    github: 'https://github.com/sahilshirsath603-stack/Fake-News-Detector',
    image: '/fake_news_preview.png',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-emerald-500"></span>
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10" />
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-slate-800 text-blue-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-800/50">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
