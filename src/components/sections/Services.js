'use client';
import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { mainServices, moreServices } from '@/data/services';
import { PlusIcon } from '@/components/ui/Icons';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Services() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // 1. Header scroll entrance
        gsap.from('.services-header', {
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-header',
            start: 'top 88%',
            once: true,
          },
        });

        // 2. Staggered card reveals as visitor scrolls down
        const cards = gsap.utils.toArray('.service-card');
        gsap.set(cards, { opacity: 0, y: 35 });
        ScrollTrigger.batch(cards, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: 'power2.out',
              stagger: 0.12,
              overwrite: true,
            }),
        });

        // 3. "More conditions" section reveal
        const moreSection = containerRef.current?.querySelector('.more-services-section');
        if (moreSection) {
          gsap.from(moreSection, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: moreSection,
              start: 'top 85%',
              once: true,
            },
          });
        }
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section id="services" ref={containerRef} className="section bg-brand-50 overflow-hidden">
      <div className="container-x">
        <div className="services-header max-w-2xl">
          <p className="font-semibold text-brand-600">Services</p>
          <h2 className="section-title mt-2">Conditions we treat.</h2>
          <p className="mt-4 text-lg">
            Dr. Patel sees adults with arthritis, autoimmune and connective tissue diseases. Explore the conditions below, including specialized clinical care and treatment pathways.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((s) => (
            <article
              key={s.slug}
              className="service-card group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/15"
            >
              {/* Photo wrapper: preserves full image dimensions without cutting or cropping */}
              <div className="relative overflow-hidden rounded-t-2xl bg-slate-50">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  width="1376"
                  height="768"
                  className="service-img w-full h-auto block object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-navy group-hover:text-brand-600 transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">{s.text}</p>
                <Link
                  href="/appointment"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-700 hover:underline"
                >
                  Book a consultation →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="more-services-section mt-16">
          <h3 className="text-2xl font-semibold text-navy">Additional conditions we evaluate &amp; manage</h3>
          <p className="mt-2 text-slate-600">
            In addition to primary inflammatory arthritis and major systemic autoimmune disorders, Dr. Patel provides comprehensive diagnosis and long-term care for:
          </p>
          <ul className="mt-6 grid items-start gap-4 md:grid-cols-2">
            {moreServices.map((s) => (
              <li key={s.title}>
                {s.text ? (
                  <details className="group rounded-2xl bg-white px-5 py-4 ring-1 ring-brand-100 transition shadow-sm open:shadow-lg open:ring-brand-500">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                      {s.title}
                      <PlusIcon className="h-5 w-5 flex-none text-brand-600 transition-transform duration-200 group-open:rotate-45" />
                    </summary>
                    <p className="mt-3 leading-relaxed text-slate-600">{s.text}</p>
                  </details>
                ) : (
                  <div className="rounded-2xl bg-white px-5 py-4 font-semibold text-navy ring-1 ring-brand-100">
                    {s.title}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
