// Smaller content blocks: approach, warning signs, first visit, benefits, FAQ, navigation.
// One entry per page. The header shows navLinks; the footer shows footerLinks.
export const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Treatment', href: '/treatment' },
  { label: 'First visit', href: '/first-visit' },
];

export const footerLinks = [
  { label: 'Home', href: '/' },
  ...navLinks,
  { label: 'Appointment', href: '/appointment' },
  { label: 'FAQ', href: '/appointment#faq' },
];

export const approach = [
  { title: 'Listen first', text: 'Your story comes before any label: when it started, what helps and what makes it worse.' },
  { title: 'Examine and test', text: 'Joints, skin and movement are checked, with tests and imaging only when they are needed.' },
  { title: 'One clear plan', text: 'You leave knowing what is going on, what the treatment is and when to come back.' },
];

export const signs = [
  'Joint pain or swelling that lasts more than a few weeks',
  'Morning stiffness that takes more than 30 minutes to ease',
  'Back pain that is worse after rest and better with movement',
  'Joint pain with a rash, fever, dry eyes or unusual tiredness',
  'A sudden red, hot and very painful joint',
  'Fingers that turn white or blue in the cold',
];

export const visitSteps = [
  { title: 'Tell your story', text: 'When it started, what helps and what makes it worse. Bring earlier reports and a list of your medicines.' },
  { title: 'Get examined', text: 'Joints, skin and movement are checked. Blood tests or imaging are advised only when needed.' },
  { title: 'Leave with a plan', text: 'A clear explanation of what is going on, the treatment ahead and when to come back.' },
];

export const benefits = [
  { title: 'Less pain', text: 'Feel more comfortable.' },
  { title: 'Better mobility', text: 'Move with confidence.' },
  { title: 'Improved quality of life', text: 'Do what you love.' },
  { title: 'Long-term care', text: 'For a healthier tomorrow.' },
];

export const faqs = [
  { q: 'What is a rheumatologist?', a: 'A physician who diagnoses and treats diseases of the joints, muscles and immune system, such as arthritis and lupus.' },
  { q: 'Do I need a referral?', a: 'Please call the clinic to ask. You are welcome to bring any earlier reports with you.' },
  { q: 'What should I bring?', a: 'Past test reports and scans, a list of current medicines, and short notes on your symptoms.' },
  { q: 'Is this an emergency service?', a: 'No. For sudden severe symptoms, go to your nearest hospital emergency department.' },
];
