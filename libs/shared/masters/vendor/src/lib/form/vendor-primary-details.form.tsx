import { Box, Grid, Typography } from "@mui/material"
import { ADMIN_API_URL, PostVendor, useGetAllVendorCat, useGetAllVendorSubcategoriesByQuery } from "@prime-fresh/admin_api";
import { mapToValueLabelArray } from "@prime-fresh/shared/utils";
import { SelectInput, TextInput } from "@prime-fresh/ui_shared"
import { useFormikContext } from "formik";
import { arrayConstants } from "../array.constants";

export const VendorPrimaryDetails = () => {
    const { values, handleChange } = useFormikContext<PostVendor>();

    const { data: vCat } = useGetAllVendorCat(ADMIN_API_URL.GET_ALL_VENDOR_CAT);
    const vendorCategory = vCat ? mapToValueLabelArray(vCat, 'id', 'name') : [];

    const { data: vSubcat } = useGetAllVendorSubcategoriesByQuery(ADMIN_API_URL.GET_VENDOR_SUBCAT_BY_QUERY, values.category || '');
    const vendorSubcategory = vSubcat ? mapToValueLabelArray(vSubcat, 'id', 'name') : [];
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="companyName"
                    label="Vendor Company Name"
                    value={values.companyName}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <SelectInput
                    isRequired={true}
                    label="Vendor Category"
                    name="category"
                    options={vendorCategory}
                    value={values.category}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <SelectInput
                    isRequired={true}
                    label="Vendor Subcategory"
                    name="subcategory"
                    options={vendorSubcategory}
                    value={values.subcategory}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <SelectInput
                    isRequired={false}
                    label="In F&V Business Since"
                    name="inFandVBusinessSince"
                    options={arrayConstants.inFnVBusiness}
                    value={values.inFandVBusinessSince}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput
                    type="date"
                    isRequired={false}
                    name="dateOfIncorporation"
                    label="Date Of Incorporation"
                    value={values.dateOfIncorporation}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} marginY={1}>
                <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                    <Typography variant='body2' sx={{ fontWeight: 600 }}>Vendor Office Address</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="officeAddress.address1"
                    label="Address Line 1"
                    value={values.officeAddress.address1}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="officeAddress.address2"
                    label="Address Line 2"
                    value={values.officeAddress.address2}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="officeAddress.location"
                    label="Location"
                    value={values.officeAddress.location}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="officeAddress.city"
                    label="City"
                    value={values.officeAddress.city}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="officeAddress.state"
                    label="State"
                    value={values.officeAddress.state}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={3}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="officeAddress.pincode"
                    label="Pincode"
                    value={values.officeAddress.pincode}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextInput
                    type="text"
                    isRequired={true}
                    name="officeContactNo"
                    label="Office Contact Number"
                    value={values.officeContactNo}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextInput
                    type="email"
                    isRequired={false}
                    name="officeEmail"
                    label="Office Email"
                    value={values.officeEmail}
                    handleChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextInput
                    type="text"
                    isRequired={false}
                    name="website"
                    label="Office Website"
                    value={values.website}
                    handleChange={handleChange}
                />
            </Grid>
        </Grid>
    )
}