import Link from 'next/link';
import { clinic } from '@/data/clinic';
import { footerLinks } from '@/data/content';
import SocialLinks from '@/components/layout/SocialLinks';  
// Footer order: brand (logo, name, description), quick links, contact us.
export default function Footer() {
  const { contact, hours, doctor } = clinic;
  return (
    <footer className="bg-navy-900 px-5 pb-24 pt-14 text-sm text-blue-100/80 md:pb-14">
      <div className="container-x grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Link href="/" aria-label={`${clinic.shortName} clinic, home`}>
            <img src="/images/brand/logo-white.png" width="210" height="67" alt="" className="h-14 w-auto" />
          </Link>
          <p className="mt-5 text-2xl font-semibold text-white">{clinic.shortName}</p>
          <p className="text-blue-200">Arthritis &amp; Rheumatology Clinic</p>
          <p className="mt-4 max-w-sm leading-relaxed">{doctor.name}, {doctor.role}. Care for adults with arthritis and autoimmune conditions, in Vesu, Surat.</p>
                  <SocialLinks />
        </div>

        <div>
          <p className="font-semibold text-white">Quick links</p>
          <ul className="mt-4 grid gap-2.5">
            {footerLinks.map((l) => <li key={l.href}><Link href={l.href} className="transition hover:text-white">{l.label}</Link></li>)}
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Contact us</p>
          <address className="mt-4 grid gap-3 not-italic leading-relaxed">
            <p>{contact.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</p>
            <p>{hours.label}<br />{hours.range}</p>
            <p>
              <a href={contact.phoneHref} className="transition hover:text-white">{contact.phone}</a><br />
              <a href={`mailto:${contact.email}`} className="break-all transition hover:text-white">{contact.email}</a>
            </p>
          </address>
        </div>
      </div>
      <p className="container-x mt-10 border-t border-white/10 pt-6 text-xs text-blue-200/70">
        This website gives general information only. It does not diagnose conditions or replace a consultation with a doctor.
      </p>
    </footer>
  );
}
