import React, { useState } from 'react';
import { User } from 'firebase/auth';
import { Home, Search, MessageCircle, Settings, Menu, HelpCircle, UserCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const mainNavigation = [
  { id: 'news', label: "Feed", icon: Home },
  { id: 'looker', label: "Explorer", icon: Search },
  { id: 'help', label: "Entraide", icon: HelpCircle },
  { id: 'messages', label: "Messagerie", icon: MessageCircle },
  { id: 'profile-b', label: "Profil B", icon: UserCircle }
];

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onProfileClick: () => void;
  user: User;
}

export function Layout({ children, activeTab, onTabChange, onProfileClick, user }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { signOut } = useAuth();

  const handleTabClick = async (tab: string) => {
    onTabChange(tab);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Sidebar */}
      <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-56 bg-white border-r border-gray-100 z-50">
        <nav className="flex-1 p-3">
          {/* Trophenix Title */}
          <div className="px-3 pt-2 pb-6">
            <button 
              onClick={handleLogoClick}
              className="text-xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-transparent bg-clip-text"
            >
              Trophenix
            </button>
          </div>

          <div className="space-y-1">
            {mainNavigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-[#7C3AED]/5 text-[#7C3AED] font-bold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Bottom navigation */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <div className="border-t border-gray-100 pt-2">
              <button
                onClick={() => handleTabClick('suggestion')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                  activeTab === 'suggestion'
                    ? 'bg-[#7C3AED]/5 text-[#7C3AED] font-bold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <HelpCircle className="w-5 h-5" />
                <span>Suggestion/Aide</span>
              </button>
              <button
                onClick={() => handleTabClick('settings')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                  activeTab === 'settings'
                    ? 'bg-[#7C3AED]/5 text-[#7C3AED] font-bold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Paramètres</span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md text-gray-600 hover:text-indigo-600"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40">
          <div className="absolute left-0 top-0 bottom-0 w-56 bg-white">
            <div className="flex flex-col h-full p-3">
              {/* Trophenix Title for Mobile */}
              <div className="px-3 pt-2 pb-6">
                <button 
                  onClick={handleLogoClick}
                  className="text-xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-transparent bg-clip-text"
                >
                  Trophenix
                </button>
              </div>

              <div className="flex-1">
                <div className="space-y-1">
                  {mainNavigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleTabClick(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-[#7C3AED]/5 text-[#7C3AED] font-bold'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom navigation for mobile */}
              <div className="border-t border-gray-100 pt-2">
                <button
                  onClick={() => {
                    handleTabClick('suggestion');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                    activeTab === 'suggestion'
                      ? 'bg-[#7C3AED]/5 text-[#7C3AED] font-bold'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <HelpCircle className="w-5 h-5" />
                  <span>Suggestion/Aide</span>
                </button>
                <button
                  onClick={() => {
                    handleTabClick('settings');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                    activeTab === 'settings'
                      ? 'bg-[#7C3AED]/5 text-[#7C3AED] font-bold'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span>Paramètres</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="lg:pl-56">
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}