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
  summary: string;
  content: string;
  image: string;
  date: string;
  category: 'reconversion' | 'formation' | 'success';
  institution: Institution;
  likes: number;
  comments: number;
  shares: number;
  additionalImages?: string[];
}

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