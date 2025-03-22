import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface FilterPanelProps {
  filters: any;
  onFilterChange: (filters: any) => void;
  onClose: () => void;
  onReset: () => void;
  selectedSubMenu: string;
}

const SPORTS_LIST = [
  "Football",
  "Basketball",
  "Tennis",
  "Rugby",
  "Athlétisme",
  "Natation",
  "Judo",
  "Gymnastique",
  "Cyclisme",
  "Volleyball",
  "Handball",
  "Boxe",
  "Escrime",
  "Golf",
  "Hockey",
  "Karaté",
  "Taekwondo",
  "Triathlon",
  "Aviron",
  "Badminton"
];

export function FilterPanel({ filters, onFilterChange, onClose, onReset, selectedSubMenu }: FilterPanelProps) {
  const [sportQuery, setSportQuery] = useState(filters.sport || '');
  const [showSportsList, setShowSportsList] = useState(false);
  const sportInputRef = useRef<HTMLInputElement>(null);

  const filteredSports = SPORTS_LIST.filter(sport =>
    sport.toLowerCase().includes(sportQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sportInputRef.current && !sportInputRef.current.contains(event.target as Node)) {
        setShowSportsList(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSportSelect = (sport: string) => {
    setSportQuery(sport);
    onFilterChange({ ...filters, sport });
    setShowSportsList(false);
  };

  const SportsFilter = () => (
    <div className="relative" ref={sportInputRef}>
      <input
        type="text"
        value={sportQuery}
        onChange={(e) => {
          setSportQuery(e.target.value);
          setShowSportsList(true);
          onFilterChange({ ...filters, sport: e.target.value });
        }}
        onFocus={() => setShowSportsList(true)}
        placeholder="Rechercher un sport..."
        className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
      />
      {showSportsList && filteredSports.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredSports.map((sport, index) => (
            <button
              key={index}
              onClick={() => handleSportSelect(sport)}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
            >
              {sport}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const DateRangeFilter = () => (
    <div className="grid grid-cols-2 gap-4">
      <input
        type="date"
        value={filters.startDate || ''}
        onChange={(e) => onFilterChange({ ...filters, startDate: e.target.value })}
        className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
        min="2024-01-01"
        max="2026-12-31"
        placeholder="Date de début"
      />
      <input
        type="date"
        value={filters.endDate || ''}
        onChange={(e) => onFilterChange({ ...filters, endDate: e.target.value })}
        className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
        min={filters.startDate || '2024-01-01'}
        max="2026-12-31"
        placeholder="Date de fin"
      />
    </div>
  );

  const getFilterOptions = () => {
    switch (selectedSubMenu) {
      case 'competitions':
      case 'evenements':
        return (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <SportsFilter />
            <div className="md:col-span-2">
              <DateRangeFilter />
            </div>
            <select
              value={filters.level}
              onChange={(e) => onFilterChange({ ...filters, level: e.target.value })}
              className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Sélectionner un niveau</option>
              <option value="National">National</option>
              <option value="International">International</option>
            </select>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {getFilterOptions()}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          value={filters.location}
          onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
          className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Rechercher une ville..."
          list="locations-list"
        />
        <datalist id="locations-list">
          <option value="Paris" />
          <option value="Lyon" />
          <option value="Marseille" />
          <option value="Toulouse" />
          <option value="Bordeaux" />
          <option value="Nice" />
          <option value="Nantes" />
          <option value="Strasbourg" />
        </datalist>
        <select
          value={filters.orderBy}
          onChange={(e) => onFilterChange({ ...filters, orderBy: e.target.value })}
          className="w-full rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Trier par...</option>
          <option value="recent">Plus récent</option>
          <option value="name">Nom (A-Z)</option>
          <option value="location">Localisation</option>
        </select>
        <div className="md:col-span-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-8 py-2 bg-[#7C3AED] text-white rounded-lg hover:bg-[#6D28D9] transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}