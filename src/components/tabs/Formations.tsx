import React, { useState } from 'react';
import { ArrowLeft, MapPin, Building2, Calendar, Tag, Heart, MessageCircle, Share2, Target, Users, Star, Clock } from 'lucide-react';

interface Formation {
  id: number;
  title: string;
  institution: string;
  institutionLogo: string;
  banner: string;
  location: string;
  type: string;
  description: string;
  fullDescription: string;
  requirements: string[];
  duration: string;
  startDate: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
  likes: number;
  applications: number;
  shares: number;
  price: string;
  certification: string;
}

interface FormationDetailProps {
  formation: Formation;
  onBack: () => void;
}

function FormationDetail({ formation, onBack }: FormationDetailProps) {
  const [hasApplied, setHasApplied] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour</span>
            </button>
            <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
              {formation.type}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={formation.institutionLogo}
              alt={formation.institution}
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{formation.institution}</h3>
              <div className="flex items-center space-x-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{formation.location}</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">{formation.title}</h2>
          <p className="text-gray-600 mb-6">{formation.description}</p>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Prérequis</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {formation.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-5 h-5 text-indigo-500" />
                  <span className="font-medium text-gray-900">Durée</span>
                </div>
                <p className="text-gray-600">{formation.duration}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-indigo-500" />
                  <span className="font-medium text-gray-900">Certification</span>
                </div>
                <p className="text-gray-600">{formation.certification}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {formation.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
                >
                  {tag.name}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-100">
              <div className="flex items-center space-x-6 text-gray-500">
                <button className="flex items-center space-x-2 hover:text-red-500">
                  <Heart className="w-5 h-5" />
                  <span>{formation.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-500">
                  <Users className="w-5 h-5" />
                  <span>{formation.applications} inscrits</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-500">
                  <Share2 className="w-5 h-5" />
                  <span>{formation.shares}</span>
                </button>
              </div>
              <button
                onClick={() => setHasApplied(!hasApplied)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  hasApplied
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {hasApplied ? 'Inscription envoyée' : "S'inscrire"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Formations() {
  const [selectedFormation, setSelectedFormation] = useState<Formation | null>(null);
  const [formations] = useState<Formation[]>([
    {
      id: 1,
      title: "Master Management du Sport",
      institution: "HEC Paris",
      institutionLogo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop",
      location: "Paris",
      type: "Master",
      description: "Formation d'excellence en management du sport combinant expertise académique et expérience terrain.",
      fullDescription: "Programme complet de formation au management du sport",
      requirements: [
        "Bac+3 minimum",
        "Expérience sportive",
        "Projet professionnel",
        "Anglais B2"
      ],
      duration: "18 mois",
      startDate: "2024-09-15",
      tags: [
        { name: "Management", color: "bg-blue-100 text-blue-800" },
        { name: "Sport Business", color: "bg-purple-100 text-purple-800" }
      ],
      likes: 156,
      applications: 45,
      shares: 78,
      price: "Formation financée",
      certification: "Master 2"
    },
    {
      id: 2,
      title: "Formation Coach Sportif",
      institution: "INSEP",
      institutionLogo: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&auto=format&fit=crop",
      location: "Paris",
      type: "Certification",
      description: "Formation complète pour devenir coach sportif professionnel.",
      fullDescription: "Programme de formation au coaching sportif",
      requirements: [
        "Niveau sportif confirmé",
        "Aptitudes pédagogiques",
        "Condition physique",
        "PSC1"
      ],
      duration: "12 mois",
      startDate: "2024-10-01",
      tags: [
        { name: "Coaching", color: "bg-green-100 text-green-800" },
        { name: "Formation", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 134,
      applications: 67,
      shares: 45,
      price: "Formation financée",
      certification: "BPJEPS"
    }
  ]);

  if (selectedFormation) {
    return (
      <FormationDetail
        formation={selectedFormation}
        onBack={() => setSelectedFormation(null)}
      />
    );
  }

  return (
    <div className="px-4">
      <div className="space-y-4">
        {formations.map((formation) => (
          <article 
            key={formation.id}
            onClick={() => setSelectedFormation(formation)}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer group"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={formation.institutionLogo}
                    alt={formation.institution}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{formation.institution}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{formation.location}</span>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
                  {formation.type}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#7C3AED] transition-colors duration-200 mb-2">{formation.title}</h2>
              <p className="text-gray-600 mb-4">{formation.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {formation.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-6 text-gray-500">
                  <button className="flex items-center space-x-2 hover:text-red-500">
                    <Heart className="w-5 h-5" />
                    <span>{formation.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-blue-500">
                    <Users className="w-5 h-5" />
                    <span>{formation.applications} inscrits</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-green-500">
                    <Share2 className="w-5 h-5" />
                    <span>{formation.shares}</span>
                  </button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{formation.duration}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Rentrée : {new Date(formation.startDate).toLocaleDateString()}</span>
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}