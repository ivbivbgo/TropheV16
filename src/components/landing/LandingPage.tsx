import { Footer2 } from './Footer2';
import { Functionalities } from './Functionalities';
import { ImagePresentation } from './ImagePresentation';
import { Invitation } from './Invitation';
import { NewHero } from './NewHero';
import Partners from './Partners';
import { TextPresentation } from './TextPresentation';
import { UserTypes } from './UserTypes';


interface LandingPageProps {
  onLogin?: () => void;
}

export function LandingPage({ onLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <NewHero onLogin={onLogin} />
      <ImagePresentation/>
      <Partners/>
      <TextPresentation/>
      <UserTypes/>
      <Functionalities/>
      <Invitation/>
      <Footer2/>
    </div>
  );
}