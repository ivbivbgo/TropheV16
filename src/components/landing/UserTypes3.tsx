import img1 from '../../assets/act1.png';
import img2 from '../../assets/act2.png';
import img3 from '../../assets/act3.png';
import img4 from '../../assets/act4.png';
import img5 from '../../assets/act5.jpg';
import img6 from '../../assets/act6.png';

export function UserTypes3() {
  const userTypes = [
    { 
      title: "Passionné de sport", 
      imgSrc: img1, 
      description: "Suivez vos sports préférés, accédez aux derniers résultats et statistiques en temps réel. Recevez des notifications personnalisées pour ne manquer aucun événement important de vos équipes favorites." 
    },
    { 
      title: "Sportif", 
      imgSrc: img5, 
      description: "Analysez vos performances avec des outils de suivi avancés. Planifiez vos entraînements, fixez des objectifs et suivez votre progression avec des graphiques détaillés et des recommandations personnalisées." 
    },
    { 
      title: "Professionnel", 
      imgSrc: img3,
      description: "Bénéficiez d'outils spécialisés pour les entraîneurs, préparateurs physiques et thérapeutes. Gérez les plannings d'équipe, analysez les données de performance et optimisez les programmes d'entraînement." 
    },
    { 
      title: "Sponsors", 
      imgSrc: img4, 
      description: "Connectez-vous avec des athlètes et des équipes qui correspondent à vos valeurs. Exploitez des outils de marketing ciblés et mesurez le retour sur investissement de vos partenariats sportifs." 
    },
    { 
      title: "Clubs et fédérations", 
      imgSrc: img2, 
      description: "Centralisez la gestion de vos licenciés, organisez des compétitions et communiquez efficacement. Simplifiez les tâches administratives et concentrez-vous sur le développement de votre structure." 
    },
    { 
      title: "Établissements", 
      imgSrc: img6, 
      description: "Optimisez l'utilisation de vos équipements et infrastructures. Gérez les réservations, la maintenance et maximisez la rentabilité de vos installations tout en améliorant l'expérience des utilisateurs." 
    },
  ];

  return (
    <div className="bg-white">
      {/* Section d'en-tête avec fond nuancé */}
      <div className="bg-gradient-to-b from-gray-50 to-white pt-28">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

      {/* Grille d'images carrées avec espacement réduit pour mieux remplir l'espace */}
      <div className="max-w-8xl mx-auto px-2 sm:px-3 lg:px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10">
          {userTypes.map((user, index) => (
            <div
              key={index}
              className="relative group aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 ease-in-out border-4 border-[#7C3AED]"
            >
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out transform scale-105 group-hover:scale-110"
                style={{ 
                  backgroundImage: `url(${user.imgSrc})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
                aria-hidden="true"
              />

              {/* Overlay de base (toujours présent) - uniquement en bas */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-all duration-500 ease-in-out"
                aria-hidden="true"
              />
              
              {/* Overlay supplémentaire qui apparaît au hover avec une transition */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-transparent via-black/40 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                aria-hidden="true"
              />

              {/* Contenu textuel - titre toujours visible, description au hover */}
              <div className="absolute inset-0 flex flex-col justify-end items-center p-6">
                {/* Titre qui remonte au hover */}
                <h3 className="text-white text-xl font-bold mb-2 z-10 text-center transition-transform duration-500 ease-out transform group-hover:-translate-y-2">
                  {user.title}
                </h3>
                
                {/* Description qui apparaît en fondu avec défilement si nécessaire */}
                <div className="w-full max-h-0 group-hover:max-h-28 overflow-y-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <p className="text-white/90 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {user.description}
                  </p>
                </div>
              </div>
              
              {/* Bordure décorative qui apparaît au hover */}
              <div className="absolute inset-3 border border-white/0 group-hover:border-white/40 rounded transition-all duration-500 ease-in-out pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}