import React from 'react'
import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useGridApiRef } from '@mui/x-data-grid';
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules';
import { DataTable, TableToolbar, toast } from '@prime-fresh/ui_shared';
import { useNavigate } from 'react-router-dom';
import { INVENTORY_API_URL, useGetAllSecondSaleRegisters, GetSecondSaleRegister } from '@prime-fresh/inventory_api';
import { SecondSaleRegisterColumns } from './second-sale-register.column';

export const SecondSaleRegisterTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();
  const { data, isLoading, isError, error } = useGetAllSecondSaleRegisters(INVENTORY_API_URL.GET_ALL_SECOND_SALE_REGISTERS);
  React.useEffect(() => {
    if (isError) {
        toast.error(error?.message || 'Error occured please refresh the page.')
    }
}, [isError, error])
  const handleCreate = () => {
    navigate(inventoryRouteConstants.CREATE_SECOND_SALE_REGISTER);
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
          Add Second Sale Register
        </Button>
        <TableToolbar apiRef={apiRef} />
      </Box>
      <DataTable<GetSecondSaleRegister>
        loading={isLoading}
        rows={data}
        columns={SecondSaleRegisterColumns()}
        apiRef={apiRef}
      />
    </Box>
  )
}
