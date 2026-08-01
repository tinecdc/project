export type InviteEntry = {
  id: string;
  link: string;
  name: string;
  maxGuests: number;
  note: string;
};

const STORAGE_KEY = 'althea-invite-codes';

export function getStoredInviteCodes(): InviteEntry[] {
  if (typeof window === 'undefined') return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as InviteEntry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveInviteCodes(invitees: InviteEntry[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(invitees));
}

export function generateInviteLink(existingLinks: string[]) {
  const prefix = 'invite';
  let counter = 1;

  while (true) {
    const candidate = `${prefix}-${String(counter).padStart(3, '0')}`;
    if (!existingLinks.includes(candidate)) {
      return candidate;
    }
    counter += 1;
  }
}

export function normalizeInviteLink(input: string) {
  const trimmed = input.trim();
  if (!trimmed) return '';

  const hashMatch = trimmed.match(/#([a-zA-Z0-9-]+)$/);
  const candidate = hashMatch ? hashMatch[1] : trimmed;
  const withoutOrigin = candidate.replace(/^https?:\/\/[^/]+/i, '').replace(/^\//, '');
  return withoutOrigin.replace(/^#/, '');
}

export function buildInviteUrl(link: string) {
  if (typeof window === 'undefined') return `/#${link}`;
  return `${window.location.origin}${window.location.pathname}#${link}`;
}

export function findInviteByLink(link: string) {
  const normalized = normalizeInviteLink(link);
  const invitees = getStoredInviteCodes();
  return invitees.find((invite) => invite.link.toLowerCase() === normalized.toLowerCase()) ?? null;
}
