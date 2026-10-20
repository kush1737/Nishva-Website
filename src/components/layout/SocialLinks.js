import { clinic } from '@/data/clinic';

// The icon files live in public/images/social. Links come from `social` in src/data/clinic.js.
const networks = [
  { key: 'facebook', label: 'Facebook', icon: '/images/social/facebook.svg' },
  { key: 'instagram', label: 'Instagram', icon: '/images/social/instagram.svg' },
  { key: 'linkedin', label: 'LinkedIn', icon: '/images/social/linkedin.svg' },
];

export default function SocialLinks() {
  const items = networks.filter((n) => clinic.social[n.key]);
  if (items.length === 0) return null;
  return (
    <ul className="mt-6 flex gap-3" aria-label="Social media">
      {items.map((n) => (
        <li key={n.key}>
          <a
            href={clinic.social[n.key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${n.label} (opens in a new tab)`}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-brand-500"
          >
            <img src={n.icon} alt="" width="22" height="22" className="h-[22px] w-[22px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}