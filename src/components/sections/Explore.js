import Link from 'next/link';
import { ArrowRightIcon } from '@/components/ui/Icons';

const cards = [
  { href: '/services', title: 'Conditions we treat', text: 'Arthritis, autoimmune and connective tissue diseases, in plain language.' },
  { href: '/treatment', title: 'How we treat', text: 'Medication, therapy, lifestyle support and advanced options, step by step.' },
  { href: '/first-visit', title: 'Your first visit', text: 'The signs worth getting checked, and what to expect when you come in.' },
  { href: '/appointment', title: 'Book an appointment', text: 'Hours, address, phone, WhatsApp and a request form.' },
];

// Home-page doorway into the other pages.
export default function Explore() {
  return (
    <section className="section bg-brand-50">
      <div className="container-x">
        <h2 className="section-title max-w-xl" data-reveal>Explore the clinic.</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <li key={c.href} data-reveal>
              <Link href={c.href} className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-brand-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-600/15">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 flex-1">{c.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-600">Open <ArrowRightIcon className="h-5 w-5 transition group-hover:translate-x-1" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
