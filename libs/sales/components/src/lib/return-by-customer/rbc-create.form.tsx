import { Add, Close } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { ADMIN_API_URL, useGetAllProducts, useGetAllUOMs } from "@prime-fresh/admin_api";
import { PURCHASE_ARRAYS } from "@prime-fresh/purchase/modules";
import { rbcInitialValues, returnedProductsInitialValues } from "@prime-fresh/sales/modules";
import { AutoCompleteInput, FormResetBtn, FormSubmitBtn, mapToValueLabelArray, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { FieldArray, Formik } from "formik";
import React from "react";

export const RBCCreateForm = () => {
    const { data: products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
    const allProducts = products ? mapToValueLabelArray(products, 'id', 'name') : [];
    const { data: uoms } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
    const allUOMs = React.useMemo(() => mapToValueLabelArray(uoms || [], 'id', 'unit'), [uoms]);

    return (
        <Formik
            initialValues={rbcInitialValues}
            onSubmit={(values) => {
                console.log(values)
            }}>
            {({ values, handleChange, handleReset, handleSubmit, setFieldValue, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                    <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4">Products Returned From Customer</Typography>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <FormSubmitBtn isSubmitting={isSubmitting} isError={null} label="Create" />
                            <FormResetBtn label="Reset" handleReset={handleReset} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <SelectInput
                                isRequired
                                label="Company Name"
                                name="companyName"
                                options={PURCHASE_ARRAYS.companyNames}
                                value={values.companyName}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextInput
                                type="date"
                                isRequired
                                name="date"
                                label="Date"
                                value={values.date}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name="proformaInvNo"
                                label="Proforma Invoice Number"
                                value={values.proformaInvNo}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FieldArray name="returnedProducts">
                                {({ push, remove }) => (
                                    <>
                                        {values.returnedProducts.map((_, index) => (
                                            <Grid container columnSpacing={1} key={index} alignItems="center" marginY={1}>
                                                <Grid item xs={12} md={5}>
                                                    <AutoCompleteInput
                                                        isRequired={true}
                                                        name={`returnedProducts.${index}.productName`}
                                                        label="Product Name"
                                                        options={allProducts}
                                                        handleChange={(event, newValue) => {
                                                            if (newValue) {
                                                                setFieldValue(`returnedProducts.${index}.productName`, newValue.value);
                                                            } else {
                                                                setFieldValue(`returnedProducts.${index}.productName`, '');
                                                            }
                                                        }} />
                                                </Grid>
                                                <Grid item xs={12} md={2}>
                                                    <SelectInput
                                                        isRequired
                                                        name={`returnedProducts.${index}.uom`}
                                                        label="UOM"
                                                        options={allUOMs}
                                                        value={values.returnedProducts[index].uom}
                                                        handleChange={handleChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={2}>
                                                    <TextInput
                                                        type="number"
                                                        isRequired
                                                        name={`returnedProducts.${index}.quantity`}
                                                        label="Quantity"
                                                        value={values.returnedProducts[index].quantity}
                                                        handleChange={handleChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={2}>
                                                    <TextInput
                                                        type="number"
                                                        isRequired
                                                        name={`returnedProducts.${index}.unitPrice`}
                                                        label="Unit Cost"
                                                        value={values.returnedProducts[index].unitPrice}
                                                        handleChange={handleChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={1} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                                                    <IconButton color="success" size="small" sx={{ marginTop: 3 }} onClick={() => push(returnedProductsInitialValues)}>
                                                        <Add />
                                                    </IconButton>
                                                    {values.returnedProducts.length > 1 && (<IconButton color="error" size="small" sx={{ marginTop: 3 }} onClick={() => remove(index)}>
                                                        <Close />
                                                    </IconButton>)}
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </>
                                )}
                            </FieldArray>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextInput
                                isRequired={false}
                                type="number"
                                name="gst"
                                label="GST"
                                value={values.gst}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextInput
                                isRequired={false}
                                type="number"
                                name="taxAmt"
                                label="Tax Amount"
                                value={values.taxAmt}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextInput
                                isRequired={false}
                                type="number"
                                name="totalAmt"
                                label="Total Amount"
                                value={values.totalAmt}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput
                                isRequired={false}
                                name="amtInWords"
                                label="Amount In Words"
                                value={values.amtInWords}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput
                                isRequired={false}
                                multiline
                                maxRows={2}
                                name="remark"
                                label="Remark"
                                value={values.remark}
                                handleChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </form>
            )
            }
        </Formik >
    )
}