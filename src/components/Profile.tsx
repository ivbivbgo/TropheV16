import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ProfileBasicInfo } from './profile/ProfileBasicInfo';
import { ProfileStats } from './profile/ProfileStats';
import { ProfileExperience } from './profile/ProfileExperience';
import { ProfileEducation } from './profile/ProfileEducation';
import { ProfileSkills } from './profile/ProfileSkills';

interface ProfileProps {
  onBack: () => void;
}

const DEFAULT_PROFILE = {
  name: "Thomas Martin",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
  banner: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
  location: "Paris",
  sport: "Football",
  status: "En activité",
  currentClub: "PSG",
  currentCompany: "En formation",
  level: "National",
  recherche: "Stage en management sportif",
  experience: [],
  education: [],
  skills: []
};

export function Profile({ onBack }: ProfileProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="relative h-64">
        <img 
          src={DEFAULT_PROFILE.banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 z-20 flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-300 text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour</span>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-20">
        <div className="relative mb-6">
          <img
            src={DEFAULT_PROFILE.avatar}
            alt={DEFAULT_PROFILE.name}
            className="w-32 h-32 rounded-xl border-4 border-white shadow-xl"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <ProfileBasicInfo profile={DEFAULT_PROFILE} isEditing={false} />
            <ProfileStats profile={DEFAULT_PROFILE} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <ProfileExperience experience={DEFAULT_PROFILE.experience} isEditing={false} onUpdate={() => {}} />
            <ProfileEducation education={DEFAULT_PROFILE.education} isEditing={false} onUpdate={() => {}} />
            <ProfileSkills skills={DEFAULT_PROFILE.skills} isEditing={false} onUpdate={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}