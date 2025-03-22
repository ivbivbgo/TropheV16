import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  color: string;
  description: string;
}

export function StatCard({ icon: Icon, value, label, color, description }: StatCardProps) {
  const colorClasses = {
    indigo: 'bg-indigo-50 text-indigo-600',
    amber: 'bg-amber-50 text-amber-600',
    emerald: 'bg-emerald-50 text-emerald-600',
    purple: 'bg-purple-50 text-purple-600'
  };

  return (
    <div className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
      <div className={`w-12 h-12 ${colorClasses[color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">
          {label}
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {description}
      </div>
    </div>
  );
}