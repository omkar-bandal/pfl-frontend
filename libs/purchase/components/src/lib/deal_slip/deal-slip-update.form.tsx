import React from "react";
import { Grid, Typography, Box, LinearProgress, SelectChangeEvent } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { dealSlipSchema, initValDealSlip, PURCHASE_ROUTES, rfpaDataState, setRFPAData, setSelectedRFPA } from "@prime-fresh/purchase/modules";
import { useDispatch } from "react-redux";
import { GetRFPA, PostDealSlip, PURCHASE_API_URL, useGetAllRFPA, useGetDealSlip, useUpdateDealSlip } from "@prime-fresh/purchase_api";
import { displayAddress } from "@prime-fresh/purchase/modules";
import { showNotification, useAppSelector } from "@prime-fresh/modules";
import { useNavigate, useParams } from "react-router-dom";
import { FormResetBtn, FormSubmitBtn, Notification, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { appendFormData, mapToValueLabelArray } from "@prime-fresh/shared/utils";
import { ADMIN_API_URL, useGetAllFilteredFarmerData, useGetAllFilteredVendorData } from "@prime-fresh/admin_api";
import { farmersDataState, setSelectedFarmer, setSelectedVendor, vendorsDataState } from "@prime-fresh/admin/modules";

export const DealSlipUpdate = () => {
    //Get Dealslip id
    const { id } = useParams<{ id: string }>();
    const dealSlipId = id ? id : '';

    //Get Dealslip by id
    const { data: dealSlip, isLoading } = useGetDealSlip(PURCHASE_API_URL.GET_A_DEAL_SLIP, dealSlipId);
    const dealSlipData = dealSlip ? dealSlip : initValDealSlip;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    //Get RFPA data to populate fields
    const { data: allrfpas } = useGetAllRFPA(PURCHASE_API_URL.GET_ALL_RFPA);
    const approvedRfpa = allrfpas ? allrfpas?.filter(item => item.approvalStatus === "approved") : [];
    const dealSlipRFPA = dealSlipData && allrfpas?.find(item => item.id === dealSlipData.rfpa);

    const { data: farmers } = useGetAllFilteredFarmerData(ADMIN_API_URL.GET_ALL_FARMERS_FILTERED);
    const { data: vendors } = useGetAllFilteredVendorData(ADMIN_API_URL.GET_ALL_VENDORS_FILTERED);
    const { rfpa: allrfpa, selectedRFPA } = useAppSelector(rfpaDataState);
    const { selectedVendor } = useAppSelector(vendorsDataState);
    const { selectedFarmer } = useAppSelector(farmersDataState);

    React.useEffect(() => {
        const rfpaData = allrfpas ? allrfpas : [];
        allrfpas ? (
            dispatch(setSelectedRFPA(allrfpas.find(rfpa => rfpa.id === dealSlipData.rfpa))) &&
            dispatch(setRFPAData(rfpaData))
        ) : (
            dispatch(setSelectedRFPA()) &&
            dispatch(setRFPAData([]))
        );
        dealSlipRFPA?.source === "vendor" ?
            dispatch(setSelectedVendor(vendors && vendors.find(vendor => vendor.id === dealSlipRFPA?.selectedParty))) :
            dispatch(setSelectedFarmer(farmers && farmers.find(farmer => farmer.id === dealSlipRFPA?.selectedParty)))
    }, [allrfpas, dispatch, dealSlipData, dealSlipRFPA, vendors, farmers]);


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRFPANoChange = (value: any, setFieldValue: (field: string, value: string | undefined) => void) => {
        setFieldValue("rfpa", value);
        const selectedRFPA = allrfpa.find(item => item.id === value);
        dispatch(setSelectedRFPA(selectedRFPA));
    }

    //Hook to update Dealslip
    const { mutateAsync: mutatePatch, error, data: Res } = useUpdateDealSlip(PURCHASE_API_URL.UPDATE_DEAL_SLIP, dealSlipId);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (values: PostDealSlip) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePatch(formData).then(() => {
            dispatch(showNotification({ severity: 'success', message: Res ? Res.message : "Deal Slip updated successfully !!!" }));
            setTimeout(() => {
                navigate(PURCHASE_ROUTES.GET_ALL_DEAL_SLIP);
            }, 3000);
        }).catch(() => {
            dispatch(showNotification({ severity: 'error', message: 'Error: ' + error?.message }));
        });;
    }

    return (
        <>
            {isLoading ? (
                <Box sx={{ flex: 1 }} >
                    <LinearProgress />
                </Box >
            ) : (
                <Formik
                    enableReinitialize={true}
                    initialValues={dealSlipData}
                    validationSchema={dealSlipSchema}
                    onSubmit={(values) => {
                        console.log(values)
                        handleSubmit(values);
                    }}
                >
                    {({ values, handleChange, handleSubmit, setFieldValue, handleReset, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                                <Grid item xs={12} marginBottom={2}>
                                    <Typography variant='h4' component="div" sx={{ fontWeight: 600 }}>Deal Slip</Typography>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <SelectInput
                                        isRequired={false}
                                        label="Select RFPA"
                                        name="rfpa"
                                        defaultValue={selectedRFPA?.id}
                                        value={values.rfpa}
                                        options={mapToValueLabelArray<GetRFPA>(approvedRfpa, 'id', 'rfpaId')}
                                        handleChange={(e: SelectChangeEvent<unknown>) => {
                                            const value = e.target.value;
                                            handleRFPANoChange(value, setFieldValue)
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextInput
                                        isRequired={false}
                                        label="Company Name"
                                        name="companyName"
                                        value={selectedRFPA?.companyName}
                                        isReadOnly={true}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextInput
                                        isRequired={false}
                                        label="Purchase Location"
                                        name="purchaseLocation"
                                        value={selectedRFPA?.purchaseLocation}
                                        isReadOnly={true}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextInput
                                        isRequired={false}
                                        label="Purchase For Sales Location"
                                        name="purchaseForSalesLocation"
                                        value={selectedRFPA?.purchaseForSalesLocation}
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
                                        handleChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput
                                        isRequired={false}
                                        label="Remark"
                                        name="remark"
                                        value={values.remark}
                                        handleChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} marginY={2}>
                                    <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                        <Typography variant='body2' sx={{ fontWeight: 600 }}>Vendor / Farmer Information</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant='body2' component="span">Source : {selectedRFPA?.source}</Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput
                                        isRequired={false}
                                        name="selectedParty"
                                        label={selectedRFPA?.source === "vendor" ? "Vendor Company Name" : "Farmer Name"}
                                        value={selectedRFPA?.source === "vendor" ? selectedVendor?.companyName : `${selectedFarmer?.fullName}`}
                                        isReadOnly={true} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput
                                        isRequired={false}
                                        name="code"
                                        label={`${selectedRFPA?.source === "vendor" ? "Vendor" : "Farmer"} Code`}
                                        value={selectedRFPA?.source === "vendor" ? selectedVendor?.vendorCode : selectedFarmer?.farmerCode}
                                        isReadOnly={true}
                                    />
                                </Grid>
                                {selectedRFPA?.source === "vendor" &&
                                    <Grid item xs={12} md={4}>
                                        <TextInput
                                            isRequired={false}
                                            label="Contact Person"
                                            name="contactperson"
                                            value={`${selectedVendor?.contactPersonName}`}
                                            isReadOnly={true}
                                        />
                                    </Grid>}
                                <Grid item xs={12}>
                                    <TextInput
                                        isRequired={false}
                                        name="address"
                                        label={`${selectedRFPA?.source === "vendor" ? "Company" : "Residential"} Address`}
                                        value={displayAddress(selectedRFPA?.source === "vendor" ? selectedVendor?.officeAddress : selectedFarmer?.residensialAddress)}
                                        isReadOnly={true}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextInput
                                        isRequired={false}
                                        name="email"
                                        label="Email"
                                        value={selectedRFPA?.source === "vendor" ? selectedVendor?.officeEmail : selectedFarmer?.email}
                                        isReadOnly={true}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextInput
                                        isRequired={false}
                                        name="contactno"
                                        label="Contact No"
                                        value={selectedRFPA?.source === "vendor" ? selectedVendor?.officeContactNo : selectedFarmer?.primaryMobileNo}
                                        isReadOnly={true}
                                    />
                                </Grid>
                                <Grid item xs={12} marginY={1}>
                                    <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                        <Typography variant='body2' sx={{ fontWeight: 600 }}>Product Required</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <FieldArray name="dealSlipItems">
                                        {() => (
                                            <Grid container spacing={1} padding={1}>
                                                {selectedRFPA?.rfpaProducts.map((product, index) => (
                                                    <Grid container columnSpacing={1} padding={1} key={index} sx={{ display: "flex", border: '1px solid #BDBDBD', borderRadius: 2, marginX: "auto", marginY: 1 }}>
                                                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                                            <Typography variant="body1">Product : {index + 1}</Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={6}>
                                                            <TextInput isRequired={false} label="Product Name" name="productname" value={product.product} isReadOnly={true} />
                                                        </Grid>
                                                        <Grid item xs={6} md={3}>
                                                            <TextInput isRequired={false} label="Product Grade" name="productgrade" value={product.grade} isReadOnly={true} />
                                                        </Grid>
                                                        <Grid item xs={6} md={3}>
                                                            <TextInput isRequired={false} label="UOM" name="uom" value={product.uom} isReadOnly={true} />
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
                                                            (<Grid item xs={3}>
                                                                <TextInput isRequired={false} type="date" label="Expected Harvest Date" name="expectedHarvestDate" value={product.expectedHarvestDate} isReadOnly={true} />
                                                            </Grid>)}
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        )}
                                    </FieldArray>
                                </Grid>
                                <Grid item xs={12} marginY={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <FormSubmitBtn isSubmitting={isSubmitting} isError={error} label="Update" />
                                    <FormResetBtn label="Reset" handleReset={handleReset} />
                                </Grid>
                            </Grid >
                        </form >)
                    }
                </Formik >)}
            <Notification />
        </>
    );
};



