import React from 'react';
import { Edit2 } from 'lucide-react';

interface EducationCardProps {
  education: {
    degree: string;
    institution: string;
    field: string;
    startYear: string;
    endYear?: string;
    current: boolean;
    description?: string;
  };
  isEditing: boolean;
  onEdit: () => void;
}

export function EducationCard({ education, isEditing, onEdit }: EducationCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">{education.degree}</h4>
          <p className="text-gray-600">{education.institution}</p>
          <p className="text-sm text-gray-500">{education.field}</p>
          <p className="text-sm text-gray-500">
            {education.startYear} - {education.current ? 'Présent' : education.endYear}
          </p>
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
      {education.description && (
        <p className="mt-4 text-gray-600 whitespace-pre-line">{education.description}</p>
      )}
    </div>
  );
}