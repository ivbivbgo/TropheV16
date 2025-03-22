import React, { useState } from 'react';
import { ArrowLeft, MapPin, Building2, Calendar, Tag, Heart, MessageCircle, Share2, Briefcase, GraduationCap, Clock, Target, Users, Sparkles } from 'lucide-react';

interface Opportunity {
  id: number;
  title: string;
  company: string;
  companyLogo: string;
  banner: string;
  location: string;
  type: string;
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
  salary?: string;
  experience?: string;
  remote?: boolean;
  benefits?: string[];
}

interface OpportunityDetailProps {
  opportunity: Opportunity;
  onBack: () => void;
}

function OpportunityDetail({ opportunity, onBack }: OpportunityDetailProps) {
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
              {opportunity.type}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {opportunity.salary && (
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center space-x-2 text-gray-900 font-medium mb-1">
                  <Sparkles className="w-5 h-5 text-indigo-500" />
                  <span>Rémunération</span>
                </div>
                <p className="text-gray-600">{opportunity.salary}</p>
              </div>
            )}
            {opportunity.experience && (
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center space-x-2 text-gray-900 font-medium mb-1">
                  <Clock className="w-5 h-5 text-indigo-500" />
                  <span>Expérience</span>
                </div>
                <p className="text-gray-600">{opportunity.experience}</p>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Prérequis</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {opportunity.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            {opportunity.benefits && (
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Avantages</h4>
                <div className="grid grid-cols-2 gap-3">
                  {opportunity.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-600">
                      <Sparkles className="w-4 h-4 text-indigo-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                  <span>{opportunity.applications} candidatures</span>
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
                {hasApplied ? 'Candidature envoyée' : 'Postuler'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Opportunities() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);
  const [opportunities] = useState<Opportunity[]>([
    {
      id: 1,
      title: "Responsable Performance & Data",
      company: "Paris Saint-Germain",
      companyLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&auto=format&fit=crop",
      location: "Paris",
      type: "CDI",
      description: "Rejoignez notre équipe en tant que Responsable Performance & Data. Vous serez en charge de l'analyse des données de performance des athlètes et de l'optimisation des processus d'entraînement.",
      requirements: [
        "5 ans d'expérience dans le sport de haut niveau",
        "Expertise en analyse de données",
        "Maîtrise des outils d'analyse de performance",
        "Capacité à travailler en équipe"
      ],
      deadline: "2024-04-30",
      tags: [
        { name: "Sport", color: "bg-blue-100 text-blue-800" },
        { name: "Data", color: "bg-purple-100 text-purple-800" },
        { name: "Management", color: "bg-green-100 text-green-800" }
      ],
      likes: 45,
      applications: 23,
      shares: 12,
      salary: "55-65K€ annuel",
      experience: "5+ ans",
      benefits: [
        "Télétravail partiel",
        "Mutuelle premium",
        "Participation aux événements sportifs",
        "Formation continue"
      ]
    },
    {
      id: 2,
      title: "Analyste Performance Sportive",
      company: "INSEP",
      companyLogo: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&auto=format&fit=crop",
      location: "Paris",
      type: "CDD",
      description: "L'INSEP recherche un analyste performance pour accompagner les athlètes dans leur préparation aux JO 2024.",
      requirements: [
        "Formation en STAPS",
        "Maîtrise des outils d'analyse vidéo",
        "Expérience en sport de haut niveau",
        "Anglais professionnel"
      ],
      deadline: "2024-03-15",
      tags: [
        { name: "Analyse", color: "bg-blue-100 text-blue-800" },
        { name: "JO 2024", color: "bg-red-100 text-red-800" }
      ],
      likes: 67,
      applications: 34,
      shares: 15,
      salary: "40-45K€ annuel",
      experience: "3+ ans",
      benefits: [
        "Restaurant d'entreprise",
        "Accès aux installations sportives",
        "Formation continue"
      ]
    },
    {
      id: 3,
      title: "Directeur Marketing Sportif",
      company: "Olympique Lyonnais",
      companyLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop",
      location: "Lyon",
      type: "CDI",
      description: "Définir et mettre en œuvre la stratégie marketing du club, développer la marque et les revenus commerciaux.",
      requirements: [
        "8 ans d'expérience en marketing sportif",
        "Master en marketing/management du sport",
        "Leadership et vision stratégique",
        "Anglais courant"
      ],
      deadline: "2024-05-15",
      tags: [
        { name: "Marketing", color: "bg-pink-100 text-pink-800" },
        { name: "Management", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 89,
      applications: 45,
      shares: 23,
      salary: "70-85K€ annuel",
      experience: "8+ ans",
      benefits: [
        "Package attractif",
        "Participation aux résultats",
        "Avantages club"
      ]
    },
    {
      id: 4,
      title: "Préparateur Mental",
      company: "Fédération Française de Tennis",
      companyLogo: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&auto=format&fit=crop",
      location: "Paris",
      type: "CDI",
      description: "Accompagnement mental des athlètes de haut niveau dans leur préparation et compétitions.",
      requirements: [
        "Master en psychologie du sport",
        "Expérience avec athlètes de haut niveau",
        "Certification en préparation mentale",
        "Disponibilité pour déplacements"
      ],
      deadline: "2024-04-20",
      tags: [
        { name: "Mental", color: "bg-purple-100 text-purple-800" },
        { name: "Performance", color: "bg-green-100 text-green-800" }
      ],
      likes: 76,
      applications: 29,
      shares: 18,
      salary: "45-55K€ annuel",
      experience: "5+ ans",
      benefits: [
        "Déplacements internationaux",
        "Formation continue",
        "Package compétitif"
      ]
    },
    {
      id: 5,
      title: "Responsable Innovation Sport",
      company: "Decathlon",
      companyLogo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&auto=format&fit=crop",
      location: "Lille",
      type: "CDI",
      description: "Piloter l'innovation produit et technologique pour améliorer la performance sportive.",
      requirements: [
        "Formation ingénieur",
        "Expertise en innovation sportive",
        "Management d'équipe R&D",
        "Expérience en développement produit"
      ],
      deadline: "2024-06-01",
      tags: [
        { name: "Innovation", color: "bg-blue-100 text-blue-800" },
        { name: "R&D", color: "bg-yellow-100 text-yellow-800" }
      ],
      likes: 92,
      applications: 38,
      shares: 27,
      salary: "60-75K€ annuel",
      experience: "7+ ans",
      benefits: [
        "Laboratoire R&D",
        "Équipe internationale",
        "Avantages groupe"
      ]
    },
    {
      id: 6,
      title: "Chef de Projet Événementiel Sportif",
      company: "ASO",
      companyLogo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop",
      location: "Paris",
      type: "CDI",
      description: "Organisation et gestion d'événements sportifs majeurs, coordination des équipes et partenaires.",
      requirements: [
        "5 ans en gestion événementielle",
        "Expérience en sport événementiel",
        "Management d'équipe",
        "Gestion de budget"
      ],
      deadline: "2024-05-30",
      tags: [
        { name: "Événementiel", color: "bg-orange-100 text-orange-800" },
        { name: "Management", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 84,
      applications: 41,
      shares: 32,
      salary: "50-60K€ annuel",
      experience: "5+ ans",
      benefits: [
        "Événements internationaux",
        "Package attractif",
        "Formation continue"
      ]
    },
    {
      id: 7,
      title: "Responsable Formation Sportive",
      company: "CREPS",
      companyLogo: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop",
      location: "Montpellier",
      type: "CDI",
      description: "Conception et pilotage des programmes de formation pour sportifs de haut niveau.",
      requirements: [
        "Master STAPS ou équivalent",
        "Expérience en formation",
        "Connaissance du sport de haut niveau",
        "Capacités pédagogiques"
      ],
      deadline: "2024-04-15",
      tags: [
        { name: "Formation", color: "bg-green-100 text-green-800" },
        { name: "Pédagogie", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 71,
      applications: 33,
      shares: 19,
      salary: "45-55K€ annuel",
      experience: "5+ ans",
      benefits: [
        "Environnement sportif",
        "Formation continue",
        "Avantages publics"
      ]
    },
    {
      id: 8,
      title: "Manager Sponsoring Sportif",
      company: "FDJ",
      companyLogo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=1200&auto=format&fit=crop",
      location: "Paris",
      type: "CDI",
      description: "Développement et gestion des partenariats sportifs, négociation et activation des contrats.",
      requirements: [
        "MBA ou Master en management du sport",
        "Expérience en sponsoring",
        "Réseau dans le sport",
        "Négociation commerciale"
      ],
      deadline: "2024-05-01",
      tags: [
        { name: "Sponsoring", color: "bg-purple-100 text-purple-800" },
        { name: "Commercial", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 88,
      applications: 47,
      shares: 29,
      salary: "55-65K€ annuel",
      experience: "6+ ans",
      benefits: [
        "Package attractif",
        "Bonus sur objectifs",
        "Events VIP"
      ]
    },
    {
      id: 9,
      title: "Directeur Centre de Formation",
      company: "AS Monaco",
      companyLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=1200&auto=format&fit=crop",
      location: "Monaco",
      type: "CDI",
      description: "Direction du centre de formation, développement des jeunes talents et gestion administrative.",
      requirements: [
        "10 ans d'expérience dans la formation",
        "DESJEPS ou équivalent",
        "Management d'équipe",
        "Vision stratégique"
      ],
      deadline: "2024-06-15",
      tags: [
        { name: "Formation", color: "bg-green-100 text-green-800" },
        { name: "Direction", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 95,
      applications: 52,
      shares: 34,
      salary: "75-90K€ annuel",
      experience: "10+ ans",
      benefits: [
        "Package premium",
        "Logement possible",
        "Avantages club"
      ]
    },
    {
      id: 10,
      title: "Expert Performance Data",
      company: "Stade Rennais",
      companyLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop",
      location: "Rennes",
      type: "CDI",
      description: "Analyse des données de performance, développement d'outils d'aide à la décision.",
      requirements: [
        "Master en data science",
        "Expérience en sport de haut niveau",
        "Maîtrise des outils statistiques",
        "Programmation Python/R"
      ],
      deadline: "2024-04-30",
      tags: [
        { name: "Data", color: "bg-purple-100 text-purple-800" },
        { name: "Performance", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 82,
      applications: 39,
      shares: 25,
      salary: "50-60K€ annuel",
      experience: "4+ ans",
      benefits: [
        "Environnement innovant",
        "Formation continue",
        "Package attractif"
      ]
    },
    {
      id: 11,
      title: "Responsable Développement Esport",
      company: "Team Vitality",
      companyLogo: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1542751110-97427bbecf23?w=1200&auto=format&fit=crop",
      location: "Paris",
      type: "CDI",
      description: "Développement de la section esport, gestion des équipes et des compétitions.",
      requirements: [
        "5 ans d'expérience en esport",
        "Connaissance de l'écosystème",
        "Management d'équipe",
        "Anglais courant"
      ],
      deadline: "2024-05-15",
      tags: [
        { name: "Esport", color: "bg-purple-100 text-purple-800" },
        { name: "Digital", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 78,
      applications: 43,
      shares: 31,
      salary: "45-55K€ annuel",
      experience: "5+ ans",
      benefits: [
        "Gaming setup",
        "Events internationaux",
        "Package attractif"
      ]
    },
    {
      id: 12,
      title: "Responsable Communication Sportive",
      company: "Fédération Française de Rugby",
      companyLogo: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&auto=format&fit=crop",
      location: "Paris",
      type: "CDI",
      description: "Élaboration et mise en œuvre de la stratégie de communication de la fédération.",
      requirements: [
        "Master en communication",
        "Expérience en sport",
        "Maîtrise des réseaux sociaux",
        "Gestion de crise"
      ],
      deadline: "2024-05-30",
      tags: [
        { name: "Communication", color: "bg-pink-100 text-pink-800" },
        { name: "Digital", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 86,
      applications: 44,
      shares: 28,
      salary: "45-55K€ annuel",
      experience: "5+ ans",
      benefits: [
        "Événements sportifs",
        "Formation continue",
        "Package attractif"
      ]
    }
  ]);

  if (selectedOpportunity) {
    return (
      <OpportunityDetail
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
                  <p className="text-sm text-white/90">{opportunity.type}</p>
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
                {opportunity.experience}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                <span className="text-gray-600">{opportunity.location}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-purple-500" />
                <span className="text-gray-600">{opportunity.company}</span>
              </div>
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-green-500" />
                <span className="text-gray-600">{opportunity.salary}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-amber-500" />
                <span className="text-gray-600">Date limite : {new Date(opportunity.deadline).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <button className="w-[90%] px-6 py-2.5 bg-[#514be5] text-white rounded-lg hover:bg-[#4540cc] transition-colors flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Postuler</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}