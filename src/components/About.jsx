import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../profile.jpg.png';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-4">
              <span className="w-12 h-[2px] bg-blue-500"></span>
              About Me
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed pl-16">
              <p>
                Hello! I'm Sahil Shirsath, an aspiring software engineer with expertise in full-stack development and machine learning. I am currently finishing my B.Tech in Computer Science at Sandip University.
              </p>
              <p>
                I have extensive experience building real-world applications, including an NLP-based Fake News Detection system and a real-time chat platform (Connectify) with live interaction features. I focus on delivering efficient, scalable, and impactful solutions using modern tech stacks like React and Node.js.
              </p>
              <p>
                When I'm not coding, I'm always looking to learn more about the latest technologies in the web development space.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 border-2 border-blue-500 translate-x-4 translate-y-4 rounded-xl -z-10 transition-transform hover:translate-x-2 hover:translate-y-2"></div>
            <img 
              src={profileImage} 
              alt="Sahil Shirsath" 
              className="rounded-xl w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
