import React from 'react';
import { Edit2, Check, Share2 } from 'lucide-react';

interface ProfileActionsProps {
  isEditing: boolean;
  onEditToggle: () => void;
  onShare?: () => void;
}

export function ProfileActions({ isEditing, onEditToggle, onShare }: ProfileActionsProps) {
  return (
    <div className="flex space-x-4">
      <button
        onClick={onEditToggle}
        className={`flex-1 px-6 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 ${
          isEditing
            ? 'bg-green-600 hover:bg-green-700 text-white'
            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
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

      {onShare && (
        <button
          onClick={onShare}
          className="px-4 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center"
        >
          <Share2 className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}