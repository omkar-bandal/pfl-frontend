import React from 'react'
import { arrayConstants, eodReportInitialValue, eodReportProductsInitialValue, inventoryRouteConstants } from '@prime-fresh/inventory/modules'
import { FieldArray, Formik } from 'formik'
import { Box, Button, Grid, Typography } from '@mui/material'
import { AutoCompleteInput, FormResetBtn, FormSubmitBtn, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
import { Add, Remove } from '@mui/icons-material'
import { ADMIN_API_URL, useGetAllFilteredBranches, useGetAllProducts, useGetAllUOMs } from '@prime-fresh/admin_api'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { appendFormData, mapToValueLabelArray } from '@prime-fresh/shared/utils'
import { INVENTORY_API_URL, useCreateEODReport } from '@prime-fresh/inventory_api'
import { useNavigate } from 'react-router-dom'

export const EODReportCreateForm = () => {
  const navigate = useNavigate();
  const { data: uoms } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
  const { data: products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
  const { data: locations } = useGetAllFilteredBranches(ADMIN_API_URL.GET_ALL_BRANCHES_FILTERED);

  const allProducts = React.useMemo(() => mapToValueLabelArray(products || [], 'id', 'name'), [products]);
  const uomOptions = React.useMemo(() => mapToValueLabelArray(uoms || [], 'id', 'unit'), [uoms]);
  const allLocations = React.useMemo(() => mapToValueLabelArray(locations || [], 'id', 'name'), [locations]);

  const { mutateAsync, error, data } = useCreateEODReport(INVENTORY_API_URL.POST_EOD_REPORT);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCreate = (values: any) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutateAsync(formData).then(() => {
      toast.success(data ? data.message : "EOD report created sucessfully.");
      setTimeout(() => {
        navigate(inventoryRouteConstants.GET_ALL_EOD_REPORT);
      }, 2500);
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
              <FormSubmitBtn isSubmitting={isSubmitting} isError={!error} label="Create" />
              <FormResetBtn label="Reset" handleReset={handleReset} />
            </Grid>
            <Grid item xs={12} md={4}>
              <AutoCompleteInput
                isRequired={true}
                name="location"
                label="Location"
                options={allLocations}
                handleChange={(event, newValue) => newValue ? setFieldValue('location', newValue.value) : setFieldValue('location', '')} />            </Grid>
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
                              options={allProducts}
                              handleChange={(event, newValue) => newValue ? setFieldValue(`eodProducts.${index}.sku`, newValue.value) : setFieldValue(`eodProducts.${index}.sku`, '')} />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <SelectInput
                              isRequired
                              name={`eodProducts.${index}.uom`}
                              label="UOM"
                              options={uomOptions}
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
