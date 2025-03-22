import React from 'react';
import { X } from 'lucide-react';

interface FilterPanelProps {
  filters: {
    sportType: string;
    funding: string;
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
        {/* Type of sportifs */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type de sportifs
          </label>
          <select
            value={filters.sportType}
            onChange={(e) => onFilterChange({ ...filters, sportType: e.target.value })}
            className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">Tous</option>
            <option value="hn">Sportifs HN</option>
            <option value="reconvertis">Sportifs Reconvertis</option>
            <option value="tous">Tous les sportifs</option>
          </select>
        </div>

        {/* Funding rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Taux de financement
          </label>
          <select
            value={filters.funding}
            onChange={(e) => onFilterChange({ ...filters, funding: e.target.value })}
            className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">Tous</option>
            <option value="100">100% financé</option>
            <option value="80-99">80-99% financé</option>
            <option value="<80">Moins de 80% financé</option>
          </select>
        </div>

        {/* Order by */}
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
            <option value="institution">Nom de l'institution (A-Z)</option>
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