import React from 'react';
import { CLUBS } from '../../data/clubs';
import { ClubCard } from './ClubCard';

export function ClubsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {CLUBS.map((club) => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  );
}