// Small inline SVG icons (no external requests). Pass className for size and colour.
const base = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
const make = (children) => function Icon({ className = 'h-5 w-5' }) { return <svg {...base} className={className}>{children}</svg>; };

export const PinIcon = make(<><path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>);
export const ClockIcon = make(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>);
export const PhoneIcon = make(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />);
export const WhatsAppIcon = make(<><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.3A8.4 8.4 0 1 1 21 11.5z" /><path d="M9 8.5c.3 2.2 2.6 4.6 5 5.5l1.2-1.2-1.8-1-.8.7c-.8-.4-1.7-1.3-2-2l.7-.8-1-1.8z" /></>);
export const MailIcon = make(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>);
export const ArrowLeftIcon = make(<path d="M19 12H5m6-6-6 6 6 6" />);
export const ArrowRightIcon = make(<path d="M5 12h14m-6-6 6 6-6 6" />);
export const MenuIcon = make(<path d="M4 7h16M4 12h16M4 17h16" />);
export const CloseIcon = make(<path d="M6 6l12 12M18 6 6 18" />);
export const PlusIcon = make(<path d="M12 5v14M5 12h14" />);
export const ShieldIcon = make(<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3z" />);
export const MoveIcon = make(<path d="M12 3v18M3 12h18m-15-3-3 3 3 3m12-6 3 3-3 3M9 6l3-3 3 3M9 18l3 3 3-3" />);
export const HeartIcon = make(<path d="M12 20s-7-4.4-9-9.2C1.6 7.3 3.7 4 7 4c2 0 3.4 1.1 5 3 1.6-1.9 3-3 5-3 3.3 0 5.4 3.3 4 6.8C19 15.600 12 20 12 20z" />);
export const CalendarIcon = make(<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4m8-4v4" /></>);
export const CheckIcon = make(<path d="M5 12.5l4.5 4.5L19 7" />);
