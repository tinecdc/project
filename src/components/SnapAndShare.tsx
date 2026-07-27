import { Camera, Copy, Check, Hash, QrCode } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from './Reveal';
import { SmallDivider } from './Ornaments';

const SHARE_LINK = 'https://photoshare.ph/guest/E8TCWX';

function QrPlaceholder() {
  return (
    <div className="relative flex h-44 w-44 flex-none items-center justify-center rounded-2xl bg-cream-50 p-3 shadow-md">
      <QrCode size={140} className="text-burgundy-800" strokeWidth={1.2} />
      <div className="absolute inset-3 rounded-xl border border-blush-300/40" />
    </div>
  );
}

export function SnapAndShare() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_LINK);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-cream-200/70 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal variant="fade" className="text-center">
          <Camera size={28} className="mx-auto text-blush-500" />
          <h2 className="mt-4 font-script text-4xl text-burgundy-800 sm:text-5xl">Snap and Share</h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-burgundy-600">
            Help us capture the day!
          </p>
        </Reveal>

        <SmallDivider className="my-8" />

        <Reveal variant="up" delay={200}>
          <p className="mx-auto max-w-xl text-center font-serif text-lg leading-relaxed text-burgundy-700">
            Please tag us and help us document Althea&rsquo;s 18th birthday!
          </p>
        </Reveal>

        <Reveal variant="up" delay={350}>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Hash size={20} className="text-blush-500" />
            <span className="font-display text-3xl tracking-wide text-burgundy-800 sm:text-4xl">
              AliciaTurns18
            </span>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={450}>
          <div className="mt-12 flex flex-col items-center justify-center gap-8 rounded-3xl bg-cream-50 p-8 shadow-lg sm:flex-row sm:p-10">
            <QrPlaceholder />
            <div className="text-center sm:text-left">
              <p className="font-serif text-lg leading-relaxed text-burgundy-700">
                Scan the QR code to share your photos of the event, or copy the link to
                upload photos:
              </p>
              <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:items-stretch">
                <code className="flex-1 truncate rounded-lg bg-cream-200/70 px-4 py-2.5 font-sans text-sm text-burgundy-800">
                  {SHARE_LINK}
                </code>
                <button
                  onClick={copyLink}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-burgundy-800 px-5 py-2.5 text-sm uppercase tracking-wide text-cream-50 transition-all hover:bg-burgundy-900"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
