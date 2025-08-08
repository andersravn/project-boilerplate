'use client';

import { ChecklistProgress } from '@/components/docs/checklist-progress';
import { useChecklistCount } from '@/hooks/use-checklist-count';

interface ChecklistProgressWrapperProps {
  pageTitle: string;
}

export function ChecklistProgressWrapper({ pageTitle }: ChecklistProgressWrapperProps) {
  const totalItems = useChecklistCount();
  
  return <ChecklistProgress totalItems={totalItems} pageTitle={pageTitle} />;
}
