import React, { useState } from 'react';
import { Search, Filter, MapPin, Trophy, Briefcase, Mail, Building2, GraduationCap, Target, Users, Star, Calendar, Tag, Heart, MessageCircle, Share2, Plus, X } from 'lucide-react';
import { AthletesList } from '../explorer/AthletesList';
import { ExpertsList } from '../explorer/ExpertsList';
import { SponsorsList } from '../explorer/SponsorsList';
import { AgentsList } from '../explorer/AgentsList';
import { OrganismesList } from '../explorer/OrganismesList';
import { ClubsList } from '../explorer/ClubsList';
import { FilterPanel } from '../explorer/FilterPanel';
import { Dispositifs } from './Dispositifs';
import { Opportunities } from './Opportunities';
import { Formations } from './Formations';
import { Sponsoring } from './Sponsoring';
import { Collaboration } from './Collaboration';
import { Competitions } from './Competitions';
import { Events } from './Events';

interface MainMenuItem {
  id: string;
  label: string;
  subMenus: SubMenuItem[];
}

interface SubMenuItem {
  id: string;
  label: string;
}

interface LookerProps {
  onProfileClick?: (profile: any, type: 'athlete' | 'expert' | 'sponsor' | 'agent') => void;
}

const MAIN_MENU: MainMenuItem[] = [
  {
    id: 'carnet',
    label: 'Annuaire',
    subMenus: [
      { id: 'athletes', label: 'Sportifs' },
      { id: 'experts', label: 'Experts' },
      { id: 'sponsors', label: 'Sponsors' },
      { id: 'agents', label: 'Agents' },
      { id: 'clubs', label: 'Clubs/Fédérations' },
      { id: 'organismes', label: 'Établissements' }
    ]
  },
  {
    id: 'opportunite',
    label: 'Opportunités',
    subMenus: [
      { id: 'dispositifs', label: 'Dispositifs' },
      { id: 'formations', label: 'Formations' },
      { id: 'opportunites', label: 'Emplois' },
      { id: 'sponsoring', label: 'Sponsoring' },
      { id: 'collaborations', label: 'Collaborations' }
    ]
  },
  {
    id: 'agenda',
    label: 'Agenda',
    subMenus: [
      { id: 'competitions', label: 'Compétitions' },
      { id: 'evenements', label: 'Événements' }
    ]
  }
];

export function Looker({ onProfileClick }: LookerProps) {
  const [selectedMainMenu, setSelectedMainMenu] = useState<string>('carnet');
  const [selectedSubMenu, setSelectedSubMenu] = useState<string>('athletes');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    status: '',
    level: '',
    sport: '',
    specialty: '',
    organization: '',
    industry: '',
    budget: '',
    licenseType: '',
    experience: '',
    type: '',
    location: '',
    orderBy: 'recent'
  });

  const handleMainMenuClick = (menuId: string) => {
    setSelectedMainMenu(menuId);
    const menu = MAIN_MENU.find(m => m.id === menuId);
    if (menu && menu.subMenus.length > 0) {
      setSelectedSubMenu(menu.subMenus[0].id);
    }
  };

  const handleSubMenuClick = (menuId: string) => {
    setSelectedSubMenu(menuId);
  };

  const handleResetFilters = () => {
    setFilters({
      status: '',
      level: '',
      sport: '',
      specialty: '',
      organization: '',
      industry: '',
      budget: '',
      licenseType: '',
      experience: '',
      type: '',
      location: '',
      orderBy: 'recent'
    });
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const renderContent = () => {
    switch (selectedSubMenu) {
      case 'athletes':
        return <AthletesList />;
      case 'experts':
        return <ExpertsList />;
      case 'sponsors':
        return <SponsorsList />;
      case 'agents':
        return <AgentsList />;
      case 'clubs':
        return <ClubsList />;
      case 'organismes':
        return <OrganismesList />;
      case 'dispositifs':
        return <Dispositifs />;
      case 'opportunites':
        return <Opportunities />;
      case 'formations':
        return <Formations />;
      case 'sponsoring':
        return <Sponsoring />;
      case 'collaborations':
        return <Collaboration />;
      case 'competitions':
        return <Competitions />;
      case 'evenements':
        return <Events />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {selectedSubMenu}
              </h3>
              <p className="text-gray-600">
                Contenu pour la section {selectedSubMenu}
              </p>
            </div>
          </div>
        );
    }
  };

  const activeMainMenuItem = MAIN_MENU.find(menu => menu.id === selectedMainMenu);

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="sticky top-0 z-50">
        {/* Purple header */}
        <div className="bg-[#7C3AED]">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center pl-8 space-x-8">
              {MAIN_MENU.map((menu) => (
                <button
                  key={menu.id}
                  onClick={() => handleMainMenuClick(menu.id)}
                  className={`relative py-4 font-medium ${
                    selectedMainMenu === menu.id 
                      ? 'text-white font-bold'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {menu.label}
                </button>
              ))}
            </div>

            <div className="relative pr-4">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
                className="w-64 pl-4 pr-10 h-9 rounded-lg bg-white text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-white/20"
              />
              <Search className="absolute right-7 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* White submenu */}
        <div className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between pl-8 pr-4">
            <div className="flex items-center space-x-2">
              {activeMainMenuItem?.subMenus.map((subMenu) => (
                <button
                  key={subMenu.id}
                  onClick={() => handleSubMenuClick(subMenu.id)}
                  className={`py-3 px-3 border-b-2 transition-colors ${
                    selectedSubMenu === subMenu.id
                      ? 'text-[#7C3AED] font-semibold border-[#7C3AED]'
                      : 'text-gray-500 font-normal border-transparent hover:text-[#7C3AED] hover:border-[#7C3AED]'
                  }`}
                >
                  {subMenu.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-2 text-[#7C3AED] rounded-lg transition-colors flex items-center space-x-2 hover:bg-indigo-50`}
            >
              <Filter className="w-5 h-5" />
              <span className="text-sm font-medium">Filtres</span>
            </button>
          </div>
        </div>

        {/* Filter Panel Overlay */}
        {showFilters && (
          <div className="absolute inset-x-0 bg-white shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <FilterPanel
                filters={filters}
                onFilterChange={setFilters}
                onClose={() => setShowFilters(false)}
                onReset={handleResetFilters}
                selectedSubMenu={selectedSubMenu}
              />
            </div>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <img 
          src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1200&auto=format&fit=crop"
          alt="Explorer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <h2 className="text-4xl font-bold text-white mb-2">Explorer les Carrières</h2>
          <p className="text-xl text-white">Trouvez votre voie parmi les multiples opportunités professionnelles</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8 bg-gray-50">
        <div className="relative">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}