import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Welcome } from '@/components/Welcome';
import { DressCode } from '@/components/DressCode';
import { GiftGuide } from '@/components/GiftGuide';
import { Venue } from '@/components/Venue';
import { Program } from '@/components/Program';
import { FAQ } from '@/components/FAQ';
import { RSVP } from '@/components/RSVP';
import { Footer } from '@/components/Footer';
import { Photobook } from '@/components/Photobook';
import { InviteAdmin } from '@/components/InviteAdmin';

function App() {
  const [isAdminView, setIsAdminView] = useState(() => typeof window !== 'undefined' && window.location.hash === '#admin');

  useEffect(() => {
    const syncView = () => {
      setIsAdminView(window.location.hash === '#admin');
    };

    window.addEventListener('hashchange', syncView);
    return () => window.removeEventListener('hashchange', syncView);
  }, []);

  if (isAdminView) {
    return <InviteAdmin />;
  }

  return (
    <div className="min-h-screen bg-royal-950">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Program />
        <DressCode />
        <Photobook />
        <Venue />
        <GiftGuide />
        <FAQ />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}

export default App;
