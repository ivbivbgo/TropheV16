import React from 'react';
import { X } from 'lucide-react';
import { LANGUAGE_LEVELS, LANGUAGES } from '../../data/languages';

interface EditLanguageProps {
  language: any;
  onUpdate: (language: any) => void;
  onDelete: () => void;
}

export function EditLanguage({ language, onUpdate, onDelete }: EditLanguageProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-gray-900">Langue</h4>
        <button
          onClick={onDelete}
          className="text-gray-400 hover:text-red-500"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <select
          value={language.name}
          onChange={(e) => onUpdate({ ...language, name: e.target.value })}
          className="w-full rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500"
        >
          {LANGUAGES.map(lang => (
            <option key={lang.code} value={lang.name}>
              {lang.name}
            </option>
          ))}
        </select>

        <select
          value={language.level}
          onChange={(e) => onUpdate({ ...language, level: e.target.value })}
          className="w-full rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500"
        >
          {LANGUAGE_LEVELS.map(level => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}