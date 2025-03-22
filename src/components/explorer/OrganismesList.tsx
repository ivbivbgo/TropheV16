import React from 'react';
import { ESTABLISHMENTS } from '../../data/establishments';
import { OrganismeCard } from './OrganismeCard';

export function OrganismesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {ESTABLISHMENTS.map((establishment) => (
        <OrganismeCard key={establishment.id} establishment={establishment} />
      ))}
    </div>
  );
}