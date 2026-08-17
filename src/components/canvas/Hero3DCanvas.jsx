import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for object rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Tactical Crimson Wireframe Shield
    const outerGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0xff003c,
      wireframe: true,
      emissive: 0xdc2626,
      emissiveIntensity: 0.7,
      roughness: 0.2,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    mainGroup.add(outerMesh);

    // Inner Metallic Black Core
    const coreGeo = new THREE.OctahedronGeometry(1.3, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x050508,
      roughness: 0.1,
      metalness: 0.95,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Crimson Orbital Ring
    const ringGeo = new THREE.TorusGeometry(3.0, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff003c,
      transparent: true,
      opacity: 0.85,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.8;
    mainGroup.add(ringMesh);

    // Crimson Red Particles (The Batman Flare Smoke / Dust)
    const particleCount = 240;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const brightRed = new THREE.Color(0xff003c);
    const crimsonRed = new THREE.Color(0xdc2626);
    const darkRed = new THREE.Color(0x991b1b);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const randColor = Math.random() < 0.4 ? brightRed : (Math.random() < 0.7 ? crimsonRed : darkRed);
      colors[i * 3] = randColor.r;
      colors[i * 3 + 1] = randColor.g;
      colors[i * 3 + 2] = randColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Pure Crimson Flare Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Primary Crimson Spotlights
    const mainSpot = new THREE.SpotLight(0xff003c, 12, 25, Math.PI / 3, 0.5);
    mainSpot.position.set(0, 5, 6);
    scene.add(mainSpot);

    const fillSpot = new THREE.SpotLight(0xdc2626, 8, 20, Math.PI / 3, 0.5);
    fillSpot.position.set(-5, -3, 4);
    scene.add(fillSpot);

    // Mouse Tracking
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / container.clientWidth - 0.5;
      const y = (event.clientY - rect.top) / container.clientHeight - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotations
      outerMesh.rotation.y = elapsedTime * 0.25;
      outerMesh.rotation.x = elapsedTime * 0.15;

      coreMesh.rotation.y = -elapsedTime * 0.35;
      coreMesh.rotation.z = elapsedTime * 0.2;

      ringMesh.rotation.z = elapsedTime * 0.3;
      particleSystem.rotation.y = elapsedTime * 0.05;

      // Mouse inertia
      mainGroup.rotation.y += (targetX - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetY - mainGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[520px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
