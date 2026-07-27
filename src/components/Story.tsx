import { Reveal } from './Reveal';
import { SmallDivider } from './Ornaments';

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fade" className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-blush-600">Growing up story</p>
          <h2 className="mt-4 font-script text-4xl text-burgundy-800 sm:text-5xl">
            Eighteen, with a tender heart
          </h2>
          <div className="mt-3 text-2xl">:)</div>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          <Reveal variant="scale" className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] border border-blush-300/50" />
              <img
                src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="A young woman celebrating"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -right-5 rounded-2xl bg-cream-100 px-6 py-4 shadow-lg">
                <p className="font-script text-2xl text-blush-600">Alicia</p>
                <p className="text-xs uppercase tracking-widest text-burgundy-600">The Celebrant</p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="up" delay={200} className="order-1 md:order-2">
            <div className="space-y-5 font-serif text-base leading-relaxed text-burgundy-700 sm:text-lg">
              <p>
                Turning 18 feels like standing at the edge of something new, hopeful and
                unknown. I step forward with lessons learned, dreams still forming, and a
                heart choosing to trust the process.
              </p>
              <p>
                I may not have everything figured out yet, but I carry the courage to grow,
                the grace to forgive myself, and the hope to believe that what&rsquo;s ahead
                will meet me gently. I remind myself how blessed I am to be able to celebrate
                my 18th birthday with my dearest loved ones. Despite every difficult obstacle
                I have gone through, I am still thankful and grateful.
              </p>
              <SmallDivider className="py-2" />
              <p>
                <span className="font-medium text-burgundy-800">To my family,</span> thank you
                for the love that never wavers, the patience you all gave and the continuous
                amount of support ever since I have been brought into this world. Thank you for
                all the guidance that shaped me into the person I am today. I am forever
                grateful for your unconditional love.
              </p>
              <p>
                <span className="font-medium text-burgundy-800">To my friends,</span> thank you
                for filling my life with endless laughter, pieces of advice and support. These
                are the memories I will always treasure and cherish.
              </p>
              <p>
                Thank you everyone for making life brighter and easier to bear.
              </p>
              <p className="font-serif italic text-burgundy-800">
                To the woman I am becoming&mdash;may you always have the strength, courage,
                kindness, and confidence without arrogance.
              </p>
              <p className="pt-2 font-formal text-2xl text-burgundy-800">Love,</p>
              <p className="-mt-2 font-script text-3xl text-blush-600">Alicia</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
