import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout } from 'lucide-react';

const skills = [
  { name: 'React', category: 'Frontend', icon: Layout },
  { name: 'JavaScript / TypeScript', category: 'Frontend', icon: Code2 },
  { name: 'Tailwind CSS', category: 'Frontend', icon: Layout },
  { name: 'Framer Motion', category: 'Frontend', icon: Layout },
  { name: 'Node.js', category: 'Backend', icon: Database },
  { name: 'Express', category: 'Backend', icon: Database },
  { name: 'MongoDB / PostgreSQL', category: 'Database', icon: Database },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-blue-500"></span>
            Technical Arsenal
          </h2>
          <p className="text-slate-400 max-w-2xl pl-16">
            A comprehensive list of the tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-card hover:border-blue-500/50 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center group transition-colors"
            >
              <skill.icon className="w-8 h-8 text-slate-400 group-hover:text-blue-400 transition-colors" />
              <div>
                <h3 className="text-slate-200 font-medium">{skill.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{skill.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
