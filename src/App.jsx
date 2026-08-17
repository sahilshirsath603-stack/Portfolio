import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import ScrollProgress from './components/canvas/ScrollProgress';
import CursorAura from './components/canvas/CursorAura';
import RainOverlay from './components/canvas/RainOverlay';

function App() {
  return (
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-rose-500/30 selection:text-rose-200 bg-black">
      {/* The Batman Atmospheric Wallpaper Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src="/batman_bg.jpeg"
          alt="The Batman Dark Knight Background"
          className="w-full h-full object-cover object-top opacity-35 md:opacity-45 filter brightness-90 contrast-125 scale-105"
        />
        {/* Dark Vignette & Atmospheric Red Radial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/55 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-black/80" />
      </div>

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Rain Streak Overlay */}
      <RainOverlay />

      {/* Interactive Cursor Aura Follower */}
      <CursorAura />

      {/* Main Navbar */}
      <Navbar />

      {/* Page Sections */}
      <main className="relative z-10 space-y-4">
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
