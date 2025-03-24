import React from 'react'
import { Box, Grid2 } from '@mui/material'
import { GetEODReport } from '@prime-fresh/inventory_api'
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useEODReportColumns } from './eod-report.column'
import { useNavigate } from 'react-router-dom'
import { inventoryRouteConstants, useGetAllEODReports } from '@prime-fresh/inventory/modules'

export const EODReportTable = () => {
  const navigate = useNavigate();
  const eodReportColumns = useEODReportColumns();
  const {
    columnVisibilityModel,
    displayColumnVisibilityPanel,
    handleColumnVisibilityModelChange,
    handleCloseColumnVisibilityPanel,
    handleOpenColumnVisibilityPanel
  } = useDataTable({ columnDef: eodReportColumns });
  const { data, isLoading, error, isError } = useGetAllEODReports();
  const eods = data?.data ? data.data : [];

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
      <Grid2 container marginY={1}>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <PageTitle pagetitle='EOD Report' />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: "flex-end", alignItems: "center" }}>
          <AddNewButton handleClick={handleCreate} />
          <ColumnSettingButton handleClick={handleOpenColumnVisibilityPanel} />
          <ColumnVisibilityPanel
            popoverId="eods-col-def"
            columns={eodReportColumns}
            columnVisibilityModel={columnVisibilityModel}
            displayColumnVisibilityModel={displayColumnVisibilityPanel}
            closeColumnVisibilityModel={handleCloseColumnVisibilityPanel}
            onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          />
        </Grid2>
      </Grid2>
      <DataGridTable<GetEODReport>
        mode="client"
        loading={isLoading}
        rows={eods}
        columns={eodReportColumns}
        columnVisibilityModel={columnVisibilityModel}
      />
    </Box >
  )
}
