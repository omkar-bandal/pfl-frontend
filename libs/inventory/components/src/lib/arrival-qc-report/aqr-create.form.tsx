/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from 'react'
import { FieldArray, Formik } from 'formik'
// import { useNavigate } from 'react-router-dom'
import { Box, Divider, Grid2, InputAdornment, Typography } from '@mui/material'
import { FormButtonGroup, FormikAutocomplete, PageTitle, RadioGroupInput, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
import { AQRinitalValues, useCreateAQR } from '@prime-fresh/inventory/modules'
import { AQRParameters, PostAQR } from '@prime-fresh/inventory_api'
import { convertInTitleCase, debounce, mapToValueLabelArray, useGetAllDeliveryChallanNums, useSearchProductAllData } from '@prime-fresh/shared/modules'
import { GetProduct } from '@prime-fresh/common_api'

export const AQRCreateForm = () => {

  const [searchInput, setSearchInput] = React.useState('');
  const { data: produces, isFetching, error } = useSearchProductAllData(searchInput);
  console.log("search query o/p", produces);
  const searchedProduct = useMemo(() => produces?.data ? produces.data : [], [produces]);

  const debouncedInputChange = React.useCallback(
    debounce((value: string) => {
      setSearchInput(value);
    }, 2000),
    []
  );

  const { data: dcnums } = useGetAllDeliveryChallanNums();
  const dcNums = dcnums?.data ? mapToValueLabelArray(dcnums.data, 'id', 'challanNo') : [];

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleProductNameChange = (value: string, setFieldValue: (field: string, value: any) => void) => {
  //   const product = allProducts.find((product) => product.id === value);
  //   dispatch(setSelectedProduct(product));

  // if (product) {
  //   const qcParameters = product.qualityParameters.map((params) => ({
  //     qualityParameter: params.id,
  //     quantity: 0,
  //     percentage: 0,
  //   }));
  //     setFieldValue("parameters", qcParameters); // Pass the array of objects
  //   } else {
  //     setFieldValue("parameters", AQRinitalValues.parameters);
  //   }
  // };
  const calculateTotalQty = (values: PostAQR, setFieldValue: (field: string, value: any) => void) => {
    const updatedParameters = values.parameters.map((param: AQRParameters) => ({
      ...param,
      percentage: values.samplingQty ? parseFloat(((param.quantity / values.samplingQty) * 100).toFixed(2)) : 0,
    }));

    const totalQty = updatedParameters.reduce((acc: number, param: any) => acc + param.quantity, 0);
    const totalPercent = updatedParameters.reduce((acc: number, param: any) => acc + param.percentage, 0);

    setFieldValue("parameters", updatedParameters);
    setFieldValue("totalQty", totalQty);
    setFieldValue("totalpercent", totalPercent);
  };
  const { mutateAsync, error: postError, data } = useCreateAQR();
  const handleSubmit = (values: PostAQR) => {
    mutateAsync(values).then(() => {
      toast.success(data ? data.message : "AQR created successfully.")
    }).catch(() => {
      toast.error(postError ? postError.message : "Error while creating AQR.")
    })
  }
  return (
    <Formik
      initialValues={AQRinitalValues}
      onSubmit={(values) => {
        console.log(values);
        handleSubmit(values)
      }}>
      {({ values, handleChange, handleReset, handleSubmit, setFieldValue, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Grid2 container rowSpacing={1} columnSpacing={1} padding={1}>
            <Grid2 size={{ xs: 12 }} marginBottom={2}>
              <PageTitle pagetitle='Arrival Quality Reports' />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <SelectInput
                isRequired={false}
                label="Challan Number"
                name="dcNo"
                value={values.dcNo}
                options={dcNums}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                type="date"
                label="Challan Date"
                name="dcDate"
                value={values.dcDate}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                type="number"
                label="Arrived Quantity"
                name="arrivedQty"
                value={values.arrivedQty}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                type="date"
                label="Date of Arrival"
                name="arrivalDate"
                value={values.arrivalDate}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                isRequired={false}
                type="text"
                label="Supplier Name"
                name="supplierName"
                value={values.supplierName}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                isRequired={false}
                type="text"
                label="Supplier Location"
                name="supplierLocation"
                value={values.supplierLocation}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <FormikAutocomplete<GetProduct>
                isRequired={true}
                optionValueKey="id"
                name="product"
                label="Product Name"
                options={searchedProduct}
                isLoading={isFetching}
                noOptionsText={error ? error.message : 'Enter name'}
                onInputChange={(value) => debouncedInputChange(value)}
                getOptionLabel={(option) => option.name}
                onOptionSelected={selectedProduct => {
                  if (selectedProduct) {
                    const qcParameters = selectedProduct.qualityParameters.map((params) => ({
                      qualityParameterId: params.id,
                      qualityParameterType: params.type,
                      qualityParameterName: params.name,
                      quantity: 0,
                      percentage: 0,
                    }));
                    setFieldValue("parameters", qcParameters);
                  } else {
                    setFieldValue("parameters", AQRinitalValues.parameters);
                  }
                }
                }
              />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <TextInput
                isRequired={false}
                type="number"
                label="Sampling Qantity"
                name="samplingQty"
                value={values.samplingQty}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 0, md: 12 }}>
              <Box sx={{ flex: 1 }}>
                <Grid2 container alignItems="center" sx={{display: {xs: 'none', sm: 'none', md: 'flex', l: 'flex', xl: 'flex'}}}>
                  <Grid2 size={{ xs: 3 }}>
                    <Typography textAlign="start" variant='subtitle1' sx={{ fontWeight: 700 }}>Grade / Size</Typography>
                  </Grid2>
                  <Grid2 size={{ xs: 3 }}>
                    <Typography textAlign="center" variant='subtitle1' sx={{ fontWeight: 700 }}>Type</Typography>
                  </Grid2>
                  <Grid2 size={{ xs: 3 }}>
                    <Typography textAlign="center" variant='subtitle1' sx={{ fontWeight: 700 }}>Quantity</Typography>
                  </Grid2>
                  <Grid2 size={{ xs: 3 }}>
                    <Typography textAlign="center" variant='subtitle1' sx={{ fontWeight: 700 }}>Percent %</Typography>
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12 }}><Divider /></Grid2>
            <Grid2 size={{ xs: 12 }}>
              <FieldArray name="parameters">
                {() => (
                  values.parameters.map((_, index) => (
                    <Grid2 container key={index} spacing={1} alignItems="center" marginY={1}>
                      <Grid2 size={{ xs: 3 }}>
                        <input
                          hidden={true}
                          name={`parameters.${index}.qualityParameterId`}
                          value={values.parameters[index].qualityParameterId} readOnly={true} />
                        <Typography>{values.parameters ? convertInTitleCase(values.parameters[index].qualityParameterName) : ''}</Typography>
                      </Grid2>
                      <Grid2 size={{ xs: 3 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <RadioGroupInput
                          isRequired={false}
                          label=""
                          alignment="vertical"
                          name={`parameters.${index}.qualityParameterType`}
                          value={values.parameters[index].qualityParameterType}
                          options={[{ label: "Good", value: "good" }, { label: "Bad", value: "bad" }]}
                          handleChange={handleChange}
                        />
                      </Grid2>
                      <Grid2 size={{ xs: 3 }}>
                        <TextInput
                          isRequired={false}
                          type="number"
                          label=""
                          name={`parameters.${index}.quantity`}
                          value={values.parameters[index].quantity}
                          handleChange={handleChange}
                          onBlur={() => calculateTotalQty(values, setFieldValue)} />
                      </Grid2>
                      <Grid2 size={{ xs: 3 }}>
                        <TextInput
                          isRequired={false}
                          isReadOnly={true}
                          type="number"
                          label=""
                          name={`parameters.${index}.percentage`}
                          value={values.parameters[index].percentage}
                          slotProps={{
                            input: {
                              endAdornment: <InputAdornment position="end">%</InputAdornment>,
                            },
                          }} />
                      </Grid2>
                    </Grid2>
                  ))
                )}
              </FieldArray>
            </Grid2>
            <Grid2 size={{ xs: 12 }}><Divider /></Grid2>
            <Grid2 size={{ xs: 12 }} marginY={1}>
              <Box sx={{ flex: 1 }}>
                <Grid2 container alignItems="center">
                  <Grid2 size={{ xs: 6 }}>
                    <Typography textAlign="end" variant='subtitle1' sx={{ fontWeight: 700, marginRight: 5 }}>Total</Typography>
                  </Grid2>
                  <Grid2 size={{ xs: 3 }}>
                    <TextInput isRequired={false} isReadOnly={true} type="number" label="" name="totalQty" value={values.totalQty} />
                  </Grid2>
                  <Grid2 size={{ xs: 3 }}>
                    <TextInput isRequired={false} isReadOnly={true} type="number" label="" name="totalpercent" value={values.totalpercent} />
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                type="text"
                label="Purchase By"
                name="purchaseBy"
                value={values.purchaseBy}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                type="text"
                label="Received By"
                name="receivedBy"
                value={values.receivedBy}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                type="text"
                label="QC Checked By"
                name="qcCheckBy"
                value={values.qcCheckBy}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
              <TextInput
                isRequired={false}
                type="text"
                label="Verified By"
                name="varifiedBy"
                value={values.varifiedBy}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <TextInput
                isRequired={false}
                multiline
                maxRows={4}
                type="text"
                label="Remark"
                name="remark"
                value={values.remark}
                handleChange={handleChange} />
            </Grid2>
            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <FormButtonGroup
                submitLabel='Create'
                isSubmitting={isSubmitting}
                isSubmitError={postError}
                resetLabel='Reset'
                onReset={handleReset}
              />
            </Grid2>
          </Grid2>
        </form>
      )}
    </Formik>
  )
}