import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IDealSlip } from '@prime-fresh/purchase_api';
import { PURCHASE_ROUTES, useGetAllDealSlips } from '@prime-fresh/purchase/modules';
import { BtnSmall, ColumnVisibilityPanel, DataGridTable, PageTitle, SearchBox, toast, useDataTable } from '@prime-fresh/ui_shared';
import { useDealSlipColumns } from './deal-slip.columns';
import { usePermission } from '@prime-fresh/modules';
import { Add, Settings } from '@mui/icons-material';
import { debounce } from '@prime-fresh/shared/modules';

export const DealSlipTable = () => {
  const navigate = useNavigate();
  const { canEdit, canView } = usePermission('deal-slip');
  const dealSlipColumns = useDealSlipColumns(canEdit, canView);
  const {
    queryParams,
    paginationModel,
    handlePaginationChange,
    sortModel,
    handleSortingChange,
    search,
    setSearch,
    columnVisibilityModel,
    handleColumnVisibilityModelChange,
    displayColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel,
    handleCloseColumnVisibilityPanel,
  } = useDataTable({ columnDef: dealSlipColumns, initialPageSize: 10 });

  const { data, isLoading, isError, error } = useGetAllDealSlips(queryParams, search);
  const allDealSlip = data ? data : null;
  console.log('All Dealslip Data: ', allDealSlip);
  const rowCountRef = React.useRef(allDealSlip?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (allDealSlip?.allRecords !== undefined) {
      rowCountRef.current = allDealSlip.allRecords;
    }
    return rowCountRef.current;
  }, [allDealSlip]);
  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => {
    navigate(PURCHASE_ROUTES.CREATE_DEAL_SLIP);
  };
  const handleSearchChange = debounce((value: string) => {
    setSearch(value);
  }, 1000);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={2} paddingX={1}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <PageTitle pagetitle="Deal Slip" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <SearchBox name="search" value={search} onChange={e => handleSearchChange(e.target.value)} onClearSearch={() => setSearch('')} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="deal-slips-col-def"
            columns={dealSlipColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<IDealSlip>
        loading={isLoading}
        rows={allDealSlip?.data || []}
        columns={dealSlipColumns}
        mode="server"
        initialPageSize={10}
        totalRows={rowCount}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        sortModel={sortModel}
        onSortModelChange={handleSortingChange}
        columnVisibilityModel={columnVisibilityModel}
      />
    </Box>
  );
};
