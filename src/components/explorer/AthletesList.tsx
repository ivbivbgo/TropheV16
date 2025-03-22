import React from 'react';
import { ATHLETES } from '../../data/athletes';
import { AthleteCard } from '../explorer/AthleteCard';

export function AthletesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {ATHLETES.map((athlete) => (
        <AthleteCard key={athlete.id} athlete={athlete} />
      ))}
    </div>
  );
}