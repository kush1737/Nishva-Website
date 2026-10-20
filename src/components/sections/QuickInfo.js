import { clinic } from '@/data/clinic';
import OpenStatus from '@/components/ui/OpenStatus';
import { ClockIcon, PinIcon, PhoneIcon, WhatsAppIcon } from '@/components/ui/Icons';

function Tile({ icon, children }) {
  return (
    <div className="flex gap-4 bg-white p-6">
      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-600 text-white">{icon}</span>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

// Overlaps the bottom of the slider so hours, address and contact are visible straight away.
export default function QuickInfo() {
  const { contact, hours } = clinic;
  return (
    <section aria-label="Clinic information" className="relative z-20 -mt-16 px-5">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl bg-brand-100 shadow-2xl shadow-navy/25 md:grid-cols-3" data-reveal>
        <Tile icon={<ClockIcon className="h-6 w-6" />}>
          <p className="font-semibold text-navy">Clinic hours</p>
          <p className="mt-1 text-sm">{hours.label}<br />{hours.range}</p>
          <OpenStatus />
        </Tile>
        <Tile icon={<PinIcon className="h-6 w-6" />}>
          <p className="font-semibold text-navy">Find us</p>
          <p className="mt-1 text-sm">Western Business Park, Vesu, Surat</p>
          <a href={contact.mapsHref} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold text-brand-600 hover:underline">Get directions</a>
        </Tile>
        <Tile icon={<PhoneIcon className="h-6 w-6" />}>
          <p className="font-semibold text-navy">Book by phone</p>
          <p className="mt-1 text-sm">{contact.phone}</p>
          <div className="mt-2 flex gap-4 text-sm font-semibold text-brand-600">
            <a href={contact.phoneHref} className="inline-flex items-center gap-1.5 hover:underline"><PhoneIcon className="h-4 w-4" />Call</a>
            <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline"><WhatsAppIcon className="h-4 w-4" />WhatsApp</a>
          </div>
        </Tile>
      </div>
    </section>
  );
}
