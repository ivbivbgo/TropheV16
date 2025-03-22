import React from 'react';
import { Users, MessageCircle, Star } from 'lucide-react';

interface Expert {
  id: number;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  specialties: string[];
  available: boolean;
}

export function ExpertsSection() {
  const experts: Expert[] = [
    {
      id: 1,
      name: "Dr. Philippe Martin",
      title: "Expert en Reconversion Sportive",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
      rating: 4.8,
      specialties: ["Reconversion", "Coaching Mental", "Orientation"],
      available: true
    },
    {
      id: 2,
      name: "Marie Laurent",
      title: "Coach Carrière",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
      rating: 4.9,
      specialties: ["Développement Professionnel", "Bilan de Compétences"],
      available: true
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Users className="w-6 h-6 text-indigo-600" />
        <h3 className="text-lg font-semibold text-gray-900">Mes Experts</h3>
      </div>

      <div className="space-y-6">
        {experts.map((expert) => (
          <div 
            key={expert.id}
            className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div className="relative">
              <img
                src={expert.avatar}
                alt={expert.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              {expert.available && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">{expert.name}</h4>
                  <p className="text-sm text-gray-500">{expert.title}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{expert.rating}</span>
                </div>
              </div>
              
              <div className="mt-2 flex flex-wrap gap-2">
                {expert.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <button className="p-2 text-gray-400 hover:text-indigo-600">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}