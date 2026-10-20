import { clinic } from '@/data/clinic';
import OpenStatus from '@/components/ui/OpenStatus';
import AppointmentForm from './AppointmentForm';
import { ClockIcon, PinIcon, PhoneIcon, WhatsAppIcon, MailIcon } from '@/components/ui/Icons';

export default function Appointment() {
  const { contact, hours } = clinic;
  return (
    <section id="appointment" className="section bg-gradient-to-br from-brand-700 via-navy to-navy-900 text-white">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-reveal>
          <p className="font-semibold text-blue-200">Appointment</p>
          <h2 className="section-title mt-2 !text-white">Request an appointment.</h2>
          <p className="mt-4 max-w-md text-lg text-blue-100/90">Call or message the clinic, or leave your number and we will call you back.</p>

          <div className="mt-8 rounded-2xl bg-white p-6 text-slate-700 shadow-xl">
            <OpenStatus className="!mt-0" />
            <div className="mt-5 flex gap-4"><ClockIcon className="mt-0.5 h-6 w-6 flex-none text-brand-600" /><p><strong className="text-navy">{hours.label}</strong><br />{hours.range}</p></div>
            <div className="mt-5 flex gap-4"><PinIcon className="mt-0.5 h-6 w-6 flex-none text-brand-600" /><address className="not-italic">{contact.addressLines.map((l) => <span key={l} className="block">{l}</span>)}</address></div>
            <p className="mt-5 border-t border-brand-100 pt-4 text-sm text-slate-500">{hours.note}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={contact.phoneHref} className="btn-light"><PhoneIcon className="h-5 w-5 text-brand-600" />Call</a>
            <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-light"><WhatsAppIcon className="h-5 w-5 text-emerald-600" />WhatsApp</a>
            <a href={contact.mapsHref} target="_blank" rel="noopener noreferrer" className="btn-light"><PinIcon className="h-5 w-5 text-brand-600" />Directions</a>
          </div>
          <p className="mt-5 flex items-center gap-2 text-blue-100"><MailIcon className="h-5 w-5" /><a href={`mailto:${contact.email}`} className="underline underline-offset-4">{contact.email}</a></p>
        </div>
        <div data-reveal><AppointmentForm /></div>
      </div>
    </section>
  );
}
