import React from 'react';

export default function StatsBar() {
  return (
    <div className="hero-stats-strip animate-strip">
      <div className="stats-container">
        {/* Stat 1: Years of Experience */}
        <div className="stat-item">
          <div className="stat-number">
            <span className="counter" data-target="20">0</span>
            <span className="plus">+</span>
          </div>
          <div className="stat-label">YEARS OF EXPERIENCE</div>
        </div>

        <div className="stat-divider" aria-hidden="true"></div>

        {/* Stat 2: Continents Covered */}
        <div className="stat-item">
          <div className="stat-number">
            <span className="counter" data-target="6">0</span>
          </div>
          <div className="stat-label">CONTINENTS COVERED</div>
        </div>

        <div className="stat-divider" aria-hidden="true"></div>

        {/* Stat 3: Trading Partners */}
        <div className="stat-item">
          <div className="stat-number">
            <span className="counter" data-target="40">0</span>
            <span className="plus">+</span>
          </div>
          <div className="stat-label">TRADING PARTNERS</div>
        </div>

        <div className="stat-divider" aria-hidden="true"></div>

        {/* Stat 4: Tonnes Handled / Year */}
        <div className="stat-item">
          <div className="stat-number">
            <span className="counter" data-target="1">0</span>
            <span className="plus">M+</span>
          </div>
          <div className="stat-label">TONNES HANDLED / YR</div>
        </div>

        {/* Right Chat / Scroll Indicator Icon (desktop only) */}
        <a href="#about" className="stats-right-widget" aria-label="Explore more details">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
