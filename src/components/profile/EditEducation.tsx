import React from 'react';
import { X } from 'lucide-react';

interface EditEducationProps {
  education: {
    degree: string;
    institution: string;
    field: string;
    startYear: string;
    endYear?: string;
    current: boolean;
    description?: string;
  };
  onUpdate: (education: any) => void;
  onDelete: () => void;
}

export function EditEducation({ education, onUpdate, onDelete }: EditEducationProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-gray-900">Formation</h4>
        <button
          onClick={onDelete}
          className="text-gray-400 hover:text-red-500"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          value={education.degree}
          onChange={(e) => onUpdate({ ...education, degree: e.target.value })}
          placeholder="Diplôme"
          className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
        />
        <input
          type="text"
          value={education.institution}
          onChange={(e) => onUpdate({ ...education, institution: e.target.value })}
          placeholder="Institution"
          className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <input
        type="text"
        value={education.field}
        onChange={(e) => onUpdate({ ...education, field: e.target.value })}
        placeholder="Domaine d'études"
        className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          value={education.startYear}
          onChange={(e) => onUpdate({ ...education, startYear: e.target.value })}
          placeholder="Année de début"
          className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
        />
        <input
          type="text"
          value={education.endYear}
          onChange={(e) => onUpdate({ ...education, endYear: e.target.value })}
          placeholder="Année de fin"
          disabled={education.current}
          className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={education.current}
          onChange={(e) => onUpdate({ ...education, current: e.target.checked })}
          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label className="text-sm text-gray-600">En cours</label>
      </div>

      <textarea
        value={education.description || ''}
        onChange={(e) => onUpdate({ ...education, description: e.target.value })}
        placeholder="Description (optionnel)"
        rows={3}
        className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );
}