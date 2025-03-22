import React from 'react';
import { MapPin, Trophy, Building2, GraduationCap, Activity } from 'lucide-react';
import { ProfileData } from '../../types/profile';

interface ProfileBasicInfoProps {
  profile: ProfileData;
  isEditing: boolean;
  onUpdate?: (updates: Partial<ProfileData>) => void;
}

export function ProfileBasicInfo({ profile, isEditing, onUpdate }: ProfileBasicInfoProps) {
  const info = [
    {
      icon: MapPin,
      label: 'Localisation',
      value: profile.location,
      field: 'location'
    },
    {
      icon: Trophy,
      label: 'Club',
      value: profile.currentClub,
      field: 'currentClub'
    },
    {
      icon: Building2,
      label: 'Actuellement',
      value: profile.currentCompany,
      field: 'currentCompany'
    },
    {
      icon: GraduationCap,
      label: 'Recherche',
      value: profile.recherche,
      field: 'recherche'
    },
    {
      icon: Activity,
      label: 'Statut',
      value: profile.status,
      field: 'status'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Informations principales</h3>
      
      <div className="space-y-4">
        {info.map((item) => (
          <div key={item.field} className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-500">{item.label}</p>
              {isEditing ? (
                <input
                  type="text"
                  value={item.value || ''}
                  onChange={(e) => onUpdate?.({ [item.field]: e.target.value })}
                  className="mt-1 w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                />
              ) : (
                <p className="text-base text-gray-900 truncate">{item.value || '-'}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}