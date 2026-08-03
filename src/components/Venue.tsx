import { MapPin, Navigation, Clock } from 'lucide-react';
import venueImage from '../../assets/pics/venue.jpg';
import { Reveal } from './Reveal';
import { FloralDivider } from './Ornaments';

export function Venue() {
  return (
    <section id="venue" className="relative overflow-hidden bg-royal-950/80 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fade" className="text-center">
          <MapPin size={28} className="mx-auto text-gold-500" />
          <h2 className="mt-4 font-script text-4xl text-gold-500 sm:text-5xl">The Venue</h2>
        </Reveal>

        <FloralDivider className="my-10" />

        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={venueImage}
                alt="Bulacan, Philippines"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2 text-cream-50">
                <Clock size={16} className="text-gold-300" />
                <span className="text-sm tracking-wide">September 12, 2026 &middot; 5:00 PM</span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="up" delay={200}>
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-gold-600">Celebrate with us at</p>
              <h3 className="mt-3 font-display text-4xl tracking-wide text-gold-500 sm:text-5xl">
                 LA CASA ROSALINA EVENTS PLACE
              </h3>
              <p className="mt-4 font-serif text-xl leading-relaxed text-gold-200">
                J.P Rizal St., Poblacion, Pandi, Bulacan
              </p>
              <p className="font-serif text-lg text-gold-200">Philippines</p>

              <a
                href="https://maps.app.goo.gl/RLpJYvZqBy2StYUf7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-royal-800 px-7 py-3.5 text-sm uppercase tracking-widest text-cream-50 transition-all hover:bg-royal-900 hover:shadow-lg"
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

