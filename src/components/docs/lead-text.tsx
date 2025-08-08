import React from 'react';

interface LeadTextProps {
  children: React.ReactNode;
  className?: string;
}

export function LeadText({ children, className = '' }: LeadTextProps) {
  return (
    <p className={`lead ${className}`}>
      {children}
    </p>
  );
}
