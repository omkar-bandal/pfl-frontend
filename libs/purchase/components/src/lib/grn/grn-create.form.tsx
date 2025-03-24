/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Add } from '@mui/icons-material'
import { Box, Button, Grid2, Typography } from '@mui/material'
import { grnSchema, initValGRN, initValGRNProducts, PURCHASE_ROUTES, purchaseOptionsConstants, setPreviewGRN, useCreateGRN } from '@prime-fresh/purchase/modules';
import { useActions } from '@prime-fresh/modules';
import { FieldArray, Formik } from 'formik';
import { STRINGS } from '@prime-fresh/admin/modules';
import { PostGRN } from '@prime-fresh/purchase_api';
import { useNavigate } from 'react-router-dom';
import { AutoCompleteInput, FormButtonGroup, ImageUpload, PageTitle, RadioGroupInput, SelectInput, TextInput, toast, VendorFarmerInfo } from '@prime-fresh/ui_shared';
import { GRNPreview } from './grn.preview';
import { useGetProductsPartialData, useGetCompanyNames, useGetBranchesPartialData, mapToValueLabelArray, useGetAllDealSlipNums, appendFormData } from '@prime-fresh/shared/modules';
import {handleGRNProductsChange, handlePushProduct } from './helper-functions';
import { GRNProductArray } from './grn-product-array';

