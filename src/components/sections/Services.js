import Link from 'next/link';
import { mainServices, moreServices } from '@/data/services';
import { PlusIcon } from '@/components/ui/Icons';

export default function Services() {
  return (
    <section id="services" className="section bg-brand-50">
      <div className="container-x">
        <div className="max-w-2xl" data-reveal>
          <p className="font-semibold text-brand-600">Services</p>
          <h2 className="section-title mt-2">Conditions we treat.</h2>
          <p className="mt-4 text-lg">Dr. Patel sees adults with arthritis, autoimmune and connective tissue diseases. These are the main conditions, with more below.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((s) => (
            <article key={s.slug} data-reveal className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/15">
              <div className="aspect-[16/9] overflow-hidden bg-navy-900">
                <img src={s.image} alt={s.alt} loading="lazy" width="1200" height="670" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed">{s.text}</p>
                <Link href="/appointment" className="mt-5 text-sm font-semibold text-brand-600 hover:underline">Book a consultation</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16" data-reveal>
          <h3 className="text-2xl font-semibold">More conditions we manage</h3>
          <ul className="mt-6 grid items-start gap-3 md:grid-cols-2">
            {moreServices.map((s) => (
              <li key={s.title}>
                {s.text ? (
                  <details className="group rounded-2xl bg-white px-5 py-4 ring-1 ring-brand-100 open:shadow-lg open:ring-brand-500">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                      {s.title}
                      <PlusIcon className="h-5 w-5 flex-none text-brand-600 transition group-open:rotate-45" />
                    </summary>
                    <p className="mt-3 leading-relaxed">{s.text}</p>
                  </details>
                ) : (
                  <div className="rounded-2xl bg-white px-5 py-4 font-semibold text-navy ring-1 ring-brand-100">{s.title}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
