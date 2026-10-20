import PageHero from '@/components/ui/PageHero';
import Appointment from '@/components/sections/Appointment';
import Faq from '@/components/sections/Faq';
export const metadata = { title: 'Appointment' };

export default function Page() {
  return (
    <>
      <PageHero title="Appointment" intro="Hours, address, phone and WhatsApp, plus a request form and answers to common questions." />
      <Appointment />
      <Faq />
    </>
  );
}
