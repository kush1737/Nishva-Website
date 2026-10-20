import PageHero from '@/components/ui/PageHero';
import Services from '@/components/sections/Services';
export const metadata = { title: 'Services' };

export default function Page() {
  return (
    <>
      <PageHero title="Services" intro="Arthritis, autoimmune and connective tissue conditions, assessed and treated in adults." />
      <Services />
    </>
  );
}
