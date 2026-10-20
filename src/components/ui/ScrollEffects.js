'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Page-wide scroll effects: a reading-progress bar and staggered reveals for every [data-reveal] element.
// The pinned treatment walkthrough lives in sections/Treatment.js.
export default function ScrollEffects() {
  const bar = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to(bar.current, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.2, refreshPriority: 2 } });

      const items = gsap.utils.toArray('[data-reveal]');
      gsap.set(items, { opacity: 0, y: 32 });
      ScrollTrigger.batch(items, {
        start: 'top 90%',
        once: true,
        refreshPriority: 2, // refresh after the pinned section so positions below it are correct
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12, overwrite: true }),
      });
    });
    return () => mm.revert();
  });

  return <div ref={bar} aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1 origin-left scale-x-0 bg-brand-500" />;
}
