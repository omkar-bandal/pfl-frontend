import { Accordion, AccordionDetails, AccordionSummary, DataTable, DownloadButton, mapToValueLabelArray, RadioGroupInput, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
import { ReportTableCols } from './report-table-cols'
import { GetGRN } from '@prime-fresh/purchase_api'
import { Box, Button, Grid, Grid2, Typography } from '@mui/material'
import { PURCHASE_ARRAYS, purchaseOptionsConstants, useGetAllGRNs } from '@prime-fresh/purchase/modules'
import React from 'react'
import { useGetCompanyNames } from '@prime-fresh/shared/modules'
import { Formik } from 'formik'
import { grnFilterInitVal } from './filter-initial-values'
import { useGetPurchaseReportData } from './rq/purchase-report.rq'
import { GRNFilterParams } from './models/grn-filter-params'
import { FilterAlt } from '@mui/icons-material'

export const PurchaseReports = () => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [filterParams, setFilterParams] = React.useState<GRNFilterParams | null>(null);
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
      <Formik
        enableReinitialize={true}
        initialValues={grnFilterInitVal}
        onSubmit={(values) => {
          console.log("Submitted filtered value: ", values);
          setFilterParams(values);
        }}>
        {({ values, handleChange, handleSubmit, handleReset }) => (
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <Accordion expanded={expanded} onChange={toggleAccordian}>
              <AccordionSummary>
                <Grid2 container direction="row" sx={{ width: "100%" }}>
                  <Grid2 size={{ xs: 12, md: 8 }}>
                    <Typography variant='h6' component="div" sx={{ fontWeight: 700 }}>Filter Panel</Typography>
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                    <Button type="submit" size="small" startIcon={<FilterAlt />} variant='contained' sx={{ textTransform: "none", width: 120 }}>Filter</Button>
                    <DownloadButton fileUrl={fileURL} />
                  </Grid2>
                </Grid2>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                  <Grid item xs={12} md={3}>
                    <RadioGroupInput
                      isRequired={false}
                      label="Type of GRN"
                      name="grnType"
                      alignment="vertical"
                      options={purchaseOptionsConstants.grnType}
                      value={values.grnType}
                      handleChange={handleChange} />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <RadioGroupInput
                      isRequired={false}
                      label="Location Type"
                      name="locationType"
                      alignment="vertical"
                      options={purchaseOptionsConstants.locationTypes}
                      value={values.locationType}
                      handleChange={handleChange} />
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <RadioGroupInput
                      isRequired={false}
                      label="Purchase Type"
                      name="purchaseType"
                      alignment="vertical"
                      options={purchaseOptionsConstants.purchaseType}
                      value={values.purchaseType}
                      handleChange={handleChange} />
                  </Grid>
                  <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
                    <RadioGroupInput
                      isRequired
                      label="Source"
                      name="source"
                      alignment="vertical"
                      options={PURCHASE_ARRAYS.source}
                      value={values.source}
                      handleChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <SelectInput isRequired={false} label="Company Name" name="companyName" options={companyNames} value={values.companyName} handleChange={handleChange} />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </form>)}
      </Formik >
      <DataTable<GetGRN>
        loading={isLoading || loadingReport}
        rows={reportData ? reportData.data : allGRN}
        columns={ReportTableCols()}
      />
    </Box>
  )
}
