import React from 'react';
import { ProfileData } from '../../../types/profile';
import { ProfileStats } from '../ProfileStats';
import { ProfileExperience } from '../ProfileExperience';
import { ProfileSkills } from '../ProfileSkills';
import { ProfileEducation } from '../ProfileEducation';
import { ProfileAchievements } from '../ProfileAchievements';
import { Edit2, Check } from 'lucide-react';

interface ProfileOverviewProps {
  profile: ProfileData;
  isEditing: boolean;
  onUpdate: (updates: Partial<ProfileData>) => void;
  onEditToggle: () => void;
}

export function ProfileOverview({ profile, isEditing, onUpdate, onEditToggle }: ProfileOverviewProps) {
  return (
    <div className="space-y-8">
      {/* Edit Button */}
      <div className="flex justify-end">
        <button
          onClick={onEditToggle}
          className={`px-6 py-2 rounded-xl flex items-center space-x-2 transition-colors ${
            isEditing
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {isEditing ? (
            <>
              <Check className="w-5 h-5" />
              <span>Sauvegarder</span>
            </>
          ) : (
            <>
              <Edit2 className="w-5 h-5" />
              <span>Modifier</span>
            </>
          )}
        </button>
      </div>

      {/* Bio */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">À propos</h3>
        {isEditing ? (
          <textarea
            value={profile.bio}
            onChange={(e) => onUpdate({ bio: e.target.value })}
            className="w-full rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            rows={4}
            placeholder="Parlez-nous de vous..."
          />
        ) : (
          <p className="text-gray-600 whitespace-pre-line">{profile.bio || 'Aucune biographie renseignée'}</p>
        )}
      </div>

      {/* Stats */}
      <ProfileStats profile={profile} />

      {/* Experience */}
      <ProfileExperience
        experience={profile.experience}
        isEditing={isEditing}
        onUpdate={(experience) => onUpdate({ experience })}
      />

      {/* Skills */}
      <ProfileSkills
        skills={profile.skills}
        isEditing={isEditing}
        onUpdate={(skills) => onUpdate({ skills })}
      />

      {/* Education */}
      <ProfileEducation
        education={profile.education}
        isEditing={isEditing}
        onUpdate={(education) => onUpdate({ education })}
      />

      {/* Achievements */}
      <ProfileAchievements
        achievements={profile.achievements}
        isEditing={isEditing}
        onUpdate={(achievements) => onUpdate({ achievements })}
      />
    </div>
  );
}