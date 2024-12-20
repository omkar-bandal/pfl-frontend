import React from "react";
import { Box, Button, Grid, IconButton, LinearProgress, Stack, Typography } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { deliveryChallanSchema, initValDeliveryChallan, initValMaterials, PURCHASE_ARRAYS, PURCHASE_ROUTES, setPreviewDC } from "@prime-fresh/purchase/modules";
import { ImageUpload, mapToValueLabelArray, RadioGroupInput, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { PURCHASE_API_URL, useGetAllGRNNums, useGetDeliveryChallan, useUpdateDeliveryChallan } from "@prime-fresh/purchase_api";
import { DeliveryChallanPreview } from "./DeliveryChallan_Preview";
import { setPreview } from "@prime-fresh/modules";
import { useNavigate, useParams } from "react-router-dom";
import { appendFormData } from "@prime-fresh/shared/utils";
import { useDispatch } from "react-redux";

export const DeliveryChallanUpdate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Get Id from URL
    const { id } = useParams<{ id: string }>();
    const dcId = id ? id : '';

    //Get delivery challan data by id
    const { data: dcData, isLoading } = useGetDeliveryChallan(PURCHASE_API_URL.GET_A_DELIVERY_CHALLAN, dcId);
    const dcValues = dcData ? dcData : initValDeliveryChallan;

    //Get all GRN numbers
    const { data: grnNums } = useGetAllGRNNums(PURCHASE_API_URL.GET_ALL_GRN_NO);
    const allGRNNumbers = grnNums ? grnNums : [];

    //React Query to update delivery challan
    const { mutateAsync: mutatePatch, error, data: Res } = useUpdateDeliveryChallan(PURCHASE_API_URL.UPDATE_DELIVERY_CHALLAN, dcId);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                    {({ values, handleChange, handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h4">Delivery Challan</Typography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack direction="row" justifyContent="end" alignItems="center">
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="success"
                                            size="large"
                                            sx={{ width: 150 }}
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            type="reset"
                                            variant="contained"
                                            color="secondary"
                                            size="large"
                                            sx={{ width: 150, marginLeft: 2 }}
                                        >
                                            Reset
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color='info'
                                            size='large'
                                            sx={{ width: 150, marginLeft: 2 }} onClick={() => { dispatch(setPreviewDC(values)); dispatch(setPreview(true)) }}>Preview</Button>
                                    </Stack>
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
                                {values.deliveryCType === "Other" ?
                                    (<Grid item xs={12}>
                                        <TextInput
                                            isRequired={true}
                                            name="otherCType"
                                            label="If other please specify "
                                            type="text" value={values.otherCType}
                                            handleChange={handleChange}/>
                                    </Grid>) : ('')}
                                <Grid item xs={12} md={3}>
                                    <SelectInput
                                        isRequired={false}
                                        name="grnNo"
                                        label="Select GRN"
                                        options={mapToValueLabelArray(allGRNNumbers, 'id', 'grnNo')}
                                        value={values.grnNo}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <SelectInput
                                        isRequired={true}
                                        name="companyName"
                                        label="Company Name"
                                        value={values.companyName}
                                        options={PURCHASE_ARRAYS.companyNames}
                                        handleChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <TextInput
                                        isRequired={true}
                                        name="partyName"
                                        label="Party Name"
                                        type="text"
                                        value={values.partyName}
                                        handleChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <FieldArray name="items">
                                        {({ remove, push }) => (
                                            <>
                                                {values.items.map((item, index) => (
                                                    <Grid container columnSpacing={1} key={index} alignItems="center">
                                                        <Grid item xs={12} md={4}>
                                                            <TextInput
                                                                type="text"
                                                                isRequired={true}
                                                                name={`items.${index}.itemName`}
                                                                label="Product Name"
                                                                value={item.itemName}
                                                                handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={2}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired={true}
                                                                name={`items.${index}.itemQty`}
                                                                label="Quantity"
                                                                value={item.itemQty}
                                                                handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={2}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired={true}
                                                                name={`items.${index}.rate`}
                                                                label="Rate"
                                                                value={item.rate}
                                                                handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={2}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired={false}
                                                                name={`items.${index}.amt`}
                                                                label="Amount"
                                                                value={item.amt}
                                                                handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                                                            {values.items.length > 1 ? (<IconButton color="error" size="large" sx={{ marginTop: 2 }} onClick={() => remove(index)}>
                                                                <Close />
                                                            </IconButton>) : ('')}
                                                            <IconButton color="primary" size="large" sx={{ marginTop: 2 }} onClick={() => push(initValMaterials)}>
                                                                <Add />
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                ))}
                                            </>
                                        )}
                                    </FieldArray>
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <TextInput
                                        type="number"
                                        isRequired={false}
                                        name="totAmt"
                                        label="Total Amount"
                                        value={values.totAmt}
                                        handleChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="fromLocation"
                                        label="From"
                                        value={values.fromLocation}
                                        handleChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="toLocation"
                                        label="To"
                                        value={values.toLocation}
                                        handleChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="driverName"
                                        label="Driver Name"
                                        value={values.driverName}
                                        handleChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="contactNo"
                                        label="Contact No"
                                        value={values.contactNo}
                                        handleChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput
                                        type="text"
                                        isRequired={false}
                                        name="altContactNo"
                                        label="Alternate Contact No"
                                        value={values.altContactNo}
                                        handleChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="vehicleNo"
                                        label="Vehicle No"
                                        value={values.vehicleNo}
                                        handleChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="receiverName"
                                        label="Receiver Name"
                                        value={values.receiverName}
                                        handleChange={handleChange}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <ImageUpload isRequired={false} name="anyAttachment" label="Any Attachment" />
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>)}
            <DeliveryChallanPreview />
        </>
    );
};