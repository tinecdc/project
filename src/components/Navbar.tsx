import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Dress Code', href: '#dress-code' },
  { label: 'Venue', href: '#venue' },
  { label: 'Photobook', href: '#photobook' },
  { label: 'FAQ', href: '#faq' },
  { label: 'RSVP', href: '#rsvp' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-royal-950/95 backdrop-blur-md shadow-[0_4px_30px_rgba(16,44,133,0.24)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <button
          onClick={() => go('#home')}
          className={`font-formal text-2xl tracking-wide transition-colors ${
            scrolled ? 'text-[#966919]' : 'text-[#966919] text-shadow-soft'
          }`}
        >
          Althea Rein Turns 18
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                className={`text-xs uppercase tracking-widest transition-colors hover:text-[#966919] ${
                  scrolled ? 'text-[#966919]' : 'text-[#966919] text-shadow-soft'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${scrolled ? 'text-[#966919]' : 'text-[#966919]'}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-400 md:hidden ${
          open ? 'max-h-96 mt-3' : 'max-h-0'
        }`}
      >
        <ul className="mx-6 flex flex-col gap-1 rounded-2xl bg-royal-950/95 p-4 shadow-lg backdrop-blur">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                className="w-full rounded-lg px-4 py-3 text-left text-sm uppercase tracking-widest text-brown-700 hover:bg-gold-100/60"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

