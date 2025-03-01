/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion, AccordionDetails, AccordionSummary, DataTable, DownloadButton, RadioGroupInput, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
import { ReportTableCols } from './report-table-cols'
import { GetGRN } from '@prime-fresh/purchase_api'
import { Box, Button, FormControl, Grid, Grid2, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { PURCHASE_ARRAYS, purchaseOptionsConstants, useGetAllGRNs } from '@prime-fresh/purchase/modules'
import React from 'react'
import { mapToValueLabelArray, useGetCompanyNames } from '@prime-fresh/shared/modules'
import { Formik, useFormikContext } from 'formik'
import { grnFilterInitVal } from './filter-initial-values'
import { useGetPurchaseReportData } from './rq/purchase-report.rq'
import { GRNFilterParams, initValGRNFilterParams } from './models/grn-filter-params'

export const PurchaseReports = () => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [filterParams, setFilterParams] = React.useState<GRNFilterParams>(initValGRNFilterParams);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFilterParams(prev => ({ ...prev, [name]: value }));
  };
  const toggleAccordian = () => {
    setExpanded(!expanded);
  };
  const { data: reportData, isLoading: loadingReport, error: reportError, isError: isReportError } = useGetPurchaseReportData(filterParams);
  console.log(reportData);
  const { data, isLoading, isError, error } = useGetAllGRNs();
  const fileURL = React.useMemo(() => reportData?.excelFileUrl ? reportData.excelFileUrl : "", [reportData])



  const allGRN = data?.data ? data.data : [];
  const { data: companies } = useGetCompanyNames();
  const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];

  React.useEffect(() => {
    if (isError)
      toast.error(error?.message || 'Error occured please refresh the page.')
    else if (isReportError)
      toast.error(reportError?.message || 'Error occured please refresh the page.')
  }, [isError, isReportError, reportError, error])

  return (
    <Box flex={1}>
      <Grid2 container spacing={1} padding={1}>
        <Grid2 size={{ xs: 12, md: 3 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label" sx={{ fontSize: '14px' }}>GRN Type</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              size="small"
              name="grnType"
              value={filterParams?.grnType}
              label="GRN Type"
              onChange={e => handleChange(e)}
              sx={{
                height: '36px',
                fontSize: '14px',
                '& .MuiSelect-select': { padding: '6px 10px' },
              }}
            >
              {PURCHASE_ARRAYS.grnType.map((type) => {
                return (
                  <MenuItem value={type.value} sx={{ fontSize: '14px' }}>{type.label}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 3 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label" sx={{ fontSize: '14px' }}>Purchase Type</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              size="small"
              name="purchaseType"
              value={filterParams?.purchaseType}
              label="Purchase Type"
              onChange={e => handleChange(e)}
              sx={{
                height: '36px',
                fontSize: '14px',
                '& .MuiSelect-select': { padding: '6px 10px' },
              }}
            >
              {PURCHASE_ARRAYS.purchaseType.map((type) => {
                return (
                  <MenuItem value={type.value} sx={{ fontSize: '14px' }}>{type.label}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 3 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label" sx={{ fontSize: '14px' }}>Location Type</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              size="small"
              name="locationType"
              value={filterParams?.locationType}
              label="Location Type"
              onChange={e => handleChange(e)}
              sx={{
                height: '36px',
                fontSize: '14px',
                '& .MuiSelect-select': { padding: '6px 10px' },
              }}
            >
              {PURCHASE_ARRAYS.locationType.map((type) => {
                return (
                  <MenuItem value={type.value} sx={{ fontSize: '14px' }}>{type.label}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 3 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth>
            <InputLabel id="demo-select-small-label" sx={{ fontSize: '14px' }}>Source</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              size="small"
              name="source"
              value={filterParams?.source}
              label="Source"
              onChange={e => handleChange(e)}
              sx={{
                height: '36px',
                fontSize: '14px',
                '& .MuiSelect-select': { padding: '6px 10px' },
              }}
            >
              {PURCHASE_ARRAYS.source.map((type) => {
                return (
                  <MenuItem value={type.value} sx={{ fontSize: '14px' }}>{type.label}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
      <DataTable<GetGRN>
        loading={isLoading || loadingReport}
        rows={reportData ? reportData.data : allGRN}
        columns={ReportTableCols()}
      />
    </Box>
  )
}
