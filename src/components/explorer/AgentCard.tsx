import React, { useState } from 'react';
import { MapPin, Globe, Users, Star, MessageCircle, Award, CornerUpRight } from 'lucide-react';
import { Agent } from '../../types/agents';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleShare = () => {
    // Implement share functionality
    alert('Partage du profil');
  };

  console.log("Avatar URL:", agent.avatar);
  console.log("Banner URL:", agent.banner);


  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200">
      <div className="relative h-48">
        <img
          src={agent.banner}
          alt={agent.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center space-x-3">
            <img
              src={agent.avatar}
              alt={agent.name}
              className="w-16 h-16 rounded-full border-2 border-white object-cover"
            />
            <div className="text-white">
              <h3 className="text-lg font-semibold">{agent.name}</h3>
              <p className="text-sm text-white/90">{agent.agency}</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-1.5 rounded-full bg-black/20 backdrop-blur-sm transition-colors ${
                isFavorite 
                  ? 'text-yellow-500 hover:text-yellow-600' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              <Star className="w-4 h-4" fill={isFavorite ? "currentColor" : "none"} />
            </button>
            <button 
              onClick={handleShare}
              className="p-1.5 rounded-full bg-black/20 backdrop-blur-sm text-white hover:text-white/80 transition-colors"
            >
              <CornerUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
            {agent.specialization}
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
            {agent.experience}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
            <span className="text-gray-600">{agent.location}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-2 text-purple-500" />
            <span className="text-gray-600">{agent.clients}</span>
          </div>
          <div className="flex items-center">
            <Globe className="w-4 h-4 mr-2 text-green-500" />
            <span className="text-gray-600">{agent.languages.join(', ')}</span>
          </div>
          <div className="flex items-center">
            <Award className="w-4 h-4 mr-2 text-amber-500" />
            <span className="text-gray-600">Licence agent {agent.licenseType.toLowerCase()}</span>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button className="w-[90%] px-6 py-2.5 bg-[#514be5] text-white rounded-lg hover:bg-[#4540cc] transition-colors flex items-center justify-center space-x-2">
            <MessageCircle className="w-5 h-5" />
            <span>Contacter</span>
          </button>
        </div>
      </div>
    </div>
  );
}