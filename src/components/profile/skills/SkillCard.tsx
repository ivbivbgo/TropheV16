import React from 'react';
import { Edit2 } from 'lucide-react';

interface SkillCardProps {
  skill: {
    name: string;
    level: string;
    category: string;
  };
  isEditing: boolean;
  onEdit: () => void;
}

export function SkillCard({ skill, isEditing, onEdit }: SkillCardProps) {
  const levelColors = {
    'Débutant': 'bg-blue-50 text-blue-600',
    'Intermédiaire': 'bg-green-50 text-green-600',
    'Avancé': 'bg-purple-50 text-purple-600',
    'Expert': 'bg-amber-50 text-amber-600'
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">{skill.name}</h4>
          <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
            levelColors[skill.level as keyof typeof levelColors] || 'bg-gray-50 text-gray-600'
          }`}>
            {skill.level}
          </span>
        </div>
        {isEditing && (
          <button
            onClick={onEdit}
            className="p-1.5 text-gray-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}