import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import Navigation from '@/components/Navigation';
import Apartment from '@/components/Apartment';
import Other from '@/components/Other';
import Footer from '@/components/Footer';
 
function App() { 
  useEffect(() => {
    document.title = 'Juliette & Joris | Mariage Mai 2026';
    
    const defaultTitle = document.querySelector('[data-default]');
    if (defaultTitle) {
      defaultTitle.removeAttribute('data-default');
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen-support bg-[#f4f4f5] text-[#414042]">
        <main className="container mx-auto">
          <HeroSection />
          <Navigation />
          <Routes>
            <Route path="/" element={<TimelineSection />} />
            <Route path="/apartment" element={<Apartment />} />
            <Route path="/other" element={<Other />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;