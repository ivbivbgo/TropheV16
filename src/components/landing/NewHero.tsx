import { useState, useEffect, useRef } from 'react';
import { NewNav } from './NewNav';

interface NewHeroProps {
  onLogin?: () => void;
}

export function NewHero({ onLogin }: NewHeroProps) {
  const [showHighlight, setShowHighlight] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    
    intervalRef.current = setInterval(() => {
      setShowHighlight(prev => !prev); 
    }, 450); 

    const timeoutId = setTimeout(() => {
      setIsAnimating(false); 
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setShowHighlight(false); 
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); 

  // Updated base and highlight classes with beige color scheme
  const baseClasses = 'bg-[#c2a48c]/10 scale-100';
  const highlightClasses = 'bg-[#c2a48c]/20 scale-[1.02]';

  return (
    <div className="relative lg:min-h-[65vh]">
      <NewNav onLogin={onLogin} />
      {/* Reduced top padding on mobile */}
      <div className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">

            {/* --- BANNIERE NOUVEAUTES --- */}
            <div
              className={`
                mb-8 sm:mb-12 border border-[#c8ad98] text-[#c8ad98]
                text-xs sm:text-sm md:text-base font-semibold px-2 sm:px-3 py-1 rounded-md flex items-center
                gap-1 mx-auto w-fit
                transform origin-center
                transition-all duration-700 ease-in-out
                ${isAnimating
                  ? (showHighlight ? highlightClasses : baseClasses)
                  : baseClasses
                }
              `}
            >
              <span className="line-clamp-1">
                🎉 Nouvautés: Introduction de la page dashboard !
              </span>
            </div>
            {/* --- FIN BANNIERE NOUVEAUTES --- */}

            {/* Responsive heading with better size scaling */}
            <h1 className="mb-4 sm:mb-6 text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
              Briller durant et <span className="text-[#7C3AED] block xs:inline">après le sport</span>
            </h1>

            <div className="mb-8 sm:mb-12 relative inline-block">
              <p className="text-sm xs:text-lg sm:text-2xl text-gray-500 font-sm tracking-wide px-2">
                Gérez votre carrière et votre reconversion sportive
              </p>
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C3AED]/0 via-[#7C3AED]/30 to-[#7C3AED]/0"></div>
            </div>

            {/* ORIGINAL BUTTON - UNTOUCHED FOR LAPTOPS */}
            <div className="flex justify-center items-center mx-auto text-gray-900">
              <button className="flex items-center px-6 py-2.5 text-md font-semibold border border-emerald-500 bg-emerald-500/10 text-emerald-500 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-md sm:px-6 sm:py-2.5 sm:text-md">
                <span>Lancez-vous dans l'aventure Trophenix</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}