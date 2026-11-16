'use client';
import { useState } from 'react';
import { clinic } from '@/data/clinic';

const field = 'mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-navy outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 aria-[invalid=true]:border-red-600';

const locationOptions = [
  {
    name: 'Surat',
    label: 'Surat (Vesu)',
    days: [
      'Monday (11:30 AM to 2 PM)',
      'Thursday (11:30 AM to 2 PM)',
      'Friday (11:30 AM to 2 PM)',
      'Saturday (4 PM to 6 PM)',
    ],
  },
  {
    name: 'Bardoli',
    label: 'Bardoli',
    days: [
      'Every Wednesday (5 to 7 PM)',
    ],
  },
  {
    name: 'Mandvi',
    label: 'Mandvi',
    days: [
      'Every 2nd and 4th Wednesday (11 AM to 1 PM)',
    ],
  },
  {
    name: 'Vyara',
    label: 'Vyara',
    days: [
      'Every 1st, 3rd and 5th Wednesday (11 AM to 1 PM)',
    ],
  },
  {
    name: 'Navsari',
    label: 'Navsari',
    days: [
      'Every Tuesday (11 AM to 1 PM)',
    ],
  },
  {
    name: 'Kamrej',
    label: 'Kamrej',
    days: [
      'Every 1st, 3rd and 5th Sunday (11 AM to 1 PM)',
    ],
  },
];

// Validates, then posts to the endpoint in data/clinic.js. With no endpoint it says nothing was sent.
export default function AppointmentForm() {
  const [location, setLocation] = useState('Surat');
  const [day, setDay] = useState(locationOptions[0].days[0]);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ kind: 'idle', text: '' });

  const currentDays = locationOptions.find((l) => l.name === location)?.days || [];

  function handleLocationChange(e) {
    const newLoc = e.target.value;
    setLocation(newLoc);
    const targetDays = locationOptions.find((l) => l.name === newLoc)?.days || [];
    setDay(targetDays[0] || '');
  }

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const next = {};
    if (name.length < 2) next.name = 'Enter your full name.';
    if (!/^\+?[\d\s-]{10,15}$/.test(phone)) next.phone = 'Enter a valid mobile number, for example 91063 51098.';
    setErrors(next);
    if (Object.keys(next).length) return;

    if (!clinic.appointmentEndpoint) {
      setStatus({
        kind: 'info',
        text: `Online requests are not switched on yet. Please call ${clinic.contact.phone} to confirm your appointment for ${location}.`,
      });
      return;
    }
    setStatus({ kind: 'busy', text: 'Sending…' });
    try {
      const res = await fetch(clinic.appointmentEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, location, day }),
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setLocation('Surat');
      setDay(locationOptions[0].days[0]);
      setStatus({ kind: 'ok', text: `Request received for ${location}. The clinic will call you to confirm your slot.` });
    } catch {
      setStatus({ kind: 'error', text: `The request could not be sent. Please call ${clinic.contact.phone}.` });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-7 text-slate-700 shadow-2xl shadow-navy-900/30 md:p-9">
      <h3 className="text-2xl font-bold text-navy">Send a request</h3>
      <p className="mt-1 text-sm text-slate-500">Choose your location and preferred day. We will call you to confirm.</p>

      <div className="mt-6">
        <label htmlFor="name" className="font-semibold text-navy">Full name</label>
        <input id="name" name="name" autoComplete="name" maxLength={80} required aria-invalid={!!errors.name} aria-describedby="name-err" className={field} />
        <p id="name-err" role="alert" className="mt-1 min-h-5 text-sm text-red-700">{errors.name}</p>
      </div>

      <div className="mt-1">
        <label htmlFor="phone" className="font-semibold text-navy">Mobile number</label>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={16} required aria-invalid={!!errors.phone} aria-describedby="phone-err" className={field} />
        <p id="phone-err" role="alert" className="mt-1 min-h-5 text-sm text-red-700">{errors.phone}</p>
      </div>

      {/* Location Selector */}
      <div className="mt-1">
        <label htmlFor="location" className="font-semibold text-navy">Location</label>
        <select
          id="location"
          name="location"
          value={location}
          onChange={handleLocationChange}
          className={field}
        >
          {locationOptions.map((l) => (
            <option key={l.name} value={l.name}>{l.label}</option>
          ))}
        </select>
      </div>

      {/* Preferred Day based on selected location */}
      <div className="mt-3">
        <label htmlFor="day" className="font-semibold text-navy">Preferred day &amp; timing</label>
        <select
          id="day"
          name="day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className={field}
        >
          {currentDays.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="mt-3.5 rounded-xl bg-brand-50/80 p-3 text-xs text-brand-900 ring-1 ring-brand-200">
        <p className="font-semibold text-brand-800">Selected Clinic Slot:</p>
        <p className="mt-0.5 text-slate-800 font-medium">📍 {location} — {day}</p>
      </div>

      <button type="submit" disabled={status.kind === 'busy'} className="btn-primary mt-6 w-full disabled:opacity-60">Send request</button>
      <p role="status" aria-live="polite" className={`mt-4 text-sm ${status.kind === 'ok' ? 'text-emerald-700' : status.kind === 'error' ? 'text-red-700' : 'text-slate-600'}`}>{status.text}</p>
      <p className="mt-3 text-xs text-slate-500">Share only your name and number here. Please do not write medical details. We use them only to call you back.</p>
    </form>
  );
}
