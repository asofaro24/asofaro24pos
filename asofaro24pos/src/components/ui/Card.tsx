import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 ${className}`}>
      {children}
    </div>
  );
}