/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { toast } from '../../ToastProvider';

export const useErrorHandler = (isError: boolean, error: any) => {
  useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occurred please refresh the page.');
    }
  }, [isError, error]);
};