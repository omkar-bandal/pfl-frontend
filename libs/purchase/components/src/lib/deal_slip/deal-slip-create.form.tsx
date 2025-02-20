import { Formik } from "formik";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { dealSlipSchema, initValDealSlip, PURCHASE_ROUTES, useCreateDealSlip, useGetRFPAById } from "@prime-fresh/purchase/modules";
import { useDispatch } from "react-redux";
import { PostDealSlip } from "@prime-fresh/purchase_api";
import { useAppSelector } from "@prime-fresh/modules";
import { useNavigate } from "react-router-dom";
import { FarmerReadOnlyFields, FormResetBtn, FormSubmitBtn, PageTitle, SelectInput, TextInput, toast, VendorReadOnlyFields } from "@prime-fresh/ui_shared";
import { farmersDataState, setSelectedFarmer, setSelectedVendor, vendorsDataState } from "@prime-fresh/admin/modules";
import { mapToValueLabelArray, useGetAllRFPANums, useGetBranchesPartialData, useGetFarmersPartialData, useGetProductsPartialData, useGetUOMPartialData, useGetVendorsPartialData } from "@prime-fresh/shared/modules";

export const DealSlipForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [RFPAid, setRFPAid] = useState<string>();

    const { data: RFPA } = useGetAllRFPANums();
    const rfpas = RFPA?.data ? mapToValueLabelArray(RFPA.data, 'id', 'rfpaId') : [];


    const { data: Farmers } = useGetFarmersPartialData();
    const { data: Vendors } = useGetVendorsPartialData();
    const { data: products } = useGetProductsPartialData();
    const Products = products?.data ? products.data : [];
    const { data: uom } = useGetUOMPartialData();
    const UOMs = uom?.data ? uom.data : [];
    const { data: Locations } = useGetBranchesPartialData();
    const allPurchaseLocation = Locations?.data ? Locations.data : [];
    const { selectedFarmer } = useAppSelector(farmersDataState);
    const { selectedVendor } = useAppSelector(vendorsDataState);


    const handleRFPANoChange = useCallback((value: string, setFieldValue: (field: string, value: string | undefined) => void) => {
        console.log("Object Id:", value);
        setRFPAid("");
        if (value) {
            value ? setFieldValue("rfpa", value) : setFieldValue("rfpa", '');
            setRFPAid(value);
        }
    }, []);
    console.log("Changed RFPA Id", RFPAid);
    const { data } = useGetRFPAById(RFPAid ? RFPAid : "");
    const rfpa = data?.data ? data.data : null;

    useEffect(() => {
        rfpa?.source === "vendor" ?
            dispatch(setSelectedVendor(Vendors?.data?.find(vendor => vendor.id === rfpa?.selectedParty))) :
            dispatch(setSelectedFarmer(Farmers?.data?.find(farmer => farmer.id === rfpa?.selectedParty)));
    }, [rfpa, dispatch, Farmers?.data, Vendors?.data, selectedFarmer, selectedVendor])

    const { mutateAsync: mutatePost, error, data: Res } = useCreateDealSlip();

    const handleSubmit = (values: PostDealSlip) => {
        mutatePost(values).then(() => {
            toast.success(Res ? Res.message : "Deal Slip Created")
            setTimeout(() => {
                navigate(PURCHASE_ROUTES.GET_ALL_DEAL_SLIP);
            }, 2000);
        }).catch(() => {
            toast.error(error ? error.message : "Error while creating deal slip.")
        });
    }

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initValDealSlip}
            validationSchema={dealSlipSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={(values) => {
                console.log(values)
                handleSubmit(values);
            }}
        >
            {({ values, handleChange, handleSubmit, setFieldValue, handleReset, isSubmitting }) =>
            (
                <form onSubmit={handleSubmit}>
                    <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                        <Grid item xs={12} marginBottom={2}>
                            <PageTitle pagetitle='Deal Slip' />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <SelectInput
                                isRequired={true}
                                label="Select RFPA"
                                name="rfpa"
                                value={values.rfpa}
                                options={rfpas}
                                handleChange={(e: ChangeEvent<HTMLInputElement>) => handleRFPANoChange(e.target.value, setFieldValue)} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextInput
                                isRequired={false}
                                label="Company Name"
                                name="companyName"
                                value={rfpa?.companyName.companyName || ""}
                                isReadOnly={true}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextInput
                                isRequired={false}
                                label="Purchase Location"
                                name="purchaseLocation"
                                value={allPurchaseLocation.find(loc => loc.id === rfpa?.purchaseLocation)?.name || rfpa?.otherPurchaseLoc || ""}
                                isReadOnly={true}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextInput
                                isRequired={false}
                                label="Purchase For Sales Location"
                                name="purchaseForSalesLocation"
                                value={allPurchaseLocation.find(loc => loc.id === rfpa?.purchaseForSalesLocation)?.name || rfpa?.otherPurchaseForSalesLoc || ""}
                                isReadOnly={true}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextInput
                                isRequired={true}
                                label="Loading Location"
                                name="loadingLocation"
                                value={values.loadingLocation}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextInput
                                isRequired={true}
                                label="Lot Number"
                                name="lotNo"
                                value={values.lotNo}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextInput
                                isRequired={false}
                                label="Special Request"
                                name="specialRequest"
                                value={values.specialRequest}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextInput
                                isRequired={false}
                                label="Remark"
                                name="remark"
                                value={values.remark}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} marginY={2}>
                            <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                <Typography variant='body2' sx={{ fontWeight: 600 }}>Vendor / Farmer Information</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                            <Typography variant='body2' component="span" sx={{ fontWeight: 700 }}>Source : {rfpa?.source ? rfpa?.source.charAt(0).toUpperCase() + rfpa?.source.slice(1).toLowerCase() : ''}</Typography>
                        </Grid>
                        {rfpa?.source === "vendor" ?
                            (<Grid item xs={12}>
                                <TextInput isRequired={false} name="companyName" label="Vendor Company Name" value={selectedVendor?.companyName} isReadOnly={true} />
                            </Grid>) :
                            (<Grid item xs={12}>
                                <TextInput isRequired={false} name="farmerName" label="Farmer Name" value={selectedFarmer?.fullName} isReadOnly={true} />
                            </Grid>)}
                        {rfpa?.source === "vendor" ? <VendorReadOnlyFields /> : <FarmerReadOnlyFields />}
                        <Grid item xs={12} marginY={2}>
                            <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                <Typography variant='body2' sx={{ fontWeight: 600 }}>Product Required</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} padding={1}>
                            <Grid container spacing={1} padding={1}>
                                {rfpa?.rfpaProducts.length !== 0 && rfpa !== null ?
                                    (rfpa?.rfpaProducts.map((product, index) => (
                                        <Grid container columnSpacing={1} padding={1} key={index} sx={{ border: '1px solid #BDBDBD', borderRadius: 2, marginX: "auto", marginY: 1 }}>
                                            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                                <Typography variant="body1">Product : {index + 1}</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextInput isRequired={false} label="Product Name" name="productname" value={Products?.find(products => products.id === product.product)?.name || ''} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={6} md={3}>
                                                <TextInput isRequired={false} label="Product Grade" name="productgrade" value={product.grade} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={6} md={3}>
                                                <TextInput isRequired={false} label="UOM" name="uom" value={UOMs?.find(uom => uom.id === product.uom)?.unit} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={4} md={3}>
                                                <TextInput isRequired={false} label="Quantity" name="qty" value={product.quantity} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={4} md={3}>
                                                <TextInput isRequired={false} label="Unit Price" name="uprice" value={product.unitPrice} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={4} md={3}>
                                                <TextInput isRequired={false} label="Total Price" name="tprice" value={product.totalVal} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                                <TextInput isRequired={false} label="Delivery Location" name="deliveryLoctn" value={product.deliveryLocation} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextInput multiline maxRows={2} isRequired={false} label="Description" name="description" value={product.description} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                                <TextInput isRequired={false} type="date" label="Purchase Date" name="purchaseDate" value={product.purchaseDate} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                                <TextInput isRequired={false} type="date" label="Dispatch Date" name="dispatchDate" value={product.dispatchDate} isReadOnly={true} />
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                                <TextInput isRequired={false} type="date" label="Delivery Date" name="deliveryDate" value={product.deliveryDate} isReadOnly={true} />
                                            </Grid>
                                            {rfpa?.source === "farmer" &&
                                                (<Grid item xs={12} md={3}>
                                                    <TextInput isRequired={false} type="date" label="Expected Harvest Date" name="expectedHarvestDate" value={product.expectedHarvestDate} isReadOnly={true} />
                                                </Grid>)}
                                        </Grid>
                                    ))) :
                                    (
                                        <Typography variant="body2" component="data" color="error">Product not found in selected RFPA</Typography>
                                    )}
                            </Grid>
                        </Grid >
                        <Grid item xs={12} marginY={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Create" />
                            <FormResetBtn label="Reset" handleReset={handleReset} />
                        </Grid>
                    </Grid>
                </form >
            )}
        </Formik >
    );
};



