import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { Formik } from "formik";
import { dealSlipSchema, initValDealSlip, PURCHASE_ROUTES, rfpaDataState, setRFPAData, setSelectedRFPA } from "@prime-fresh/purchase/modules";
import { useDispatch } from "react-redux";
import { PostDealSlip, PURCHASE_API_URL, useCreateDealSlip, useGetAllRFPA } from "@prime-fresh/purchase_api";
import { useAppSelector } from "@prime-fresh/modules";
import { useNavigate } from "react-router-dom";
import { FarmerReadOnlyFields, FormResetBtn, FormSubmitBtn, SelectInput, TextInput, toast, VendorReadOnlyFields } from "@prime-fresh/ui_shared";
import { appendFormData, mapToValueLabelArray } from "@prime-fresh/shared/utils";
import { ADMIN_API_URL, useGetAllFilteredFarmerData, useGetAllFilteredVendorData, useGetAllProducts, useGetAllUOMs } from "@prime-fresh/admin_api";
import { farmersDataState, setSelectedFarmer, setSelectedVendor, vendorsDataState } from "@prime-fresh/admin/modules";

export const DealSlipForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: rfpa } = useGetAllRFPA(PURCHASE_API_URL.GET_ALL_RFPA);
    const rfpas = rfpa ? mapToValueLabelArray(rfpa, 'id', 'rfpaId') : [];
    const { data: Farmers } = useGetAllFilteredFarmerData(ADMIN_API_URL.GET_ALL_FARMERS_FILTERED);
    const { data: Vendors } = useGetAllFilteredVendorData(ADMIN_API_URL.GET_ALL_VENDORS_FILTERED);
    const {data: Products} = useGetAllProducts(ADMIN_API_URL.GET_ALL_PRODUCTS);
    const {data: UOM} = useGetAllUOMs(ADMIN_API_URL.GET_ALL_UOM);
    const { selectedFarmer } = useAppSelector(farmersDataState);
    const { selectedVendor } = useAppSelector(vendorsDataState);

    const { rfpa: allrfpa, selectedRFPA } = useAppSelector(rfpaDataState);
    React.useEffect(() => {
        dispatch(setSelectedRFPA());
        rfpa ? dispatch(setRFPAData(rfpa)) : dispatch(setRFPAData([]));
    }, [dispatch, rfpa]);

    const handleRFPANoChange = (value: string, setFieldValue: (field: string, value: string | undefined) => void) => {
        value ? setFieldValue("rfpa", value) : setFieldValue("rfpa", '');
        const selectedRFPA = allrfpa.find(item => item.id === value);
        console.log("Selected RFPA", selectedRFPA)
        dispatch(setSelectedRFPA(selectedRFPA));
        selectedRFPA?.source === "vendor" ?
            dispatch(setSelectedVendor(Vendors?.find(vendor => vendor.id === selectedRFPA?.selectedParty))) :
            dispatch(setSelectedFarmer(Farmers?.find(farmer => farmer.id === selectedRFPA?.selectedParty)));
        console.log("Selected Farmer: ", selectedFarmer);
        console.log("Selected Vendor", selectedVendor);
    }

    const { mutateAsync: mutatePost, error, data: Res } = useCreateDealSlip(PURCHASE_API_URL.POST_DEAL_SLIP);
    const handleSubmit = (values: PostDealSlip) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            toast.success(Res ? Res.message : "Deal Slip Created")
            setTimeout(() => {
                navigate(PURCHASE_ROUTES.GET_ALL_DEAL_SLIP);
            }, 2000);
        }).catch(() => {
            toast.error(error ? error.message : "Error while creating deal slip.")
        });;
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
                        <Grid item xs={12} md={6}>
                            <Typography variant='h4'>Deal Slip</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Create" />
                            <FormResetBtn label="Reset" handleReset={handleReset} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <SelectInput
                                isRequired={true}
                                label="Select RFPA"
                                name="rfpa"
                                value={values.rfpa}
                                options={rfpas}
                                handleChange={handleChange}
                                onBlur={() => handleRFPANoChange(values.rfpa, setFieldValue)} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextInput
                                isRequired={false}
                                label="Company Name"
                                name="companyName"
                                value={selectedRFPA?.companyName}
                                isReadOnly={true}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextInput
                                isRequired={false}
                                label="Purchase Location"
                                name="purchaseLocation"
                                value={selectedRFPA?.purchaseLocation}
                                isReadOnly={true}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextInput
                                isRequired={false}
                                label="Purchase For Which Location"
                                name="purchaseForWhich"
                                value={selectedRFPA?.purchaseForWhich}
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
                            <Typography variant='body2' component="span" sx={{ fontWeight: 700 }}>Source : {selectedRFPA?.source ? selectedRFPA?.source.charAt(0).toUpperCase() + selectedRFPA?.source.slice(1).toLowerCase() : ''}</Typography>
                        </Grid>
                        {selectedRFPA?.source === "vendor" ?
                            (<Grid item xs={12}>
                                <TextInput isRequired={false} name="companyName" label="Vendor Company Name" value={selectedVendor?.companyName} isReadOnly={true} />
                            </Grid>) :
                            (<Grid item xs={4} md={4}>
                                <TextInput isRequired={false} name="farmerName" label="Farmer Name" value={selectedFarmer?.fullName} isReadOnly={true} />
                            </Grid>)}
                        {selectedRFPA?.source === "vendor" ? <VendorReadOnlyFields /> : <FarmerReadOnlyFields />}
                        <Grid item xs={12} marginY={2}>
                            <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                <Typography variant='body2' sx={{ fontWeight: 600 }}>Product Required</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} padding={1}>
                            <Grid container spacing={1} padding={1}>
                                {selectedRFPA?.rfpaProducts.length !== 0 ?
                                    (selectedRFPA?.rfpaProducts.map((product, index) => (
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
                                                <TextInput isRequired={false} label="UOM" name="uom" value={UOM?.find(uom => uom.id === product.uom)?.unit} isReadOnly={true} />
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
                                            {selectedRFPA?.source === "farmer" &&
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
                    </Grid>
                </form >
            )}
        </Formik >
    );
};



