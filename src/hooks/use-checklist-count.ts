'use client';

import { useEffect, useState } from 'react';

export function useChecklistCount() {
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    // Count all ChecklistItem components on the page
    const countItems = () => {
      // We'll count based on the custom checkboxes we created
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      setTotalItems(checkboxes.length);
    };

    // Count immediately
    countItems();

    // Use MutationObserver to detect when ChecklistItems are added/removed
    const observer = new MutationObserver(countItems);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Also recount after a short delay to ensure all components are rendered
    const timer = setTimeout(countItems, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return totalItems;
}
