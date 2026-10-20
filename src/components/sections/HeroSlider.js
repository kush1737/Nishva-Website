'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { slides } from '@/data/slides';
import { clinic } from '@/data/clinic';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/ui/Icons';

const INTERVAL = 6000; // ms between automatic slide changes

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  // Respect "reduce motion": no automatic changes, visitors use the buttons instead.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Advance automatically; the timer restarts whenever the slide changes or hover/focus ends.
  useEffect(() => {
    if (paused || reduced) return undefined;
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL);
    return () => clearTimeout(id);
  }, [index, paused, reduced]);

  const go = (n) => setIndex((n + slides.length) % slides.length);

  return (
    <section
      id="top"
      aria-roledescription="carousel"
      aria-label="Featured care"
      className="relative overflow-hidden bg-navy-900 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <h1 className="sr-only">{clinic.name}, {clinic.doctor.name}</h1>
      <div className="relative h-[640px] md:h-[660px]">
        {slides.map((s, n) => {
          const active = n === index;
          const rise = active ? 'animate-rise' : '';
          return (
            <div
              key={s.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${n + 1} of ${slides.length}`}
              aria-hidden={!active}
              inert={!active}
              className={`absolute inset-0 transition-opacity duration-700 ${active ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
            >
              <img
                src={s.image}
                alt={s.alt}
                loading={n === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 h-full w-full object-cover md:left-[28%] md:w-[72%] md:[-webkit-mask-image:linear-gradient(to_right,transparent,#000_40%)] md:[mask-image:linear-gradient(to_right,transparent,#000_40%)]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/80 to-navy-900/95 md:bg-none" />
              <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-5 pb-28">
                <div className="max-w-xl">
                  <p className={`mb-4 inline-block rounded-full bg-brand-500/30 px-4 py-1.5 text-sm font-semibold text-blue-100 ring-1 ring-brand-300/40 ${rise}`}>{s.eyebrow}</p>
                  <h2 className={`text-balance text-4xl font-semibold leading-[1.05] !text-white md:text-6xl ${rise} [animation-delay:120ms]`}>{s.title}</h2>
                  <p className={`mt-5 max-w-md text-lg text-blue-100/90 ${rise} [animation-delay:240ms]`}>{s.text}</p>
                  <div className={`mt-8 flex flex-wrap gap-3 ${rise} [animation-delay:360ms]`}>
                    <Link href="/appointment" className="btn-primary">Book an appointment</Link>
                    <Link href="/services" className="btn-outline">Our services</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute inset-x-0 bottom-24 z-20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
            <div className="flex items-center gap-2" role="group" aria-label="Choose slide">
              {slides.map((s, n) => (
                <button key={s.id} type="button" onClick={() => go(n)} aria-label={`Show slide ${n + 1}: ${s.eyebrow}`} aria-current={n === index} className="group py-3">
                  <span className={`block h-1.5 overflow-hidden rounded-full bg-white/30 transition-all ${n === index ? 'w-12' : 'w-6 group-hover:bg-white/50'}`}>
                    <span className={`block h-full origin-left rounded-full bg-white ${n === index ? (paused || reduced ? 'scale-x-100' : 'animate-fill') : 'scale-x-0'}`} />
                  </span>
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(index - 1)} className="rounded-xl border border-white/30 p-3 text-white transition hover:bg-white/15" aria-label="Previous slide"><ArrowLeftIcon /></button>
              <button type="button" onClick={() => go(index + 1)} className="rounded-xl border border-white/30 p-3 text-white transition hover:bg-white/15" aria-label="Next slide"><ArrowRightIcon /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
