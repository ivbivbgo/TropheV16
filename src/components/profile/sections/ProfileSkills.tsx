import React from 'react';
import { Users } from 'lucide-react';
import { ProfileData } from '../../../types/profile';

interface ProfileSkillsProps {
  profile: ProfileData;
  isEditing: boolean;
  onUpdate: (updates: Partial<ProfileData>) => void;
}

export function ProfileSkills({ profile, isEditing, onUpdate }: ProfileSkillsProps) {
  const addSkill = () => {
    const newSkill = {
      name: '',
      level: 'Débutant' as const,
      category: 'Technique' as const
    };
    
    onUpdate({
      skills: [...(profile.skills || []), newSkill]
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <Users className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Compétences</h3>
        </div>
        {isEditing && (
          <button
            onClick={addSkill}
            className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100"
          >
            Ajouter
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {profile.skills?.map((skill, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-xl">
            <h4 className="font-medium text-gray-900">{skill.name}</h4>
            <p className="text-sm text-gray-500">{skill.category}</p>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 rounded-full"
                style={{ 
                  width: skill.level === 'Expert' ? '100%' :
                         skill.level === 'Avancé' ? '75%' :
                         skill.level === 'Intermédiaire' ? '50%' :
                         '25%'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}