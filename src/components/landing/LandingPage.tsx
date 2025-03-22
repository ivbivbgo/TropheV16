import React from 'react';
import { NewHero } from './NewHero';

interface LandingPageProps {
  onLogin?: () => void;
}

export function LandingPage({ onLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <NewHero onLogin={onLogin} />
    </div>
  );
}