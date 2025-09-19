/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { GridPaginationModel, GridRowSelectionModel, GridSortModel } from '@mui/x-data-grid';
import { CustomGridColDef } from './models';
import { QueryParams } from '@prime-fresh/common_api';

interface UseDataTableProps {
  initialPageSize?: number;
  columnDef?: CustomGridColDef[];
}

export const useDataTable = ({ initialPageSize = 10, columnDef }: UseDataTableProps = {}) => {
  // If column definitions are provided, initialize each column as visible.
  const initialColumnVisibility = columnDef
    ? columnDef.reduce((acc, col) => ({ ...acc, [col.field]: col.hide !== true }), {})
    : {};

  const [actionMenu, setActionMenu] = useState<null | HTMLElement>(null);
  const openActionMenu = Boolean(actionMenu);
  const handleOpenActionMenu = (event: React.MouseEvent<HTMLElement>) => setActionMenu(event.currentTarget);
  const handleCloseActionMenu = () => setActionMenu(null);

  const [enableCheckboxSelection, setEnableCheckboxSelection] = useState(false);
  const handleEnableCheckboxSelection = () => setEnableCheckboxSelection((prev) => !prev);

  const [columnVisibilityModel, setColumnVisibilityModel] = useState<{ [field: string]: boolean }>(
    initialColumnVisibility
  );
  const handleColumnVisibilityModelChange = (field: string) => {
    const newModel = { ...columnVisibilityModel, [field]: !columnVisibilityModel[field] };
    setColumnVisibilityModel(newModel);
  };

  const [displayColumnVisibilityPanel, setDisplayColumnVisibilityPanel] = useState<HTMLButtonElement | null>(null);
  const handleOpenColumnVisibilityPanel = (event: React.MouseEvent<HTMLButtonElement>) =>
    setDisplayColumnVisibilityPanel(event.currentTarget);
  const handleCloseColumnVisibilityPanel = () => setDisplayColumnVisibilityPanel(null);

  const [search, setSearch] = useState<string | null>(null);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: initialPageSize,
  });
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 1,
    limit: initialPageSize,
    sort: '',
    filter: null,
  });
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const handlePaginationChange = (newPaginationModel: GridPaginationModel) => {
    setPaginationModel(newPaginationModel);
    setQueryParams((prev) => ({
      ...prev,
      page: newPaginationModel.page + 1,
      limit: newPaginationModel.pageSize,
    }));
  };
  const handleFilterParamsChange = (filterParams: Record<string, any>) => setQueryParams((prev) => ({ ...prev, filter: filterParams }));
  const handleSortingChange = (sorting: GridSortModel) => {
    let sort = '';
    if (sorting.length > 0) {
      sort = `${sorting[0].field}:${sorting[0].sort}`;
    }
    setSortModel(sorting);
    setQueryParams((prev) => ({ ...prev, sort }));
  };


  return {
    actionMenu,
    openActionMenu,
    handleOpenActionMenu,
    handleCloseActionMenu,
    enableCheckboxSelection,
    handleEnableCheckboxSelection,
    paginationModel,
    sortModel,
    queryParams,
    search,
    setSearch,
    displayColumnVisibilityPanel,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel,
    setPaginationModel,
    columnVisibilityModel,
    setColumnVisibilityModel,
    handleColumnVisibilityModelChange,
    handlePaginationChange,
    handleSortingChange,
    handleFilterParamsChange,
  };
};
