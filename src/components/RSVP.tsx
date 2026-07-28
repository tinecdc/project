import { useState } from 'react';
import { CheckCircle2, AlertCircle, Send, CalendarCheck } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Reveal } from './Reveal';
import { FloralDivider } from './Ornaments';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function RSVP() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    attending: true,
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (key: keyof typeof form, value: string | boolean) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setStatus('submitting');
    setErrorMsg('');
    try {
      const { error } = await supabase.from('rsvps').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        message: form.message.trim() || null,
        attending: form.attending,
      });
      if (error) throw error;
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
              Thank you for informing us of your attendance!
            </p>
            <p className="mt-4 font-formal text-2xl text-gold-200">Althea Turns 18</p>
            <button
              onClick={() => {
                setStatus('idle');
                setForm({ name: '', email: '', phone: '', message: '', attending: true });
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
      <div className="pointer-events-none absolute inset-0 opacity-15 bg-cover-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1600')" }} />

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

            <Field label="Message">
              <textarea
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                rows={3}
                placeholder="A message for Althea..."
                className="form-input resize-none"
              />
            </Field>

            <div>
              <p className="mb-3 text-sm uppercase tracking-widest text-gold-100">
                Are you attending?
              </p>
              <div className="grid grid-cols-2 gap-3">
                <AttendOption
                  active={form.attending === true}
                  onClick={() => update('attending', true)}
                  label="Yes, I'll be there."
                />
                <AttendOption
                  active={form.attending === false}
                  onClick={() => update('attending', false)}
                  label="No, I can't make it."
                />
              </div>
            </div>

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

