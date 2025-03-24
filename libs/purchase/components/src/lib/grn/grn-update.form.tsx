import React from 'react'
import { FieldArray, Formik } from 'formik';
import { useDispatch } from 'react-redux'
import { Add, Close } from '@mui/icons-material'
import { Box, Button, Grid2, IconButton, LinearProgress, Typography } from '@mui/material'
import { initValGRN, initValGRNProducts, PURCHASE_ROUTES, purchaseOptionsConstants, setPreviewGRN, useGetGRNById, useUpdateGRNById } from '@prime-fresh/purchase/modules';
import { STRINGS } from '@prime-fresh/admin/modules';
import { PostGRN } from '@prime-fresh/purchase_api';
import { useNavigate, useParams } from 'react-router-dom';
import { AutoCompleteInput, FormButtonGroup, FormikAutocomplete, ImageUpload, PageTitle, RadioGroupInput, SelectInput, TextInput, toast, VendorFarmerInfo } from '@prime-fresh/ui_shared';
import { setPreview } from '@prime-fresh/modules';
import { handleGRNProductsUpdateChange, handlePushProduct, handleRemoveProduct } from './helper-functions';
import { appendFormData, debounce, getSelectedProductData, mapToValueLabelArray, useGetAllDealSlipNums, useGetBranchesPartialData, useGetCompanyNames, useGetProductsPartialData, useGetUOMPartialData, useSearchProductData } from '@prime-fresh/shared/modules';
import { ProductPartialData } from '@prime-fresh/common_api';

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
    const allProducts = products?.data ? products.data : [];
    const { data: UOMs } = useGetUOMPartialData();
    const allUOMs = UOMs?.data ? mapToValueLabelArray(UOMs.data, 'id', 'unit') : [];
    const { data: Locations, isLoading: loadingLocations } = useGetBranchesPartialData();
    const allPurchaseLocation = Locations?.data ? mapToValueLabelArray(Locations.data, 'id', 'name') : [];
    const allPurchaseForEachLocations = Locations?.data ? mapToValueLabelArray(Locations.data.filter(loc => loc.type === STRINGS.DC), 'id', 'name') : [];
    const [searchInput, setSearchInput] = React.useState('');
    const { data: produces, isFetching, error } = useSearchProductData(searchInput);
    const searchedProduct = React.useMemo(() => produces?.data ? produces.data : [], [produces]);

    const debouncedInputChange = React.useCallback(
        debounce((value: string) => {
            setSearchInput(value);
        }, 2000),
        []
    );

    const { mutateAsync: mutatePatch, error: patchError, data } = useUpdateGRNById(grnId);

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
            toast.error(patchError ? patchError.message : "Error while updating GRN.");
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
                            <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                                <Grid2 size={{ xs: 12 }} marginBottom={2}>
                                    <PageTitle pagetitle='Goods Received Note' />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 3 }}>
                                    <RadioGroupInput
                                        isRequired={true}
                                        label="Type of GRN"
                                        name="grnType"
                                        alignment="vertical"
                                        options={purchaseOptionsConstants.grnType}
                                        value={values.grnType}
                                        handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 2 }}>
                                    <RadioGroupInput
                                        isRequired={true}
                                        label="Location Type"
                                        name="locationType"
                                        alignment="vertical"
                                        options={purchaseOptionsConstants.locationTypes}
                                        value={values.locationType}
                                        handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 7 }}>
                                    <RadioGroupInput
                                        isRequired={true}
                                        label="Purchase Type"
                                        name="purchaseType"
                                        alignment="vertical"
                                        options={purchaseOptionsConstants.purchaseType}
                                        value={values.purchaseType}
                                        handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 3 }}>
                                    <SelectInput
                                        isRequired={false}
                                        label="Select Deal Slip"
                                        name="dealSlipId"
                                        options={dealSlipNums}
                                        value={values.dealSlipId}
                                        handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 6 }}>
                                    <SelectInput isRequired={true} label="Company Name" name="companyName" options={companyNames} value={values.companyName} handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 3 }}>
                                    <TextInput isRequired={true} type="text" name='billNo' label='Bill Number' value={values.billNo} handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 4 }}>
                                    <TextInput isRequired={true} type="text" name='purchaseInstructionsBy' label='Purchase Instructions By' value={values.purchaseInstructionsBy} handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 4 }}>
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
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 4 }}>
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
                                </Grid2>
                                {(values.otherPurchaseLoc !== null && values.purchaseLocation === null) &&
                                    <Grid2 size={{ xs: 12 }}>
                                        <TextInput isRequired={true} type="text" name="otherPurchaseLoc" label='Other Purchase Location' value={values.otherPurchaseLoc} handleChange={handleChange} />
                                    </Grid2>}
                                {(values.otherPurchaseForSalesLoc !== null && values.purchaseForSalesLocation === null) &&
                                    <Grid2 size={{ xs: 12 }}>
                                        <TextInput isRequired={true} type="text" name="otherPurchaseForSalesLoc" label='Other Purchase For Sales Location' value={values.otherPurchaseForSalesLoc} handleChange={handleChange} />
                                    </Grid2>}
                                <Grid2 size={{ xs: 12 }}>
                                    <TextInput isRequired={false} type="text" name="specialReq" label='Special Request' value={values.specialReq} handleChange={handleChange} />
                                </Grid2>

                                {/*Vendor or Farmer info depend on selected source */}
                                <VendorFarmerInfo<PostGRN> source={values.source} selectedParty={values.selectedParty || ''} />

                                <Grid2 size={{ xs: 12 }} marginY={2}>
                                    <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                        <Typography variant='body2' sx={{ fontWeight: 600 }}>Product Required</Typography>
                                    </Box>
                                </Grid2>
                                <Grid2 size={{ xs: 12 }} padding={1}>
                                    <FieldArray name="grnProducts">
                                        {() => (
                                            <>
                                                {values.grnProducts.length > 0 && values.grnProducts.map((_, index) => (
                                                    <Grid2 container spacing={1} key={index} padding={1} sx={{ border: '1px solid #BDBDBD', borderRadius: 2, marginX: "auto", marginY: 1 }}>
                                                        <Grid2 size={{ xs: 6 }} sx={{ display: "flex", alignItems: "center" }}>
                                                            <Typography variant="caption">Product : {index + 1}</Typography>
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 6 }} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                                                            {values.grnProducts.length > 1 &&
                                                                <IconButton color='error' size='medium'
                                                                    onClick={() => {
                                                                        handleRemoveProduct(index, values, setFieldValue);
                                                                    }}>
                                                                    <Close />
                                                                </IconButton>}
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 6, md: 4 }}>
                                                            <FormikAutocomplete<ProductPartialData>
                                                                isRequired={true}
                                                                optionValueKey="id"
                                                                name={`grnProducts.${index}.productName`}
                                                                label="Product Name"
                                                                options={allProducts}
                                                                isLoading={isFetching}
                                                                noOptionsText={error ? error.message : 'Enter name'}
                                                                onInputChange={(value) => debouncedInputChange(value)}
                                                                getOptionLabel={(option) => option.name}
                                                            />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 6, md: 3 }}>
                                                            <TextInput
                                                                isRequired={false}
                                                                isReadOnly={true}
                                                                name="productCode"
                                                                label="Product Code"
                                                                value={getSelectedProductData(values.grnProducts[index].productName, searchedProduct)?.productCode || ''} />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 6, md: 3 }}>
                                                            <TextInput
                                                                isRequired={false}
                                                                isReadOnly={true}
                                                                name="productOrigin"
                                                                label="Origin"
                                                                value={getSelectedProductData(values.grnProducts[index].productName, searchedProduct)?.productOrigin || ''} />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 6, md: 2 }}>
                                                            <SelectInput
                                                                isRequired={false}
                                                                id={`grnProducts.${index}.uom`}
                                                                name={`grnProducts.${index}.uom`}
                                                                label="Unit"
                                                                options={allUOMs}
                                                                value={values.grnProducts[index].uom}
                                                                handleChange={handleChange} />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 6, md: 1.5 }}>
                                                            <SelectInput
                                                                isRequired={false}
                                                                id={`grnProducts.${index}.size`}
                                                                name={`grnProducts.${index}.size`}
                                                                label="Size"
                                                                options={getSelectedProductData(values.grnProducts[index].productName, searchedProduct)?.size?.map(size => { return { label: size, value: size } }) || []}
                                                                value={values.grnProducts[index].size}
                                                                handleChange={handleChange} />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 6, md: 1.5 }}>
                                                            <SelectInput
                                                                isRequired={false}
                                                                id={`grnProducts.${index}.count`}
                                                                name={`grnProducts.${index}.count`}
                                                                label="Count"
                                                                value={values.grnProducts[index].count}
                                                                options={getSelectedProductData(values.grnProducts[index].productName, searchedProduct)?.count?.map(count => { return { label: count, value: count } }) || []}
                                                                handleChange={handleChange}
                                                            />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 6, md: 3 }}>
                                                            <TextInput
                                                                isRequired={true}
                                                                isReadOnly={true}
                                                                label='Quantity'
                                                                name={`grnProducts.${index}.quantity`}
                                                                type='number'
                                                                value={values.grnProducts[index].quantity || null}
                                                                // handleChange={(event) => handleGRNProductsUpdateChange(index, "quantity", Number(event.target.value), values, setFieldValue)}
                                                            />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 6, md: 3 }}>
                                                            <TextInput
                                                                isRequired={true}
                                                                isReadOnly={true}
                                                                type='number'
                                                                label='Rate'
                                                                id={`grnProducts.${index}.unitPrice`}
                                                                name={`grnProducts.${index}.unitPrice`}
                                                                value={values.grnProducts[index].unitPrice || null}
                                                                handleChange={(event) => handleGRNProductsUpdateChange(index, "unitPrice", Number(event.target.value), values, setFieldValue)}
                                                            />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 6, md: 3 }}>
                                                            <TextInput
                                                                isRequired={false}
                                                                isReadOnly={true}
                                                                type='number'
                                                                label='Amount'
                                                                id={`grnProducts.${index}.amount`}
                                                                name={`grnProducts.${index}.amount`}
                                                                value={values.grnProducts[index].amount || ""} />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 6, md: 4 }}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired={true}
                                                                id={`grnProducts.${index}.packingMaterialWeight`}
                                                                name={`grnProducts.${index}.packingMaterialWeight`}
                                                                label="Packing Material Weight (in grams)"
                                                                value={values.grnProducts[index].packingMaterialWeight || ""}
                                                                handleChange={(event) => handleGRNProductsUpdateChange(index, "packingMaterialWeight", Number(event.target.value), values, setFieldValue)} />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 6, md: 4 }}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired={true}
                                                                id={`grnProducts.${index}.grossWeight`}
                                                                name={`grnProducts.${index}.grossWeight`}
                                                                label="Gross Weight (in kg)"
                                                                value={values.grnProducts[index].grossWeight || ""}
                                                                handleChange={(event) => handleGRNProductsUpdateChange(index, "grossWeight", Number(event.target.value), values, setFieldValue)} />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 12, md: 4 }}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired={false}
                                                                isReadOnly={true}
                                                                id={`grnProducts.${index}.netWeight`}
                                                                name={`grnProducts.${index}.netWeight`}
                                                                label="Net Weight (in kg)"
                                                                value={values.grnProducts[index].netWeight} />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 12, md: 3 }}>
                                                            <TextInput isRequired={false} label='Purchase Date' name={`grnProducts.${index}.purchaseDate`} type='date' value={values.grnProducts[index].purchaseDate} handleChange={handleChange} />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 12, md: 3 }}>
                                                            <TextInput isRequired={false} label='Dispatch Date' name={`grnProducts.${index}.dispatchDate`} type='date' value={values.grnProducts[index].dispatchDate} handleChange={handleChange} />
                                                        </Grid2>
                                                        <Grid2 size={{ xs: 12, md: 3 }}>
                                                            <TextInput isRequired={false} label='Delivery Date' name={`grnProducts.${index}.deliveryDate`} type='date' value={values.grnProducts[index].deliveryDate} handleChange={handleChange} />
                                                        </Grid2>
                                                        {values.source === "farmer" &&
                                                            (<Grid2 size={{ xs: 12, md: 3 }}>
                                                                <TextInput isRequired={false} label='Expected Harvest Date' name={`grnProducts.${index}.expectedHarvestDate`} type='date' value={values.grnProducts[index].expectedHarvestDate} handleChange={handleChange} />
                                                            </Grid2>)}
                                                        <Grid2 size={{ xs: 12, md: 3 }}>
                                                            <TextInput isRequired={false} label='Delivery Location' name={`grnProducts.${index}.deliveryLocation`} type='text' value={values.grnProducts[index].deliveryLocation} handleChange={handleChange} />
                                                        </Grid2>
                                                        {values.grnProducts[index].amount !== null &&
                                                        <> 
                                                        <Grid2 size={{ xs: 12, md: 3 }}>
                                                            <TextInput
                                                                isRequired={true}
                                                                name={`grnProducts.${index}.revisedQuantity`}
                                                                label="Revised Quantity"
                                                                type="number"
                                                                value={values.grnProducts[index].revisedQuantity || ""}
                                                                handleChange={(event) => handleGRNProductsUpdateChange(index, "revisedQuantity", event.target.value, values, setFieldValue)} />
                                                        </Grid2>
                                                         <Grid2 size={{ xs: 12, md: 3 }}>
                                                            <TextInput
                                                                isRequired={true}
                                                                type="number"
                                                                name={`grnProducts.${index}.revisedRate`}
                                                                label="Revised Rate"
                                                                value={values.grnProducts[index].revisedRate || ""}
                                                                handleChange={(event) => handleGRNProductsUpdateChange(index, "revisedRate", event.target.value, values, setFieldValue)} />
                                                        </Grid2></>}
                                                        <Grid2 size={{ xs: 12, md: 9 }}>
                                                            <RadioGroupInput isRequired={true} label="RTV" name={`grnProducts.${index}.rtv`} options={[{ label: "Yes", value: true }, { label: "No", value: false }]} value={values.grnProducts[index].rtv} onChange={handleChange} />
                                                        </Grid2>
                                                    </Grid2>
                                                ))}
                                                {/* <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                                    <Button
                                                        startIcon={<Add />}
                                                        variant="text"
                                                        color='success'
                                                        size='large'
                                                        sx={{ width: 150 }}
                                                        onClick={() => handlePushProduct(initValGRNProducts, values, setFieldValue)}>
                                                        Add More
                                                    </Button>
                                                </Box> */}
                                            </>
                                        )}
                                    </FieldArray>
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 3 }}>
                                    <TextInput isRequired={false} isReadOnly={true} label="Subtotal" name="subTotalAmt" type='number' value={values.subTotalAmt} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 3 }}>
                                    <TextInput isRequired={false} label="Freight" name="freight" type='number' value={values.freight} handleChange={e => handleGRNProductsUpdateChange(null, "freight", Number(e.target.value), values, setFieldValue)} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 3 }}>
                                    <TextInput isRequired={false} label="Other Charges" name="otherCharges" type='number' value={values.otherCharges} handleChange={e => handleGRNProductsUpdateChange(null, "otherCharges", Number(e.target.value), values, setFieldValue)} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 3 }}>
                                    <TextInput isRequired={false} isReadOnly={true} label="Total Amount" name="totalAmt" type='number' value={values.totalAmt} />
                                </Grid2>
                                <Grid2 size={{ xs: 12 }}>
                                    <TextInput isRequired={false} isReadOnly={true} label="Total Amount in Words" name="amtWords" type='text' value={values.amtWords} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 2 }}>
                                    <TextInput isRequired={false} label="Vehicle Number" name="vehicleNo" type='text' value={values.vehicleNo} handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 2 }}>
                                    <TextInput isRequired={false} label="Crates In" name="cratesIn" type='number' value={values.cratesIn} handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 2 }}>
                                    <TextInput isRequired={false} label="Time In" name='timeIn' type='time' value={values.timeIn} handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 3 }}>
                                    <TextInput isRequired={false} label="Received Through" name="receivedThrough" type='text' value={values.receivedThrough} handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 3 }}>
                                    <TextInput isRequired={false} label="Purchase By" name="purchasedBy" type='text' value={values.purchasedBy} handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 4 }}>
                                    <TextInput isRequired={true} label="Delivery Receiving Person" name="deliveryReceivingPerson" type='text' value={values.deliveryReceivingPerson} handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 4 }}>
                                    <TextInput isRequired={false} label="Security Person Name" name="securityPerson" type='text' value={values.securityPerson} handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12, md: 4 }}>
                                    <TextInput isRequired={true} label="RM Name" name="rmn" type='text' value={values.rmn} handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12 }}>
                                    <TextInput isRequired={false} label="Remark" name="remark" type='text' value={values.remark} handleChange={handleChange} />
                                </Grid2>
                                <Grid2 size={{ xs: 12 }}>
                                    <ImageUpload isRequired={false} name='billImage' label='Bill Image' />
                                </Grid2>
                                <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FormButtonGroup
                                        submitLabel='Update'
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
            )

    )
}
