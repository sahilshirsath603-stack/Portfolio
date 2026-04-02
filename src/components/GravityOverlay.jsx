import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

export default function GravityOverlay({ onClose }) {
  const sceneRef = useRef(null);
  const containerRef = useRef(null);
  const [percentRestored, setPercentRestored] = useState(0);

  useEffect(() => {
    // 1. Find all target elements in the real DOM
    const targetSelectors = 'h1, h2, h3, p, img, button, a, .glass-card';
    const domRoot = document.getElementById('gravity-content');
    if (!domRoot) return;

    const elements = domRoot.querySelectorAll(targetSelectors);
    
    // Setup Matter.js
    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite,
          Mouse = Matter.Mouse,
          MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();
    
    // We only use the Matter.js engine for calculation. We'll update our DOM clones manually.
    const width = window.innerWidth;
    // We need a tall enough area so items can fall, but let's floor it at max height
    const height = Math.max(window.innerHeight, document.body.scrollHeight);
    
    // Add boundaries (walls and floor)
    const floor = Bodies.rectangle(width / 2, height + 50, width * 2, 100, { isStatic: true });
    const wallLeft = Bodies.rectangle(-50, height / 2, 100, height * 2, { isStatic: true });
    const wallRight = Bodies.rectangle(width + 50, height / 2, 100, height * 2, { isStatic: true });
    
    Composite.add(engine.world, [floor, wallLeft, wallRight]);

    const items = [];

    // 2. Clone elements and create physics bodies
    Array.from(elements).forEach((el) => {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      
      // Skip hidden or tiny elements
      if (rect.width < 10 || rect.height < 10 || style.display === 'none' || style.opacity === '0') return;

      // Absolute position based on scroll
      const startX = rect.left + window.scrollX;
      const startY = rect.top + window.scrollY;
      
      const clone = el.cloneNode(true);
      
      // Remove ids from clones to avoid conflicts, disable pointer events
      clone.removeAttribute('id');
      clone.style.position = 'absolute';
      clone.style.left = '0px';
      clone.style.top = '0px';
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      clone.style.margin = '0';
      clone.style.pointerEvents = 'auto'; // allow mouse interaction later if needed
      clone.style.transformOrigin = 'center center';
      clone.style.transition = 'none'; // remove transitions

      containerRef.current.appendChild(clone);

      // Create body for this element. Center coordinates for Matter.js bodies.
      const body = Bodies.rectangle(
        startX + rect.width / 2, 
        startY + rect.height / 2, 
        rect.width, 
        rect.height, 
        {
          restitution: 0.6, // Bounciness
          friction: 0.1,
          density: 0.001,
        }
      );
      
      // Random slight initial push to make it look explosive
      Matter.Body.applyForce(body, body.position, {
        x: (Math.random() - 0.5) * 0.05,
        y: (Math.random() - 0.5) * 0.05
      });

      Composite.add(engine.world, body);
      items.push({ clone, body });
    });

    // Add mouse interaction
    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    Composite.add(engine.world, mouseConstraint);

    // Keep the mouse in sync with scrolling
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

    // 3. Update Loop: Apply Matter body coordinates to DOM clone styles
    const runner = Runner.create();
    Runner.run(runner, engine);

    const updateLoop = () => {
      items.forEach((item) => {
        const x = item.body.position.x - item.body.bounds.max.x + (item.body.bounds.max.x - item.body.bounds.min.x) / 2; // Approximate left
        const y = item.body.position.y - item.body.bounds.max.y + (item.body.bounds.max.y - item.body.bounds.min.y) / 2; // Approximate top
        const angle = item.body.angle;
        
        // Transform the clone
        item.clone.style.transform = `translate(${item.body.position.x - parseFloat(item.clone.style.width)/2}px, ${item.body.position.y - parseFloat(item.clone.style.height)/2}px) rotate(${angle}rad)`;
      });
      sceneRef.current = requestAnimationFrame(updateLoop);
    };
    
    updateLoop();

    return () => {
      if (sceneRef.current) cancelAnimationFrame(sceneRef.current);
      Runner.stop(runner);
      Engine.clear(engine);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full z-50 pointer-events-none" style={{ height: Math.max(window.innerHeight, document.body.scrollHeight) }}>
      <div 
        ref={containerRef} 
        className="w-full h-full pointer-events-auto overflow-hidden" 
      />
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="fixed bottom-10 right-10 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)] z-50 pointer-events-auto flex items-center justify-center gap-2 font-bold"
      >
        <RotateCcw className="w-5 h-5" /> Restore Layout
      </motion.button>
    </div>
  );
}
