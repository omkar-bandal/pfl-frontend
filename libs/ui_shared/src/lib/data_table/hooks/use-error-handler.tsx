import { useEffect } from 'react';
import { toast } from '@prime-fresh/ui_shared';

export const useErrorHandler = (isError: boolean, error: any) => {
  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occurred please refresh the page.');
    }
  }, [isError, error]);
};