import { BookOpen } from 'lucide-react';
import { Reveal } from './Reveal';
import { SmallDivider } from './Ornaments';
import coverImage from '../../assets/pics/cover.jpg';
import page1 from '../../assets/pics/photobook/photobook-1.jpg';
import page2 from '../../assets/pics/photobook/photobook-2.jpg';
import page3 from '../../assets/pics/photobook/photobook-3.jpg';
import page4 from '../../assets/pics/photobook/photobook-4.jpg';
import page5 from '../../assets/pics/photobook/photobook-5.jpg';
import page6 from '../../assets/pics/photobook/photobook-6.jpg';
import page7 from '../../assets/pics/photobook/photobook-7.jpg';
import page8 from '../../assets/pics/photobook/photobook-8.jpg';
import page9 from '../../assets/pics/photobook/photobook-9.jpg';
import page10 from '../../assets/pics/photobook/photobook-10.jpg';

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
  { image: page9 },
  { image: page10 },
];

export function Photobook() {
  return (
    <section id="photobook" className="relative overflow-hidden bg-[#f7efe7] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fade" className="text-center">
          <BookOpen size={28} className="mx-auto text-[#6E260E]" />
          <h2 className="mt-4 font-script text-4xl text-[#80461B] sm:text-5xl">Photo Gallery</h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-[#6F4E37]">
            A keepsake of the pre-debut shoot
          </p>
        </Reveal>

        <SmallDivider className="my-8" />

        

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-5xl rounded-[2.5rem] border border-[#d8b37a]/70 bg-[#f1e4d3] p-4 shadow-[0_20px_60px_rgba(96,45,16,0.14)] sm:p-6 lg:p-8">
            <div className="flex flex-col gap-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[pages[1], pages[2], pages[3]].map((page, index) => (
                  <div
                    key={`${page.image}-${index + 1}`}
                    className="overflow-hidden rounded-[1.8rem] border border-[#c48d4d]/40 bg-white p-3 shadow-sm"
                  >
                    <img
                      src={page.image}
                      alt={`Photobook page ${index + 2}`}
                      className="h-[320px] w-full rounded-[1.4rem] object-contain bg-[#f9f2e8]"
                    />
                  </div>
                ))}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[pages[5], pages[6]].map((page, index) => (
                  <div
                    key={`${page.image}-${index + 5}`}
                    className="overflow-hidden rounded-[1.8rem] border border-[#c48d4d]/40 bg-white p-3 shadow-sm"
                  >
                    <img
                      src={page.image}
                      alt={`Photobook page ${index + 6}`}
                      className="h-[320px] w-full rounded-[1.4rem] object-contain bg-[#f9f2e8]"
                    />
                  </div>
                ))}
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[pages[4], pages[7], pages[10]].map((page, index) => (
                  <div
                    key={`${page.image}-${index + 4}`}
                    className="overflow-hidden rounded-[1.8rem] border border-[#c48d4d]/40 bg-white p-3 shadow-sm"
                  >
                    <img
                      src={page.image}
                      alt={`Photobook page ${index + 5}`}
                      className="h-[320px] w-full rounded-[1.4rem] object-contain bg-[#f9f2e8]"
                    />
                  </div>
                ))}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[pages[8], pages[9]].map((page, index) => (
                  <div
                    key={`${page.image}-${index + 8}`}
                    className="overflow-hidden rounded-[1.8rem] border border-[#c48d4d]/40 bg-white p-3 shadow-sm"
                  >
                    <img
                      src={page.image}
                      alt={`Photobook page ${index + 9}`}
                      className="h-[320px] w-full rounded-[1.4rem] object-contain bg-[#f9f2e8]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
