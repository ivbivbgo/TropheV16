import { Club } from '../types/clubs';

export const CLUBS: Club[] = [
  {
    id: 1,
    name: "Paris Saint-Germain",
    logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=1200&auto=format&fit=crop",
    type: "Club",
    sport: "Football",
    location: "Paris",
    description: "Club professionnel de football basé à Paris",
    level: "Professionnel",
    website: "https://www.psg.fr",
    contact: {
      email: "contact@psg.fr",
      phone: "01 47 43 71 71",
      address: "24 Rue du Commandant Guilbaud, 75016 Paris"
    }
  },
  {
    id: 2,
    name: "Fédération Française de Football",
    logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&auto=format&fit=crop",
    type: "Fédération",
    sport: "Football",
    location: "Paris",
    description: "Fédération nationale de football",
    level: "National",
    website: "https://www.fff.fr",
    contact: {
      email: "contact@fff.fr",
      phone: "01 44 31 73 00",
      address: "87 Boulevard de Grenelle, 75015 Paris"
    }
  },
  {
    id: 3,
    name: "ASVEL Lyon-Villeurbanne",
    logo: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1200&auto=format&fit=crop",
    type: "Club",
    sport: "Basketball",
    location: "Villeurbanne",
    description: "Club professionnel de basketball",
    level: "Professionnel",
    website: "https://www.asvel.com",
    contact: {
      email: "contact@asvel.com",
      phone: "04 72 73 09 50",
      address: "451 Cours Émile Zola, 69100 Villeurbanne"
    }
  },
  {
    id: 4,
    name: "Fédération Française de Basketball",
    logo: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=1200&auto=format&fit=crop",
    type: "Fédération",
    sport: "Basketball",
    location: "Paris",
    description: "Fédération nationale de basketball",
    level: "National",
    website: "https://www.ffbb.com",
    contact: {
      email: "contact@ffbb.com",
      phone: "01 53 94 25 00",
      address: "117 Rue du Château des Rentiers, 75013 Paris"
    }
  },
  {
    id: 5,
    name: "Stade Toulousain",
    logo: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?w=1200&auto=format&fit=crop",
    type: "Club",
    sport: "Rugby",
    location: "Toulouse",
    description: "Club professionnel de rugby",
    level: "Professionnel",
    website: "https://www.stadetoulousain.fr",
    contact: {
      email: "contact@stadetoulousain.fr",
      phone: "05 34 42 24 22",
      address: "114 Rue des Troènes, 31200 Toulouse"
    }
  },
  {
    id: 6,
    name: "Fédération Française de Tennis",
    logo: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200&auto=format&fit=crop",
    type: "Fédération",
    sport: "Tennis",
    location: "Paris",
    description: "Fédération nationale de tennis",
    level: "National",
    website: "https://www.fft.fr",
    contact: {
      email: "contact@fft.fr",
      phone: "01 47 43 48 00",
      address: "89 Rue Escudier, 92100 Boulogne-Billancourt"
    }
  },
  {
    id: 7,
    name: "Olympique de Marseille",
    logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=1200&auto=format&fit=crop",
    type: "Club",
    sport: "Football",
    location: "Marseille",
    description: "Club professionnel de football basé à Marseille",
    level: "Professionnel",
    website: "https://www.om.fr",
    contact: {
      email: "contact@om.fr",
      phone: "04 91 76 44 00",
      address: "33 Traverse de la Martine, 13012 Marseille"
    }
  },
  {
    id: 8,
    name: "Fédération Française de Judo",
    logo: "https://images.unsplash.com/photo-1550597734-2d600abe0fd8?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1550597734-2d600abe0fd8?w=1200&auto=format&fit=crop",
    type: "Fédération",
    sport: "Judo",
    location: "Paris",
    description: "Fédération nationale de judo et disciplines associées",
    level: "National",
    website: "https://www.ffjudo.com",
    contact: {
      email: "contact@ffjudo.com",
      phone: "01 40 52 16 16",
      address: "21-25 Avenue de la Porte de Châtillon, 75014 Paris"
    }
  },
  {
    id: 9,
    name: "Racing 92",
    logo: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?w=1200&auto=format&fit=crop",
    type: "Club",
    sport: "Rugby",
    location: "Paris",
    description: "Club professionnel de rugby basé en région parisienne",
    level: "Professionnel",
    website: "https://www.racing92.fr",
    contact: {
      email: "contact@racing92.fr",
      phone: "01 47 92 00 00",
      address: "11 Avenue du Plessis, 92350 Le Plessis-Robinson"
    }
  },
  {
    id: 10,
    name: "Fédération Française d'Athlétisme",
    logo: "https://images.unsplash.com/photo-1539616246908-0ce2c788a3f3?w=100&h=100&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1539616246908-0ce2c788a3f3?w=1200&auto=format&fit=crop",
    type: "Fédération",
    sport: "Athlétisme",
    location: "Paris",
    description: "Fédération nationale d'athlétisme",
    level: "National",
    website: "https://www.athle.fr",
    contact: {
      email: "contact@athle.fr",
      phone: "01 53 80 70 00",
      address: "33 Avenue Pierre de Coubertin, 75013 Paris"
    }
  }
];