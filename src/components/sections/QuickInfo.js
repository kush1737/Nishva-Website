import { clinic } from '@/data/clinic';
import OpenStatus from '@/components/ui/OpenStatus';
import { ClockIcon, PinIcon, PhoneIcon } from '@/components/ui/Icons';

function Tile({ icon, children }) {
  return (
    <div className="flex gap-4 bg-white p-6">
      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/20">{icon}</span>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

// Overlaps the bottom of the slider so hours, address and contact are visible straight away.
export default function QuickInfo() {
  const { contact, schedules } = clinic;

  const visitingSchedules = schedules.filter((s) => s.tag !== 'Main Clinic');
  const mainClinic = schedules.find((s) => s.tag === 'Main Clinic') || schedules[0];

  return (
    <section aria-label="Clinic information" className="relative z-20 -mt-16 px-5">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-brand-100 shadow-2xl shadow-navy/25" data-reveal>
        {/* Top 3 Quick Action Tiles */}
        <div className="grid gap-px bg-brand-100 md:grid-cols-3">
          <Tile icon={<ClockIcon className="h-6 w-6" />}>
            <p className="font-semibold text-navy">Main Clinic Hours</p>
            <div className="mt-1 text-sm text-slate-700">
              <p className="font-bold text-navy">Surat, Vesu</p>
              <p className="text-xs text-slate-600">Mon, Thu, Fri: 11:30 AM – 2 PM</p>
              <p className="text-xs text-slate-600">Saturday: 4 PM – 6 PM</p>
            </div>
            <OpenStatus />
          </Tile>

          <Tile icon={<PinIcon className="h-6 w-6" />}>
            <p className="font-semibold text-navy">Visiting OPD Centers</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">5 Regional Locations</p>
            <p className="text-xs text-slate-600">Bardoli, Mandvi, Vyara, Navsari, Kamrej</p>
            <a href="#schedule" className="mt-2 inline-block text-xs font-bold text-brand-600 hover:underline">View OPD timings ↓</a>
          </Tile>

          <Tile icon={<PhoneIcon className="h-6 w-6" />}>
            <p className="font-semibold text-navy">Book Consultation</p>
            <p className="mt-1 text-sm font-bold text-slate-800">{contact.phone}</p>
            <p className="text-xs text-slate-500">Call to schedule your appointment</p>
            <div className="mt-2.5 flex gap-2.5 text-xs font-semibold">
              <a href={contact.phoneHref} className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3.5 py-1.5 text-white shadow-sm transition hover:bg-brand-700">
                <PhoneIcon className="h-3.5 w-3.5" />Call now
              </a>
              <a href="/appointment" className="inline-flex items-center gap-1 rounded-lg bg-brand-50 px-3 py-1.5 text-brand-700 ring-1 ring-brand-200 transition hover:bg-brand-100">
                Book online →
              </a>
            </div>
          </Tile>
        </div>

        {/* Dedicated Schedule Showcase: Primary Clinic + 5 Visiting OPD Centers */}
        <div id="schedule" className="border-t border-brand-100 bg-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-100 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-brand-600" />
                <h3 className="text-xl font-bold text-navy">Clinic Hours &amp; Consultation Schedule</h3>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Dr. Neel P Patel consults at the primary clinic in Surat (Vesu) and scheduled visiting centers across South Gujarat.
              </p>
            </div>
            <span className="inline-flex items-center self-start rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold text-brand-700 ring-1 ring-brand-200">
              Surat + 5 OPD Centers
            </span>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-12 items-stretch">
            {/* Left Column: Featured Primary Clinic in Surat, Vesu */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-brand-50/80 via-blue-50/40 to-white p-6 ring-2 ring-brand-300 shadow-sm">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                    Primary Clinic
                  </span>
                  <OpenStatus className="!mt-0" />
                </div>

                <h4 className="mt-4 text-2xl font-bold text-navy">Surat, Vesu</h4>
                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                  420/421, Western Business Park, Opp. S.D. Jain Modern School, Vesu, Surat 395007
                </p>

                <div className="mt-5 space-y-3">
                  <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-brand-200/90">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Weekday Consultation</p>
                    <p className="mt-1 text-sm font-bold text-navy">Monday, Thursday, Friday</p>
                    <p className="text-base font-extrabold text-brand-700">11:30 AM to 2 PM</p>
                  </div>

                  <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-brand-200/90">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Weekend Evening Consultation</p>
                    <p className="mt-1 text-sm font-bold text-navy">Saturday</p>
                    <p className="text-base font-extrabold text-brand-700">4 PM to 6 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-200/70 flex flex-wrap gap-2.5">
                <a href={contact.phoneHref} className="btn-primary !py-2 !px-4 text-xs">
                  <PhoneIcon className="h-3.5 w-3.5" /> Call {contact.phone}
                </a>
                <a href={contact.mapsHref} target="_blank" rel="noopener noreferrer" className="btn border border-brand-200 text-brand-700 hover:bg-brand-50 !py-2 !px-4 text-xs font-semibold">
                  Get directions →
                </a>
              </div>
            </div>

            {/* Right Column: 5 Visiting OPD Centers */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Visiting OPD Centers (South Gujarat)
                  </h4>
                  <span className="text-xs text-brand-600 font-semibold">Prior appointment required</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {visitingSchedules.map((item) => (
                    <div
                      key={item.location}
                      className="rounded-xl bg-slate-50/90 p-4 ring-1 ring-slate-200/90 transition hover:bg-white hover:ring-brand-300 hover:shadow-md flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1">
                          <span className="flex items-center gap-1.5 font-bold text-navy text-base">
                            <PinIcon className="h-4 w-4 text-brand-600 flex-none" />
                            {item.location}
                          </span>
                          <span className="rounded-full bg-slate-200/80 px-2 py-0.5 text-[10px] font-bold text-slate-700 uppercase">
                            OPD
                          </span>
                        </div>
                        <div className="mt-3 pl-2.5 border-l-2 border-brand-500">
                          <p className="text-xs font-semibold text-slate-800">{item.timings[0].days}</p>
                          <p className="mt-0.5 text-xs font-bold text-brand-700">{item.timings[0].time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-100/80 p-4 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p>
                  Visiting OPD appointments must be scheduled in advance. Call{' '}
                  <a href={contact.phoneHref} className="font-bold text-brand-600 hover:underline">{contact.phone}</a>{' '}
                  or request online.
                </p>
                <a href="/appointment" className="flex-none font-bold text-brand-700 hover:underline">
                  Book appointment →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
