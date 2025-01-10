import { Add } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { GetEODReport, useGetAllEODReports } from '@prime-fresh/inventory_api'
import { DataTable, TableToolbar, toast } from '@prime-fresh/ui_shared'
import React from 'react'
import { EODReportColumns } from './eod-report.column'
import { useNavigate } from 'react-router-dom'
import { useGridApiRef } from '@mui/x-data-grid'
import { inventoryRouteConstants } from '@prime-fresh/inventory/modules'

export const EODReportTable = () => {
  const navigate = useNavigate();
  const apiRef = useGridApiRef();

  const { data, isLoading, error, isError } = useGetAllEODReports("");

  React.useEffect(() => {
    if (isError) {
        toast.error(error?.message || 'Error occured please refresh the page.')
    }
}, [isError, error])

  const handleCreate = () => {
    navigate(inventoryRouteConstants.CREATE_EOD_REPORT);
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
          Add EOD Report
        </Button>
        <TableToolbar apiRef={apiRef} />
      </Box>
      <DataTable<GetEODReport>
        loading={isLoading}
        rows={data}
        columns={EODReportColumns()}
        apiRef={apiRef}
      />
    </Box >
  )
}
