export interface Expert {
  id: number;
  name: string;
  avatar: string;
  banner: string;
  specialty: string;
  location: string;
  experience: string;
  certification: string;
  organization: string;
  discipline: string; // Changed from rate
  availability: string;
  expertise: string[];
  successStories: number;
}