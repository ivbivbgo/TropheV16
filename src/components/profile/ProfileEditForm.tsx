import React from 'react';
import { Mail, MapPin, Trophy, GraduationCap, Activity } from 'lucide-react';
import { ProfileData } from '../../types/profile';
import { STATUSES } from '../../data/statuses';

interface ProfileEditFormProps {
  profile: ProfileData;
  onUpdate: (updates: Partial<ProfileData>) => void;
}

export function ProfileEditForm({ profile, onUpdate }: ProfileEditFormProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations principales</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Mail className="w-4 h-4 mr-2 text-gray-400" />
            Email
          </label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
            Ville
          </label>
          <input
            type="text"
            value={profile.location}
            onChange={(e) => onUpdate({ location: e.target.value })}
            className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Sport */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Trophy className="w-4 h-4 mr-2 text-gray-400" />
            Sport
          </label>
          <input
            type="text"
            value={profile.sport}
            onChange={(e) => onUpdate({ sport: e.target.value })}
            className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Current School/Company */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <GraduationCap className="w-4 h-4 mr-2 text-gray-400" />
            École / Entreprise actuelle
          </label>
          <input
            type="text"
            value={profile.currentCompany}
            onChange={(e) => onUpdate({ currentCompany: e.target.value })}
            className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        {/* Status */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Activity className="w-4 h-4 mr-2 text-gray-400" />
            Statut
          </label>
          <select
            value={profile.status}
            onChange={(e) => onUpdate({ status: e.target.value as any })}
            className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          >
            {STATUSES.map(status => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-indigo-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-indigo-600">
            {profile.experience?.length || 0} ans
          </div>
          <div className="text-sm text-gray-600">Expérience</div>
        </div>
        <div className="bg-purple-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">
            {profile.achievements?.length || 0}
          </div>
          <div className="text-sm text-gray-600">Titres</div>
        </div>
        <div className="bg-pink-50 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-pink-600">
            {profile.skills?.length || 0}
          </div>
          <div className="text-sm text-gray-600">Compétences</div>
        </div>
      </div>
    </div>
  );
}