import { Pause, Play, Volume2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';
import { FloralDivider } from './Ornaments';
import birthdayMusic from '../../assets/birthday_music.mp3';

export function Welcome() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const autoplay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    };

    void autoplay();
  }, []);

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
            className="mx-auto mt-5 flex items-center gap-3 rounded-full border border-gold-400/50 bg-cream-50 px-6 py-3 text-[#6E260E] shadow-sm transition-all hover:border-gold-500 hover:shadow-md"
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
            <span className="text-sm tracking-wide">
              {playing ? 'Pause' : 'Play'} song
            </span>
            <Volume2 size={16} className="text-gold-500" />
          </button>
          <audio ref={audioRef} loop>
            <source src={birthdayMusic} type="audio/mpeg" />
          </audio>
        </Reveal>


        <Reveal variant="up" delay={200}>
          <h2 className="mt-16 font-script text-4xl text-gold-500 sm:text-5xl">
            Welcome to my birthday website! 
          </h2>
        </Reveal>

        <FloralDivider className="my-8" />

        <Reveal variant="up" delay={300}>
          <div className="space-y-5 font-serif text-lg leading-relaxed text-gold-200 sm:text-xl">
            <p>
              It is with utmost gratitude and excitement that I invite you to my 18th birthday celebration! 
            </p>
            <p>
              In the almost eighteen years of my life, you’ve all served as gentle hands that shaped the person I continue to become and left traces of yourselves in every chapter of my story.
            </p>
            <p>
              As I stand on the threshold of adulthood, I wish to celebrate not only the passing of time, but also the people who gave those years plenty of meaning. It would be my greatest joy to have you beside me as I turn this page toward a new chapter.

            </p>
          </div>
        </Reveal>

        <Reveal variant="up" delay={500}>
          <p className="mt-8 font-formal text-3xl text-gold-500">Love,</p>
          <p className="font-script text-4xl text-gold-400">Althea Rein</p>
        </Reveal>
      </div>
    </section>
  );
}

