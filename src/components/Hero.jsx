import React, { useRef } from 'react';
import StatsBar from './StatsBar';

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="PR Global Logistics Hero">
      {/* Background container extending seamlessly across viewport including bottom stats overlay */}
      <div className="hero-bg-container">
        <div
          className="hero-bg-image"
          id="heroBgImage"
          role="img"
          aria-label="Cargo container vessel sailing into golden sunrise"
        ></div>
        {/* Balanced cinematic navy gradient overlay */}
        <div className="hero-gradient-overlay"></div>
      </div>

      {/* Main Hero Content: Positioned with mobile-first responsive padding and alignment */}
      <div className="hero-content-wrapper">
        <div className="hero-main-column">
          {/* Eyebrow Label with subtle warm gold rule */}
          <div className="hero-eyebrow-container animate-item">
            <span className="eyebrow-accent-line" aria-hidden="true"></span>
            <span className="eyebrow-text">GLOBAL LOGISTICS SOLUTIONS</span>
          </div>

          {/* Main Headline: Two-line editorial composition with responsive clamp */}
          <h1 className="hero-headline animate-item">
            <span className="headline-line">Trade, moved with</span>
            <span className="headline-line">
              <span className="highlight-gold-italic">precision.</span>
            </span>
          </h1>

          {/* Editorial Description: Compact mobile line-height and max-width */}
          <p className="hero-subtext animate-item">
            PR Global Logistics delivers seamless logistics solutions across continents, connecting businesses with opportunities worldwide.
          </p>

          {/* Dual CTA Buttons: Compact mobile height, min 44px touch target, responsive flex */}
          <div className="hero-cta-group animate-item">
            <a href="#quote" className="hero-btn-primary">
              <span>REQUEST A QUOTE</span>
              <svg className="btn-arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9 1L13 5M13 5L9 9M13 5H1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <a href="#services" className="hero-btn-secondary" id="exploreServicesBtn">
              <span>EXPLORE OUR SERVICES</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Statistics Strip Integrated Directly into Hero with mobile 2x2 grid */}
      <StatsBar />
    </section>
  );
}
