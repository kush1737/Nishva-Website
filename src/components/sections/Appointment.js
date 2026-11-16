import { clinic } from '@/data/clinic';
import OpenStatus from '@/components/ui/OpenStatus';
import AppointmentForm from './AppointmentForm';
import { ClockIcon, PinIcon, PhoneIcon, MailIcon } from '@/components/ui/Icons';

export default function Appointment() {
  const { contact, hours, schedules } = clinic;
  return (
    <section id="appointment" className="section bg-gradient-to-br from-brand-700 via-navy to-navy-900 text-white">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-reveal>
          <p className="font-semibold text-blue-200">Appointment</p>
          <h2 className="section-title mt-2 !text-white">Request an appointment.</h2>
          <p className="mt-4 max-w-md text-lg text-blue-100/90">
            Call the clinic directly or submit the request form to schedule your consultation at any of our centers.
          </p>

          <div className="mt-8 rounded-2xl bg-white p-6 text-slate-700 shadow-xl">
            <OpenStatus className="!mt-0" />
            <div className="mt-5 flex gap-4">
              <ClockIcon className="mt-0.5 h-6 w-6 flex-none text-brand-600" />
              <div>
                <strong className="text-navy text-base">Surat, Vesu (Main Clinic):</strong>
                <p className="text-xs sm:text-sm text-slate-700 font-medium">Mon, Thu, Fri: 11:30 AM – 2 PM</p>
                <p className="text-xs sm:text-sm text-slate-700 font-medium">Saturday: 4 PM – 6 PM</p>
                <div className="mt-3 pt-2.5 border-t border-slate-100">
                  <strong className="text-navy text-xs uppercase tracking-wide block">Visiting OPD Centers:</strong>
                  <p className="text-xs text-slate-500 mt-0.5">Bardoli, Mandvi, Vyara, Navsari, Kamrej</p>
                </div>
              </div>
            </div>
            <div className="mt-5 flex gap-4">
              <PinIcon className="mt-0.5 h-6 w-6 flex-none text-brand-600" />
              <address className="not-italic text-sm text-slate-700">
                {contact.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
              </address>
            </div>
            <p className="mt-5 border-t border-brand-100 pt-4 text-xs text-slate-500">{hours.note}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={contact.phoneHref} className="btn-light">
              <PhoneIcon className="h-5 w-5 text-brand-600" />
              Call {contact.phone}
            </a>
            <a href={contact.mapsHref} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <PinIcon className="h-5 w-5" />
              Directions
            </a>
          </div>
          <p className="mt-5 flex items-center gap-2 text-blue-100 text-sm">
            <MailIcon className="h-5 w-5" />
            <a href={`mailto:${contact.email}`} className="underline underline-offset-4">{contact.email}</a>
          </p>
        </div>
        <div data-reveal><AppointmentForm /></div>
      </div>
    </section>
  );
}
