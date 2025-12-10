import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EcosystemSlider from './components/EcosystemSlider';
import AboutSection from './components/AboutSection';
import IndustriesSection from './components/IndustriesSection';
import SustainabilitySection from './components/SustainabilitySection';
import MilestonesSection from './components/MilestonesSection';
import DigitalInnovationSection from './components/DigitalInnovationSection';
import GlobalPresenceSection from './components/GlobalPresenceSection';
import CSRSection from './components/CSRSection';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Section 2: Ecosystem / What we do */}
        <div id="solutions">
          <EcosystemSlider />
        </div>

        {/* Section 3: About Banner */}
        <div id="company">
           <AboutSection />
        </div>

        {/* Section 4: Industries */}
        <div id="industries">
          <IndustriesSection />
        </div>

        {/* Section 5: Sustainability */}
        <div id="sustainability">
           <SustainabilitySection />
        </div>

        {/* Section 6: Milestones */}
        <MilestonesSection />

        {/* Section 7: Digital Innovation */}
        <DigitalInnovationSection />

        {/* Section 8: CSR */}
        <CSRSection />

        {/* Section 9: Global Presence */}
        <GlobalPresenceSection />

        {/* Final CTA Banner */}
        <section className="py-20 bg-blue-600 text-center text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Build Your Next Water Solution?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-colors">
                  Contact Us
               </button>
               <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2">
                  Explore Solutions <ArrowRight size={18} />
               </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;