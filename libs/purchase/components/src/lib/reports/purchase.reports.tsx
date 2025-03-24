/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataGridTable, DownloadButton, toast } from '@prime-fresh/ui_shared'
import { ReportTableCols } from './report-table-cols'
import { GetGRN } from '@prime-fresh/purchase_api'
import { Box } from '@mui/material'
import { useGetAllGRNs } from '@prime-fresh/purchase/modules'
import React from 'react'
import { useGetPurchaseReportData } from './rq/purchase-report.rq'
import { GRNFilterParams, initValGRNFilterParams } from './models/grn-filter-params'
import { FilterPanel } from './FilterPanel'

export const PurchaseReports = () => {
  const [filterParams, setFilterParams] = React.useState<GRNFilterParams>(initValGRNFilterParams);

  const { data: reportData, isLoading: loadingReport, error: reportError, isError: isReportError } = useGetPurchaseReportData(filterParams);
  console.log("Report Data: ", reportData);
  const { data, isLoading, isError, error } = useGetAllGRNs();
  const fileURL = React.useMemo(() => reportData?.excelFileUrl ? reportData.excelFileUrl : "", [reportData])

  const allGRN = data?.data ? data.data : [];
  const reportRows = isError || isReportError ? [] : (reportData ? reportData.data : allGRN);
  React.useEffect(() => {
    if (isError)
      toast.error(error?.message || 'Error occured please refresh the page.')
    else if (isReportError)
      toast.error(reportError?.message || 'Error occured please refresh the page.')
  }, [isError, isReportError, reportError, error])

  return (
    <Box flex={1}>
      <FilterPanel filterParams={filterParams} setFilterParams={setFilterParams} fileUrl={fileURL} />
      <DataGridTable<GetGRN>
        mode="client"
        loading={isLoading || loadingReport}
        rows={reportRows}
        columns={ReportTableCols()}
      />
    </Box>
  )
}
