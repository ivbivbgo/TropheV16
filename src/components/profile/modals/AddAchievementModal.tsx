import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddAchievementModalProps {
  onClose: () => void;
  onAdd: (achievement: any) => void;
}

export function AddAchievementModal({ onClose, onAdd }: AddAchievementModalProps) {
  const [achievement, setAchievement] = useState({
    title: '',
    date: '',
    description: '',
    type: 'competition'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(achievement);
  };

  return (
    <div className="modal-container">
      <div className="modal-content max-w-md w-full">
        <div className="modal-header">
          <h2 className="text-xl font-semibold text-gray-900">Ajouter une réalisation</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="modal-body">
          <div className="space-y-4">
            <div>
              <label className="form-label">Titre</label>
              <input
                type="text"
                required
                value={achievement.title}
                onChange={(e) => setAchievement(prev => ({ ...prev, title: e.target.value }))}
                className="form-input"
                placeholder="Ex: Champion de France"
              />
            </div>

            <div>
              <label className="form-label">Date</label>
              <input
                type="text"
                required
                value={achievement.date}
                onChange={(e) => setAchievement(prev => ({ ...prev, date: e.target.value }))}
                className="form-input"
                placeholder="YYYY"
              />
            </div>

            <div>
              <label className="form-label">Type</label>
              <select
                value={achievement.type}
                onChange={(e) => setAchievement(prev => ({ ...prev, type: e.target.value }))}
                className="form-input"
              >
                <option value="competition">Compétition</option>
                <option value="award">Récompense</option>
                <option value="record">Record</option>
              </select>
            </div>

            <div>
              <label className="form-label">Description</label>
              <textarea
                value={achievement.description}
                onChange={(e) => setAchievement(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                className="form-input"
                placeholder="Décrivez votre réalisation..."
              />
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}