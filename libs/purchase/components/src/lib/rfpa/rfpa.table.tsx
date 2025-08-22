/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react';
import { Box, Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRFPAColumns } from './rfpa.columns';
import { IRFPA } from '@prime-fresh/purchase_api';
import { PURCHASE_ROUTES, useGetAllRFPAs } from '@prime-fresh/purchase/modules';
import {
  BtnSmall,
  ColumnVisibilityPanel,
  DataGridTable,
  PageTitle,
  SearchBox,
  toast,
  useDataTable,
} from '@prime-fresh/ui_shared';
import { useDispatch } from 'react-redux';
import { setPreview, usePermission } from '@prime-fresh/modules';
import { Add, Settings } from '@mui/icons-material';
import { debounce } from '@prime-fresh/shared/modules';

export const RFPATable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { canEdit, canView } = usePermission('rfpa');
  const rfpaColumns = useRFPAColumns(canEdit, canView);
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
  } = useDataTable({ columnDef: rfpaColumns, initialPageSize: 10 });

  const { data, isLoading, error, isError } = useGetAllRFPAs(queryParams, search);
  const allRFPAs = data ? data : null;

  console.log('RFPA: ', allRFPAs?.data);

  const rowCountRef = React.useRef(allRFPAs?.allRecords || 0);

  const rowCount = React.useMemo(() => {
    if (allRFPAs?.allRecords !== undefined) {
      rowCountRef.current = allRFPAs.allRecords;
    }
    return rowCountRef.current;
  }, [allRFPAs]);

  const handleSearchChange = debounce((value: string) => {
    setSearch(value);
  }, 1000);


  const handleCreate = () => {
    dispatch(setPreview(false));
    navigate(PURCHASE_ROUTES.CREATE_RFPA);
  };

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container columnSpacing={2} marginY={2} paddingX={1}>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <PageTitle pagetitle="Request For Purchase Approval" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <SearchBox name="search" value={search} onChange={e => handleSearchChange(e.target.value)} onClearSearch={() => setSearch('')} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 3 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="rfpas-col-def"
            columns={rfpaColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<IRFPA>
        loading={isLoading}
        rows={allRFPAs?.data || []}
        columns={rfpaColumns}
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
