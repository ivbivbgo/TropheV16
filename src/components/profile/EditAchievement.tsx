import React from 'react';
import { X } from 'lucide-react';

interface EditAchievementProps {
  achievement: {
    title: string;
    date: string;
    description: string;
    type: 'competition' | 'award' | 'record';
  };
  onUpdate: (achievement: any) => void;
  onDelete: () => void;
}

export function EditAchievement({ achievement, onUpdate, onDelete }: EditAchievementProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-gray-900">Réalisation</h4>
        <button
          onClick={onDelete}
          className="text-gray-400 hover:text-red-500"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <input
        type="text"
        value={achievement.title}
        onChange={(e) => onUpdate({ ...achievement, title: e.target.value })}
        placeholder="Titre"
        className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          value={achievement.date}
          onChange={(e) => onUpdate({ ...achievement, date: e.target.value })}
          placeholder="Date"
          className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
        />

        <select
          value={achievement.type}
          onChange={(e) => onUpdate({ ...achievement, type: e.target.value })}
          className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="competition">Compétition</option>
          <option value="award">Récompense</option>
          <option value="record">Record</option>
        </select>
      </div>

      <textarea
        value={achievement.description}
        onChange={(e) => onUpdate({ ...achievement, description: e.target.value })}
        placeholder="Description"
        rows={3}
        className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );
}