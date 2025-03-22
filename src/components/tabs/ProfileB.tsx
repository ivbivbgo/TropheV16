import React, { useState } from 'react';
import { Edit2, MapPin, Trophy, Briefcase, Search, Target, Plus, MessageSquare, Camera } from 'lucide-react';
import { DEFAULT_PROFILE } from '../../data/profile';

export function ProfileB() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState<'photos' | 'videos'>('photos');
  
  const galleryImages = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=300&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="relative h-64 bg-gradient-to-r from-indigo-500 to-purple-500">
        <img 
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&auto=format&fit=crop"
          alt="Banner"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
        <div className="relative z-10">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start space-x-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={DEFAULT_PROFILE.avatar}
                    alt={DEFAULT_PROFILE.name}
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 p-1.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3">
                      <h1 className="text-2xl font-bold text-gray-900">{DEFAULT_PROFILE.name}</h1>
                      <button className="text-gray-400 hover:text-indigo-600">
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-gray-600">{DEFAULT_PROFILE.sport}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2">
                      <Plus className="w-4 h-4" />
                      <span>Suivre</span>
                    </button>
                    <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Message</span>
                    </button>
                  </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{DEFAULT_PROFILE.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Trophy className="w-4 h-4 text-gray-400" />
                    <span>Niveau sportif: {DEFAULT_PROFILE.level}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Briefcase className="w-4 h-4 text-gray-400" />
                    <span>Club: {DEFAULT_PROFILE.currentClub}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Target className="w-4 h-4 text-gray-400" />
                    <span>Situation: {DEFAULT_PROFILE.status}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Search className="w-4 h-4 text-gray-400" />
                    <span>Besoin: {DEFAULT_PROFILE.recherche}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* About Section */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">À Propos</h2>
                  <button className="text-gray-400 hover:text-indigo-600">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-gray-600">{DEFAULT_PROFILE.bio}</p>
              </div>

              {/* Titles Section */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Mes titres</h2>
                  <button className="text-gray-400 hover:text-indigo-600">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4">
                  {DEFAULT_PROFILE.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="font-medium text-gray-900">{achievement.title}</p>
                        <p className="text-sm text-gray-500">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Gallery */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Galerie</h2>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setActiveGalleryTab('photos')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        activeGalleryTab === 'photos'
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      Photos
                    </button>
                    <button
                      onClick={() => setActiveGalleryTab('videos')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        activeGalleryTab === 'videos'
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      Vidéos
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Voir plus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}