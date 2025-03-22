import React from 'react';
import { ProfileData } from '../../types/profile';
import { MapPin, Trophy, Briefcase, Mail, Phone, Calendar, Users, Star } from 'lucide-react';

interface ProfileSidebarProps {
  profile: ProfileData;
}

export function ProfileSidebar({ profile }: ProfileSidebarProps) {
  const stats = [
    { label: 'Expériences', value: profile.experience?.length || 0 },
    { label: 'Compétences', value: profile.skills?.length || 0 },
    { label: 'Formations', value: profile.education?.length || 0 }
  ];

  const contactInfo = [
    { icon: Mail, value: profile.email },
    { icon: Phone, value: profile.phone },
    { icon: MapPin, value: profile.location },
    { icon: Trophy, value: profile.sport },
    { icon: Briefcase, value: profile.currentClub }
  ].filter(item => item.value);

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistiques</h3>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
        <div className="space-y-4">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                <item.icon className="w-4 h-4 text-indigo-600" />
              </div>
              <span className="text-gray-600">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Overview */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Compétences clés</h3>
        <div className="space-y-3">
          {profile.skills?.slice(0, 5).map((skill, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-gray-600">{skill.name}</span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < (skill.level === 'Expert' ? 5 :
                           skill.level === 'Avancé' ? 4 :
                           skill.level === 'Intermédiaire' ? 3 : 2)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}