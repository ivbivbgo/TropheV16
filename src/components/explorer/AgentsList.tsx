import React from 'react';
import { AGENTS } from '../../data/agents';
import { AgentCard } from './AgentCard';

export function AgentsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {AGENTS.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}