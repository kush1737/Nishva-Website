// Clinic details used across the site. Edit here; no component changes needed.
export const clinic = {
  name: 'NishVa Arthritis & Rheumatology Clinic',
  shortName: 'NishVa',
  doctor: {
    name: 'Dr. Neel P Patel',
    role: 'Consultant Rheumatologist',
    photo: '/images/doctor/dr-neel-patel.jpeg',
    credentials: ['MD (Medicine)', 'Post-doctoral fellowship in Rheumatology (Bombay)', 'Adult rheumatological diseases'],
    bio: [
      'Dr. Neel P Patel is a consultant rheumatologist who specialises in adult rheumatological diseases. He holds an MD in Medicine and completed a post-doctoral fellowship in Rheumatology in Mumbai, with three years of fellowship experience'
    ],
  },
  contact: {
    phone: '+91 91063 51098',
    phoneHref: 'tel:+919106351098',
    whatsappHref: 'https://wa.me/919106351098?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.',
    email: 'chatnishva@hotmail.com',
    addressLines: ['420/421, Western Business Park,', 'Opp. S.D. Jain Modern School,', 'Vesu, Surat 395007'],
    mapsHref: 'https://www.google.com/maps/search/?api=1&query=NishVa+Arthritis+and+Rheumatology+Clinic+Western+Business+Park+Vesu+Surat',
  },
  // Listed hours (Indian Standard Time). Minutes are counted from midnight.
  hours: {
    days: ['Monday', 'Thursday', 'Friday', 'Saturday'],
    label: 'Mon, Thu, Fri: 11:30 AM - 2 PM | Sat: 4 PM - 6 PM',
    range: 'Surat (Vesu) & Visiting OPD Centers',
    openMinutes: 690,
    closeMinutes: 840,
    note: 'Consultations available across Surat (Vesu) and visiting OPD centers in Bardoli, Vyara, Mandvi, Navsari, and Kamrej. Please call to confirm before your visit.',
  },
  schedules: [
    {
      location: 'Surat, Vesu',
      tag: 'Main Clinic',
      timings: [
        { days: 'Monday, Thursday, Friday', time: '11:30 AM to 2 PM' },
        { days: 'Saturday', time: '4 PM to 6 PM' },
      ],
    },
    {
      location: 'Bardoli',
      tag: 'Visiting OPD',
      timings: [
        { days: 'Every Wednesday', time: '5 to 7 PM' },
      ],
    },
    {
      location: 'Vyara',
      tag: 'Visiting OPD',
      timings: [
        { days: 'Every 1st, 3rd and 5th Wednesday', time: '11 AM to 1 PM' },
      ],
    },
    {
      location: 'Mandvi',
      tag: 'Visiting OPD',
      timings: [
        { days: 'Every 2nd and 4th Wednesday', time: '11 AM to 1 PM' },
      ],
    },
    {
      location: 'Navsari',
      tag: 'Visiting OPD',
      timings: [
        { days: 'Every Tuesday', time: '11 AM to 1 PM' },
      ],
    },
    {
      location: 'Kamrej',
      tag: 'Visiting OPD',
      timings: [
        { days: 'Every 1st, 3rd and 5th Sunday', time: '11 AM to 1 PM' },
      ],
    },
  ],
   social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/YOUR-PAGE',
    linkedin: 'https://www.linkedin.com/company/YOUR-PAGE',
    whatsapp: 'https://wa.me/919106351098?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.',
  },
  // Set NEXT_PUBLIC_APPOINTMENT_ENDPOINT in .env.local to switch the form on.
  appointmentEndpoint: process.env.NEXT_PUBLIC_APPOINTMENT_ENDPOINT || '',
};
