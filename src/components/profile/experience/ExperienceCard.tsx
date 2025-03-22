import React from 'react';
import { Edit2 } from 'lucide-react';

interface ExperienceCardProps {
  experience: {
    title: string;
    organization: string;
    location: string;
    startDate: string;
    endDate?: string;
    current: boolean;
    description: string;
    type: 'sport' | 'professional' | 'education';
  };
  isEditing: boolean;
  onEdit: () => void;
}

export function ExperienceCard({ experience, isEditing, onEdit }: ExperienceCardProps) {
  const typeColors = {
    sport: 'bg-blue-50 text-blue-600',
    professional: 'bg-green-50 text-green-600',
    education: 'bg-purple-50 text-purple-600'
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <h4 className="font-semibold text-gray-900">{experience.title}</h4>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[experience.type]}`}>
              {experience.type}
            </span>
          </div>
          <p className="text-gray-600">{experience.organization}</p>
          <p className="text-sm text-gray-500">
            {experience.startDate} - {experience.current ? 'Présent' : experience.endDate}
          </p>
          <p className="text-sm text-gray-500">{experience.location}</p>
        </div>
        {isEditing && (
          <button
            onClick={onEdit}
            className="p-2 text-gray-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Edit2 className="w-5 h-5" />
          </button>
        )}
      </div>
      {experience.description && (
        <p className="mt-4 text-gray-600 whitespace-pre-line">{experience.description}</p>
      )}
    </div>
  );
}