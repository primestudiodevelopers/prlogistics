/**
 * PR GLOBAL LOGISTICS — HIGH PERFORMANCE GSAP INTERACTION SYSTEM
 * Optimized for single-init, zero duplicate timelines, and low GPU/CPU footprint.
 */

(() => {
  // Guard against duplicate script initialization
  if (window.__pr_logistics_init) return;
  window.__pr_logistics_init = true;

  const initSite = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Efficient Passive Header Scroll with RAF Throttling
    const siteHeader = document.getElementById('site-header');
    if (siteHeader) {
      let isScrolled = false;
      let ticking = false;

      const updateHeader = () => {
        const shouldScroll = window.scrollY > 40;
        if (shouldScroll !== isScrolled) {
          isScrolled = shouldScroll;
          siteHeader.classList.toggle('scrolled', isScrolled);
        }
        ticking = false;
      };

      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(updateHeader);
          ticking = true;
        }
      }, { passive: true });
      updateHeader();
    }

    // 2. Mobile Hamburger Navigation Drawer
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-submenu a, .mobile-cta-box a');

    if (mobileToggle && mobileNav) {
      const toggleMenu = () => {
        const isOpen = mobileToggle.classList.toggle('active');
        mobileNav.classList.toggle('open');
        mobileToggle.setAttribute('aria-expanded', String(isOpen));
        mobileNav.setAttribute('aria-hidden', String(!isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
      };

      mobileToggle.addEventListener('click', toggleMenu);

      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (mobileNav.classList.contains('open')) {
            toggleMenu();
          }
        });
      });
    }

    // Mobile Submenu Toggle
    const mobileSubmenuToggle = document.querySelector('.mobile-submenu-toggle');
    const mobileSubmenu = document.querySelector('.mobile-submenu');
    if (mobileSubmenuToggle && mobileSubmenu) {
      mobileSubmenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = mobileSubmenuToggle.classList.toggle('expanded');
        mobileSubmenu.classList.toggle('open');
        mobileSubmenuToggle.setAttribute('aria-expanded', String(isExpanded));
      });
    }

    // 3. Tab Visibility Optimization: Pause animations when tab is backgrounded
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        document.body.classList.add('tab-paused');
      } else {
        document.body.classList.remove('tab-paused');
      }
    });

    // 4. Smooth Counter Animation for Verified Statistics
    const counters = document.querySelectorAll('.counter');
    let counted = false;

    const runCounters = () => {
      if (counted) return;
      counted = true;

      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        if (isNaN(target)) return;

        if (prefersReducedMotion) {
          counter.textContent = String(target);
          return;
        }

        const duration = 1800; // ms
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Fast ease-out quint: 1 - Math.pow(1 - progress, 5)
          const easeOut = 1 - Math.pow(1 - progress, 5);
          const currentVal = Math.floor(easeOut * target);

          counter.textContent = String(currentVal);

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = String(target);
          }
        };

        requestAnimationFrame(updateCounter);
      });
    };

    // 5. GSAP Entrance Animations (Transform and Opacity only, zero layout shifts)
    if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
      if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
      }

      // Initial clean state
      gsap.set('.site-header', { y: -25, opacity: 0 });
      gsap.set('.animate-item', { y: 28, opacity: 0 });
      gsap.set('.hero-stats-strip', { y: 32, opacity: 0 });
      gsap.set('.network-arcs', { opacity: 0 });
      gsap.set('.network-nodes', { opacity: 0 });

      // Master entrance timeline
      const heroTl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          // Release will-change properties after animation completes to free GPU memory
          const animItems = document.querySelectorAll('.animate-item');
          animItems.forEach(el => {
            el.style.willChange = 'auto';
          });
        }
      });

      heroTl
        // Header fades down
        .to('.site-header', {
          y: 0,
          opacity: 1,
          duration: 0.75,
        })
        // Global network vectors reveal
        .to(['.network-arcs', '.network-nodes'], {
          opacity: 0.9,
          duration: 1.0,
        }, '-=0.4')
        // Headline, Eyebrow, Subtext, Buttons cascade
        .to('.animate-item', {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
        }, '-=0.8')
        // Bottom stats strip reveals and triggers number count
        .to('.hero-stats-strip', {
          y: 0,
          opacity: 1,
          duration: 0.7,
          onComplete: runCounters
        }, '-=0.4');

      // Lightweight ScrollTrigger for subtle hero background parallax
      const heroBg = document.getElementById('heroBgImage');
      if (heroBg && typeof ScrollTrigger !== 'undefined') {
        gsap.to(heroBg, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
          }
        });
      }

      // Throttled mouse parallax for global network graphic (60fps capped)
      const networkGraphic = document.getElementById('networkGraphic');
      if (networkGraphic) {
        let mouseTicking = false;
        let mouseX = 0;
        let mouseY = 0;

        window.addEventListener('mousemove', (e) => {
          mouseX = (e.clientX / window.innerWidth - 0.5) * 12;
          mouseY = (e.clientY / window.innerHeight - 0.5) * 8;

          if (!mouseTicking) {
            requestAnimationFrame(() => {
              gsap.to(networkGraphic, {
                x: mouseX,
                y: mouseY,
                duration: 1.2,
                ease: 'power1.out',
                overwrite: 'auto'
              });
              mouseTicking = false;
            });
            mouseTicking = true;
          }
        }, { passive: true });
      }
    } else {
      // Fallback for reduced motion or environment without GSAP
      document.querySelectorAll('.animate-item, .hero-stats-strip, .site-header, .network-arcs, .network-nodes').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      runCounters();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
  } else {
    initSite();
  }
})();
