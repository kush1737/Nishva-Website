import Link from 'next/link';
import { clinic } from '@/data/clinic';
import { approach } from '@/data/content';

export default function About({ compact = false }) {
  const { doctor } = clinic;
  return (
    <section id="about" className="section bg-white">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[300px_1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[300px] pb-8" data-reveal>
          <div className="absolute left-5 top-5 h-[calc(100%-2rem)] w-full rounded-3xl bg-brand-600" aria-hidden="true" />
          <img src={doctor.photo} width="560" height="720" alt={`Portrait of ${doctor.name}`} className="relative aspect-[7/9] w-full rounded-3xl object-cover shadow-xl" />
          <div className="absolute inset-x-5 bottom-0 rounded-2xl bg-navy px-5 py-4 text-white shadow-xl">
            <p className="font-semibold">{doctor.name}</p>
            <p className="text-sm text-blue-200">{doctor.role}</p>
          </div>
        </div>

        <div data-reveal>
          <p className="font-semibold text-brand-600">About the doctor</p>
          <h2 className="section-title mt-2">Listening to you, caring for you.</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed">
            {doctor.bio.map((p) => <p key={p}>{p}</p>)}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {doctor.credentials.map((c) => <li key={c} className="rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100">{c}</li>)}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/appointment" className="btn-primary">Book an appointment</Link>
            {compact
              ? <Link href="/about" className="btn border border-brand-200 text-brand-700 hover:bg-brand-50">More about the doctor</Link>
              : <a href={clinic.contact.phoneHref} className="btn border border-brand-200 text-brand-700 hover:bg-brand-50">Call the clinic</a>}
          </div>
        </div>
      </div>

      {!compact && (
      <div className="container-x mt-20 grid gap-5 md:grid-cols-3">
        {approach.map((a, i) => (
          <div key={a.title} data-reveal className="rounded-2xl bg-gradient-to-br from-brand-600 to-navy p-7 text-white">
            <p className="text-sm font-semibold text-blue-200">0{i + 1}</p>
            <h3 className="mt-2 text-2xl font-semibold !text-white">{a.title}</h3>
            <p className="mt-2 text-blue-100/90">{a.text}</p>
          </div>
        ))}
      </div>
      )}
    </section>
  );
}
