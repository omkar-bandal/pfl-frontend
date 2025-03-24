import React from 'react'
import { Box, Grid2 } from '@mui/material'
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { LaborRegisterColumns } from './labor-register.column'
import { GetLaborRegistration } from '@prime-fresh/inventory_api'
import { useNavigate } from 'react-router-dom'
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules'

export const LaborRegisterTable = () => {
  const navigate = useNavigate();
  //   const {
  //     columnVisibilityModel,
  //     setColumnVisibilityModel,
  //     displayColumnVisibilityPanel,
  //     handleColumnVisibilityModelChange,
  //     handleCloseColumnVisibilityPanel,
  //     handleOpenColumnVisibilityPanel
  // } = useDataTable();
  // const {data, isLoading} = useGetAllLaborData(INVENTORY_API_URL.GET_ALL_REGISTERED_LABORS);
  // console.log(data);
  //   React.useEffect(() => {
  //     if (isError) {
  //         toast.error(error?.message || 'Error occured please refresh the page.')
  //     }
  // }, [isError, error])
  const handleCreate = () => navigate(inventoryRouteConstants.CREATE_LABOUR_REGISTER);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Registered Labors' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleCreate} />
          {/* <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="registered-labors-col-def"
            columns={LaborRegisterColumns()}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          /> */}
        </Grid2>
      </Grid2>
      {/* <DataGridTable<GetLaborRegistration>
        mode="client"
        loading={isLoading}
        rows={data}
        columns={LaborRegisterColumns()}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={(newModel: React.SetStateAction<{ [field: string]: boolean }>) => setColumnVisibilityModel(newModel)}
      /> */}
    </Box >
  )
}
