import ScrollEffects from '@/components/ui/ScrollEffects';

// A template (unlike a layout) starts fresh on every page change, so the scroll effects
// are set up again for whichever page the visitor just opened.
export default function Template({ children }) {
  return (
    <>
      <ScrollEffects />
      {children}
    </>
  );
}
