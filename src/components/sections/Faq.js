import { faqs } from '@/data/content';
import { PlusIcon } from '@/components/ui/Icons';

export default function Faq() {
  return (
    <section id="faq" className="section bg-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="section-title" data-reveal>Questions.</h2>
        <div className="mt-8" data-reveal>
          {faqs.map((f) => (
            <details key={f.q} className="group border-t border-brand-100 py-5 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {f.q}
                <PlusIcon className="h-5 w-5 flex-none text-brand-600 transition group-open:rotate-45" />
              </summary>
              <p className="mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
