import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesPreview from './components/ServicesPreview';
import { useGsapAnimations } from './hooks/useGsapAnimations';
import './style.css';

export default function App() {
  const mainRef = useRef(null);

  // Initialize scoped GSAP animations
  useGsapAnimations(mainRef);

  return (
    <div className="app-container" ref={mainRef}>
      <Navbar />
      <main>
        <Hero />
        <ServicesPreview />
      </main>
    </div>
  );
}
