import React from 'react'
import { Box, Grid2 } from '@mui/material'
import { GetVehicleDispatchRegister } from '@prime-fresh/inventory_api'
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useVehicleDispatchRegisterColumns } from './vehicle-dispatch-register.column'
import { inventoryRouteConstants, useGetAllVehicleDispatchRegisters } from '@prime-fresh/inventory/modules'
import { useNavigate } from 'react-router-dom'

export const VehicleDispatchRegisterTable = () => {
  const navigate = useNavigate();
  const vehicleDispatchRegisterColumns = useVehicleDispatchRegisterColumns();
  const {
    columnVisibilityModel,
    displayColumnVisibilityPanel,
    handleColumnVisibilityModelChange,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel
  } = useDataTable({ columnDef: vehicleDispatchRegisterColumns });
  const { data, isLoading, isError, error } = useGetAllVehicleDispatchRegisters();
  const dispatchRecords = data?.data ? data.data : [];

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.')
    }
  }, [isError, error])
  const handleCreate = () => navigate(inventoryRouteConstants.CREATE_VEHILCE_DISPATCH_REGISTER);
  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Vehicle Dispatch Register' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleCreate} />
          <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
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
        mode="client"
        loading={isLoading}
        rows={dispatchRecords}
        columns={vehicleDispatchRegisterColumns}
        columnVisibilityModel={columnVisibilityModel}
      />
    </Box>
  )
}

