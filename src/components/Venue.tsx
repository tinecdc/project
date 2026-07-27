import { MapPin, Navigation, Clock } from 'lucide-react';
import { Reveal } from './Reveal';
import { FloralDivider } from './Ornaments';

export function Venue() {
  return (
    <section id="venue" className="relative overflow-hidden bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fade" className="text-center">
          <MapPin size={28} className="mx-auto text-blush-500" />
          <h2 className="mt-4 font-script text-4xl text-burgundy-800 sm:text-5xl">The Venue</h2>
        </Reveal>

        <FloralDivider className="my-10" />

        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Terrasse MNL at Lancaster Hotel"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2 text-cream-50">
                <Clock size={16} className="text-blush-300" />
                <span className="text-sm tracking-wide">February 22, 2026 &middot; 5:30 PM</span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-blush-600">Celebrate with us at</p>
              <h3 className="mt-3 font-display text-4xl tracking-wide text-burgundy-800 sm:text-5xl">
                TERRASSE MNL
              </h3>
              <p className="mt-4 font-serif text-xl leading-relaxed text-burgundy-700">
                Terrasse MNL @ Lancaster Hotel
              </p>
              <p className="font-serif text-lg text-burgundy-600">Shaw Blvd, Mandaluyong City</p>
              <p className="font-serif text-lg text-burgundy-600">(M1 Level)</p>

              <a
                href="https://maps.google.com/?q=The+Lancaster+Hotel+Manila+Shaw+Blvd+Mandaluyong"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-burgundy-800 px-7 py-3.5 text-sm uppercase tracking-widest text-cream-50 transition-all hover:bg-burgundy-900 hover:shadow-lg"
              >
                <Navigation size={16} />
                View Map
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
