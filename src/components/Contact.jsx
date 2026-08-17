import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Copy, Check, Send, Flame, Sparkles } from 'lucide-react';
import Tilt3DCard from './canvas/Tilt3DCard';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'sahilshirsath603@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    { name: 'GitHub', href: 'https://github.com/sahilshirsath603-stack', icon: Github, color: 'hover:text-red-400 hover:border-red-600/60' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sahil-shirsath-064690255', icon: Linkedin, color: 'hover:text-rose-400 hover:border-rose-600/60' },
    { name: 'X (Twitter)', href: 'https://x.com/Sam_Shirsath_16', icon: Twitter, color: 'hover:text-red-400 hover:border-red-600/60' },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0507] border border-red-900/50 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Flame className="w-4 h-4 text-red-500" />
            <span>Connect Channel</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading">
            Let's Build Something <span className="text-gradient">Extraordinary</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-base">
            I am currently open to full-stack engineering roles, ML opportunities, and collaborative projects. Feel free to reach out anytime!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-700 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* 3D Glass Contact Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Tilt3DCard className="rounded-3xl glass-card-3d p-8 sm:p-12 border border-red-900/50 text-center relative overflow-hidden">
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-500 to-red-700 p-[2px] mx-auto shadow-glow-red">
                <div className="w-full h-full bg-[#000000] rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-red-400" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  sahilshirsath603@gmail.com
                </h3>
                <p className="text-xs text-slate-400 mt-2 font-medium">
                  Direct email • Fastest response rate
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-bold shadow-glow-red hover:shadow-glow-crimson transition-all transform hover:-translate-y-1"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#0a0507] hover:bg-[#150a0e] text-slate-200 font-semibold border border-red-900/50 transition-all hover:border-red-500"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="pt-8 border-t border-red-950/80 flex justify-center gap-4">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-2xl bg-[#000000] border border-red-950 text-slate-400 ${s.color} transition-all duration-300 transform hover:-translate-y-1`}
                      title={s.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>

            </div>
          </Tilt3DCard>
        </motion.div>

        {/* Footer info */}
        <div className="mt-16 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-red-500" />
          <span>Designed & Built with React, Tailwind CSS, Three.js & Framer Motion by Sahil Shirsath</span>
        </div>

      </div>
    </section>
  );
}
