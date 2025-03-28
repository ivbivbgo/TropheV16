import { Footer2 } from './Footer2';
import { Functionalities } from './Functionalities';
import { ImagePresentation } from './ImagePresentation';
import { Invitation } from './Invitation';
import { NewHero } from './NewHero';
import { UserTypes } from './UserType';

interface LandingPageProps {
  onLogin?: () => void;
}

export function LandingPage({ onLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <NewHero onLogin={onLogin} />
      <ImagePresentation/>
      <UserTypes/>
      <Functionalities/>
      <Invitation/>
      <Footer2/>
    </div>
  );
}