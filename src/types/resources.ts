export interface QA {
  id: number;
  author: string;
  authorAvatar: string;
  question: string;
  timestamp: string;
  likes: number;
  institutionResponse?: {
    response: string;
    respondent: string;
    timestamp: string;
    avatar: string;
  };
}

export interface Resource {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  organization: string;
  organizationAvatar: string;
  type: 'public' | 'private';
  banner: string;
  additionalImages?: string[];
  tags: Array<{
    label: string;
    color: 'blue' | 'green' | 'purple' | 'orange' | 'pink';
  }>;
  duration: string;
  funding: string;
  eligibility: string;
  link: string;
  likes: number;
  shares: number;
  qa: QA[];
}