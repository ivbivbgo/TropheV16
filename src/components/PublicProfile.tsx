import React from 'react';
import { MapPin, Trophy, Briefcase, ArrowLeft, Linkedin, Twitter, Instagram } from 'lucide-react';

interface PublicProfileProps {
  onBack: () => void;
  profile: any;
  type: 'athlete' | 'expert';
}

export function PublicProfile({ onBack, profile, type }: PublicProfileProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <button 
        onClick={onBack}
        className="fixed top-6 left-6 z-20 flex items-center space-x-2 text-white bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-black/30 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Retour</span>
      </button>

      <div className="relative h-72">
        <img 
          src={profile.banner} 
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        <div className="relative mb-6">
          <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src={profile.avatar} 
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 border-b border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                <div className="mt-2 text-lg text-gray-600">
                  {type === 'athlete' ? profile.sport : profile.specialty}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-6 h-6 text-indigo-500" />
                  <span className="text-lg">{profile.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  {type === 'athlete' ? (
                    <>
                      <Trophy className="w-6 h-6 text-indigo-500" />
                      <span className="text-lg">{profile.achievements}</span>
                    </>
                  ) : (
                    <>
                      <Briefcase className="w-6 h-6 text-indigo-500" />
                      <span className="text-lg">{profile.experience}</span>
                    </>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">À propos</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {type === 'athlete' 
                    ? "Athlète de haut niveau passionné par le sport et le développement personnel."
                    : "Institution dédiée à l'accompagnement et à la formation des athlètes dans leur parcours de reconversion."}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Réseaux sociaux</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
                    <Twitter className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#E4405F] transition-colors">
                    <Instagram className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}