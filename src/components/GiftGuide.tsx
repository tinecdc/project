import { Gift, Heart, Wallet } from 'lucide-react';
import { Reveal } from './Reveal';
import { SmallDivider } from './Ornaments';

export function GiftGuide() {
  return (
    <section className="relative overflow-hidden bg-royal-950/75 py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-gold-200/40 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal variant="fade">
          <Gift size={30} className="mx-auto text-gold-500" />
          <h2 className="mt-4 font-script text-4xl text-gold-500 sm:text-5xl">Gift Guide</h2>
        </Reveal>

        <SmallDivider className="my-8" />

        <Reveal variant="up" delay={200}>
          <p className="font-serif text-xl italic leading-relaxed text-gold-200">
            With everything I have, I feel truly blessed.
          </p>
        </Reveal>

        <Reveal variant="up" delay={350}>
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4 rounded-2xl bg-cream-50 p-6 text-left shadow-sm">
              <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gold-100 text-gold-600">
                <Heart size={20} />
              </span>
              <p className="font-serif text-lg leading-relaxed text-gold-400">
                Your presence and prayers are all I wish for on this special day.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-cream-50 p-6 text-left shadow-sm">
              <span className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-cream-300 text-gold-600">
                <Wallet size={20} />
              </span>
              <p className="font-serif text-lg leading-relaxed text-gold-400">
                But if you&rsquo;d still like to give a little something, a monetary gift to
                help build my future would be deeply appreciated.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

