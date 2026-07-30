import { Phone, Mail, Heart } from 'lucide-react';
import { FloralDivider } from './Ornaments';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-royal-950 py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-formal text-3xl text-[#80461B]">Althea Turns 18</p>
        <FloralDivider className="my-6" />
        <p className="font-serif text-lg italic text-[#6F4E37]">
          With love and gratitude
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:916 604 8920"
            className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-5 py-2.5 text-sm text-[#6E260E] shadow-sm transition-all hover:shadow-md"
          >
            <Phone size={15} className="text-gold-500" />
            916 604 8920
          </a>
          <a
            href="mailto:hello@altheaturns18.com"
            className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-5 py-2.5 text-sm text-[#6E260E] shadow-sm transition-all hover:shadow-md"
          >
            <Mail size={15} className="text-gold-500" />
            Get in touch
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#848884]">
        
          <Heart size={12} className="text-gold-500" />
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}

