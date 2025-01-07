import React from 'react'
import { useDispatch } from 'react-redux'
import { Add, Close } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, LinearProgress, Typography } from '@mui/material'
import { initValGRN, initValRFPAItems, numToWords, PURCHASE_ARRAYS, PURCHASE_ROUTES, setDealSlipData, setPreviewGRN } from '@prime-fresh/purchase/modules';
import { FieldArray, Formik } from 'formik';
import {setProducts, setUOMs, setSelectedVendor, setSelectedFarmer, productsDataState, uomsDataState, setSelectedProduct, setFilteredFarmerData, setFilteredVendorData } from '@prime-fresh/admin/modules';
import { ADMIN_API_URL, GetProduct, GetUOM, useGetAllFilteredFarmerData, useGetAllFilteredVendorData, useGetAllProducts, useGetAllUOMs } from '@prime-fresh/admin_api';
import { GetDealSlip, GetGRN, PostGRN, PURCHASE_API_URL, useGetAllDealSlip, useGetGRN, useUpdateGRN } from '@prime-fresh/purchase_api';
import { useNavigate, useParams } from 'react-router-dom';
import { FormPreviewBtn, FormResetBtn, FormSubmitBtn, ImageUpload, mapToValueLabelArray, RadioGroupInput, SelectInput, TextInput, VendorFarmerInfo } from '@prime-fresh/ui_shared';
import { setPreview, showNotification, useAppSelector } from '@prime-fresh/modules';
import { appendFormData } from "@prime-fresh/shared/utils";


