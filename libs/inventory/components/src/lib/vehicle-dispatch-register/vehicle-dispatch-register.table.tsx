import React from 'react'
import { Box, Grid2 } from '@mui/material'
import { GetVehicleDispatchRegister } from '@prime-fresh/inventory_api'
import { AddNewButton, DataTable, PageTitle, toast } from '@prime-fresh/ui_shared'
import { VehicleDispatchRegisterColumns } from './vehicle-dispatch-register.column'
import { inventoryRouteConstants, useGetAllVehicleDispatchRegisters } from '@prime-fresh/inventory/modules'
import { useNavigate } from 'react-router-dom'
import { useGridApiRef } from '@mui/x-data-grid'

export const VehicleDispatchRegisterTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { data, isLoading, isError, error } = useGetAllVehicleDispatchRegisters();
  const dispatchRecords = data?.data ? data.data : [];

  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.')
    }
  }, [isError, error])
  const handleCreate = () => {
    navigate(inventoryRouteConstants.CREATE_VEHILCE_DISPATCH_REGISTER);
  }
  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Vehicle Dispatch Register' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleCreate} />
        </Grid2>
      </Grid2>
      <DataTable<GetVehicleDispatchRegister>
        loading={isLoading}
        rows={dispatchRecords}
        columns={VehicleDispatchRegisterColumns()}
        apiRef={apiRef}
      />
    </Box>
  )
}

