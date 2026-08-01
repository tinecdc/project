import { useEffect, useMemo, useState } from 'react';
import { buildInviteUrl, generateInviteLink, getStoredInviteCodes, saveInviteCodes, type InviteEntry } from '@/lib/inviteCodes';

const initialForm = {
  name: '',
  maxGuests: 2,
  note: '',
};

export function InviteAdmin() {
  const [invitees, setInvitees] = useState<InviteEntry[]>([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setInvitees(getStoredInviteCodes());
  }, []);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = form.name.trim();
    if (!trimmedName) {
      setMessage('Please add a guest name.');
      return;
    }

    const nextInvitees = [...invitees];
    const link = generateInviteLink(nextInvitees.map((item) => item.link));

    if (editingId) {
      const index = nextInvitees.findIndex((invite) => invite.id === editingId);
      if (index >= 0) {
        nextInvitees[index] = {
          ...nextInvitees[index],
          name: trimmedName,
          maxGuests: Number(form.maxGuests) || 1,
          note: form.note.trim(),
        };
      }
      saveInviteCodes(nextInvitees);
      setInvitees(nextInvitees);
      setEditingId(null);
      setForm(initialForm);
      setMessage(`Updated invite ${trimmedName}`);
      return;
    }

    nextInvitees.push({
      id: crypto.randomUUID(),
      link,
      name: trimmedName,
      maxGuests: Number(form.maxGuests) || 1,
      note: form.note.trim(),
    });

    saveInviteCodes(nextInvitees);
    setInvitees(nextInvitees);
    setForm(initialForm);
    setMessage(`Created invite link ${link}`);
  };

  const totalCapacity = useMemo(() => invitees.reduce((sum, invite) => sum + invite.maxGuests, 0), [invitees]);

  return (
    <section id="admin" className="bg-[#fdf7ef] py-24 text-[#6E260E] sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-[2rem] border border-[#d8b37a]/60 bg-white/80 px-5 py-4 shadow-[0_20px_60px_rgba(96,45,16,0.12)]">
          <p className="font-script text-2xl text-[#80461B]">Admin Console</p>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              window.location.hash = '';
            }}
            className="rounded-full border border-[#d8b37a]/60 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#6E260E] transition hover:bg-[#f9f2e8]"
          >
            Back to invitation
          </a>
        </div>

        <div className="rounded-[2rem] border border-[#d8b37a]/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(96,45,16,0.12)] sm:p-8">
          <h2 className="font-script text-4xl text-[#80461B]">Invite Admin</h2>
          <p className="mt-3 font-serif text-lg text-[#6F4E37]">
            Create unique invite links and set how many guests each person can bring.
          </p>

          <form onSubmit={handleCreate} className="mt-8 grid gap-4 rounded-2xl border border-[#d8b37a]/40 bg-[#f9f2e8] p-5 md:grid-cols-3">
            <label className="block text-sm font-semibold uppercase tracking-widest text-[#6E260E]">
              Name
              <input
                value={form.name}
                onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-[#d8b37a]/60 bg-white px-4 py-3 text-base text-[#6E260E] outline-none"
                placeholder="Guest name"
              />
            </label>
            <label className="block text-sm font-semibold uppercase tracking-widest text-[#6E260E]">
              Max guests
              <select
                value={form.maxGuests}
                onChange={(e) => setForm((current) => ({ ...current, maxGuests: Number(e.target.value) }))}
                className="mt-2 w-full rounded-xl border border-[#d8b37a]/60 bg-white px-4 py-3 text-base text-[#6E260E] outline-none"
              >
                {[1, 2, 3, 4, 5, 6].map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold uppercase tracking-widest text-[#6E260E]">
              Note
              <input
                value={form.note}
                onChange={(e) => setForm((current) => ({ ...current, note: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-[#d8b37a]/60 bg-white px-4 py-3 text-base text-[#6E260E] outline-none"
                placeholder="Optional note"
              />
            </label>
            <div className="md:col-span-3 flex items-center justify-between gap-3">
              <p className="text-sm text-[#6F4E37]">{message}</p>
              <div className="flex gap-3">
                {editingId ? (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(null);
                      setForm(initialForm);
                      setMessage('');
                    }}
                    className="rounded-full border border-[#d8b37a]/60 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#6E260E] transition hover:bg-white"
                  >
                    Cancel
                  </button>
                ) : null}
                <button
                  type="submit"
                  className="rounded-full bg-[#80461B] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#fdf7ef] transition hover:bg-[#6E260E]"
                >
                  {editingId ? 'Save Changes' : 'Add Invite'}
                </button>
              </div>
            </div>
          </form>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#d8b37a]/40">
            <div className="bg-[#80461B] px-5 py-4 text-sm font-semibold uppercase tracking-widest text-[#fdf7ef]">
              Saved invite links ({invitees.length})
            </div>
            <div className="divide-y divide-[#d8b37a]/30 bg-white/70">
              {invitees.length === 0 ? (
                <p className="p-5 text-sm text-[#6F4E37]">No invitees yet. Create the first one above.</p>
              ) : (
                invitees.map((invite) => (
                  <div key={invite.id} className="flex flex-col gap-2 p-5 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="font-semibold text-[#80461B]">{invite.name}</p>
                      <p className="text-sm text-[#6F4E37]">Link: {buildInviteUrl(invite.link)}</p>
                      {invite.note ? <p className="text-sm text-[#6F4E37]">Note: {invite.note}</p> : null}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#6F4E37]">
                      <span>Max guests: {invite.maxGuests}</span>
                      <button
                        type="button"
                        onClick={() => {
                          setEditingId(invite.id);
                          setForm({ name: invite.name, maxGuests: invite.maxGuests, note: invite.note });
                          setMessage(`Editing ${invite.name}`);
                        }}
                        className="rounded-full border border-[#d8b37a]/60 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-[#6E260E] transition hover:bg-[#f9f2e8]"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <p className="mt-6 text-sm text-[#6F4E37]">
            Total guest capacity currently set: <span className="font-semibold text-[#80461B]">{totalCapacity}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
