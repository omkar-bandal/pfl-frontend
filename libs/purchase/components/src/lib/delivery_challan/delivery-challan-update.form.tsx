/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import { Box, Button, Grid, IconButton, LinearProgress } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { deliveryChallanSchema, initValDeliveryChallan, initValMaterials, PURCHASE_ARRAYS, PURCHASE_ROUTES, setPreviewDC, useGetDeliveryChallanById, useUpdateDeliveryChallanById } from "@prime-fresh/purchase/modules";
import { AutoCompleteInput, FormAccordion, FormPreviewBtn, FormResetBtn, FormSubmitBtn, ImageUpload, PageTitle, RadioGroupInput, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { DeliveryChallanPreview } from "./delivery-challan.preview";
import { setPreview } from "@prime-fresh/modules";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { appendFormData, mapToValueLabelArray, numToWords, useGetAllGRNNums, useGetBranchesPartialData, useGetCompanyNames, useGetCustomerNames, useGetProductsPartialData, useGetUOMPartialData } from "@prime-fresh/shared/modules";
import { useGetAllOffices } from "@prime-fresh/admin/modules";
import { FromLocation } from "./from-locations";
import { ToLocation } from "./to-locations";
import { DeliveryChallanProducts, GetDeliveryChallan, PostDeliveryChallan } from "@prime-fresh/purchase_api";

export const DeliveryChallanUpdate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Get Id from URL
    const { id } = useParams<{ id: string }>();
    const dcId = id ? id : '';

    //Get delivery challan data by id
    const { data: dcData, isLoading } = useGetDeliveryChallanById(dcId);
    const dcValues = dcData?.data ? dcData.data : initValDeliveryChallan;

    const { data: companies } = useGetCompanyNames();
    const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];

    const { data: offices } = useGetAllOffices("registered-office");
    const allOffices = offices?.data ? mapToValueLabelArray(offices.data, 'id', 'name') : [];

    const { data } = useGetAllGRNNums();
    const allGRNNumbers = data?.data ? mapToValueLabelArray(data?.data, 'id', 'grnNo') : [];

    const { data: customerlist } = useGetCustomerNames();
    const customerList = customerlist?.data ? mapToValueLabelArray(customerlist.data, 'id', 'organisationName') : [];

    const { data: Products } = useGetProductsPartialData();
    const allProducts = useMemo(() => Products?.data ? mapToValueLabelArray(Products.data, 'id', 'name') : [], [Products]);

    const { data: UOMs } = useGetUOMPartialData();
    const allUOMs = useMemo(() => UOMs?.data ? mapToValueLabelArray(UOMs.data, 'id', 'unit') : [], [UOMs]);

    const { data: Locations } = useGetBranchesPartialData();
    const allLocations = Locations?.data ? Locations.data : [];

    //React Query to update delivery challan
    const { mutateAsync: mutatePatch, error, data: Res } = useUpdateDeliveryChallanById(dcId);

    const handleProductChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        index: number,
        setFieldValue: (field: string, value: any) => void,
        values: PostDeliveryChallan | GetDeliveryChallan
    ) => {
        const { name, value } = event.target;

        // Identify the field name dynamically (last part of the field name after the dot)
        const fieldName = name.split(".").pop() as keyof DeliveryChallanProducts;

        if (!fieldName) return; // Prevent invalid updates if fieldName is not found

        // Clone the products array to avoid direct mutation of state
        const updatedProducts = [...values.deliveryChallanProducts];
        const product = updatedProducts[index];

        if (!product) return; // Ensure product exists

        // Handle numeric fields (quantity, unitPrice, grossWeight, packingMaterialWeight)
        if (["quantity", "unitPrice", "grossWeight", "packingMaterialWeight"].includes(fieldName)) {
            const numericValue = isNaN(Number(value)) ? 0 : Number(value);
            if (fieldName === "quantity") product.quantity = numericValue;
            if (fieldName === "unitPrice") product.unitPrice = numericValue;
            if (fieldName === "grossWeight") product.grossWeight = numericValue;
            if (fieldName === "packingMaterialWeight") product.packingMaterialWeight = numericValue;
        } else {
            // Handle string or nullable fields (productName, count, size, uom)
            if (fieldName === "productName") product.productName = value || null;
            if (fieldName === "count") product.count = value || null;
            if (fieldName === "size") product.size = value || null;
            if (fieldName === "uom") product.uom = value || null;
        }

        // Recalculate amount based on quantity and unitPrice
        product.amount = (product.quantity || 0) * (product.unitPrice || 0);
        setFieldValue(`deliveryChallanProducts.${index}.amount`, product.amount);

        // Recalculate netWeight (grossWeight - packingMaterialWeight in kg)
        product.netWeight = (product.grossWeight || 0) - (product.packingMaterialWeight || 0) / 1000; // convert grams to kg
        setFieldValue(`deliveryChallanProducts.${index}.netWeight`, product.netWeight);

        // Calculate the total amount across all products
        const totalAmount = updatedProducts.reduce((sum, prod) => sum + (prod.amount || 0), 0);
        setFieldValue("totalAmt", totalAmount); // Update total amount
        setFieldValue("totalAmtInWords", numToWords(totalAmount))
    };

    const handleUpdate = (values: any) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData).then(() => {
            toast.success(Res ? Res.message : "Delivery challan updated.");
            setTimeout(() => {
                navigate(PURCHASE_ROUTES.GET_ALL_DELIVERY_CHALLAN);
            }, 2500);
        }).catch(() => {
            toast.error(error ? error.message : "Error while updating delivery challan.");
        });
    };

    return (
        <>
            {isLoading ?
                (<Box sx={{ flex: 1 }} >
                    <LinearProgress />
                </Box >) :
                (<Formik
                    enableReinitialize={true}
                    initialValues={dcValues}
                    validationSchema={deliveryChallanSchema}
                    validateOnBlur={true}
                    validateOnChange={true}
                    onSubmit={(values) => {
                        console.log("updated data:", values);
                        handleUpdate(values);
                    }}
                >
                    {({ values, handleChange, handleSubmit, handleReset, isSubmitting, setFieldValue }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                                <Grid item xs={12}>
                                    <PageTitle pagetitle='Delivery Challan' />
                                </Grid>
                                <Grid item xs={12}>
                                    <RadioGroupInput
                                        isRequired={true}
                                        name="deliveryCType"
                                        label="Challan Type"
                                        alignment="horizontal"
                                        options={PURCHASE_ARRAYS.deliveryChallanType}
                                        value={values.deliveryCType}
                                        handleChange={handleChange} />
                                </Grid>
                                {values.deliveryCType === "other" ?
                                    (<Grid item xs={12}>
                                        <TextInput
                                            isRequired={true}
                                            name="otherCType"
                                            label="If other please specify "
                                            type="text" value={values.otherCType}
                                            handleChange={handleChange} />
                                    </Grid>) : ('')}
                                <Grid item xs={12} md={6}>
                                    <SelectInput
                                        isRequired={true}
                                        name="companyName"
                                        label="Company Name"
                                        value={values.companyName}
                                        options={companyNames}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SelectInput
                                        isRequired={true}
                                        name="offices"
                                        label="Office"
                                        value={values.offices}
                                        options={allOffices}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <SelectInput
                                        isRequired={false}
                                        name="grnNo"
                                        label="Referred GRN"
                                        value={values.grnNo}
                                        options={allGRNNumbers}
                                        handleChange={handleChange} />
                                </Grid>
                                {values.deliveryCType === "customer" ? (<>
                                    <Grid item xs={12} md={4}>
                                        <TextInput
                                            isRequired={true}
                                            name="poNumber"
                                            label="PO Number"
                                            type="text"
                                            value={values.poNumber}
                                            handleChange={handleChange} />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <AutoCompleteInput
                                            name="partyName"
                                            label="Customer Name"
                                            isRequired={true}
                                            options={customerList}
                                            handleChange={(e, newValue) => {
                                                newValue ? setFieldValue("partyName", newValue) : setFieldValue("partyName", "")
                                            }} />
                                    </Grid>
                                </>) : (
                                    <Grid item xs={12} md={8}>
                                        <TextInput
                                            isRequired={true}
                                            name="partyName"
                                            label="Party Name"
                                            type="text"
                                            value={values.partyName}
                                            handleChange={handleChange} />
                                    </Grid>
                                )}

                                <FromLocation locations={allLocations} />
                                <ToLocation locations={allLocations} />

                                <Grid item xs={12}>
                                    <FormAccordion panel="Products">
                                        <FieldArray name="deliveryChallanProducts">
                                            {({ remove, push }) => (
                                                <>
                                                    {values.deliveryChallanProducts.map((_, index: number) => (
                                                        <Grid container columnSpacing={1} key={index} alignItems="center" marginY={1} padding={1} sx={{ border: `1px solid #ccc`, borderRadius: 5 }}>
                                                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                                                                {values.deliveryChallanProducts.length > 1 ? (<IconButton color="error" size="small" onClick={() => remove(index)}>
                                                                    <Close />
                                                                </IconButton>) : ('')}
                                                            </Grid>
                                                            <Grid item xs={12} md={6}>
                                                                <AutoCompleteInput
                                                                    isRequired={true}
                                                                    name={`deliveryChallanProducts.${index}.productName`}
                                                                    label="Product Name"
                                                                    options={allProducts}
                                                                    handleChange={(event, newValue) => {
                                                                        if (newValue) {
                                                                            setFieldValue(`deliveryChallanProducts.${index}.productName`, newValue);
                                                                        } else {
                                                                            setFieldValue(`deliveryChallanProducts.${index}.productName`, '');
                                                                        }
                                                                    }}
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12} md={2}>
                                                                <SelectInput
                                                                    isRequired={false}
                                                                    label="Count"
                                                                    name={`deliveryChallanProducts.${index}.count`}
                                                                    options={[]}
                                                                    value={values.deliveryChallanProducts[index].count}
                                                                    handleChange={handleChange} />
                                                            </Grid>
                                                            <Grid item xs={12} md={2}>
                                                                <SelectInput
                                                                    isRequired={false}
                                                                    label="Size"
                                                                    name={`deliveryChallanProducts.${index}.size`}
                                                                    options={[]}
                                                                    value={values.deliveryChallanProducts[index].size}
                                                                    handleChange={handleChange} />
                                                            </Grid>
                                                            <Grid item xs={12} md={2}>
                                                                <SelectInput
                                                                    isRequired={false}
                                                                    label="Unit"
                                                                    name={`deliveryChallanProducts.${index}.uom`}
                                                                    options={allUOMs}
                                                                    value={
                                                                        typeof values.deliveryChallanProducts[index].uom !== "string"
                                                                            && values.deliveryChallanProducts[index].uom !== null ?
                                                                            values.deliveryChallanProducts[index].uom.id
                                                                            : values.deliveryChallanProducts[index].uom}
                                                                    handleChange={handleChange} />
                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <TextInput
                                                                    type="number"
                                                                    isRequired={true}
                                                                    name={`deliveryChallanProducts.${index}.packingMaterialWeight`}
                                                                    label="Packing Material Weight (in grams)"
                                                                    value={values.deliveryChallanProducts[index].packingMaterialWeight || ""}
                                                                    handleChange={(event) => handleProductChange(event, index, setFieldValue, values)} />
                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <TextInput
                                                                    type="number"
                                                                    isRequired={true}
                                                                    name={`deliveryChallanProducts.${index}.grossWeight`}
                                                                    label="Gross Weight (in kg)"
                                                                    value={values.deliveryChallanProducts[index].grossWeight || ""}
                                                                    handleChange={(event) => handleProductChange(event, index, setFieldValue, values)} />
                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <TextInput
                                                                    type="number"
                                                                    isRequired={false}
                                                                    isReadOnly={true}
                                                                    name={`deliveryChallanProducts.${index}.netWeight`}
                                                                    label="Net Weight (in kg)"
                                                                    value={values.deliveryChallanProducts[index].netWeight} />
                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <TextInput
                                                                    type="number"
                                                                    isRequired={true}
                                                                    name={`deliveryChallanProducts.${index}.quantity`}
                                                                    label="Quantity"
                                                                    value={values.deliveryChallanProducts[index].quantity || ""}
                                                                    handleChange={(event) => handleProductChange(event, index, setFieldValue, values)}
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <TextInput
                                                                    type="number"
                                                                    isRequired={true}
                                                                    name={`deliveryChallanProducts.${index}.unitPrice`}
                                                                    label="Unit Price"
                                                                    value={values.deliveryChallanProducts[index].unitPrice || ""}
                                                                    handleChange={(event) => handleProductChange(event, index, setFieldValue, values)}
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12} md={4}>
                                                                <TextInput
                                                                    isRequired={false}
                                                                    isReadOnly={true}
                                                                    name={`deliveryChallanProducts.${index}.amount`}
                                                                    label="Amount"
                                                                    value={values.deliveryChallanProducts[index].amount} />
                                                            </Grid>
                                                        </Grid>
                                                    ))}
                                                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                                                        <Button startIcon={<Add sx={{ fontWeight: 600 }} />} color="primary" size="small" sx={{ fontWeight: 600 }} onClick={() => push(initValMaterials)}>
                                                            Add More
                                                        </Button>
                                                    </Grid>
                                                </>
                                            )}
                                        </FieldArray>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} md={2}>
                                                <TextInput
                                                    type="number"
                                                    isRequired={false}
                                                    name="totalAmt"
                                                    label="Total Amount"
                                                    value={values.totalAmt}
                                                    handleChange={handleChange} />
                                            </Grid>
                                            <Grid item xs={12} md={10}>
                                                <TextInput
                                                    isRequired={false}
                                                    isReadOnly={true}
                                                    name="totalAmtInWords"
                                                    label="Amount in words"
                                                    value={values.totalAmtInWords} />
                                            </Grid>
                                        </Grid>
                                    </FormAccordion>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormAccordion panel="Driver and Vehicle Details">
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} md={4}>
                                                <TextInput
                                                    type="text"
                                                    isRequired={true}
                                                    name="driverName"
                                                    label="Driver Name"
                                                    value={values.driverName}
                                                    handleChange={handleChange} />
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <TextInput
                                                    type="text"
                                                    isRequired={true}
                                                    name="licenseNo"
                                                    label="Driver's License Number"
                                                    value={values.licenseNo}
                                                    handleChange={handleChange} />
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <TextInput
                                                    type="text"
                                                    isRequired={true}
                                                    name="contactNo"
                                                    label="Contact No"
                                                    value={values.contactNo}
                                                    handleChange={handleChange} />
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <TextInput
                                                    type="text"
                                                    isRequired={false}
                                                    name="altContactNo"
                                                    label="Alternate Contact No"
                                                    value={values.altContactNo}
                                                    handleChange={handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <TextInput
                                                    type="text"
                                                    isRequired={true}
                                                    name="vehicleNo"
                                                    label="Vehicle No"
                                                    value={values.vehicleNo}
                                                    handleChange={handleChange} />
                                            </Grid>
                                        </Grid>
                                    </FormAccordion>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormAccordion panel="Other Details">
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} md={4}>
                                                <TextInput
                                                    type="text"
                                                    isRequired={true}
                                                    name="receiverName"
                                                    label="Receiver Name"
                                                    value={values.receiverName}
                                                    handleChange={handleChange} />
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <TextInput
                                                    type="text"
                                                    isRequired={true}
                                                    name="rmn"
                                                    label="RM Name"
                                                    value={values.rmn}
                                                    handleChange={handleChange} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextInput
                                                    type="text"
                                                    isRequired={false}
                                                    name="remark"
                                                    label="Remark"
                                                    value={values.remark}
                                                    handleChange={handleChange}
                                                />
                                            </Grid>
                                        </Grid>
                                    </FormAccordion>
                                </Grid>
                                <Grid item xs={12}>
                                    <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} marginY={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Create" />
                                <FormResetBtn label="Reset" handleReset={handleReset} />
                                <FormPreviewBtn onClick={() => { dispatch(setPreviewDC(values)); dispatch(setPreview(true)) }} />
                            </Grid>
                        </form>
                    )}
                </Formik>)}
            <DeliveryChallanPreview />
        </>
    );
};