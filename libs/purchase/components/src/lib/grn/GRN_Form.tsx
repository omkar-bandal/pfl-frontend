import React from 'react'
import { useDispatch } from 'react-redux'
import { Add, Close } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import { dealSlipDataState, displayAddress, grnSchema, initValGRN, initValRFPAItems, numToWords, PURCHASE_ARRAYS, PURCHASE_ROUTES, setDealSlipData, setPreviewGRN } from '@prime-fresh/purchase/modules';
import { useActions, useAppSelector } from '@prime-fresh/modules';
import { FieldArray, Formik } from 'formik';
import { farmersDataState, vendorsDataState, productsDataState, uomsDataState, setProducts, setUOMs, setSelectedVendor, setSelectedFarmer, setSelectedProduct, ADMIN_ROUTES, setFilteredFarmerData, setFilteredVendorData } from '@prime-fresh/admin/modules';
import { ADMIN_API_URL, GetProduct, useGetAllProducts, useGetAllUOMs, useGetAllFilteredFarmerData, useGetAllFilteredVendorData, GetAllFilteredVendorData } from '@prime-fresh/admin_api';
import { GetDealSlip, PostGRN, PURCHASE_API_URL, useCreateGRN, useGetAllDealSlip } from '@prime-fresh/purchase_api';
import { useNavigate } from 'react-router-dom';
import { AutoCompleteInput, ImageUpload, mapToValueLabelArray, RadioGroupInput, SelectInput, TextInput, toast } from '@prime-fresh/ui_shared';
import { GRNPreview } from './GRN_Preview';
import { appendFormData } from '@prime-fresh/shared/utils';

