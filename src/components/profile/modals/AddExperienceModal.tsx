import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddExperienceModalProps {
  onClose: () => void;
  onAdd: (experience: any) => void;
}

export function AddExperienceModal({ onClose, onAdd }: AddExperienceModalProps) {
  const [experience, setExperience] = useState({
    title: '',
    organization: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
    type: 'sport'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(experience);
  };

  return (
    <div className="modal-container">
      <div className="modal-content max-w-md w-full">
        <div className="modal-header">
          <h2 className="text-xl font-semibold text-gray-900">Ajouter une expérience</h2>
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
                value={experience.title}
                onChange={(e) => setExperience(prev => ({ ...prev, title: e.target.value }))}
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Organisation</label>
              <input
                type="text"
                required
                value={experience.organization}
                onChange={(e) => setExperience(prev => ({ ...prev, organization: e.target.value }))}
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Localisation</label>
              <input
                type="text"
                value={experience.location}
                onChange={(e) => setExperience(prev => ({ ...prev, location: e.target.value }))}
                className="form-input"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="form-label">Date de début</label>
                <input
                  type="text"
                  required
                  value={experience.startDate}
                  onChange={(e) => setExperience(prev => ({ ...prev, startDate: e.target.value }))}
                  className="form-input"
                  placeholder="MM/YYYY"
                />
              </div>

              <div>
                <label className="form-label">Date de fin</label>
                <input
                  type="text"
                  value={experience.endDate}
                  onChange={(e) => setExperience(prev => ({ ...prev, endDate: e.target.value }))}
                  className="form-input"
                  placeholder="MM/YYYY"
                  disabled={experience.current}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={experience.current}
                onChange={(e) => setExperience(prev => ({ ...prev, current: e.target.checked }))}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label className="text-sm text-gray-600">En cours</label>
            </div>

            <div>
              <label className="form-label">Type</label>
              <select
                value={experience.type}
                onChange={(e) => setExperience(prev => ({ ...prev, type: e.target.value }))}
                className="form-input"
              >
                <option value="sport">Sport</option>
                <option value="professional">Professionnel</option>
                <option value="education">Formation</option>
              </select>
            </div>

            <div>
              <label className="form-label">Description</label>
              <textarea
                value={experience.description}
                onChange={(e) => setExperience(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                className="form-input"
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