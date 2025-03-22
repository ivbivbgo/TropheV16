import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProfileSectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function ProfileSection({ title, icon: Icon, children }: ProfileSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            <Icon className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );
}