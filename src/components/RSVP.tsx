import { useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle, Send, CalendarCheck } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { findInviteByLink, normalizeInviteLink } from '@/lib/inviteCodes';
import { Reveal } from './Reveal';
import { FloralDivider } from './Ornaments';
import rsvpImage from '../../assets/pics/rsvp.jpg';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const googleSheetUrl = 'https://script.google.com/macros/s/AKfycbymmbmuB0Y-a2K7Zhde7IKYZrn4VQ-WqPV-5ilpPgWiS0MLQcjEvuyTu0mZ6pbRo0uekA/exec';

export function RSVP() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [attendanceStatus, setAttendanceStatus] = useState<'attending' | 'not-attending'>('attending');
  const [attendeeInput, setAttendeeInput] = useState('');
  const [attendeeNames, setAttendeeNames] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [sheetNotice, setSheetNotice] = useState('');
  const [inviteLink, setInviteLink] = useState('');
  const [inviteInfo, setInviteInfo] = useState<{ name: string; maxGuests: number } | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const normalized = normalizeInviteLink(hash);
      setInviteLink(normalized);
      const matched = findInviteByLink(normalized);
      setInviteInfo(matched ? { name: matched.name, maxGuests: matched.maxGuests } : null);
    }
  }, []);

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleInviteLinkChange = (value: string) => {
    const normalized = normalizeInviteLink(value);
    setInviteLink(normalized);
    const matched = findInviteByLink(normalized);
    setInviteInfo(matched ? { name: matched.name, maxGuests: matched.maxGuests } : null);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();

    if (!name || !email) return;

    setStatus('submitting');
    setErrorMsg('');
    setSheetNotice('');

    const attendanceLabel = attendanceStatus === 'attending' ? 'Attending' : "Can't attend";
    const payload = {
      name,
      attendance_status: attendanceLabel,
      attendee_names: attendeeNames.length ? attendeeNames.join(', ') : null,
      email,
      phone: phone || null,
    };
    const supabasePayload = {
      name,
      attendee_names: attendeeNames.length ? attendeeNames.join(', ') : null,
      email,
      phone: phone || null,
    };

    try {
      if (supabase) {
        try {
          const { error } = await supabase.from('rsvps').insert(supabasePayload);
          if (error) throw error;
        } catch (supabaseError) {
          console.warn('Supabase insert failed:', supabaseError);
          setSheetNotice('Your RSVP was saved locally on this device while the live backend is unavailable.');
        }
      }

      if (typeof window !== 'undefined') {
        const stored = window.localStorage.getItem('althea-rsvp-responses');
        const responses = stored ? JSON.parse(stored) : [];
        responses.push({
          ...payload,
          createdAt: new Date().toISOString(),
          inviteLink: inviteLink || null,
        });
        window.localStorage.setItem('althea-rsvp-responses', JSON.stringify(responses));
      }

      if (googleSheetUrl) {
        try {
          const params = new URLSearchParams();
          params.set('name', payload.name);
          params.set('attendance_status', payload.attendance_status);
          params.set('attendee_names', payload.attendee_names || '');
          params.set('email', payload.email);
          params.set('phone', payload.phone || '');

          await fetch(googleSheetUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: params.toString(),
          });
        } catch (sheetError) {
          console.warn('Google Sheets sync failed:', sheetError);
          setSheetNotice('Your RSVP was saved, but the Google Sheet export did not complete.');
        }
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Please try again later.');
    }
  };

  if (status === 'success') {
    return (
      <section id="rsvp" className="relative overflow-hidden bg-gradient-to-b from-royal-900 to-royal-950 py-24 text-gold-100 sm:py-32">
        <div className="mx-auto max-w-xl px-6 text-center">
          <Reveal variant="scale">
            <CheckCircle2 size={64} className="mx-auto text-gold-300" />
            <h2 className="mt-6 font-script text-4xl text-gold-100 sm:text-5xl">
              Thank you!
            </h2>
            <FloralDivider className="my-6" />
            <p className="font-serif text-xl leading-relaxed text-gold-100">
              Thank you for letting us know your response.
            </p>
            <p className="mt-4 font-formal text-2xl text-gold-200">Althea Turns 18</p>
            {sheetNotice && (
              <p className="mt-4 text-sm text-gold-200/90">{sheetNotice}</p>
            )}
            <button
              onClick={() => {
                setStatus('idle');
                setForm({ name: '', email: '', phone: '' });
                setAttendanceStatus('attending');
                setAttendeeInput('');
                setAttendeeNames([]);
                setSheetNotice('');
              }}
              className="mt-8 rounded-full border border-gold-200/30 px-6 py-2.5 text-sm uppercase tracking-widest text-gold-100 transition-all hover:bg-royal-900/40"
            >
              Submit another response
            </button>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section
      id="rsvp"
      className="relative overflow-hidden bg-gradient-to-b from-royal-900 to-royal-950 py-24 text-gold-100 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-15 bg-cover-center" style={{ backgroundImage: `url('${rsvpImage}')` }} />

      <div className="relative mx-auto max-w-2xl px-6">
        <Reveal variant="fade" className="text-center">
          <CalendarCheck size={30} className="mx-auto text-gold-300" />
          <h2 className="mt-4 font-script text-4xl text-gold-100 sm:text-5xl">RSVP</h2>
          <p className="mt-3 font-serif text-lg italic text-gold-100">
            We are excited to celebrate Althea Rein&rsquo;s 18th birthday with our closest
            families and friends!
          </p>
        </Reveal>

        <FloralDivider className="my-8" />

        <Reveal variant="up" delay={200}>
          <p className="mb-8 text-center text-sm uppercase tracking-widest text-gold-100">
            The favor of a response is requested before August 30, 2026
          </p>

          <form onSubmit={submit} className="space-y-5 rounded-3xl border border-gold-200/15 bg-royal-950/20 p-6 backdrop-blur-sm sm:p-8">


            {inviteInfo && (
              <div className="rounded-xl border border-gold-200/20 bg-cream-50/10 px-4 py-3 text-sm text-gold-100/90">
                Welcome, {inviteInfo.name}. You can bring up to {inviteInfo.maxGuests} guest{inviteInfo.maxGuests === 1 ? '' : 's'}.
              </div>
            )}

          

            <Field label="Name">
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="Your full name"
                className="form-input"
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Email">
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="you@example.com"
                  className="form-input"
                />
              </Field>
              <Field label="Phone">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  placeholder="Your phone number"
                  className="form-input"
                />
              </Field>
            </div>

            <Field label="Will you be attending?">
              <div className="grid gap-3 sm:grid-cols-2">
                <AttendOption
                  active={attendanceStatus === 'attending'}
                  onClick={() => setAttendanceStatus('attending')}
                  label="Yes, I will attend"
                />
                <AttendOption
                  active={attendanceStatus === 'not-attending'}
                  onClick={() => {
                    setAttendanceStatus('not-attending');
                    setAttendeeNames([]);
                  }}
                  label="I can't attend"
                />
              </div>
            </Field>

            {attendanceStatus === 'attending' ? (
              <Field label="Attendee names">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={attendeeInput}
                      onChange={(e) => setAttendeeInput(e.target.value)}
                      placeholder="Enter one attendee name"
                      className="form-input"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const trimmed = attendeeInput.trim();
                        if (!trimmed) return;
                        setAttendeeNames((current) => [...current, trimmed]);
                        setAttendeeInput('');
                      }}
                      className="rounded-full bg-gold-500 px-4 py-2 text-sm uppercase tracking-widest text-cream-50 transition-all hover:bg-gold-600"
                    >
                      Add
                    </button>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-200/80">
                    Don’t forget to click the Add button after typing each attendee name.
                  </p>
                  {attendeeNames.length > 0 && (
                    <ul className="rounded-xl border border-gold-200/20 bg-cream-50/10 p-3 text-sm text-gold-100/90">
                      {attendeeNames.map((name, index) => (
                        <li key={`${name}-${index}`} className="flex items-center justify-between py-1">
                          <span>{name}</span>
                          <button
                            type="button"
                            onClick={() => setAttendeeNames((current) => current.filter((_, i) => i !== index))}
                            className="text-xs uppercase tracking-widest text-gold-300 hover:text-gold-200"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Field>
            ) : (
              <div className="rounded-xl border border-gold-200/20 bg-cream-50/10 px-4 py-3 text-sm text-gold-100/90">
                No problem — we’ll still be grateful for your response.
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-start gap-3 rounded-xl bg-red-900/40 px-4 py-3 text-sm text-red-100">
                <AlertCircle size={18} className="mt-0.5 flex-none" />
                <span>{errorMsg || 'Oops, there was an error sending your message. Please try again later.'}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-gold-500 px-8 py-4 text-sm uppercase tracking-widest text-cream-50 transition-all hover:bg-gold-600 disabled:opacity-60"
            >
              <Send size={16} />
              {status === 'submitting' ? 'Sending...' : 'Send RSVP'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm uppercase tracking-widest text-cream-200/80">
        {label}
      </span>
      {children}
    </label>
  );
}

function AttendOption({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-3.5 text-center font-serif text-base transition-all ${
        active
          ? 'border-gold-300 bg-gold-500/25 text-cream-50'
          : 'border-royal-900/30 bg-royal-900/20 text-gold-100/90 hover:border-gold-300'
      }`}
    >
      {label}
    </button>
  );
}

