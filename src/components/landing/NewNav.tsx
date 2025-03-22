import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NewNavProps {
  onLogin?: () => void;
}

export function NewNav({ onLogin }: NewNavProps) {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-transparent bg-clip-text">
            Trophenix
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center space-x-2 px-6 py-2.5 bg-[#7C3AED] text-white rounded-xl hover:bg-[#6D28D9] transition-colors shadow-lg shadow-[#7C3AED]/25 hover:-translate-y-0.5"
            >
              <span>Accéder à la plateforme</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}