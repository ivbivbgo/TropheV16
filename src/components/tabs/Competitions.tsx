import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Tag, Heart, MessageCircle, Share2, Trophy, Users, Target, Clock } from 'lucide-react';

interface Competition {
  id: number;
  title: string;
  organizer: string;
  organizerLogo: string;
  banner: string;
  location: string;
  date: string;
  description: string;
  requirements: string[];
  categories: string[];
  prizes: string[];
  registrationDeadline: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
  participants: number;
  maxParticipants: number;
  likes: number;
  shares: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  sport?: string;
  level?: string;
}

interface CompetitionDetailProps {
  competition: Competition;
  onBack: () => void;
}

function CompetitionDetail({ competition, onBack }: CompetitionDetailProps) {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="relative h-80">
          <img 
            src={competition.banner}
            alt={competition.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button 
            onClick={onBack}
            className="absolute top-6 left-6 flex items-center space-x-2 text-white bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-black/30 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour</span>
          </button>
        </div>

        <div className="p-8">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={competition.organizerLogo}
              alt={competition.organizer}
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{competition.organizer}</h3>
              <div className="flex items-center space-x-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{competition.location}</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">{competition.title}</h2>
          <p className="text-gray-600 mb-6">{competition.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Catégories</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {competition.categories.map((category, index) => (
                  <li key={index}>{category}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Prix</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {competition.prizes.map((prize, index) => (
                  <li key={index}>{prize}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Prérequis</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {competition.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {competition.tags.map((tag, index) => (
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
                  <span>{competition.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-blue-500">
                  <Users className="w-5 h-5" />
                  <span>{competition.participants}/{competition.maxParticipants} participants</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-green-500">
                  <Share2 className="w-5 h-5" />
                  <span>{competition.shares}</span>
                </button>
              </div>
              {competition.status === 'upcoming' && (
                <button
                  onClick={() => setIsRegistered(!isRegistered)}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    isRegistered
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                  disabled={competition.participants >= competition.maxParticipants}
                >
                  {competition.participants >= competition.maxParticipants
                    ? 'Complet'
                    : isRegistered
                    ? 'Inscription confirmée'
                    : "S'inscrire"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Competitions() {
  const [selectedCompetition, setSelectedCompetition] = useState<Competition | null>(null);
  const [competitions] = useState<Competition[]>([
    {
      id: 1,
      title: "Championnat National de Tennis",
      organizer: "Fédération Française de Tennis",
      organizerLogo: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200&auto=format&fit=crop",
      location: "Paris",
      date: "2024-06-15",
      description: "Championnat national regroupant les meilleurs joueurs de tennis français.",
      requirements: [
        "Classement national minimum",
        "Licence FFT à jour",
        "Qualification régionale"
      ],
      categories: [
        "Senior Hommes",
        "Senior Femmes",
        "Double Mixte"
      ],
      prizes: [
        "1er : 50 000€",
        "2ème : 25 000€",
        "3ème : 10 000€"
      ],
      registrationDeadline: "2024-05-15",
      tags: [
        { name: "Tennis", color: "bg-blue-100 text-blue-800" },
        { name: "National", color: "bg-purple-100 text-purple-800" }
      ],
      participants: 128,
      maxParticipants: 128,
      likes: 345,
      shares: 89,
      status: 'upcoming'
    },
    {
      id: 2,
      title: "Marathon de Paris",
      organizer: "ASO",
      organizerLogo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&auto=format&fit=crop",
      location: "Paris",
      date: "2024-04-14",
      description: "Le plus grand marathon de France, parcourant les rues emblématiques de Paris.",
      requirements: [
        "Certificat médical",
        "Temps de qualification",
        "Inscription validée"
      ],
      categories: [
        "Elite Hommes",
        "Elite Femmes",
        "Handisport"
      ],
      prizes: [
        "1er : 40 000€",
        "2ème : 20 000€",
        "3ème : 10 000€"
      ],
      registrationDeadline: "2024-03-14",
      tags: [
        { name: "Marathon", color: "bg-green-100 text-green-800" },
        { name: "International", color: "bg-blue-100 text-blue-800" }
      ],
      participants: 45000,
      maxParticipants: 50000,
      likes: 567,
      shares: 234,
      status: 'upcoming'
    },
    {
      id: 3,
      title: "Championnat de France de Judo",
      organizer: "Fédération Française de Judo",
      organizerLogo: "https://images.unsplash.com/photo-1550597734-2d600abe0fd8?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1550597734-2d600abe0fd8?w=1200&auto=format&fit=crop",
      location: "Paris",
      date: "2024-05-20",
      description: "Compétition nationale regroupant l'élite du judo français.",
      requirements: [
        "Ceinture noire minimum",
        "Qualification régionale",
        "Licence FFJDA"
      ],
      categories: [
        "-60kg",
        "-66kg",
        "-73kg",
        "-81kg",
        "-90kg",
        "+90kg"
      ],
      prizes: [
        "Titre de Champion de France",
        "Sélection équipe nationale",
        "Prime de performance"
      ],
      registrationDeadline: "2024-04-20",
      tags: [
        { name: "Judo", color: "bg-blue-100 text-blue-800" },
        { name: "Elite", color: "bg-red-100 text-red-800" }
      ],
      participants: 250,
      maxParticipants: 300,
      likes: 289,
      shares: 123,
      status: 'upcoming'
    },
    {
      id: 4,
      title: "Open de France de Natation",
      organizer: "FFN",
      organizerLogo: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&auto=format&fit=crop",
      location: "Marseille",
      date: "2024-05-20",
      description: "Compétition majeure de natation en France.",
      requirements: [
        "Temps de qualification",
        "Licence FFN",
        "Catégorie Elite"
      ],
      categories: [
        "Nage libre",
        "Papillon",
        "Dos",
        "Brasse"
      ],
      prizes: [
        "1er : 10 000€",
        "2ème : 5 000€",
        "3ème : 2 500€"
      ],
      registrationDeadline: "2024-04-20",
      tags: [
        { name: "Natation", color: "bg-blue-100 text-blue-800" },
        { name: "National", color: "bg-purple-100 text-purple-800" }
      ],
      participants: 150,
      maxParticipants: 200,
      likes: 234,
      shares: 78,
      status: 'upcoming'
    },
    {
      id: 5,
      title: "Championnat de France d'Athlétisme",
      organizer: "FFA",
      organizerLogo: "https://images.unsplash.com/photo-1539616246908-0ce2c788a3f3?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1539616246908-0ce2c788a3f3?w=1200&auto=format&fit=crop",
      location: "Lille",
      date: "2024-05-25",
      description: "Les championnats de France d'athlétisme Elite.",
      requirements: [
        "Minima réalisés",
        "Licence FFA",
        "Sélection régionale"
      ],
      categories: [
        "Sprint",
        "Demi-fond",
        "Sauts",
        "Lancers"
      ],
      prizes: [
        "Titres nationaux",
        "Primes de performance",
        "Sélection équipe de France"
      ],
      registrationDeadline: "2024-05-01",
      tags: [
        { name: "Athlétisme", color: "bg-blue-100 text-blue-800" },
        { name: "Elite", color: "bg-red-100 text-red-800" }
      ],
      participants: 400,
      maxParticipants: 500,
      likes: 312,
      shares: 145,
      status: 'upcoming'
    }
  ]);

  if (selectedCompetition) {
    return (
      <CompetitionDetail
        competition={selectedCompetition}
        onBack={() => setSelectedCompetition(null)}
      />
    );
  }

  const competitionsByDate = competitions.reduce((acc, competition) => {
    const date = new Date(competition.date);
    const dateKey = date.toISOString();
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(competition);
    return acc;
  }, {} as Record<string, Competition[]>);

  const sortedDates = Object.keys(competitionsByDate).sort();

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200" />

      <div className="space-y-12">
        {sortedDates.map((dateKey) => {
          const date = new Date(dateKey);
          
          return (
            <div key={dateKey} className="relative">
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-md" />
              
              <div className="ml-16 mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}
                </h3>
              </div>

              <div className="ml-16 space-y-4">
                {competitionsByDate[dateKey].map((competition) => (
                  <div
                    key={competition.id}
                    onClick={() => setSelectedCompetition(competition)}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden h-48"
                  >
                    <div className="flex h-full">
                      <div className="w-56 relative">
                        <img
                          src={competition.banner}
                          alt={competition.title}
                          className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-2 left-2 flex items-center space-x-2">
                          <img
                            src={competition.organizerLogo}
                            alt={competition.organizer}
                            className="w-10 h-10 rounded-full border-2 border-white"
                          />
                          <div className="text-white">
                            <p className="text-sm font-medium">{competition.organizer}</p>
                            <p className="text-xs opacity-80">{competition.categories[0]}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{competition.title}</h4>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            competition.status === 'upcoming' ? 'bg-green-50 text-green-600' :
                            competition.status === 'ongoing' ? 'bg-blue-50 text-blue-600' :
                            'bg-gray-50 text-gray-600'
                          }`}>
                            {competition.status === 'upcoming' ? 'À venir' :
                             competition.status === 'ongoing' ? 'En cours' :
                             'Terminé'}
                          </span>
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center text-gray-500">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{new Date(competition.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{competition.location}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Users className="w-4 h-4 mr-2" />
                            <span>{competition.participants}/{competition.maxParticipants} participants</span>
                          </div>
                        </div>

                        <div className="border-t border-gray-100 my-2"></div>

                        <div className="flex items-center justify-between">
                          <div className="flex space-x-4 text-gray-500">
                            <span className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {competition.likes}
                            </span>
                            <span className="flex items-center">
                              <Share2 className="w-4 h-4 mr-1" />
                              {competition.shares}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {competition.tags.map((tag, index) => (
                              <span
                                key={index}
                                className={`px-2 py-1 rounded-full text-xs font-medium ${tag.color}`}
                              >
                                {tag.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}