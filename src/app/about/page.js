import PageHero from '@/components/ui/PageHero';
import About from '@/components/sections/About';
export const metadata = { title: 'About Dr. Neel Patel' };

export default function Page() {
  return (
    <>
      <PageHero title="About Dr. Neel Patel" intro="Consultant rheumatologist for adults with arthritis and autoimmune conditions." />
      <About />
    </>
  );
}
