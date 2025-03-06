/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Add, Close } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, LinearProgress, Typography } from '@mui/material'
import { initValRFPAItems, PURCHASE_ARRAYS, PURCHASE_ROUTES, rfpaSchema, setPreviewRFPA, useGetRFPAById, useUpdateRFPAById } from '@prime-fresh/purchase/modules';
import { GetRFPA } from '@prime-fresh/purchase_api';
import { setPreview } from '@prime-fresh/modules';
import { FieldArray, Formik } from 'formik';
import { initValRFPA } from '@prime-fresh/purchase/modules';
import { useNavigate, useParams } from 'react-router-dom';
import { AutoCompleteInput, FormButtonGroup, PageTitle, SelectInput, TextInput, toast, VendorFarmerInfo } from '@prime-fresh/ui_shared';
import { RFPAPreview } from './rfpa.preview';
import { mapToValueLabelArray, useGetBranchesPartialData, useGetCompanyNames, useGetProductsPartialData, useGetUOMPartialData } from '@prime-fresh/shared/modules';
import { calculateDueDate, calculateTotoalPrice, getProductCode } from './helper-functions';

export const RFPAUpdate = () => {
    const { id } = useParams<{ id: string }>();
    const rfpaId = id ? id : '';
    const { data, isLoading } = useGetRFPAById(rfpaId);
    console.log("RFPA: ", data);
    const rfpaValues = data?.data ? data.data : initValRFPA;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data: companies } = useGetCompanyNames();
    const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];
    const { data: products } = useGetProductsPartialData();
    const Products = products?.data ? mapToValueLabelArray(products.data, 'id', 'name') : [];
    const { data: uom } = useGetUOMPartialData();
    const UOMs = uom?.data ? mapToValueLabelArray(uom.data, 'id', 'unit') : [];
    const { data: Locations } = useGetBranchesPartialData();
    const allPurchaseLocation = Locations?.data ? mapToValueLabelArray(Locations.data, 'id', 'name') : [];
    const allPurchaseForEachLocations = Locations?.data ? mapToValueLabelArray(Locations?.data.filter(loc => loc.type === "distribution-center"), 'id', 'name') : [];

    const { mutateAsync: mutatePatch, error, data: Res } = useUpdateRFPAById(rfpaId);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        mutatePatch(values).then(() => {
            toast.success(Res ? Res.message : "RFPA Updated");
            setTimeout(() => {
                navigate(PURCHASE_ROUTES.GET_ALL_RFPA);
            }, 2000);
        }).catch(() => {
            toast.error(error ? error.message : "Error while updating");
        });
    }
    return (
        isLoading ?
            (
                <Box sx={{ flex: 1 }}>
                    <LinearProgress />
                </Box>
            ) :

            <>
                <Formik
                    key={rfpaId}
                    enableReinitialize={true}
                    initialValues={rfpaValues}
                    validationSchema={rfpaSchema}
                    validateOnBlur={true}
                    validateOnChange={true}
                    onSubmit={(values) => {
                        console.log(values);
                        handleSubmit(values);
                    }}>
                    {({ values, handleChange, handleSubmit, setFieldValue, handleReset, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={1} padding={1}>
                                <Grid item xs={12} marginBottom={2}>
                                    <PageTitle pagetitle='Request For Purchase Approval' />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SelectInput
                                        isRequired={true}
                                        label="Company Name"
                                        name="companyName"
                                        options={companyNames}
                                        value={typeof values.companyName !== 'string' ? values.companyName?.id : values.companyName}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <AutoCompleteInput
                                        isRequired={true}
                                        name="purchaseLocation"
                                        label="Purchase Location"
                                        options={allPurchaseLocation}
                                        handleChange={(event, newValue) => {
                                            if (newValue !== null) {
                                                if (typeof newValue === 'string')
                                                    setFieldValue(`purchaseLocation`, null);
                                                else {
                                                    setFieldValue(`purchaseLocation`, newValue.value);
                                                    setFieldValue(`otherPurchaseLoc`, null);
                                                }
                                            } else
                                                setFieldValue('purchaseLocation', null);
                                        }} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <AutoCompleteInput
                                        isRequired={true}
                                        name="purchaseForSalesLocation"
                                        label="Purchase For Sales Location"
                                        options={allPurchaseForEachLocations}
                                        handleChange={(event, newValue) => {
                                            if (newValue !== null) {
                                                if (typeof newValue === 'string')
                                                    setFieldValue(`purchaseForSalesLocation`, null);
                                                else {
                                                    setFieldValue(`purchaseForSalesLocation`, newValue.value);
                                                    setFieldValue(`otherPurchaseForSalesLoc`, null);
                                                }
                                            } else
                                                setFieldValue('purchaseForSalesLocation', null);
                                        }} />
                                </Grid>
                                {(values.otherPurchaseLoc !== null && values.purchaseLocation === null) &&
                                    <Grid item xs={12}>
                                        <TextInput isRequired={true} type="text" name="otherPurchaseLoc" label='Other Purchase Location' value={values.otherPurchaseLoc} handleChange={handleChange} />
                                    </Grid>}
                                {(values.otherPurchaseForSalesLoc !== null && values.purchaseForSalesLocation === null) &&
                                    <Grid item xs={12}>
                                        <TextInput isRequired={true} type="text" name="otherPurchaseForSalesLoc" label='Other Purchase For Sales Location' value={values.otherPurchaseForSalesLoc} handleChange={handleChange} />
                                    </Grid>}
                                <Grid item xs={12}>
                                    <TextInput isRequired={false} type="text" label="Special Request" name="specialReq" value={values.specialReq} handleChange={handleChange} />
                                </Grid>

                                {/*Vendor or Farmer info depend on selected source */}
                                <VendorFarmerInfo<GetRFPA> source={values.source} selectedParty={values.selectedParty || ''} />

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
                                                            <Typography variant="caption">Product : {index + 1}</Typography>
                                                        </Grid>
                                                        <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                                                            {values.rfpaProducts.length > 0 && <IconButton color='error' size='medium'
                                                                onClick={() => remove(index)}><Close /></IconButton>}
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <AutoCompleteInput
                                                                isRequired={true}
                                                                name={`rfpaProducts.${index}.product`}
                                                                label="Product Name"
                                                                options={Products}
                                                                handleChange={(event, newValue) => {
                                                                    if (newValue !== null) {
                                                                        if (typeof newValue === 'string')
                                                                            setFieldValue(`rfpaProducts.${index}.product`, null);
                                                                        else {
                                                                            setFieldValue(`rfpaProducts.${index}.product`, newValue.value);
                                                                        }
                                                                    } else
                                                                        setFieldValue(`rfpaProducts.${index}.product`, null);
                                                                }} />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <TextInput isRequired={false} name="productCode" label="Product Code" value={getProductCode(values.rfpaProducts[index].product, products?.data) || ''} isReadOnly={true} />
                                                        </Grid>
                                                        <Grid item xs={12} md={2}>
                                                            <TextInput isRequired={false} id={`rfpaProducts.${index}.grade`} name={`rfpaProducts.${index}.grade`} label="Product Grade" value={values.rfpaProducts[index].grade} onChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={2}>
                                                            <SelectInput isRequired={false} id={`rfpaProducts.${index}.uom`} name={`rfpaProducts.${index}.uom`} label="UOM" value={values.rfpaProducts[index].uom} options={UOMs} onChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={4} md={3}>
                                                            <TextInput isRequired={true} type="number" id={`rfpaProducts.${index}.quantity`} name={`rfpaProducts.${index}.quantity`} label="Quantity" value={values.rfpaProducts[index].quantity} handleChange={(event) => calculateTotoalPrice(event, index, setFieldValue, values)} />
                                                        </Grid>
                                                        <Grid item xs={4} md={3}>
                                                            <TextInput isRequired={true} type="number" id={`rfpaProducts.${index}.unitPrice`} name={`rfpaProducts.${index}.unitPrice`} label="Unit Price" value={values.rfpaProducts[index].unitPrice} handleChange={(event) => calculateTotoalPrice(event, index, setFieldValue, values)} />
                                                        </Grid>
                                                        <Grid item xs={4} md={3}>
                                                            <TextInput isRequired={false} isReadOnly={true} type="number" id={`rfpaProducts.${index}.totalVal`} name={`rfpaProducts.${index}.totalVal`} label="Total Price" value={values.rfpaProducts[index].totalVal} />
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <TextInput isRequired={true} id={`rfpaProducts.${index}.deliveryLocation`} name={`rfpaProducts.${index}.deliveryLocation`} label="Delivery Location" value={values.rfpaProducts[index].deliveryLocation} onChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextInput isRequired={false} id={`rfpaProducts.${index}.description`} name={`rfpaProducts.${index}.description`} label="Description" value={values.rfpaProducts[index].description} onChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <TextInput isRequired={true} type='date' id={`rfpaProducts.${index}.purchaseDate`} name={`rfpaProducts.${index}.purchaseDate`} label="Purchase Date" value={values.rfpaProducts[index].purchaseDate} onChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <TextInput isRequired={true} type='date' id={`rfpaProducts.${index}.dispatchDate`} name={`rfpaProducts.${index}.dispatchDate`} label="Dispatch Date" value={values.rfpaProducts[index].dispatchDate} onChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <TextInput isRequired={true} type='date' id={`rfpaProducts.${index}.deliveryDate`} name={`rfpaProducts.${index}.deliveryDate`} label="Delivery Date" value={values.rfpaProducts[index].deliveryDate} onChange={handleChange} />
                                                        </Grid>
                                                        {values.source === "farmer" &&
                                                            (<Grid item xs={3}>
                                                                <TextInput isRequired={false} type='date' id={`rfpaProducts.${index}.expectedHarvestDate`} name={`rfpaProducts.${index}.expectedHarvestDate`} label="Expected Harvest Date" value={values.rfpaProducts[index].expectedHarvestDate} onChange={handleChange} />
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
                                    <SelectInput isRequired={true} id="paymentInfo.paymentMode" name="paymentInfo.paymentMode" label="Payment Mode" options={PURCHASE_ARRAYS.paymentMode} value={values.paymentInfo.paymentMode} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput isRequired={false} type="number" id="paymentInfo.advancePaidAmt" name="paymentInfo.advancePaidAmt" label="Advance Paid Amount" value={values.paymentInfo.advancePaidAmt} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput isRequired={false} label="Validity of Quote" id="validityOfQuote" name="validityOfQuote" value={values.validityOfQuote} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextInput isRequired={true} type="number" label="Payment Terms (in Days)" id="paymentInfo.paymentTerms" name="paymentInfo.paymentTerms" value={values.paymentInfo.paymentTerms} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextInput
                                        id="paymentInfo.paymentDate"
                                        isRequired={true}
                                        type="date"
                                        name="paymentInfo.paymentDate"
                                        label="Payment Date"
                                        value={values.paymentInfo.paymentDate}
                                        handleChange={handleChange}


                                        onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
                                            const paymentDate = event.target.value;
                                            setFieldValue("paymentInfo.paymentDate", paymentDate);
                                            if (values.paymentInfo.creditPeriod) {
                                                const dueDate = calculateDueDate(paymentDate, values.paymentInfo.creditPeriod);
                                                setFieldValue("paymentInfo.dueDate", dueDate);
                                            }
                                        }} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextInput
                                        id="paymentInfo.creditPeriod"
                                        isRequired={true}
                                        type="number"
                                        label="Credit Period (in Days)"
                                        name="paymentInfo.creditPeriod"
                                        value={values.paymentInfo.creditPeriod}
                                        handleChange={handleChange}


                                        onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
                                            const creditPeriod = parseInt(event.target.value, 10) || 0;
                                            setFieldValue("paymentInfo.creditPeriod", creditPeriod);
                                            if (values.paymentInfo.paymentDate) {
                                                const dueDate = calculateDueDate(values.paymentInfo.paymentDate, creditPeriod);
                                                setFieldValue("paymentInfo.dueDate", dueDate);
                                            }
                                        }} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextInput isRequired={false} isReadOnly={true} type="date" label="Due Date" id="paymentInfo.dueDate" name="paymentInfo.dueDate" value={values.paymentInfo.dueDate} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextInput isRequired={true} label="Delivery Receiving Person" id="deliveryReceivingPerson" name="deliveryReceivingPerson" value={values.deliveryReceivingPerson} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <TextInput isRequired={false} label="Packaging Instructions" id="packingInstruction" name="packingInstruction" value={values.packingInstruction} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextInput isRequired={false} label="Remark" id="remark" name="remark" value={values.remark} onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} marginY={2}>
                                <FormButtonGroup
                                    submitLabel='Update'
                                    isSubmitting={isSubmitting}
                                    isSubmitError={error}
                                    resetLabel='Reset'
                                    onReset={handleReset}
                                    previewLabel='Preview'
                                    onPreview={() => {
                                        dispatch(setPreviewRFPA(values));
                                        dispatch(setPreview(true))
                                    }} />
                                </Grid>
                            </Grid>
                        </form>)}
                </Formik>
                <RFPAPreview />
            </>
    )
}
