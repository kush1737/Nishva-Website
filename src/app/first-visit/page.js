import PageHero from '@/components/ui/PageHero';
import Signs from '@/components/sections/Signs';
import FirstVisit from '@/components/sections/FirstVisit';
export const metadata = { title: 'Your first visit' };

export default function Page() {
  return (
    <>
      <PageHero title="Your first visit" intro="Know the signs worth getting checked, and what to expect when you come in." />
      <Signs />
      <FirstVisit />
    </>
  );
}
