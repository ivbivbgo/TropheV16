import React from 'react';
import { GraduationCap } from 'lucide-react';
import { ProfileData } from '../../../types/profile';

interface ProfileEducationProps {
  profile: ProfileData;
  isEditing: boolean;
  onUpdate: (updates: Partial<ProfileData>) => void;
}

export function ProfileEducation({ profile, isEditing, onUpdate }: ProfileEducationProps) {
  const addEducation = () => {
    const newEducation = {
      degree: '',
      institution: '',
      field: '',
      startYear: '',
      current: true
    };
    
    onUpdate({
      education: [...(profile.education || []), newEducation]
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Formation</h3>
        </div>
        {isEditing && (
          <button
            onClick={addEducation}
            className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100"
          >
            Ajouter
          </button>
        )}
      </div>

      <div className="space-y-6">
        {profile.education?.map((edu, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4 ml-4">
            <div className="relative">
              <div className="absolute -left-[1.35rem] top-1.5 w-3 h-3 bg-indigo-600 rounded-full" />
              <h4 className="font-medium text-gray-900">{edu.degree}</h4>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">
                {edu.startYear} - {edu.current ? 'Présent' : edu.endYear}
              </p>
              {edu.description && (
                <p className="mt-2 text-gray-600">{edu.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}