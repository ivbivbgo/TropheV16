import React from 'react';
import { MapPin, Trophy, Briefcase, Mail, Phone, Calendar } from 'lucide-react';
import { ProfileData } from '../../types/profile';

interface ProfileInfoProps {
  profile: ProfileData;
}

export function ProfileInfo({ profile }: ProfileInfoProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{profile.name}</h1>
        <div className="flex flex-col items-center space-y-2 text-gray-600">
          {profile.sport && (
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-indigo-500" />
              <span>{profile.sport}</span>
            </div>
          )}
          {profile.location && (
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-indigo-500" />
              <span>{profile.location}</span>
            </div>
          )}
          {profile.currentClub && (
            <div className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4 text-indigo-500" />
              <span>{profile.currentClub}</span>
            </div>
          )}
        </div>
      </div>

      {profile.bio && (
        <div className="text-gray-600 text-sm">
          <p className="leading-relaxed">{profile.bio}</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-indigo-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-indigo-600">
            {profile.experience?.length || 0}
          </div>
          <div className="text-xs text-gray-600">Expériences</div>
        </div>
        <div className="bg-purple-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">
            {profile.skills?.length || 0}
          </div>
          <div className="text-xs text-gray-600">Compétences</div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-100 space-y-3">
        {profile.email && (
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Mail className="w-4 h-4 text-gray-400" />
            <span>{profile.email}</span>
          </div>
        )}
        {profile.phone && (
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Phone className="w-4 h-4 text-gray-400" />
            <span>{profile.phone}</span>
          </div>
        )}
        {profile.birthDate && (
          <div className="flex items-center space-x-3 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>{profile.birthDate}</span>
          </div>
        )}
      </div>
    </div>
  );
}