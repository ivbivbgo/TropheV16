import React, { useState } from 'react';
import { Briefcase, Plus } from 'lucide-react';
import { ExperienceCard } from './experience/ExperienceCard';
import { AddExperienceModal } from './modals/AddExperienceModal';
import { EditExperience } from './EditExperience';

interface ProfileExperienceProps {
  experience: any[];
  isEditing: boolean;
  onUpdate: (experience: any[]) => void;
}

export function ProfileExperience({ experience = [], isEditing, onUpdate }: ProfileExperienceProps) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAdd = (newExperience: any) => {
    onUpdate([...experience, newExperience]);
    setShowAddModal(false);
  };

  const handleEdit = (index: number, updatedExperience: any) => {
    const newExperience = [...experience];
    newExperience[index] = updatedExperience;
    onUpdate(newExperience);
  };

  const handleDelete = (index: number) => {
    onUpdate(experience.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Expérience</h3>
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

      <div className="space-y-4">
        {experience.map((exp, index) => (
          <div key={index}>
            {isEditing && editingIndex === index ? (
              <EditExperience
                experience={exp}
                onUpdate={(updated) => {
                  handleEdit(index, updated);
                  setEditingIndex(null);
                }}
                onDelete={() => handleDelete(index)}
              />
            ) : (
              <ExperienceCard
                experience={exp}
                isEditing={isEditing}
                onEdit={() => setEditingIndex(index)}
              />
            )}
          </div>
        ))}
      </div>

      {showAddModal && (
        <AddExperienceModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}