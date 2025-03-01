import { Add, Close } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, LinearProgress, Typography } from "@mui/material";
import { productsDataState, setProducts, setSelectedProduct } from "@prime-fresh/admin/modules";
import { arrayConstants, inventoryRouteConstants, InwardProductInitialValue, InwardRegisterInitialValue } from "@prime-fresh/inventory/modules";
import { GetInwardRegister, INVENTORY_API_URL, PostInwardRegister, useGetAInwardRegister, useUpdateInwardRegister } from "@prime-fresh/inventory_api";
import { useAppSelector } from "@prime-fresh/modules";
import { appendFormData, mapToValueLabelArray } from "@prime-fresh/shared/modules";
import { AutoCompleteInput, FormResetBtn, FormSubmitBtn, RadioGroupInput, SelectInput, TextInput, toast, VendorFarmerInfo } from "@prime-fresh/ui_shared";
import { FieldArray, Formik } from "formik";
import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export const InwardRegisterUpdateForm = () => {
    const { id } = useParams<{ id: string }>();
    const Id = id ? id : "";
    const { data: inwardData, isLoading } = useGetAInwardRegister(INVENTORY_API_URL.GET_A_INWARD_REGISTER, Id);
    const initialValueInwardRegister = inwardData ? inwardData : InwardRegisterInitialValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { data: products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
    // const { data: UOMs } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
    // const allUOMs = useMemo(() => mapToValueLabelArray(UOMs ? UOMs : [], 'id', 'unit'), [UOMs]);
    // const { data: locations } = useGetAllFilteredBranches(ADMIN_API_URL.GET_ALL_BRANCHES_FILTERED);
    // const allLocations = useMemo(() => mapToValueLabelArray(locations ? locations : [], 'id', 'name'), [locations]);
    // const { allProducts, selectedProduct } = useAppSelector(productsDataState);

    // React.useEffect(() => {
    //     dispatch(setProducts(products ? products : []));
    // }, [dispatch, products, inwardData]);

    // const handleProductNameChange = useCallback((dataId: string) => {
    //     const selectedProduct: GetProduct | undefined = allProducts.find((products) => products.id === dataId);
    //     dispatch(setSelectedProduct(selectedProduct));
    // }, [dispatch, allProducts]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const calculateNetWeight = useCallback((values: PostInwardRegister | GetInwardRegister, setFieldValue: (field: any, value: any | undefined) => void) => {
        const updatedProducts = values.inwardProducts.map((product) => ({
            ...product,
            netWeight: product.grossWeight - ((product.productContainerWeight / 1000) * product.qty),
        }));
        setFieldValue("inwardProducts", updatedProducts);
    }, []);
    const { mutateAsync, error, data } = useUpdateInwardRegister(INVENTORY_API_URL.UPDATE_INWARD_REGISTER, Id);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleUpdate = (values: any) => {
        console.log(values);
        const formData = new FormData();
        appendFormData(formData, values);
        mutateAsync(formData).then(() => {
            toast.success(data ? data.message : "Inward Register updated successfully.");
            setTimeout(() => {
                navigate(inventoryRouteConstants.GET_ALL_INWARD_REGISTERS);
            }, 2000);
        }).catch(() => {
            toast.error(error ? error.message : "Error while updating inward register.");
        })
    }
    return (
        isLoading ?
            (<Box sx={{ flex: 1 }}>
                <LinearProgress />
            </Box>) :

            <Formik
                enableReinitialize={true}
                initialValues={initialValueInwardRegister}
                onSubmit={(values) => handleUpdate(values)}>
                {
                    ({ values, handleChange, handleSubmit, handleReset, setFieldValue, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h4">
                                        Inward Register
                                    </Typography >
                                </Grid >
                                <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                    <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Create" />
                                    <FormResetBtn label="Reset" handleReset={handleReset} />
                                </Grid>
                                <Grid item xs={12}>
                                    <RadioGroupInput
                                        isRequired={true}
                                        label="Inward Type"
                                        name="inwardType"
                                        alignment="horizontal"
                                        options={arrayConstants.INWARD_TYPE.map((type) => { return { value: type, label: type } })}
                                        value={values.inwardType}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <SelectInput
                                        isRequired={false}
                                        label="Referred GRN"
                                        name="grnNo"
                                        options={[{ value: '', label: '' }]}
                                        value={values.grnNo}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <SelectInput
                                        isRequired={false}
                                        label="Referred Challan"
                                        name="deliveryChallanNo"
                                        options={[{ value: '', label: '' }]}
                                        value={values.deliveryChallanNo}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SelectInput
                                        isRequired={true}
                                        label="Company Name"
                                        name="companyName"
                                        options={arrayConstants.COMPANY_NAMES}
                                        value={values.companyName}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="batchNo"
                                        label="Batch Number"
                                        value={values.batchNo}
                                        handleChange={handleChange} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    {/* <AutoCompleteInput
                                        isRequired={true}
                                        name="location"
                                        label="Location"
                                        options={allLocations}/> */}
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput
                                        type="date"
                                        isRequired={true}
                                        name="date"
                                        label="Date"
                                        value={values.date}
                                        handleChange={handleChange} />
                                </Grid>
                                <VendorFarmerInfo<PostInwardRegister> />
                                <Grid item xs={12}>
                                    {/* <FieldArray name="inwardProducts">
                                        {({ remove, push }) => (
                                            <>
                                                {values.inwardProducts.map((_, index) => (
                                                    <Grid
                                                        container
                                                        columnSpacing={1}
                                                        key={index}
                                                        alignItems="center"
                                                        sx={{
                                                            border: `1px solid #BDBDBD`,
                                                            marginY: 1,
                                                            padding: 1,
                                                            borderRadius: 2,
                                                        }}
                                                    >
                                                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                            <Typography variant="body1" component="div">Product: {index + 1}</Typography>
                                                            {values.inwardProducts.length > 1 && <IconButton
                                                                color="error"
                                                                onClick={() => remove(index)}
                                                            >
                                                                <Close />
                                                            </IconButton>}
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <AutoCompleteInput
                                                                isRequired={true}
                                                                name={`inwardProducts.${index}.product`}
                                                                label="Product Name"
                                                                options={mapToValueLabelArray(allProducts, 'id', 'name')}
                                                                handleChange={(event, newValue) => {
                                                                    if (newValue !== null) {
                                                                        if (typeof newValue === 'string')
                                                                          setFieldValue(`inwardProducts.${index}.product`, null);
                                                                        else {
                                                                          setFieldValue(`inwardProducts.${index}.product`, newValue.value);
                                                                        }
                                                                      } else
                                                                        setFieldValue(`inwardProducts.${index}.product`, null);
                                                                    }
                                                            }
                                                                handleBlur={handleProductNameChange(values.inwardProducts[index].product)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <TextInput
                                                                isRequired={false}
                                                                isReadOnly={true}
                                                                type="text"
                                                                name="origin"
                                                                label="Origin"
                                                                value={selectedProduct?.productOrigin} />
                                                        </Grid>
                                                        <Grid item xs={12} md={3}>
                                                            <TextInput
                                                                isRequired={false}
                                                                isReadOnly={true}
                                                                type="text"
                                                                name="brand"
                                                                label="Brand"
                                                                value="" />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <SelectInput
                                                                isRequired={true}
                                                                label="Count"
                                                                name={`inwardProducts.${index}.count`}
                                                                options={selectedProduct?.count !== null ? selectedProduct?.count.map((count) => ({ value: count, label: count })) : []}
                                                                value={values.inwardProducts[index].count}
                                                                handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <SelectInput
                                                                isRequired={true}
                                                                label="Size"
                                                                name={`inwardProducts.${index}.size`}
                                                                options={selectedProduct?.size ? selectedProduct.size.map((size) => ({ value: size, label: size })) : []}
                                                                value={values.inwardProducts[index].size}
                                                                handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <SelectInput
                                                                isRequired={true}
                                                                label="Weight"
                                                                name={`inwardProducts.${index}.weight`}
                                                                options={selectedProduct?.count.map((count) => ({ value: count, label: count }))}
                                                                value={values.inwardProducts[index].weight}
                                                                handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <SelectInput
                                                                isRequired={true}
                                                                label="UOM"
                                                                name={`inwardProducts.${index}.uom`}
                                                                options={allUOMs}
                                                                value={values.inwardProducts[index].uom}
                                                                handleChange={handleChange} />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired={true}
                                                                name={`inwardProducts.${index}.qty`}
                                                                label="Quantity"
                                                                value={values.inwardProducts[index].qty}
                                                                handleChange={handleChange}
                                                                onBlur={() => calculateNetWeight(values, setFieldValue)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired={true}
                                                                name={`inwardProducts.${index}.productContainerWeight`}
                                                                label="Container Weight (in grams)"
                                                                value={values.inwardProducts[index].productContainerWeight}
                                                                handleChange={handleChange}
                                                                onBlur={() => calculateNetWeight(values, setFieldValue)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired={true}
                                                                name={`inwardProducts.${index}.grossWeight`}
                                                                label="Gross Weight"
                                                                value={values.inwardProducts[index].grossWeight}
                                                                handleChange={handleChange}
                                                                onBlur={() => calculateNetWeight(values, setFieldValue)}
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} md={4}>
                                                            <TextInput
                                                                type="number"
                                                                isRequired={false}
                                                                isReadOnly={true}
                                                                name={`inwardProducts.${index}.netWeight`}
                                                                label="Net Weight"
                                                                value={values.inwardProducts[index].netWeight}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                ))}
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "end",
                                                    }}
                                                >
                                                    <Button
                                                        variant="text"
                                                        startIcon={<Add />}
                                                        onClick={() => push(InwardProductInitialValue)}
                                                    >
                                                        Add More
                                                    </Button>
                                                </Grid>
                                            </>
                                        )}
                                    </FieldArray> */}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="purchasedBy"
                                        label="Purchased By"
                                        value={values.purchasedBy}
                                        handleChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextInput
                                        type="text"
                                        isRequired={true}
                                        name="inwardBy"
                                        label="Inwarded By"
                                        value={values.inwardBy}
                                        handleChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput
                                        type="number"
                                        isRequired={true}
                                        name="purchasedQty"
                                        label="Purchased Quantity"
                                        value={values.purchasedQty}
                                        handleChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput
                                        type="number"
                                        isRequired={true}
                                        name="inwardQtyInKg"
                                        label="Inward Quantity (in Kg)"
                                        value={values.inwardQtyInKg}
                                        handleChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput
                                        type="number"
                                        isRequired={true}
                                        name="inwardCost"
                                        label="Inward Cost"
                                        value={values.inwardCost}
                                        handleChange={handleChange}
                                    />
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
                            </Grid >
                        </form >
                    )}
            </Formik >
    )
}