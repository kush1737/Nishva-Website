import Link from 'next/link';

// Blue banner at the top of every inner page: breadcrumb, page title and a one-line intro.
export default function PageHero({ title, intro }) {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy to-brand-700 px-5 py-14 text-white md:py-20">
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="text-sm text-blue-200">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <h1 className="mt-4 animate-rise text-4xl font-semibold leading-[1.05] !text-white md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl animate-rise text-lg text-blue-100/90 [animation-delay:120ms]">{intro}</p>
      </div>
    </section>
  );
}
