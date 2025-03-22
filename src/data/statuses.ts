import { ProfileStatus } from '../types/profile';

export const STATUSES: { value: ProfileStatus; label: string; }[] = [
  { value: 'En activité', label: 'En activité' },
  { value: 'En reconversion', label: 'En reconversion' },
  { value: 'En Blessure', label: 'En Blessure' },
  { value: 'En Réflexion', label: 'En Réflexion' },
  { value: 'En activité pros', label: 'En activité pros' }
];