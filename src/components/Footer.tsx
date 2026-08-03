import { Phone, Mail, Heart } from 'lucide-react';
import { FloralDivider } from './Ornaments';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-royal-950 py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-formal text-3xl text-gold-500">Althea Turns 18</p>
        <FloralDivider className="my-6" />
        <p className="font-serif text-lg italic text-gold-200">
          With love and gratitude
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:905 339 5082"
            className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-5 py-2.5 text-sm text-gold-600 shadow-sm transition-all hover:shadow-md"
          >
            <Phone size={15} className="text-gold-500" />
            905 339 5082
          </a>
          <a
            href="mailto:altheareinmiranda08@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-5 py-2.5 text-sm text-gold-600 shadow-sm transition-all hover:shadow-md"
          >
            <Mail size={15} className="text-gold-500" />
            altheareinmiranda08@gmail.com
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gold-200">
        
          <Heart size={12} className="text-gold-500" />
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}

