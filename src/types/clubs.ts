export interface Club {
  id: number;
  name: string;
  logo: string;
  banner: string;
  type: 'Club' | 'Fédération';
  sport: string;
  location: string;
  description: string;
  level: string;
  website: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  socialMedia?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  achievements?: string[];
}