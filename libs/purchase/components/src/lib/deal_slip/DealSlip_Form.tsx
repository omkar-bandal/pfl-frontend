import React from "react";
import { Button, Grid, Typography, Stack, Box, Divider } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { dealSlipSchema, initValDealSlip, PURCHASE_ROUTES, rfpaDataState, setRFPAData, setSelectedRFPA } from "@prime-fresh/purchase/modules";
import { useDispatch } from "react-redux";
import { GetRFPA, PostDealSlip, PURCHASE_API_URL, useCreateDealSlip, useGetAllRFPA } from "@prime-fresh/purchase_api";
import { displayAddress } from "@prime-fresh/purchase/modules";
import { showNotification, useAppSelector } from "@prime-fresh/modules";
import { useNavigate } from "react-router-dom";
import { SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { appendFormData, mapToValueLabelArray } from "@prime-fresh/shared/utils";

export const DealSlipForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data: rfpa } = useGetAllRFPA(PURCHASE_API_URL.GET_ALL_RFPA);
    // const approvedRfpa = rfpa?.filter(item => item.approvalStatus === "approved");
    React.useEffect(() => {
        rfpa ? dispatch(setRFPAData(rfpa)) : dispatch(setRFPAData([]));
    }, [dispatch, rfpa]);

    const { rfpa: allrfpa, selectedRFPA } = useAppSelector(rfpaDataState);
    console.log(allrfpa);

    const handleRFPANoChange = (value: string, setFieldValue: (field: string, value: string | undefined) => void) => {
        value ? setFieldValue("rfpa", value) : setFieldValue("rfpa", '');
        const selectedRFPA = allrfpa.find(item => item.id === value);
        dispatch(setSelectedRFPA(selectedRFPA));
    }
    const { mutateAsync: mutatePost, error, data: Res } = useCreateDealSlip(PURCHASE_API_URL.POST_DEAL_SLIP);
    const handleSubmit = (values: PostDealSlip) => {
        const formData = new FormData();
        appendFormData(formData, values);
        mutatePost(formData).then(() => {
            dispatch(showNotification({ severity: 'success', message: Res ? Res.message : "Deal Slip created successfully !!!" }));
            setTimeout(() => {
                navigate(PURCHASE_ROUTES.GET_ALL_DEAL_SLIP);
            }, 3000);
        }).catch(() => {
            dispatch(showNotification({ severity: 'error', message: 'Error: ' + error?.message }));
        });;
    }
    return (
        <Formik
            initialValues={initValDealSlip}
            validationSchema={dealSlipSchema}
            onSubmit={(values) => {
                console.log(values)
                handleSubmit(values);
            }}
        >
            {({ values, handleChange, handleSubmit, setFieldValue, touched, errors }) => (
                <form onSubmit={handleSubmit}>
                    <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h4'>Deal Slip</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack direction="row" justifyContent="end" alignItems="center">
                                <Button type="submit" variant="contained" color='success' size='large' sx={{ width: 150 }}>Create</Button>
                                <Button type="reset" variant="contained" color='secondary' size='large' sx={{ width: 150, marginLeft: 2 }}>Reset</Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <SelectInput
                                isRequired={false}
                                label="Select RFPA"
                                name="rfpa"
                                value={values.rfpa}
                                options={mapToValueLabelArray<GetRFPA>(allrfpa, 'id', 'rfpaId')}
                                handleChange={handleChange}
                                onBlur={() => handleRFPANoChange(values.rfpa, setFieldValue)} />
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
                                isRequired={true}
                                label="Purchase Location"
                                name="purchaseLocation"
                                value={selectedRFPA?.purchaseLocation}
                                isReadOnly={true}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                isRequired={true}
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
                                handleChange={handleChange}
                                touched={touched}
                                errors={errors}
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextInput
                                isRequired={true}
                                label="Lot Number"
                                name="lotNo"
                                value={values.lotNo}
                                handleChange={handleChange}
                                touched={touched}
                                errors={errors}
                            />
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
                                name="remarks"
                                value={values.remarks}
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
                                value={selectedRFPA?.source === "vendor" ? selectedRFPA?.vendor?.companyName : `${selectedRFPA?.farmer?.farmerfName} ${selectedRFPA?.farmer?.farmermName} ${selectedRFPA?.farmer?.farmerlName}`}
                                isReadOnly={true} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextInput
                                isRequired={false}
                                name="code"
                                label={`${selectedRFPA?.source === "vendor" ? "Vendor" : "Farmer"} Code`}
                                value={selectedRFPA?.source === "vendor" ? selectedRFPA?.vendor?.vendorCode : selectedRFPA?.farmer?.farmerCode}
                                isReadOnly={true}
                            />
                        </Grid>
                        {selectedRFPA?.source === "vendor" &&
                            <Grid item xs={12} md={4}>
                                <TextInput
                                    isRequired={false}
                                    label="Contact Person"
                                    name="contactperson"
                                    value={`${selectedRFPA?.vendor?.vendorSaleInfo.contactFName || ''} ${selectedRFPA?.vendor?.vendorSaleInfo.contactMName || ''} ${selectedRFPA?.vendor?.vendorSaleInfo.contactLName || ''}`}
                                    isReadOnly={true}
                                />
                            </Grid>}
                        <Grid item xs={12}>
                            <TextInput
                                isRequired={false}
                                name="address"
                                label={`${selectedRFPA?.source === "vendor" ? "Company" : "Residential"} Address`}
                                value={displayAddress(selectedRFPA?.source === "vendor" ? selectedRFPA?.vendor?.officeAddress : selectedRFPA?.farmer?.residensialAddress)}
                                isReadOnly={true}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextInput
                                isRequired={false}
                                name="email"
                                label="Email"
                                value={selectedRFPA?.source === "vendor" ? selectedRFPA?.vendor?.email : selectedRFPA?.farmer?.email}
                                isReadOnly={true}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextInput
                                isRequired={false}
                                name="contactno"
                                label="Contact No"
                                value={selectedRFPA?.source === "vendor" ? selectedRFPA?.vendor?.officeContactNo : selectedRFPA?.farmer?.primaryMobileNo}
                                isReadOnly={true}
                            />
                        </Grid>
                        <Grid item xs={12} marginY={2}>
                            <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                <Typography variant='body2' sx={{ fontWeight: 600 }}>Product Required</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} padding={1}>
                            <FieldArray name="dealSlipItems">
                                {() => (
                                    <>
                                        <Grid container spacing={1} padding={1} sx={{ border: '1px solid #BDBDBD', borderRadius: 2, marginX: "auto", marginY: 1 }}>
                                            {selectedRFPA?.rfpaProducts.map((product, index) => (
                                                <React.Fragment key={index}>
                                                    <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                                                        <Typography variant="body1">Product : {index + 1}</Typography>
                                                    </Grid>
                                                    <Grid item xs={12} md={3}>
                                                        <TextInput isRequired={false} label="Product Name" name="productname" value={product.product} isReadOnly={true} />
                                                    </Grid>
                                                    <Grid item xs={12} md={1}>
                                                        <TextInput isRequired={false} label="Product Grade" name="productgrade" value={product.grade} isReadOnly={true} />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput isRequired={false} label="UOM" name="uom" value={product.uom} isReadOnly={true} />
                                                    </Grid>
                                                    <Grid item xs={4} md={1}>
                                                        <TextInput isRequired={false} label="Quantity" name="qty" value={product.quantity} isReadOnly={true} />
                                                    </Grid>
                                                    <Grid item xs={4} md={1}>
                                                        <TextInput isRequired={false} label="Unit Price" name="uprice" value={product.unitPrice} isReadOnly={true} />
                                                    </Grid>
                                                    <Grid item xs={4} md={1}>
                                                        <TextInput isRequired={false} label="Total Price" name="tprice" value={product.totalVal} isReadOnly={true} />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextInput isRequired={false} label="Description" name="description" value={product.description} isReadOnly={true} />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput isRequired={false} type="date" label="Purchase Date" name="purchaseDate" value={product.purchaseDate} isReadOnly={true} />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput isRequired={false} type="date" label="Dispatch Date" name="dispatchDate" value={product.dispatchDate} isReadOnly={true} />
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <TextInput isRequired={false} type="date" label="Delivery Date" name="deliveryDate" value={product.deliveryDate} isReadOnly={true} />
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <TextInput isRequired={false} label="Delivery Location" name="deliveryLoctn" value={product.deliveryLocation} isReadOnly={true} />
                                                    </Grid>
                                                    {selectedRFPA?.source === "farmer" &&
                                                        (<Grid item xs={2}>
                                                            <TextInput isRequired={false} type="date" label="Expected Harvest Date" name="expectedHarvestDate" value={product.expectedHarvestDate} isReadOnly={true} />
                                                        </Grid>)}
                                                </React.Fragment>
                                            ))}
                                        </Grid>
                                        <Divider />
                                    </>
                                )}
                            </FieldArray>
                        </Grid>
                    </Grid >
                </form >)
            }
        </Formik >
    );
};



