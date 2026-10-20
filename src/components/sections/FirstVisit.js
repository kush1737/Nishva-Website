import { visitSteps } from '@/data/content';

export default function FirstVisit() {
  return (
    <section id="visit" className="section bg-white">
      <div className="container-x">
        <div className="max-w-2xl" data-reveal>
          <p className="font-semibold text-brand-600">Your first visit</p>
          <h2 className="section-title mt-2">What to expect.</h2>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {visitSteps.map((s, i) => (
            <li key={s.title} data-reveal className="relative rounded-2xl border border-brand-100 p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-lg font-semibold text-white">{i + 1}</span>
              <h3 className="mt-5 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
