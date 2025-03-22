import { ProfileData } from '../types/profile';

export const DEFAULT_PROFILE: ProfileData = {
  name: "Claire Moreau",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
  banner: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop",
  location: "Paris, France",
  sport: "Sportif au PSG",
  status: "En activité",
  currentClub: "PSG",
  currentCompany: "",
  level: "National",
  recherche: "en recherche de travail",
  email: "",
  phone: "",
  birthDate: "",
  bio: "The 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived surviva. It has survivas survivas survived not only five centuries...",

  specialties: [],
  achievements: [
    {
      title: "League des Nations 2022",
      date: "2022",
      description: "",
      type: "competition"
    },
    {
      title: "League des Nations 2022",
      date: "2022",
      description: "",
      type: "competition"
    },
    {
      title: "League des Nations 2025",
      date: "2025",
      description: "",
      type: "competition"
    }
  ],
  skills: [],
  experience: [],
  education: [],
  certifications: [],
  interests: [],
  languages: [],
  volunteering: [],
  publications: [],

  availability: {
    status: "À définir",
    type: ["Temps plein"]
  },

  mobility: {
    willing: true,
    locations: ["Paris"],
    international: false
  },

  careerObjectives: {
    shortTerm: "",
    longTerm: "",
    industries: [],
    roles: []
  },

  socialLinks: {
    linkedin: "",
    twitter: "",
    instagram: "",
    website: ""
  },

  contactPreferences: {
    email: true,
    phone: true,
    messaging: true,
    bestTimeToContact: ""
  }
};