import React from 'react';
import { X } from 'lucide-react';

interface NewsFilterPanelProps {
  filters: {
    institution: string;
    category: string;
    date: string;
    orderBy: string;
  };
  onFilterChange: (filters: any) => void;
  onClose: () => void;
  onReset: () => void;
}

export function NewsFilterPanel({ filters, onFilterChange, onClose, onReset }: NewsFilterPanelProps) {
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
        {/* Institution filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Institution
          </label>
          <select
            value={filters.institution}
            onChange={(e) => onFilterChange({ ...filters, institution: e.target.value })}
            className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">Toutes</option>
            <option value="google">Google</option>
            <option value="hec">HEC Paris</option>
            <option value="insep">INSEP</option>
            <option value="pole-emploi">Pôle Emploi</option>
            <option value="bnp">BNP Paribas</option>
            <option value="esj">ESJ</option>
            <option value="afdas">AFDAS</option>
          </select>
        </div>

        {/* Category filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Catégorie
          </label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
            className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">Toutes</option>
            <option value="tech">Tech</option>
            <option value="business">Business</option>
            <option value="formation">Formation</option>
            <option value="emploi">Emploi</option>
            <option value="media">Média</option>
            <option value="entrepreneuriat">Entrepreneuriat</option>
          </select>
        </div>

        {/* Date filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <select
            value={filters.date}
            onChange={(e) => onFilterChange({ ...filters, date: e.target.value })}
            className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="all">Toutes les dates</option>
            <option value="today">Aujourd'hui</option>
            <option value="week">Cette semaine</option>
            <option value="month">Ce mois</option>
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
            <option value="date">Date (Plus récent)</option>
            <option value="date-asc">Date (Plus ancien)</option>
            <option value="likes">Popularité</option>
            <option value="comments">Commentaires</option>
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