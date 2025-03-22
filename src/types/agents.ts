export interface Agent {
  id: number;
  name: string;
  avatar: string;
  banner: string;
  agency: string;
  location: string;
  specialization: string;
  experience: string;
  clients: string;
  sports: string[];
  languages: string[];
  successStories: string[];
  licenseType: 'FIFA' | 'FFBB' | 'FFR' | 'FFT' | 'Multiple';
}