'use client';
import { useState } from 'react';
import { clinic } from '@/data/clinic';

const field = 'mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-navy outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 aria-[invalid=true]:border-red-600';

// Validates, then posts to the endpoint in data/clinic.js. With no endpoint it says nothing was sent.
export default function AppointmentForm() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ kind: 'idle', text: '' });

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const day = form.elements.day.value;
    const next = {};
    if (name.length < 2) next.name = 'Enter your full name.';
    if (!/^\+?[\d\s-]{10,15}$/.test(phone)) next.phone = 'Enter a valid mobile number, for example 91063 51098.';
    setErrors(next);
    if (Object.keys(next).length) return;

    if (!clinic.appointmentEndpoint) {
      setStatus({ kind: 'info', text: `Online requests are not switched on yet, so nothing was sent. Please call ${clinic.contact.phone} to book.` });
      return;
    }
    setStatus({ kind: 'busy', text: 'Sending…' });
    try {
      const res = await fetch(clinic.appointmentEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, phone, day }) });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setStatus({ kind: 'ok', text: 'Request received. The clinic will call you to confirm a time.' });
    } catch {
      setStatus({ kind: 'error', text: `The request could not be sent. Please call ${clinic.contact.phone}.` });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-7 text-slate-700 shadow-2xl shadow-navy-900/30 md:p-9">
      <h3 className="text-2xl font-semibold">Send a request</h3>
      <div className="mt-6">
        <label htmlFor="name" className="font-semibold text-navy">Full name</label>
        <input id="name" name="name" autoComplete="name" maxLength={80} required aria-invalid={!!errors.name} aria-describedby="name-err" className={field} />
        <p id="name-err" role="alert" className="mt-1 min-h-5 text-sm text-red-700">{errors.name}</p>
      </div>
      <div className="mt-2">
        <label htmlFor="phone" className="font-semibold text-navy">Mobile number</label>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={16} required aria-invalid={!!errors.phone} aria-describedby="phone-err" className={field} />
        <p id="phone-err" role="alert" className="mt-1 min-h-5 text-sm text-red-700">{errors.phone}</p>
      </div>
      <div className="mt-2">
        <label htmlFor="day" className="font-semibold text-navy">Preferred day</label>
        <select id="day" name="day" className={field}>
          {clinic.hours.days.map((d) => <option key={d}>{d}</option>)}
        </select>
      </div>
      <button type="submit" disabled={status.kind === 'busy'} className="btn-primary mt-6 w-full disabled:opacity-60">Send request</button>
      <p role="status" aria-live="polite" className={`mt-4 text-sm ${status.kind === 'ok' ? 'text-emerald-700' : status.kind === 'error' ? 'text-red-700' : 'text-slate-600'}`}>{status.text}</p>
      <p className="mt-3 text-xs text-slate-500">Share only your name and number here. Please do not write medical details. We use them only to call you back.</p>
    </form>
  );
}
