import React from 'react';
import { ArrowLeft, Camera, Edit3, MapPin, Trophy, Briefcase, Mail } from 'lucide-react';
import { ProfileData } from '../../types/profile';

interface ProfileCoverProps {
  profile: ProfileData;
  onBack: () => void;
  onAvatarUpload: (file: File) => void;
  onBannerUpload: (file: File) => void;
  avatarInputRef: React.RefObject<HTMLInputElement>;
  bannerInputRef: React.RefObject<HTMLInputElement>;
}

export function ProfileCover({
  profile,
  onBack,
  onAvatarUpload,
  onBannerUpload,
  avatarInputRef,
  bannerInputRef
}: ProfileCoverProps) {
  return (
    <div className="relative">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-6 left-6 z-20 flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
      >
        <ArrowLeft className="w-4 h-4 text-white" />
        <span className="text-white font-medium">Retour</span>
      </button>

      {/* Banner */}
      <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        <img 
          src={profile.banner} 
          alt="Banner"
          className="w-full h-full object-cover"
        />
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
          className="absolute top-6 right-6 bg-black/20 backdrop-blur-md text-white p-3 rounded-xl hover:bg-black/30 transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
        >
          <Edit3 className="w-5 h-5" />
        </button>

        {/* Profile Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Avatar */}
            <div className="relative group -mb-16 sm:-mb-12 lg:-mb-16">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl ring-4 ring-white shadow-xl overflow-hidden">
                <img 
                  src={profile.avatar} 
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
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
                  className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Camera className="w-8 h-8 text-white" />
                </button>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left text-white">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{profile.name}</h1>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm sm:text-base">{profile.sport}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm sm:text-base">{profile.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm sm:text-base">{profile.currentCompany || 'Non renseigné'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm sm:text-base">{profile.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}