import React from 'react'
import { Box, Grid2 } from '@mui/material'
import { GetEODReport } from '@prime-fresh/inventory_api'
import { AddNewButton, ColumnSettingButton, ColumnVisibilityPanel, DataGridTable, PageTitle, toast, useDataTable } from "@prime-fresh/ui_shared";
import { useEODReportColumns } from './eod-report.column'
import { useNavigate } from 'react-router-dom'
import { inventoryRouteConstants, useGetAllEODReports } from '@prime-fresh/inventory/modules'
import { usePermission } from '@prime-fresh/modules';

export const EODReportTable = () => {
  const navigate = useNavigate();
  const { canEdit, canView } = usePermission('eod-report');
  const eodReportColumns = useEODReportColumns(canEdit, canView);
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
  } = useDataTable({ columnDef: eodReportColumns });
  const { data, isLoading, error, isError } = useGetAllEODReports(queryParams);
  const eods = data ? data : null;
  const rowCountRef = React.useRef(eods?.allRecords || 0);
    const rowCount = React.useMemo(() => {
        if (eods?.allRecords !== undefined) {
            rowCountRef.current = eods.allRecords;
        }
        return rowCountRef.current;
    }, [eods]);

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
         loading={isLoading}
         rows={eods?.data || []}
         columns={eodReportColumns}
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
