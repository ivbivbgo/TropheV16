import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { ProfileData } from '../../../types/profile';

interface ContactsSectionProps {
  profile: ProfileData;
  isEditing: boolean;
  onUpdate?: (updates: Partial<ProfileData>) => void;
}

export function ContactsSection({ profile, isEditing, onUpdate }: ContactsSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Contacts</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <Mail className="w-5 h-5 text-indigo-600" />
          </div>
          {isEditing ? (
            <input
              type="email"
              value={profile.email || ''}
              onChange={(e) => onUpdate?.({ email: e.target.value })}
              className="flex-1 rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Email"
            />
          ) : (
            <span className="text-gray-600">{profile.email || 'Non renseigné'}</span>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <Phone className="w-5 h-5 text-indigo-600" />
          </div>
          {isEditing ? (
            <input
              type="tel"
              value={profile.phone || ''}
              onChange={(e) => onUpdate?.({ phone: e.target.value })}
              className="flex-1 rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Téléphone"
            />
          ) : (
            <span className="text-gray-600">{profile.phone || 'Non renseigné'}</span>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <MapPin className="w-5 h-5 text-indigo-600" />
          </div>
          {isEditing ? (
            <input
              type="text"
              value={profile.location || ''}
              onChange={(e) => onUpdate?.({ location: e.target.value })}
              className="flex-1 rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Localisation"
            />
          ) : (
            <span className="text-gray-600">{profile.location || 'Non renseigné'}</span>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <Globe className="w-5 h-5 text-indigo-600" />
          </div>
          {isEditing ? (
            <input
              type="url"
              value={profile.socialLinks?.website || ''}
              onChange={(e) => onUpdate?.({ 
                socialLinks: { 
                  ...profile.socialLinks, 
                  website: e.target.value 
                } 
              })}
              className="flex-1 rounded-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Site web"
            />
          ) : (
            <span className="text-gray-600">
              {profile.socialLinks?.website ? (
                <a 
                  href={profile.socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  {profile.socialLinks.website}
                </a>
              ) : (
                'Non renseigné'
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}