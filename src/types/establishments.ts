export interface Establishment {
  id: number;
  name: string;
  logo: string;
  banner: string;
  type: string;
  location: string;
  description: string;
  specialties: string[];
  accreditations: string[];
  website: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}