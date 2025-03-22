import React from 'react';
import { Lock, Eye, Users, Globe } from 'lucide-react';
import { ProfileData } from '../../../types/profile';

interface PrivacySectionProps {
  profile: ProfileData;
  isEditing: boolean;
  onUpdate?: (updates: Partial<ProfileData>) => void;
}

export function PrivacySection({ profile, isEditing, onUpdate }: PrivacySectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Lock className="w-6 h-6 text-indigo-600" />
        <h3 className="text-lg font-semibold text-gray-900">Confidentialité</h3>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Profil public</p>
              <p className="text-sm text-gray-500">Rendre votre profil visible publiquement</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={true}
              onChange={() => {}}
              disabled={!isEditing}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Statut en ligne</p>
              <p className="text-sm text-gray-500">Afficher votre statut de connexion</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={true}
              onChange={() => {}}
              disabled={!isEditing}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-gray-400" />
            <div>
              <p className="font-medium text-gray-900">Visibilité du réseau</p>
              <p className="text-sm text-gray-500">Afficher vos connexions aux autres utilisateurs</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={true}
              onChange={() => {}}
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