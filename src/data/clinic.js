// Clinic details used across the site. Edit here; no component changes needed.
export const clinic = {
  name: 'NishVa Arthritis & Rheumatology Clinic',
  shortName: 'NishVa',
  doctor: {
    name: 'Dr. Neel Patel',
    role: 'Consultant Rheumatologist',
    photo: '/images/doctor/dr-neel-patel.jpeg',
    credentials: ['MD (Medicine)', 'Post-doctoral fellowship in Rheumatology (Bombay)', 'Adult rheumatological diseases'],
    bio: [
      'Dr. Neel Patel is a consultant rheumatologist who specialises in adult rheumatological diseases. He holds an MD in Medicine and completed a post-doctoral fellowship in Rheumatology in Bombay, with three years of fellowship experience.',
      'He previously worked as an associate consultant in rheumatology at Fortis Hospital, Mulund.',
      'Once a condition is identified, he discusses a plan that can combine quick-relief treatment with slower-acting medicines and lifestyle changes for long-term control.',
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
    days: ['Monday', 'Thursday', 'Friday'],
    label: 'Mon, Thu, Fri',
    range: '10:00 AM to 3:00 PM',
    openMinutes: 600,
    closeMinutes: 900,
    note: 'Timings are as listed on the clinic’s booking page. Please call to confirm before you travel.',
  },
   social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/YOUR-PAGE',
    linkedin: 'https://www.linkedin.com/company/YOUR-PAGE',
  },
  // Set NEXT_PUBLIC_APPOINTMENT_ENDPOINT in .env.local to switch the form on.
  appointmentEndpoint: process.env.NEXT_PUBLIC_APPOINTMENT_ENDPOINT || '',
};
