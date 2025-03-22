export type ProfileStatus = 'En activité' | 'En reconversion' | 'En Blessure' | 'En Réflexion' | 'En activité pros';
export type Sport = string;

export interface ProfileData {
  name: string;
  avatar: string;
  banner: string;
  location: string;
  sport: Sport;
  status: ProfileStatus;
  currentClub: string;
  currentCompany: string;
  level: 'National' | 'International';
  recherche: string;
  email: string;
  phone: string;
  birthDate: string;
  bio: string;
  
  // Athletic Information
  specialties: string[];
  achievements: Array<{
    title: string;
    date: string;
    description: string;
    type: 'competition' | 'award' | 'record';
  }>;
  
  // Career Development
  skills: Array<{
    name: string;
    level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
    category: 'Technique' | 'Soft Skills' | 'Management' | 'Digital';
  }>;
  experience: Array<{
    title: string;
    organization: string;
    location: string;
    startDate: string;
    endDate?: string;
    current: boolean;
    description: string;
    type: 'sport' | 'professional' | 'education';
  }>;
  
  // Education & Training
  education: Array<{
    degree: string;
    institution: string;
    field: string;
    startYear: string;
    endYear?: string;
    current: boolean;
    description?: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    expiryDate?: string;
    credentialId?: string;
  }>;
  
  // Professional Preferences
  interests: string[];
  availability: {
    status: 'Immédiate' | 'Sous 3 mois' | 'Sous 6 mois' | 'À définir';
    type: Array<'Temps plein' | 'Temps partiel' | 'Freelance' | 'Stage'>;
  };
  mobility: {
    willing: boolean;
    locations: string[];
    international: boolean;
  };
  languages: Array<{
    name: string;
    level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Natif';
  }>;
  
  // Career Goals
  careerObjectives: {
    shortTerm: string;
    longTerm: string;
    industries: string[];
    roles: string[];
  };
  
  // Additional Information
  volunteering: Array<{
    organization: string;
    role: string;
    startDate: string;
    endDate?: string;
    current: boolean;
    description: string;
  }>;
  publications: Array<{
    title: string;
    publisher: string;
    date: string;
    url?: string;
    description: string;
  }>;
  
  // Social & Contact
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
  };
  contactPreferences: {
    email: boolean;
    phone: boolean;
    messaging: boolean;
    bestTimeToContact?: string;
  };
}