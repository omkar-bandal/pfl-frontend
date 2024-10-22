import React from 'react'
import { useDispatch } from 'react-redux'
import { Add, Close, CloudUploadOutlined } from '@mui/icons-material'
import { AppBar, Autocomplete, Box, Button, Dialog, Divider, FormControl, FormControlLabel, FormHelperText, Grid, IconButton, MenuItem, Radio, RadioGroup, Select, Slide, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from '@mui/material'
import { dealSlipDataState, displayAddress, grnDataState, initValGRN, initValRFPAItems, numToWords, PURCHASE_ARRAYS, PURCHASE_ROUTES, setDealSlipData, setPreviewGRN } from '@prime-fresh/purchase/modules';
import { useAppSelector } from '@prime-fresh/modules';
import { Field, FieldArray, FieldProps, Formik } from 'formik';
import { farmersDataState, setVendorData, setFarmerData, vendorsDataState, productsDataState, uomsDataState, setProducts, setUOMs, setSelectedVendor, setSelectedFarmer, Product, Address, setSelectedProduct, ADMIN_ROUTES, Vendor, Farmer, UOM } from '@prime-fresh/admin_modules';
import { ADMIN_API_URL, useGetAllFarmers, useGetAllProducts, useGetAllUOMs, useGetAllVendors } from '@prime-fresh/admin_api';
import { GetDealSlip, PostGRN, PURCHASE_API_URL, useCreateGRN, useGetAllDealSlip } from '@prime-fresh/purchase_api';
import { useNavigate } from 'react-router-dom';
import { AutoCompleteInput, ImageUpload, mapToValueLabelArray, RadioGroupInput, SelectInput, TextInput } from '@prime-fresh/ui_shared';
import { GRNPreview } from './GRN_Preview';

export const GRNForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: dealSlips } = useGetAllDealSlip(PURCHASE_API_URL.GET_ALL_DEAL_SLIP);
  const { data: Vendors } = useGetAllVendors(ADMIN_API_URL.GET_ALL_VENDORS);
  const { data: Farmers } = useGetAllFarmers(ADMIN_API_URL.GET_ALL_FARMERS);
  const { data: Products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
  const { data: UOMs } = useGetAllUOMs(ADMIN_API_URL.GET_UOM);
  const { allVendors, selectedVendor } = useAppSelector(vendorsDataState);
  const { allFarmers, selectedFarmer } = useAppSelector(farmersDataState);
  const { allProducts, selectedProduct } = useAppSelector(productsDataState);
  const { allUOMs } = useAppSelector(uomsDataState);
  const { dealSlip } = useAppSelector(dealSlipDataState);

  React.useEffect(() => {
    dispatch(setDealSlipData(dealSlips ? dealSlips : []));
    dispatch(setVendorData(Vendors ? Vendors : []));
    dispatch(setProducts(Products ? Products : []));
    dispatch(setUOMs(UOMs ? UOMs : []));
  }, [dispatch, Products, Vendors, UOMs]);

  const handlesSourceChange = (value: string, setFieldValue: (field: string, value: string | undefined) => void) => {
    setFieldValue("source", value);
    value === "vendor" ? dispatch(setVendorData(Vendors ? Vendors : [])) : dispatch(setFarmerData(Farmers ? Farmers : []));
  };

  const handleSourceNameChange = (values: PostGRN, dataId: string) => {
    if (values.source === "vendor") {
      const selectedVendor = allVendors.find((vendor) => vendor.id === dataId);
      dispatch(setSelectedVendor(selectedVendor));
    } else if (values.source === "farmer") {
      const selectedFarmer = allFarmers.find((farmer) => farmer.id === dataId)
      dispatch(setSelectedFarmer(selectedFarmer))
    }
  };
  const handleProductNameChange = (dataId: string) => {
    const selectedProduct: Product | undefined = allProducts.find((products) => products.id === dataId);
    dispatch(setSelectedProduct(selectedProduct));
  }

  const { mutateAsync: mutatePost } = useCreateGRN(PURCHASE_API_URL.POST_GRN);
  const { previewGRN } = useAppSelector(grnDataState);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const calculateAmounts = (values: any, setFieldValue: any) => {
    const updatedProducts = values.products.map((product: any) => ({
      ...product,
      amt: product.quantity * product.rate,
    }));

    // Calculate subtotal from the product amounts
    const subTotalAmt = updatedProducts.reduce((acc: any, product: any) => acc + product.amt, 0);

    // Calculate total (subtotal + freight + other charges)
    const totalAmt = subTotalAmt + values.freight + values.otherCharges;

    // Convert total amount to words
    const amtWords = numToWords(totalAmt);

    // Update form fields with calculated values
    setFieldValue("products", updatedProducts);
    setFieldValue("subTotalAmt", subTotalAmt);
    setFieldValue("totalAmt", totalAmt);
    setFieldValue("amtWords", amtWords);
  };

  const handleSubmit = (values: PostGRN) => {
    const formData = new FormData();
    (Object.keys(values) as Array<keyof PostGRN>).forEach((key) => {
      const value = values[key];
      // Check if the value is the file (image), handle it accordingly
      if (key === "billImage" && value instanceof File) {
        formData.append(key, value as File); // Append the file
        console.log(formData)
      } else if (typeof value !== "undefined" && value !== null) {
        formData.append(key, value.toString()); // Append other fields, convert to string
      }
    });
    console.log(values.billImage);
    console.log(formData);
    mutatePost(formData);
    // navigate(PURCHASE_ROUTES.GET_ALL_GRN);
  }
  return (
    <>
      <Formik
        initialValues={initValGRN}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values, touched, handleChange, handleSubmit, setFieldValue, errors }) => (
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
              <Grid item xs={12} md={6}>
                <Typography variant='h4'>Goods Received Note</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="row" justifyContent="end" alignItems="center">
                  <Button type="submit" variant="contained" color='success' size='large' sx={{ width: 150 }}>Create</Button>
                  <Button type="reset" variant="contained" color='secondary' size='large' sx={{ width: 150, marginLeft: 2 }}>Reset</Button>
                  <Button type="reset" variant="contained" color='info' size='large' sx={{ width: 150, marginLeft: 2 }} onClick={() => { dispatch(setPreviewGRN(values)); setOpen(true) }}>Preview</Button>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3}>
                <SelectInput
                  isRequired={true}
                  label="Select Deal Slip"
                  name="dealSlipId"
                  options={mapToValueLabelArray<GetDealSlip>(dealSlip, 'id', 'dealSlipNo')}
                  value={values.dealSlipId}
                  handleChange={handleChange}
                  touched={touched}
                  errors={errors} />
              </Grid>
              <Grid item xs={12} md={4}>
                <SelectInput isRequired={true} label="Company Name" name="companyName" options={PURCHASE_ARRAYS.companyNames} value={values.companyName} handleChange={handleChange} touched={touched} errors={errors} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput isRequired={true} type="text" name='billNo' label='Bill Number' value={values.billNo} handleChange={handleChange} errors={errors} touched={touched} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput isRequired={true} type="text" name='serialNo' label='Serial Number' value={values.serialNo} handleChange={handleChange} errors={errors} touched={touched} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} type="text" name='purchaseRequestByWhom' label='Purchase Request By Whom' value={values.purchaseRequestByWhom} handleChange={handleChange} errors={errors} touched={touched} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} type="text" name='purchaseLocation' label='Purchase Location' value={values.purchaseLocation} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextInput isRequired={true} type="text" name='purchaseForWhich' label='Purchase For Which Location' value={values.purchaseForWhich} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <TextInput isRequired={true} type="text" name="specialReq" label='Special Request' value={values.specialReq} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} marginY={2}>
                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                  <Typography variant='body2' sx={{ fontWeight: 600 }}>Vendor / Farmer Information</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                <RadioGroupInput isRequired={true} label="Source:" name="source" options={PURCHASE_ARRAYS.source} value={values.source} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handlesSourceChange(event.target.value, setFieldValue)
                }} />
              </Grid>
              <Grid item xs={12} md={4}>
                {values.source === "vendor" ?
                  (
                    <AutoCompleteInput isRequired={true} name="selectedParty" label="Vendor Company Name" options={mapToValueLabelArray<Vendor>(allVendors, 'id', 'companyName')} errors={errors} touched={touched} handleChange={(event, newValue) => {
                      if (newValue) {
                        setFieldValue('selectedParty', newValue.value);
                        handleSourceNameChange(values, newValue.value || '');
                      } else {
                        setFieldValue('selectedParty', '');
                        handleSourceNameChange(values, '');
                      }
                    }} />
                  ) : (
                    <AutoCompleteInput
                      isRequired={true}
                      name="selectedParty"
                      label="Farmer Name"
                      options={mapToValueLabelArray<Farmer>(allFarmers, 'id', 'farmerfName')}
                      errors={errors}
                      touched={touched}
                      handleChange={(event, newValue) => {
                        if (newValue) {
                          setFieldValue('selectedParty', newValue.value);
                          handleSourceNameChange(values, newValue.value || '');
                        } else {
                          setFieldValue('selectedParty', '');
                          handleSourceNameChange(values, '');
                        }
                      }} />
                  )}
              </Grid>
              {values.source === "vendor" ?
                (<>
                  <Grid item xs={12} md={4}>
                    <TextInput isRequired={false} label='Vendor Code' name='vendorCode' type='text' value={`${selectedVendor?.vendorCode || ''}`} isReadOnly={true} />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextInput isRequired={false} label='Contact Person' name='contactPerson' type='text' value={`${selectedVendor?.vendorSaleInfo.contactFName || ''} ${selectedVendor?.vendorSaleInfo.contactMName || ''} ${selectedVendor?.vendorSaleInfo.contactLName || ''}`} isReadOnly={true} />
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
                          <Grid item xs={12} md={3}>
                            <Grid container direction="column">
                              <Grid item xs={12}>
                                <Typography variant='body2'>Product Name</Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Autocomplete
                                  id={`products.${index}.product`}
                                  size="small"
                                  fullWidth
                                  options={allProducts}
                                  getOptionLabel={allProducts => allProducts.name}
                                  onChange={(event, newValue: Product | null) => {
                                    if (newValue) {
                                      setFieldValue(`products.${index}.product`, newValue.id);
                                      handleProductNameChange(newValue.id || '');
                                    } else {
                                      setFieldValue(`products.${index}.product`, '');
                                      handleProductNameChange('');
                                    }
                                  }}
                                  renderInput={(params) => <TextField {...params} />}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={4} md={3}>
                            <SelectInput isRequired={true} label="Unit" name={`products.${index}.uom`} options={mapToValueLabelArray<UOM>(allUOMs, 'id', 'unit')} value={values.products[index].uom} handleChange={handleChange} touched={touched} errors={errors} />
                          </Grid>
                          <Grid item xs={4} md={2}>
                            <TextInput isRequired={false} label='Quantity' name={`products.${index}.quantity`} type='number' value={values.products[index].quantity}
                              handleChange={(e) => {
                                handleChange(e);
                                setFieldValue(`products.${index}.quantity`, parseFloat(e.target.value) || 0);
                              }}
                              onBlur={() => calculateAmounts(values, setFieldValue)}
                            />
                          </Grid>
                          <Grid item xs={4} md={2}>
                            <TextInput isRequired={false} label='Rate' name={`products.${index}.rate`} type='number' value={values.products[index].rate}
                              handleChange={(e) => {
                                handleChange(e);
                                setFieldValue(`products.${index}.rate`, parseFloat(e.target.value) || 0);
                              }}
                              onBlur={() => calculateAmounts(values, setFieldValue)}
                            />
                          </Grid>
                          <Grid item xs={4} md={2}>
                            <TextInput isRequired={false} label='Amount' name={`products.${index}.amt`} type='number' value={values.products[index].amt} handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={2.5}>
                            <TextInput isRequired={false} label='Purchase Date' name={`products.${index}.purchaseDate`} type='date' value={values.products[index].purchaseDate} handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={2.5}>
                            <TextInput isRequired={false} label='Dispatch Date' name={`products.${index}.dispatchDate`} type='date' value={values.products[index].dispatchDate} handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={2.5}>
                            <TextInput isRequired={false} label='Delivery Date' name={`products.${index}.deliveryDate`} type='date' value={values.products[index].deliveryDate} handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={2.5}>
                            <TextInput isRequired={false} label='Delivery Location' name={`products.${index}.deliveryLocation`} type='text' value={values.products[index].deliveryLocation} handleChange={handleChange} />
                          </Grid>
                          <Grid item xs={12} md={2}>
                            <RadioGroupInput isRequired={true} label="RTV" name={`products.${index}.rtv`} options={[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }]} value={values.products[index].rtv} onChange={handleChange} />
                          </Grid>
                          {localStorage.getItem("role") === "MANAGER" &&
                            <Grid item xs={12} md={2.5}>
                              <TextInput isRequired={false} label='Revised Rate' name={`products.${index}.revisedRate`} type='number' value={values.products[index].revisedRate} handleChange={handleChange} />
                            </Grid>
                          }
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
              <Grid item xs={12} md={1}>
                <TextInput isRequired={false} label="Crates In" name="cratesIn" type='number' value={values.cratesIn} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput isRequired={false} label="Time In" name='timeIn' type='time' value={values.timeIn} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput isRequired={false} label="Received Through" name="receivedThrough" type='text' value={values.receivedThrough} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextInput isRequired={false} label="Purchase By" name="purchasedBy" type='text' value={values.purchasedBy} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextInput isRequired={false} label="Security Person Name" name="securityPerson" type='text' value={values.securityPerson} handleChange={handleChange} />
              </Grid>
              <Grid item xs={12}>
                <ImageUpload isRequired={false} name='billImage' label='Bill Image' />
              </Grid>
            </Grid>
          </form>)}
      </Formik >
      <GRNPreview open={open} handleClose={handleClose} />
    </>
  )
}
