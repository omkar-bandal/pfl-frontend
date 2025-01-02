import { Add, Close } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, LinearProgress, Typography } from "@mui/material";
import { ADMIN_ROUTES, farmersDataState, productsDataState, setFilteredFarmerData, setFilteredVendorData, setProducts, setSelectedFarmer, setSelectedProduct, setSelectedVendor, vendorsDataState } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, GetAllFilteredFarmerData, GetAllFilteredVendorData, GetProduct, useGetAllFilteredBranches, useGetAllFilteredFarmerData, useGetAllFilteredVendorData, useGetAllProducts, useGetAllUOMs } from "@prime-fresh/admin_api";
import { arrayConstants, inventoryRouteConstants, InwardProductInitialValue, InwardRegisterInitialValue } from "@prime-fresh/inventory/modules";
import { GetInwardRegister, INVENTORY_API_URL, PostInwardRegister, useGetAInwardRegister, useUpdateInwardRegister } from "@prime-fresh/inventory_api";
import { useAppSelector } from "@prime-fresh/modules";
import { displayAddress } from "@prime-fresh/purchase/modules";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { appendFormData, mapToValueLabelArray } from "@prime-fresh/shared/utils";
import { AutoCompleteInput, FormResetBtn, FormSubmitBtn, RadioGroupInput, SelectInput, TextInput, toast } from "@prime-fresh/ui_shared";
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
    const { data: vendors } = useGetAllFilteredVendorData(ADMIN_API_URL.GET_ALL_VENDORS_FILTERED);
    const { data: farmers } = useGetAllFilteredFarmerData(ADMIN_API_URL.GET_ALL_FARMERS_FILTERED);
    console.log("Farmer Data", farmers);
    const { data: products } = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
    const { data: UOMs } = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
    const allUOMs = useMemo(() => mapToValueLabelArray(UOMs ? UOMs : [], 'id', 'unit'), [UOMs]);
    const { data: locations } = useGetAllFilteredBranches(ADMIN_API_URL.GET_ALL_BRANCHES_FILTERED);
    const allLocations = useMemo(() => mapToValueLabelArray(locations ? locations : [], 'id', 'name'), [locations]);
    const { allVendorsFiltered, selectedVendor } = useAppSelector(vendorsDataState);
    const { allFarmersFiltered, selectedFarmer } = useAppSelector(farmersDataState);
    const { allProducts, selectedProduct } = useAppSelector(productsDataState);

    React.useEffect(() => {
        dispatch(setFilteredVendorData(vendors ? vendors : []));
        dispatch(setFilteredFarmerData(farmers ? farmers : []));
        dispatch(setProducts(products ? products : []));
        if (inwardData?.source === "vendor") {
            dispatch(setSelectedVendor(allVendorsFiltered.find(vendor => vendor.id === inwardData?.selectedParty)))
        } else {
            dispatch(setSelectedFarmer(allFarmersFiltered.find(farmer => farmer.id === inwardData?.selectedParty)));
        }
    }, [dispatch, vendors, farmers, products, inwardData, allVendorsFiltered, allFarmersFiltered]);

    const handlesSourceChange = useCallback((value: string, setFieldValue: (field: string, value: string | undefined) => void) => {
        setFieldValue("source", value);
        value === "vendor" ? dispatch(setFilteredVendorData(vendors ? vendors : [])) : dispatch(setFilteredFarmerData(farmers ? farmers : []));
    }, [dispatch, vendors, farmers])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSourceNameChange = useCallback((values: any, dataId: string) => {
        console.log("Selected Party: ", dataId);
        if (values.source === "vendor") {
            const selectedVendor: GetAllFilteredVendorData | undefined = allVendorsFiltered.find((vendor) => vendor.id === dataId);
            dispatch(setSelectedVendor(selectedVendor));
        } else if (values.source === "farmer") {
            const selectFarmer: GetAllFilteredFarmerData | undefined = allFarmersFiltered.find((farmer) => farmer.id === dataId)
            dispatch(setSelectedFarmer(selectFarmer))
        }
    }, [dispatch, allVendorsFiltered, allFarmersFiltered]);

    const handleProductNameChange = useCallback((dataId: string) => {
        const selectedProduct: GetProduct | undefined = allProducts.find((products) => products.id === dataId);
        dispatch(setSelectedProduct(selectedProduct));
    }, [dispatch, allProducts]);

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
            }, 2300);
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
                                    <FormSubmitBtn isSubmitting={isSubmitting} isError={!error} label="Create" />
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
                                    <AutoCompleteInput
                                        isRequired={true}
                                        name="location"
                                        label="Location"
                                        options={allLocations}
                                        handleChange={(event, newValue) => newValue ? setFieldValue('location', newValue.value) : setFieldValue('location', '')} />
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
                                <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                    <RadioGroupInput
                                        isRequired={true}
                                        label="Source:"
                                        name="source"
                                        options={arrayConstants.SOURCES}
                                        value={values.source}
                                        handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            handlesSourceChange(event.target.value, setFieldValue)
                                        }} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    {values.source === "vendor" ?
                                        (
                                            <AutoCompleteInput
                                                isRequired={true}
                                                name="selectedParty"
                                                label="Vendor Company Name"
                                                options={mapToValueLabelArray<GetAllFilteredVendorData>(allVendorsFiltered, 'id', 'companyName')}
                                                handleChange={(event, newValue) => newValue ? setFieldValue('selectedParty', newValue.value) : setFieldValue('selectedParty', '')}
                                                handleBlur={handleSourceNameChange(values, values.selectedParty)} />
                                        ) : (
                                            <AutoCompleteInput
                                                isRequired={true}
                                                name="selectedParty"
                                                label="Farmer Name"
                                                options={mapToValueLabelArray(allFarmersFiltered, 'id', 'fullName')}
                                                handleChange={(event, newValue) => newValue ? setFieldValue('selectedParty', newValue.value) : setFieldValue('selectedParty', '')}
                                                handleBlur={handleSourceNameChange(values, values.selectedParty)} />
                                        )}
                                </Grid>
                                {
                                    values.source === "vendor" ?
                                        (<>
                                            <Grid item xs={12} md={4}>
                                                <TextInput isRequired={false} label='Vendor Code' name='vendorCode' type='text' value={`${selectedVendor?.vendorCode || ''}`} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={12} md={4}>
                                                <TextInput isRequired={false} label='Contact Person' name='contactPerson' type='text' value={selectedVendor?.fullName} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextInput isRequired={false} label='Company Address' name='companyAddress' type='text' value={selectedVendor?.officeAddress ? displayAddress(selectedVendor?.officeAddress) : ''} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextInput isRequired={false} label='Company Email' name='email' type='email' value={`${selectedVendor?.email || ''}`} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextInput isRequired={false} label='Company Contact No' name='contactNo' type='text' value={`${selectedVendor?.officeContactNo || ''}`} isReadOnly={true} />
                                            </Grid>
                                        </>) :
                                        (<>
                                            <Grid item xs={12} md={2}>
                                                <TextInput isRequired={false} label='Farmer Code' name='farmerCode' type='text' value={`${selectedFarmer?.farmerCode || ''}`} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                                <TextInput isRequired={false} label='Farmer Email' name='email' type='email' value={`${selectedFarmer?.email || ''}`} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                                <TextInput isRequired={false} label='Farmer Contact No' name='contactNo' type='text' value={`${selectedFarmer?.primaryMobileNo || ''}`} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextInput isRequired={false} label='Farmer Residential Address' name='residentialAddress' type='text' value={selectedFarmer?.residensialAddress ? displayAddress(selectedFarmer?.residensialAddress) : ''} isReadOnly={true} />
                                            </Grid>
                                        </>)
                                }
                                <Grid item xs={12} marginY={2}>
                                    <Box sx={{ width: '100%' }}>
                                        {values.source === "vendor" ?
                                            (<Typography variant='body2' sx={{ fontWeight: 600 }}>If Vendor Not Found <Button variant='text' onClick={() => navigate(ADMIN_ROUTES.CREATE_VENDOR)} >Click Here</Button></Typography>) :
                                            (<Typography variant='body2' sx={{ fontWeight: 600 }}>If Farmer Not Found <Button variant='text' onClick={() => navigate(ADMIN_ROUTES.CREATE_FARMER)} >Click Here</Button></Typography>)
                                        }
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <FieldArray name="inwardProducts">
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
                                                                    if (newValue) {
                                                                        setFieldValue(`inwardProducts.${index}.product`, newValue.value);
                                                                    } else {
                                                                        setFieldValue(`inwardProducts.${index}.product`, '');
                                                                    }
                                                                }}
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
                                    </FieldArray>
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