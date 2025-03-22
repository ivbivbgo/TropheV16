import React from 'react';
import { Bell, Mail, Globe, MessageCircle } from 'lucide-react';
import { ProfileData } from '../../../types/profile';

interface NotificationsSectionProps {
  profile: ProfileData;
  isEditing: boolean;
  onUpdate?: (updates: Partial<ProfileData>) => void;
}

export function NotificationsSection({ profile, isEditing, onUpdate }: NotificationsSectionProps) {
  const handleToggle = (key: keyof typeof profile.contactPreferences) => {
    if (!isEditing || !onUpdate) return;
    
    onUpdate({
      contactPreferences: {
        ...profile.contactPreferences,
        [key]: !profile.contactPreferences[key]
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Bell className="w-6 h-6 text-indigo-600" />
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Notifications par email</p>
              <p className="text-sm text-gray-500">Recevoir les mises à jour par email</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={profile.contactPreferences?.email}
              onChange={() => handleToggle('email')}
              disabled={!isEditing}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Notifications web</p>
              <p className="text-sm text-gray-500">Recevoir les notifications sur le site</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={profile.contactPreferences?.messaging}
              onChange={() => handleToggle('messaging')}
              disabled={!isEditing}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Messages privés</p>
              <p className="text-sm text-gray-500">Recevoir les messages des autres utilisateurs</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={profile.contactPreferences?.phone}
              onChange={() => handleToggle('phone')}
              disabled={!isEditing}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}