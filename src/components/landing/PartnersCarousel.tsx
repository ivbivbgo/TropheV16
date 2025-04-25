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
  const scrollIntervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the content
    const content = scrollContainer.innerHTML;
    scrollContainer.innerHTML = content + content;

    const startScroll = () => {
      scrollIntervalRef.current = setInterval(() => {
        if (!scrollContainer) return;
        
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth / 2)) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }, 50);
    };

    const stopScroll = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    startScroll();

    const container = scrollContainer;
    container.addEventListener('mouseenter', stopScroll);
    container.addEventListener('mouseleave', startScroll);

    return () => {
      stopScroll();
      container.removeEventListener('mouseenter', stopScroll);
      container.removeEventListener('mouseleave', startScroll);
    };
  }, []);

  return (
    <div className="w-full bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Nos Partenaires institutionnels
        </h2>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div 
            ref={scrollRef}
            className="flex items-center gap-24 overflow-hidden py-8"
          >
            {PARTNERS.map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0"
              >
                <div className="w-48 h-48 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-32 h-32 object-contain filter grayscale"
                  />
                </div>
                <p className="mt-4 text-center text-gray-600 font-medium">
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