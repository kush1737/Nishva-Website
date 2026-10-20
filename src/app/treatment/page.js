import PageHero from '@/components/ui/PageHero';
import Treatment from '@/components/sections/Treatment';
import Benefits from '@/components/sections/Benefits';
export const metadata = { title: 'Treatment' };

export default function Page() {
  return (
    <>
      <PageHero title="Treatment" intro="A personalised plan that combines medication, therapy, lifestyle support and advanced options when needed." />
      <Treatment />
      <Benefits />
    </>
  );
}
