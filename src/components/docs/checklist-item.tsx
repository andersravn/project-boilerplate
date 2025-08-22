'use client';

import React, { useState, useEffect } from 'react';

interface ChecklistItemProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ChecklistItem({ title, children, className = '' }: ChecklistItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    
    // Emit custom event for progress tracking
    const customEvent = new CustomEvent('checklistItemToggle', {
      detail: { checked: newChecked }
    });
    window.dispatchEvent(customEvent);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Prevent double triggering when clicking directly on checkbox
    event.stopPropagation();
    handleToggle();
  };

  // Listen for reset all checkboxes event
  useEffect(() => {
    const handleResetAll = () => {
      setIsChecked(false);
    };

    window.addEventListener('resetAllCheckboxes', handleResetAll);
    
    return () => {
      window.removeEventListener('resetAllCheckboxes', handleResetAll);
    };
  }, []);

  return (
    <div className={`flex items-start gap-3 mb-3 ${className}`}>
      <div className="flex-shrink-0 mt-1">
        <input 
          type="checkbox" 
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-4 h-4 text-primary bg-background border-2 border-muted-foreground rounded focus:ring-primary focus:ring-2 cursor-pointer"
        />
      </div>
      <div className="flex-1">
        <span 
          className="font-medium text-foreground cursor-pointer hover:text-primary transition-colors select-none"
          onClick={handleToggle}
        >
          {title}
        </span>
        {children && (
          <div className="text-sm text-muted-foreground mt-1">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
