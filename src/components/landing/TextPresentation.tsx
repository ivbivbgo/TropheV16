export function TextPresentation() {
  return (
    <div className="w-full">
      <div id="presentation" className="w-full h-20 mt-8"></div>
      <section 
        className="relative mb-12 sm:mb-20 md:mb-28 w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] bg-gradient-to-br from-[#7C3AED] to-violet-700 p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.325) 1px, transparent 1px)', backgroundSize: '5px 5px' }}></div>
 
        <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10 py-8 md:py-12">

          <div className="w-full lg:w-6/12 flex flex-col justify-center items-center lg:items-start px-2 sm:px-4 md:px-8 mb-8 lg:mb-0 lg:pr-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-100 text-center lg:text-left">
              Lorem{' '}
              <span className="text-purple-200/80">ipsum dolor</span> sit amet consectetur
            </h1>
            <div className="mt-4 h-1 w-24 bg-white/30 rounded-full hidden lg:block"></div>
          </div>

          <div className="w-full lg:w-6/12 flex flex-col items-center lg:items-start px-2 sm:px-4 md:px-8 lg:pl-10">
            <p className="text-base sm:text-lg text-white leading-relaxed lg:leading-relaxed mb-6 sm:mb-8 text-center lg:text-left opacity-90 max-w-2xl lg:max-w-none">
            Trophénix est la première plateforme dédiée à la mise en relation entre sportifs en reconversion et structures engagées. Entreprises, clubs, fédérations, centres de formation ou encore écoles. Notre solution permet de créer des ponts concrets entre le monde du sport et celui de l’emploi, de la formation et de l’engagement sociétal.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 w-full sm:w-auto justify-center lg:justify-start">
              <button className="w-full max-w-xs sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-white/80 text-[#7C3AED] font-semibold rounded-lg transition duration-300">
                Découvrir
              </button>
              <button className="w-full max-w-xs sm:w-auto flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-[#7C3AED] font-semibold rounded-lg hover:bg-white/80 transition duration-300">
                <span>Voir une démonstration</span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </button>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}