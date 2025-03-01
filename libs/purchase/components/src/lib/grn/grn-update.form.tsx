import React from 'react'
import { FieldArray, Formik } from 'formik';
import { useDispatch } from 'react-redux'
import { Add, Close } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, LinearProgress, Typography } from '@mui/material'
import { initValGRN, initValGRNProducts, PURCHASE_ROUTES, purchaseOptionsConstants, setPreviewGRN, useGetGRNById, useUpdateGRNById } from '@prime-fresh/purchase/modules';
import { STRINGS } from '@prime-fresh/admin/modules';
import { PostGRN } from '@prime-fresh/purchase_api';
import { useNavigate, useParams } from 'react-router-dom';
import { AutoCompleteInput, FormPreviewBtn, FormResetBtn, FormSubmitBtn, ImageUpload, PageTitle, RadioGroupInput, SelectInput, TextInput, toast, VendorFarmerInfo } from '@prime-fresh/ui_shared';
import { setPreview } from '@prime-fresh/modules';
import { calculateTotalAmount, getProductCount, getProductSizes, handleGRNProductsUpdateChange } from './helper-functions';
import { appendFormData, mapToValueLabelArray, useGetAllDealSlipNums, useGetBranchesPartialData, useGetCompanyNames, useGetProductsPartialData, useGetUOMPartialData } from '@prime-fresh/shared/modules';

