import React from 'react';
import { Camera, Edit3, MapPin, Trophy, Briefcase } from 'lucide-react';
import { ProfileData } from '../../types/profile';

interface ProfileHeaderProps {
  profile: ProfileData;
  isEditing: boolean;
  onAvatarUpload: (file: File) => void;
  onBannerUpload: (file: File) => void;
  avatarInputRef: React.RefObject<HTMLInputElement>;
  bannerInputRef: React.RefObject<HTMLInputElement>;
}

export function ProfileHeader({
  profile,
  isEditing,
  onAvatarUpload,
  onBannerUpload,
  avatarInputRef,
  bannerInputRef
}: ProfileHeaderProps) {
  return (
    <div className="relative mb-8">
      {/* Banner */}
      <div className="relative h-80 overflow-hidden rounded-3xl">
        <img 
          src={profile.banner} 
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        
        {isEditing && (
          <>
            <input
              ref={bannerInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onBannerUpload(file);
              }}
            />
            <button 
              onClick={() => bannerInputRef.current?.click()}
              className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-black/30 transition-all duration-300"
            >
              <Edit3 className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Profile Info */}
      <div className="absolute -bottom-16 left-8 right-8 flex items-end justify-between">
        <div className="flex items-end space-x-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 rounded-2xl ring-4 ring-white shadow-xl overflow-hidden">
              <img 
                src={profile.avatar} 
                alt={profile.name}
                className="w-full h-full object-cover"
              />
              {isEditing && (
                <>
                  <input
                    ref={avatarInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) onAvatarUpload(file);
                    }}
                  />
                  <button 
                    onClick={() => avatarInputRef.current?.click()}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300"
                  >
                    <Camera className="w-8 h-8 text-white" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="mb-4 text-white">
            <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
            <div className="flex items-center space-x-4">
              {profile.sport && (
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4" />
                  <span>{profile.sport}</span>
                </div>
              )}
              {profile.location && (
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
              )}
              {profile.currentCompany && (
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4" />
                  <span>{profile.currentCompany}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}