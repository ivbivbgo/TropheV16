import React, { useState } from 'react';
import { ArrowLeft, MapPin, Building2, Calendar, Tag, Heart, MessageCircle, Share2, Target, Users, Star, Globe, Handshake } from 'lucide-react';

interface Collaboration {
  id: number;
  title: string;
  organization: string;
  organizationLogo: string;
  banner: string;
  location: string;
  type: string;
  description: string;
  objectives: string[];
  requirements: string[];
  benefits: string[];
  deadline: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
  likes: number;
  applications: number;
  shares: number;
  duration: string;
}

interface CollaborationDetailProps {
  collaboration: Collaboration;
  onBack: () => void;
}

function CollaborationDetail({ collaboration, onBack }: CollaborationDetailProps) {
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
              {collaboration.type}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={collaboration.organizationLogo}
              alt={collaboration.organization}
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{collaboration.organization}</h3>
              <div className="flex items-center space-x-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{collaboration.location}</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">{collaboration.title}</h2>
          <p className="text-gray-600 mb-6">{collaboration.description}</p>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Objectifs</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {collaboration.objectives.map((obj, index) => (
                  <li key={index}>{obj}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Prérequis</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {collaboration.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Avantages</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {collaboration.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {collaboration.tags.map((tag, index) => (
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
                  <span>{collaboration.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-500">
                  <Users className="w-5 h-5" />
                  <span>{collaboration.applications} intéressés</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-500">
                  <Share2 className="w-5 h-5" />
                  <span>{collaboration.shares}</span>
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
                {hasApplied ? 'Intérêt manifesté' : 'Manifester son intérêt'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Collaboration() {
  const [selectedCollaboration, setSelectedCollaboration] = useState<Collaboration | null>(null);
  const [collaborations] = useState<Collaboration[]>([
    {
      id: 1,
      title: "Programme Mentorat Athlètes",
      organization: "INSEP",
      organizationLogo: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&auto=format&fit=crop",
      location: "Paris",
      type: "Mentorat",
      description: "Programme de mentorat entre athlètes expérimentés et jeunes talents pour faciliter la transition et le développement professionnel.",
      objectives: [
        "Partage d'expérience",
        "Développement professionnel",
        "Networking",
        "Support personnalisé"
      ],
      requirements: [
        "5+ ans d'expérience en sport de haut niveau",
        "Expérience en reconversion réussie",
        "Disponibilité régulière",
        "Capacités de communication"
      ],
      benefits: [
        "Formation au mentorat",
        "Réseau d'experts",
        "Événements exclusifs",
        "Reconnaissance INSEP"
      ],
      deadline: "2024-05-30",
      duration: "12 mois",
      tags: [
        { name: "Mentorat", color: "bg-purple-100 text-purple-800" },
        { name: "Formation", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 189,
      applications: 45,
      shares: 67
    },
    {
      id: 2,
      title: "Projet Innovation Sportive",
      organization: "Decathlon",
      organizationLogo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&auto=format&fit=crop",
      location: "Lille",
      type: "R&D",
      description: "Collaboration pour le développement de nouveaux équipements sportifs innovants avec des athlètes de haut niveau.",
      objectives: [
        "Tests produits",
        "Feedback technique",
        "Co-création",
        "Validation terrain"
      ],
      requirements: [
        "Expertise sport spécifique",
        "Intérêt pour l'innovation",
        "Disponibilité tests",
        "Communication technique"
      ],
      benefits: [
        "Équipements gratuits",
        "Rémunération tests",
        "Participation R&D",
        "Visibilité"
      ],
      deadline: "2024-06-15",
      duration: "6 mois",
      tags: [
        { name: "Innovation", color: "bg-green-100 text-green-800" },
        { name: "R&D", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 156,
      applications: 34,
      shares: 45
    },
    {
      id: 3,
      title: "Ambassadeur Sport-Études",
      organization: "Ministère des Sports",
      organizationLogo: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&auto=format&fit=crop",
      location: "France",
      type: "Éducation",
      description: "Programme d'intervention dans les établissements scolaires pour promouvoir le double projet sport-études.",
      objectives: [
        "Sensibilisation jeunes",
        "Promotion double projet",
        "Témoignages",
        "Orientation"
      ],
      requirements: [
        "Double projet réussi",
        "Capacités pédagogiques",
        "Mobilité France",
        "Disponibilité ponctuelle"
      ],
      benefits: [
        "Rémunération interventions",
        "Formation pédagogique",
        "Réseau éducation",
        "Impact social"
      ],
      deadline: "2024-07-01",
      duration: "Année scolaire",
      tags: [
        { name: "Éducation", color: "bg-blue-100 text-blue-800" },
        { name: "Social", color: "bg-orange-100 text-orange-800" }
      ],
      likes: 234,
      applications: 56,
      shares: 78
    }
  ]);

  if (selectedCollaboration) {
    return (
      <CollaborationDetail
        collaboration={selectedCollaboration}
        onBack={() => setSelectedCollaboration(null)}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {collaborations.map((collaboration) => (
        <div 
          key={collaboration.id}
          onClick={() => setSelectedCollaboration(collaboration)}
          className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer"
        >
          <div className="relative h-48">
            <img
              src={collaboration.banner}
              alt={collaboration.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center space-x-3">
                <img
                  src={collaboration.organizationLogo}
                  alt={collaboration.organization}
                  className="w-16 h-16 rounded-full border-2 border-white object-cover"
                />
                <div className="text-white">
                  <h3 className="text-lg font-semibold">{collaboration.organization}</h3>
                  <p className="text-sm text-white/90">{collaboration.type}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700`}>
                {collaboration.title}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                {collaboration.duration}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                <span className="text-gray-600">{collaboration.location}</span>
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2 text-purple-500" />
                <span className="text-gray-600">{collaboration.objectives[0]}</span>
              </div>
              <div className="flex items-center">
                <Handshake className="w-4 h-4 mr-2 text-green-500" />
                <span className="text-gray-600">{collaboration.benefits[0]}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-amber-500" />
                <span className="text-gray-600">Date limite : {new Date(collaboration.deadline).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button className="w-[90%] px-6 py-2.5 bg-[#514be5] text-white rounded-lg hover:bg-[#4540cc] transition-colors flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>En savoir plus</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}