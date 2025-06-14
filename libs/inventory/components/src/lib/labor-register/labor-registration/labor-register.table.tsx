import React from 'react'
import { Box, Grid2 } from '@mui/material'
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { LaborRegisterColumns } from './labor-register.column'
import { GetLaborRegistration } from '@prime-fresh/inventory_api'
import { useNavigate } from 'react-router-dom'
import { inventoryRouteConstants, useGetAllLaborRegistration } from '@prime-fresh/inventory/modules'

export const LaborRegisterTable = () => {
  const navigate = useNavigate();
  const laborRegisterColumns = LaborRegisterColumns();
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
      handleOpenColumnVisibilityPanel
  } = useDataTable({ columnDef: laborRegisterColumns, initialPageSize: 10 });
  const {data, isLoading, isError, error} = useGetAllLaborRegistration(queryParams);
  const registredLabors = data ? data : null;
    const rowCountRef = React.useRef(registredLabors?.allRecords || 0);
    const rowCount = React.useMemo(() => {
        if (registredLabors?.allRecords !== undefined) {
            rowCountRef.current = registredLabors.allRecords;
        }
        return rowCountRef.current;
    }, [registredLabors]);
    React.useEffect(() => {
      if (isError) {
          toast.error(error?.message || 'Error occured please refresh the page.')
      }
  }, [isError, error])
  const handleCreate = () => navigate(inventoryRouteConstants.CREATE_LABOUR_REGISTER);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Registered Labors' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
                    <AddNewButton handleClick={handleCreate} />
                    <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
                    <ColumnVisibilityPanel
                        popoverId="labor-registration-col-def"
                        columns={laborRegisterColumns}
                        columnVisibilityModel={columnVisibilityModel}
                        displayColumnVisibilityModel={displayColumnVisibilityPanel}
                        closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
                        onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
                    />
                </Grid2>
            </Grid2>
            <DataGridTable<GetLaborRegistration>
                loading={isLoading}
                rows={registredLabors?.data || []}
                columns={laborRegisterColumns}
                mode="server"
                initialPageSize={10}
                totalRows={rowCount}
                paginationModel={paginationModel}
                onPaginationModelChange={handlePaginationChange}
                sortModel={sortModel}
                onSortModelChange={handleSortingChange}
                columnVisibilityModel={columnVisibilityModel}
            />
    </Box >
  )
}
