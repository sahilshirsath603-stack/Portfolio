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
    <div className="relative min-h-screen text-slate-100 font-sans selection:bg-rose-500/30 selection:text-rose-200">
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
