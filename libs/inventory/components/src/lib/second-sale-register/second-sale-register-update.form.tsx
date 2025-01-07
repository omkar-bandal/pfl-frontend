import React from "react";
import { Add, Close } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, LinearProgress, Typography } from "@mui/material";
import { ADMIN_API_URL, useGetAllFilteredBranches, useGetAllProducts, useGetAllUOMs } from "@prime-fresh/admin_api";
import { inventoryRouteConstants, SecondSaleProductsInitialValue, SecondSaleRegisterInitialValue } from "@prime-fresh/inventory/modules";
import { INVENTORY_API_URL, useGetASecondSaleRegister, useUpdateSecondSaleRegister } from "@prime-fresh/inventory_api";
import { PURCHASE_ARRAYS } from "@prime-fresh/purchase/modules";
import { PURCHASE_API_URL, useGetAllDeliveryChallanNums } from "@prime-fresh/purchase_api";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { appendFormData, mapToValueLabelArray } from "@prime-fresh/shared/utils";
import { AutoCompleteInput, FormResetBtn, FormSubmitBtn, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { FieldArray, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";

export const SecondSaleRegisterUpdateForm = () => {
    const { id } = useParams<{ id: string }>();
    const Id = id ? id : "";
    const { data: secondSale, isLoading } = useGetASecondSaleRegister(INVENTORY_API_URL.GET_A_SECOND_SALE_REGISTER, Id);
    const initialValueSecondSale = secondSale ? secondSale : SecondSaleRegisterInitialValue;

    const navigate = useNavigate();
    const { data: dcNo } = useGetAllDeliveryChallanNums(PURCHASE_API_URL.GET_ALL_DELIVERY_CHALLAN_NO);
    const dcNumbers = React.useMemo(() => dcNo ? mapToValueLabelArray(dcNo, 'id', 'challanNo') : [], [dcNo]);
    const { data: locations } = useGetAllFilteredBranches(ADMIN_API_URL.GET_ALL_BRANCHES_FILTERED);
    const allLocations = React.useMemo(() => locations ? mapToValueLabelArray(locations, 'id', 'name') : [], [locations]);
    const { data: products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
    const allProducts = React.useMemo(() => products ? mapToValueLabelArray(products, 'id', 'name') : [], [products]);
    const { data: uoms } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
    const allUOMs = uoms ? uoms : [];

    const { mutateAsync, error, data } = useUpdateSecondSaleRegister(INVENTORY_API_URL.UPDATE_SECOND_SALE_REGISTER, Id);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleUpdate = (values: any) => {
        console.log(values);
        const formData = new FormData();
        appendFormData(formData, values);
        mutateAsync(formData).then(() => {
            toast.success(data ? data.message : "Second Sale Register Created Successfully.");
            setTimeout(() => {
                navigate(inventoryRouteConstants.GET_ALL_SECOND_SALE_REGISTER);
            }, 2500);
        }).catch(() => {
            toast.error(error ? error.message : "Error while creating second sale register");
        })
    }

    return (
        isLoading ?
            (<Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box >) :

            <Formik
                enableReinitialize={true}
                initialValues={initialValueSecondSale}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={(values) => handleUpdate(values)}>
                {({ values, handleChange, handleSubmit, handleReset, setFieldValue, isSubmitting }) => (
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4">Second Sale Register</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Update" />
                                <FormResetBtn label="Reset" handleReset={handleReset} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <AutoCompleteInput
                                    isRequired={true}
                                    name="location"
                                    label="Location"
                                    options={allLocations}
                                    handleChange={(event, newValue) => newValue ? setFieldValue('location', newValue.value) : setFieldValue('location', '')} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <SelectInput
                                    isRequired={false}
                                    label="Delivery Challan No"
                                    name="dcNo"
                                    options={dcNumbers}
                                    value={values.dcNo}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput
                                    type="date"
                                    isRequired={true}
                                    name="saleDate"
                                    label="Sale Date"
                                    value={values.saleDate}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="buyerName"
                                    label="Buyer Name"
                                    value={values.buyerName}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="buyerMobNo"
                                    label="Buyer Mob. No."
                                    value={values.buyerMobNo}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="approvedBy"
                                    label="Approved By"
                                    value={values.approvedBy}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="soldBy"
                                    label="Sold By"
                                    value={values.soldBy}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="reasonForSale"
                                    label="Reason For Sale"
                                    value={values.reasonForSale}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <FieldArray name="secondSaleProducts">
                                    {({ remove, push }) => (
                                        <>
                                            {values.secondSaleProducts.map((_, index) => (
                                                <Grid container columnSpacing={1} key={index} alignItems="center"
                                                    sx={{ border: `1px solid #BDBDBD`, marginY: 1, padding: 1, borderRadius: 2 }}>
                                                    <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                        <Typography variant="body1" component="div">Product: {index + 1}</Typography>
                                                        {values.secondSaleProducts.length > 1 &&
                                                            <IconButton color="error" onClick={() => remove(index)}>
                                                                <Close />
                                                            </IconButton>}
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <AutoCompleteInput
                                                            isRequired={true}
                                                            name={`secondSaleProducts.${index}.product`}
                                                            label="Product Name"
                                                            options={allProducts}
                                                            handleChange={(event, newValue) => newValue ?
                                                                setFieldValue(`secondSaleProducts.${index}.product`, newValue.value) :
                                                                setFieldValue(`secondSaleProducts.${index}.product`, '')} />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <SelectInput
                                                            isRequired={true}
                                                            label="UOM"
                                                            name={`secondSaleProducts.${index}.uom`}
                                                            options={mapToValueLabelArray(allUOMs, 'id', 'unit')}
                                                            value={values.secondSaleProducts[index].uom}
                                                            handleChange={handleChange} />
                                                    </Grid>
                                                    <Grid item xs={4} md={2}>
                                                        <TextInput isRequired={true} label='Quantity' name={`secondSaleProducts.${index}.qty`} type='number' value={values.secondSaleProducts[index].qty}
                                                            handleChange={(e) => {
                                                                handleChange(e);
                                                                setFieldValue(`secondSaleProducts.${index}.qty`, parseFloat(e.target.value) || 0);
                                                            }}
                                                        // onBlur={() => calculateAmounts(values, setFieldValue)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4} md={2}>
                                                        <TextInput isRequired={true} label='Rate' name={`secondSaleProducts.${index}.rate`} type='number' value={values.secondSaleProducts[index].rate}
                                                            handleChange={(e) => {
                                                                handleChange(e);
                                                                setFieldValue(`secondSaleProducts.${index}.rate`, parseFloat(e.target.value) || 0);
                                                            }}
                                                        // onBlur={() => calculateAmounts(values, setFieldValue)}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4} md={2}>
                                                        <TextInput isRequired={false} label='Amount' name={`secondSaleProducts.${index}.amount`} type='number' value={values.secondSaleProducts[index].amount} handleChange={handleChange} />
                                                    </Grid>
                                                </Grid>
                                            ))}
                                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "end", }}>
                                                <Button variant="text" startIcon={<Add />}
                                                    onClick={() => push(SecondSaleProductsInitialValue)}>
                                                    Add More
                                                </Button>
                                            </Grid>
                                        </>
                                    )}
                                </FieldArray>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput
                                    type="number"
                                    isRequired={true}
                                    name="paidAmount"
                                    label="Paid Amount"
                                    value={values.paidAmount}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextInput
                                    type="number"
                                    isRequired={true}
                                    name="pendingAmt"
                                    label="Pending Amount"
                                    value={values.pendingAmt}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <SelectInput
                                    isRequired={true}
                                    name="paymentMode"
                                    label="Payment Mode"
                                    value={values.paymentMode}
                                    options={PURCHASE_ARRAYS.paymentMode}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    type="text"
                                    multiline
                                    maxRows={2}
                                    isRequired={false}
                                    name="remarks"
                                    label="Remark"
                                    value={values.remarks}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput
                                    type="text"
                                    multiline
                                    maxRows={2}
                                    isRequired={false}
                                    name="comments"
                                    label="Comments"
                                    value={values.comments}
                                    handleChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="submittedBy"
                                    label="Submitted By"
                                    value={values.submittedBy}
                                    handleChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="mobileNo"
                                    label="Mobile Number"
                                    value={values.mobileNo}
                                    handleChange={handleChange} />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
    )
}
