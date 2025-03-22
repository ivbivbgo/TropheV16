import React, { useState } from 'react';
import { Star, Plus } from 'lucide-react';
import { SkillCard } from './skills/SkillCard';
import { AddSkillModal } from './modals/AddSkillModal';
import { EditSkill } from './EditSkill';

interface ProfileSkillsProps {
  skills: Array<{
    name: string;
    level: string;
    category: string;
  }>;
  isEditing: boolean;
  onUpdate: (skills: any[]) => void;
}

export function ProfileSkills({ skills = [], isEditing, onUpdate }: ProfileSkillsProps) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAdd = (newSkill: any) => {
    onUpdate([...skills, newSkill]);
    setShowAddModal(false);
  };

  const handleEdit = (index: number, updatedSkill: any) => {
    const newSkills = [...skills];
    newSkills[index] = updatedSkill;
    onUpdate(newSkills);
  };

  const handleDelete = (index: number) => {
    onUpdate(skills.filter((_, i) => i !== index));
  };

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'Autre';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <Star className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Compétences</h3>
        </div>
        {isEditing && (
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Ajouter</span>
          </button>
        )}
      </div>

      <div className="space-y-6">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              {category}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categorySkills.map((skill, index) => (
                <div key={index}>
                  {isEditing && editingIndex === index ? (
                    <EditSkill
                      skill={skill}
                      onUpdate={(updated) => {
                        handleEdit(index, updated);
                        setEditingIndex(null);
                      }}
                      onDelete={() => handleDelete(index)}
                    />
                  ) : (
                    <SkillCard
                      skill={skill}
                      isEditing={isEditing}
                      onEdit={() => setEditingIndex(index)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <AddSkillModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}