export const GRNUpdate = () => {
    const { grnid } = useParams<{ grnid: string }>();
    const grnId = grnid ? grnid : '';

    const { data: grn, isLoading } = useGetGRNById(grnId);
    const selectedGRN = grn?.data ? grn.data : initValGRN;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log("GRN API DATA : ", selectedGRN);

    const { data: companies } = useGetCompanyNames();
    const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];
    const { data: dsNums } = useGetAllDealSlipNums();
    const dealSlipNums = dsNums?.data ? mapToValueLabelArray(dsNums.data, 'id', 'dealSlipNo') : [];
    const { data: products } = useGetProductsPartialData();
    const allProducts = products?.data ? mapToValueLabelArray(products.data, 'id', 'name') : [];
    const { data: UOMs } = useGetUOMPartialData();
    const allUOMs = UOMs?.data ? mapToValueLabelArray(UOMs.data, 'id', 'unit') : [];
    const { data: Locations, isLoading: loadingLocations } = useGetBranchesPartialData();
    const allPurchaseLocation = Locations?.data ? mapToValueLabelArray(Locations.data, 'id', 'name') : [];
    const allPurchaseForEachLocations = Locations?.data ? mapToValueLabelArray(Locations.data.filter(loc => loc.type === STRINGS.DC), 'id', 'name') : [];


    const { mutateAsync: mutatePatch, error, data } = useUpdateGRNById(grnId);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData).then(() => {
            toast.success(data ? data.message : "GRN updated successfully.");
            setTimeout(() => {
                navigate(PURCHASE_ROUTES.GET_ALL_GRN);
            }, 2000);
        }).catch(() => {
            toast.error(error ? error.message : "Error while updating GRN.");
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
                    {({ values, handleChange, handleSubmit, handleReset, setFieldValue, isSubmitting, touched }) => (
                        <form onSubmit={handleSubmit} encType='multipart/form-data'>
                            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                                <Grid item xs={12} marginBottom={2}>
                                    <PageTitle pagetitle='Goods Received Note' />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <RadioGroupInput
                                        isRequired={true}
                                        label="Type of GRN"
                                        name="grnType"
                                        alignment="vertical"
                                        options={purchaseOptionsConstants.grnType}
                                        value={values.grnType}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <RadioGroupInput
                                        isRequired={true}
                                        label="Location Type"
                                        name="locationType"
                                        alignment="vertical"
                                        options={purchaseOptionsConstants.locationTypes}
                                        value={values.locationType}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <RadioGroupInput
                                        isRequired={true}
                                        label="Purchase Type"
                                        name="purchaseType"
                                        alignment="vertical"
                                        options={purchaseOptionsConstants.purchaseType}
                                        value={values.purchaseType}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <SelectInput
                                        isRequired={false}
                                        label="Select Deal Slip"
                                        name="dealSlipId"
                                        options={dealSlipNums}
                                        value={values.dealSlipId}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SelectInput isRequired={true} label="Company Name" name="companyName" options={companyNames} value={values.companyName} handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextInput isRequired={true} type="text" name='billNo' label='Bill Number' value={values.billNo} handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput isRequired={true} type="text" name='purchaseInstructionsBy' label='Purchase Instructions By' value={values.purchaseInstructionsBy} handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={4}>
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
                                                    setFieldValue(`otherPurchaseLoc`, null);
                                                }
                                            } else
                                                setFieldValue('purchaseLocation', null);
                                        }} />
                                </Grid>
                                <Grid item xs={12} md={4}>
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
                                    <TextInput isRequired={false} type="text" name="specialReq" label='Special Request' value={values.specialReq} handleChange={handleChange} />
                                </Grid>

                                {/*Vendor or Farmer info depend on selected source */}
                                <VendorFarmerInfo<PostGRN> source={values.source} selectedParty={values.selectedParty || ''} />

                                <Grid item xs={12} marginY={2}>
                                    <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                        <Typography variant='body2' sx={{ fontWeight: 600 }}>Product Required</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} padding={1}>
                                    <FieldArray name="grnProducts">
                                        {({ push, remove }) => (
                                            <>
                                                {values.grnProducts.length > 0 && values.grnProducts.map((_, index) => (
                                                    <Grid container spacing={1} key={index} padding={1} sx={{ border: '1px solid #BDBDBD', borderRadius: 2, marginX: "auto", marginY: 1 }}>
                                                        <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
                                                            <Typography variant="body1">Product : {index + 1}</Typography>
                                                        </Grid>
                                                        <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                                                            {values.grnProducts.length > 1 && <IconButton color='error' size='medium'
                                                                onClick={() => remove(index)}><Close /></IconButton>}
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <AutoCompleteInput
                                                                isRequired={true}
                                                                name={`grnProducts.${index}.productName`}
                                                                label="Product Name"
                                                                options={allProducts}
                                                                handleChange={(event, newValue) => {
                                                                    if (newValue !== null) {
                                                                        if (typeof newValue === 'string')
                                                                            setFieldValue(`grnProducts.${index}.productName`, null);
                                                                        else {
                                                                            setFieldValue(`grnProducts.${index}.productName`, newValue.value);
                                                                        }
                                                                    } else
                                                                        setFieldValue(`grnProducts.${index}.productName`, null);
                                                                }}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6} md={2}>
                                                            <TextInput
                                                                isRequired={false}
                                                                isReadOnly={true}
                                                                name="productOrigin"
                                                                label="Origin"
                                                                value=""
                                                            // value={productPartialData.length !== 0 && productPartialData !== undefined ? productPartialData[index].productOrigin : ''}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6} md={2}>
                                                            <SelectInput
                                                                isRequired={true}
                                                                id={`grnProducts.${index}.size`}
                                                                name={`grnProducts.${index}.size`}
                                                                label="Size"
                                                                options={getProductSizes(values.grnProducts[index].productName, products?.data)}
                                                                value={values.grnProducts[index].size}
                                                                handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={6} md={2}>
                                                            <SelectInput
                                                                isRequired={true}
                                                                id={`grnProducts.${index}.count`}
                                                                name={`grnProducts.${index}.count`}
                                                                label="Count"
                                                                value={values.grnProducts[index].count}
                                                                options={getProductCount(values.grnProducts[index].productName, products?.data)}
                                                                handleChange={handleChange}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={6} md={2}>
                                                            <SelectInput
                                                                isRequired={false}
                                                                id={`grnProducts.${index}.uom`}
                                                                name={`grnProducts.${index}.uom`}
                                                                label="Unit"
                                                                options={allUOMs}
                                                                value={values.grnProducts[index].uom}
                                                                handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={6} md={4}>
                                                            <TextInput
                                                                isRequired={true}
                                                                isReadOnly={true}
                                                                label='Quantity'
                                                                name={`grnProducts.${index}.quantity`}
                                                                type='number'
                                                                value={values.grnProducts[index].quantity || ""} />
                                                        </Grid>
                                                        <Grid item xs={6} md={4}>
                                                            <TextInput
                                                                isRequired={true}
                                                                isReadOnly={true}
                                                                type='number'
                                                                label='Rate'
                                                                id={`grnProducts.${index}.unitPrice`}
                                                                name={`grnProducts.${index}.unitPrice`}
                                                                value={values.grnProducts[index].unitPrice || ""} />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <TextInput
                                                                isRequired={false}
                                                                isReadOnly={true}
                                                                type='number'
                                                                label='Amount'
                                                                id={`grnProducts.${index}.amount`}
                                                                name={`grnProducts.${index}.amount`}
                                                                value={values.grnProducts[index].amount || ""} />
                                                        </Grid>
                                                        <Grid item xs={6} md={4}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired={true}
                                                                id={`grnProducts.${index}.packingMaterialWeight`}
                                                                name={`grnProducts.${index}.packingMaterialWeight`}
                                                                label="Packing Material Weight (in grams)"
                                                                value={values.grnProducts[index].packingMaterialWeight || ""}
                                                                handleChange={(event) => handleGRNProductsUpdateChange(index, "packingMaterialWeight", event.target.value, values, setFieldValue)} />
                                                        </Grid>
                                                        <Grid item xs={6} md={4}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired={true}
                                                                id={`grnProducts.${index}.grossWeight`}
                                                                name={`grnProducts.${index}.grossWeight`}
                                                                label="Gross Weight (in kg)"
                                                                value={values.grnProducts[index].grossWeight || ""}
                                                                handleChange={(event) => handleGRNProductsUpdateChange(index, "grossWeight", event.target.value, values, setFieldValue)} />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired={false}
                                                                isReadOnly={true}
                                                                id={`grnProducts.${index}.netWeight`}
                                                                name={`grnProducts.${index}.netWeight`}
                                                                label="Net Weight (in kg)"
                                                                value={values.grnProducts[index].netWeight} />
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <TextInput isRequired={false} label='Purchase Date' name={`grnProducts.${index}.purchaseDate`} type='date' value={values.grnProducts[index].purchaseDate} handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <TextInput isRequired={false} label='Dispatch Date' name={`grnProducts.${index}.dispatchDate`} type='date' value={values.grnProducts[index].dispatchDate} handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <TextInput isRequired={false} label='Delivery Date' name={`grnProducts.${index}.deliveryDate`} type='date' value={values.grnProducts[index].deliveryDate} handleChange={handleChange} />
                                                        </Grid>
                                                        {values.source === "farmer" &&
                                                            (<Grid item xs={12} md={3}>
                                                                <TextInput isRequired={false} label='Expected Harvest Date' name={`grnProducts.${index}.expectedHarvestDate`} type='date' value={values.grnProducts[index].expectedHarvestDate} handleChange={handleChange} />
                                                            </Grid>)}
                                                        <Grid item xs={12} md={3}>
                                                            <TextInput isRequired={false} label='Delivery Location' name={`grnProducts.${index}.deliveryLocation`} type='text' value={values.grnProducts[index].deliveryLocation} handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <TextInput
                                                                isRequired={true}
                                                                name={`grnProducts.${index}.revisedQuantity`}
                                                                label="Revised Quantity"
                                                                type="number"
                                                                value={values.grnProducts[index].revisedQuantity || ""}
                                                                handleChange={(event) => handleGRNProductsUpdateChange(index, "revisedQuantity", event.target.value, values, setFieldValue)} />
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <TextInput
                                                                isRequired={true}
                                                                type="number"
                                                                name={`grnProducts.${index}.revisedRate`}
                                                                label="Revised Rate"
                                                                value={values.grnProducts[index].revisedRate || ""}
                                                                handleChange={(event) => handleGRNProductsUpdateChange(index, "revisedRate", event.target.value, values, setFieldValue)} />
                                                        </Grid>
                                                        <Grid item xs={12} md={9}>
                                                            <RadioGroupInput isRequired={true} label="RTV" name={`grnProducts.${index}.rtv`} options={[{ label: "Yes", value: true }, { label: "No", value: false }]} value={values.grnProducts[index].rtv} onChange={handleChange} />
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
                                                        onClick={() => push(initValGRNProducts)}>
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
                                    <TextInput isRequired={false} label="Freight" name="freight" type='number' value={values.freight} handleChange={e => calculateTotalAmount("freight", e.target.value, values, setFieldValue)} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextInput isRequired={false} label="Other Charges" name="otherCharges" type='number' value={values.otherCharges} handleChange={e => calculateTotalAmount("otherCharges", e.target.value, values, setFieldValue)} />
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
                                <Grid item xs={12} marginY={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Update" />
                                    <FormResetBtn label="Reset" handleReset={handleReset} />
                                    <FormPreviewBtn onClick={() => { dispatch(setPreviewGRN(values)); dispatch(setPreview(true)) }} />
                                </Grid>
                            </Grid>
                        </form>)}
                </Formik >
            )

    )
}
