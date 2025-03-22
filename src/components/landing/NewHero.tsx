import React from 'react';
import { NewNav } from './NewNav';
import { ArrowRight } from 'lucide-react';

interface NewHeroProps {
  onLogin?: () => void;
}

export function NewHero({ onLogin }: NewHeroProps) {
  return (
    <div className="relative min-h-[85vh] bg-gradient-to-b from-white to-gray-50/50">
      <NewNav onLogin={onLogin} />
      <div className="relative pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-indigo-50 text-indigo-600 rounded-full">
              L'espace pour
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-10 leading-tight">
              Gérez votre carrière et
              <span className="block bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-transparent bg-clip-text">
                reconversion sportive
              </span>
            </h1>
            <div className="relative inline-block mb-16">
              <p className="text-xl sm:text-2xl text-gray-600 font-light tracking-wide">
                Briller durant et après le sport
              </p>
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7C3AED]/0 via-[#7C3AED]/30 to-[#7C3AED]/0"></div>
            </div>

            <div className="flex items-center max-w-lg mx-auto bg-white rounded-xl shadow-xl p-2">
              <button className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white rounded-xl font-medium hover:from-[#FF5252] hover:to-[#FF7043] transition-all hover:-translate-y-0.5 flex items-center space-x-2">
                <span>Lancez-vous</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <input
                type="email"
                placeholder="Entrez votre email"
                className="flex-1 px-4 py-2 text-gray-600 placeholder-gray-400 bg-transparent border-none focus:outline-none focus:ring-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}