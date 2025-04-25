import { useEffect, useRef } from 'react';
import partenaire1 from '../../assets/partenaire1.png';
import partenaire2 from '../../assets/partenaire2.png';
import partenaire3 from '../../assets/partenaire3.png';
import partenaire4 from '../../assets/partenaire4.png';

export function Partner() {
  const partners = [
    { logo: partenaire1 },
    { logo: partenaire2 },
    { logo: partenaire3 },
    { logo: partenaire4 },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const startScroll = () => {
    if (intervalRef.current) return;

    intervalRef.current = window.setInterval(() => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    }, 15);
  };

  const stopScroll = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const partnerElements = Array.from(scrollContainer.children);
    partnerElements.forEach(element => {
      const clone = element.cloneNode(true);
      scrollContainer.appendChild(clone);
    });

    startScroll();

    scrollContainer.addEventListener('mouseenter', stopScroll);
    scrollContainer.addEventListener('mouseleave', startScroll);

    return () => {
      stopScroll();
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', stopScroll);
        scrollContainer.removeEventListener('mouseleave', startScroll);
      }
    };
  }, []);

  return (
    <div className='bg-white'>
      <section className="pt-8 bg-white overflow-hidden" id='partenariat'>
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto px-8 sm:px-12 lg:px-24">
          
          <div className="flex flex-col md:flex-row items-center">
            {/* Titre à gauche */}
            <div className="md:w-1/4 mb-8 md:mb-0 md:pr-8 flex items-center justify-center md:justify-start h-full">
              <h2 className="text-sm mt-2 font-bold tracking-wider text-gray-900 leading-tight">
                CES ENTREPRISES NOUS FONT CONFIANCE
              </h2>
            </div>
            
            {/* Carrousel de logos */}
            <div className="md:w-3/4 relative">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              <div 
                ref={scrollRef}
                className="flex items-center space-x-1 overflow-hidden"
              >
                {partners.map((partner, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-46 h-28 bg-transparent rounded-2xl transition-all duration-300 flex items-center justify-center p-6"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt="Partner Logo"
                        loading="lazy"
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partner;