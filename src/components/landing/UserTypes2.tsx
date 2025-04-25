import img1 from '../../assets/act1.png';
import img2 from '../../assets/act2.png';
import img3 from '../../assets//act3.png';
import img4 from '../../assets//act4.png';
import img5 from '../../assets//act5.jpg';
import img6 from '../../assets//act6.png';

export function UserTypes2() {
  const userTypes = [
    { title: "Passionné de sport", imgSrc: img1 },
    { title: "Sportif", imgSrc: img2 },
    { title: "Professionnel", imgSrc: img3 },
    { title: "Sponsors", imgSrc: img4 },
    { title: "Clubs et fédérations", imgSrc: img5 },
    { title: "Établissements", imgSrc: img6 },
  ];

  return (
    <div className="bg-white">

      <div className="max-w-7xl mx-auto pt-16 pb-12 lg:pt-24 lg:pb-16 px-4 sm:px-6 lg:px-8 text-center">
         <div className="mb-6 inline-flex bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-300/70 text-sky-700 text-sm font-medium px-4 py-1.5 rounded-md items-center gap-2 shadow-sm">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-sky-500">
             {/* SVG Path */}
             <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
           </svg>
           <span>Une plateforme faite pour vous</span>
         </div>
         <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-5">
           Adaptez votre expérience selon votre profil
         </h2>
         <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
           Que vous soyez sportif, professionnel ou passionné, découvrez des fonctionnalités conçues pour répondre à vos besoins spécifiques.
         </p>
      </div>

      <div className="max-w-7xl mx-auto rounded-2xl relative overflow-hidden shadow-lg">
        <div className="grid grid-rows-2 grid-cols-3 gap-0">
          {userTypes.map((user, index) => (
            <div
              key={index}
              className="relative group h-64 md:h-80 lg:h-96 overflow-hidden"
            >
              <div
                className={"absolute inset-0 w-full h-full bg-cover bg-center filter brightness-100 group-hover:brightness-[1.02] group-hover:contrast-110 saturate-100 transition-[filter,transform] duration-500 ease-in-out transform scale-105 group-hover:scale-110"}
                style={{ backgroundImage: `url(${user.imgSrc})` }}
                aria-hidden="true"
              />

              {/* Overlay Gradient - SANS BLUR */}
              <div
                className={
                  "absolute inset-0 " +
                  // Gradient pour la lisibilité du texte. Peut être ajusté si besoin (ex: from-black/70 via-black/35)
                  "bg-gradient-to-t from-black/70 via-transparent to-transparent " +
                  // Transition d'opacité possible si on veut la faire varier au survol
                  "transition-opacity duration-300 ease-in-out"
                 }
                 aria-hidden="true"
              ></div>

              {/* Bordure interne subtile au survol (conservée) */}
              <div className="absolute inset-1 md:inset-2 border border-white/0 group-hover:border-white/30 transition-colors duration-300 ease-in-out pointer-events-none rounded-md"
                   aria-hidden="true"></div>

               {/* Contenu Textuel (conservé) */}
               <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 lg:p-6 pointer-events-none">
                 {/* Optionnel: Icône */}
                 {/* user.Icon && <user.Icon className="h-5 w-5 text-white/70 mb-2" /> */}

                 <h3 className={
                    "text-white text-lg sm:text-xl md:text-2xl font-semibold leading-tight drop-shadow-lg " +
                    "transform translate-y-0 group-hover:-translate-y-1 " +
                    "transition-[color,transform] duration-300 ease-in-out"
                 }>
                   {user.title}
                 </h3>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Espace après la grille */}
      <div className="pt-16 lg:pt-24"></div>

    </div>
  );
}