import { clinic } from '@/data/clinic';
import { WhatsAppIcon } from '@/components/ui/Icons';

// Round WhatsApp button fixed to the bottom-right corner of every page. The link comes from data/clinic.js.
export default function WhatsAppFloat() {
  return (
    <a
      href={clinic.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with the clinic on WhatsApp"
      title="Chat on WhatsApp"
      className="group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/25 transition duration-200 hover:scale-110 active:scale-95"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" aria-hidden="true" />
      <WhatsAppIcon className="h-8 w-8" />
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100 md:block">Chat on WhatsApp</span>
    </a>
  );
}
