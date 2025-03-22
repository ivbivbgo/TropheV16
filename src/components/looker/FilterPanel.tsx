import React from 'react';
import { X } from 'lucide-react';

interface FilterPanelProps {
  filters: {
    status: string;
    level: string;
    location: string;
    orderBy: string;
  };
  onFilterChange: (filters: any) => void;
  onClose: () => void;
  onReset: () => void;
}

export function FilterPanel({ filters, onFilterChange, onClose, onReset }: FilterPanelProps) {
  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900">Filtres</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Status filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Statut
          </label>
          <select
            value={filters.status}
            onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
            className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">Tous</option>
            <option value="En activité">En activité</option>
            <option value="En reconversion">En reconversion</option>
            <option value="En Blessure">En blessure</option>
            <option value="En Réflexion">En réflexion</option>
          </select>
        </div>

        {/* Level filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Niveau
          </label>
          <select
            value={filters.level}
            onChange={(e) => onFilterChange({ ...filters, level: e.target.value })}
            className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">Tous</option>
            <option value="National">National</option>
            <option value="International">International</option>
          </select>
        </div>

        {/* Location filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Localisation
          </label>
          <select
            value={filters.location}
            onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
            className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">Toutes</option>
            <option value="Paris">Paris</option>
            <option value="Lyon">Lyon</option>
            <option value="Marseille">Marseille</option>
            <option value="Toulouse">Toulouse</option>
            <option value="Bordeaux">Bordeaux</option>
            <option value="Nice">Nice</option>
            <option value="Nantes">Nantes</option>
            <option value="Strasbourg">Strasbourg</option>
            <option value="Montpellier">Montpellier</option>
          </select>
        </div>

        {/* Sort by */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Trier par
          </label>
          <select
            value={filters.orderBy}
            onChange={(e) => onFilterChange({ ...filters, orderBy: e.target.value })}
            className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="none">Par défaut</option>
            <option value="name">Nom (A-Z)</option>
            <option value="location">Localisation</option>
            <option value="level">Niveau</option>
          </select>
        </div>

        {/* Reset filters */}
        <button
          onClick={onReset}
          className="w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-900 flex items-center justify-center space-x-2"
        >
          <span>Réinitialiser les filtres</span>
        </button>
      </div>
    </div>
  );
}