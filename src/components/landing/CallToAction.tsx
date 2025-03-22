import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onGetStarted: () => void;
}

export function CallToAction({ onGetStarted }: CallToActionProps) {
  return (
    <div className="py-24 bg-gradient-to-r from-indigo-600 to-violet-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white">
            Prêt à commencer votre nouvelle carrière ?
          </h2>
          <p className="text-xl text-white/90">
            Rejoignez Trophenix et transformez votre expérience sportive en succès professionnel
          </p>
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 flex items-center mx-auto group"
          >
            Commencer maintenant
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}