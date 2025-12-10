import React from 'react';
import { STATS } from '../constants';

const GlobalPresenceSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1320px] relative z-10">
        
        {/* Top Row: Content + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left: Text Content */}
          <div className="max-w-xl">
             <span className="text-[#38bdf8] font-bold uppercase tracking-wider text-sm mb-3 block">
              Global Reach
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Global Presence
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              With operations across 40+ countries, manufacturing excellence and a robust service network, 
              Ion Exchange is positioned as a global water technology leader.
            </p>
          </div>

          {/* Right: Green World Map (Inline SVG) */}
          <div className="relative w-full h-[300px] md:h-[400px]">
            <svg 
              viewBox="0 0 1000 450" 
              className="w-full h-full drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.3))' }}
            >
              <g fill="#22c55e" fillOpacity="1">
                 {/* North America */}
                 <path d="M150,50 L250,50 L300,100 L300,200 L200,250 L100,200 L100,100 Z" style={{display: 'none'}} /> 
                 {/* Simplified World Map Paths for visual representation */}
                 <path d="M165.5,133.2 C158.3,130.1 140.2,118.5 130.5,108.2 C115.3,92.1 110.5,80.5 110.5,80.5 L125.2,60.1 L180.5,55.5 L250.2,50.1 L320.5,60.5 L340.2,90.5 L310.5,150.2 L280.2,190.5 L240.5,220.2 L220.2,210.5 L225.5,180.2 L200.5,160.2 L165.5,133.2 Z M180.5,230.5 L200.5,230.5 L210.5,260.5 L215.5,300.5 L200.5,350.5 L180.5,330.5 L175.5,280.5 L180.5,230.5 Z" />
                 {/* South America */}
                 <path d="M260.5,250.5 L320.5,250.5 L350.5,300.5 L330.5,400.5 L300.5,430.5 L280.5,400.5 L260.5,320.5 L260.5,250.5 Z" />
                 {/* Europe/Asia/Africa block simplified */}
                 <path d="M430.5,80.5 L500.5,60.5 L600.5,60.5 L700.5,80.5 L800.5,70.5 L850.5,90.5 L900.5,120.5 L880.5,150.5 L800.5,180.5 L750.5,220.5 L780.5,260.5 L750.5,300.5 L700.5,280.5 L680.5,350.5 L600.5,350.5 L550.5,300.5 L500.5,280.5 L480.5,220.5 L450.5,200.5 L420.5,150.5 L430.5,80.5 Z" />
                 {/* Australia */}
                 <path d="M780.5,320.5 L850.5,320.5 L860.5,360.5 L820.5,390.5 L770.5,360.5 L780.5,320.5 Z" />
              </g>
              {/* Map Dots */}
              <circle cx="200" cy="100" r="4" fill="white" className="animate-pulse" />
              <circle cx="220" cy="130" r="4" fill="white" className="animate-pulse delay-75" />
              <circle cx="290" cy="280" r="4" fill="white" className="animate-pulse delay-150" />
              <circle cx="480" cy="110" r="4" fill="white" className="animate-pulse delay-300" />
              <circle cx="520" cy="140" r="4" fill="white" className="animate-pulse delay-700" />
              <circle cx="750" cy="120" r="4" fill="white" className="animate-pulse delay-500" />
              <circle cx="800" cy="350" r="4" fill="white" className="animate-pulse delay-200" />
              <circle cx="600" cy="250" r="4" fill="white" className="animate-pulse delay-1000" />
            </svg>
          </div>

        </div>

        {/* Bottom Row: Metrics */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-8 border-t border-white/10 pt-12">
           {STATS.map((stat, index) => (
              <div key={index} className="flex-1 min-w-[200px]">
                 <div className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">{stat.value}</div>
                 <div className="text-blue-200 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">{stat.label}</div>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalPresenceSection;