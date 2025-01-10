import React from 'react'
import { Box, Button } from '@mui/material'
import { GetVehicleDispatchRegister, INVENTORY_API_URL, useGetAllVehicleDispatchRegisters } from '@prime-fresh/inventory_api'
import { DataTable, TableToolbar, toast } from '@prime-fresh/ui_shared'
import { VehicleDispatchRegisterColumns } from './vehicle-dispatch-register.column'
import { Add } from '@mui/icons-material'
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules'
import { useNavigate } from 'react-router-dom'
import { useGridApiRef } from '@mui/x-data-grid'

export const VehicleDispatchRegisterTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { data, isLoading, isError, error } = useGetAllVehicleDispatchRegisters(INVENTORY_API_URL.GET_ALL_VEHICLE_DISPATCH_REGISTERS);
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
      <Box marginY={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Button
          variant="outlined"
          size="medium"
          startIcon={<Add />}
          fullWidth={false}
          onClick={handleCreate}
        >
          Add Dispatch Register
        </Button>
        <TableToolbar apiRef={apiRef} />
      </Box>
      <DataTable<GetVehicleDispatchRegister>
        loading={isLoading}
        rows={data}
        columns={VehicleDispatchRegisterColumns()}
        apiRef={apiRef}
      />
    </Box>
  )
}

