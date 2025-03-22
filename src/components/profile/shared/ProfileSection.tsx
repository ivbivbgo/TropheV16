import React from 'react';

interface ProfileSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ProfileSection({ children, className = '' }: ProfileSectionProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {children}
    </div>
  );
}