'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Words from '@/components/ui/Words';
import { CheckIcon } from '@/components/ui/Icons';
import { treatmentIntro, treatmentSteps } from '@/data/treatments';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Pinned, scroll-scrubbed walkthrough. The section stays on screen while the visitor scrolls;
// the intro words light up, then each treatment appears in turn. Scrolling back reverses it.
// Without JavaScript or with "reduce motion" on, everything simply stacks as normal content.
export default function Treatment() {
  const root = useRef(null);

  useGSAP(() => {
    const q = gsap.utils.selector(root);
    const mm = gsap.matchMedia();

    mm.add({ ok: '(prefers-reduced-motion: no-preference)', desk: '(min-width: 1024px)' }, (ctx) => {
      if (!ctx.conditions.ok) return undefined;
      const el = root.current;
      const steps = q('.t-step');
      const bars = q('.t-rail i');
      const words = q('.t-word');
      el.classList.add('pin-on');

      gsap.set(steps, { opacity: 0, y: 24 });
      gsap.set(steps[0], { opacity: 1, y: 0 });
      gsap.set(bars, { opacity: 0.25 });
      gsap.set(bars[0], { opacity: 1 });
      gsap.set(words, { opacity: 0.2 });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: el,
          start: 'top top+=68', // sits just under the sticky header
          end: ctx.conditions.desk ? '+=450%' : '+=380%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          refreshPriority: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(words, { opacity: 1, stagger: 0.05, duration: 0.5 }, 0);
      for (let k = 1; k < steps.length; k++) {
        tl.to(steps[k - 1], { opacity: 0, y: -24, duration: 0.3 }, 1.3 * k - 0.3)
          .to(steps[k], { opacity: 1, y: 0, duration: 0.3 }, 1.3 * k - 0.05)
          .to(bars[k], { opacity: 1, duration: 0.3 }, 1.3 * k - 0.05);
      }
      tl.to(q('.t-knee'), { scale: 1.12, duration: 5.4 }, 0); // the image drifts closer as you scroll
      tl.to({}, { duration: 0.5 }, 5.4); // short hold before the page continues

      return () => el.classList.remove('pin-on');
    });

    return () => mm.revert();
  }, { scope: root });

  return (
    <section id="treatment" ref={root} aria-labelledby="treatment-title" className="treat bg-gradient-to-b from-navy-900 via-navy to-brand-700 text-white">
      <div className="treat-in container-x grid items-center gap-10 px-5 py-20 lg:grid-cols-[5fr_6fr] lg:gap-16 lg:py-24">
        <figure className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
          <img src={treatmentIntro.image} alt={treatmentIntro.alt} width="578" height="671" loading="lazy" className="t-knee w-full origin-[50%_60%] object-cover" />
        </figure>

        <div>
          <div className="t-rail mb-8 hidden gap-2" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((n) => <i key={n} className="block h-1 flex-1 rounded-full bg-blue-300" />)}
          </div>
          <div className="t-steps">
            <div className="t-step">
              <h2 id="treatment-title" className="text-4xl font-semibold leading-[1.05] !text-white md:text-5xl lg:text-6xl"><Words text={treatmentIntro.title} /></h2>
              <p className="mt-6 max-w-md text-lg text-blue-100/90 md:text-xl">{treatmentIntro.text}</p>
            </div>
            {treatmentSteps.map((s) => (
              <div key={s.title} className="t-step">
                <img src={s.image} alt={s.alt} width="800" height="420" loading="lazy" className="t-banner mb-6 aspect-[16/7] w-full rounded-2xl object-cover shadow-xl ring-1 ring-white/20" />
                <h3 className="text-3xl font-semibold leading-tight !text-white md:text-4xl">{s.title}</h3>
                <ul className="mt-5 grid gap-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-lg text-blue-50 md:text-xl">
                      <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-500 text-white"><CheckIcon className="h-4 w-4" /></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
