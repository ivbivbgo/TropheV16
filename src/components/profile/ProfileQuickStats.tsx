import React from 'react';
import { Trophy, Star, Award, Clock, Medal, Target } from 'lucide-react';
import { ProfileData } from '../../types/profile';

interface ProfileQuickStatsProps {
  profile: ProfileData;
}

export function ProfileQuickStats({ profile }: ProfileQuickStatsProps) {
  const stats = [
    {
      icon: Clock,
      value: profile.experience?.length || 0,
      label: "ans d'exp.",
      color: 'indigo',
      description: "Années d'expérience dans le sport"
    },
    {
      icon: Trophy,
      value: profile.achievements?.length || 0,
      label: "titres",
      color: 'amber',
      description: "Titres et récompenses"
    },
    {
      icon: Medal,
      value: profile.level === 'International' ? 'Int.' : 'Nat.',
      label: "niveau",
      color: 'emerald',
      description: "Niveau de compétition"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Basic Info Banner */}
      <div className="p-4 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border-b border-gray-100">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-600">
            <Target className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium">{profile.location || 'Localisation non renseignée'}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Trophy className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium">Club : {profile.currentClub || 'Non renseigné'}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Star className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium">Actuellement : {profile.currentCompany || 'Non renseigné'}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Award className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium">Recherche : {profile.recherche || 'Non renseigné'}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 divide-x divide-gray-100">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="p-4 text-center group hover:bg-gray-50 transition-colors duration-200 cursor-help"
            title={stat.description}
          >
            <div className={`w-10 h-10 mx-auto mb-2 bg-${stat.color}-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
              <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
            </div>
            <div className={`text-xl font-bold text-${stat.color}-600 mb-1`}>
              {stat.value}
            </div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}