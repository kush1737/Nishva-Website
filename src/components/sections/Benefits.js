import { benefits } from '@/data/content';
import { ShieldIcon, MoveIcon, HeartIcon, CalendarIcon } from '@/components/ui/Icons';

const icons = [ShieldIcon, MoveIcon, HeartIcon, CalendarIcon];

export default function Benefits() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = icons[i];
            return (
              <li key={b.title} data-reveal className="rounded-2xl bg-brand-50 p-7 ring-1 ring-brand-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white"><Icon className="h-6 w-6" /></span>
                <h3 className="mt-5 text-xl font-semibold">{b.title}</h3>
                <p className="mt-1">{b.text}</p>
              </li>
            );
          })}
        </ul>
        <div className="mt-16 max-w-3xl" data-reveal>
          <p className="text-4xl font-semibold leading-[1.1] tracking-tight text-navy md:text-5xl">The right treatment. The right plan. Just for you.</p>
          <p className="mt-4 text-sm text-slate-500">Every joint, every journey, every patient is unique. Which treatments suit you depends on your diagnosis and is decided with your doctor.</p>
        </div>
      </div>
    </section>
  );
}
