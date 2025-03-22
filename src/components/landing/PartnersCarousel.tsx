import React, { useEffect, useRef } from 'react';

const PARTNERS = [
  {
    name: "INSEP",
    logo: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "FFF",
    logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Ministère des Sports",
    logo: "https://images.unsplash.com/photo-1444069069607-20f8a0961b1b?w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "CNOSF",
    logo: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "HEC Paris",
    logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "AFDAS",
    logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "ESJ Lille",
    logo: "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=150&h=150&auto=format&fit=crop"
  }
];

export function PartnersCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the partners for seamless scrolling
    const content = scrollContainer.innerHTML;
    scrollContainer.innerHTML = content + content;

    // Calculate scroll speed based on content width
    const scrollWidth = scrollContainer.scrollWidth;
    const duration = scrollWidth * 20; // Adjust speed by changing this multiplier

    const scroll = () => {
      if (!scrollContainer) return;

      if (scrollContainer.scrollLeft >= scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 20);

    // Pause animation on hover
    scrollContainer.addEventListener('mouseenter', () => clearInterval(interval));
    scrollContainer.addEventListener('mouseleave', () => setInterval(scroll, 20));

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Nos partenaires
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Ils nous font confiance pour accompagner les athlètes
        </p>
        
        <div className="relative">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div 
            ref={scrollRef}
            className="flex items-center space-x-12 overflow-hidden"
            style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            {PARTNERS.map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 group"
              >
                <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-gray-50 p-4 transition-all duration-300 hover:shadow-lg">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>
                <p className="mt-2 text-sm text-center text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}