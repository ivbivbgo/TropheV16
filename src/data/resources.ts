import { Resource } from '../types/resources';

export const INITIAL_RESOURCES: Resource[] = [
  {
    id: 10,
    title: "Management Luxe & Sport",
    description: "Programme spécialisé dans le management du luxe sportif",
    fullDescription: `Formation d'excellence au management dans l'industrie du luxe sportif.

1. Univers du Luxe
- Histoire du luxe
- Codes et valeurs
- Marketing luxe
- Relation client

2. Spécialisation Sport
- Sport premium
- Événementiel luxe
- Sponsoring
- Brand management

3. Expérience
- Stage luxe
- Projets réels
- Networking
- Mentorat`,
    organization: "LVMH",
    organizationAvatar: "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=100&h=100&auto=format&fit=crop",
    type: "private",
    banner: "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?w=800&auto=format&fit=crop",
    tags: [
      { label: "Luxe", color: "purple" },
      { label: "Management", color: "blue" }
    ],
    duration: "18 mois",
    funding: "70% financé",
    eligibility: "Sportifs Reconvertis",
    link: "https://www.lvmh.fr",
    likes: 234,
    shares: 89,
    qa: []
  },
  {
    id: 1,
    title: "Programme Carrières BPCE",
    description: "Accompagnement personnalisé pour la reconversion des athlètes dans le secteur bancaire",
    fullDescription: `Le Programme Carrières BPCE offre une opportunité unique aux athlètes de haut niveau de développer une carrière dans le secteur bancaire et financier.

1. Formation Bancaire
- Fondamentaux de la banque
- Réglementation financière
- Gestion de patrimoine
- Services bancaires

2. Développement Professionnel
- Mentorat par des cadres
- Stages pratiques
- Formation continue
- Networking actif

3. Accompagnement Personnalisé
- Coaching individuel
- Suivi de progression
- Support à l'intégration
- Plan de carrière`,
    organization: "Groupe BPCE",
    organizationAvatar: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&auto=format&fit=crop",
    type: "private",
    banner: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop",
    tags: [
      { label: "Finance", color: "blue" },
      { label: "Formation", color: "green" },
      { label: "Mentorat", color: "purple" }
    ],
    duration: "18-24 mois",
    funding: "100% financé",
    eligibility: "Sportifs HN",
    link: "https://www.bpce.fr",
    likes: 156,
    shares: 45,
    qa: []
  },
  {
    id: 2,
    title: "Master Management du Sport",
    description: "Formation d'excellence en management sportif",
    fullDescription: `Le Master en Management du Sport est conçu pour former les futurs cadres du secteur sportif.

1. Programme Académique
- Management stratégique
- Marketing sportif
- Gestion d'événements
- Droit du sport

2. Expérience Pratique
- Stages en entreprise
- Projets réels
- Études de cas
- Networking

3. Spécialisations
- Direction sportive
- Marketing événementiel
- Management d'équipe
- Business development`,
    organization: "INSEP",
    organizationAvatar: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100&h=100&auto=format&fit=crop",
    type: "public",
    banner: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&auto=format&fit=crop",
    tags: [
      { label: "Management", color: "blue" },
      { label: "Formation", color: "green" }
    ],
    duration: "24 mois",
    funding: "100% financé",
    eligibility: "Sportifs HN & Reconvertis",
    link: "https://www.insep.fr",
    likes: 234,
    shares: 67,
    qa: []
  },
  {
    id: 3,
    title: "Entrepreneuriat Sportif",
    description: "Programme d'accompagnement à la création d'entreprise",
    fullDescription: `Programme complet pour accompagner les athlètes dans leur projet entrepreneurial.

1. Formation Entrepreneuriale
- Business plan
- Étude de marché
- Gestion financière
- Marketing digital

2. Accompagnement
- Mentorat individuel
- Réseau d'experts
- Support juridique
- Aide au financement

3. Développement
- Incubation
- Mise en réseau
- Suivi post-création
- Support continu`,
    organization: "AFDAS",
    organizationAvatar: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=100&h=100&auto=format&fit=crop",
    type: "public",
    banner: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop",
    tags: [
      { label: "Entrepreneuriat", color: "purple" },
      { label: "Formation", color: "green" }
    ],
    duration: "12 mois",
    funding: "80% financé",
    eligibility: "Sportifs Reconvertis",
    link: "https://www.afdas.com",
    likes: 189,
    shares: 43,
    qa: []
  },
  {
    id: 4,
    title: "Programme Retail Sport",
    description: "Formation et intégration dans le retail sportif",
    fullDescription: `Programme de formation et d'intégration dans le secteur du retail sportif.

1. Formation Retail
- Merchandising
- Gestion de magasin
- Service client
- Management d'équipe

2. Expérience Terrain
- Stages pratiques
- Formation produit
- Gestion opérationnelle
- Service client

3. Évolution
- Plan de carrière
- Formation continue
- Mobilité internationale
- Développement personnel`,
    organization: "Decathlon",
    organizationAvatar: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&auto=format&fit=crop",
    type: "private",
    banner: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop",
    tags: [
      { label: "Retail", color: "blue" },
      { label: "Management", color: "green" }
    ],
    duration: "12-18 mois",
    funding: "100% financé",
    eligibility: "Sportifs Reconvertis",
    link: "https://www.decathlon.fr",
    likes: 167,
    shares: 38,
    qa: []
  },
  {
    id: 5,
    title: "Formation Coach Sportif",
    description: "Certification professionnelle de coach sportif",
    fullDescription: `Formation complète pour devenir coach sportif professionnel.

1. Formation Technique
- Anatomie
- Physiologie
- Nutrition
- Préparation physique

2. Pédagogie
- Communication
- Psychologie du sport
- Gestion de groupe
- Coaching individuel

3. Pratique
- Stages encadrés
- Mise en situation
- Suivi personnalisé
- Certification`,
    organization: "CREPS",
    organizationAvatar: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=100&h=100&auto=format&fit=crop",
    type: "public",
    banner: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop",
    tags: [
      { label: "Coaching", color: "blue" },
      { label: "Formation", color: "green" }
    ],
    duration: "12 mois",
    funding: "100% financé",
    eligibility: "Sportifs HN",
    link: "https://www.creps.fr",
    likes: 198,
    shares: 52,
    qa: []
  },
  {
    id: 6,
    title: "MBA Sport Business",
    description: "MBA spécialisé dans le business du sport",
    fullDescription: `MBA d'excellence focalisé sur le business du sport.

1. Programme Académique
- Stratégie d'entreprise
- Finance
- Marketing international
- Leadership

2. Spécialisation Sport
- Économie du sport
- Droits TV et médias
- Sponsoring
- Événementiel

3. Développement
- Projets réels
- Stage entreprise
- Réseau alumni
- Career coaching`,
    organization: "HEC Paris",
    organizationAvatar: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100&h=100&auto=format&fit=crop",
    type: "private",
    banner: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop",
    tags: [
      { label: "MBA", color: "blue" },
      { label: "Business", color: "purple" }
    ],
    duration: "12 mois",
    funding: "70% financé",
    eligibility: "Sportifs HN & Reconvertis",
    link: "https://www.hec.fr",
    likes: 245,
    shares: 78,
    qa: []
  },
  {
    id: 7,
    title: "Journalisme Sportif",
    description: "Formation au journalisme sportif",
    fullDescription: `Formation professionnelle au journalisme sportif.

1. Fondamentaux
- Techniques rédactionnelles
- Investigation
- Éthique journalistique
- Droit des médias

2. Spécialisation Sport
- Histoire du sport
- Analyse sportive
- Commentaire sportif
- Production média

3. Pratique
- Stage média
- Production contenus
- Radio/TV
- Digital`,
    organization: "ESJ Lille",
    organizationAvatar: "https://images.unsplash.com/photo-1557425955-df376b5903c8?w=100&h=100&auto=format&fit=crop",
    type: "private",
    banner: "https://images.unsplash.com/photo-1557425955-df376b5903c8?w=800&auto=format&fit=crop",
    tags: [
      { label: "Médias", color: "blue" },
      { label: "Formation", color: "green" }
    ],
    duration: "24 mois",
    funding: "80% financé",
    eligibility: "Sportifs Reconvertis",
    link: "https://www.esj-lille.fr",
    likes: 167,
    shares: 45,
    qa: []
  },
  {
    id: 8,
    title: "Tech Academy Sport",
    description: "Formation aux métiers de la tech dans le sport",
    fullDescription: `Programme de formation aux technologies numériques appliquées au sport.

1. Formation Technique
- Développement web
- Data science
- IA dans le sport
- Technologies mobiles

2. Projets Sport
- Analytics sportifs
- Apps fitness
- Plateformes sport
- IoT sportif

3. Innovation
- Projets R&D
- Startups sport
- Incubation
- Networking tech`,
    organization: "Microsoft",
    organizationAvatar: "https://images.unsplash.com/photo-1642132652075-2b0f6e6c858f?w=100&h=100&auto=format&fit=crop",
    type: "private",
    banner: "https://images.unsplash.com/photo-1642132652075-2b0f6e6c858f?w=800&auto=format&fit=crop",
    tags: [
      { label: "Tech", color: "blue" },
      { label: "Innovation", color: "purple" }
    ],
    duration: "18 mois",
    funding: "100% financé",
    eligibility: "Sportifs HN",
    link: "https://www.microsoft.com",
    likes: 213,
    shares: 67,
    qa: []
  },
  {
    id: 9,
    title: "Préparation Mentale",
    description: "Formation à la préparation mentale et coaching",
    fullDescription: `Programme de formation à la préparation mentale et au coaching mental.

1. Bases Théoriques
- Psychologie du sport
- Neurosciences
- Coaching mental
- Gestion du stress

2. Techniques
- Visualisation
- Méditation
- Fixation d'objectifs
- Communication

3. Application
- Études de cas
- Pratique supervisée
- Stage terrain
- Certification`,
    organization: "INSEP",
    organizationAvatar: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100&h=100&auto=format&fit=crop",
    type: "public",
    banner: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&auto=format&fit=crop",
    tags: [
      { label: "Mental", color: "purple" },
      { label: "Coaching", color: "green" }
    ],
    duration: "12 mois",
    funding: "100% financé",
    eligibility: "Sportifs HN & Reconvertis",
    link: "https://www.insep.fr",
    likes: 178,
    shares: 49,
    qa: []
  }
];