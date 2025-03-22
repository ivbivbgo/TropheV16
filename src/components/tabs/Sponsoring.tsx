import React, { useState } from 'react';
import { ArrowLeft, MapPin, Building2, Calendar, Tag, Heart, MessageCircle, Share2, Target, Users, Star, Globe } from 'lucide-react';

interface SponsoringOpportunity {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  banner: string;
  location: string;
  budget: string;
  description: string;
  requirements: string[];
  deadline: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
  likes: number;
  applications: number;
  shares: number;
  objectives: string[];
  visibility: string[];
  duration: string;
}

interface SponsoringDetailProps {
  opportunity: SponsoringOpportunity;
  onBack: () => void;
}

function SponsoringDetail({ opportunity, onBack }: SponsoringDetailProps) {
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
              {opportunity.budget}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={opportunity.companyLogo}
              alt={opportunity.company}
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{opportunity.company}</h3>
              <div className="flex items-center space-x-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{opportunity.location}</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">{opportunity.title}</h2>
          <p className="text-gray-600 mb-6">{opportunity.description}</p>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Objectifs</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {opportunity.objectives.map((obj, index) => (
                  <li key={index}>{obj}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Visibilité offerte</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {opportunity.visibility.map((vis, index) => (
                  <li key={index}>{vis}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Prérequis</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {opportunity.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {opportunity.tags.map((tag, index) => (
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
                  <span>{opportunity.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-500">
                  <Users className="w-5 h-5" />
                  <span>{opportunity.applications} intéressés</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-500">
                  <Share2 className="w-5 h-5" />
                  <span>{opportunity.shares}</span>
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

export function Sponsoring() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<SponsoringOpportunity | null>(null);
  const [opportunities] = useState<SponsoringOpportunity[]>([
    {
      id: 1,
      title: "Partenariat Équipementier Principal",
      company: "Nike",
      companyLogo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&auto=format&fit=crop",
      location: "International",
      budget: "500K€ - 1M€",
      description: "Recherche d'athlètes de haut niveau pour partenariat équipementier complet incluant tenues de compétition et lifestyle.",
      requirements: [
        "Niveau international",
        "Forte présence médiatique",
        "Valeurs alignées avec la marque",
        "Engagement minimum 2 ans"
      ],
      objectives: [
        "Développement de produits signature",
        "Campagnes marketing internationales",
        "Événements promotionnels",
        "Contenu digital"
      ],
      visibility: [
        "Équipement complet",
        "Campagnes publicitaires",
        "Réseaux sociaux",
        "Événements internationaux"
      ],
      deadline: "2024-06-30",
      duration: "3 ans",
      tags: [
        { name: "Équipement", color: "bg-blue-100 text-blue-800" },
        { name: "International", color: "bg-purple-100 text-purple-800" }
      ],
      likes: 245,
      applications: 67,
      shares: 89
    },
    {
      id: 2,
      title: "Ambassadeur Performance",
      company: "Under Armour",
      companyLogo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&auto=format&fit=crop",
      location: "Europe",
      budget: "100K€ - 250K€",
      description: "Recherche d'athlètes performants pour représenter la marque dans les compétitions majeures.",
      requirements: [
        "Palmarès significatif",
        "Présence sur les réseaux sociaux",
        "Disponibilité événementielle",
        "Sport olympique"
      ],
      objectives: [
        "Représentation en compétition",
        "Création de contenu",
        "Participation R&D",
        "Événements marque"
      ],
      visibility: [
        "Équipement performance",
        "Médias sociaux",
        "Événements sportifs",
        "Communication marque"
      ],
      deadline: "2024-05-15",
      duration: "2 ans",
      tags: [
        { name: "Performance", color: "bg-green-100 text-green-800" },
        { name: "Digital", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 178,
      applications: 45,
      shares: 56
    },
    {
      id: 3,
      title: "Partenariat Tech & Sport",
      company: "Garmin",
      companyLogo: "https://images.unsplash.com/photo-1642132652075-2b0f6e6c858f?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1642132652075-2b0f6e6c858f?w=1200&auto=format&fit=crop",
      location: "France",
      budget: "50K€ - 100K€",
      description: "Collaboration pour le développement et la promotion d'équipements connectés pour le sport de haut niveau.",
      requirements: [
        "Utilisation régulière de tech sportive",
        "Expertise technique",
        "Communication claire",
        "Sport d'endurance"
      ],
      objectives: [
        "Tests produits",
        "Retours d'expérience",
        "Développement features",
        "Promotion produits"
      ],
      visibility: [
        "Équipement tech",
        "Blog technique",
        "Réseaux sociaux",
        "Événements tech"
      ],
      deadline: "2024-07-01",
      duration: "18 mois",
      tags: [
        { name: "Technologie", color: "bg-purple-100 text-purple-800" },
        { name: "Innovation", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 156,
      applications: 34,
      shares: 45
    }
  ]);

  if (selectedOpportunity) {
    return (
      <SponsoringDetail
        opportunity={selectedOpportunity}
        onBack={() => setSelectedOpportunity(null)}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {opportunities.map((opportunity) => (
        <div 
          key={opportunity.id}
          onClick={() => setSelectedOpportunity(opportunity)}
          className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer"
        >
          <div className="relative h-48">
            <img
              src={opportunity.banner}
              alt={opportunity.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center space-x-3">
                <img
                  src={opportunity.companyLogo}
                  alt={opportunity.company}
                  className="w-16 h-16 rounded-full border-2 border-white object-cover"
                />
                <div className="text-white">
                  <h3 className="text-lg font-semibold">{opportunity.company}</h3>
                  <p className="text-sm text-white/90">{opportunity.budget}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700`}>
                {opportunity.title}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                {opportunity.duration}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                <span className="text-gray-600">{opportunity.location}</span>
              </div>
              <div className="flex items-center">
                <Target className="w-4 h-4 mr-2 text-purple-500" />
                <span className="text-gray-600">{opportunity.objectives[0]}</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-green-500" />
                <span className="text-gray-600">{opportunity.visibility[0]}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-amber-500" />
                <span className="text-gray-600">Date limite : {new Date(opportunity.deadline).toLocaleDateString()}</span>
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