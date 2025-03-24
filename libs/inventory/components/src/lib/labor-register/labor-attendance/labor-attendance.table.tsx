import React from 'react';
import { Box, Grid2 } from '@mui/material';
import { GetLaborAttendance } from '@prime-fresh/inventory_api';
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { LaborAttendanceColumns } from './labor-attendance.column';
import { useNavigate } from 'react-router-dom';
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules';

export const LaborAttendanceTable = () => {
  const navigate = useNavigate();
  // const {
  //   columnVisibilityModel,
  //   setColumnVisibilityModel,
  //   displayColumnVisibilityPanel,
  //   handleColumnVisibilityModelChange,
  //   handleCloseColumnVisibilityPanel,
  //   handleOpenColumnVisibilityPanel
  // } = useDataTable();
  // const {data, isLoading} = useGetAllLaborAttendance(INVENTORY_API_URL.GET_ALL_LABOR_ATTENDANCE);
  // console.log(data);
  // React.useEffect(() => {
  //   if (isError) {
  //     toast.error(error?.message || 'Error occured please refresh the page.')
  //   }
  // }, [isError, error])
  const handleCreate = () => navigate(inventoryRouteConstants.CREATE_LABOUR_ATTENDANCE);

  return (
    <Box sx={{ flex: 1 }}>
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='Labor Attendance' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleCreate} />
          {/* <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="attendance-col-def"
            columns={LaborAttendanceColumns()}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          /> */}
        </Grid2>
      </Grid2>
      {/* <DataGridTable<GetLaborAttendance>
        mode="client"
        loading={isLoading}
        rows={data}
        columns={LaborAttendanceColumns()}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={(newModel: React.SetStateAction<{ [field: string]: boolean }>) => setColumnVisibilityModel(newModel)}
      /> */}
    </Box >
  )
}
