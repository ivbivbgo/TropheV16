import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, Tag, Heart, MessageCircle, Share2, Trophy, Users, Star, Clock } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  organizer: string;
  organizerLogo: string;
  banner: string;
  location: string;
  date: string;
  time: string;
  description: string;
  type: string;
  requirements: string[];
  capacity: {
    total: number;
    registered: number;
  };
  price: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
  likes: number;
  shares: number;
  status: 'upcoming' | 'ongoing' | 'past';
  speakers?: Array<{
    name: string;
    role: string;
    avatar: string;
  }>;
  schedule?: Array<{
    time: string;
    title: string;
    description: string;
  }>;
}

interface EventDetailProps {
  event: Event;
  onBack: () => void;
}

function EventDetail({ event, onBack }: EventDetailProps) {
  const [hasApplied, setHasApplied] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="relative h-80">
          <img 
            src={event.banner}
            alt={event.title}
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
              src={event.organizerLogo}
              alt={event.organizer}
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{event.organizer}</h3>
              <div className="flex items-center space-x-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{event.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-5 h-5 text-indigo-500" />
                <span className="font-medium text-gray-900">Date et heure</span>
              </div>
              <p className="text-gray-600">{new Date(event.date).toLocaleDateString()} - {event.time}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-5 h-5 text-indigo-500" />
                <span className="font-medium text-gray-900">Participants</span>
              </div>
              <p className="text-gray-600">{event.capacity.registered}/{event.capacity.total} inscrits</p>
            </div>
          </div>

          {event.speakers && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Intervenants</h2>
              <div className="grid grid-cols-2 gap-4">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
                    <img
                      src={speaker.avatar}
                      alt={speaker.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{speaker.name}</h4>
                      <p className="text-sm text-gray-500">{speaker.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {event.schedule && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Programme</h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-24 flex-shrink-0 font-medium text-indigo-600">
                      {item.time}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Prérequis</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              {event.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {event.tags.map((tag, index) => (
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
                <span>{event.likes}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-blue-500">
                <Users className="w-5 h-5" />
                <span>{event.capacity.registered}/{event.capacity.total}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-green-500">
                <Share2 className="w-5 h-5" />
                <span>{event.shares}</span>
              </button>
            </div>
            {event.status === 'upcoming' && (
              <button
                onClick={() => setHasApplied(!hasApplied)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  hasApplied
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {hasApplied ? 'Inscription confirmée' : "S'inscrire"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "Forum des Athlètes 2024",
      organizer: "INSEP",
      organizerLogo: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop",
      location: "Paris",
      date: "2024-04-15",
      time: "09:00 - 18:00",
      description: "Une journée dédiée à la reconversion des athlètes avec des conférences, des ateliers et des rencontres avec des professionnels.",
      type: "Forum",
      requirements: [
        "Être athlète de haut niveau",
        "Inscription préalable obligatoire",
        "CV à jour"
      ],
      capacity: {
        total: 200,
        registered: 150
      },
      price: "Gratuit",
      tags: [
        { name: "Reconversion", color: "bg-blue-100 text-blue-800" },
        { name: "Networking", color: "bg-purple-100 text-purple-800" }
      ],
      likes: 189,
      shares: 67,
      status: 'upcoming',
      speakers: [
        {
          name: "Marie Laurent",
          role: "Directrice Performance INSEP",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60"
        },
        {
          name: "Thomas Bernard",
          role: "Expert Reconversion",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
        }
      ],
      schedule: [
        {
          time: "09:00",
          title: "Accueil des participants",
          description: "Café d'accueil et networking"
        },
        {
          time: "10:00",
          title: "Conférence d'ouverture",
          description: "Les enjeux de la reconversion sportive"
        }
      ]
    },
    {
      id: 2,
      title: "Atelier Préparation Mentale",
      organizer: "INSEP",
      organizerLogo: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&auto=format&fit=crop",
      location: "Paris",
      date: "2024-04-15",
      time: "14:00 - 17:00",
      description: "Atelier de préparation mentale pour optimiser ses performances.",
      type: "Workshop",
      requirements: ["Athlètes de haut niveau", "Inscription obligatoire"],
      capacity: { total: 30, registered: 25 },
      price: "Gratuit",
      tags: [
        { name: "Mental", color: "bg-purple-100 text-purple-800" },
        { name: "Performance", color: "bg-green-100 text-green-800" }
      ],
      likes: 145,
      shares: 34,
      status: 'upcoming'
    },
    {
      id: 3,
      title: "Conférence Tech & Sport",
      organizer: "SportTech France",
      organizerLogo: "https://images.unsplash.com/photo-1642132652075-2b0f6e6c858f?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1642132652075-2b0f6e6c858f?w=1200&auto=format&fit=crop",
      location: "Paris",
      date: "2024-04-15",
      time: "18:00 - 20:00",
      description: "L'impact des nouvelles technologies sur la performance sportive.",
      type: "Conférence",
      requirements: ["Ouvert à tous", "Inscription requise"],
      capacity: { total: 150, registered: 120 },
      price: "15€",
      tags: [
        { name: "Tech", color: "bg-blue-100 text-blue-800" },
        { name: "Innovation", color: "bg-purple-100 text-purple-800" }
      ],
      likes: 167,
      shares: 45,
      status: 'upcoming'
    },
    {
      id: 4,
      title: "Workshop Reconversion Sportive",
      organizer: "FFF",
      organizerLogo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&auto=format&fit=crop",
      location: "Lyon",
      date: "2024-04-17",
      time: "14:00 - 17:00",
      description: "Atelier pratique sur les opportunités de carrière dans le sport.",
      type: "Workshop",
      requirements: ["Footballeurs pro", "Licence FFF active"],
      capacity: { total: 50, registered: 45 },
      price: "30€",
      tags: [
        { name: "Football", color: "bg-green-100 text-green-800" },
        { name: "Formation", color: "bg-orange-100 text-orange-800" }
      ],
      likes: 156,
      shares: 45,
      status: 'upcoming'
    },
    {
      id: 5,
      title: "Journée Networking Sport Business",
      organizer: "HEC Paris",
      organizerLogo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop",
      location: "Paris",
      date: "2024-04-17",
      time: "09:00 - 18:00",
      description: "Rencontres professionnelles dans le secteur du sport business.",
      type: "Networking",
      requirements: ["Profil business", "Sur invitation"],
      capacity: { total: 100, registered: 80 },
      price: "50€",
      tags: [
        { name: "Business", color: "bg-blue-100 text-blue-800" },
        { name: "Networking", color: "bg-purple-100 text-purple-800" }
      ],
      likes: 234,
      shares: 89,
      status: 'upcoming'
    },
    {
      id: 6,
      title: "Formation Management Sportif",
      organizer: "ESC Clermont",
      organizerLogo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop",
      location: "Clermont-Ferrand",
      date: "2024-04-22",
      time: "09:00 - 17:00",
      description: "Formation intensive en management du sport.",
      type: "Formation",
      requirements: ["Bac+3 minimum", "Expérience sport"],
      capacity: { total: 40, registered: 35 },
      price: "500€",
      tags: [
        { name: "Management", color: "bg-blue-100 text-blue-800" },
        { name: "Formation", color: "bg-green-100 text-green-800" }
      ],
      likes: 178,
      shares: 56,
      status: 'upcoming'
    },
    {
      id: 7,
      title: "Séminaire Médias Sportifs",
      organizer: "ESJ Lille",
      organizerLogo: "https://images.unsplash.com/photo-1557425955-df376b5903c8?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1557425955-df376b5903c8?w=1200&auto=format&fit=crop",
      location: "Lille",
      date: "2024-04-22",
      time: "10:00 - 16:00",
      description: "Découverte des métiers des médias sportifs.",
      type: "Séminaire",
      requirements: ["Tous niveaux", "Intérêt médias"],
      capacity: { total: 80, registered: 65 },
      price: "Gratuit",
      tags: [
        { name: "Médias", color: "bg-purple-100 text-purple-800" },
        { name: "Communication", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 145,
      shares: 43,
      status: 'upcoming'
    },
    {
      id: 8,
      title: "Forum Entrepreneuriat Sportif",
      organizer: "MEDEF Sport",
      organizerLogo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop",
      location: "Lyon",
      date: "2024-04-29",
      time: "09:00 - 18:00",
      description: "Forum dédié à l'entrepreneuriat dans le sport.",
      type: "Forum",
      requirements: ["Projet entrepreneurial", "Inscription"],
      capacity: { total: 200, registered: 150 },
      price: "20€",
      tags: [
        { name: "Entrepreneuriat", color: "bg-green-100 text-green-800" },
        { name: "Business", color: "bg-blue-100 text-blue-800" }
      ],
      likes: 289,
      shares: 112,
      status: 'upcoming'
    },
    {
      id: 9,
      title: "Atelier Personal Branding",
      organizer: "LinkedIn Sport",
      organizerLogo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1552581234-26160f608093?w=1200&auto=format&fit=crop",
      location: "Paris",
      date: "2024-04-29",
      time: "14:00 - 17:00",
      description: "Développez votre marque personnelle d'athlète.",
      type: "Workshop",
      requirements: ["Profil LinkedIn", "Appareil connecté"],
      capacity: { total: 50, registered: 40 },
      price: "30€",
      tags: [
        { name: "Digital", color: "bg-blue-100 text-blue-800" },
        { name: "Personal Brand", color: "bg-purple-100 text-purple-800" }
      ],
      likes: 167,
      shares: 78,
      status: 'upcoming'
    },
    {
      id: 10,
      title: "Conférence Sport & Data",
      organizer: "SportTech Hub",
      organizerLogo: "https://images.unsplash.com/photo-1642132652075-2b0f6e6c858f?w=100&h=100&auto=format&fit=crop",
      banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop",
      location: "Paris",
      date: "2024-04-29",
      time: "18:00 - 20:00",
      description: "L'utilisation des données dans le sport moderne.",
      type: "Conférence",
      requirements: ["Ouvert à tous", "Inscription obligatoire"],
      capacity: { total: 120, registered: 90 },
      price: "Gratuit",
      tags: [
        { name: "Data", color: "bg-blue-100 text-blue-800" },
        { name: "Innovation", color: "bg-green-100 text-green-800" }
      ],
      likes: 198,
      shares: 67,
      status: 'upcoming'
    }
  ]);

  if (selectedEvent) {
    return (
      <EventDetail
        event={selectedEvent}
        onBack={() => setSelectedEvent(null)}
      />
    );
  }

  // Group events by week
  const eventsByWeek = events.reduce((acc, event) => {
    const eventDate = new Date(event.date);
    const weekStart = new Date(eventDate);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay());
    const weekKey = weekStart.toISOString();

    if (!acc[weekKey]) {
      acc[weekKey] = [];
    }
    acc[weekKey].push(event);
    return acc;
  }, {} as Record<string, Event[]>);

  const sortedWeeks = Object.keys(eventsByWeek).sort();

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200" />

      <div className="space-y-12">
        {sortedWeeks.map((weekKey) => {
          const weekStart = new Date(weekKey);
          const weekEnd = new Date(weekStart);
          weekEnd.setDate(weekEnd.getDate() + 6);

          return (
            <div key={weekKey} className="relative">
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-md" />
              
              <div className="ml-16 mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {weekStart.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })} - {weekEnd.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}
                </h3>
              </div>

              <div className="ml-16 space-y-4">
                {eventsByWeek[weekKey].map((event) => (
                  <div
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden h-48"
                  >
                    <div className="flex h-full">
                      <div className="w-56 relative">
                        <img
                          src={event.banner}
                          alt={event.title}
                          className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-2 left-2 flex items-center space-x-2">
                          <img
                            src={event.organizerLogo}
                            alt={event.organizer}
                            className="w-10 h-10 rounded-full border-2 border-white"
                          />
                          <div className="text-white">
                            <p className="text-sm font-medium">{event.organizer}</p>
                            <p className="text-xs opacity-80">{event.type}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{event.title}</h4>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            event.status === 'upcoming' ? 'bg-green-50 text-green-600' :
                            event.status === 'ongoing' ? 'bg-blue-50 text-blue-600' :
                            'bg-gray-50 text-gray-600'
                          }`}>
                            {event.status === 'upcoming' ? 'À venir' :
                             event.status === 'ongoing' ? 'En cours' :
                             'Terminé'}
                          </span>
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center text-gray-500">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{new Date(event.date).toLocaleDateString()} - {event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Users className="w-4 h-4 mr-2" />
                            <span>{event.capacity.registered}/{event.capacity.total} participants</span>
                          </div>
                        </div>

                        <div className="border-t border-gray-100 my-2"></div>

                        <div className="flex items-center justify-between">
                          <div className="flex space-x-4 text-gray-500">
                            <span className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {event.likes}
                            </span>
                            <span className="flex items-center">
                              <Share2 className="w-4 h-4 mr-1" />
                              {event.shares}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {event.tags.map((tag, index) => (
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