import { Establishment } from '../types/establishments';

export const ESTABLISHMENTS: Establishment[] = [
  {
    id: 1,
    name: "INSEP",
    logo: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1200&auto=format&fit=crop",
    type: "Formation",
    location: "Paris",
    description: "Institut National du Sport, de l'Expertise et de la Performance - Centre d'excellence pour les athlètes de haut niveau",
    specialties: ["Sport de haut niveau", "Formation", "Recherche", "Préparation olympique"],
    accreditations: ["Ministère des Sports", "Education Nationale"],
    website: "https://www.insep.fr",
    contact: {
      email: "contact@insep.fr",
      phone: "01 41 74 41 00",
      address: "11 avenue du Tremblay, 75012 Paris"
    }
  },
  {
    id: 2,
    name: "HEC Paris",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop",
    type: "École",
    location: "Jouy-en-Josas",
    description: "Programme Grande École adapté aux sportifs de haut niveau avec aménagement des études",
    specialties: ["Management", "Finance", "Entrepreneuriat", "Programme SHN"],
    accreditations: ["EQUIS", "AACSB", "AMBA"],
    website: "https://www.hec.fr",
    contact: {
      email: "info@hec.fr",
      phone: "01 39 67 70 00",
      address: "1 Rue de la Libération, 78350 Jouy-en-Josas"
    }
  },
  {
    id: 3,
    name: "CREPS IDF",
    logo: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&auto=format&fit=crop",
    type: "Formation",
    location: "Châtenay-Malabry",
    description: "Centre de Ressources, d'Expertise et de Performance Sportive d'Île-de-France",
    specialties: ["Formation sportive", "Préparation physique", "Coaching", "BPJEPS"],
    accreditations: ["Ministère des Sports"],
    website: "https://www.creps-idf.fr",
    contact: {
      email: "contact@creps-idf.fr",
      phone: "01 41 87 20 30",
      address: "1 Rue du Docteur le Savoureux, 92290 Châtenay-Malabry"
    }
  },
  {
    id: 4,
    name: "Université Paris-Saclay",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&auto=format&fit=crop",
    type: "Université",
    location: "Saclay",
    description: "Aménagements spécifiques pour les sportifs de haut niveau dans toutes les filières",
    specialties: ["Sciences", "STAPS", "Management du Sport", "Doubles cursus"],
    accreditations: ["Ministère de l'Enseignement Supérieur"],
    website: "https://www.universite-paris-saclay.fr",
    contact: {
      email: "contact@universite-paris-saclay.fr",
      phone: "01 69 15 67 50",
      address: "Plateau de Saclay, 91190 Gif-sur-Yvette"
    }
  },
  {
    id: 5,
    name: "ESC Clermont",
    logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop",
    type: "École",
    location: "Clermont-Ferrand",
    description: "Programme Grande École avec parcours aménagé pour sportifs de haut niveau",
    specialties: ["Management du Sport", "Marketing Sportif", "Entrepreneuriat"],
    accreditations: ["AACSB", "EFMD"],
    website: "https://www.esc-clermont.fr",
    contact: {
      email: "info@esc-clermont.fr",
      phone: "04 73 98 24 24",
      address: "4 Boulevard Trudaine, 63000 Clermont-Ferrand"
    }
  },
  {
    id: 6,
    name: "Université Claude Bernard Lyon 1",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop",
    type: "Université",
    location: "Lyon",
    description: "UFR STAPS avec parcours adaptés aux sportifs de haut niveau",
    specialties: ["STAPS", "Sciences du Sport", "Management Sportif", "Kinésithérapie"],
    accreditations: ["Ministère de l'Enseignement Supérieur"],
    website: "https://www.univ-lyon1.fr",
    contact: {
      email: "contact@univ-lyon1.fr",
      phone: "04 72 44 80 00",
      address: "43 Boulevard du 11 Novembre 1918, 69100 Villeurbanne"
    }
  },
  {
    id: 7,
    name: "TBS Education",
    logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop",
    type: "École",
    location: "Toulouse",
    description: "École de commerce proposant un cursus adapté aux sportifs de haut niveau",
    specialties: ["Management", "Marketing Sportif", "Finance", "Double Cursus SHN"],
    accreditations: ["EQUIS", "AACSB", "AMBA"],
    website: "https://www.tbs-education.fr",
    contact: {
      email: "contact@tbs-education.fr",
      phone: "05 61 29 49 49",
      address: "1 Place Alphonse Jourdain, 31000 Toulouse"
    }
  },
  {
    id: 8,
    name: "EDHEC Business School",
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=1200&auto=format&fit=crop",
    type: "École",
    location: "Lille",
    description: "Programme Grande École avec aménagements pour sportifs de haut niveau",
    specialties: ["Finance", "Management", "Marketing", "Programme Elite Sport"],
    accreditations: ["EQUIS", "AACSB", "AMBA"],
    website: "https://www.edhec.edu",
    contact: {
      email: "info@edhec.edu",
      phone: "03 20 15 45 00",
      address: "24 Avenue Gustave Delory, 59100 Roubaix"
    }
  }
];