'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Circle, ChevronUp, ChevronDown } from 'lucide-react';

interface ChecklistProgressProps {
  totalItems: number;
  pageTitle?: string;
}

export function ChecklistProgress({ totalItems, pageTitle = "Checklist" }: ChecklistProgressProps) {
  const [completedItems, setCompletedItems] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the component after a brief delay to avoid layout shift
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Listen for checkbox changes from ChecklistItem components
    const handleCheckboxChange = (event: CustomEvent) => {
      const { checked } = event.detail;
      setCompletedItems(prev => checked ? prev + 1 : prev - 1);
    };

    // Type assertion for the custom event
    const typedHandler = handleCheckboxChange as EventListener;
    
    window.addEventListener('checklistItemToggle', typedHandler);
    
    return () => {
      window.removeEventListener('checklistItemToggle', typedHandler);
    };
  }, []);

  const progressPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  const isComplete = completedItems === totalItems && totalItems > 0;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        isExpanded ? 'w-80' : 'w-16'
      }`}>
        {/* Collapsed view - circular progress */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-16 h-16 flex items-center justify-center relative group hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label={`Progress: ${completedItems} of ${totalItems} completed`}
          >
            {/* Circular progress background */}
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-200 dark:text-gray-600"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${progressPercentage * 2.827} 282.7`}
                className={`transition-all duration-500 ${
                  isComplete 
                    ? 'text-green-500' 
                    : progressPercentage > 0 
                      ? 'text-blue-500' 
                      : 'text-gray-300'
                }`}
                strokeLinecap="round"
              />
            </svg>
            
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              {isComplete ? (
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              ) : (
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {progressPercentage}%
                </span>
              )}
            </div>
          </button>
        )}

        {/* Expanded view */}
        {isExpanded && (
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                {pageTitle} Progress
              </h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                aria-label="Collapse progress tracker"
              >
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                <span>Completed</span>
                <span>{completedItems} / {totalItems}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    isComplete 
                      ? 'bg-green-500' 
                      : progressPercentage > 0 
                        ? 'bg-blue-500' 
                        : 'bg-gray-300'
                  }`}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="text-center mt-2">
                <span className={`text-lg font-bold ${
                  isComplete 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {progressPercentage}%
                </span>
              </div>
            </div>

            {/* Status message */}
            <div className="text-xs text-center">
              {isComplete ? (
                <div className="flex items-center justify-center gap-1 text-green-600 dark:text-green-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-medium">All complete! 🎉</span>
                </div>
              ) : (
                <span className="text-gray-600 dark:text-gray-400">
                  {totalItems - completedItems} items remaining
                </span>
              )}
            </div>

            {/* Quick actions */}
            {completedItems > 0 && !isComplete && (
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    // Reset all checkboxes
                    const event = new CustomEvent('resetAllCheckboxes');
                    window.dispatchEvent(event);
                    setCompletedItems(0);
                  }}
                  className="w-full text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  Reset all checkboxes
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
