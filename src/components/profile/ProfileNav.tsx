import React from 'react';
import { 
  LayoutGrid, Briefcase, GraduationCap, Trophy, 
  Users, Globe, Heart, Settings 
} from 'lucide-react';

interface ProfileNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function ProfileNav({ activeSection, onSectionChange }: ProfileNavProps) {
  const sections = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: LayoutGrid },
    { id: 'experience', label: 'Expérience', icon: Briefcase },
    { id: 'education', label: 'Formation', icon: GraduationCap },
    { id: 'skills', label: 'Compétences', icon: Users },
    { id: 'languages', label: 'Langues', icon: Globe },
    { id: 'interests', label: 'Centres d\'intérêt', icon: Heart },
    { id: 'settings', label: 'Paramètres', icon: Settings }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
      <nav className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeSection === section.id
                ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <section.icon className={`w-5 h-5 ${
              activeSection === section.id
                ? 'text-indigo-600'
                : 'text-gray-400 group-hover:text-gray-500'
            }`} />
            <span>{section.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}