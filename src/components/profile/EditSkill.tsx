import React from 'react';
import { X } from 'lucide-react';
import { SKILL_LEVELS, SKILL_CATEGORIES } from '../../data/skills';

interface EditSkillProps {
  skill: any;
  onUpdate: (skill: any) => void;
  onDelete: () => void;
}

export function EditSkill({ skill, onUpdate, onDelete }: EditSkillProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-gray-900">Compétence</h4>
        <button
          onClick={onDelete}
          className="text-gray-400 hover:text-red-500"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <input
        type="text"
        value={skill.name}
        onChange={(e) => onUpdate({ ...skill, name: e.target.value })}
        placeholder="Nom de la compétence"
        className="w-full rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500"
      />

      <div className="grid grid-cols-2 gap-4">
        <select
          value={skill.level}
          onChange={(e) => onUpdate({ ...skill, level: e.target.value })}
          className="w-full rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500"
        >
          {SKILL_LEVELS.map(level => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>

        <select
          value={skill.category}
          onChange={(e) => onUpdate({ ...skill, category: e.target.value })}
          className="w-full rounded-xl border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500"
        >
          {SKILL_CATEGORIES.map(category => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}