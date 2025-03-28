import { NewNav } from './NewNav';
import Logo from '../../assets/logo_small.png';

interface NewHeroProps {
  onLogin?: () => void;
}

export function NewHero({ onLogin }: NewHeroProps) {
  return (
    <div className="relative min-h-[65vh]">
      <NewNav onLogin={onLogin} />
      <div className="relative pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-12 bg-emerald-50 border border-emerald-600 text-emerald-600 text-base font-semibold px-3 py-1 rounded-md flex items-center gap-1 mx-auto w-fit">
              <span className=''>🎉 Nouvautés: Introduction de la page dashboard !</span>
            </div>
            
            {/* <div className="flex justify-center items-center mb-8">
              <img 
                src={Logo} 
                alt="Trophenix Logo" 
                className="w-8 mr-4"
              />
              <div className="text-3xl font-bold text-gray-900">Trophenix</div>
            </div> */}
            
            <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
              Briller durant et <span className="text-[#7C3AED]">après le sport</span>
            </h1>
            
            <div className="mb-12 relative inline-block">
              <p className="text-xl sm:text-2xl text-gray-500 font-sm tracking-wide">
                Gérez votre carrière et votre reconversion sportive
              </p>
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C3AED]/0 via-[#7C3AED]/30 to-[#7C3AED]/0"></div>
            </div>

            <div className="flex justify-center items-center mx-auto text-gray-900">
              <button
                className="flex items-center px-6 py-2.5 text-md font-semibold bg-[#514be5] text-white rounded-lg hover:bg-[#403bd1] transition-colors"
              >
                <span>Lancez-vous dans l'aventure Trophenix</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
