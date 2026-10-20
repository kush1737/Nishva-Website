import HeroSlider from '@/components/sections/HeroSlider';
import QuickInfo from '@/components/sections/QuickInfo';
import About from '@/components/sections/About';
import Explore from '@/components/sections/Explore';

// Home: slider, quick info, doctor introduction, and links to the other pages.
export default function Home() {
  return (
    <>
      <HeroSlider />
      <QuickInfo />
      <About compact />
      <Explore />
    </>
  );
}