export const GRNForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setPreview } = useActions();
  const { data: companies } = useGetCompanyNames();
  const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];
  const { data: dsNums } = useGetAllDealSlipNums();
  const dealSlipNums = dsNums?.data ? mapToValueLabelArray(dsNums.data, 'id', 'dealSlipNo') : [];
  const { data: products } = useGetProductsPartialData();
  const allProducts = products?.data ? products.data : [];
  console.log("All Products", allProducts.filter(product => product.variety !== null));
  const { data: Locations, isLoading: loadingLocations } = useGetBranchesPartialData();
  const allPurchaseLocation = Locations?.data ? mapToValueLabelArray(Locations.data, 'id', 'name') : [];
  const allPurchaseForEachLocations = Locations?.data ? mapToValueLabelArray(Locations.data.filter(loc => loc.type === STRINGS.DC), 'id', 'name') : [];
  
  
  const { mutateAsync: mutatePost, data, error } = useCreateGRN();

  const handleSubmit = (values: PostGRN) => {
    console.log("submitted Grn products,", values.grnProducts);
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData).then(() => {
      toast.success(data ? data.message : "GRN created.")
      setTimeout(() => {
        navigate(PURCHASE_ROUTES.GET_ALL_GRN);
      }, 2000);
    }).catch(() => {
      toast.error(error ? error.message : "Error while creating GRN.")
    })
  }
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initValGRN}
        // validationSchema={grnSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={(values) => {
          console.log("Submitted GRN: ", values);
          handleSubmit(values);
        }}>
        {({ values, handleChange, handleSubmit, setFieldValue, handleReset, isSubmitting, touched }) => (
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid2 size={{ xs : 12 }} marginBottom={2}>
                <PageTitle pagetitle='Goods Received Note' />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 3 }}>
                <RadioGroupInput
                  isRequired={true}
                  label="Type of GRN"
                  name="grnType"
                  alignment="vertical"
                  options={purchaseOptionsConstants.grnType}
                  value={values.grnType}
                  handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 2 }}>
                <RadioGroupInput
                  isRequired={true}
                  label="Location Type"
                  name="locationType"
                  alignment="vertical"
                  options={purchaseOptionsConstants.locationTypes}
                  value={values.locationType}
                  handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 7 }}>
                <RadioGroupInput
                  isRequired={true}
                  label="Purchase Type"
                  name="purchaseType"
                  alignment="vertical"
                  options={purchaseOptionsConstants.purchaseType}
                  value={values.purchaseType}
                  handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 3 }}>
                <SelectInput
                  isRequired={false}
                  label="Select Deal Slip"
                  name="dealSlipId"
                  options={dealSlipNums}
                  value={values.dealSlipId}
                  handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 6 }}>
                <SelectInput isRequired={true} label="Company Name" name="companyName" options={companyNames} value={values.companyName} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 3 }}>
                <TextInput isRequired={false} type="text" name='billNo' label='Bill Number' value={values.billNo} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 4 }}>
                <TextInput isRequired={true} type="text" name='purchaseInstructionsBy' label='Purchase Instructions By' value={values.purchaseInstructionsBy} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 4 }}>
                <AutoCompleteInput
                  isRequired={true}
                  name="purchaseLocation"
                  label="Purchase Location"
                  loading={loadingLocations}
                  options={allPurchaseLocation}
                  handleChange={(event, newValue) => {
                    if (newValue !== null) {
                      if (typeof newValue === 'string')
                        setFieldValue(`purchaseLocation`, null);
                      else {
                        setFieldValue(`purchaseLocation`, newValue.value);
                      }
                    } else
                      setFieldValue('purchaseLocation', null);
                  }} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 4 }}>
                <AutoCompleteInput
                  isRequired={true}
                  name="purchaseForSalesLocation"
                  label="Purchase For Sales Location"
                  loading={loadingLocations}
                  options={allPurchaseForEachLocations}
                  handleChange={(event, newValue) => {
                    if (newValue !== null) {
                      if (typeof newValue === 'string')
                        setFieldValue(`purchaseForSalesLocation`, null);
                      else {
                        setFieldValue(`purchaseForSalesLocation`, newValue.value);
                      }
                    } else
                      setFieldValue('purchaseForSalesLocation', null);
                  }} />
              </Grid2>
              {touched.purchaseLocation === true && values.purchaseLocation === '' &&
                <Grid2 size={{ xs : 12 }}>
                  <TextInput isRequired={true} type="text" name="otherPurchaseLoc" label='Other Purchase Location' value={values.otherPurchaseLoc} handleChange={handleChange} />
                </Grid2>}
              {touched.purchaseForSalesLocation === true && values.purchaseForSalesLocation === '' &&
                <Grid2 size={{ xs : 12 }}>
                  <TextInput isRequired={true} type="text" name="otherPurchaseForSalesLoc" label='Other Purchase For Sales Location' value={values.otherPurchaseForSalesLoc} handleChange={handleChange} />
                </Grid2>}
              <Grid2 size={{ xs : 12 }}>
                <TextInput isRequired={false} type="text" name="specialReq" label='Special Request' value={values.specialReq} handleChange={handleChange} />
              </Grid2>

              {/*Vendor or Farmer info depend on selected source */}
              <VendorFarmerInfo<PostGRN> />

              <Grid2 size={{ xs : 12 }} marginY={2}>
                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>Product Required</Typography>
                </Box>
              </Grid2>
              <Grid2 size={{ xs : 12 }}>
                <FieldArray name="grnProducts">
                  {() => (
                    <>
                      {values.grnProducts.map((_, index) => (
                        <GRNProductArray index={index}/>
                      ))}
                      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Button
                          startIcon={<Add />}
                          variant="text"
                          color='success'
                          size='small'
                          sx={{ width: 150, fontWeight: 700 }}
                          onClick={() => handlePushProduct(initValGRNProducts, values, setFieldValue)}>
                          Add More
                        </Button>
                      </Box>
                    </>
                  )}
                </FieldArray>
              </Grid2>
              <Grid2 size={{ xs : 12, md : 3 }}>
                <TextInput isRequired={false} isReadOnly={true} label="Subtotal" name="subTotalAmt" type='number' value={values.subTotalAmt} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 3 }}>
                <TextInput isRequired={false} label="Freight" name="freight" type='number' value={values.freight || ""} handleChange={e => handleGRNProductsChange(null, "freight", Number(e.target.value), values, setFieldValue)} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 3 }}>
                <TextInput isRequired={false} label="Other Charges" name="otherCharges" type='number' value={values.otherCharges || ""} handleChange={e => handleGRNProductsChange(null, "otherCharges", Number(e.target.value), values, setFieldValue)} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 3 }}>
                <TextInput isRequired={false} isReadOnly={true} label="Total Amount" name="totalAmt" type='number' value={values.totalAmt} />
              </Grid2>
              <Grid2 size={{ xs : 12 }}>
                <TextInput isRequired={false} isReadOnly={true} label="Total Amount in Words" name="amtWords" type='text' value={values.amtWords} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 2 }}>
                <TextInput isRequired={false} label="Vehicle Number" name="vehicleNo" type='text' value={values.vehicleNo} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 2 }}>
                <TextInput isRequired={false} label="Crates In" name="cratesIn" type='number' value={values.cratesIn} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 2 }}>
                <TextInput isRequired={false} label="Time In" name='timeIn' type='time' value={values.timeIn} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 3 }}>
                <TextInput isRequired={false} label="Received Through" name="receivedThrough" type='text' value={values.receivedThrough} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 3 }}>
                <TextInput isRequired={false} label="Purchase By" name="purchasedBy" type='text' value={values.purchasedBy} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 4 }}>
                <TextInput isRequired={true} label="Delivery Receiving Person" name="deliveryReceivingPerson" type='text' value={values.deliveryReceivingPerson} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 4 }}>
                <TextInput isRequired={false} label="Security Person Name" name="securityPerson" type='text' value={values.securityPerson} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12, md : 4 }}>
                <TextInput isRequired={true} label="RM Name" name="rmn" type='text' value={values.rmn} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12 }}>
                <TextInput isRequired={false} label="Remark" name="remark" type='text' value={values.remark} handleChange={handleChange} />
              </Grid2>
              <Grid2 size={{ xs : 12 }}>
                <ImageUpload isRequired={false} name='billImage' label='Bill Image' />
              </Grid2>
              <Grid2 size={{ xs : 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FormButtonGroup
                  submitLabel='Create'
                  isSubmitting={isSubmitting}
                  isSubmitError={error}
                  resetLabel='Reset'
                  onReset={handleReset}
                  previewLabel='Preview'
                  onPreview={() => {
                    dispatch(setPreviewGRN(values));
                    dispatch(setPreview(true))
                  }} />
              </Grid2>
            </Grid2>
          </form>)}
      </Formik >
      <GRNPreview />
    </>
  )
}
