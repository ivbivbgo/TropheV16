import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddEducationModalProps {
  onClose: () => void;
  onAdd: (education: any) => void;
}

export function AddEducationModal({ onClose, onAdd }: AddEducationModalProps) {
  const [education, setEducation] = useState({
    degree: '',
    institution: '',
    field: '',
    startYear: '',
    endYear: '',
    current: false,
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(education);
  };

  return (
    <div className="modal-container">
      <div className="modal-content max-w-md w-full">
        <div className="modal-header">
          <h2 className="text-xl font-semibold text-gray-900">Ajouter une formation</h2>
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
              <label className="form-label">Diplôme</label>
              <input
                type="text"
                required
                value={education.degree}
                onChange={(e) => setEducation(prev => ({ ...prev, degree: e.target.value }))}
                className="form-input"
                placeholder="Ex: Master Management du Sport"
              />
            </div>

            <div>
              <label className="form-label">Institution</label>
              <input
                type="text"
                required
                value={education.institution}
                onChange={(e) => setEducation(prev => ({ ...prev, institution: e.target.value }))}
                className="form-input"
                placeholder="Ex: HEC Paris"
              />
            </div>

            <div>
              <label className="form-label">Domaine</label>
              <input
                type="text"
                value={education.field}
                onChange={(e) => setEducation(prev => ({ ...prev, field: e.target.value }))}
                className="form-input"
                placeholder="Ex: Management Sportif"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="form-label">Année de début</label>
                <input
                  type="text"
                  required
                  value={education.startYear}
                  onChange={(e) => setEducation(prev => ({ ...prev, startYear: e.target.value }))}
                  className="form-input"
                  placeholder="YYYY"
                />
              </div>

              <div>
                <label className="form-label">Année de fin</label>
                <input
                  type="text"
                  value={education.endYear}
                  onChange={(e) => setEducation(prev => ({ ...prev, endYear: e.target.value }))}
                  className="form-input"
                  placeholder="YYYY"
                  disabled={education.current}
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={education.current}
                onChange={(e) => setEducation(prev => ({ ...prev, current: e.target.checked }))}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label className="text-sm text-gray-600">En cours</label>
            </div>

            <div>
              <label className="form-label">Description</label>
              <textarea
                value={education.description}
                onChange={(e) => setEducation(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                className="form-input"
                placeholder="Description optionnelle..."
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