import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import Navigation from '@/components/Navigation';
import Apartment from '@/components/Apartment';
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
      <div className="min-h-screen bg-[#f4f4f5] text-[#414042]">
        <main className="container mx-auto">
          <HeroSection />
          <Navigation />
          <Routes>
            <Route path="/" element={<TimelineSection />} />
            <Route path="/apartment" element={<Apartment />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;