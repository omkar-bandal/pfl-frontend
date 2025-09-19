import { useEffect, useCallback, useState } from 'react';
import type { GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { RootState, useActions, useAppSelector } from '@prime-fresh/modules';

type CustomGridColDef = { field: string; hide?: boolean };

interface UseDataTableProps {
  tableId: string;
  initialPageSize?: number;
  columnDef?: CustomGridColDef[];
  autoRemoveOnUnmount?: boolean; 
}

export const useDataTableFunctions = ({
  tableId,
  initialPageSize = 10,
  columnDef,
  autoRemoveOnUnmount = true,
}: UseDataTableProps) => {
  // selector for table state; returns default object if not present
  const tableState = useAppSelector((state: RootState) => state.datagridTable[tableId]);

  //actions for datagrid table
  const {
    initializeTable,
    removeTable,
    toggleCheckboxSelection,
    setColumnVisibilityModel,
    toggleColumnVisibility,
    setSearch,
    setPaginationModel,
    setSortModel,
    setFilterParams,
  } = useActions();

  // compute initial column visibility as in your hook
  const initialColumnVisibility = columnDef
    ? columnDef.reduce((acc, col) => ({ ...acc, [col.field]: col.hide !== true }), {})
    : {};

  useEffect(() => {
    initializeTable({ tableId, pageSize: initialPageSize, columnVisibility: initialColumnVisibility });

    return () => {
      if (autoRemoveOnUnmount) removeTable({ tableId });
    };
  }, [tableId]);

  const handleToggleCheckboxSelection = useCallback(() => toggleCheckboxSelection({ tableId }), [tableId]);

  const handleSetColumnVisibilityModel = useCallback(
    (model: { [field: string]: boolean }) => setColumnVisibilityModel({ tableId, model }),
    [tableId]
  );

  const [columnVisibilityPanel, setColumnVisibilityPanel] = useState<HTMLButtonElement | null>(null);
  
  const openColumnVisibilityPanel = useCallback((event: React.MouseEvent<HTMLButtonElement>) =>
    setColumnVisibilityPanel(event.currentTarget), []);
  
  const closeColumnVisibilityPanel = useCallback(() => setColumnVisibilityPanel(null), []);

  const handleToggleColumnVisibility = useCallback(
    (field: string) => toggleColumnVisibility({ tableId, field }),
    [tableId]
  );

  const setSearchValue = useCallback((value: string | null) => setSearch({ tableId, search: value }), [tableId]);

  const handlePaginationChange = useCallback(
    (newModel: GridPaginationModel) => setPaginationModel({ tableId, model: newModel }),
    [tableId]
  );

  const handleSortingChange = useCallback(
    (sorting: GridSortModel) => setSortModel({ tableId, model: sorting }),
    [tableId]
  );

  const handleFilterParamsChange = useCallback(
    (filterParams: Record<string, any> | null) => setFilterParams({ tableId, filter: filterParams }),
    [tableId]
  );

  const [actionMenu, setActionMenu] = useState<null | HTMLElement>(null);
  const openActionMenu = Boolean(actionMenu);
  const handleOpenActionMenu = (event: React.MouseEvent<HTMLElement>) => setActionMenu(event.currentTarget);
  const handleCloseActionMenu = () => setActionMenu(null);

  return {
    // state
    enableCheckboxSelection: tableState?.enableCheckboxSelection ?? false,
    columnVisibilityModel: tableState?.columnVisibilityModel ?? initialColumnVisibility,
    columnVisibilityPanel,
    search: tableState?.search ?? null,
    paginationModel: tableState?.paginationModel ?? { page: 0, pageSize: initialPageSize },
    sortModel: tableState?.sortModel ?? [],
    queryParams: tableState?.queryParams ?? { page: 1, limit: initialPageSize, sort: '', filter: null },
    actionMenu,
    openActionMenu,

    // handlers (that dispatch)
    handleToggleCheckboxSelection,
    handleSetColumnVisibilityModel,
    handleToggleColumnVisibility,
    openColumnVisibilityPanel,
    closeColumnVisibilityPanel,
    setSearchValue,
    handlePaginationChange,
    handleSortingChange,
    handleFilterParamsChange,
    handleOpenActionMenu,
    handleCloseActionMenu
  };
};
