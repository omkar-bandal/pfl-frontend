import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AutoCompleteInput, RadioGroupInput, TextInput } from "../auto_form/components";
import { useFormikContext } from "formik";
import { PURCHASE_ARRAYS } from "@prime-fresh/purchase/modules";
import { mapToValueLabelArray } from "../auto_form/utils";
import { ADMIN_API_URL, useGetAllFilteredFarmerData, useGetAllFilteredVendorData, useGetAllVendorCat, useGetAllVendorSubCat } from "@prime-fresh/admin_api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADMIN_ROUTES, setFilteredFarmerData, setFilteredVendorData, setSelectedFarmer, setSelectedVendor, vendorsDataState } from "@prime-fresh/admin/modules";
import { useAppSelector } from "@prime-fresh/modules";
import { VendorReadOnlyFields } from "./vendor-readonly-fields";
import { FarmerReadOnlyFields } from "./farmer-readonly-fields";

export const VendorFarmerInfo = <T extends { source: "vendor" | "farmer", selectedParty: string | null }>({ source, selectedParty }: { source?: string, selectedParty?: string }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { values, setFieldValue } = useFormikContext<T>();
    const { data: vCat } = useGetAllVendorCat(ADMIN_API_URL.GET_ALL_VENDOR_CAT);
    const vendorCategory = vCat ? vCat : [];
    const { data: vSubcat } = useGetAllVendorSubCat(ADMIN_API_URL.GET_ALL_VENDOR_SUBCAT);
    const vendorSubcategory = vSubcat ? vSubcat : [];

    const { data: vendors } = useGetAllFilteredVendorData(ADMIN_API_URL.GET_ALL_VENDORS_FILTERED);
    const allVendors = vendors ? mapToValueLabelArray(vendors, 'id', 'companyName') : [];

    const { data: farmers } = useGetAllFilteredFarmerData(ADMIN_API_URL.GET_ALL_FARMERS_FILTERED);
    const allFarmers = farmers ? mapToValueLabelArray(farmers, 'id', 'fullName') : [];

    const { selectedVendor } = useAppSelector(vendorsDataState);
   
    React.useEffect(() => {
        source === "vendor"?
        dispatch(setSelectedVendor(vendors?.find(vendor => vendor.id === selectedParty))) :
        dispatch(setSelectedFarmer(farmers?.find(farmer => farmer.id === selectedParty)));
    }, [dispatch, selectedParty, source, farmers, vendors]);
    
    const handleSourceChange = (value: string) => {
        setFieldValue("source", value);
        if (value === "vendor") {
            dispatch(setFilteredVendorData(vendors || []));
        } else {
            dispatch(setFilteredFarmerData(farmers || []));
        }
    }

    const handlePartyNameChange = (dataId: string) => {
        if (values.source === "vendor") {
            const selectVendor = vendors?.find((vendor) => vendor.id === dataId);
            if (selectVendor) {
                dispatch(setSelectedVendor(selectVendor));
            }
        } else if (values.source === "farmer") {
            const selectedFarmer = farmers?.find((farmer) => farmer.id === dataId);
            dispatch(setSelectedFarmer(selectedFarmer));
        }
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
                    alignment="horizontal"
                    options={PURCHASE_ARRAYS.source}
                    value={values.source}
                    handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        handleSourceChange(event.target.value)
                    }} />
            </Grid>
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
            {values.source === "vendor" &&
                <>
                    <Grid item xs={12} md={4}>
                        <TextInput
                            isRequired={true}
                            name="vendorCategory"
                            label="Vendor Category"
                            value={vendorCategory.find(category => category.id === selectedVendor?.category)?.name}
                            isReadOnly={true} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextInput
                            isRequired={true}
                            name="vendorSubcategory"
                            label="Vendor Subategory"
                            value={vendorSubcategory.find(subcat => subcat.id === selectedVendor?.subcategory)?.name}
                            isReadOnly={true} />
                    </Grid>
                </>
            }
            {values.source === "vendor" ? VendorReadOnlyFields() : FarmerReadOnlyFields()}
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