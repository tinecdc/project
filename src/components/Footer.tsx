import { Phone, Mail, Heart } from 'lucide-react';
import { FloralDivider } from './Ornaments';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cream-100 py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-formal text-3xl text-burgundy-800">Althea Turns 18</p>
        <FloralDivider className="my-6" />
        <p className="font-serif text-lg italic text-burgundy-600">
          With love and gratitude
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:916 604 8920"
            className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-5 py-2.5 text-sm text-burgundy-700 shadow-sm transition-all hover:shadow-md"
          >
            <Phone size={15} className="text-blush-500" />
            917 853 2668
          </a>
          <a
            href="mailto:hello@aliciaturns18.com"
            className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-5 py-2.5 text-sm text-burgundy-700 shadow-sm transition-all hover:shadow-md"
          >
            <Mail size={15} className="text-blush-500" />
            Get in touch
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-burgundy-500">
        
          <Heart size={12} className="text-blush-500" />
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}
