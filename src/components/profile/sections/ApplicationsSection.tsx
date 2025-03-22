import React from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

interface Application {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  status: 'pending' | 'accepted' | 'rejected';
  logo: string;
}

export function ApplicationsSection() {
  const applications: Application[] = [
    {
      id: 1,
      title: "Responsable Performance & Data",
      company: "Paris Saint-Germain",
      location: "Paris",
      date: "Postulé le 15 mars 2024",
      status: "pending",
      logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&h=100&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Coach Mental pour Athlètes",
      company: "INSEP",
      location: "Paris",
      date: "Postulé le 10 mars 2024",
      status: "accepted",
      logo: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100&h=100&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Briefcase className="w-6 h-6 text-indigo-600" />
        <h3 className="text-lg font-semibold text-gray-900">Candidatures</h3>
      </div>

      <div className="space-y-6">
        {applications.map((application) => (
          <div 
            key={application.id}
            className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <img
              src={application.logo}
              alt={application.company}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between">
                <h4 className="font-medium text-gray-900">{application.title}</h4>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  application.status === 'accepted' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {application.status === 'pending' ? 'En attente' :
                   application.status === 'accepted' ? 'Acceptée' :
                   'Refusée'}
                </span>
              </div>
              <div className="mt-1 text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>{application.company}</span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {application.location}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {application.date}
                  </span>
                </div>
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