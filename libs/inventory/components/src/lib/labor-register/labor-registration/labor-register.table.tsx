import { Add } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { DataTable, TableToolbar } from '@prime-fresh/ui_shared'
import React from 'react'
import { LaborRegisterColumns } from './labor-register.column'
import { GetLaborRegistration, INVENTORY_API_URL, useGetAllLaborData } from '@prime-fresh/inventory_api'
import { useNavigate } from 'react-router-dom'
import { useGridApiRef } from '@mui/x-data-grid'
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules'

export const LaborRegisterTable = () => {
  const navigate = useNavigate();
  const {data, isLoading} = useGetAllLaborData(INVENTORY_API_URL.GET_ALL_REGISTERED_LABORS);
  console.log(data);
  const apiRef = useGridApiRef();
  const handleCreate = () => navigate(inventoryRouteConstants.CREATE_LABOUR_REGISTER);
  
  return (
    <Box sx={{ flex: 1 }}>
      <Box marginY={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Button
          variant="outlined"
          size="medium"
          startIcon={<Add />}
          fullWidth={false}
          onClick={handleCreate}>
          Add Labor
        </Button>
        <TableToolbar apiRef={apiRef} />
      </Box>
      <DataTable<GetLaborRegistration>
        loading={isLoading}
        rows={data}
        columns={LaborRegisterColumns()}
        apiRef={apiRef}
      />
    </Box >
  )
}
