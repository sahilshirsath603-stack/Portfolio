import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-blue-900/5 -z-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a href="mailto:sahilshirsath603@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 font-medium transition-all hover:scale-105">
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
          
          <div className="flex justify-center gap-6 mt-16 pt-12 border-t border-slate-800/50">
            <a href="https://github.com/sahilshirsath603-stack" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sahil-shirsath-064690255" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          
          <p className="text-sm text-slate-500 mt-12">
            Designed & Built by Sahil Shirsath
          </p>
        </motion.div>
      </div>
    </section>
  );
}
