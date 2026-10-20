'use client';
import { useEffect, useState } from 'react';
import { clinic } from '@/data/clinic';

const ORDER = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Works out "open now / opens next" in clinic time (IST) from the hours in data/clinic.js.
function getStatus() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: false })
      .formatToParts(new Date()).map((p) => [p.type, p.value])
  );
  const mins = (Number(parts.hour) % 24) * 60 + Number(parts.minute);
  const { days, openMinutes, closeMinutes } = clinic.hours;
  if (days.includes(parts.weekday) && mins >= openMinutes && mins < closeMinutes) return { open: true, text: 'Open now until 3:00 PM' };
  const start = ORDER.indexOf(parts.weekday);
  for (let k = 0; k < 8; k++) {
    const day = ORDER[(start + k) % 7];
    if (!days.includes(day) || (k === 0 && mins >= closeMinutes)) continue;
    const when = k === 0 ? 'today' : k === 1 ? 'tomorrow' : day;
    return { open: false, text: `Closed now. Opens ${when} at 10:00 AM` };
  }
  return { open: false, text: 'Closed now' };
}

export default function OpenStatus({ className = '' }) {
  const [status, setStatus] = useState(null); // empty on the server, filled after load
  useEffect(() => {
    setStatus(getStatus());
    const id = setInterval(() => setStatus(getStatus()), 60000);
    return () => clearInterval(id);
  }, []);
  return (
    <p role="status" className={`mt-2 inline-flex min-h-7 items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${status?.open ? 'bg-emerald-50 text-emerald-700' : 'bg-brand-50 text-brand-700'} ${status ? '' : 'invisible'} ${className}`}>
      <span className="h-2 w-2 rounded-full bg-current" aria-hidden="true" />
      {status ? status.text : 'Checking hours'}
    </p>
  );
}
