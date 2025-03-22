import React from 'react';
import { NewHero } from './landing/NewHero';
import { NewApproach } from './landing/NewApproach';
import { NewCreateAccount } from './landing/NewCreateAccount';
import { NewCTA } from './landing/NewCTA';
import { NewFooter } from './landing/NewFooter';

interface LandingPageProps {
  onLogin: () => void;
  onSignup: () => void;
}

export function LandingPage({ onLogin, onSignup }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <NewHero onGetStarted={onSignup} />
      <NewApproach />
      <NewCreateAccount onGetStarted={onSignup} />
      <NewCTA onGetStarted={onSignup} />
      <NewFooter />
    </div>
  );
}