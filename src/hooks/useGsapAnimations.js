import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapAnimations(scopeRef) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Smooth counter animation function for verified metrics
    const runCounters = () => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        if (isNaN(target)) return;

        if (prefersReducedMotion) {
          counter.textContent = String(target);
          return;
        }

        const duration = 2000; // ms
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Easing out cubic: 1 - Math.pow(1 - progress, 3)
          const easeOut = 1 - Math.pow(1 - progress, 3);
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

    // Scoped GSAP Context
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set('.animate-item, .hero-stats-strip, .site-header', {
          opacity: 1,
          transform: 'none'
        });
        runCounters();
        return;
      }

      // Initial clean state
      gsap.set('.site-header', { y: -25, opacity: 0 });
      gsap.set('.animate-item', { y: 28, opacity: 0 });
      gsap.set('.hero-stats-strip', { y: 25, opacity: 0 });
      gsap.set('#heroBgImage', { scale: 1.05 });

      // Master entrance timeline: Slow, elegant, intentional
      const heroTl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete: () => {
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
          duration: 0.8
        })
        // Subtle background scale settling
        .to('#heroBgImage', {
          scale: 1,
          duration: 2.2,
          ease: 'power1.out'
        }, '-=0.6')
        // Headline line-by-line reveal, eyebrow, subtext, buttons
        .to('.animate-item', {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.14
        }, '-=1.8')
        // Bottom stats strip reveals
        .to('.hero-stats-strip', {
          y: 0,
          opacity: 1,
          duration: 0.8,
          onComplete: runCounters
        }, '-=0.6');

      // Subtle background parallax on scroll
      const heroBg = document.getElementById('heroBgImage');
      if (heroBg) {
        gsap.to(heroBg, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2
          }
        });
      }
    }, scopeRef);

    // Tab visibility handling
    const onVisibilityChange = () => {
      if (document.hidden) {
        document.body.classList.add('tab-paused');
      } else {
        document.body.classList.remove('tab-paused');
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Clean up GSAP context on unmount
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      ctx.revert();
    };
  }, [scopeRef]);
}
