import React from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  organizer: string;
  date: string;
  location: string;
  attendees: number;
  maxAttendees: number;
  image: string;
  status: 'upcoming' | 'past' | 'cancelled';
}

export function EventsSection() {
  const events: Event[] = [
    {
      id: 1,
      title: "Forum des Athlètes 2024",
      organizer: "INSEP",
      date: "15 avril 2024",
      location: "Paris",
      attendees: 150,
      maxAttendees: 200,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=100&auto=format&fit=crop",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Workshop Reconversion Sportive",
      organizer: "FFF",
      date: "20 avril 2024",
      location: "Lyon",
      attendees: 45,
      maxAttendees: 50,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=100&auto=format&fit=crop",
      status: "upcoming"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Calendar className="w-6 h-6 text-indigo-600" />
        <h3 className="text-lg font-semibold text-gray-900">Événements</h3>
      </div>

      <div className="space-y-6">
        {events.map((event) => (
          <div 
            key={event.id}
            className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-900">{event.title}</h4>
                  <p className="text-sm text-gray-500">{event.organizer}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.status === 'upcoming' ? 'bg-green-100 text-green-800' :
                  event.status === 'past' ? 'bg-gray-100 text-gray-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {event.status === 'upcoming' ? 'À venir' :
                   event.status === 'past' ? 'Passé' :
                   'Annulé'}
                </span>
              </div>
              
              <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {event.date}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {event.location}
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {event.attendees}/{event.maxAttendees} participants
                </span>
              </div>
            </div>

            <button className="p-2 text-gray-400 hover:text-indigo-600">
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}