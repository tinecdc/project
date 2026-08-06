import { Reveal } from './Reveal';
import { FloralDivider } from './Ornaments';
import { Sparkles, User, Users } from 'lucide-react';
import dresscodeImage from '../../assets/pics/dresscode.jpg';

export function DressCode() {
  return (
    <section
      id="dress-code"
      className="relative overflow-hidden bg-gradient-to-b from-royal-900 to-royal-950 py-24 text-cream-100 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20 bg-cover-center"
        style={{ backgroundImage: `url('${dresscodeImage}')` }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal variant="fade" className="text-center">
          <Sparkles size={28} className="mx-auto text-gold-300" />
          <h2 className="mt-4 font-script text-4xl text-gold-100 sm:text-5xl">Dress Code</h2>
          <p className="mt-2 text-xs uppercase tracking-[0.4em] text-gold-200">For our guests</p>
        </Reveal>

        <FloralDivider className="my-10" />

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal variant="up" delay={150}>
            <div className="group h-full rounded-3xl border border-cream-200/15 bg-cream-50/5 p-8 backdrop-blur-sm transition-all hover:border-gold-300/40 hover:bg-cream-50/10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/20 text-gold-200">
                  <User size={22} />
                </span>
                <h3 className="font-display text-2xl tracking-wide text-gold-100">Ladies</h3>
              </div>
              <p className="font-serif text-lg leading-relaxed text-gold-100">
                Black, Brown or Gray long dress or cocktail dress.
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={300}>
            <div className="group h-full rounded-3xl border border-cream-200/15 bg-cream-50/5 p-8 backdrop-blur-sm transition-all hover:border-gold-300/40 hover:bg-cream-50/10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-400/30 text-sage-200">
                  <Users size={22} />
                </span>
                <h3 className="font-display text-2xl tracking-wide text-gold-100">Gentlemen</h3>
              </div>
              <p className="font-serif text-lg leading-relaxed text-gold-100">
              Black,Brown or Gray suit, coat, or long sleeved-polo, and slacks.
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

