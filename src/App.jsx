import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative overflow-hidden min-h-screen text-slate-100 font-sans">
      <div className="fixed inset-0 min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black -z-10" />
      
      <Navbar />
      
      <main id="gravity-content" className="transition-opacity duration-1000 opacity-100 blur-0">
        <Hero />
        <About />
        <Education />
        <Certificates />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
