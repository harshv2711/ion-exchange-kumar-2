
import React, { useState, useRef, useEffect } from 'react';
import { MILESTONES } from '../constants';
import { ArrowRight, Circle } from 'lucide-react';

const MilestonesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Constants for wheel geometry
  const TOTAL_ITEMS = MILESTONES.length;
  const ANGLE_PER_ITEM = 360 / TOTAL_ITEMS;
  
  // Handle Milestone Click
  const handleItemClick = (index: number) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600); // Reset animation state after transition

    // Calculate Shortest Path Rotation
    // Target rotation is the negative of the item's natural angle (to bring it to 0/Top)
    const targetRotation = -(index * ANGLE_PER_ITEM);
    
    // Find the difference between current and target
    let delta = targetRotation - rotation;

    // Normalize delta to be within -180 to 180 for shortest path
    // This prevents the wheel from spinning 350 degrees when moving 1 step back
    while (delta > 180) delta -= 360;
    while (delta < -180) delta += 360;

    setRotation(rotation + delta);
  };

  return (
    // Milestones Wheel Timeline Section
    <section className="bg-slate-50 py-24 border-t border-gray-100 overflow-hidden select-none">
      <div className="container mx-auto px-4 max-w-[1320px]">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3 block">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Milestones in Our Growth Story
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[600px]">
          
          {/* Left Column: The Timeline Wheel */}
          <div className="lg:col-span-7 relative flex items-center justify-center h-[500px] md:h-[600px]">
            
            {/* Timeline Wheel Container */}
            <div 
              className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* Dashed Orbital Line */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 scale-75"></div>
              
              {/* Timeline Year Segment */}
              {MILESTONES.map((milestone, index) => {
                const isActive = index === activeIndex;
                const angle = index * ANGLE_PER_ITEM;
                
                // Position logic: Rotate to angle, translate outward, then counter-rotate
                // We use translate-y negative to push up from center (12 o'clock position)
                const radius = 225; // 450px diameter circle for items (adjust based on container size)

                return (
                  <div
                    key={milestone.year}
                    onClick={() => handleItemClick(index)}
                    className={`absolute top-1/2 left-1/2 -ml-10 -mt-5 w-20 h-10 flex items-center justify-center cursor-pointer transition-all duration-300 z-10 group`}
                    style={{
                      transform: `rotate(${angle}deg) translate(0, -${radius}px) rotate(${-angle}deg)`
                    }}
                  >
                     {/* The Year Pill */}
                     <div 
                      className={`
                        w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-sm md:text-base font-bold transition-all duration-500 shadow-sm
                        ${isActive 
                          ? 'bg-blue-600 text-white scale-125 shadow-blue-500/30' 
                          : 'bg-white text-gray-400 hover:text-blue-500 hover:bg-blue-50 border border-gray-100'
                        }
                      `}
                      // Counter-rotate text so it stays upright relative to the screen, not the wheel
                      style={{ transform: `rotate(${-rotation}deg)` }}
                     >
                       {milestone.year}
                     </div>
                  </div>
                );
              })}
            </div>

            {/* Central Hub (Stationary) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-40 h-40 bg-white rounded-full shadow-2xl border-4 border-blue-50 flex flex-col items-center justify-center z-20">
                  <div className="text-blue-600 mb-1">
                    <Circle size={24} strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Est.</span>
                  <span className="text-xl font-bold text-gray-900">1964</span>
               </div>
               {/* Pulse Effect behind hub */}
               <div className="absolute w-40 h-40 bg-blue-500/5 rounded-full animate-ping"></div>
            </div>

            {/* Gradient Overlay to fade bottom part of wheel for depth (Optional) */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-0 pointer-events-none"></div>

          </div>

          {/* Right Column: Active Milestone Content */}
          <div className="lg:col-span-5 relative pl-4 lg:pl-12">
            
            {MILESTONES.map((milestone, index) => {
              const isActive = index === activeIndex;
              if (!isActive) return null;

              return (
                <div 
                  key={milestone.year}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-bold text-blue-100 leading-none select-none">
                      {milestone.year}
                    </span>
                    <div className="h-px bg-blue-100 flex-1"></div>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-blue-500 pl-6">
                    {milestone.description}
                  </p>

                  {/* Navigation Helper (Optional) */}
                  <div className="flex gap-4 pt-4">
                    <button 
                      onClick={() => handleItemClick((activeIndex - 1 + TOTAL_ITEMS) % TOTAL_ITEMS)}
                      className="p-2 rounded-full border border-gray-200 hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label="Previous milestone"
                    >
                      <ArrowRight size={20} className="rotate-180" />
                    </button>
                    <button 
                      onClick={() => handleItemClick((activeIndex + 1) % TOTAL_ITEMS)}
                      className="p-2 rounded-full border border-gray-200 hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label="Next milestone"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
