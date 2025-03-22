import React from 'react';
import { Trophy, Star, Award, Clock } from 'lucide-react';
import { ProfileData } from '../../types/profile';
import { StatCard } from './stats/StatCard';

interface ProfileStatsProps {
  profile: ProfileData;
}

export function ProfileStats({ profile }: ProfileStatsProps) {
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
      icon: Star,
      value: profile.skills?.length || 0,
      label: "compétences",
      color: 'emerald',
      description: "Compétences acquises"
    },
    {
      icon: Award,
      value: profile.level === 'International' ? 'Int.' : 'Nat.',
      label: "niveau",
      color: 'purple',
      description: "Niveau de compétition"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}