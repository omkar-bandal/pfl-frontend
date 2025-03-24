import React from 'react'
import { Box, Grid2 } from '@mui/material';
import { inventoryRouteConstants, useGetAllSecondSaleRegisters } from '@prime-fresh/inventory/modules';
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useNavigate } from 'react-router-dom';
import { GetSecondSaleRegister } from '@prime-fresh/inventory_api';
import { useSecondSaleRegisterColumns } from './second-sale-register.column';

export const SecondSaleRegisterTable = () => {
  const navigate = useNavigate();
  const secondSaleRegisterColumns = useSecondSaleRegisterColumns()
  const {
    columnVisibilityModel,
    displayColumnVisibilityPanel,
    handleColumnVisibilityModelChange,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel
  } = useDataTable({columnDef: secondSaleRegisterColumns});
  const { data, isLoading, isError, error } = useGetAllSecondSaleRegisters();
  const secondSales = data?.data ? data.data : [];
  React.useEffect(() => {
    if (isError) {
      toast.error(error?.message || 'Error occured please refresh the page.')
    }
  }, [isError, error])
  const handleCreate = () => navigate(inventoryRouteConstants.CREATE_SECOND_SALE_REGISTER);
  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Second Sale Register' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleCreate} />
          <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="second-sales-col-def"
            columns={secondSaleRegisterColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<GetSecondSaleRegister>
        mode="client"
        loading={isLoading}
        rows={secondSales}
        columns={secondSaleRegisterColumns}
        columnVisibilityModel={columnVisibilityModel}
      />
    </Box>
  )
}
