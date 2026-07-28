import { BookOpen } from 'lucide-react';
import { Reveal } from './Reveal';
import { SmallDivider } from './Ornaments';

const photos = [
  {
    title: 'Golden Hour Glow',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Soft Studio Mood',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Confident Smile',
    image:
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Dreamy Finale',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
  },
];

export function Photobook() {
  return (
    <section id="photobook" className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fade" className="text-center">
          <BookOpen size={28} className="mx-auto text-gold-500" />
          <h2 className="mt-4 font-script text-4xl text-brown-800 sm:text-5xl">Photobook</h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-brown-600">
            A glimpse into the pre-debut shoot
          </p>
        </Reveal>

        <SmallDivider className="my-8" />

        <Reveal variant="up" delay={200}>
          <p className="mx-auto max-w-2xl text-center font-serif text-lg leading-relaxed text-brown-700">
            These moments capture the elegance, confidence, and joy of the pre-debut shoot
            that led up to this milestone celebration.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal variant="up" delay={250}>
            <div className="overflow-hidden rounded-[2rem] border border-gold-200/70 bg-white/80 shadow-xl">
              <img
                src={photos[0].image}
                alt={photos[0].title}
                className="h-[420px] w-full object-cover"
              />
              <div className="bg-white/90 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gold-600">Featured</p>
                <h3 className="mt-2 font-formal text-2xl text-brown-800">{photos[0].title}</h3>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {photos.slice(1).map((photo, index) => (
              <Reveal key={photo.title} variant="up" delay={300 + index * 100}>
                <div className="overflow-hidden rounded-[1.5rem] border border-gold-200/70 bg-white/80 shadow-sm">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-formal text-xl text-brown-800">{photo.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
