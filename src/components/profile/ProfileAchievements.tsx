import React, { useState } from 'react';
import { Trophy, Plus } from 'lucide-react';
import { AchievementCard } from './achievements/AchievementCard';
import { AddAchievementModal } from './modals/AddAchievementModal';
import { EditAchievement } from './EditAchievement';

interface ProfileAchievementsProps {
  achievements: Array<{
    title: string;
    date: string;
    description: string;
    type: 'competition' | 'award' | 'record';
  }>;
  isEditing: boolean;
  onUpdate: (achievements: any[]) => void;
}

export function ProfileAchievements({ achievements = [], isEditing, onUpdate }: ProfileAchievementsProps) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAdd = (newAchievement: any) => {
    onUpdate([...achievements, newAchievement]);
    setShowAddModal(false);
  };

  const handleEdit = (index: number, updatedAchievement: any) => {
    const newAchievements = [...achievements];
    newAchievements[index] = updatedAchievement;
    onUpdate(newAchievements);
  };

  const handleDelete = (index: number) => {
    onUpdate(achievements.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <Trophy className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Réalisations</h3>
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
        {achievements.map((achievement, index) => (
          <div key={index}>
            {isEditing && editingIndex === index ? (
              <EditAchievement
                achievement={achievement}
                onUpdate={(updated) => {
                  handleEdit(index, updated);
                  setEditingIndex(null);
                }}
                onDelete={() => handleDelete(index)}
              />
            ) : (
              <AchievementCard
                achievement={achievement}
                isEditing={isEditing}
                onEdit={() => setEditingIndex(index)}
              />
            )}
          </div>
        ))}
      </div>

      {showAddModal && (
        <AddAchievementModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}