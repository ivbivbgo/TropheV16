import React from 'react';

interface ProfileCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  action?: React.ReactNode;
}

export function ProfileCard({ title, icon, children, action }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}