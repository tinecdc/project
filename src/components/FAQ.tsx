import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Reveal } from './Reveal';
import { FloralDivider } from './Ornaments';

const faqs = [
  {
    q: 'RSVP',
    a: 'Your RSVP allows us to finalize guest arrangements, including seating and catering, to ensure everyone enjoys a memorable evening. Kindly confirm your attendance on or before February 10, 2026.',
  },
  {
    q: 'Is there parking space available for my car?',
    a: 'Available on a first-come, first-served basis. We do not reserve parking spaces. Guests will receive parking tickets upon arrival. A flat rate parking fee of 50 pesos applies. Please inform the guards on duty that you are a client from Terrasse MNL which is located at M1 Level.',
  },
  {
    q: 'May I invite a "plus one" to the event?',
    a: 'As much as we would love to accommodate all our friends and family, we have a limited number of guests. This event is strictly by invitation only. Kindly check your invitation to know the number of seats allotted for you. Due to strict capacity limits, we cannot extend the invitation to extra guests.',
  },
  {
    q: 'May I invite kids to the celebration?',
    a: 'We truly love little ones, but due to limited space, we cannot accommodate them. The celebration will be an adults-only celebration, and we sincerely appreciate your kind understanding. We hope you can still join us for this special day!',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-royal-950/80 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal variant="fade" className="text-center">
          <HelpCircle size={28} className="mx-auto text-gold-500" />
          <h2 className="mt-4 font-script text-4xl text-[#80461B] sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <FloralDivider className="my-10" />

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} variant="up" delay={i * 80}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-gold-400/60 bg-cream-50 shadow-md'
                      : 'border-gold-200/40 bg-cream-50/60'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-serif text-lg font-medium text-[#6E260E] sm:text-xl">
                      {item.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`flex-none text-gold-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 font-serif text-base leading-relaxed text-[#6F4E37]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

