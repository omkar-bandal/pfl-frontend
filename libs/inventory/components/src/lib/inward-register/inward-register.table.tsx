/* eslint-disable @nx/enforce-module-boundaries */
import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { IInwardRegister } from '@prime-fresh/inventory_api';
import { useInwardRegisterColumns } from './inward-register.column';
import { inventoryRouteConstants, useGetAllInwardRegisters } from '@prime-fresh/inventory/modules';
import { useNavigate } from 'react-router-dom';
import { BtnSmall, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from '@prime-fresh/ui_shared';
import { usePermission } from '@prime-fresh/modules';
import { Add, Settings } from '@mui/icons-material';

export const InwardRegisterTable = () => {
  const navigate = useNavigate();
  const { canEdit, canView } = usePermission('inward-register');
  const inwardRegisterColumns = useInwardRegisterColumns(canEdit, canView);
  const {
    paginationModel,
    sortModel,
    handleSortingChange,
    handlePaginationChange,
    queryParams,
    columnVisibilityModel,
    displayColumnVisibilityPanel,
    handleColumnVisibilityModelChange,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel,
  } = useDataTable();
  const { data, isLoading, isError, error } = useGetAllInwardRegisters(queryParams);
  const inwards = data ? data : null;
  const rowCountRef = React.useRef(inwards?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (inwards?.allRecords !== undefined) {
      rowCountRef.current = inwards.allRecords;
    }
    return rowCountRef.current;
  }, [inwards]);
  console.log(inwards);
  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);
  const handleCreate = () => navigate(inventoryRouteConstants.CREATE_INWARD_REGISTER);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Inward Register" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="inwards-col-def"
            columns={inwardRegisterColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<IInwardRegister>
        loading={isLoading}
        rows={inwards?.data || []}
        columns={inwardRegisterColumns}
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
