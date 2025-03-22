import React from 'react';
import { X } from 'lucide-react';

interface EditExperienceProps {
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
  onUpdate: (experience: any) => void;
  onDelete: () => void;
}

export function EditExperience({ experience, onUpdate, onDelete }: EditExperienceProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-gray-900">Expérience</h4>
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
          value={experience.title || ''}
          onChange={(e) => onUpdate({ ...experience, title: e.target.value })}
          placeholder="Titre"
          className="w-full rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500"
        />
        <input
          type="text"
          value={experience.organization || ''}
          onChange={(e) => onUpdate({ ...experience, organization: e.target.value })}
          placeholder="Organisation"
          className="w-full rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          value={experience.startDate || ''}
          onChange={(e) => onUpdate({ ...experience, startDate: e.target.value })}
          placeholder="Date de début"
          className="w-full rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500"
        />
        <input
          type="text"
          value={experience.endDate || ''}
          onChange={(e) => onUpdate({ ...experience, endDate: e.target.value })}
          placeholder="Date de fin"
          disabled={experience.current}
          className="w-full rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={experience.current || false}
          onChange={(e) => onUpdate({ ...experience, current: e.target.checked })}
          className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label className="text-sm text-gray-600">En cours</label>
      </div>

      <select
        value={experience.type || 'sport'}
        onChange={(e) => onUpdate({ ...experience, type: e.target.value })}
        className="w-full rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="sport">Sport</option>
        <option value="professional">Professionnel</option>
        <option value="education">Formation</option>
      </select>

      <textarea
        value={experience.description || ''}
        onChange={(e) => onUpdate({ ...experience, description: e.target.value })}
        placeholder="Description"
        rows={3}
        className="w-full rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );
}