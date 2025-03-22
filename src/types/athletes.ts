export interface Athlete {
  id: number;
  name: string;
  sport: string;
  avatar: string;
  banner: string;
  status: 'En activité' | 'En reconversion' | 'En Blessure' | 'En Réflexion';
  location: string;
  currentClub: string;
  currentActivity: string;
  objective: string;
  level: 'National' | 'International';
}