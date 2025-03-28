import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo_small.png';

interface NewNavProps {
  onLogin?: () => void;
}

export function NewNav({ onLogin }: NewNavProps) {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200">
      <div className="mx-6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img 
              src={Logo} 
              alt="Trophenix Logo" 
              className="w-6 mr-1"
            />
            {/* <div className="text-xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-transparent bg-clip-text"> */}
            <div className="text-xl font-bold text-gray-900">
              Trophenix
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center px-4 py-2 text-sm font-semibold bg-transparent text-gray-900 rounded-lg transition-colors"
            >
              <span>Connexion</span>
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center px-4 py-2 text-sm font-semibold bg-[#514be5] text-white rounded-lg hover:bg-[#403bd1] transition-colors"
            >
              <span>Je me lance !</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}