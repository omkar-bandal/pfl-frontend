import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { GetVehicleDispatchRegister } from '@prime-fresh/inventory_api';
import { BtnSmall, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from '@prime-fresh/ui_shared';
import { useVehicleDispatchRegisterColumns } from './vehicle-dispatch-register.column';
import { inventoryRouteConstants, useGetAllVehicleDispatchRegisters } from '@prime-fresh/inventory/modules';
import { useNavigate } from 'react-router-dom';
import { usePermission } from '@prime-fresh/modules';
import { Add, Settings } from '@mui/icons-material';

export const VehicleDispatchRegisterTable = () => {
  const navigate = useNavigate();
  const { canEdit, canView } = usePermission('vehicle-dispatch-register');
  const vehicleDispatchRegisterColumns = useVehicleDispatchRegisterColumns(canEdit, canView);
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
  } = useDataTable({ columnDef: vehicleDispatchRegisterColumns, initialPageSize: 10 });
  const { data, isLoading, isError, error } = useGetAllVehicleDispatchRegisters(queryParams);
  const dispatchRecords = data ? data : null;
  const rowCountRef = React.useRef(dispatchRecords?.allRecords || 0);
  const rowCount = React.useMemo(() => {
    if (dispatchRecords?.allRecords !== undefined) {
      rowCountRef.current = dispatchRecords.allRecords;
    }
    return rowCountRef.current;
  }, [dispatchRecords]);
  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.');
    }
  }, [isError, error]);

  const handleCreate = () => navigate(inventoryRouteConstants.CREATE_VEHILCE_DISPATCH_REGISTER);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle="Vehicle Dispatch Register" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <BtnSmall label="Add New" icon={<Add />} color="primary" onClick={handleCreate} />
          <BtnSmall label="Columns" icon={<Settings />} color="info" onClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="vehicle-dispatches-col-def"
            columns={vehicleDispatchRegisterColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<GetVehicleDispatchRegister>
        loading={isLoading}
        rows={dispatchRecords?.data || []}
        columns={vehicleDispatchRegisterColumns}
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
