import React, { useState } from 'react';
import { Resource } from '../../types/resources';
import { INITIAL_RESOURCES } from '../../data/resources';
import { ResourceCard } from '../resources/ResourceCard';
import { ResourceDetail } from '../resources/ResourceDetail';

export function Dispositifs() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [resources] = useState(INITIAL_RESOURCES);

  if (selectedResource) {
    return (
      <ResourceDetail
        resource={selectedResource}
        onBack={() => setSelectedResource(null)}
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="space-y-4">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            onClick={() => setSelectedResource(resource)}
            viewMode="list"
          />
        ))}
      </div>
    </div>
  );
}