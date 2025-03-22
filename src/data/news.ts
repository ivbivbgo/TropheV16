import { Institution } from './institutions';

export interface Institution {
  id: number;
  name: string;
  logo: string;
  website: string;
  banner: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  category: 'institutions' | 'clubs' | 'medias' | 'entreprises' | 'personal';
  author: string;
  authorImage: string;
  authorRole?: string;
  institution?: Institution;
  likes: number;
  comments: number;
  shares: number;
  tags?: Array<{ name: string; color: string; }>;
  isPersonal?: boolean;
}

export const NEWS_POSTS: Post[] = [
  // Personal Posts (5)
  {
    id: 21,
    title: "Mon expérience de reconversion réussie",
    content: "Après 10 ans en tant que gymnaste professionnelle, j'ai réussi ma transition vers le consulting en performance. Voici mon parcours et mes conseils pour ceux qui envisagent ce changement.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop",
    date: "Il y a 1 jour",
    category: "personal",
    author: "Sophie Martin",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    authorRole: "Ex-gymnaste, Consultante Performance",
    likes: 342,
    comments: 87,
    shares: 56,
    tags: [
      { name: "Reconversion", color: "bg-purple-100 text-purple-800" },
      { name: "Success", color: "bg-green-100 text-green-800" }
    ],
    isPersonal: true
  },
  {
    id: 22,
    title: "Du terrain au bureau : mon nouveau défi",
    content: "La transition du football professionnel vers l'entrepreneuriat n'a pas été facile, mais elle m'a permis de développer de nouvelles compétences passionnantes.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop",
    date: "Il y a 2 jours",
    category: "personal",
    author: "Thomas Bernard",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    authorRole: "Ex-footballeur, Entrepreneur",
    likes: 287,
    comments: 54,
    shares: 42,
    tags: [
      { name: "Entrepreneuriat", color: "bg-blue-100 text-blue-800" },
      { name: "Innovation", color: "bg-purple-100 text-purple-800" }
    ],
    isPersonal: true
  },
  {
    id: 23,
    title: "Formation continue : mon retour d'expérience",
    content: "Comment j'ai réussi à combiner ma carrière d'athlète avec une formation en management. Les défis, les succès et les leçons apprises.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop",
    date: "Il y a 3 jours",
    category: "personal",
    author: "Julie Dubois",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
    authorRole: "Athlète & Étudiante",
    likes: 245,
    comments: 67,
    shares: 38,
    tags: [
      { name: "Formation", color: "bg-green-100 text-green-800" },
      { name: "Double Projet", color: "bg-blue-100 text-blue-800" }
    ],
    isPersonal: true
  },
  {
    id: 24,
    title: "Le mental dans la reconversion sportive",
    content: "La préparation mentale ne s'arrête pas à la fin de la carrière sportive. Voici comment j'utilise ces compétences dans ma nouvelle vie professionnelle.",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1200&auto=format&fit=crop",
    date: "Il y a 4 jours",
    category: "personal",
    author: "Marc Leroy",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
    authorRole: "Ex-judoka, Coach Mental",
    likes: 312,
    comments: 89,
    shares: 67,
    tags: [
      { name: "Mental", color: "bg-purple-100 text-purple-800" },
      { name: "Développement", color: "bg-blue-100 text-blue-800" }
    ],
    isPersonal: true
  },
  {
    id: 25,
    title: "De sportive à entrepreneuse tech",
    content: "Comment ma passion pour le sport m'a conduite à créer une startup dans la tech. Les parallèles surprenants entre le sport de haut niveau et l'entrepreneuriat.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop",
    date: "Il y a 5 jours",
    category: "personal",
    author: "Emma Laurent",
    authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&auto=format&fit=crop&q=60",
    authorRole: "Ex-tenniswoman, CEO Startup",
    likes: 378,
    comments: 92,
    shares: 84,
    tags: [
      { name: "Tech", color: "bg-blue-100 text-blue-800" },
      { name: "Startup", color: "bg-purple-100 text-purple-800" }
    ],
    isPersonal: true
  },

  // Existing posts...
  {
    id: 1,
    title: "Nouveau programme d'accompagnement des athlètes",
    content: "Le Ministère des Sports lance un programme innovant pour accompagner les athlètes dans leur double projet.",
    image: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?w=1200&auto=format&fit=crop",
    date: "Il y a 2 jours",
    category: "institutions",
    author: "Ministère des Sports",
    authorImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100&auto=format&fit=crop",
    authorRole: "Direction des Sports",
    likes: 345,
    comments: 89,
    shares: 167,
    tags: [
      { name: "Programme", color: "bg-blue-100 text-blue-800" },
      { name: "Accompagnement", color: "bg-green-100 text-green-800" }
    ]
  },
  {
    id: 2,
    title: "L'INSEP renforce son dispositif de formation",
    content: "Nouveau partenariat avec des grandes écoles pour faciliter la reconversion des athlètes.",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&auto=format&fit=crop",
    date: "Il y a 3 jours",
    category: "institutions",
    author: "INSEP",
    authorImage: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100&auto=format&fit=crop",
    authorRole: "Direction de la Formation",
    likes: 278,
    comments: 56,
    shares: 98,
    tags: [
      { name: "Formation", color: "bg-purple-100 text-purple-800" },
      { name: "Partenariat", color: "bg-blue-100 text-blue-800" }
    ]
  },
  {
    id: 3,
    title: "Lancement du programme Elite Sport Business",
    content: "HEC Paris lance un nouveau programme MBA dédié aux sportifs de haut niveau.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop",
    date: "Il y a 4 jours",
    category: "institutions",
    author: "HEC Paris",
    authorImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&auto=format&fit=crop",
    authorRole: "Direction des Programmes",
    likes: 312,
    comments: 78,
    shares: 145,
    tags: [
      { name: "MBA", color: "bg-blue-100 text-blue-800" },
      { name: "Business", color: "bg-purple-100 text-purple-800" }
    ]
  },
  {
    id: 4,
    title: "Nouveau centre de formation sportive",
    content: "Le CREPS inaugure un nouveau centre dédié à la formation des athlètes.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&auto=format&fit=crop",
    date: "Il y a 5 jours",
    category: "institutions",
    author: "CREPS",
    authorImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&auto=format&fit=crop",
    authorRole: "Direction",
    likes: 245,
    comments: 67,
    shares: 89,
    tags: [
      { name: "Formation", color: "bg-green-100 text-green-800" },
      { name: "Infrastructure", color: "bg-blue-100 text-blue-800" }
    ]
  },
  {
    id: 5,
    title: "Programme de mentorat pour athlètes",
    content: "L'AFDAS lance un programme de mentorat pour accompagner les sportifs.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop",
    date: "Il y a 6 jours",
    category: "institutions",
    author: "AFDAS",
    authorImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=100&auto=format&fit=crop",
    authorRole: "Service Formation",
    likes: 198,
    comments: 45,
    shares: 76,
    tags: [
      { name: "Mentorat", color: "bg-purple-100 text-purple-800" },
      { name: "Accompagnement", color: "bg-green-100 text-green-800" }
    ]
  },
  {
    id: 6,
    title: "Le PSG lance son académie de reconversion",
    content: "Le Paris Saint-Germain inaugure son académie dédiée à la reconversion des joueurs professionnels.",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=1200&auto=format&fit=crop",
    date: "Il y a 1 jour",
    category: "clubs",
    author: "Paris Saint-Germain",
    authorImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop",
    authorRole: "Direction de la Formation",
    likes: 567,
    comments: 123,
    shares: 89,
    tags: [
      { name: "Football", color: "bg-blue-100 text-blue-800" },
      { name: "Formation", color: "bg-green-100 text-green-800" }
    ]
  },
  {
    id: 7,
    title: "La FFR dévoile son plan de reconversion",
    content: "La Fédération Française de Rugby présente son nouveau programme d'accompagnement post-carrière.",
    image: "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?w=1200&auto=format&fit=crop",
    date: "Il y a 2 jours",
    category: "clubs",
    author: "FFR",
    authorImage: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=100&auto=format&fit=crop",
    authorRole: "Direction Sportive",
    likes: 432,
    comments: 87,
    shares: 65,
    tags: [
      { name: "Rugby", color: "bg-green-100 text-green-800" },
      { name: "Reconversion", color: "bg-blue-100 text-blue-800" }
    ]
  },
  {
    id: 8,
    title: "Programme de formation ASVEL",
    content: "L'ASVEL lance un programme de formation pour ses joueurs en fin de carrière.",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1200&auto=format&fit=crop",
    date: "Il y a 3 jours",
    category: "clubs",
    author: "ASVEL",
    authorImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&auto=format&fit=crop",
    authorRole: "Direction",
    likes: 345,
    comments: 78,
    shares: 56,
    tags: [
      { name: "Basketball", color: "bg-purple-100 text-purple-800" },
      { name: "Formation", color: "bg-blue-100 text-blue-800" }
    ]
  },
  {
    id: 9,
    title: "Initiative FFT pour jeunes talents",
    content: "La Fédération Française de Tennis lance un programme d'accompagnement professionnel.",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200&auto=format&fit=crop",
    date: "Il y a 4 jours",
    category: "clubs",
    author: "FFT",
    authorImage: "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?w=100&auto=format&fit=crop",
    authorRole: "Formation",
    likes: 289,
    comments: 67,
    shares: 45,
    tags: [
      { name: "Tennis", color: "bg-green-100 text-green-800" },
      { name: "Jeunes", color: "bg-blue-100 text-blue-800" }
    ]
  },
  {
    id: 10,
    title: "L'OM Academy se développe",
    content: "L'Olympique de Marseille étend son programme de formation professionnelle.",
    image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=1200&auto=format&fit=crop",
    date: "Il y a 5 jours",
    category: "clubs",
    author: "Olympique de Marseille",
    authorImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=100&auto=format&fit=crop",
    authorRole: "Academy",
    likes: 378,
    comments: 89,
    shares: 67,
    tags: [
      { name: "Football", color: "bg-blue-100 text-blue-800" },
      { name: "Academy", color: "bg-purple-100 text-purple-800" }
    ]
  },
  {
    id: 11,
    title: "L'Équipe lance une série sur la reconversion",
    content: "Une nouvelle série documentaire sur le parcours des athlètes après leur carrière sportive.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop",
    date: "Il y a 3 jours",
    category: "medias",
    author: "L'Équipe",
    authorImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=100&auto=format&fit=crop",
    authorRole: "Rédaction",
    likes: 345,
    comments: 78,
    shares: 156,
    tags: [
      { name: "Documentaire", color: "bg-purple-100 text-purple-800" },
      { name: "Médias", color: "bg-blue-100 text-blue-800" }
    ]
  },
  {
    id: 12,
    title: "France TV Sport explore les secondes carrières",
    content: "Une émission spéciale sur les athlètes qui ont réussi leur reconversion professionnelle.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&auto=format&fit=crop",
    date: "Il y a 4 jours",
    category: "medias",
    author: "France TV Sport",
    authorImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=100&auto=format&fit=crop",
    authorRole: "Production",
    likes: 289,
    comments: 56,
    shares: 98,
    tags: [
      { name: "TV", color: "bg-blue-100 text-blue-800" },
      { name: "Sport", color: "bg-green-100 text-green-800" }
    ]
  },
  {
    id: 13,
    title: "RMC Sport : Série sur les champions",
    content: "Nouvelle série documentaire sur les reconversions réussies.",
    image: "https://images.unsplash.com/photo-1586899028174-e7098604235b?w=1200&auto=format&fit=crop",
    date: "Il y a 5 jours",
    category: "medias",
    author: "RMC Sport",
    authorImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=100&auto=format&fit=crop",
    authorRole: "Production",
    likes: 267,
    comments: 89,
    shares: 123,
    tags: [
      { name: "Série", color: "bg-purple-100 text-purple-800" },
      { name: "Champions", color: "bg-blue-100 text-blue-800" }
    ]
  },
  {
    id: 14,
    title: "BeIN Sports : Parcours d'exception",
    content: "Portrait d'athlètes ayant réussi leur transition professionnelle.",
    image: "https://images.unsplash.com/photo-1495563923587-bdc4282494d0?w=1200&auto=format&fit=crop",
    date: "Il y a 6 jours",
    category: "medias",
    author: "BeIN Sports",
    authorImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=100&auto=format&fit=crop",
    authorRole: "Rédaction",
    likes: 312,
    comments: 67,
    shares: 89,
    tags: [
      { name: "Portrait", color: "bg-green-100 text-green-800" },
      { name: "Success", color: "bg-blue-100 text-blue-800" }
    ]
  },
  {
    id: 15,
    title: "Canal+ Sport : Reconversion des champions",
    content: "Documentaire sur les nouvelles carrières des champions.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop",
    date: "Il y a 7 jours",
    category: "medias",
    author: "Canal+ Sport",
    authorImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=100&auto=format&fit=crop",
    authorRole: "Production",
    likes: 378,
    comments: 98,
    shares: 145,
    tags: [
      { name: "Documentaire", color: "bg-purple-100 text-purple-800" },
      { name: "Champions", color: "bg-blue-100 text-blue-800" }
    ]
  },
  {
    id: 16,
    title: "Decathlon recrute d'anciens athlètes",
    content: "Le leader de l'équipement sportif lance un programme de recrutement dédié aux sportifs en reconversion.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&auto=format&fit=crop",
    date: "Il y a 2 jours",
    category: "entreprises",
    author: "Decathlon",
    authorImage: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&auto=format&fit=crop",
    authorRole: "RH",
    likes: 423,
    comments: 89,
    shares: 145,
    tags: [
      { name: "Emploi", color: "bg-blue-100 text-blue-800" },
      { name: "Retail", color: "bg-green-100 text-green-800" }
    ]
  },
  {
    id: 17,
    title: "BNP Paribas soutient la reconversion des athlètes",
    content: "La banque renforce son programme d'accompagnement des sportifs vers le secteur financier.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop",
    date: "Il y a 3 jours",
    category: "entreprises",
    author: "BNP Paribas",
    authorImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&auto=format&fit=crop",
    authorRole: "Direction RSE",
    likes: 356,
    comments: 67,
    shares: 89,
    tags: [
      { name: "Finance", color: "bg-blue-100 text-blue-800" },
      { name: "Carrière", color: "bg-purple-100 text-purple-800" }
    ]
  },
  {
    id: 18,
    title: "Adidas : Programme de mentorat",
    content: "Adidas lance un programme de mentorat pour accompagner les athlètes.",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&auto=format&fit=crop",
    date: "Il y a 4 jours",
    category: "entreprises",
    author: "Adidas France",
    authorImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&auto=format&fit=crop",
    authorRole: "RH",
    likes: 289,
    comments: 78,
    shares: 112,
    tags: [
      { name: "Mentorat", color: "bg-green-100 text-green-800" },
      { name: "Sport", color: "bg-blue-100 text-blue-800" }
    ]
  },
  {
    id: 19,
    title: "Nike : Opportunités de carrière",
    content: "Nike développe ses programmes d'insertion professionnelle.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&auto=format&fit=crop",
    date: "Il y a 5 jours",
    category: "entreprises",
    author: "Nike France",
    authorImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&auto=format&fit=crop",
    authorRole: "Carrières",
    likes: 412,
    comments: 93,
    shares: 156,
    tags: [
      { name: "Carrière", color: "bg-purple-100 text-purple-800" },
      { name: "Sport", color: "bg-blue-100 text-blue-800" }
    ]
  },
  {
    id: 20,
    title: "Orange : Programme Sport & Business",
    content: "Orange lance un programme dédié aux sportifs de haut niveau.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop",
    date: "Il y a 6 jours",
    category: "entreprises",
    author: "Orange",
    authorImage: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&auto=format&fit=crop",
    authorRole: "Innovation",
    likes: 345,
    comments: 78,
    shares: 123,
    tags: [
      { name: "Business", color: "bg-green-100 text-green-800" },
      { name: "Digital", color: "bg-blue-100 text-blue-800" }
    ]
  }
];

