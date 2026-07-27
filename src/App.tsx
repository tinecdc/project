import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Welcome } from '@/components/Welcome';
import { Story } from '@/components/Story';
import { DressCode } from '@/components/DressCode';
import { GiftGuide } from '@/components/GiftGuide';
import { Venue } from '@/components/Venue';
import { SnapAndShare } from '@/components/SnapAndShare';
import { FAQ } from '@/components/FAQ';
import { RSVP } from '@/components/RSVP';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Story />
        <DressCode />
        <GiftGuide />
        <Venue />
        <SnapAndShare />
        <FAQ />
        <RSVP />
      </main>
      <Footer />
    </div>
  );
}

export default App;
