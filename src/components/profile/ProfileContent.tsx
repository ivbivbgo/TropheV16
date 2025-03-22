import React, { useState } from 'react';
import { Award, Book, Globe, Plus, Briefcase, Star, Trophy } from 'lucide-react';
import { ProfileData } from '../../types/profile';
import { ProfileSection } from './ProfileSection';
import { AddExperienceModal } from './modals/AddExperienceModal';
import { AddSkillModal } from './modals/AddSkillModal';
import { AddAchievementModal } from './modals/AddAchievementModal';
import { AddEducationModal } from './modals/AddEducationModal';
import { AddLanguageModal } from './modals/AddLanguageModal';

interface ProfileContentProps {
  profile: ProfileData;
  isEditing: boolean;
  onProfileUpdate: (updates: Partial<ProfileData>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ProfileContent({ profile, isEditing, onProfileUpdate, onSubmit }: ProfileContentProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleAddItem = (type: string) => {
    if (!isEditing) return;
    setActiveModal(type);
  };

  const handleModalClose = () => {
    setActiveModal(null);
  };

  const handleExperienceAdd = (experience: any) => {
    onProfileUpdate({
      experience: [...(profile.experience || []), experience]
    });
    handleModalClose();
  };

  const handleSkillAdd = (skill: any) => {
    onProfileUpdate({
      skills: [...(profile.skills || []), skill]
    });
    handleModalClose();
  };

  const handleAchievementAdd = (achievement: any) => {
    onProfileUpdate({
      achievements: [...(profile.achievements || []), achievement]
    });
    handleModalClose();
  };

  const handleEducationAdd = (education: any) => {
    onProfileUpdate({
      education: [...(profile.education || []), education]
    });
    handleModalClose();
  };

  const handleLanguageAdd = (language: any) => {
    onProfileUpdate({
      languages: [...(profile.languages || []), language]
    });
    handleModalClose();
  };

  const sections = [
    {
      id: 'experience',
      title: 'Expériences',
      icon: Briefcase,
      content: profile.experience?.map((exp, index) => (
        <div key={index} className="bg-gray-50/50 rounded-xl p-6 hover:bg-gray-50 transition-colors duration-300">
          <h4 className="font-semibold text-gray-900">{exp.title}</h4>
          <p className="text-gray-600">{exp.organization}</p>
          <p className="text-sm text-gray-500">
            {exp.startDate} - {exp.current ? 'Présent' : exp.endDate}
          </p>
          <p className="mt-2 text-gray-600">{exp.description}</p>
        </div>
      ))
    },
    {
      id: 'skills',
      title: 'Compétences',
      icon: Star,
      content: profile.skills?.map((skill, index) => (
        <div key={index} className="bg-gray-50/50 rounded-xl p-4 hover:bg-gray-50 transition-colors duration-300">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium text-gray-900">{skill.name}</h4>
              <p className="text-sm text-gray-500">{skill.category}</p>
            </div>
            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
              {skill.level}
            </span>
          </div>
        </div>
      ))
    },
    {
      id: 'achievements',
      title: 'Réalisations',
      icon: Trophy,
      content: profile.achievements?.map((achievement, index) => (
        <div key={index} className="bg-gray-50/50 rounded-xl p-6 hover:bg-gray-50 transition-colors duration-300">
          <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
          <p className="text-sm text-gray-500">{achievement.date}</p>
          <p className="mt-2 text-gray-600">{achievement.description}</p>
        </div>
      ))
    },
    {
      id: 'education',
      title: 'Formation',
      icon: Book,
      content: profile.education?.map((edu, index) => (
        <div key={index} className="bg-gray-50/50 rounded-xl p-6 hover:bg-gray-50 transition-colors duration-300">
          <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
          <p className="text-gray-600">{edu.institution}</p>
          <p className="text-sm text-gray-500">
            {edu.startYear} - {edu.current ? 'Présent' : edu.endYear}
          </p>
          {edu.description && <p className="mt-2 text-gray-600">{edu.description}</p>}
        </div>
      ))
    },
    {
      id: 'languages',
      title: 'Langues',
      icon: Globe,
      content: profile.languages?.map((lang, index) => (
        <div key={index} className="bg-gray-50/50 rounded-xl p-4 hover:bg-gray-50 transition-colors duration-300">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-900">{lang.name}</span>
            <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
              {lang.level}
            </span>
          </div>
        </div>
      ))
    }
  ];

  return (
    <>
      <div className="space-y-6">
        {sections.map((section) => (
          <ProfileSection key={section.id} title={section.title} icon={section.icon}>
            <div className="space-y-4">
              {section.content}
              {isEditing && (
                <button 
                  onClick={() => handleAddItem(section.id)}
                  className="w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center space-x-2 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  <span>Ajouter</span>
                </button>
              )}
            </div>
          </ProfileSection>
        ))}
      </div>

      {/* Modals */}
      {activeModal === 'experience' && (
        <AddExperienceModal onClose={handleModalClose} onAdd={handleExperienceAdd} />
      )}
      {activeModal === 'skills' && (
        <AddSkillModal onClose={handleModalClose} onAdd={handleSkillAdd} />
      )}
      {activeModal === 'achievements' && (
        <AddAchievementModal onClose={handleModalClose} onAdd={handleAchievementAdd} />
      )}
      {activeModal === 'education' && (
        <AddEducationModal onClose={handleModalClose} onAdd={handleEducationAdd} />
      )}
      {activeModal === 'languages' && (
        <AddLanguageModal onClose={handleModalClose} onAdd={handleLanguageAdd} />
      )}
    </>
  );
}