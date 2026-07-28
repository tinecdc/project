import { Reveal } from './Reveal';
import { FloralDivider } from './Ornaments';
import { Sparkles, User, Users } from 'lucide-react';

export function DressCode() {
  return (
    <section
      id="dress-code"
      className="relative overflow-hidden bg-gradient-to-b from-burgundy-900 to-burgundy-950 py-24 text-cream-100 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-cover-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=1600')" }} />

      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal variant="fade" className="text-center">
          <Sparkles size={28} className="mx-auto text-blush-300" />
          <h2 className="mt-4 font-script text-4xl text-cream-50 sm:text-5xl">Dress Code</h2>
          <p className="mt-2 text-xs uppercase tracking-[0.4em] text-cream-200/70">For our guests</p>
        </Reveal>

        <FloralDivider className="my-10" />

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal variant="up" delay={150}>
            <div className="group h-full rounded-3xl border border-cream-200/15 bg-cream-50/5 p-8 backdrop-blur-sm transition-all hover:border-blush-300/40 hover:bg-cream-50/10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blush-500/20 text-blush-200">
                  <User size={22} />
                </span>
                <h3 className="font-display text-2xl tracking-wide text-cream-50">Ladies</h3>
              </div>
              <p className="font-serif text-lg leading-relaxed text-cream-100/90">
                Pastel or light colored long dress or gown.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-blush-500/20 px-4 py-2">
                <span className="text-sm uppercase tracking-widest text-blush-200">except Pink</span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="up" delay={300}>
            <div className="group h-full rounded-3xl border border-cream-200/15 bg-cream-50/5 p-8 backdrop-blur-sm transition-all hover:border-blush-300/40 hover:bg-cream-50/10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-400/30 text-sage-200">
                  <Users size={22} />
                </span>
                <h3 className="font-display text-2xl tracking-wide text-cream-50">Gentlemen</h3>
              </div>
              <p className="font-serif text-lg leading-relaxed text-cream-100/90">
                Any color of coat and tie, polo long or short sleeved, slacks or khaki &mdash;
                or dark colored pants.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-sage-400/20 px-4 py-2">
                <span className="text-sm uppercase tracking-widest text-sage-200">kindly refrain from wearing denim pants</span>
                <span className="font-serif text-lg font-semibold text-cream-50"></span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
