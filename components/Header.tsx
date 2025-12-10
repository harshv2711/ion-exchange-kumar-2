import React, { useState } from 'react';
import { Search, ArrowRight, ChevronDown } from 'lucide-react';

// Specific navigation configuration as requested
const HEADER_NAV_ITEMS = [
  { label: 'Solutions', href: '#solutions', hasMegaMenu: true },
  { label: 'Industries', href: '#industries' },
  { label: 'Sustainability', href: '#sustainability', color: 'text-green-500' },
  { label: 'Digital Innovation', href: '#digital-innovation', color: 'text-blue-500' },
  { label: 'Company', href: '#company' },
  { label: 'Resources', href: '#resources' },
];

// Placeholder data for the Mega Menu
const MEGA_MENU_DATA = [
  {
    title: "Water Treatment",
    links: ["Turnkey Projects", "Standard Systems", "Wastewater Treatment", "Zero Liquid Discharge"]
  },
  {
    title: "Resins & Membranes",
    links: ["Ion Exchange Resins", "RO/UF/NF Membranes", "Indion Resins", "Hydramem"]
  },
  {
    title: "Chemicals & Services",
    links: ["Cooling Water Treatment", "Boiler Water Treatment", "Fireside Additives", "O&M Services"]
  },
  {
    title: "Home & Community",
    links: ["ZeroB Purifiers", "Softening Systems", "Rural Water Solutions", "Institutional Plants"]
  }
];

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Header Wrapper - pointer-events-auto allows interaction within the header while passing clicks through the empty space around it */}
      <header 
        className="bg-[#111111] text-white rounded-xl shadow-2xl w-full max-w-[1320px] h-[72px] flex items-center justify-between px-6 lg:px-8 relative pointer-events-auto border border-white/5"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0 cursor-pointer mr-8">
          <div className="flex flex-col">
             <div className="flex items-center gap-1">
                {/* Visual approximation of the logo text in the screenshot */}
                <span className="text-blue-500 font-bold text-2xl tracking-tight leading-none">ION EXCHANGE</span>
             </div>
             <span className="text-[10px] text-green-500 font-medium tracking-widest uppercase leading-none mt-1" style={{ fontFamily: 'cursive, sans-serif' }}>
                Refreshing the Planet
             </span>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1">
          {HEADER_NAV_ITEMS.map((item) => (
            <div 
              key={item.label}
              className="relative h-full flex items-center"
              onMouseEnter={() => item.hasMegaMenu && setActiveDropdown(item.label)}
            >
              <a
                href={item.href}
                className={`text-[15px] font-medium transition-opacity hover:opacity-80 flex items-center gap-1.5 py-6 ${item.color || 'text-white'}`}
              >
                {item.label}
                {item.hasMegaMenu && <ChevronDown size={14} className="opacity-70 mt-0.5" />}
              </a>
            </div>
          ))}
        </nav>

        {/* Right Actions Section */}
        <div className="flex items-center gap-6 flex-shrink-0 ml-4">
          <button className="text-white hover:text-blue-400 transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          
          <a 
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-blue-900/20"
          >
            Contact Us
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Solutions Mega Menu */}
        {activeDropdown === 'Solutions' && (
          <div 
            className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#1a1a1a] rounded-xl shadow-2xl border border-white/10 p-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseEnter={() => setActiveDropdown('Solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
             <div className="grid grid-cols-4 gap-8">
               {MEGA_MENU_DATA.map((col, idx) => (
                 <div key={idx} className="space-y-4">
                   <h4 className="text-blue-500 font-bold text-xs uppercase tracking-widest border-b border-white/10 pb-3">
                     {col.title}
                   </h4>
                   <ul className="space-y-3">
                     {col.links.map(link => (
                       <li key={link}>
                         <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all text-sm block">
                           {link}
                         </a>
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;