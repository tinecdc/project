import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const EVENT_DATE = new Date('2026-09-12T17:30:00');

function getRemaining(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    done: false,
  };
}

const units: { key: 'days' | 'hours' | 'minutes' | 'seconds'; label: string }[] = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
];

export function Hero() {
  const [time, setTime] = useState(() => getRemaining(EVENT_DATE));

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(EVENT_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-cover-center ken-burns" style={{ backgroundImage: "url('https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg?auto=compress&cs=tinysrgb&w=1920')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy-950/70 via-burgundy-900/55 to-burgundy-950/75" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-cream-50">
        <p className="reveal-fade in-view font-sans text-xs uppercase tracking-[0.4em] text-cream-200/80" style={{ animationDelay: '200ms' }}>
          You are invited to celebrate
        </p>

        <h1 className="reveal-scale in-view mt-6 font-formal text-6xl leading-none text-shadow-deep sm:text-7xl md:text-8xl" style={{ animationDelay: '400ms' }}>
          Althea
        </h1>
        <p className="reveal-fade in-view mt-3 font-script text-3xl text-blush-300 sm:text-4xl md:text-5xl" style={{ animationDelay: '700ms' }}>
          turns 18
        </p>

        <div className="reveal in-view mt-12 flex items-end gap-3 sm:gap-6" style={{ animationDelay: '900ms' }}>
          {units.map((u) => (
            <div key={u.key} className="flex flex-col items-center">
              <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl border border-cream-200/25 bg-cream-50/10 backdrop-blur-sm sm:h-28 sm:w-24">
                <span className="font-serif text-3xl font-medium tabular-nums sm:text-5xl">
                  {String(time[u.key]).padStart(2, '0')}
                </span>
              </div>
              <span className="mt-2 text-[0.6rem] uppercase tracking-widest text-cream-200/70 sm:text-xs">
                {u.label}
              </span>
            </div>
          ))}
        </div>

        {time.done && (
          <p className="mt-6 font-script text-2xl text-blush-200">
            The celebration has begun!
          </p>
        )}

        <p className="reveal-fade in-view mt-12 font-serif text-lg italic text-cream-200/90 sm:text-xl" style={{ animationDelay: '1100ms' }}>
          September 12, 2026 &middot; 5:30 in the evening
        </p>
        <p className="reveal-fade in-view mt-1 text-xs uppercase tracking-widest text-cream-200/70" style={{ animationDelay: '1200ms' }}>
          Pandi, Bulacan, Philippines
        </p>
      </div>

      <a
        href="#welcome"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream-100/70 transition-colors hover:text-cream-50"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </a>
    </section>
  );
}
