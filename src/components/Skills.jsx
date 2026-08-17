import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Layout, Brain, Cpu, Terminal, Layers, Globe, Server, Wrench, Flame } from 'lucide-react';
import Tilt3DCard from './canvas/Tilt3DCard';

const categories = ['All', 'Frontend', 'Backend & API', 'AI & ML', 'Database & Tools'];

const skills = [
  { name: 'React', category: 'Frontend', level: 'Advanced', icon: Layout, color: 'from-red-600 to-rose-700' },
  { name: 'JavaScript / ES6+', category: 'Frontend', level: 'Advanced', icon: Code2, color: 'from-rose-500 to-red-600' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Advanced', icon: Globe, color: 'from-red-600 to-rose-600' },
  { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Advanced', icon: Layers, color: 'from-rose-600 to-red-700' },
  
  { name: 'Python', category: 'Backend & API', level: 'Advanced', icon: Terminal, color: 'from-red-600 to-rose-600' },
  { name: 'Node.js & Express', category: 'Backend & API', level: 'Advanced', icon: Server, color: 'from-rose-500 to-red-700' },
  { name: 'FastAPI', category: 'Backend & API', level: 'Proficient', icon: Cpu, color: 'from-red-500 to-rose-600' },
  { name: 'REST & WebSockets', category: 'Backend & API', level: 'Advanced', icon: Server, color: 'from-rose-600 to-red-600' },

  { name: 'BERT / NLP', category: 'AI & ML', level: 'Proficient', icon: Brain, color: 'from-red-600 to-rose-600' },
  { name: 'Scikit-Learn & ML', category: 'AI & ML', level: 'Proficient', icon: Brain, color: 'from-rose-500 to-red-700' },
  { name: 'OpenAI API & LLMs', category: 'AI & ML', level: 'Proficient', icon: Brain, color: 'from-red-600 to-rose-500' },

  { name: 'MongoDB', category: 'Database & Tools', level: 'Advanced', icon: Database, color: 'from-rose-600 to-red-600' },
  { name: 'MySQL / SQL', category: 'Database & Tools', level: 'Proficient', icon: Database, color: 'from-red-600 to-rose-700' },
  { name: 'Git & GitHub', category: 'Database & Tools', level: 'Advanced', icon: Wrench, color: 'from-rose-500 to-red-600' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0507] border border-red-900/50 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Flame className="w-4 h-4 text-red-500" />
            <span>Tech Arsenal</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-3 text-base">
            Modern frameworks, programming languages, and intelligent tools I leverage to build production-grade web solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-700 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-bold shadow-glow-red'
                  : 'bg-[#0a0507]/90 text-slate-400 hover:text-slate-100 border border-red-950/80 hover:border-red-600/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills 3D Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Tilt3DCard className="h-full rounded-2xl glass-card-3d p-6 border border-red-950/80 flex flex-col justify-between group hover:border-red-600/60">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-md font-bold`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#000000] border border-red-950 text-red-400">
                        {skill.level}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white font-heading group-hover:text-red-400 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 font-medium">{skill.category}</p>
                    </div>
                  </Tilt3DCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
