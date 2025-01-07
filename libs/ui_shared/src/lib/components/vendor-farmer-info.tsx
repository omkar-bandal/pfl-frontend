import React from "react";
import { Box, Button, Grid, SelectChangeEvent, Typography } from "@mui/material";
import { AutoCompleteInput, RadioGroupInput, SelectInput, TextInput } from "../auto_form/components";
import { useFormikContext } from "formik";
import { displayAddress, PURCHASE_ARRAYS } from "@prime-fresh/purchase/modules";
import { mapToValueLabelArray } from "../auto_form/utils";
import { ADMIN_API_URL, useGetAllFilteredFarmerData, useGetAllVendorByQuery, useGetAllVendorCat, useGetAllVendorSubcategoriesByQuery } from "@prime-fresh/admin_api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADMIN_ROUTES, farmersDataState, setFilteredFarmerData, setFilteredVendorData, setSelectedFarmer, setSelectedVendor, vendorsDataState } from "@prime-fresh/admin/modules";
import { useAppSelector } from "@prime-fresh/modules";

export const VendorFarmerInfo = <T extends { source: "vendor" | "farmer", selectedParty: string | null }>({ source, selectedParty }: { source?: string, selectedParty?: string }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [vendorCat, setVendorCat] = React.useState<string>();
    const [vendorSubcat, setVendorSubcat] = React.useState<string>();

    const { data: vCat } = useGetAllVendorCat(ADMIN_API_URL.GET_ALL_VENDOR_CAT);
    const vendorCategory = vCat ? mapToValueLabelArray(vCat, 'id', 'name') : [];

    const { data: vSubcat } = useGetAllVendorSubcategoriesByQuery(ADMIN_API_URL.GET_VENDOR_SUBCAT_BY_QUERY, vendorCat || '');
    const vendorSubcategory = vSubcat ? mapToValueLabelArray(vSubcat, 'id', 'name') : [];

    const { data: vendors } = useGetAllVendorByQuery(ADMIN_API_URL.GET_VENDOR_BY_QUERY, vendorSubcat || '');
    const allVendors = vendors ? mapToValueLabelArray(vendors, 'id', 'companyName') : [];

    const { data: farmers } = useGetAllFilteredFarmerData(ADMIN_API_URL.GET_ALL_FARMERS_FILTERED);
    const allFarmers = farmers ? mapToValueLabelArray(farmers, 'id', 'fullName') : [];

    const { selectedVendor } = useAppSelector(vendorsDataState);
    const { selectedFarmer } = useAppSelector(farmersDataState);

    const { values, setFieldValue } = useFormikContext<T>();

    React.useEffect(() => {
        setFieldValue("source", source);
        setFieldValue("selectedParty", selectedParty);
    }, [source, selectedParty, setFieldValue]);

    const handleSourceChange = React.useCallback(
        (value: string) => {
            setFieldValue("source", value);
            if (value === "vendor") {
                dispatch(setFilteredVendorData(vendors || []));
            } else {
                dispatch(setFilteredFarmerData(farmers || []));
            }
        },
        [dispatch, farmers, setFieldValue, vendors]
    );

    const handlePartyNameChange = React.useCallback(
        (dataId: string) => {
            if (values.source === "vendor") {
                const selectedVendor = vendors?.find((vendor) => vendor.id === dataId);
                dispatch(setSelectedVendor(selectedVendor));
            } else if (values.source === "farmer") {
                const selectedFarmer = farmers?.find((farmer) => farmer.id === dataId);
                dispatch(setSelectedFarmer(selectedFarmer));
            }
        },
        [dispatch, farmers, values.source, vendors]
    );

    const renderVendorFields = () => {
        return (
            <>
                <Grid item xs={12} md={4}>
                    <TextInput isRequired={false} label='Vendor Code' name='vendorCode' type='text' value={`${selectedVendor?.vendorCode || ''}`} isReadOnly={true} />
                </Grid>
                <Grid item xs={12} md={8}>
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
            </>
        )
    }
    const renderFarmerFields = () => {
        return (
            <>
                <Grid item xs={12} md={2}>
                    <TextInput isRequired={false} label='Farmer Code' name='farmerCode' type='text' value={`${selectedFarmer?.farmerCode || ''}`} isReadOnly={true} />
                </Grid >
                <Grid item xs={12} md={3}>
                    <TextInput isRequired={false} label='Farmer Email' name='email' type='email' value={`${selectedFarmer?.email || ''}`} isReadOnly={true} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextInput isRequired={false} label='Farmer Contact No' name='contactNo' type='text' value={`${selectedFarmer?.primaryMobileNo || ''}`} isReadOnly={true} />
                </Grid>
                <Grid item xs={12}>
                    <TextInput isRequired={false} label='Farmer Residential Address' name='residentialAddress' type='text' value={selectedFarmer?.residensialAddress ? displayAddress(selectedFarmer?.residensialAddress) : ''} isReadOnly={true} />
                </Grid>
            </>
        )
    }
    return (
        <>
            <Grid item xs={12} marginY={2}>
                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>Vendor / Farmer Information</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
                <RadioGroupInput
                    isRequired={true}
                    label="Source : "
                    name="source"
                    options={PURCHASE_ARRAYS.source}
                    value={values.source}
                    handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        handleSourceChange(event.target.value)
                    }} />
            </Grid>
            {values.source === "vendor" &&
                <>
                    <Grid item xs={12} md={4}>
                        <SelectInput
                            isRequired={true}
                            name="vendorCategory"
                            label="Vendor Category"
                            options={vendorCategory}
                            value={vendorCat}
                            handleChange={(event: SelectChangeEvent<typeof vendorCat>) => setVendorCat(event.target.value)} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SelectInput
                            isRequired={true}
                            name="vendorSubcategory"
                            label="Vendor Subategory"
                            options={vendorSubcategory}
                            value={vendorSubcat}
                            handleChange={(event: SelectChangeEvent<typeof vendorCat>) => setVendorSubcat(event.target.value)} />
                    </Grid>
                </>
            }
            <Grid item xs={12} md={4}>
                {values.source === "vendor" ?
                    (
                        <AutoCompleteInput
                            isRequired={true}
                            name="selectedParty"
                            label="Vendor Company Name"
                            options={allVendors}
                            handleChange={(event, newValue) => {
                                if (newValue) {
                                    setFieldValue('selectedParty', newValue.value);
                                    handlePartyNameChange(newValue.value || '');
                                } else {
                                    setFieldValue('selectedParty', '');
                                    handlePartyNameChange('');
                                }
                            }} />
                    ) : (
                        <AutoCompleteInput
                            isRequired={true}
                            name="selectedParty"
                            label="Farmer Name"
                            options={allFarmers}
                            handleChange={(event, newValue) => {
                                if (newValue) {
                                    setFieldValue('selectedParty', newValue.value);
                                    handlePartyNameChange(newValue.value || '');
                                } else {
                                    setFieldValue('selectedParty', '');
                                    handlePartyNameChange('');
                                }
                            }} />
                    )}
            </Grid>
            {values.source === "vendor" ? renderVendorFields() : renderFarmerFields()}
            <Grid item xs={12} marginY={2}>
                <Box sx={{ width: '100%' }}>
                    {values.source === "vendor" ?
                        (<Typography variant='body2' sx={{ fontWeight: 600 }}>If Vendor Not Found <Button variant='text' onClick={() => navigate(ADMIN_ROUTES.CREATE_VENDOR)} >Click Here</Button></Typography>) :
                        (<Typography variant='body2' sx={{ fontWeight: 600 }}>If Farmer Not Found <Button variant='text' onClick={() => navigate(ADMIN_ROUTES.CREATE_FARMER)} >Click Here</Button></Typography>)
                    }
                </Box>
            </Grid>
        </>
    )
}