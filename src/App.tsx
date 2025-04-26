import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import Footer from '@/components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'Juliette & Joris | Mariage Mai 2026';
    
    // Find the element with the data-default attribute and remove it
    const defaultTitle = document.querySelector('[data-default]');
    if (defaultTitle) {
      defaultTitle.removeAttribute('data-default');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f4f5] text-[#414042]">
      <main className="container mx-auto">
        <HeroSection />
        <TimelineSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;