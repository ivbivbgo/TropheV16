import React from 'react';
import { Users, Search, MessageCircle, HelpingHand } from 'lucide-react';

export function NewApproach() {
  const features = [
    {
      icon: Users,
      title: "Un Espace d'Inclusion",
      description: "Nous créons l'espace idéal pour tous les athlètes. Une plateforme qui rassemble et valorise la diversité.",
      iconColor: "text-blue-500"
    },
    {
      icon: Search,
      title: "Un Espace de Recherche",
      description: "Plus qu'une plateforme, accédez à la reconversion avec des ressources adaptées.",
      iconColor: "text-purple-500"
    },
    {
      icon: MessageCircle,
      title: "Un Espace de Contact",
      description: "Se mettre en relation et partager. Un réseau unique pour avancer ensemble.",
      iconColor: "text-green-500"
    },
    {
      icon: HelpingHand,
      title: "Un Espace d'Entraide",
      description: "Une communauté qui se soutient pour une transition réussie.",
      iconColor: "text-orange-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" id="approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Notre Approche Trophenix
          </h2>
          <p className="text-lg text-gray-600">
            Proposer une approche exhaustive de la reconversion sportive en centralisant au sein d'une seule plateforme : les ressources, les experts et les outils dédiés à la transition sportive.
          </p>
        </div>

        {/* Platform Preview with matched background */}
        <div className="relative mb-32">
          <div className="max-w-4xl mx-auto">
            {/* Container for background and image - using same dimensions */}
            <div className="relative w-full">
              {/* Background gradient - exact same size as image */}
              <div 
                className="absolute w-full h-[500px] bg-gradient-to-br from-[#7C3AED]/5 to-[#6D28D9]/5 rounded-2xl transform rotate-3"
                style={{ top: '-1rem', left: '-1rem', right: '-1rem', bottom: '-1rem' }}
              ></div>
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop"
                  alt="Plateforme Trophenix"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-[#6D28D9]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-[#7C3AED]/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}