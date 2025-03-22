import React from 'react';
import { ProfileData } from '../../../types/profile';

interface ProfileBioProps {
  profile: ProfileData;
  isEditing: boolean;
  onUpdate: (updates: Partial<ProfileData>) => void;
}

export function ProfileBio({ profile, isEditing, onUpdate }: ProfileBioProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">À propos</h3>
      {isEditing ? (
        <textarea
          value={profile.bio}
          onChange={(e) => onUpdate({ bio: e.target.value })}
          className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          rows={4}
          placeholder="Parlez de vous..."
        />
      ) : (
        <p className="text-gray-600 whitespace-pre-line">
          {profile.bio || 'Aucune biographie renseignée'}
        </p>
      )}
    </div>
  );
}