import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    Typography,
    Stack,
    Box,
    FormControl,
    Select,
    MenuItem,
    FormControlLabel,
    Radio,
    RadioGroup,
    Divider,
} from "@mui/material";
import { FieldArray, Formik } from "formik";
import { initValDealSlip, PURCHASE_ROUTES, rfpaDataState, setRFPAData, setSelectedRFPA } from "@prime-fresh/purchase/modules";
import { useDispatch } from "react-redux";
import { PURCHASE_API_URL, useCreateDealSlip, useGetAllRFPA } from "@prime-fresh/purchase_api";
import { displayAddress } from "@prime-fresh/purchase/modules";
import { useAppSelector } from "@prime-fresh/modules";
import { useNavigate } from "react-router-dom";

export const DealSlipForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [rfpano, setRFPANo] = useState<string>('');
    const { data: rfpa } = useGetAllRFPA(PURCHASE_API_URL.GET_ALL_RFPA);
    const approvedRfpa = rfpa?.filter(item => item.approvalStatus === "approved");
    React.useEffect(() => {
        rfpa ? dispatch(setRFPAData(approvedRfpa ? approvedRfpa : [])) : dispatch(setRFPAData([]));
    }, [dispatch, rfpa]);

    const { rfpa: allrfpa, selectedRFPA } = useAppSelector(rfpaDataState);
    console.log(allrfpa);

    const handleProductNameChange = (id: string) => {
        console.log(id);
    }
    const handleRFPANoChange = (value: string, setFieldValue: (field: string, value: string | undefined) => void) => {
        value ? setFieldValue("rfpa", value) : setFieldValue("rfpa", '');
        const selectedRFPA = allrfpa.find(item => item.id === value);
        dispatch(setSelectedRFPA(selectedRFPA));
    }
    const { mutateAsync: mutatePost } = useCreateDealSlip(PURCHASE_API_URL.POST_DEAL_SLIP);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    return (
        <Formik
            initialValues={initValDealSlip}
            onSubmit={(values) => {
                console.log(values);
                mutatePost(values);
                navigate(PURCHASE_ROUTES.GET_ALL_DEAL_SLIP);
            }}
        >
            {({ values, handleChange, handleSubmit, setFieldValue }) => (
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
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant='body2'>Select RFPA</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <Select
                                            id="rfpaNo"
                                            name="rfpaNo"
                                            size="small"
                                            value={rfpano}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setRFPANo(value);
                                                handleRFPANoChange(value, setFieldValue);
                                            }}
                                            MenuProps={MenuProps}
                                        >
                                            {allrfpa.map((rfpas, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={rfpas.id}
                                                >
                                                    {rfpas.rfpaId}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant='body2'>Company Name</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={selectedRFPA?.companyName}
                                        InputProps={{ readOnly: true }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant='body2'>Purchase Location</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={selectedRFPA?.purchaseLocation}
                                        InputProps={{ readOnly: true }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant='body2'>Purchase For Which Location</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={selectedRFPA?.purchaseForWhich}
                                        InputProps={{ readOnly: true }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant='body2'>Loading Location</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="loadingLocation"
                                        name="loadingLocation"
                                        value={values.loadingLocation}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant='body2'>Lot Number</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="lotNo"
                                        name="lotNo"
                                        value={values.lotNo}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant='body2'>Special Request</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="specialRequest"
                                        name="specialRequest"
                                        value={values.specialRequest}
                                        onChange={handleChange} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant='body2'>Remarks</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="remarks"
                                        name="remarks"
                                        value={values.remarks}
                                        onChange={handleChange} />
                                </Grid>
                            </Grid>
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
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant='body2'>{selectedRFPA?.source === "vendor" ? "Vendor Company Name" : "Farmer Name"}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={selectedRFPA?.source === "vendor" ? selectedRFPA?.vendor?.companyName : `${selectedRFPA?.farmer?.farmerfName} ${selectedRFPA?.farmer?.farmermName} ${selectedRFPA?.farmer?.farmerlName}`}
                                        InputProps={{ readOnly: true }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant='body2'>{selectedRFPA?.source === "vendor" ? "Vendor" : "Farmer"} Code</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={selectedRFPA?.source === "vendor" ? selectedRFPA?.vendor?.vendorCode : selectedRFPA?.farmer?.farmerCode}
                                        InputProps={{ readOnly: true }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        {selectedRFPA?.source === "vendor" &&
                            <Grid item xs={12} md={4}>
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <Typography variant='body2'>Contact Person</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            value={`${selectedRFPA?.vendor?.vendorSaleInfo.contactFName || ''} ${selectedRFPA?.vendor?.vendorSaleInfo.contactMName || ''} ${selectedRFPA?.vendor?.vendorSaleInfo.contactLName || ''}`}
                                            InputProps={{ readOnly: true }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>}
                        <Grid item xs={12}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant='body2'> {selectedRFPA?.source === "vendor" ? "Company" : "Residential"} Address</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={displayAddress(selectedRFPA?.source === "vendor" ? selectedRFPA?.vendor?.officeAddress : selectedRFPA?.farmer?.residensialAddress)}
                                        InputProps={{ readOnly: true }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant='body2'>Email</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={selectedRFPA?.source === "vendor" ? selectedRFPA?.vendor?.email : selectedRFPA?.farmer?.email}
                                        InputProps={{ readOnly: true }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container direction="column">
                                <Grid item xs={12}>
                                    <Typography variant='body2'>Contact No</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        value={selectedRFPA?.source === "vendor" ? selectedRFPA?.vendor?.officeContactNo : selectedRFPA?.farmer?.primaryMobileNo}
                                        InputProps={{ readOnly: true }}
                                    />
                                </Grid>
                            </Grid>
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
                                                        <Grid container direction="column">
                                                            <Grid item xs={12}>
                                                                <Typography variant='body2'>Product Name</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    size="small"
                                                                    value={product.product}
                                                                    InputProps={{ readOnly: true }}
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} md={1}>
                                                        <Grid container direction="column">
                                                            <Grid item xs={12}>
                                                                <Typography variant='body2'>Product Grade</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField size="small" fullWidth value={product.grade} onChange={handleChange} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <Grid container direction="column">
                                                            <Grid item xs={12}>
                                                                <Typography variant='body2'>UOM</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField size="small" fullWidth value={product.uom} onChange={handleChange} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={4} md={1}>
                                                        <Grid container direction="column">
                                                            <Grid item xs={12}>
                                                                <Typography variant='body2'>Quantity</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField size="small" type="number" fullWidth value={product.quantity} onChange={handleChange} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={4} md={1}>
                                                        <Grid container direction="column">
                                                            <Grid item xs={12}>
                                                                <Typography variant='body2'>Unit Price</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField size="small" type="number" fullWidth value={product.unitPrice} onChange={handleChange} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={4} md={1}>
                                                        <Grid container direction="column">
                                                            <Grid item xs={12}>
                                                                <Typography variant='body2'>Total Price</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField size="small" type="number" fullWidth value={product.totalVal} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Grid container direction="column">
                                                            <Grid item xs={12}>
                                                                <Typography variant='body2'>Description</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField size="small" fullWidth value={product.description} onChange={handleChange} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <Grid container direction="column">
                                                            <Grid item xs={12}>
                                                                <Typography variant='body2'>Purchase Date</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField type='date' size="small" fullWidth value={product.purchaseDate} onChange={handleChange} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <Grid container direction="column">
                                                            <Grid item xs={12}>
                                                                <Typography variant='body2'>Dispatch Date</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField type='date' size="small" fullWidth value={product.dispatchDate} onChange={handleChange} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} md={2}>
                                                        <Grid container direction="column">
                                                            <Grid item xs={12}>
                                                                <Typography variant='body2'>Delivery Date</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField type='date' size="small" fullWidth value={product.deliveryDate} onChange={handleChange} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <Grid container direction="column">
                                                            <Grid item xs={12}>
                                                                <Typography variant='body2'>Delivery Location</Typography>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField size="small" fullWidth value={product.deliveryLocation} onChange={handleChange} />
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    {selectedRFPA?.source === "farmer" &&
                                                        (<Grid item xs={2}>
                                                            <Grid container direction="column">
                                                                <Grid item xs={12}>
                                                                    <Typography variant='body2'>Expected Harvest Date</Typography>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <TextField type='date' size="small" fullWidth value={product.expectedHarvestDate} onChange={handleChange} />
                                                                </Grid>
                                                            </Grid>
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



