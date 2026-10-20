import { signs } from '@/data/content';
import { CheckIcon } from '@/components/ui/Icons';

export default function Signs() {
  return (
    <section id="signs" className="section bg-brand-50">
      <div className="container-x">
        <div className="max-w-2xl" data-reveal>
          <p className="font-semibold text-brand-600">Know the signs</p>
          <h2 className="section-title mt-2">When to see a rheumatologist.</h2>
          <p className="mt-4 text-lg">These are common reasons people get checked. They are not a diagnosis.</p>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {signs.map((s) => (
            <li key={s} data-reveal className="flex items-start gap-4 rounded-2xl bg-white p-5 text-lg font-medium text-navy shadow-sm ring-1 ring-brand-100">
              <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-600 text-white"><CheckIcon className="h-4 w-4" /></span>
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate-500">Sudden severe symptoms need your nearest hospital emergency department, not a clinic visit.</p>
      </div>
    </section>
  );
}
