import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header id="site-header" className={`site-header ${isScrolled ? 'scrolled' : ''}`} role="banner">
      <div className="nav-container">
        {/* Brand Logo on Left */}
        <a href="#home" className="brand-logo-link" aria-label="PR Global Logistics Home" onClick={closeMobileMenu}>
          <img
            src="/images/pr_global_logo.png"
            alt="PR Global Logistics — Your Cargo • Our Commitment"
            className="brand-logo-img"
            width="180"
            height="62"
            fetchPriority="high"
          />
        </a>

        {/* Desktop Navigation Centred */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link active">
                <span>HOME</span>
                <span className="active-indicator"></span>
              </a>
            </li>
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <button
                type="button"
                className={`nav-link dropdown-toggle ${desktopDropdownOpen ? 'open' : ''}`}
                aria-expanded={desktopDropdownOpen}
                aria-haspopup="true"
                onClick={() => setDesktopDropdownOpen(prev => !prev)}
              >
                <span>OUR SERVICES</span>
                <svg
                  className={`dropdown-chevron ${desktopDropdownOpen ? 'rotated' : ''}`}
                  width="9"
                  height="5"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`dropdown-menu ${desktopDropdownOpen ? 'show' : ''}`} role="menu">
                <a href="#ocean-freight" className="dropdown-item" role="menuitem" onClick={() => setDesktopDropdownOpen(false)}>
                  <div className="dropdown-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M2 19c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1"/>
                      <path d="M4 17l1.5-6h13L20 17"/>
                      <path d="M12 4v7M9 7h6"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Ocean Freight Forwarding</strong>
                    <span>FCL & LCL global maritime transit</span>
                  </div>
                </a>
                <a href="#air-freight" className="dropdown-item" role="menuitem" onClick={() => setDesktopDropdownOpen(false)}>
                  <div className="dropdown-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7 3.9 8.1l5.7 3.6-2.8 2.8-2.8-.7L3 14.8l3.7 2.1 2.1 3.7 1-1-.7-2.8 2.8-2.8 3.6 5.7 1.4-1.5z"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Air Freight Logistics</strong>
                    <span>Express & chartered global flight routes</span>
                  </div>
                </a>
                <a href="#customs-brokerage" className="dropdown-item" role="menuitem" onClick={() => setDesktopDropdownOpen(false)}>
                  <div className="dropdown-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Customs Brokerage</strong>
                    <span>Compliant clearance & tariff consulting</span>
                  </div>
                </a>
                <a href="#warehousing" className="dropdown-item" role="menuitem" onClick={() => setDesktopDropdownOpen(false)}>
                  <div className="dropdown-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 21h18M3 7l9-4 9 4v14H3V7z"/>
                      <path d="M9 21v-8h6v8"/>
                    </svg>
                  </div>
                  <div>
                    <strong>Warehousing & Distribution</strong>
                    <span>Bonded hubs & temperature-controlled storage</span>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link"><span>ABOUT US</span></a>
            </li>
            <li className="nav-item">
              <a href="#network" className="nav-link"><span>OUR NETWORK</span></a>
            </li>
            <li className="nav-item">
              <a href="#tracking" className="nav-link"><span>TRACKING</span></a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link"><span>CONTACT US</span></a>
            </li>
          </ul>
        </nav>

        {/* Right CTA Button: Outlined Minimal Box */}
        <div className="nav-cta-wrapper">
          <a href="#quote" className="btn-quote-outline">
            <span>REQUEST A QUOTE</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          id="mobile-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} id="mobile-nav" aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-list">
            <li>
              <a href="#home" className="mobile-nav-link active" onClick={closeMobileMenu}>HOME</a>
            </li>
            <li className="mobile-dropdown-parent">
              <div className="mobile-dropdown-header">
                <a href="#services" className="mobile-nav-link" onClick={closeMobileMenu}>OUR SERVICES</a>
                <button
                  type="button"
                  className={`mobile-submenu-toggle ${mobileSubmenuOpen ? 'expanded' : ''}`}
                  aria-label="Toggle services menu"
                  aria-expanded={mobileSubmenuOpen}
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileSubmenuOpen(prev => !prev);
                  }}
                >
                  <svg width="12" height="8" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <ul className={`mobile-submenu ${mobileSubmenuOpen ? 'open' : ''}`}>
                <li><a href="#ocean-freight" onClick={closeMobileMenu}>Ocean Freight Forwarding</a></li>
                <li><a href="#air-freight" onClick={closeMobileMenu}>Air Freight Logistics</a></li>
                <li><a href="#customs-brokerage" onClick={closeMobileMenu}>Customs Brokerage</a></li>
                <li><a href="#warehousing" onClick={closeMobileMenu}>Warehousing & Distribution</a></li>
              </ul>
            </li>
            <li><a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>ABOUT US</a></li>
            <li><a href="#network" className="mobile-nav-link" onClick={closeMobileMenu}>OUR NETWORK</a></li>
            <li><a href="#tracking" className="mobile-nav-link" onClick={closeMobileMenu}>TRACKING</a></li>
            <li><a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>CONTACT US</a></li>
          </ul>
          <div className="mobile-cta-box">
            <a href="#quote" className="btn-quote-gold-fill" onClick={closeMobileMenu}>
              <span>REQUEST A QUOTE</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
