import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Brain, Database, Layers, Flame } from 'lucide-react';
import profileImage from '../profile.jpg.png';
import Tilt3DCard from './canvas/Tilt3DCard';

export default function About() {
  const highlights = [
    { icon: Code, title: 'Full-Stack Development', desc: 'React, Node.js, Express, REST APIs, WebSockets' },
    { icon: Brain, title: 'Machine Learning', desc: 'NLP, Scikit-Learn, Sentiment & Text Analysis' },
    { icon: Database, title: 'Database & Backend', desc: 'MongoDB, MySQL, System Design & Architecture' },
    { icon: Layers, title: 'UI/UX & Modern Web', desc: 'Responsive Design, Tailwind CSS, Framer Motion' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
            <span>Developer Dossier</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading">
            About <span className="text-gradient">Sahil Shirsath</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-700 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar / Photo with 3D Holographic Tilt Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <Tilt3DCard className="w-full max-w-md rounded-3xl p-3 glass-card-3d border border-red-900/50 group">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={profileImage}
                  alt="Sahil Shirsath"
                  className="w-full h-full object-cover contrast-125 group-hover:contrast-100 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#050508]/90 backdrop-blur-md border border-red-900/50">
                  <h4 className="text-lg font-bold text-white font-heading">Sahil Shirsath</h4>
                  <p className="text-xs text-red-400 font-medium">Software Engineer • CSE Grad</p>
                </div>
              </div>
            </Tilt3DCard>
          </div>

          {/* Bio & Highlighting Cards */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-slate-300 leading-relaxed"
            >
              <p className="text-lg text-slate-300 font-medium">
                Hello! I'm <span className="text-white font-bold">Sahil Shirsath</span>, a software engineer with expertise in full-stack web development and machine learning. I graduated with a B.Tech in Computer Science & Engineering from Sandip University.
              </p>
              <p className="text-slate-400">
                I have extensive experience building real-world applications, including an NLP-based Fake News Detection system and a real-time chat platform (Connectify) with live interaction features. I focus on delivering efficient, scalable, and impactful solutions using modern tech stacks like React, Node.js, and Python.
              </p>
            </motion.div>

            {/* Core Capability Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-2xl bg-[#0a0507]/90 border border-red-950/80 backdrop-blur-md hover:border-red-600/60 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-800/40 flex items-center justify-center text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white font-heading">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-snug">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
