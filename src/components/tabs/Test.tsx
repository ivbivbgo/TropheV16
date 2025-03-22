import React, { useState } from 'react';
import { Search, Filter, MapPin, Trophy, Briefcase, Mail, Building2, GraduationCap, Target, Users, Star, Calendar, Tag, Heart, MessageCircle, Share2, Plus, X } from 'lucide-react';

interface MainMenuItem {
  id: string;
  label: string;
  subMenus: SubMenuItem[];
}

interface SubMenuItem {
  id: string;
  label: string;
}

interface Profile {
  id: number;
  name: string;
  avatar: string;
  banner: string;
  location: string;
}

interface Athlete extends Profile {
  sport: string;
  status: string;
  currentClub: string;
  currentCompany: string;
  level: string;
  recherche: string;
}

interface Expert extends Profile {
  specialty: string;
  experience: string;
  certification: string;
  peopleHelped: string;
}

interface Sponsor extends Profile {
  company: string;
  industry: string;
  partnerships: string;
  budget: string;
}

interface Agent extends Profile {
  agency: string;
  clients: string;
  specialization: string;
  experience: string;
}

interface TestProps {
  onProfileClick?: (profile: any, type: 'athlete' | 'expert' | 'sponsor' | 'agent') => void;
}

const MAIN_MENU: MainMenuItem[] = [
  {
    id: 'carnet',
    label: 'Carnet',
    subMenus: [
      { id: 'athletes', label: 'Sportifs' },
      { id: 'experts', label: 'Experts' },
      { id: 'sponsors', label: 'Sponsors' },
      { id: 'agents', label: 'Agents' },
      { id: 'organismes', label: 'Organismes' }
    ]
  },
  {
    id: 'ok',
    label: 'OK',
    subMenus: [
      { id: 'dispositifs', label: 'Dispositifs' },
      { id: 'opportunites', label: 'Opportunités' }
    ]
  },
  {
    id: 'activites',
    label: 'Activités',
    subMenus: [
      { id: 'competitions', label: 'Compétitions' },
      { id: 'evenements', label: 'Événements' }
    ]
  }
];

export function Test({ onProfileClick }: TestProps) {
  // États pour la navigation persistante
  const [selectedMainMenu, setSelectedMainMenu] = useState<string>('carnet');
  const [selectedSubMenu, setSelectedSubMenu] = useState<string>('athletes');
  
  // État pour la recherche
  const [searchQuery, setSearchQuery] = useState('');

  // Gestionnaire de clic sur le menu principal
  const handleMainMenuClick = (menuId: string) => {
    setSelectedMainMenu(menuId);
    const menu = MAIN_MENU.find(m => m.id === menuId);
    if (menu && menu.subMenus.length > 0) {
      setSelectedSubMenu(menu.subMenus[0].id);
    }
  };

  // Gestionnaire de clic sur le sous-menu
  const handleSubMenuClick = (menuId: string) => {
    setSelectedSubMenu(menuId);
  };

  const activeMainMenuItem = MAIN_MENU.find(menu => menu.id === selectedMainMenu);

  return (
    <div className="-mt-4 -mx-4">
      <div className="sticky top-0 z-40 bg-[#7C3AED]">
        <div className="flex items-center justify-between h-14 px-8">
          <div className="flex items-center -ml-4">
            {MAIN_MENU.map((menu) => (
              <button
                key={menu.id}
                onClick={() => handleMainMenuClick(menu.id)}
                className={`relative px-4 py-4 font-medium ${
                  selectedMainMenu === menu.id 
                    ? 'text-white font-bold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {menu.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 pl-4 pr-10 h-9 rounded-lg bg-white text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-white/20"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Sous-menu horizontal */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-8 flex items-center space-x-6">
            {activeMainMenuItem?.subMenus.map((subMenu) => (
              <button
                key={subMenu.id}
                onClick={() => handleSubMenuClick(subMenu.id)}
                className={`py-3 font-medium border-b-2 transition-colors ${
                  selectedSubMenu === subMenu.id
                    ? 'text-[#7C3AED] border-[#7C3AED]'
                    : 'text-gray-600 border-transparent hover:text-[#7C3AED] hover:border-[#7C3AED]'
                }`}
              >
                {subMenu.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[300px] w-full">
        <img 
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&auto=format&fit=crop"
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
      </div>
    </div>
  );
}