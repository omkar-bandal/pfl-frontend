/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import { Add, Close } from "@mui/icons-material";
import { Box, Button, Grid2, IconButton, LinearProgress, Typography } from "@mui/material";
import { inventoryRouteConstants, SecondSaleProductsInitialValue, SecondSaleRegisterInitialValue, useCreateSecondSaleRegister, useGetSecondSaleRegisterById, useUpdateSecondSaleRegister } from "@prime-fresh/inventory/modules";
import { PURCHASE_ARRAYS } from "@prime-fresh/purchase/modules";
import { AutoCompleteInput, FormButtonGroup, PageTitle, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
import { FieldArray, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { mapToValueLabelArray, useGetAllDeliveryChallanNums, useGetBranchesPartialData, useGetProductsPartialData, useGetUOMPartialData } from "@prime-fresh/shared/modules";

export const SecondSaleRegisterForm = () => {
    const { id } = useParams<{ id: string }>();
    const secondSaleId = id ? id : "";
    
    const { data, isLoading } = useGetSecondSaleRegisterById(secondSaleId);
    const secondSale = data?.data ? data.data : SecondSaleRegisterInitialValue;
    console.log("ss: ",secondSale)
    const initialValueSecondSale = secondSaleId === "" ? SecondSaleRegisterInitialValue : secondSale;

    const navigate = useNavigate();

    const { data: dcNo } = useGetAllDeliveryChallanNums();
    const dcNumbers = useMemo(() => dcNo?.data ? mapToValueLabelArray(dcNo.data, 'id', 'challanNo') : [], [dcNo]);

    const { data: uoms } = useGetUOMPartialData();
    const allUOMs = useMemo(() => uoms?.data ? mapToValueLabelArray(uoms.data, 'id', 'unit') : [], [uoms]);

    const { data: products } = useGetProductsPartialData();
    const allProducts = useMemo(() => products?.data ? mapToValueLabelArray(products?.data, 'id', 'name') : [], [products]);

    const { data: locations } = useGetBranchesPartialData();
    const allLocations = useMemo(() => locations?.data ? mapToValueLabelArray(locations?.data, 'id', 'name') : [], [locations]);

    const { mutateAsync: mutateAsyncPost, error: PostError, data: PostData } = useCreateSecondSaleRegister()
    const { mutateAsync: mutateAsyncPatch, error: PatchError, data: PatchData } = useUpdateSecondSaleRegister(secondSaleId);

    const handleSubmit = (values: any) => {
        secondSaleId === "" ?
            (mutateAsyncPost(values).then(() => {
                toast.success(PostData ? PostData.message : "Second Sale Register Created Successfully.");
                setTimeout(() => {
                    navigate(inventoryRouteConstants.GET_ALL_SECOND_SALE_REGISTER);
                }, 2000);
            }).catch(() => {
                toast.error(PostError ? PostError.message : "Error while creating second sale register");
            })) : (mutateAsyncPatch(values).then(() => {
                toast.success(PatchData ? PatchData.message : "Second Sale Register updated Successfully.");
                setTimeout(() => {
                    navigate(inventoryRouteConstants.GET_ALL_SECOND_SALE_REGISTER);
                }, 2000);
            }).catch(() => {
                toast.error(PatchError ? PatchError.message : "Error while updating second sale register");
            }))
    }

    return (
        secondSaleId !== "" && isLoading ?
            (<Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box >) :

            <Formik
                key={secondSaleId === "" ? "create-ss-register" : "update-ss-register"}
                enableReinitialize={true}
                initialValues={initialValueSecondSale}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={(values) => handleSubmit(values)}>
                {({ values, handleChange, handleSubmit, handleReset, setFieldValue, isSubmitting }) => (
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <Grid2 container columnSpacing={1} rowSpacing={1} padding={1}>
                            <Grid2 size={{ xs: 12 }}>
                                <PageTitle pagetitle="Second Sale Register" />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <AutoCompleteInput
                                    isRequired={true}
                                    name="location"
                                    label="Location"
                                    options={allLocations} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <SelectInput
                                    isRequired={false}
                                    label="Delivery Challan No"
                                    name="dcNo"
                                    options={dcNumbers}
                                    value={values.dcNo}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput
                                    type="date"
                                    isRequired={true}
                                    name="saleDate"
                                    label="Sale Date"
                                    value={values.saleDate}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="buyerName"
                                    label="Buyer Name"
                                    value={values.buyerName}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="buyerMobNo"
                                    label="Buyer Mob. No."
                                    value={values.buyerMobNo}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="approvedBy"
                                    label="Approved By"
                                    value={values.approvedBy}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 3 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="soldBy"
                                    label="Sold By"
                                    value={values.soldBy}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <TextInput
                                    type="text"
                                    isRequired={true}
                                    name="reasonForSale"
                                    label="Reason For Sale"
                                    value={values.reasonForSale}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
                                <FieldArray name="secondSaleProducts">
                                    {({ remove, push }) => (
                                        <>
                                            {values.secondSaleProducts.map((_, index) => (
                                                <Grid2 container columnSpacing={1} key={index} alignItems="center"
                                                    sx={{ border: `1px solid #BDBDBD`, marginY: 1, padding: 1, borderRadius: 2 }}>
                                                    <Grid2 size={{ xs: 12 }} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                        <Typography variant="caption" component="div">Product: {index + 1}</Typography>
                                                        {values.secondSaleProducts.length > 1 &&
                                                            <IconButton color="error" size="small" onClick={() => remove(index)}>
                                                                <Close fontSize="small" />
                                                            </IconButton>}
                                                    </Grid2>
                                                    <Grid2 size={{ xs: 12, md: 4 }}>
                                                        <AutoCompleteInput
                                                            isRequired={true}
                                                            name={`secondSaleProducts.${index}.product`}
                                                            label="Product Name"
                                                            options={allProducts} />
                                                    </Grid2>
                                                    <Grid2 size={{ xs: 12, md: 2}}>
                                                        <SelectInput
                                                            isRequired={true}
                                                            label="UOM"
                                                            name={`secondSaleProducts.${index}.uom`}
                                                            options={allUOMs}
                                                            value={values.secondSaleProducts[index].uom}
                                                            handleChange={handleChange} />
                                                    </Grid2>
                                                    <Grid2 size={{ xs: 4, md: 2}}>
                                                        <TextInput isRequired={true} label='Quantity' name={`secondSaleProducts.${index}.qty`} type='number' value={values.secondSaleProducts[index].qty}
                                                            handleChange={(e) => {
                                                                handleChange(e);
                                                                setFieldValue(`secondSaleProducts.${index}.qty`, parseFloat(e.target.value) || 0);
                                                            }}
                                                        // onBlur={() => calculateAmounts(values, setFieldValue)}
                                                        />
                                                    </Grid2>
                                                    <Grid2 size={{ xs: 4, md: 2}}>
                                                        <TextInput isRequired={true} label='Rate' name={`secondSaleProducts.${index}.rate`} type='number' value={values.secondSaleProducts[index].rate}
                                                            handleChange={(e) => {
                                                                handleChange(e);
                                                                setFieldValue(`secondSaleProducts.${index}.rate`, parseFloat(e.target.value) || 0);
                                                            }}
                                                        // onBlur={() => calculateAmounts(values, setFieldValue)}
                                                        />
                                                    </Grid2>
                                                    <Grid2 size={{ xs: 4, md: 2}}>
                                                        <TextInput isRequired={false} label='Amount' name={`secondSaleProducts.${index}.amount`} type='number' value={values.secondSaleProducts[index].amount} handleChange={handleChange} />
                                                    </Grid2>
                                                </Grid2>
                                            ))}
                                            <Grid2 size={{ xs: 12 }} sx={{ display: "flex", alignItems: "center", justifyContent: "end", }}>
                                                <Button variant="text" startIcon={<Add />}
                                                    onClick={() => push(SecondSaleProductsInitialValue)}>
                                                    Add More
                                                </Button>
                                            </Grid2>
                                        </>
                                    )}
                                </FieldArray>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput
                                    type="number"
                                    isRequired={true}
                                    name="paidAmount"
                                    label="Paid Amount"
                                    value={values.paidAmount}
                                    handleChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <TextInput
                                    type="number"
                                    isRequired={true}
                                    name="pendingAmt"
                                    label="Pending Amount"
                                    value={values.pendingAmt}
                                    handleChange={handleChange}
                                />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <SelectInput
                                    isRequired={true}
                                    name="paymentMode"
                                    label="Payment Mode"
                                    value={values.paymentMode}
                                    options={PURCHASE_ARRAYS.paymentMode}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
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
                            </Grid2>
                            <Grid2 size={{ xs: 12 }}>
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
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6}}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="submittedBy"
                                    label="Submitted By"
                                    value={values.submittedBy}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 6}}>
                                <TextInput
                                    type="text"
                                    isRequired={false}
                                    name="mobileNo"
                                    label="Mobile Number"
                                    value={values.mobileNo}
                                    handleChange={handleChange} />
                            </Grid2>
                            <Grid2 size={{ xs: 12 }} marginY={2} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                <FormButtonGroup
                                    submitLabel={secondSaleId === "" ? "Create" : "Update"}
                                    isSubmitting={isSubmitting}
                                    isSubmitError={secondSaleId === "" ? PostError : PatchError}
                                    resetLabel='Reset'
                                    onReset={handleReset}
                                />
                            </Grid2>
                        </Grid2>
                    </form>
                )}
            </Formik>
    )
}
