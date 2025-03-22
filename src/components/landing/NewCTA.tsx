import React from 'react';
import { ArrowRight, Sparkles, Shield, Target } from 'lucide-react';

interface NewCTAProps {
  onGetStarted: () => void;
}

export function NewCTA({ onGetStarted }: NewCTAProps) {
  const benefits = [
    {
      icon: Sparkles,
      text: "Accès à des ressources exclusives"
    },
    {
      icon: Shield,
      text: "Accompagnement personnalisé"
    },
    {
      icon: Target,
      text: "Objectifs sur mesure"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/5 to-[#6D28D9]/5 rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5"></div>
            
            <div className="relative px-8 py-16 md:px-16 md:py-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Text content */}
                <div className="text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Découvrez la plateforme dès aujourd'hui
                  </h2>
                  <p className="text-xl text-white/90 mb-8">
                    Rejoignez une communauté d'athlètes et d'experts dédiés à votre réussite professionnelle
                  </p>

                  <div className="flex flex-col gap-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <div 
                        key={index}
                        className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl"
                      >
                        <benefit.icon className="w-5 h-5 text-white mr-3" />
                        <span className="text-white">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onGetStarted}
                    className="group inline-flex items-center bg-white text-[#7C3AED] px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Créer votre compte
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Right side - Image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl transform rotate-3"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop"
                      alt="Platform Preview"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}