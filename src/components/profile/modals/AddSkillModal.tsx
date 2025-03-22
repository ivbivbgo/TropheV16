import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SKILL_LEVELS, SKILL_CATEGORIES } from '../../../data/skills';

interface AddSkillModalProps {
  onClose: () => void;
  onAdd: (skill: any) => void;
}

export function AddSkillModal({ onClose, onAdd }: AddSkillModalProps) {
  const [skill, setSkill] = useState({
    name: '',
    level: 'Débutant',
    category: 'Technique'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(skill);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-lg m-4">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Ajouter une compétence</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom de la compétence
              </label>
              <input
                type="text"
                required
                value={skill.name}
                onChange={(e) => setSkill(prev => ({ ...prev, name: e.target.value }))}
                className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Ex: Leadership d'équipe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Niveau
              </label>
              <select
                value={skill.level}
                onChange={(e) => setSkill(prev => ({ ...prev, level: e.target.value }))}
                className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              >
                {SKILL_LEVELS.map(level => (
                  <option key={level.value} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <select
                value={skill.category}
                onChange={(e) => setSkill(prev => ({ ...prev, category: e.target.value }))}
                className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              >
                {SKILL_CATEGORIES.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}