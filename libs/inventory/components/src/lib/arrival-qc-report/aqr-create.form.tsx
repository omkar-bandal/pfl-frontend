/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { FieldArray, Formik } from 'formik'
import { ADMIN_API_URL, useGetAllProducts } from '@prime-fresh/admin_api'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@prime-fresh/modules'
import { productsDataState, setSelectedProduct } from '@prime-fresh/admin/modules'
import { Grid, InputAdornment, Typography } from '@mui/material'
import { PURCHASE_API_URL, useGetAllDeliveryChallanNums } from '@prime-fresh/purchase_api'
import { AutoCompleteInput, FormResetBtn, FormSubmitBtn, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared'
// eslint-disable-next-line @nx/enforce-module-boundaries
import { appendFormData, mapToValueLabelArray } from '@prime-fresh/shared/utils'
import { AQRinitalValues } from '@prime-fresh/inventory/modules'
import { AQRParameters, INVENTORY_API_URL, PostAQR, useCreateAQR } from '@prime-fresh/inventory_api'

export const AQRCreateForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { data: products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
  const allProducts = products ? products : [];
  const { data: dcNums } = useGetAllDeliveryChallanNums(PURCHASE_API_URL.GET_ALL_DELIVERY_CHALLAN_NO);
  const { selectedProduct } = useAppSelector(productsDataState);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleProductNameChange = (value: string, setFieldValue: (field: string, value: any) => void) => {
    const product = allProducts.find((product) => product.id === value);
    dispatch(setSelectedProduct(product));

    if (product) {
      const qcParameters = product.qualityParameters.map((params) => ({
        qualityParameter: params.id,
        quantity: 0,
        percentage: 0,
      }));
      setFieldValue("parameters", qcParameters); // Pass the array of objects
    } else {
      setFieldValue("parameters", AQRinitalValues.parameters);
    }
  };
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
  const { mutateAsync, error, data } = useCreateAQR(INVENTORY_API_URL.POST_AQR);
  const handleSubmit = (values: PostAQR) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutateAsync(formData).then(() => {
      toast.success(data ? data.message : "AQR created successfully.")
    }).catch(() => {
      toast.error(error ? error.message : "Error while creating AQR.")
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
          <Grid container rowSpacing={1} columnSpacing={1} padding={1}>
            <Grid item xs={12} md={6}>
              <Typography variant='h4' component="div">Arrival QC Report</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
              <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Create" />
              <FormResetBtn label="Reset" handleReset={handleReset} />
            </Grid>
            <Grid item xs={12} md={3}>
              <SelectInput
                isRequired={false}
                label="Challan Number"
                name="dcNo"
                value={values.dcNo}
                options={mapToValueLabelArray(dcNums ? dcNums : [], 'id', 'challanNo')}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                isRequired={false}
                type="date"
                label="Challan Date"
                name="dcDate"
                value={values.dcDate}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                isRequired={false}
                type="number"
                label="Arrived Quantity"
                name="arrivedQty"
                value={values.arrivedQty}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                isRequired={false}
                type="date"
                label="Date of Arrival"
                name="arrivalDate"
                value={values.arrivalDate}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                isRequired={false}
                type="text"
                label="Supplier Name"
                name="supplierName"
                value={values.supplierName}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                isRequired={false}
                type="text"
                label="Supplier Location"
                name="supplierLocation"
                value={values.supplierLocation}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={6}>
              <AutoCompleteInput
                isRequired={true}
                name="product"
                label="Product Name"
                options={mapToValueLabelArray(allProducts, 'id', 'name')}
                handleChange={(event, newValue) => {
                  if (newValue) {
                    setFieldValue("product", newValue.value);
                  } else {
                    setFieldValue("product", '');
                  }
                }}
                handleBlur={() => handleProductNameChange(values.product, setFieldValue)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                isRequired={false}
                type="number"
                label="Sampling Qantity"
                name="samplingQty"
                value={values.samplingQty}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} sx={{ borderBottom: `1px solid #ccc` }}>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Typography textAlign="center" variant='subtitle1' sx={{ fontWeight: 700 }}>Grade / Size</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography textAlign="center" variant='subtitle1' sx={{ fontWeight: 700 }}>Quantity</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography textAlign="center" variant='subtitle1' sx={{ fontWeight: 700 }}>Percent %</Typography>
                </Grid>
              </Grid>
            </Grid>
            {selectedProduct?.qualityParameters !== null &&
              (<Grid item xs={12}>
                <FieldArray name="parameters">
                  {() => (
                    values.parameters.map((_, index) => (
                      <Grid container key={index} spacing={1} alignItems="center" marginY={1}>
                        <Grid item xs={6} md={6}>
                          <Typography>{selectedProduct ? selectedProduct.qualityParameters.find(qcParams => qcParams.id === values.parameters[index].qualityParameter)?.name : ""}</Typography>
                          <input
                            hidden={true}
                            name={`parameters.${index}.qualityParameter`}
                            value={values.parameters[index].qualityParameter} readOnly={true} />
                        </Grid>
                        <Grid item xs={3} md={3}>
                          <TextInput
                            isRequired={false}
                            type="number"
                            label=""
                            name={`parameters.${index}.quantity`}
                            value={values.parameters[index].quantity}
                            handleChange={handleChange}
                            onBlur={() => calculateTotalQty(values, setFieldValue)} />
                        </Grid>
                        <Grid item xs={3} md={3}>
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
                        </Grid>
                      </Grid>
                    ))
                  )}
                </FieldArray>
              </Grid>)}
            <Grid item xs={12} sx={{ borderTop: `1px solid #ccc` }}>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Typography textAlign="center" variant='subtitle1' sx={{ fontWeight: 700 }}>Total</Typography>
                </Grid>
                <Grid item xs={3}>
                  <TextInput isRequired={false} isReadOnly={true} type="number" label="" name="totalQty" value={values.totalQty} />
                </Grid>
                <Grid item xs={3}>
                  <TextInput isRequired={false} isReadOnly={true} type="number" label="" name="totalpercent" value={values.totalpercent} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                isRequired={false}
                type="text"
                label="Purchase By"
                name="purchaseBy"
                value={values.purchaseBy}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                isRequired={false}
                type="text"
                label="Received By"
                name="receivedBy"
                value={values.receivedBy}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                isRequired={false}
                type="text"
                label="QC Checked By"
                name="qcCheckBy"
                value={values.qcCheckBy}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                isRequired={false}
                type="text"
                label="Verified By"
                name="varifiedBy"
                value={values.varifiedBy}
                handleChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                isRequired={false}
                multiline
                maxRows={4}
                type="text"
                label="Remark"
                name="remark"
                value={values.remark}
                handleChange={handleChange} />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  )
}