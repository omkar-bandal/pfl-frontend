/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
import { arrayConstants, eodReportInitialValue, eodReportProductsInitialValue, inventoryRouteConstants, useCreateEODReport } from '@prime-fresh/inventory/modules'
import { FieldArray, Formik } from 'formik'
import { Box, Button, Grid, Typography } from '@mui/material'
import { AutoCompleteInput, FormResetBtn, FormSubmitBtn, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
import { Add, Remove } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { mapToValueLabelArray, useGetBranchesPartialData, useGetProductsPartialData, useGetUOMPartialData } from '@prime-fresh/shared/modules'

export const EODReportCreateForm = () => {
  const navigate = useNavigate();

  const { data: uoms } = useGetUOMPartialData();
  const allUOMs = useMemo(() => uoms?.data ? mapToValueLabelArray(uoms.data, 'id', 'unit') : [], [uoms]);

  const { data: products } = useGetProductsPartialData();
  const allProducts = useMemo(() => products?.data ? mapToValueLabelArray(products?.data, 'id', 'name') : [], [products]);

  const { data: locations } = useGetBranchesPartialData();
  const allLocations = useMemo(() => locations?.data ? mapToValueLabelArray(locations?.data, 'id', 'name') : [], [locations]);

  const { mutateAsync, error, data } = useCreateEODReport();

  const handleCreate = (values: any) => {
    mutateAsync(values).then(() => {
      toast.success(data ? data.message : "EOD report created sucessfully.");
      setTimeout(() => {
        navigate(inventoryRouteConstants.GET_ALL_EOD_REPORT);
      }, 2000);
    }).catch(() => {
      toast.error(error ? error.message : "Error while creating EOD report.");
    })
  }
  return (
    <Formik
      enableReinitialize={true}
      initialValues={eodReportInitialValue}
      onSubmit={(values) => handleCreate(values)}>
      {({ values, handleChange, handleReset, handleSubmit, setFieldValue, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">EOD Report</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Create" />
              <FormResetBtn label="Reset" handleReset={handleReset} />
            </Grid>
            <Grid item xs={12} md={4}>
              <AutoCompleteInput
                isRequired={true}
                name="location"
                label="Location"
                options={allLocations} />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput isRequired={true} type="date" label="Stock Date" name="stockDate" value={values.stockDate} handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={4}>
              <SelectInput isRequired={true} label="Submission" name="submission" options={arrayConstants.EOD_SUBMISSION} value={values.submission} handleChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <FieldArray name="eodProducts">
                {({ push, remove }) => (
                  <>
                    {values.eodProducts.map((_, index) => (
                      <>
                        <Grid container columnSpacing={1} key={index} alignItems="center" marginY={1}>
                          <Grid item xs={12} md={6}>
                            <AutoCompleteInput
                              isRequired={true}
                              name={`eodProducts.${index}.sku`}
                              label={`SKU ${index + 1}`}
                              options={allProducts} />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <SelectInput
                              isRequired
                              name={`eodProducts.${index}.uom`}
                              label="UOM"
                              options={allUOMs}
                              value={values.eodProducts[index].uom}
                              handleChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="number"
                              isRequired
                              name={`eodProducts.${index}.qty`}
                              label="UOM Quantity"
                              value={values.eodProducts[index].qty}
                              handleChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <TextInput
                              type="number"
                              isRequired
                              name={`eodProducts.${index}.totalWeightinKg`}
                              label="Total Weight (in kg)"
                              value={values.eodProducts[index].totalWeightinKg}
                              handleChange={handleChange}
                            />
                          </Grid>
                        </Grid>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginY: 1 }}>
                          <Button variant="text" size="small" color="success" startIcon={<Add />} onClick={() => push(eodReportProductsInitialValue)}>Add</Button>
                          {values.eodProducts.length > 1 && (
                            <Button variant="text" size="small" color="error" startIcon={<Remove />} onClick={() => remove(index)}>Remove</Button>
                          )}
                        </Box>
                      </>
                    ))}
                  </>
                )}
              </FieldArray>
            </Grid>
            <Grid item xs={12}>
              <TextInput isRequired={true} multiline={true} maxRows={2} label="Comments" name="comments" value={values.comments} handleChange={handleChange} />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  )
}
