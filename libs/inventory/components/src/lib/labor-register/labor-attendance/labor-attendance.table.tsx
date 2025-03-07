import React from 'react';
import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { GetLaborAttendance, INVENTORY_API_URL, useGetAllLaborAttendance } from '@prime-fresh/inventory_api';
import { DataTable, TableToolbar } from '@prime-fresh/ui_shared';
import { LaborAttendanceColumns } from './labor-attendance.column';
import { useNavigate } from 'react-router-dom';
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules';
import { useGridApiRef } from '@mui/x-data-grid';

export const LaborAttendanceTable = () => {
  const navigate = useNavigate();
  const {data, isLoading} = useGetAllLaborAttendance(INVENTORY_API_URL.GET_ALL_LABOR_ATTENDANCE);
  console.log(data);
  const apiRef = useGridApiRef();
  const handleCreate = () => navigate(inventoryRouteConstants.CREATE_LABOUR_ATTENDANCE);
  
  return (
    <Box sx={{ flex: 1 }}>
      <Box marginY={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Button
          variant="outlined"
          size="medium"
          startIcon={<Add />}
          fullWidth={false}
          onClick={handleCreate}>
          Add Attendance
        </Button>
        <TableToolbar apiRef={apiRef} />
      </Box>
      <DataTable<GetLaborAttendance>
        loading={isLoading}
        rows={data}
        columns={LaborAttendanceColumns()}
        apiRef={apiRef}
      />
    </Box >
  )
}
