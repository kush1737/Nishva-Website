'use client';
import { useEffect, useState } from 'react';

// Works out "open now / opens next" in clinic time (IST) for Surat, Vesu.
function getStatus() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: false })
      .formatToParts(new Date()).map((p) => [p.type, p.value])
  );
  const mins = (Number(parts.hour) % 24) * 60 + Number(parts.minute);
  const day = parts.weekday;

  // Mon, Thu, Fri: 11:30 AM (690) - 2:00 PM (840)
  if (['Monday', 'Thursday', 'Friday'].includes(day) && mins >= 690 && mins < 840) {
    return { open: true, text: 'Open now (Vesu) until 2:00 PM' };
  }
  // Sat: 4:00 PM (960) - 6:00 PM (1080)
  if (day === 'Saturday' && mins >= 960 && mins < 1080) {
    return { open: true, text: 'Open now (Vesu) until 6:00 PM' };
  }

  return { open: false, text: 'Closed now (Vesu)' };
}

export default function OpenStatus({ className = '' }) {
  const [status, setStatus] = useState(null); // empty on the server, filled after load
  useEffect(() => {
    setStatus(getStatus());
    const id = setInterval(() => setStatus(getStatus()), 60000);
    return () => clearInterval(id);
  }, []);
  return (
    <p role="status" className={`mt-2 inline-flex min-h-7 items-center gap-2 rounded-full px-3 py-1 text-xs sm:text-sm font-semibold ${status?.open ? 'bg-emerald-50 text-emerald-700' : 'bg-brand-50 text-brand-700'} ${status ? '' : 'invisible'} ${className}`}>
      <span className="h-2 w-2 rounded-full bg-current" aria-hidden="true" />
      {status ? status.text : 'Checking hours'}
    </p>
  );
}
