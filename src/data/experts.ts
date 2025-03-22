import { Expert } from '../types/experts';

export const EXPERTS: Expert[] = [
  {
    id: 1,
    name: "Dr. Philippe Martin",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
    banner: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop",
    specialty: "Reconversion Sportive",
    location: "Paris",
    experience: "15 ans",
    certification: "Doctorat en Psychologie du Sport",
    organization: "INSEP",
    discipline: "Tout Sport",
    availability: "Sur rendez-vous",
    expertise: ["Carrière", "Mental", "Bilan"],
    successStories: 150
  },
  {
    id: 2,
    name: "Marie Laurent",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    banner: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop",
    specialty: "Formation Professionnelle",
    location: "Lyon",
    experience: "12 ans",
    certification: "Master en Sciences de l'Éducation",
    organization: "AFDAS",
    discipline: "Football",
    availability: "Flexible",
    expertise: ["Formation", "Développement", "Orientation"],
    successStories: 200
  },
  {
    id: 3,
    name: "Marc Dubois",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&auto=format&fit=crop&q=60",
    banner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop",
    specialty: "Entrepreneuriat Sportif",
    location: "Bordeaux",
    experience: "10 ans",
    certification: "MBA HEC Paris",
    organization: "Indépendant",
    discipline: "Tennis",
    availability: "Sur rendez-vous",
    expertise: ["Entrepreneuriat", "Business", "Finance"],
    successStories: 75
  }
];