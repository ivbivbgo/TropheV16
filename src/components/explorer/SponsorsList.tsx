import React from 'react';
import { SPONSORS } from '../../data/sponsors';
import { SponsorCard } from './SponsorCard';

export function SponsorsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {SPONSORS.map((sponsor) => (
        <SponsorCard key={sponsor.id} sponsor={sponsor} />
      ))}
    </div>
  );
}