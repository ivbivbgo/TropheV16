import React, { useState } from 'react';
import { Search, MapPin, Trophy, Briefcase, Users, Star, Calendar, Tag, Heart, MessageCircle, Share2, Plus, X } from 'lucide-react';

interface MainMenuItem {
  id: string;
  label: string;
  subMenus: SubMenuItem[];
}

interface SubMenuItem {
  id: string;
  label: string;
}

interface Story {
  id: number;
  athlete: string;
  avatar: string;
  sport: string;
  currentRole: string;
  company: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
  tags: Array<{ name: string; color: string; }>;
}

const STORIES: Story[] = [
  {
    id: 1,
    athlete: "Marie Laurent",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    sport: "Gymnastique",
    currentRole: "Directrice Performance",
    company: "INSEP",
    content: "Après 12 ans en gymnastique de haut niveau, j'ai réussi ma transition vers la direction de la performance. Mon expérience d'athlète m'aide chaque jour à comprendre et accompagner les sportifs dans leur parcours.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop",
    likes: 245,
    comments: 56,
    shares: 34,
    tags: [
      { name: "Performance", color: "bg-blue-100 text-blue-800" },
      { name: "Management", color: "bg-purple-100 text-purple-800" }
    ]
  },
  {
    id: 2,
    athlete: "Thomas Bernard",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    sport: "Rugby",
    currentRole: "Entrepreneur",
    company: "SportTech Solutions",
    content: "La discipline et la persévérance acquises sur le terrain m'ont été précieuses dans mon parcours entrepreneurial. Aujourd'hui, je développe des solutions technologiques pour améliorer la performance sportive.",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&auto=format&fit=crop",
    likes: 189,
    comments: 43,
    shares: 27,
    tags: [
      { name: "Tech", color: "bg-green-100 text-green-800" },
      { name: "Innovation", color: "bg-indigo-100 text-indigo-800" }
    ]
  }
];

const MAIN_MENU: MainMenuItem[] = [
  {
    id: 'parcours',
    label: 'Parcours',
    subMenus: [
      { id: 'temoignages', label: 'Témoignages' },
      { id: 'success', label: 'Success Stories' },
      { id: 'conseils', label: 'Conseils' }
    ]
  },
  {
    id: 'formations',
    label: 'Formations',
    subMenus: [
      { id: 'universitaire', label: 'Universitaire' },
      { id: 'professionnelle', label: 'Professionnelle' },
      { id: 'certifications', label: 'Certifications' }
    ]
  },
  {
    id: 'opportunites',
    label: 'Opportunités',
    subMenus: [
      { id: 'emplois', label: 'Emplois' },
      { id: 'stages', label: 'Stages' },
      { id: 'entrepreneuriat', label: 'Entrepreneuriat' }
    ]
  },
  {
    id: 'accompagnement',
    label: 'Accompagnement',
    subMenus: [
      { id: 'mentors', label: 'Mentors' },
      { id: 'experts', label: 'Experts' },
      { id: 'coaching', label: 'Coaching' }
    ]
  }
];

export function Reconversion() {
  const [selectedMainMenu, setSelectedMainMenu] = useState<string>('parcours');
  const [selectedSubMenu, setSelectedSubMenu] = useState<string>('temoignages');
  const [searchQuery, setSearchQuery] = useState('');

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

      <div className="relative h-[300px] w-full">
        <img 
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&auto=format&fit=crop"
          alt="Reconversion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <h2 className="text-4xl font-bold text-white mb-2">Réussir votre reconversion</h2>
          <p className="text-xl text-white">Découvrez les parcours inspirants et les opportunités qui s'offrent à vous</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {STORIES.map((story) => (
            <article 
              key={story.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={story.avatar}
                    alt={story.athlete}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.athlete}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Trophy className="w-4 h-4" />
                      <span>{story.sport}</span>
                      <span className="text-gray-300">•</span>
                      <Briefcase className="w-4 h-4" />
                      <span>{story.currentRole} - {story.company}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{story.content}</p>

                <div className="relative h-48 -mx-6 mb-4">
                  <img
                    src={story.image}
                    alt="Story illustration"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-6 text-gray-500">
                  <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{story.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{story.comments} commentaires</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span>{story.shares}</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}