export const GRNUpdate = () => {
    const { grnid } = useParams<{ grnid: string }>();
    const grnId = grnid ? grnid : '';

    const { data: grn, isLoading } = useGetGRN(PURCHASE_API_URL.GET_A_GRN, grnId);
    const selectedGRN = grn ? grn : initValGRN;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log("GRN API DATA : ", selectedGRN);

    const { data: dealSlips } = useGetAllDealSlip(PURCHASE_API_URL.GET_ALL_DEAL_SLIP);
    const { data: Products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
    const { data: UOMs } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
    
    const { allProducts } = useAppSelector(productsDataState);
    const { allUOMs } = useAppSelector(uomsDataState);

    React.useEffect(() => {
        dispatch(setDealSlipData(dealSlips ? dealSlips : []));
        dispatch(setProducts(Products ? Products : []));
        dispatch(setUOMs(UOMs ? UOMs : []));
    }, [dispatch, selectedGRN, Products, UOMs, dealSlips]);


    const handleProductNameChange = (dataId: string) => {
        const selectedProduct: GetProduct | undefined = allProducts?.find((products) => products.id === dataId);
        dispatch(setSelectedProduct(selectedProduct));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const calculateAmounts = (values: any, setFieldValue: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const updatedProducts = values.products.map((product: any) => ({
            ...product,
            amt: product.revisedRate * product.revisedQuantity,
        }));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const subTotalAmt = updatedProducts.reduce((acc: any, product: any) => acc + product.amt, 0);  // Calculate subtotal from the product amounts
        const totalAmt = subTotalAmt + values.freight + values.otherCharges; // Calculate total (subtotal + freight + other charges)
        const amtWords = numToWords(totalAmt); // Convert total amount to words
        // Update form fields with calculated values
        setFieldValue("products", updatedProducts);
        setFieldValue("subTotalAmt", subTotalAmt);
        setFieldValue("totalAmt", totalAmt);
        setFieldValue("amtWords", amtWords);
    };

    const { mutateAsync: mutatePatch, error, data } = useUpdateGRN(PURCHASE_API_URL.UPDATE_GRN, grnId);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData).then(() => {
            dispatch(showNotification({ severity: 'success', message: data ? data.message : "GRN updated successfully !!!" }));
            setTimeout(() => {
                navigate(PURCHASE_ROUTES.GET_ALL_GRN);
            }, 5000);
        }).catch(() => {
            dispatch(showNotification({ severity: 'error', message: 'Error: ' + error?.message }));
        });
    }
    return (
        isLoading ?
            (<Box sx={{ flex: 1 }} >
                <LinearProgress />
            </Box >) :

            (
                <Formik
                    enableReinitialize={true}
                    initialValues={selectedGRN}
                    onSubmit={(values) => {
                        console.log("GRN FORM VALUES : ", values);
                        handleSubmit(values);
                    }}
                >
                    {({ values, handleChange, handleSubmit, handleReset, setFieldValue, isSubmitting }) => (
                        <form onSubmit={handleSubmit} encType='multipart/form-data'>
                            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant='h4'>Goods Received Note</Typography>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Update" />
                                    <FormResetBtn label="Reset" handleReset={handleReset} />
                                    <FormPreviewBtn onClick={() => { dispatch(setPreviewGRN(values)); dispatch(setPreview(true)) }} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <SelectInput
                                        isRequired={true}
                                        label="Select Deal Slip"
                                        name="dealSlipId"
                                        options={mapToValueLabelArray<GetDealSlip>(dealSlips ? dealSlips : [], 'id', 'dealSlipNo')}
                                        value={values.dealSlipId}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <SelectInput isRequired={true} label="Company Name" name="companyName" options={PURCHASE_ARRAYS.companyNames} value={values.companyName} handleChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <TextInput isRequired={true} type="text" name='billNo' label='Bill Number' value={values.billNo} handleChange={handleChange}   />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextInput isRequired={true} type="text" name='serialNo' label='Serial Number' value={values.serialNo} handleChange={handleChange}   />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput isRequired={true} type="text" name='purchaseRequestByWhom' label='Purchase Request By Whom' value={values.purchaseRequestByWhom} handleChange={handleChange}/>
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

                                <VendorFarmerInfo<GetGRN> />

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
                                                            <SelectInput
                                                                isRequired={true}
                                                                id={`products.${index}.product`}
                                                                name={`products.${index}.product`}
                                                                label="Product Name"
                                                                value={values.products[index].product}
                                                                options={mapToValueLabelArray(allProducts, 'id', 'name')}
                                                                handleChange={handleChange}
                                                                onBlur={() => handleProductNameChange(values.products[index].product || '')}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={4} md={1}>
                                                            <SelectInput isRequired={true} id={`products.${index}.count`}
                                                                name={`products.${index}.count`}
                                                                label="Count"
                                                                value={values.products[index].count}
                                                                options={allProducts?.find(product => product.id === values.products[index].product)?.count === null ? [{ label: '', value: '' }] : allProducts?.find(product => product.id === values.products[index].product)?.count.map((count) => ({ label: count, value: count }))}
                                                                handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={4} md={2}>
                                                            <SelectInput isRequired={true} label="Unit" name={`products.${index}.uom`} options={mapToValueLabelArray<GetUOM>(allUOMs, 'id', 'unit')} value={values.products[index].uom} handleChange={handleChange}   />
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
                                                            <TextInput isRequired={false} label='Rate' name={`products.${index}.rate`} type='number' value={values.products[index].rate} handleChange={(e) => {
                                                                handleChange(e);
                                                                setFieldValue(`products.${index}.quantity`, parseFloat(e.target.value) || 0);
                                                            }}
                                                                onBlur={() => calculateAmounts(values, setFieldValue)} />
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
                                                        {values.products[index].rtv === "yes" &&
                                                            <>
                                                                <Grid item xs={12} md={2.5}>
                                                                    <TextInput isRequired={false} label='Revised Rate' name={`products.${index}.revisedRate`} type='number' value={values.products[index].revisedRate}
                                                                        handleChange={(e) => {
                                                                            handleChange(e);
                                                                            setFieldValue(`products.${index}.revisedRate`, parseFloat(e.target.value) || 0);
                                                                        }}
                                                                        onBlur={() => calculateAmounts(values, setFieldValue)} />
                                                                </Grid>
                                                                <Grid item xs={12} md={2.5}>
                                                                    <TextInput isRequired={false} label='Revised Quantity' name={`products.${index}.revisedQuantity`} type='number' value={values.products[index].revisedQuantity}
                                                                        handleChange={(e) => {
                                                                            handleChange(e);
                                                                            setFieldValue(`products.${index}.revisedQuantity`, parseFloat(e.target.value) || 0);
                                                                        }}
                                                                        onBlur={() => calculateAmounts(values, setFieldValue)} />
                                                                </Grid>
                                                            </>
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
                                <Grid item xs={12} md={6}>
                                    <TextInput isRequired={false} label="Security Person Name" name="securityPerson" type='text' value={values.securityPerson} handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextInput isRequired={false} label="RM Name" name="rmn" type='text' value={values.rmn} handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <ImageUpload isRequired={false} name='billImage' label='Bill Image' />
                                </Grid>
                            </Grid>
                        </form>)}
                </Formik >
            )

    )
}
