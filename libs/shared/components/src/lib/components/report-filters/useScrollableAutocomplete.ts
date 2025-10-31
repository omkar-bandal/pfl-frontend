import { QueryParams } from '@prime-fresh/services';
import { useState, useCallback, ChangeEvent } from 'react';

export interface UseScrollableAutocompleteResult {
  selectedId: string | null;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
  searchQuery: string | null;
  queryParams: QueryParams;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handleInputChange: (_: ChangeEvent<any> | null, newInput: string, reason?: 'input' | 'clear' | 'reset') => void;
  handleOpen: () => void;
  setQueryParams: React.Dispatch<React.SetStateAction<QueryParams>>;
}

// --- Generic Custom Hook Implementation ---
export const useScrollableAutocomplete = (initialLimit: number = 6): UseScrollableAutocompleteResult => {
  // State for the selected entity's ID
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // State for the search text input
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

  // State for pagination and sorting
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 1,
    limit: initialLimit,
    sort: '',
  });

  // --- Handlers (wrapped in useCallback for performance) ---

  const handleNextPage = useCallback(() => {
    setQueryParams((prev) => ({ ...prev, page: prev.page + 1 }));
  }, []);

  const handlePrevPage = useCallback(() => {
    setQueryParams((prev) => ({ ...prev, page: Math.max(1, prev.page - 1) }));
  }, []);

  const handleInputChange = useCallback(
    (_: ChangeEvent<any> | null, newInput: string, reason?: 'input' | 'clear' | 'reset') => {
      setSearchQuery(newInput);

      // Reset to page 1 whenever the search input changes
      if (reason === 'input' || reason === 'clear') {
        setQueryParams((prev) => ({ ...prev, page: 1 }));
      }
    },
    []
  );

  const handleOpen = useCallback(() => {
    setQueryParams((prev) => ({ ...prev, page: 1 }));
  }, []);

  return {
    selectedId,
    setSelectedId,
    searchQuery,
    queryParams,
    handleNextPage,
    handlePrevPage,
    handleInputChange,
    handleOpen,
    setQueryParams,
  };
};
