import presentation from '../../assets/142.png';

// Vous devrez remplacer les URLs src des images par vos propres images
const imageUrl1 = presentation
const imageUrl2 = presentation

export function TextPresentationV2() {
  return (
    <section
      className="relative w-full min-h-[75vh] bg-[#514be5] p-6 md:p-12 flex items-center justify-center overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '5px 5px' }}></div>

      {/* Decorative Shapes */}
      <div className="absolute top-[-50px] right-[5%] w-48 h-48 bg-white/10 rounded-full filter blur-2xl opacity-50 z-0"></div>
      <div className="absolute bottom-[-60px] left-[10%] w-64 h-64 bg-white/15 rounded-full filter blur-3xl opacity-60 z-0"></div>

      {/* Main Content Container */}
      <div className="container mx-auto flex flex-wrap items-center relative z-10">

        {/* Left Column (Images) */}
        <div className="w-full lg:w-5/12 flex justify-center items-center px-4 md:px-8 mb-10 lg:mb-0 lg:pr-10 min-h-[300px] lg:min-h-0 relative">
          {/* Conteneur pour le positionnement relatif des images */}
          <div className="relative w-full max-w-md aspect-video lg:aspect-auto lg:h-full">
            {/* Image 1 (maintenant en arrière-plan et légèrement remontée) */}
            <img
              src={imageUrl1}
              alt="Description image 1"
              className="absolute -top-8 left-0 w-[80%] h-auto rounded-lg shadow-xl transform transition-transform duration-300 z-10 border-4 border-white/20" // <<< Changement: top-0 -> -top-8 (ou autre valeur négative), z-index reste à 10
            />
            {/* Image 2 (reste au premier plan) */}
            <img
              src={imageUrl2}
              alt="Description image 2"
              className="absolute bottom-0 right-0 w-[80%] h-auto rounded-lg shadow-2xl transform transition-transform duration-300 z-20 border-4 border-white/20" // <<< Reste z-20 et bottom-0
            />
             {/* Vous pouvez ajouter une troisième image si nécessaire */}
             {/* <img src={imageUrl3} alt="Description image 3" className="absolute top-[10%] right-[5%] w-[50%] ... z-0" /> */}
          </div>
        </div>

        {/* Right Column (Text & Buttons) */}
        <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start px-4 md:px-8 lg:pl-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100 leading-tight text-center lg:text-left mb-6">
            Lorem <span className="text-indigo-200/80">ipsum dolor</span> sit amet consectetur
          </h1>
          <p className="text-lg text-white leading-relaxed mb-8 text-center lg:text-left opacity-90">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo labore obcaecati odio voluptatibus! In impedit rerum exercitationem qui voluptatum eum quaerat eaque. Quibusdam beatae corrupti voluptatum minus, est quo recusandae natus.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 w-full justify-center lg:justify-start">
            <button className="relative inline-flex items-center justify-center px-8 py-3 bg-white text-[#514be5] font-semibold rounded-lg shadow-lg overflow-hidden group transition duration-300 ease-in-out transform hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">Découvrir</span>
            </button>
            <button className="inline-flex items-center px-6 py-3 bg-transparent text-white font-semibold rounded-lg border border-white/40 hover:bg-white/15 hover:border-white/80 transition duration-300 group space-x-2">
              <span>Voir une démonstration</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}