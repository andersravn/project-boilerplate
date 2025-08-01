import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    destructive: 'bg-destructive text-destructive-foreground',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

interface AlertProps {
  children: React.ReactNode;
  variant?: 'default' | 'warning' | 'destructive';
  title?: string;
}

export function Alert({ children, variant = 'default', title }: AlertProps) {
  const variants = {
    default: 'border-border bg-background',
    warning: 'border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950',
    destructive: 'border-destructive/50 bg-destructive/10',
  };

  return (
    <div className={`border rounded-lg p-4 mb-4 ${variants[variant]}`}>
      {title && <h5 className="font-medium mb-1">{title}</h5>}
      <div className="text-sm">{children}</div>
    </div>
  );
}
