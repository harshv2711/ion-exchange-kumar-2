import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image (Simulating Video) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/waterbg/1920/1080"
          alt="Water Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-[1320px] text-white pt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            One Source. Complete Water & Environment Solutions.
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
            Delivering end-to-end water and environmental solutions powered by innovation, engineering excellence, and global expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all group">
              Explore Solutions
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group">
              Speak to an Expert
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;