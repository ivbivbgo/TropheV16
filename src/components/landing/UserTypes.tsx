import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../assets/Passionné de sport2.jpg';
import img2 from '../../assets/sportif.jpg';
import img3 from '../../assets/professionnels.jpg';
import img4 from '../../assets/sponsors.jpg';
import img5 from '../../assets/fédérations et clubs.jpg';
import img6 from '../../assets/organismes.jpg';
import { ArrowBigRight, ArrowRight, Award, ChevronRight, CircleDot, Dot, Medal } from 'lucide-react';

function ScrollingValues() {
  const phrases = [
    "La performance au service du sport",
    "L'innovation comme moteur de progrès",
    "La passion qui nous anime chaque jour",
    "L'excellence comme objectif constant",
    "Le respect au cœur de nos valeurs"
  ];
  
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Calculer la largeur d'un ensemble complet de phrases
    const singleSetWidth = scrollContainer.scrollWidth / 4; // car vous avez 4 copies
    
    const animation = scrollContainer.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${singleSetWidth}px)` }
      ],
      {
        duration: 30000,
        iterations: Infinity,
        easing: 'linear'
      }
    );
    
    return () => {
      if (animation) {
        animation.cancel();
      }
    };
  }, []);
  
  return (
    <div className="py-12 mt-16 overflow-hidden">
      {/* Thin bar with gradient at the top */}
      <div className="h-0.5 w-full bg-gradient-to-r from-zinc-800 to-zinc-700"></div>
      
      <div className="mx-auto relative py-4">        
        <div 
          ref={scrollRef}
          className="whitespace-nowrap inline-flex items-center"
        >
          {/* Doublement des phrases pour assurer la continuité */}
          {[...phrases, ...phrases, ...phrases, ...phrases].map((phrase, index) => (
            <React.Fragment key={index}>
              {/* Icône avant les phrases */}
              {index % phrases.length !== 0 && (
                <div className="inline-block px-2">
                  <ArrowRight className="h-6 w-6 text-zinc-800" />
                </div>
              )}
              <div 
                className="inline-block px-6 py-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span 
                  className={`text-xl font-bold tracking-wider transition-all duration-300 ${
                    hoveredIndex === index 
                    ? 'bg-gradient-to-r from-zinc-800 to-zinc-700 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-r from-zinc-800 to-zinc-700 bg-clip-text text-transparent'
                  }`}
                >
                  {phrase}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Thin bar with gradient at the bottom */}
      <div className="h-0.5 w-full bg-gradient-to-r from-zinc-800 to-zinc-700"></div>
    </div>
  );
}

export function UserTypes() {
  const sectionRef = useRef(null);
  const [isFirstCardFlipped, setIsFirstCardFlipped] = useState(false);
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);
  
  useEffect(() => {
    // Créer un Intersection Observer pour détecter quand la section entre dans le viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedOnce) {
          // Déclencher l'animation de la première carte après un court délai
          setTimeout(() => {
            setIsFirstCardFlipped(true);
            
            // Remettre la carte dans son état initial après une durée plus longue (3 secondes)
            setTimeout(() => {
              setIsFirstCardFlipped(false);
              setHasAnimatedOnce(true);
              
              // Pas de répétition de l'animation
            }, 3000);
          }, 1000);
        }
      },
      {
        threshold: 0.3, // Déclencher quand au moins 30% de la section est visible
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimatedOnce]);

  const userTypes = [
    { 
      title: "Passionnés de sport", 
      imgSrc: img1, 
      description: "Vous aimez le sport et ceux qui le font vibrer ? Rejoignez Trophenix pour soutenir les athlètes après leur carrière. En partageant, signant la pétition ou en parlant de notre mission autour de vous, vous jouez un rôle clé dans leur reconversion. Ensemble, faisons du sport un tremplin vers l'avenir." 
    },
    { 
      title: "Sportifs", 
      imgSrc: img2, 
      description: "Vous êtes ou avez été sportif de haut niveau ou amateur engagé ? Trophenix est votre allié pour préparer votre avenir après le sport. Accédez à un réseau bienveillant, des ressources utiles, et une communauté prête à vous soutenir dans votre reconversion professionnelle et sociale." 
    },
    { 
      title: "Professionnels", 
      imgSrc: img3, 
      description: "Entrepreneurs, recruteurs, coachs, formateurs... votre expertise a de la valeur pour nos sportifs. En vous engageant avec Trophenix, vous devenez acteur de leur seconde vie. Recrutez, accompagnez ou formez un sportif en reconversion : vous gagnez un collaborateur engagé et inspirant." 
    },
    { 
      title: "Sponsors", 
      imgSrc: img4, 
      description: "Associez votre image à une cause forte et engageante. Trophenix vous offre une visibilité positive tout en donnant du sens à votre mécénat. En soutenant la reconversion des sportifs, vous devenez partenaire d'un projet humain et fédérateur." 
    },
    { 
      title: "Clubs et Fédérations", 
      imgSrc: img5, 
      description: "Vous accompagnez les athlètes au quotidien, soyez aussi présents pour leur après-carrière. Avec Trophenix, proposez à vos licenciés un accompagnement concret, soutenez la pétition Recosport et ouvrez la voie à une nouvelle vision du sport, plus durable et solidaire." 
    },
    { 
      title: "Organismes", 
      imgSrc: img6, 
      description: "Contribuez à un projet d'intérêt général. Trophenix vous propose de participer activement à la réinsertion des sportifs : en relayant notre cause, en soutenant la pétition ou en nouant un partenariat. Ensemble, formons les talents de demain… même après la ligne d'arrivée." 
    },
  ];

  return (
    <>
      <div className="bg-white" id="profils" ref={sectionRef}>
        {/* Section d'en-tête avec fond nuancé */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex bg-gradient-to-r from-[#7C3AED]/10 to-purple-100 border border-[#7C3AED]/20 text-[#7C3AED] text-sm font-medium px-4 py-1.5 rounded-md items-center gap-2 shadow-sm mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                </svg>
                <span>Une plateforme faite pour vous</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-5">
                Adaptez votre expérience selon votre profil
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Que vous soyez sportif, professionnel ou passionné, découvrez des fonctionnalités conçues pour répondre à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>

        {/* Grille de cartes avec animation de retournement */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {userTypes.map((user, index) => (
              <div 
                key={index} 
                className={`h-64 md:h-72 lg:h-80 cursor-pointer [perspective:1000px] group ${index === 0 ? 'relative' : ''}`}
              >
                <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${
                  (index === 0 && isFirstCardFlipped) ? '[transform:rotateY(180deg)]' : ''
                } ${
                  index === 0 ? 'group-hover:[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
                } shadow-md hover:shadow-xl rounded-lg`}>
                  {/* Face avant de la carte */}
                  <div 
                    className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden border-4 border-gray-300"
                  >
                    {/* Image de fond */}
                    <div 
                      className="absolute inset-0 w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${user.imgSrc})` }}
                    />
                    
                    {/* Overlay gradient */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                    />
                    
                    {/* Tag avec le titre en bas à droite - version discrète mais visible */}
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-black/50 text-white px-3 py-1 rounded-md text-sm font-medium border-[#7C3AED]">
                        {user.title}
                      </div>
                    </div>
                  </div>
                  
                  {/* Face arrière de la carte */}
                  <div 
                    className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg overflow-hidden border-4 border-[#7C3AED] bg-[#7C3AED] flex flex-col justify-center items-center"
                  >
                    <div className="p-6 text-center">
                      <h3 className="text-white text-xl font-bold mb-4">{user.title}</h3>
                      <p className="text-white/90 text-sm">
                        {user.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Section des valeurs qui défilent */}
      <ScrollingValues />
    </>
  );
}