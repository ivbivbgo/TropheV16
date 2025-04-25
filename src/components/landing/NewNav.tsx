import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from '../../assets/logo_small.png';

interface NewNavProps {
  onLogin?: () => void;
}

export function NewNav({ onLogin }: NewNavProps) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      navigate('/#' + id);
    }
    
    // Close mobile menu after clicking a link
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
      <div className="mx-6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Partie gauche - Logo */}
          <div className="lg:w-64 flex-shrink-0 flex items-center space-x-2">
            <img 
              src={Logo} 
              alt="Trophenix Logo" 
              className="w-6 mr-1"
            />
            <div className="text-xl font-bold text-gray-900">
              Trophenix
            </div>
          </div>
          
          {/* Partie centrale - Boutons d'ancrage - version large */}
          <div className="flex-1 hidden lg:flex items-center justify-center space-x-12">
            <button
              onClick={() => scrollToSection('presentation')}
              className="text-sm font-medium text-gray-700 hover:text-[#514be5] transition-colors"
            >
              Présentation
            </button>
            <button
              onClick={() => scrollToSection('profils')}
              className="text-sm font-medium text-gray-700 hover:text-[#514be5] transition-colors"
            >
              Profils utilisateurs
            </button>
            <button
              onClick={() => scrollToSection('fonctionnalites')}
              className="text-sm font-medium text-gray-700 hover:text-[#514be5] transition-colors"
            >
              Fonctionnalités
            </button>
          </div>
          
          {/* Version tablette - Boutons d'ancrage condensés */}
          <div className="hidden md:flex lg:hidden flex-1 items-center justify-center space-x-6">
            <button
              onClick={() => scrollToSection('presentation')}
              className="text-sm font-medium text-gray-700 hover:text-[#514be5] transition-colors"
            >
              Présentation
            </button>
            <button
              onClick={() => scrollToSection('profils')}
              className="text-sm font-medium text-gray-700 hover:text-[#514be5] transition-colors"
            >
              Profils
            </button>
            <button
              onClick={() => scrollToSection('fonctionnalites')}
              className="text-sm font-medium text-gray-700 hover:text-[#514be5] transition-colors"
            >
              Fonctionnalités
            </button>
          </div>
          
          {/* Partie droite - Boutons de connexion et d'inscription */}
          <div className="lg:w-64 hidden md:flex items-center justify-end space-x-2 lg:space-x-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center px-3 py-2 lg:px-4 lg:py-2 text-sm font-semibold bg-transparent text-gray-900 rounded-lg transition-colors"
            >
              <span>Connexion</span>
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center px-3 py-2 lg:px-4 lg:py-2 text-sm font-semibold border border-emerald-500 bg-emerald-500/10 text-emerald-500 rounded-lg hover:bg-emerald-500/20 transition-colors"
            >
              <span className="whitespace-nowrap">Je me lance !</span>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#514be5] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <button
              onClick={() => scrollToSection('presentation')}
              className="block w-full text-center py-2 text-sm font-medium text-gray-700 hover:text-[#514be5] transition-colors"
            >
              Présentation
            </button>
            <button
              onClick={() => scrollToSection('profils')}
              className="block w-full text-center py-2 text-sm font-medium text-gray-700 hover:text-[#514be5] transition-colors"
            >
              Profils utilisateurs
            </button>
            <button
              onClick={() => scrollToSection('fonctionnalites')}
              className="block w-full text-center py-2 text-sm font-medium text-gray-700 hover:text-[#514be5] transition-colors"
            >
              Fonctionnalités
            </button>
            
            {/* Login and SignUp Buttons - Mobile */}
            <div className="pt-4 flex flex-col items-center space-y-2">
              <button
                onClick={() => {
                  navigate('/dashboard');
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-center px-4 py-2 text-sm font-semibold bg-transparent text-gray-900 rounded-lg transition-colors w-full max-w-xs"
              >
                <span>Connexion</span>
              </button>
              <button
                onClick={() => {
                  navigate('/dashboard');
                  setIsMenuOpen(false);
                }}
                className="flex items-center justify-center px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white rounded-lg hover:bg-[#403bd1] transition-colors w-full max-w-xs"
              >
                <span>Je me lance !</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}