export const AUTHORIZED_INSTITUTIONS = [
  { 
    id: 1, 
    name: 'Ministère de la Jeunesse et des Sports', 
    logo: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=50&h=50&auto=format&fit=crop', 
    website: 'https://www.sports.gouv.fr',
    banner: 'https://images.unsplash.com/photo-1579389083395-4507e98b5e67?w=1200&auto=format&fit=crop'
  },
  { 
    id: 2, 
    name: 'INSEP', 
    logo: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=50&h=50&auto=format&fit=crop', 
    website: 'https://www.insep.fr',
    banner: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop'
  },
  { 
    id: 3, 
    name: 'AFDAS', 
    logo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=50&h=50&auto=format&fit=crop', 
    website: 'https://www.afdas.com',
    banner: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&fit=crop'
  },
  { 
    id: 4, 
    name: 'Groupe BPCE', 
    logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=50&h=50&auto=format&fit=crop', 
    website: 'https://www.bpce.fr',
    banner: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop'
  },
  { 
    id: 5, 
    name: 'CREPS', 
    logo: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=50&h=50&auto=format&fit=crop', 
    website: 'https://www.creps.fr',
    banner: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&auto=format&fit=crop'
  },
  { 
    id: 6, 
    name: 'ESJ', 
    logo: 'https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=50&h=50&auto=format&fit=crop', 
    website: 'https://www.esj-lille.fr',
    banner: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&auto=format&fit=crop'
  },
  { 
    id: 7, 
    name: 'HEC Paris', 
    logo: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=50&h=50&auto=format&fit=crop', 
    website: 'https://www.hec.fr',
    banner: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop'
  }
] as const;