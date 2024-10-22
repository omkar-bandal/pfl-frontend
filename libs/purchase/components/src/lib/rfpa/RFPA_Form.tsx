import React from 'react'
import { useDispatch } from 'react-redux'
import { Add, Close } from '@mui/icons-material'
import { AppBar, Autocomplete, Box, Button, Dialog, Divider, FormControl, FormControlLabel, FormHelperText, Grid, IconButton, MenuItem, Radio, RadioGroup, Select, Slide, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Typography } from '@mui/material'
import { initValRFPAItems, PURCHASE_ARRAYS, PURCHASE_ROUTES, rfpaDataState, setPreviewRFPA } from '@prime-fresh/purchase/modules';
import {PostRFPA} from '@prime-fresh/purchase_api';
import {useAppSelector} from '@prime-fresh/modules';
import { FieldArray, Formik } from 'formik';
import { initValRFPA, rfpaSchema } from '@prime-fresh/purchase/modules';
import { farmersDataState, setVendorData, setFarmerData, vendorsDataState, productsDataState, uomsDataState, setProducts, setUOMs, setSelectedVendor, setSelectedFarmer, Product, Address, setSelectedProduct, ADMIN_ROUTES, Vendor, Farmer } from '@prime-fresh/admin_modules';
import { ADMIN_API_URL, useGetAllFarmers, useGetAllProducts, useGetAllUOMs, useGetAllVendors } from '@prime-fresh/admin_api';
import {PURCHASE_API_URL, useCreateRFPA} from '@prime-fresh/purchase_api';
import { useNavigate } from 'react-router-dom';
import { TransitionProps } from '@mui/material/transitions';
import { SelectInput } from '@prime-fresh/ui_shared';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export const RFPAForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: Vendors } = useGetAllVendors(ADMIN_API_URL.GET_ALL_VENDORS);
    const { data: Farmers } = useGetAllFarmers(ADMIN_API_URL.GET_ALL_FARMERS);
    const { data: Products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
    const { data: UOMs } = useGetAllUOMs(ADMIN_API_URL.GET_UOM);
    const [source, setSource] = React.useState<string>();
    const { allVendors, selectedVendor } = useAppSelector(vendorsDataState);
    const { allFarmers, selectedFarmer } = useAppSelector(farmersDataState);
    const { allProducts, selectedProduct } = useAppSelector(productsDataState);
    const {allUOMs} = useAppSelector(uomsDataState);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

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

    const handleSourceNameChange = (dataId: string) => {
        if (source === "vendor") {
            const selectedVendor = allVendors.find((vendor) => vendor.id === dataId);
            dispatch(setSelectedVendor(selectedVendor));
        } else if (source === "farmer") {
            const selectedFarmer = allFarmers.find((farmer) => farmer.id === dataId)
            dispatch(setSelectedFarmer(selectedFarmer))
        }
    };
    const handleProductNameChange = (dataId: string) => {
        const selectedProduct: Product | undefined = allProducts.find((products) => products.id === dataId);
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
   const {selectedRFPA} = useAppSelector(rfpaDataState);
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
                                    <Button variant="contained" color='info' size='large' sx={{ width: 150, marginLeft: 2 }} onClick={() => {dispatch(setPreviewRFPA(values)); setOpen(true);}}>Preview</Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={4}>
                            <SelectInput isRequired={true} label="Company Name" name="companyName" options={PURCHASE_ARRAYS.companyNames} value={values.companyName} handleChange={handleChange} touched={touched} errors={errors} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <Typography variant='body2'>Purchase Location</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="small" id="purchaseLocation" name="purchaseLocation" fullWidth value={values.purchaseLocation} onChange={handleChange} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <Typography variant='body2'>Purchase For Which Location</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="small" id="purchaseForWhich" name="purchaseForWhich" fullWidth value={values.purchaseForWhich} onChange={handleChange} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <Typography variant='body2'>Special Request</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="small" id="specialReq" name="specialReq" fullWidth value={values.specialReq} onChange={handleChange} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} marginY={2}>
                                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                    <Typography variant='body2' sx={{ fontWeight: 600 }}>Vendor / Farmer Information</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                <Typography variant='body2' component="span">Source : </Typography>
                                <FormControl sx={{ marginLeft: 2 }}>
                                    <RadioGroup
                                        row
                                        aria-labelledby="source"
                                        name="source"
                                        value={source}
                                        onChange={(event) => {
                                            handlesSourceChange(event.target.value, setFieldValue)
                                        }}
                                    >
                                        <FormControlLabel value="vendor" control={<Radio />} label="Vendor" />
                                        <FormControlLabel value="farmer" control={<Radio />} label="Farmer" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <Typography variant='body2'>{source === "vendor" ? "Vendor Company Name" : "Farmer Name"}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {source === "vendor" ?
                                            (<Autocomplete
                                                id="selectedParty"
                                                size="small"
                                                fullWidth
                                                options={allVendors}
                                                getOptionLabel={allVendors => allVendors.companyName}
                                                onChange={(event, newValue: Vendor | null) => {
                                                    if (newValue) {
                                                        setFieldValue('selectedParty', newValue.id);
                                                        handleSourceNameChange(newValue.id || '');
                                                    } else {
                                                        setFieldValue('selectedParty', '');
                                                        handleSourceNameChange('');
                                                    }
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />) :
                                            (<Autocomplete
                                                id="selectedParty"
                                                size="small"
                                                fullWidth
                                                options={allFarmers}
                                                getOptionLabel={allFarmers => `${allFarmers.farmerfName || ''} ${allFarmers.farmermName || ''} ${allFarmers.farmerlName || ''}`}
                                                onChange={(event, newValue: Farmer | null) => {
                                                    if (newValue) {
                                                        setFieldValue('selectedParty', newValue.id);
                                                        handleSourceNameChange(newValue.id || '');
                                                    } else {
                                                        setFieldValue('selectedParty', '');
                                                        handleSourceNameChange('');
                                                    }
                                                }}
                                                renderInput={(params) => <TextField {...params} />}
                                            />)
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                            {source === "vendor" ?
                                (<>
                                    <Grid item xs={12} md={4}>
                                        <Grid container direction="column">
                                            <Grid item xs={12}>
                                                <Typography variant='body2'>Vendor Code</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    value={selectedVendor?.vendorCode}
                                                    InputProps={{ readOnly: true }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Grid container direction="column">
                                            <Grid item xs={12}>
                                                <Typography variant='body2'>Contact Person</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    value={`${selectedVendor?.vendorSaleInfo.contactFName || ''} ${selectedVendor?.vendorSaleInfo.contactMName || ''} ${selectedVendor?.vendorSaleInfo.contactLName || ''}`}
                                                    InputProps={{ readOnly: true }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container direction="column">
                                            <Grid item xs={12}>
                                                <Typography variant='body2'>Company Address</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    value={displayAddress(selectedVendor?.officeAddress)}
                                                    InputProps={{ readOnly: true }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container direction="column">
                                            <Grid item xs={12}>
                                                <Typography variant='body2'>Company Email</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    value={selectedVendor?.email}
                                                    InputProps={{ readOnly: true }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container direction="column">
                                            <Grid item xs={12}>
                                                <Typography variant='body2'>Company Contact No</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    value={selectedVendor?.officeContactNo}
                                                    InputProps={{ readOnly: true }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>) :
                                (<>
                                    <Grid item xs={12} md={3}>
                                        <Grid container direction="column">
                                            <Grid item xs={12}>
                                                <Typography variant='body2'>Farmer Code</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    value={selectedFarmer?.farmerCode}
                                                    InputProps={{ readOnly: true }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <Grid container direction="column">
                                            <Grid item xs={12}>
                                                <Typography variant='body2'>Farmer Email</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    value={selectedFarmer?.email}
                                                    InputProps={{ readOnly: true }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                        <Grid container direction="column">
                                            <Grid item xs={12}>
                                                <Typography variant='body2'>Farmer Contact No</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    value={selectedFarmer?.primaryMobileNo}
                                                    InputProps={{ readOnly: true }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container direction="column">
                                            <Grid item xs={12}>
                                                <Typography variant='body2'>Farmer Residential Address</Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    value={displayAddress(selectedFarmer?.residensialAddress || undefined)}
                                                    InputProps={{ readOnly: true }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </>)}
                            <Grid item xs={12} marginY={2}>
                                <Box sx={{ width: '100%' }}>
                                    {source === "vendor" ?
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
                                                                        onChange={(event, newValue: Product | null) => {
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
                                                            <Grid container direction="column">
                                                                <Grid item xs={12}>
                                                                    <Typography variant='body2'>Product Code</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <TextField size="small" value={selectedProduct?.productCode} fullWidth />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12} md={1}>
                                                            <Grid container direction="column">
                                                                <Grid item xs={12}>
                                                                    <Typography variant='body2'>Product Grade</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <TextField size="small" id={`rfpaProducts.${index}.grade`} name={`rfpaProducts.${index}.grade`} fullWidth value={values.rfpaProducts[index].grade} onChange={handleChange} />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12} md={2}>
                                                            <Grid container direction="column">
                                                                <Grid item xs={12}>
                                                                    <Typography variant='body2'>UOM</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <FormControl fullWidth>
                                                                        <Select
                                                                            size='small'
                                                                            id={`rfpaProducts.${index}.uom`}
                                                                            name={`rfpaProducts.${index}.uom`}
                                                                            value={values.rfpaProducts[index].uom}
                                                                            onChange={handleChange}
                                                                            displayEmpty
                                                                        >
                                                                            <MenuItem value="" disabled>
                                                                                Select UOM
                                                                            </MenuItem>
                                                                            {allUOMs.map((uoms) => (
                                                                                <MenuItem value={uoms.id} key={uoms.id}>{uoms.unit}</MenuItem>
                                                                            ))}
                                                                        </Select>
                                                                        <FormHelperText></FormHelperText>
                                                                    </FormControl>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={4} md={1}>
                                                            <Grid container direction="column">
                                                                <Grid item xs={12}>
                                                                    <Typography variant='body2'>Quantity</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <TextField size="small" type="number" id={`rfpaProducts.${index}.quantity`} name={`rfpaProducts.${index}.quantity`} fullWidth value={values.rfpaProducts[index].quantity} onChange={handleChange} />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={4} md={1}>
                                                            <Grid container direction="column">
                                                                <Grid item xs={12}>
                                                                    <Typography variant='body2'>Unit Price</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <TextField size="small" type="number" id={`rfpaProducts.${index}.unitPrice`} name={`rfpaProducts.${index}.unitPrice`} fullWidth value={values.rfpaProducts[index].unitPrice} onChange={handleChange} onBlur={() => calculateTotoalPrice(values, index, setFieldValue)} />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={4} md={1}>
                                                            <Grid container direction="column">
                                                                <Grid item xs={12}>
                                                                    <Typography variant='body2'>Total Price</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <TextField size="small" type="number" id={`rfpaProducts.${index}.totalVal`} name={`rfpaProducts.${index}.totalVal`} fullWidth value={values.rfpaProducts[index].totalVal} />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Grid container direction="column">
                                                                <Grid item xs={12}>
                                                                    <Typography variant='body2'>Description</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <TextField size="small" id={`rfpaProducts.${index}.description`} name={`rfpaProducts.${index}.description`} fullWidth value={values.rfpaProducts[index].description} onChange={handleChange} />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12} md={2}>
                                                            <Grid container direction="column">
                                                                <Grid item xs={12}>
                                                                    <Typography variant='body2'>Purchase Date</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <TextField type='date' size="small" id={`rfpaProducts.${index}.purchaseDate`} name={`rfpaProducts.${index}.purchaseDate`} fullWidth value={values.rfpaProducts[index].purchaseDate} onChange={handleChange} />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12} md={2}>
                                                            <Grid container direction="column">
                                                                <Grid item xs={12}>
                                                                    <Typography variant='body2'>Dispatch Date</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <TextField type='date' size="small" id={`rfpaProducts.${index}.dispatchDate`} name={`rfpaProducts.${index}.dispatchDate`} fullWidth value={values.rfpaProducts[index].dispatchDate} onChange={handleChange} />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12} md={2}>
                                                            <Grid container direction="column">
                                                                <Grid item xs={12}>
                                                                    <Typography variant='body2'>Delivery Date</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <TextField type='date' size="small" id={`rfpaProducts.${index}.deliveryDate`} name={`rfpaProducts.${index}.deliveryDate`} fullWidth value={values.rfpaProducts[index].deliveryDate} onChange={handleChange} />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <Grid container direction="column">
                                                                <Grid item xs={12}>
                                                                    <Typography variant='body2'>Delivery Location</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <TextField size="small" id={`rfpaProducts.${index}.deliveryLocation`} name={`rfpaProducts.${index}.deliveryLocation`} fullWidth value={values.rfpaProducts[index].deliveryLocation} onChange={handleChange} />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        {source === "farmer" &&
                                                            (<Grid item xs={2}>
                                                                <Grid container direction="column">
                                                                    <Grid item xs={12}>
                                                                        <Typography variant='body2'>Expected Harvest Date</Typography>
                                                                    </Grid>
                                                                    <Grid item xs={12}>
                                                                        <TextField type='date' size="small" id={`rfpaProducts.${index}.expectedHarvestDate`} name={`rfpaProducts.${index}.expectedHarvestDate`} fullWidth value={values.rfpaProducts[index].expectedHarvestDate} onChange={handleChange} />
                                                                    </Grid>
                                                                </Grid>
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
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <Typography variant='body2'>Payment Mode</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="small" id="paymentInfo.paymentMode" name="paymentInfo.paymentMode" fullWidth value={values.paymentInfo.paymentMode} onChange={handleChange} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <Typography variant='body2'>Payment Date</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="date" size="small" id="paymentInfo.paymentDate" name="paymentInfo.paymentDate" fullWidth value={values.paymentInfo.paymentDate} onChange={handleChange} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <Typography variant='body2'>Advance Paid Amount</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="small" id="paymentInfo.advancePaidAmt" name="paymentInfo.advancePaidAmt" fullWidth value={values.paymentInfo.advancePaidAmt} onChange={handleChange} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <Typography variant='body2'>Payment Terms</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <Select
                                                size='small'
                                                id="paymentInfo.paymentTerms"
                                                name="paymentInfo.paymentTerms"
                                                value={values.paymentInfo.paymentTerms}
                                                onChange={handleChange}
                                                displayEmpty
                                            >
                                                <MenuItem value="" disabled>
                                                    Select Term
                                                </MenuItem>
                                                <MenuItem value="1 Day" key={1}>1 Day</MenuItem>
                                                <MenuItem value="3-8 Day" key={2}>3-8 Day</MenuItem>
                                                <MenuItem value="8-15 Day" key={3}>8-15 Day</MenuItem>
                                                <MenuItem value="15-25 Day" key={4}>15-25 Day</MenuItem>
                                                <MenuItem value="25+ Day" key={5}>25+ Day</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <Typography variant='body2'>Delivery Receiving Person</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="small" id="deliveryReceivingPerson" name="deliveryReceivingPerson" fullWidth value={values.deliveryReceivingPerson} onChange={handleChange} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <Typography variant='body2'>Validity of Quote</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="small" id="validityOfQuote" name="validityOfQuote" fullWidth value={values.validityOfQuote} onChange={handleChange} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <Typography variant='body2'>Packaging Instructions</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField size="small" id="packingInstruction" name="packingInstruction" fullWidth value={values.packingInstruction} onChange={handleChange} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>)}
            </Formik>
            <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative', bgcolor: "#FFF" }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="error"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <Close />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div" color='#000000'>
                        Preview
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ flex: 1, padding: 1 }}>
                <Grid container direction="column" rowSpacing={1}>
                    <Grid item sx={{ display: "flex", alignItem: "center", justifyContent: "space-between" }}>
                        <Typography variant="h4" component="span">RFPA Details</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Purchase Location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedRFPA?.purchaseLocation}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Purchase for which location : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedRFPA?.purchaseForWhich}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Special Request : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedRFPA?.specialReq}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Source: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedRFPA?.source}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Divider textAlign="left" sx={{ marginY: 2 }}>Vendor / Farmer Information</Divider>
                    {selectedRFPA?.source === "vendor" ? (
                        <>
                            <Grid item>
                                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                    Company Name: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedVendor?.companyName}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                    Vendor Code: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedVendor?.vendorCode}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                    Office Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(selectedVendor?.officeAddress)}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                    Office Contact No: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedVendor?.officeContactNo}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                    Email: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedVendor?.email}
                                    </Typography>
                                </Typography>
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid item>
                                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                    Farmer Name: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedFarmer?.farmerfName} {selectedRFPA?.farmer?.farmerlName}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                    Farmer Code: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedFarmer?.farmerCode}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                    Residential Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(selectedFarmer?.residensialAddress)}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                    Farm Address: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{displayAddress(selectedFarmer?.farmAddress)}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                    Contact No: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedFarmer?.primaryMobileNo}
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                                    Email: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedFarmer?.email}
                                    </Typography>
                                </Typography>
                            </Grid>
                        </>
                    )}
                    <Divider textAlign="left" sx={{ marginY: 2 }}>Products Information</Divider>
                    <Grid item>
                        <TableContainer component={Box}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Product</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Grade</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Quantity</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>UOM</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Unit Price</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Total</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Purchase Date</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Dispatch Date</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Delivery Date</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Delivery Location</TableCell>
                                        {selectedRFPA?.source === "farmer" ? <TableCell align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>Expected Harvest Date</TableCell> : ''}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {selectedRFPA?.rfpaProducts.map((product, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >

                                            <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{selectedProduct?.name}</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.grade}</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.quantity}</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.unitPrice}</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.totalVal}</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.purchaseDate.toLocaleString()}</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.dispatchDate.toLocaleString()}</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.deliveryDate.toLocaleString()}</TableCell>
                                            <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.deliveryLocation}</TableCell>
                                            {selectedRFPA?.source === "farmer" ? <TableCell align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{product.expectedHarvestDate?.toLocaleString()}</TableCell> : ''}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Divider textAlign="left" sx={{ marginY: 2 }}>Additional Payment Information</Divider>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Payment Mode: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedRFPA?.paymentInfo.paymentMode}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Payment Date: <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedRFPA?.paymentInfo.paymentDate.toLocaleString()}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Payment Terms : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedRFPA?.paymentInfo.paymentTerms}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Validity Of Quote : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedRFPA?.validityOfQuote}
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="span" sx={{ color: "#555" }}>
                            Packing Instruction : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{selectedRFPA?.packingInstruction}
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </Box >
        </Dialog>
        </>
    )
}
