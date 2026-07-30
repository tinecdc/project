import { BookOpen } from 'lucide-react';
import { Reveal } from './Reveal';
import { SmallDivider } from './Ornaments';
import coverImage from '../../assets/pics/photobook/photobook-cover.jpg';
import page1 from '../../assets/pics/photobook/photobook-1.jpg';
import page2 from '../../assets/pics/photobook/photobook-2.jpg';
import page3 from '../../assets/pics/photobook/photobook-3.jpg';
import page4 from '../../assets/pics/photobook/photobook-4.jpg';
import page5 from '../../assets/pics/photobook/photobook-5.jpg';
import page6 from '../../assets/pics/photobook/photobook-6.jpg';
import page7 from '../../assets/pics/photobook/photobook-7.jpg';
import page8 from '../../assets/pics/photobook/photobook-8.jpg';

const pages = [
  { image: coverImage },
  { image: page1 },
  { image: page2 },
  { image: page3 },
  { image: page4 },
  { image: page5 },
  { image: page6 },
  { image: page7 },
  { image: page8 },
];

export function Photobook() {
  return (
    <section id="photobook" className="relative overflow-hidden bg-[#f7efe7] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fade" className="text-center">
          <BookOpen size={28} className="mx-auto text-[#6E260E]" />
          <h2 className="mt-4 font-script text-4xl text-[#80461B] sm:text-5xl">Photobook</h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-[#6F4E37]">
            A keepsake of the pre-debut shoot
          </p>
        </Reveal>

        <SmallDivider className="my-8" />

        <Reveal variant="up" delay={200}>
          <p className="mx-auto max-w-3xl text-center font-serif text-lg leading-relaxed text-[#6E260E]">
            A simple collection of the moments captured in the pre-debut shoot, arranged in a book-style display.
          </p>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-5xl rounded-[2.5rem] border border-[#d8b37a]/70 bg-[#f1e4d3] p-4 shadow-[0_20px_60px_rgba(96,45,16,0.14)] sm:p-6 lg:p-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <div className="overflow-hidden rounded-[1.8rem] border border-[#c48d4d]/40 bg-white p-3 shadow-sm md:col-span-2 xl:col-span-2">
                <img
                  src={pages[1].image}
                  alt="Photobook page 2"
                  className="h-[360px] w-full rounded-[1.4rem] object-contain bg-[#f9f2e8]"
                />
              </div>
              <div className="overflow-hidden rounded-[1.8rem] border border-[#c48d4d]/40 bg-white p-3 shadow-sm">
                <img
                  src={pages[2].image}
                  alt="Photobook page 3"
                  className="h-[360px] w-full rounded-[1.4rem] object-contain bg-[#f9f2e8]"
                />
              </div>
              {pages.slice(3).map((page, index) => (
                <div
                  key={`${page.image}-${index + 3}`}
                  className="overflow-hidden rounded-[1.8rem] border border-[#c48d4d]/40 bg-white p-3 shadow-sm"
                >
                  <img
                    src={page.image}
                    alt={`Photobook page ${index + 4}`}
                    className="h-[320px] w-full rounded-[1.4rem] object-contain bg-[#f9f2e8]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
