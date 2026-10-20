'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clinic } from '@/data/clinic';
import { navLinks } from '@/data/content';
import { MenuIcon, CloseIcon } from '@/components/ui/Icons';

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = (usePathname() || '/').replace(/\/$/, '') || '/';
  const current = (href) => (path === href ? 'page' : undefined);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur">
      <div className="container-x flex h-[var(--header)] items-center justify-between px-5">
        <Link href="/" aria-label={`${clinic.shortName} clinic, home`}>
          <img src="/images/brand/logo-white.png" width="150" height="48" alt={clinic.name} className="h-10 w-auto" />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm font-medium md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={current(l.href)}
              className={`transition-colors hover:text-white ${path === l.href ? 'text-white font-semibold' : 'text-blue-100/80'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/appointment" className="btn-primary !px-5 !py-2">Book appointment</Link>
        </nav>
        <button
          type="button"
          className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 bg-navy-900 px-5 pb-5 md:hidden">
          <ul className="grid gap-1 pt-3 text-lg font-medium">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={current(l.href)}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 transition hover:bg-white/10 ${path === l.href ? 'bg-white/10 text-white font-semibold' : 'text-blue-100/80'}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/appointment" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">Book appointment</Link>
        </nav>
      )}
    </header>
  );
}
