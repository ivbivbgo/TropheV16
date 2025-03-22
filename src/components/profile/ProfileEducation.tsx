import React, { useState } from 'react';
import { GraduationCap, Plus } from 'lucide-react';
import { EducationCard } from './education/EducationCard';
import { AddEducationModal } from './modals/AddEducationModal';
import { EditEducation } from './EditEducation';

interface ProfileEducationProps {
  education: Array<{
    degree: string;
    institution: string;
    field: string;
    startYear: string;
    endYear?: string;
    current: boolean;
    description?: string;
  }>;
  isEditing: boolean;
  onUpdate: (education: any[]) => void;
}

export function ProfileEducation({ education = [], isEditing, onUpdate }: ProfileEducationProps) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAdd = (newEducation: any) => {
    onUpdate([...education, newEducation]);
    setShowAddModal(false);
  };

  const handleEdit = (index: number, updatedEducation: any) => {
    const newEducation = [...education];
    newEducation[index] = updatedEducation;
    onUpdate(newEducation);
  };

  const handleDelete = (index: number) => {
    onUpdate(education.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Formation</h3>
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
        {education.map((edu, index) => (
          <div key={index}>
            {isEditing && editingIndex === index ? (
              <EditEducation
                education={edu}
                onUpdate={(updated) => {
                  handleEdit(index, updated);
                  setEditingIndex(null);
                }}
                onDelete={() => handleDelete(index)}
              />
            ) : (
              <EducationCard
                education={edu}
                isEditing={isEditing}
                onEdit={() => setEditingIndex(index)}
              />
            )}
          </div>
        ))}
      </div>

      {showAddModal && (
        <AddEducationModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}