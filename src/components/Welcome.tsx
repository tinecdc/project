import { Pause, Play, Volume2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { FloralDivider } from './Ornaments';

export function Welcome() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      void audio.play();
      setPlaying(true);
    }
  };

  return (
    <section id="welcome" className="relative overflow-hidden bg-royal-950/80 py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-gold-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-12 h-72 w-72 rounded-full bg-gold-100/15 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal variant="fade">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-600">Listen to my birthday song</p>
          <button
            onClick={toggle}
            className="mx-auto mt-5 flex items-center gap-3 rounded-full border border-gold-400/50 bg-cream-50 px-6 py-3 text-brown-700 shadow-sm transition-all hover:border-gold-500 hover:shadow-md"
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
            <span className="text-sm tracking-wide">
              {playing ? 'Pause' : 'Play'} song
            </span>
            <Volume2 size={16} className="text-gold-500" />
          </button>
          <audio ref={audioRef} loop>
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg" />
          </audio>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <h2 className="mt-16 font-script text-4xl text-gold-500 sm:text-5xl">
            Welcome to my birthday website
          </h2>
        </Reveal>

        <FloralDivider className="my-8" />

        <Reveal variant="up" delay={300}>
          <div className="space-y-5 font-serif text-lg leading-relaxed text-gold-200 sm:text-xl">
            <p>
              It is with joy and gratitude that I welcome you to my 18th birthday
              celebration. This milestone is a dream I've long awaited, and I feel
              truly blessed to share it with my dearest family and friends.
            </p>
            <p>
              Your presence is a precious gift, and I look forward to an evening filled
              with happiness, laughter, and unforgettable memories together.
            </p>
          </div>
        </Reveal>

        <Reveal variant="up" delay={500}>
          <p className="mt-8 font-formal text-3xl text-brown-400">Love,</p>
          <p className="font-script text-4xl text-gold-600">Althea Rein</p>
        </Reveal>
      </div>
    </section>
  );
}

