import React from 'react'
import { useDispatch } from 'react-redux'
import { Add, Close } from '@mui/icons-material'
import { Autocomplete, Box, Button, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import { initValRFPAItems, PURCHASE_ARRAYS, PURCHASE_ROUTES, rfpaDataState, setPreviewRFPA } from '@prime-fresh/purchase/modules';
import { PostRFPA } from '@prime-fresh/purchase_api';
import { setPreview, useAppSelector } from '@prime-fresh/modules';
import { FieldArray, Formik } from 'formik';
import { initValRFPA, rfpaSchema } from '@prime-fresh/purchase/modules';
import { farmersDataState, setVendorData, setFarmerData, vendorsDataState, productsDataState, uomsDataState, setProducts, setUOMs, setSelectedVendor, setSelectedFarmer, Address, setSelectedProduct, ADMIN_ROUTES} from '@prime-fresh/admin/modules';
import { ADMIN_API_URL, GetFarmer, GetProduct, GetVendor, useGetAllFarmers, useGetAllProducts, useGetAllUOMs, useGetAllVendors } from '@prime-fresh/admin_api';
import { PURCHASE_API_URL, useCreateRFPA } from '@prime-fresh/purchase_api';
import { useNavigate } from 'react-router-dom';
import { AutoCompleteInput, mapToValueLabelArray, RadioGroupInput, SelectInput, TextInput } from '@prime-fresh/ui_shared';
import { RFPAPreview } from './RFPA_Preview';

export const RFPAForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: Vendors } = useGetAllVendors(ADMIN_API_URL.GET_ALL_VENDORS);
    const { data: Farmers } = useGetAllFarmers(ADMIN_API_URL.GET_ALL_FARMERS);
    const { data: Products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
    const { data: UOMs } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
    const [source, setSource] = React.useState<string>();
    const { allVendors, selectedVendor } = useAppSelector(vendorsDataState);
    const { allFarmers, selectedFarmer } = useAppSelector(farmersDataState);
    const { allProducts, selectedProduct } = useAppSelector(productsDataState);
    const { allUOMs } = useAppSelector(uomsDataState);

    React.useEffect(() => {
        setSource("vendor");
        dispatch(setVendorData(Vendors ? Vendors : []));
        dispatch(setProducts(Products ? Products : []));
        dispatch(setUOMs(UOMs ? UOMs : []));
    }, [dispatch, setSource, Products, Vendors, UOMs]);

    const handlesSourceChange = (value: string, setFieldValue: (field: string, value: string | undefined) => void) => {
        setFieldValue("source", value);
        setSource(value);
        value === "vendor" ? dispatch(setVendorData(Vendors ? Vendors : [])) : dispatch(setFarmerData(Farmers ? Farmers : []));
    };

    const handleSourceNameChange = (values: PostRFPA, dataId: string) => {
        if (values.source === "vendor") {
          const selectedVendor = allVendors.find((vendor) => vendor.id === dataId);
          dispatch(setSelectedVendor(selectedVendor));
        } else if (values.source === "farmer") {
          const selectedFarmer = allFarmers.find((farmer) => farmer.id === dataId)
          dispatch(setSelectedFarmer(selectedFarmer))
        }
      };
    const handleProductNameChange = (dataId: string) => {
        const selectedProduct: GetProduct | undefined = allProducts.find((products) => products.id === dataId);
        dispatch(setSelectedProduct(selectedProduct));
    }
    const displayAddress = (value: Address | undefined) => {
        return `${value?.address1 || ''}, ${value?.address2 || ''}, ${value?.location || ''}, ${value?.city || ''}, ${value?.state || ''}, ${value?.pincode || ''}`;
    }
    const calculateTotoalPrice = (values: PostRFPA, index: number, setFieldValue: (field: string, value: string | undefined) => void) => {
        const total = values.rfpaProducts[index].quantity * values.rfpaProducts[index].unitPrice;
        setFieldValue(`rfpaProducts.${index}.totalVal`, total.toLocaleString());
        console.log("Total", total);
    }
    const { mutateAsync: mutatePost } = useCreateRFPA(PURCHASE_API_URL.POST_RFPA);
    
    return (
        <>
            <Formik
                initialValues={initValRFPA}
                validationSchema={rfpaSchema}
                onSubmit={(values) => {
                    console.log(values);
                    mutatePost(values);
                    navigate(PURCHASE_ROUTES.GET_ALL_RFPA);
                }}
            >
                {({ values, handleChange, handleSubmit, setFieldValue, touched, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='h4'>Request For Purchase Approval</Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack direction="row" justifyContent="end" alignItems="center">
                                    <Button type="submit" variant="contained" color='success' size='large' sx={{ width: 150 }}>Create</Button>
                                    <Button type="reset" variant="contained" color='secondary' size='large' sx={{ width: 150, marginLeft: 2 }}>Reset</Button>
                                    <Button variant="contained" color='info' size='large' sx={{ width: 150, marginLeft: 2 }} onClick={() => { dispatch(setPreviewRFPA(values)); dispatch(setPreview(true)) }}>Preview</Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <SelectInput isRequired={true} label="Company Name" name="companyName" options={PURCHASE_ARRAYS.companyNames} value={values.companyName} handleChange={handleChange} touched={touched} errors={errors} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput isRequired={true} type="text" label="Purchase Location" name="purchaseLocation" value={values.purchaseLocation} handleChange={handleChange} touched={touched} errors={errors} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput isRequired={true} type="text" label="Purchase For Which Location" name="purchaseForWhich" value={values.purchaseForWhich} handleChange={handleChange} touched={touched} errors={errors} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput isRequired={false} type="text" label="Special Request" name="specialReq" value={values.specialReq} handleChange={handleChange} touched={touched} errors={errors} />
                            </Grid>
                            <Grid item xs={12} marginY={2}>
                                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 600 }}>Vendor / Farmer Information</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <RadioGroupInput
                                    isRequired={true}
                                    label="Source : "
                                    name="source"
                                    options={PURCHASE_ARRAYS.source}
                                    value={source}
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
                                        options={mapToValueLabelArray<GetVendor>(allVendors, 'id', 'companyName')} 
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
                                    ) : (
                                        <AutoCompleteInput
                                            isRequired={true}
                                            name="selectedParty"
                                            label="Farmer Name"
                                            options={mapToValueLabelArray<GetFarmer>(allFarmers, 'id', 'farmerfName')}
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
                                <FieldArray name="rfpaProducts">
                                    {({ push, remove }) => (
                                        <>
                                            {values.rfpaProducts.map((product, index) => (

                                                <Grid container spacing={1} key={index} padding={1} sx={{ border: '1px solid #BDBDBD', borderRadius: 2, marginX: "auto", marginY: 1 }}>
                                                    <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
                                                        <Typography variant="body1">Product : {index + 1}</Typography>
                                                    </Grid>
                                                    <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                                                        <IconButton color='error' size='medium'
                                                            onClick={() => remove(index)}><Close /></IconButton>
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <Grid container direction="column">
                                                            <Grid item xs={12}>
                                                                <Typography variant='body2'>Product Name</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <Autocomplete
                                                                    id={`rfpaProducts.${index}.product`}
                                                                    size="small"
                                                                    fullWidth
                                                                    options={allProducts}
                                                                    getOptionLabel={allProducts => allProducts.name}
                                                                    onChange={(event, newValue: GetProduct | null) => {
                                                                        if (newValue) {
                                                                            setFieldValue(`rfpaProducts.${index}.product`, newValue.id);
                                                                            handleProductNameChange(newValue.id || '');
                                                                        } else {
                                                                            setFieldValue(`rfpaProducts.${index}.product`, '');
                                                                            handleProductNameChange('');
                                                                        }
                                                                    }}

                                                                    renderInput={(params) => <TextField {...params} />}
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <TextInput isRequired={false} name="productCode" label="Product Code" value={selectedProduct?.productCode} isReadOnly={true}/>
                                                    </Grid>
                                                    <Grid item xs={12} md={1}>
                                                        <TextInput isRequired={false} id={`rfpaProducts.${index}.grade`} name={`rfpaProducts.${index}.grade`} label="Product Grade" value={values.rfpaProducts[index].grade} onChange={handleChange}/>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <SelectInput isRequired={true} id={`rfpaProducts.${index}.uom`} name={`rfpaProducts.${index}.uom`} label="UOM" value={values.rfpaProducts[index].uom} options={mapToValueLabelArray(allUOMs, 'id', 'unit')} onChange={handleChange} />
                                                    </Grid>
                                                    <Grid item xs={4} md={1}>
                                                        <TextInput isRequired={true} type="number" id={`rfpaProducts.${index}.quantity`} name={`rfpaProducts.${index}.quantity`} label="Quantity" value={values.rfpaProducts[index].quantity} onChange={handleChange}/>
                                                    </Grid>
                                                    <Grid item xs={4} md={1}>
                                                        <TextInput isRequired={true} type="number" id={`rfpaProducts.${index}.unitPrice`} name={`rfpaProducts.${index}.unitPrice`} label="Unit Price" value={values.rfpaProducts[index].unitPrice} onChange={handleChange}/>
                                                    </Grid>
                                                    <Grid item xs={4} md={1}>
                                                        <TextInput isRequired={true} type="number" id={`rfpaProducts.${index}.totalVal`} name={`rfpaProducts.${index}.totalVal`} label="Total Price" value={values.rfpaProducts[index].totalVal} onChange={handleChange}/>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextInput isRequired={true} id={`rfpaProducts.${index}.description`} name={`rfpaProducts.${index}.description`} label="Description" value={values.rfpaProducts[index].description} onChange={handleChange}/>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput isRequired={true} type='date' id={`rfpaProducts.${index}.purchaseDate`} name={`rfpaProducts.${index}.purchaseDate`} label="Purchase Date" value={values.rfpaProducts[index].purchaseDate} onChange={handleChange}/>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput isRequired={true} type='date' id={`rfpaProducts.${index}.dispatchDate`} name={`rfpaProducts.${index}.dispatchDate`} label="Dispatch Date" value={values.rfpaProducts[index].dispatchDate} onChange={handleChange}/>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput isRequired={true} type='date' id={`rfpaProducts.${index}.deliveryDate`} name={`rfpaProducts.${index}.deliveryDate`} label="Delivery Date" value={values.rfpaProducts[index].deliveryDate} onChange={handleChange}/>
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <TextInput isRequired={true} id={`rfpaProducts.${index}.deliveryLocation`} name={`rfpaProducts.${index}.deliveryLocation`} label="Delivery Location" value={values.rfpaProducts[index].deliveryLocation} onChange={handleChange}/>
                                                    </Grid>
                                                    {source === "farmer" &&
                                                        (<Grid item xs={2}>
                                                            <TextInput isRequired={true} type='date' id={`rfpaProducts.${index}.expectedHarvestDate`} name={`rfpaProducts.${index}.expectedHarvestDate`} label="Expected Harvest Date" value={values.rfpaProducts[index].expectedHarvestDate} onChange={handleChange}/>
                                                        </Grid>)}
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
                            <Grid item xs={12} marginY={2}>
                                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 600 }}>Additional Requirements</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                            <TextInput isRequired={true} id="paymentInfo.paymentMode" name="paymentInfo.paymentMode" label="Payment Mode" value={values.paymentInfo.paymentMode} onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                            <TextInput isRequired={true} type="date" id="paymentInfo.paymentDate" name="paymentInfo.paymentDate" label="Payment Date" value={values.paymentInfo.paymentDate} onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                            <TextInput isRequired={true} type="number" id="paymentInfo.advancePaidAmt" name="paymentInfo.advancePaidAmt" label="Advance Paid Amount" value={values.paymentInfo.advancePaidAmt} onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput isRequired={true} type="number" label="Payment Terms (in Days)" id="paymentInfo.paymentTerms" name="paymentInfo.paymentTerms" value={values.paymentInfo.paymentTerms} onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput isRequired={true} label="Delivery Receiving Person" id="deliveryReceivingPerson" name="deliveryReceivingPerson" value={values.deliveryReceivingPerson} onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput isRequired={true} label="Validity of Quote" id="validityOfQuote" name="validityOfQuote" value={values.validityOfQuote} onChange={handleChange}/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextInput isRequired={true} label="Packaging Instructions" id="packingInstruction" name="packingInstruction" value={values.packingInstruction} onChange={handleChange}/>
                            </Grid>
                        </Grid>
                    </form>)}
            </Formik>
            <RFPAPreview />
        </>
    )
}
