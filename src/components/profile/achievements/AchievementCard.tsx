import React from 'react';
import { Edit2 } from 'lucide-react';

interface AchievementCardProps {
  achievement: {
    title: string;
    date: string;
    description: string;
    type: 'competition' | 'award' | 'record';
  };
  isEditing: boolean;
  onEdit: () => void;
}

export function AchievementCard({ achievement, isEditing, onEdit }: AchievementCardProps) {
  const typeColors = {
    competition: 'bg-blue-50 text-blue-600',
    award: 'bg-amber-50 text-amber-600',
    record: 'bg-green-50 text-green-600'
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[achievement.type]}`}>
              {achievement.type}
            </span>
          </div>
          <p className="text-sm text-gray-500">{achievement.date}</p>
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
      {achievement.description && (
        <p className="mt-4 text-gray-600 whitespace-pre-line">{achievement.description}</p>
      )}
    </div>
  );
}