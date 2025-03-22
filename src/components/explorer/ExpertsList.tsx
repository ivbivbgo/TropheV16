import React from 'react';
import { EXPERTS } from '../../data/experts';
import { ExpertCard } from './ExpertCard';

export function ExpertsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {EXPERTS.map((expert) => (
        <ExpertCard key={expert.id} expert={expert} />
      ))}
    </div>
  );
}