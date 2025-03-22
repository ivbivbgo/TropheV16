import React, { useState } from 'react';
import { Search, Filter, LayoutGrid, List } from 'lucide-react';
import { Resource } from '../../types/resources';
import { INITIAL_RESOURCES } from '../../data/resources';
import { ResourceCard } from '../resources/ResourceCard';
import { ResourceDetail } from '../resources/ResourceDetail';
import { FilterPanel } from '../resources/FilterPanel';

export function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    sportType: 'all',
    funding: 'all',
    orderBy: 'none'
  });
  const [resources] = useState(INITIAL_RESOURCES);

  const applyFilters = (resources: Resource[]) => {
    let filtered = [...resources];

    if (filters.funding !== 'all') {
      filtered = filtered.filter(resource => {
        const fundingPercentage = parseInt(resource.funding);
        switch (filters.funding) {
          case '100':
            return fundingPercentage === 100;
          case '80-99':
            return fundingPercentage >= 80 && fundingPercentage < 100;
          case '<80':
            return fundingPercentage < 80;
          default:
            return true;
        }
      });
    }

    if (filters.sportType !== 'all') {
      filtered = filtered.filter(resource => 
        resource.eligibility.toLowerCase().includes(filters.sportType.toLowerCase())
      );
    }

    if (filters.orderBy === 'institution') {
      filtered.sort((a, b) => a.organization.localeCompare(b.organization));
    }

    return filtered;
  };

  const filteredResources = applyFilters(
    resources.filter(resource =>
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.organization.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleResetFilters = () => {
    setFilters({
      sportType: 'all',
      funding: 'all',
      orderBy: 'none'
    });
  };

  if (selectedResource) {
    return (
      <ResourceDetail
        resource={selectedResource}
        onBack={() => setSelectedResource(null)}
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="sticky top-[64px] bg-gray-50 z-50 -mx-4 px-4 shadow-sm">
        <div className="flex items-center justify-between space-x-4 py-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Rechercher un dispositif..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded-lg shadow-sm p-1 flex">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-indigo-50 text-indigo-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                title="Vue grille"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-indigo-50 text-indigo-600' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
                title="Vue liste"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-2 ${showFilters ? 'bg-indigo-700' : 'bg-indigo-600'} text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2`}
              >
                <Filter className="w-5 h-5" />
                {showFilters && <span>Filtres actifs</span>}
              </button>

              {showFilters && (
                <FilterPanel
                  filters={filters}
                  onFilterChange={setFilters}
                  onClose={() => setShowFilters(false)}
                  onReset={handleResetFilters}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`grid gap-6 pt-4 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2' 
          : 'grid-cols-1'
      }`}>
        {filteredResources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            onClick={() => setSelectedResource(resource)}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
}