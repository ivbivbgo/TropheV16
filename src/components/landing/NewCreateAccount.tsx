import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface NewCreateAccountProps {
  onGetStarted: () => void;
}

export function NewCreateAccount({ onGetStarted }: NewCreateAccountProps) {
  const benefits = [
    "Accès à des ressources exclusives",
    "Accompagnement personnalisé", 
    "Réseau d'experts dédié",
    "Opportunités ciblées"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Créez votre espace dès aujourd'hui
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Rejoignez une communauté d'athlètes et d'experts dédiés à votre réussite professionnelle.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#7C3AED]" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onGetStarted}
              className="group inline-flex items-center bg-[#7C3AED] text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl hover:shadow-[#7C3AED]/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              Commencer maintenant
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            {/* Background gradient shape */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-[#6D28D9]/5 rounded-3xl transform rotate-3"></div>
            
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop"
                alt="Collaboration"
                className="relative rounded-2xl shadow-xl h-[600px] w-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#7C3AED]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#6D28D9]/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}