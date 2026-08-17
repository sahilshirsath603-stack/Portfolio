import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certificates' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300 pointer-events-none"
    >
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? 'bg-[#050508]/90 backdrop-blur-xl border border-red-900/50 shadow-2xl shadow-black py-3 px-6'
            : 'bg-transparent py-4 px-6'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 via-rose-500 to-red-700 p-[2px] shadow-glow-red transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#000000] rounded-full flex items-center justify-center">
                <Flame className="w-5 h-5 text-red-500 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white font-heading">
              Sahil<span className="text-red-500">.dev</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-[#090507]/80 p-1.5 rounded-full border border-red-950/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive ? 'text-white font-bold' : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-full shadow-lg shadow-red-600/50 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Quick CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-500 to-red-700 p-[1px] hover:shadow-glow-red transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="block px-4 py-2 bg-[#000000] rounded-full hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-600 transition-all font-bold">
                Let's Talk
              </span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#0a0507] border border-red-900/50 text-red-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 max-w-7xl mx-auto rounded-3xl bg-[#050508]/95 backdrop-blur-2xl border border-red-900/50 p-6 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-base font-semibold text-slate-300 hover:text-red-400 hover:bg-red-950/30 hover:border hover:border-red-900/50 transition-all flex items-center justify-between"
                >
                  {link.name}
                  <span className="text-xs text-red-400">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