export const GRNForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setPreview } = useActions();
  const { data: dealSlips } = useGetAllDealSlip(PURCHASE_API_URL.GET_ALL_DEAL_SLIP);
  const { data: Vendors } = useGetAllFilteredVendorData(ADMIN_API_URL.GET_ALL_VENDORS_FILTERED);
  const { data: FilteredFarmers } = useGetAllFilteredFarmerData(ADMIN_API_URL.GET_ALL_FARMERS_FILTERED);
  console.log(FilteredFarmers);
  const { data: Products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
  const { data: UOMs } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
  const { allVendorsFiltered, selectedVendor } = useAppSelector(vendorsDataState);
  const { allFarmersFiltered, selectedFarmer } = useAppSelector(farmersDataState);
  const { allProducts, selectedProduct } = useAppSelector(productsDataState);
  const { allUOMs } = useAppSelector(uomsDataState);
  const { dealSlip } = useAppSelector(dealSlipDataState);

  React.useEffect(() => {
    dispatch(setSelectedVendor(null));
    dispatch(setSelectedFarmer(null));
    dispatch(setSelectedProduct(null));
    dispatch(setDealSlipData(dealSlips ? dealSlips : []));
    dispatch(setFilteredVendorData(Vendors ? Vendors : []));
    dispatch(setProducts(Products ? Products : []));
    dispatch(setUOMs(UOMs ? UOMs : []));
  }, [dispatch, Products, Vendors, UOMs, dealSlips]);

  const handlesSourceChange = (value: string, setFieldValue: (field: string, value: string | undefined) => void) => {
    setFieldValue("source", value);
    value === "vendor" ? dispatch(setFilteredVendorData(Vendors ? Vendors : [])) : dispatch(setFilteredFarmerData(FilteredFarmers ? FilteredFarmers : []));
  };

  const handleSourceNameChange = (values: PostGRN, dataId: string) => {
    if (values.source === "vendor") {
      const selectedVendor = allVendorsFiltered.find((vendor) => vendor.id === dataId);
      console.log(selectedVendor);
      dispatch(setSelectedVendor(selectedVendor));
    } else if (values.source === "farmer") {
      const selectFarmer = allFarmersFiltered.find((farmer) => farmer.id === dataId)
      dispatch(setSelectedFarmer(selectFarmer))
    }
  };
  const handleProductNameChange = (dataId: string) => {
    const selectedProduct: GetProduct | undefined = allProducts.find((products) => products.id === dataId);
    console.log(selectedProduct);
    dispatch(setSelectedProduct(selectedProduct));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calculateAmounts = (values: any, setFieldValue: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatedProducts = values.products.map((product: any) => ({
      ...product,
      amt: product.quantity * product.rate,
    }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const subTotalAmt = updatedProducts.reduce((acc: any, product: any) => acc + product.amt, 0);  // Calculate subtotal from the product amounts
    const totalAmt = subTotalAmt + values.freight + values.otherCharges;     // Calculate total (subtotal + freight + other charges)
    const amtWords = numToWords(totalAmt); // Convert total amount to words
    // Update form fields with calculated values
    setFieldValue("products", updatedProducts);
    setFieldValue("subTotalAmt", subTotalAmt);
    setFieldValue("totalAmt", totalAmt);
    setFieldValue("amtWords", amtWords);
  };

  const { mutateAsync: mutatePost, data, error } = useCreateGRN(PURCHASE_API_URL.POST_GRN);

  const handleSubmit = (values: PostGRN) => {
    const formData = new FormData();
    appendFormData(formData, values);
    mutatePost(formData).then(() => {
      toast.success(data ? data.message : "GRN created.")
      setTimeout(() => {
        navigate(PURCHASE_ROUTES.GET_ALL_GRN);
      }, 2500);
    }).catch(() => {
      toast.error(error ? error.message : "Error while creating GRN.")
    })
  }
  return (
    <>
      <Formik
        initialValues={initValGRN}
        validationSchema={grnSchema}
        validateOnBlur={true}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        {({ values, handleChange, handleSubmit, setFieldValue, handleReset }) => (
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid item xs={12} md={6}>
                <Typography variant='h4'>Goods Received Note</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="row" justifyContent="end" alignItems="center">
                  <Button type="submit" variant="contained" color='success' size='large' sx={{ width: 150 }}>Create</Button>
                  <Button type="reset" variant="contained" color='secondary' size='large' sx={{ width: 150, marginLeft: 2 }} onClick={handleReset}>Reset</Button>
                  <Button variant="contained" color='info' size='large' sx={{ width: 150, marginLeft: 2 }} onClick={() => { dispatch(setPreviewGRN(values)); setPreview(true) }}>Preview</Button>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <RadioGroupInput
                  isRequired={true}
                  label="Type of GRN"
                  name="grnType"
                  alignment="horizontal"
                  options={[{ value: "CC", label: "CC" }, { value: "DC", label: "DC" }]}
                  value={values.grnType}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <SelectInput
                  isRequired={false}
                  label="Select Deal Slip"
                  name="dealSlipId"
                  options={mapToValueLabelArray<GetDealSlip>(dealSlip, 'id', 'dealSlipNo')}
                  value={values.dealSlipId}
                  handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <SelectInput isRequired={true} label="Company Name" name="companyName" options={PURCHASE_ARRAYS.companyNames} value={values.companyName} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput isRequired={true} type="text" name='billNo' label='Bill Number' value={values.billNo} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput isRequired={true} type="text" name='serialNo' label='Serial Number' value={values.serialNo} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} type="text" name='purchaseRequestByWhom' label='Purchase Request By Whom' value={values.purchaseRequestByWhom} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} type="text" name='purchaseLocation' label='Purchase Location' value={values.purchaseLocation} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} type="text" name='purchaseForWhich' label='Purchase For Which Location' value={values.purchaseForWhich} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <TextInput isRequired={false} type="text" name="specialReq" label='Special Request' value={values.specialReq} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} marginY={1}>
                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>Vendor / Farmer Information</Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <RadioGroupInput 
                isRequired={true} 
                label="Source:"
                name="source" 
                alignment="horizontal"
                options={PURCHASE_ARRAYS.source} 
                value={values.source} 
                handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handlesSourceChange(event.target.value, setFieldValue)
                }} />
              </Grid>
              <Grid item xs={12} md={4}>
                {values.source === "vendor" ?
                  (
                    <AutoCompleteInput
                      isRequired={true}
                      name="selectedParty"
                      label="Vendor Company Name"
                      options={mapToValueLabelArray<GetAllFilteredVendorData>(allVendorsFiltered, 'id', 'companyName')}
                      handleChange={(event, newValue) => {
                        if (newValue) {
                          setFieldValue('selectedParty', newValue.value);
                        } else {
                          setFieldValue('selectedParty', '');
                        }
                      }}
                      handleBlur={handleSourceNameChange(values, values.selectedParty)} />
                  ) : (
                    <AutoCompleteInput
                      isRequired={true}
                      name="selectedParty"
                      label="Farmer Name"
                      options={allFarmersFiltered.map((farmer) => ({ value: farmer.id, label: farmer.fullName }))}
                      handleChange={(event, newValue) => {
                        if (newValue) {
                          setFieldValue('selectedParty', newValue.value);
                        } else {
                          setFieldValue('selectedParty', '');
                        }
                      }}
                      handleBlur={handleSourceNameChange(values, values.selectedParty)} />
                  )}
              </Grid>
              {values.source === "vendor" ?
                (<>
                  <Grid item xs={12} md={4}>
                    <TextInput isRequired={false} label='Vendor Code' name='vendorCode' type='text' value={`${selectedVendor?.vendorCode || ''}`} isReadOnly={true} />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextInput isRequired={false} label='Contact Person' name='contactPerson' type='text' value={selectedVendor?.fullName} isReadOnly={true} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput isRequired={false} label='Company Address' name='companyAddress' type='text' value={selectedVendor?.officeAddress ? displayAddress(selectedVendor?.officeAddress) : ''} isReadOnly={true} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextInput isRequired={false} label='Company Email' name='email' type='email' value={`${selectedVendor?.email || ''}`} isReadOnly={true} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextInput isRequired={false} label='Company Contact No' name='contactNo' type='text' value={`${selectedVendor?.officeContactNo || ''}`} isReadOnly={true} />
                  </Grid>
                </>) :
                (<>
                  <Grid item xs={12} md={2}>
                    <TextInput isRequired={false} label='Farmer Code' name='farmerCode' type='text' value={`${selectedFarmer?.farmerCode || ''}`} isReadOnly={true} />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextInput isRequired={false} label='Farmer Email' name='email' type='email' value={`${selectedFarmer?.email || ''}`} isReadOnly={true} />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextInput isRequired={false} label='Farmer Contact No' name='contactNo' type='text' value={`${selectedFarmer?.primaryMobileNo || ''}`} isReadOnly={true} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput isRequired={false} label='Farmer Residential Address' name='residentialAddress' type='text' value={selectedFarmer?.residensialAddress ? displayAddress(selectedFarmer?.residensialAddress) : ''} isReadOnly={true} />
                  </Grid>
                </>)}
              <Grid item xs={12} marginY={2}>
                <Box sx={{ width: '100%' }}>
                  {values.source === "vendor" ?
                    (<Typography variant='body2' sx={{ fontWeight: 600 }}>If Vendor Not Found <Button variant='text' onClick={() => navigate(ADMIN_ROUTES.CREATE_VENDOR)} >Click Here</Button></Typography>) :
                    (<Typography variant='body2' sx={{ fontWeight: 600 }}>If Farmer Not Found <Button variant='text' onClick={() => navigate(ADMIN_ROUTES.CREATE_FARMER)} >Click Here</Button></Typography>)
                  }
                </Box>
              </Grid>
              <Grid item xs={12} marginY={2}>
                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>Product Required</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} padding={1}>
                <FieldArray name="products">
                  {({ push, remove }) => (
                    <>
                      {values.products.map((product, index) => (
                        <Grid container spacing={1} key={index} padding={1} sx={{ border: '1px solid #BDBDBD', borderRadius: 2, marginX: "auto", marginY: 1 }}>
                          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="body1">Product : {index + 1}</Typography>
                          </Grid>
                          <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                            {values.products.length > 1 && <IconButton color='error' size='medium'
                              onClick={() => remove(index)}><Close /></IconButton>}
                          </Grid>
                          <Grid item xs={12} md={4}>
                            <AutoCompleteInput
                              isRequired={true}
                              name={`products.${index}.product`}
                              label="Product Name"
                              options={mapToValueLabelArray(allProducts, 'id', 'name')}
                              handleChange={(event, newValue) => {
                                if (newValue) {
                                  setFieldValue(`products.${index}.product`, newValue.value);
                                } else {
                                  setFieldValue(`products.${index}.product`, '');
                                }
                              }}
                              handleBlur={handleProductNameChange(values.products[index].product)}
                            />
                          </Grid>
                          <Grid item xs={4} md={2}>
                            <TextInput isRequired={false} name="productOrigin" label="Origin" value={selectedProduct?.productOrigin ? selectedProduct?.productOrigin : ''} isReadOnly={true} />
                          </Grid>
                          <Grid item xs={4} md={3}>
                            <SelectInput
                              isRequired={true}
                              id={`products.${index}.count`}
                              label="Count"
                              name={`products.${index}.count`}
                              value={values.products[index].count}
                              options={selectedProduct?.count.map((count) => ({ value: count, label: count }))}
                              handleChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={4} md={3}>
                            <SelectInput isRequired={false} label="Unit" name={`products.${index}.uom`} options={mapToValueLabelArray(allUOMs, 'id', 'unit')} value={values.products[index].uom} handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={4} md={4}>
                            <TextInput isRequired={true} label='Quantity' name={`products.${index}.quantity`} type='number' value={values.products[index].quantity}
                              handleChange={(e) => {
                                handleChange(e);
                                setFieldValue(`products.${index}.quantity`, parseFloat(e.target.value) || 0);
                              }}
                              onBlur={() => calculateAmounts(values, setFieldValue)}
                            />
                          </Grid>
                          <Grid item xs={4} md={4}>
                            <TextInput isRequired={true} label='Rate' name={`products.${index}.rate`} type='number' value={values.products[index].rate}
                              handleChange={(e) => {
                                handleChange(e);
                                setFieldValue(`products.${index}.rate`, parseFloat(e.target.value) || 0);
                              }}
                              onBlur={() => calculateAmounts(values, setFieldValue)}
                            />
                          </Grid>
                          <Grid item xs={4} md={4}>
                            <TextInput isRequired={false} label='Amount' name={`products.${index}.amt`} type='number' value={values.products[index].amt} handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextInput isRequired={false} label='Purchase Date' name={`products.${index}.purchaseDate`} type='date' value={values.products[index].purchaseDate} handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextInput isRequired={false} label='Dispatch Date' name={`products.${index}.dispatchDate`} type='date' value={values.products[index].dispatchDate} handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={3}>
                            <TextInput isRequired={false} label='Delivery Date' name={`products.${index}.deliveryDate`} type='date' value={values.products[index].deliveryDate} handleChange={handleChange} />
                          </Grid>
                          {values.source === "farmer" ?
                            (<Grid item xs={12} md={3}>
                              <TextInput isRequired={false} label='Expected Harvest Date' name={`products.${index}.expectedHarvestDate`} type='date' value={values.products[index].expectedHarvestDate} handleChange={handleChange} />
                            </Grid>) : ('')}
                          <Grid item xs={12} md={3}>
                            <TextInput isRequired={false} label='Delivery Location' name={`products.${index}.deliveryLocation`} type='text' value={values.products[index].deliveryLocation} handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={9}>
                            <RadioGroupInput isRequired={true} label="RTV" name={`products.${index}.rtv`} options={[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }]} value={values.products[index].rtv} onChange={handleChange} />
                          </Grid>
                        </Grid>
                      ))}
                      <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Button
                          startIcon={<Add />}
                          variant="text"
                          color='success'
                          size='large'
                          sx={{ width: 150 }}
                          onClick={() => push(initValRFPAItems)}>
                          Add More
                        </Button>
                      </Box>
                    </>
                  )}
                </FieldArray>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput isRequired={false} isReadOnly={true} label="Subtotal" name="subTotalAmt" type='number' value={values.subTotalAmt} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput isRequired={false} label="Freight" name="freight" type='number' value={values.freight} handleChange={handleChange} onBlur={() => calculateAmounts(values, setFieldValue)} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput isRequired={false} label="Other Charges" name="otherCharges" type='number' value={values.otherCharges} handleChange={handleChange} onBlur={() => calculateAmounts(values, setFieldValue)} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput isRequired={false} isReadOnly={true} label="Total Amount" name="totalAmt" type='number' value={values.totalAmt} />
              </Grid>
              <Grid item xs={12}>
                <TextInput isRequired={false} isReadOnly={true} label="Total Amount in Words" name="amtWords" type='text' value={values.amtWords} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput isRequired={false} label="Vehicle Number" name="vehicleNo" type='text' value={values.vehicleNo} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput isRequired={false} label="Crates In" name="cratesIn" type='number' value={values.cratesIn} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput isRequired={false} label="Time In" name='timeIn' type='time' value={values.timeIn} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput isRequired={false} label="Received Through" name="receivedThrough" type='text' value={values.receivedThrough} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput isRequired={false} label="Purchase By" name="purchasedBy" type='text' value={values.purchasedBy} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} label="Delivery Receiving Person" name="deliveryReceivingPerson" type='text' value={values.deliveryReceivingPerson} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={false} label="Security Person Name" name="securityPerson" type='text' value={values.securityPerson} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} label="RM Name" name="rmn" type='text' value={values.rmn} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextInput isRequired={false} label="Remark" name="remark" type='text' value={values.remark} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <ImageUpload isRequired={false} name='billImage' label='Bill Image' />
              </Grid>
            </Grid>
          </form>)}
      </Formik >
      <GRNPreview />
    </>
  )
}
